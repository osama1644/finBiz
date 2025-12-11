export type Theme = "light" | "dark";
export interface Links {
  lable: string;
  path: string;
}
export interface ButtonProps {
  px: number;
  py: number;
  pl?: number;
  rad: number;
  textColor: string;
  bgColor: string;
  borderColor?: string;
  fontWeight: number;
  fontSize: number;
}
export interface HeadeingSectionProps {
  svg: React.ReactNode;
  btnTitle: string;
  h1: string;
  p: string;
}
export interface CardData {
  planContent: string;
  planColor: string;
  DescriptionContent: string;
  DescriptionColor: string;
  price: string;
  priceColor: string;
  spanContent: string;
  spanColor: string;
  iconColor: string;
  adventages: string[];
  buttonContent: string;
  buttonColor: string;
  buttonBgColor: string;
}

export interface Testimonial {
  id: number;
  name: string;
  text: string;
  stars: number;
  img: string;
}

export interface AnalysisProps {
  id: number;
  title: string;
  price: string;
  increasedValue: string;
  sapnColor: string;
  secondSpanColor: string;
}
export interface Skelton {
  id: number;
  title: string;
  skelton1BG: string;
  skelton2BG: string;
}
export interface Post {
  id: number;
  title: string;
  body: string;
}

export interface PostsData {
  posts: Post[];
}

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}
export interface Products {
  products: Product[];
}
