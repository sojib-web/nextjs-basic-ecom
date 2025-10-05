import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export async function GET(req: Request, context: { params: { id: string } }) {
  try {
    const { id } = context.params; // শুধু access করো, await নয়

    const client = await clientPromise;
    const db = client.db("ecommerceDB");

    const product = await db
      .collection("products")
      .findOne({ _id: new ObjectId(id) });

    if (!product)
      return NextResponse.json({ error: "Not found" }, { status: 404 });

    return NextResponse.json(product);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Error fetching product" },
      { status: 500 }
    );
  }
}
