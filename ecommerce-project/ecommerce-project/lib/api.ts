import type { Product, CartItem } from "./types";

async function safeJson(res: Response) {
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data?.message || `Request failed (${res.status})`);
  return data;
}

// PRODUCTS
export async function apiGetProducts(): Promise<Product[]> {
  const res = await fetch("/api/products");
  return safeJson(res);
}

export async function apiGetProduct(id: number): Promise<Product> {
  const res = await fetch(`/api/products/${id}`);
  return safeJson(res);
}

// CART
export async function apiGetCart(): Promise<CartItem[]> {
  const res = await fetch("/api/cart");
  return safeJson(res);
}

export async function apiAddToCart(productId: number, qty: number) {
  const res = await fetch("/api/cart", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ productId, qty }),
  });
  return safeJson(res);
}

export async function apiUpdateCartItem(cartItemId: number, qty: number) {
  const res = await fetch(`/api/cart/${cartItemId}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ qty }),
  });
  return safeJson(res);
}

export async function apiDeleteCartItem(cartItemId: number) {
  const res = await fetch(`/api/cart/${cartItemId}`, { method: "DELETE" });
  return safeJson(res);
}
