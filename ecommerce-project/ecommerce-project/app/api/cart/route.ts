import { NextResponse } from "next/server";
import { cart, nextCartId } from "@/lib/db";

export async function GET() {
  return NextResponse.json(cart);
}

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  if (!body?.productId || !body?.qty) {
    return NextResponse.json({ message: "productId & qty are required" }, { status: 400 });
  }

  const productId = Number(body.productId);
  const qty = Number(body.qty);

  // nếu đã có product trong cart thì cộng qty
  const existed = cart.find((x) => x.productId === productId);
  if (existed) {
    existed.qty += qty;
    return NextResponse.json(existed, { status: 200 });
  }

  const item = { id: nextCartId(), productId, qty };
  cart.push(item);
  return NextResponse.json(item, { status: 201 });
}
