import Link from "next/link";

interface ProductProps {
  id: string;
  name: string;
  description: string;
  price: number;
}

export default function ProductCard({
  id,
  name,
  description,
  price,
}: ProductProps) {
  return (
    <div className="border p-4 rounded shadow hover:shadow-lg">
      <h2 className="font-bold text-lg">{name}</h2>
      <p className="text-gray-600">{description}</p>
      <p className="font-semibold">Price: ${price}</p>
      <Link href={`/products/${id}`} className="text-blue-500">
        View Details
      </Link>
    </div>
  );
}
