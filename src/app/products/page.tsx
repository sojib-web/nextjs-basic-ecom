import Image from "next/image";
import Link from "next/link";

async function getProducts() {
  const res = await fetch("http://localhost:3000/api/products", {
    cache: "no-store",
  });
  return res.json();
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div className="max-w-7xl mx-auto px-4  mt-10 sm:mt-20">
      {/* Page Title */}
      <h1 className="text-4xl mt-20 sm:text-5xl font-extrabold text-center mb-12 text-gray-800 tracking-tight">
        Our Latest <span className="text-yellow-500">Products</span>
      </h1>

      {/* Responsive Grid: 1 → 2 → 3 → 4 Columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
        {products.map((p: any) => (
          <div
            key={p._id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group"
          >
            {/* Product Image with Hover Effect */}
            <div className="relative w-full h-52 sm:h-56 overflow-hidden">
              <Image
                src={p.image || "/placeholder.png"}
                alt={p.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />
            </div>

            {/* Product Info */}
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
                  className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold text-xs sm:text-sm px-4 py-2 rounded-full  transition-colors duration-300"
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
