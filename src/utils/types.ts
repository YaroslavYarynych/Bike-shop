export interface EntityType {
  id: number;
  title: string;
  brand: string;
  model: string;
  price: number;
  year: number;
  category: string;
  condition: string;
  description: string;
  image: string;
}

export type Cart = Pick<
  EntityType,
  "id" | "title" | "brand" | "model" | "price" | "image"
> & { quantity: number };

export interface DataState {
  products: EntityType[];
  favourites: EntityType[];
  sortOption: string;
  order: string;
  isBought: boolean;
}

export interface CartState {
  cart: Cart[];
}

export interface FavState {
  favourites: EntityType[];
}
