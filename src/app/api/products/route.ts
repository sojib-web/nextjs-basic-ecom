import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

// GET all products
export async function GET(req: NextRequest) {
  try {
    const client = await clientPromise;
    const db = client.db("ecommerceDB");

    const products = await db.collection("products").find().toArray();
    return NextResponse.json(products);
  } catch (_error) {
    console.error(_error);
    return NextResponse.json(
      { message: "Error fetching products" },
      { status: 500 }
    );
  }
}

// POST new product
export async function POST(req: NextRequest) {
  try {
    const { name, price, description, image } = await req.json();

    const client = await clientPromise;
    const db = client.db("ecommerceDB");

    const product = await db.collection("products").insertOne({
      name,
      price,
      description,
      image,
      createdAt: new Date(),
    });

    return NextResponse.json({ message: "Product added", product });
  } catch (_error) {
    console.error(_error);
    return NextResponse.json(
      { message: "Error adding product" },
      { status: 500 }
    );
  }
}
