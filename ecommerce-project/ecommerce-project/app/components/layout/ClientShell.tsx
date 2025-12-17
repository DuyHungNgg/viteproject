"use client";

import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CartOverlay from "../overlay/CartOverlay";

export default function ClientShell({ children }: { children: React.ReactNode }) {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Header onOpenCart={() => setIsCartOpen(true)} />

      {/* CONTENT mọi trang */}
      <main className="flex-1">{children}</main>

      <Footer />

      <CartOverlay isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
}
