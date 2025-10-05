import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import Product from "@/models/Product";

export async function POST(req: Request) {
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
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Error adding product" },
      { status: 500 }
    );
  }
}

export async function GET(req: Request) {
  try {
    const client = await clientPromise;
    const db = client.db("ecommerceDB");

    const products = await db.collection("products").find().toArray();
    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json(
      { message: "Error fetching products" },
      { status: 500 }
    );
  }
}
