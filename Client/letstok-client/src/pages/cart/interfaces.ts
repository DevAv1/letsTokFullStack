import { Product } from "../products/interfaces";

export interface Cart {
  user?: string;
  products?: Product[],
  sumPrice?: number;
}

export interface UserProduct {
  userId: number;
  productId: number;
}