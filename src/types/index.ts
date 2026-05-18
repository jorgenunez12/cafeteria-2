export type MenuCategory =
  | "espresso"
  | "cold-brew"
  | "signature"
  | "bakery"
  | "desserts";

export interface MenuItem {
  id: string;
  name: string;
  category: MenuCategory;
  description: string;
  price: string;
  origin?: string;
  image: string;
  tag?: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  avatar: string;
  rating: number;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  span: "tall" | "wide" | "square" | "portrait";
}

export interface ProcessStep {
  id: string;
  index: string;
  title: string;
  description: string;
  detail: string;
}

export interface NavLink {
  label: string;
  href: string;
}
