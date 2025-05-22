"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";

export const LoadingWrapper = ({ children }: { children: React.ReactNode }) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const houseRef = useRef<HTMLDivElement>(null);
  const footRef = useRef<HTMLDivElement>(null);

  const [dragX, setDragX] = useState<number>(-140); // px from right
  const [isDragging, setIsDragging] = useState(false);
  const [isFading, setIsFading] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const inactivityTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Constants for positions
  const START_RIGHT = -140; 
  const FOOT_WIDTH = 97; 
  const TARGET_RIGHT_PERCENT = 42; 
  const DROP_THRESHOLD = 40; // px, how close to target is considered a drop

  // Mobile drag state and constants
  const [mobileDrag, setMobileDrag] = useState({ x: 50, y: -110 });
  const MOBILE_TARGET_RIGHT_PERCENT = 42;
  const MOBILE_TARGET_BOTTOM = 18;
  const MOBILE_DROP_THRESHOLD = 40; // px
  const [isMobileDragging, setIsMobileDragging] = useState(false);
  const [mobileAtTarget, setMobileAtTarget] = useState(false);

  // Calculate the target X position in px relative to the right of the house container
  const getTargetRight = () => {
    if (!houseRef.current) return 0;
    const containerWidth = houseRef.current.offsetWidth;
    // Target is right: 42%
    return containerWidth * 0.42;
  };

  // Calculate the start X position in px (from right of container)
  const getStartRight = () => {
    return START_RIGHT; // Always -140
  };

  // Calculate mobile target right in px
  const getMobileTargetRight = () => {
    if (!houseRef.current) return 0;
    return houseRef.current.offsetWidth * (MOBILE_TARGET_RIGHT_PERCENT / 100);
  };

  // Fade out function (shared by drag success and inactivity)
  const triggerFadeOut = () => {
    if (isFading) return;
    setTimeout(() => {
      if (wrapperRef.current) {
        gsap.to(wrapperRef.current, {
          opacity: 0,
          duration: 0.7,
          onComplete: () => {
            setIsFading(true);
            setIsHidden(true);
          },
        });
      }
    }, 100);
  };

  // Inactivity timer logic
  const resetInactivityTimer = () => {
    if (inactivityTimerRef.current) {
      clearTimeout(inactivityTimerRef.current);
    }
    inactivityTimerRef.current = setTimeout(() => {
      triggerFadeOut();
    }, 20000); // 20 seconds
  };

  // Start inactivity timer on mount
  useEffect(() => {
    resetInactivityTimer();
    return () => {
      if (inactivityTimerRef.current) {
        clearTimeout(inactivityTimerRef.current);
      }
    };
  }, []);

  // Reset inactivity timer on drag/key events
  const handleUserInteraction = () => {
    if (!isFading) resetInactivityTimer();
  };

  // Drag Handlers
  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    setIsDragging(true);
    document.body.style.userSelect = "none";
    handleUserInteraction();
  };

  const handleDragMove = (e: MouseEvent | TouchEvent) => {
    if (!isDragging || !houseRef.current) return;
    let clientX = 0;
    if (e instanceof TouchEvent) {
      clientX = e.touches[0].clientX;
    } else {
      clientX = e.clientX;
    }
    const rect = houseRef.current.getBoundingClientRect();
    // Calculate the right position: distance from the right edge
    let x = rect.right - clientX - FOOT_WIDTH / 2;
    // Clamp x between -140 (start) and targetRight (end)
    const targetRight = getTargetRight();
    x = Math.max(START_RIGHT, Math.min(x, targetRight));
    setDragX(x);
    handleUserInteraction();
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    document.body.style.userSelect = "";
    handleUserInteraction();
    // Check if dropped in target
    const targetRight = getTargetRight();
    if (Math.abs(dragX - targetRight) < DROP_THRESHOLD) {
      // Success: fade out
      triggerFadeOut();
    } else {
      // Animate back to start
      setDragX(getStartRight());
    }
  };

  // Mouse/touch event listeners
  useEffect(() => {
    if (!isDragging) return;
    const move = (e: MouseEvent | TouchEvent) => handleDragMove(e);
    const up = () => handleDragEnd();
    window.addEventListener("mousemove", move);
    window.addEventListener("touchmove", move);
    window.addEventListener("mouseup", up);
    window.addEventListener("touchend", up);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("touchmove", move);
      window.removeEventListener("mouseup", up);
      window.removeEventListener("touchend", up);
    };
    // eslint-disable-next-line
  }, [isDragging, dragX]);

  // Set initial position on mount and resize
  useEffect(() => {
    const setInitial = () => setDragX(getStartRight());
    setInitial();
    window.addEventListener("resize", setInitial);
    return () => window.removeEventListener("resize", setInitial);
    // eslint-disable-next-line
  }, []);

  // Keyboard accessibility: left/right arrows to move, enter/space to drop
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (isFading) return;
    handleUserInteraction();
    const targetRight = getTargetRight();
    if (e.key === "ArrowLeft") {
      // Move left (decrease right, i.e., move paw to the left)
      setDragX((prev) => {
        const next = prev + 20;
        return Math.min(targetRight, next);
      });
    } else if (e.key === "ArrowRight") {
      // Move right (increase right, i.e., move paw to the right)
      setDragX((prev) => {
        const next = prev - 20;
        return Math.max(START_RIGHT, next);
      });
    } else if (e.key === "Enter" || e.key === " ") {
      // Try drop
      handleDragEnd();
    }
  };

  // Mobile drag handlers
  const handleMobileDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    setIsMobileDragging(true);
    document.body.style.userSelect = "none";
    handleUserInteraction();
  };

  const handleMobileDragMove = (e: MouseEvent | TouchEvent) => {
    if (!isMobileDragging || !houseRef.current) return;
    let clientX = 0;
    let clientY = 0;
    if (e instanceof TouchEvent) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = e.clientX;
      clientY = e.clientY;
    }
    const rect = houseRef.current.getBoundingClientRect();
    // Calculate right and bottom positions
    let x = rect.right - clientX - 22; // 22 = paw width/2 (44/2)
    let y = rect.bottom - clientY - 20; // 20 = paw height/2 (40/2)
    // Clamp x and y
    const targetRight = getMobileTargetRight();
    x = Math.max(0, Math.min(x, rect.width));
    y = Math.max(-110, Math.min(y, rect.height));
    setMobileDrag({ x, y });
    handleUserInteraction();
  };

  const handleMobileDragEnd = () => {
    setIsMobileDragging(false);
    document.body.style.userSelect = "";
    handleUserInteraction();
    // Check if dropped in target
    const targetRight = getMobileTargetRight();
    if (
      Math.abs(mobileDrag.x - targetRight) < MOBILE_DROP_THRESHOLD &&
      Math.abs(mobileDrag.y - MOBILE_TARGET_BOTTOM) < MOBILE_DROP_THRESHOLD
    ) {
      // Snap to target and fade out
      setMobileAtTarget(true);
      triggerFadeOut();
    } else {
      // Animate back to start
      setMobileDrag({ x: 50, y: -110 });
      setMobileAtTarget(false);
    }
  };

  // Mobile mouse/touch event listeners
  useEffect(() => {
    if (!isMobileDragging) return;
    const move = (e: MouseEvent | TouchEvent) => handleMobileDragMove(e);
    const up = () => handleMobileDragEnd();
    window.addEventListener("mousemove", move);
    window.addEventListener("touchmove", move);
    window.addEventListener("mouseup", up);
    window.addEventListener("touchend", up);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("touchmove", move);
      window.removeEventListener("mouseup", up);
      window.removeEventListener("touchend", up);
    };
    // eslint-disable-next-line
  }, [isMobileDragging, mobileDrag]);

  return (
    <>
      {children}
      <div className="overflow-hidden" ref={wrapperRef} style={{ display: isHidden ? "none" : "block" }}>
        <div className="bg-background fixed inset-0 z-50 flex flex-col items-center justify-center">
          <div
            ref={houseRef}
            className="relative w-[281px] h-[209px] lg:w-[619px] lg:h-[447px] mb-[144px]"
          >
            <Image src="/images/loading-house.svg" alt="Loading" fill />


            {/* show in large screen */}
            <div
              ref={footRef}
              className="absolute bottom-[30px] w-[45px] h-[41px] lg:w-[97px] lg:h-[90px] cursor-pointer z-10 outline-none  hidden lg:block"
              style={{
                right: dragX,
                transition: isDragging
                  ? "none"
                  : "right 0.4s cubic-bezier(0.4,0,0.2,1)",
              }}
              tabIndex={0}
              aria-label="Drag the paw to the house to open the door"
              onMouseDown={handleDragStart}
              onTouchStart={handleDragStart}
              onKeyDown={handleKeyDown}
              role="button"
            >
              <Image
                src="/images/pet-foot.svg"
                alt="Drag paw"
                fill
                draggable={false}
              />
            </div>



            {/* show in small screen */}
            <div
              ref={footRef}
              className="absolute w-[44px] h-[40px] cursor-pointer z-10 outline-none block lg:hidden"
              style={
                mobileAtTarget
                  ? {
                      right: '42%',
                      bottom: '18px',
                      transition: isMobileDragging
                        ? "none"
                        : "right 0.4s cubic-bezier(0.4,0,0.2,1), bottom 0.4s cubic-bezier(0.4,0,0.2,1)",
                    }
                  : {
                      right: mobileDrag.x,
                      bottom: mobileDrag.y,
                      transition: isMobileDragging
                        ? "none"
                        : "right 0.4s cubic-bezier(0.4,0,0.2,1), bottom 0.4s cubic-bezier(0.4,0,0.2,1)",
                    }
              }
              tabIndex={0}
              aria-label="Drag the paw to the house to open the door"
              onMouseDown={handleMobileDragStart}
              onTouchStart={handleMobileDragStart}
              onKeyDown={handleKeyDown}
              role="button"
            >
              <Image
                src="/images/pet-foot.svg"
                alt="Drag paw"
                fill
                draggable={false}
              />
            </div>

          </div>


          
          <p className=" text-[14px] lg:text-[20px] max-w-[327px] lg:max-w-full font-medium text-center text-secondary font-poppins">
            Your furry friends feel right at home here! Drag the paw to the
            house to open the door.
          </p>
        </div>
      </div>
    </>
  );
};
