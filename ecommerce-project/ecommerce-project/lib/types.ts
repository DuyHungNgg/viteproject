export type Product = {
  id: number;
  name: string;
  price: number;
  image?: string;
  desc?: string;
};

export type CartItem = {
  id: number;          // cart item id
  productId: number;
  qty: number;
};
