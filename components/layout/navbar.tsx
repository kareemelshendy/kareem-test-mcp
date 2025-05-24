import Image from "next/image";
import Link from "next/link";
import { NavbarToggleMenu } from "./navbar-toggle-menu";

export const Navbar = () => {

  const links = [
    {
      title: "About Us",
      path: "/about-us",
    },
    {

      title: "Our Services",
      path: "/our-services",
    },
    {
      title: "FAQs",
      path: "/faqs",
    },
    {
      title: "Our Facilities",
      path: "/our-facilities",
    },
    {
      title: "Contact Us",
      path: "/contact-us",
    },
  ];  

  return (
    <header className="pt-[40px] lg:pt-0">
      <div className="hidden lg:block bg-primary h-[11px] w-full rounded-b-full mb-[32px]">
        <div className="container flex justify-end">
          <button className="w-[131px] h-[85px] px-[20px] py-[30px] bg-primary  rounded-default rounded-t-none text-white font-bold text-[16px] uppercase font-poppins relative">
            {" "}
            <div className="absolute -top-[1px] -left-[24px] -right-[24px]">
              <Image
                src="/images/shape.svg"
                alt="logo"
                width={179}
                height={20}
              />
            </div>
            <span className="absolute inset-0 flex items-center justify-center  text-white font-bold text-[16px] capitalize cursor-pointer">
              book now
            </span>
          </button>
        </div>
      </div>
      <nav className=" flex items-center gap-[32px] xl:gap-[114px] h-[64px] container justify-between lg:justify-start">
        <Link href="/" className="">
          <h1 className="relative w-[93px] h-[40px] lg:w-[150px] lg:h-[64px]">
            <Image
              src="/images/petzania-logo.svg"
              alt="logo"
              fill className="object-contain"
            />
          </h1>
        </Link>

        <ul className="hidden lg:flex gap-[32px] xl:gap-[64px] items-center ">
          {links.map((link) => (
            <li key={link.path}>
              <Link
                className="text-[16px] font-medium font-poppins hover:font-extrabold transition-colors duration-300"
                href={link.path}
              > 
                {link.title}
              </Link>
            </li>
          ))} 

      
        </ul>
      <NavbarToggleMenu  links={links}/>
      </nav>

    </header>
  );
};
