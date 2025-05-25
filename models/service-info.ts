export interface ServiceInfo {
  title: string;
  icon: React.ReactNode;
  thumbnailLabel: string;
  starsRotation: string;
  image: string;
  alt: string;
  description?: string;
  items?: ServiceAction[];
  faqs?: {
    title: string;
    desc: string;
  }[];
}


export interface ServiceAction {
    label: string;
    href?: string;
    onClick?: () => void;
    // ariaLabel: string;
    subTitle?: string;
    title: string;
  };