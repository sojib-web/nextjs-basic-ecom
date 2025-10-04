import { NextResponse } from "next/server";
import { connectDB } from "../../../lib/mongodb";
import Product from "@/models/Product";

export async function GET() {
  await connectDB();

  try {
    const products = await Product.find({});
    return NextResponse.json(products);
  } catch (error) {
    console.error("Failed to fetch products:", error);
    return NextResponse.json([], { status: 500 });
  }
}
