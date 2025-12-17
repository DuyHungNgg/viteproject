import type { Product, CartItem } from "./types";

export const products: Product[] = [
  { id: 1, name: "Sofa 1", price: 2500, image: "/img/prod1.jpg", desc: "Nice sofa" },
  { id: 2, name: "Chair 2", price: 1200, image: "/img/prod2.jpg", desc: "Nice chair" },
  { id: 3, name: "Table 3", price: 1800, image: "/img/prod3.jpg", desc: "Nice table" },
];

// demo cart lưu RAM (reload server là mất)
export let cart: CartItem[] = [
  { id: 1, productId: 1, qty: 1 },
];

export function nextCartId() {
  return cart.length ? Math.max(...cart.map((x) => x.id)) + 1 : 1;
}
