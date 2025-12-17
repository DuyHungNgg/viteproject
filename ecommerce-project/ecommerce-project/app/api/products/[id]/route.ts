import { NextResponse } from "next/server";
import { cart } from "@/lib/db";

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
  const id = Number(params.id);
  const item = cart.find((x) => x.id === id);
  if (!item) return NextResponse.json({ message: "Cart item not found" }, { status: 404 });

  const body = await req.json().catch(() => null);
  const qty = Number(body?.qty);

  if (!Number.isFinite(qty) || qty < 1) {
    return NextResponse.json({ message: "qty must be >= 1" }, { status: 400 });
  }

  item.qty = qty;
  return NextResponse.json(item);
}

export async function DELETE(_: Request, { params }: { params: { id: string } }) {
  const id = Number(params.id);
  const idx = cart.findIndex((x) => x.id === id);
  if (idx === -1) return NextResponse.json({ message: "Cart item not found" }, { status: 404 });

  cart.splice(idx, 1);
  return NextResponse.json({ ok: true });
}
