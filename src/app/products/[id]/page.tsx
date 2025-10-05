import Image from "next/image";

async function getProduct(id: string) {
  const res = await fetch(`http://localhost:3000/api/products/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch product");
  return res.json();
}

export default async function ProductDetails({
  params,
}: {
  params: { id: string };
}) {
  let product;
  try {
    product = await getProduct(params.id);
  } catch (err) {
    return (
      <div className="flex justify-center items-center h-screen text-gray-500 text-xl">
        Product not found!
      </div>
    );
  }

  return (
    <div className="flex justify-center mt-20 px-4 py-16 sm:px-6 sm:py-20">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Image Section */}
        <div className="relative w-full h-80 sm:h-96 md:h-[28rem] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src={product.image || "/placeholder.png"}
            alt={product.name}
            fill
            className="object-cover hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Product Info Section */}
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4 text-center md:text-left">
            {product.name}
          </h1>

          <p className="text-gray-700 text-lg leading-relaxed mb-6 text-center md:text-left">
            {product.description}
          </p>

          <div className="flex flex-col sm:flex-row items-center md:items-start gap-4 mb-6 justify-center md:justify-start">
            <span className="text-3xl font-bold text-yellow-500">
              ${product.price}
            </span>
            <span className="text-sm text-gray-500">(Tax included)</span>
          </div>

          <ul className="list-disc list-inside text-gray-600 text-sm space-y-1 mb-8 text-center md:text-left">
            <li>High quality product</li>
            <li>Fast & secure delivery</li>
            <li>100% satisfaction guaranteed</li>
          </ul>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="w-full sm:w-auto bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold py-3 px-6 rounded-full transition-all duration-300">
              Add to Cart
            </button>
            <button className="w-full sm:w-auto bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
