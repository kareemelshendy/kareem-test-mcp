export interface Facility {
  id: number;
  title: string;
  description: string;
  location: string;
  phone: string;
  services: Service[];
}

interface Service {
  title: string;
  image: string;
  alt: string;
  icon: string;
  thumbnailLabel: string;
  starsRotation: string;
}
