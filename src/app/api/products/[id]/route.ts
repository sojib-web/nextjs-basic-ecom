import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

// GET single product by ID
export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;

    const client = await clientPromise;
    const db = client.db("ecommerceDB");

    const product = await db
      .collection("products")
      .findOne({ _id: new ObjectId(id) });

    if (!product)
      return NextResponse.json({ error: "Product not found" }, { status: 404 });

    return NextResponse.json(product);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Error fetching product" },
      { status: 500 }
    );
  }
}
