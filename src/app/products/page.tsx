// Optional: যদি client-side interactivity লাগে
import Image from "next/image";
import Link from "next/link";

// ✅ Define Product type
type Product = {
  _id: string;
  name: string;
  description: string;
  price: number;
  image?: string;
};

// ✅ Fetch products from API
async function getProducts(): Promise<Product[]> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

  const res = await fetch(`${baseUrl}/api/products`, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div className="max-w-7xl mx-auto px-4 mt-10 sm:mt-20">
      <h1 className="text-4xl mt-20 sm:text-5xl font-extrabold text-center mb-12 text-gray-800 tracking-tight">
        Our Latest <span className="text-yellow-500">Products</span>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
        {products.map((p) => (
          <div
            key={p._id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group"
          >
            <div className="relative w-full h-52 sm:h-56 overflow-hidden">
              <Image
                src={p.image || "/placeholder.png"}
                alt={p.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />
            </div>

            <div className="p-5 flex flex-col justify-between h-44">
              <div>
                <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1 truncate">
                  {p.name}
                </h2>
                <p className="text-gray-600 text-sm sm:text-base line-clamp-2">
                  {p.description}
                </p>
              </div>

              <div className="flex items-center justify-between mt-4">
                <p className="text-lg font-bold text-gray-900">${p.price}</p>
                <Link
                  href={`/products/${p._id}`}
                  className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold text-xs sm:text-sm px-4 py-2 rounded-full transition-colors duration-300"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
