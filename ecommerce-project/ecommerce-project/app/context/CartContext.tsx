"use client";

import React, { createContext, useContext, useMemo, useState } from "react";

export type CartItem = {
  id: number;
  name: string;
  price: number;
  qty: number;
  image?: string;
};

type CartContextValue = {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  updateQty: (id: number, qty: number) => void;
  removeItem: (id: number) => void;
  subtotal: number;
  total: number;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = (item: CartItem) => {
    setItems((prev) => {
      const existed = prev.find((x) => x.id === item.id);
      if (!existed) return [...prev, item];
      return prev.map((x) =>
        x.id === item.id ? { ...x, qty: x.qty + item.qty } : x
      );
    });
  };

  const updateQty = (id: number, qty: number) => {
    setItems((prev) =>
      prev.map((x) => (x.id === id ? { ...x, qty: Math.max(1, qty) } : x))
    );
  };

  const removeItem = (id: number) => {
    setItems((prev) => prev.filter((x) => x.id !== id));
  };

  const subtotal = useMemo(
    () => items.reduce((sum, x) => sum + x.price * x.qty, 0),
    [items]
  );

  // nếu chưa có ship/tax thì total = subtotal
  const total = subtotal;

  const value: CartContextValue = {
    items,
    addItem,
    updateQty,
    removeItem,
    subtotal,
    total,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}



