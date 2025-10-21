export interface ProductType {
  $id: string;
  name: string;
  price?: number;
  image?: string;
  description?: string;
  category?: string;
  stock?: boolean;
  popular?: boolean;
}