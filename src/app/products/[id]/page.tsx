async function getProduct(id: string) {
  const res = await fetch(`http://localhost:3000/api/products/${id}`, {
    cache: "no-store",
  });
  return res.json();
}

export default async function ProductDetails({
  params,
}: {
  params: { id: string };
}) {
  const product = await getProduct(params.id);

  if (!product) return <h1>Product not found!</h1>;

  return (
    <div className="p-6 border rounded shadow">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <p>{product.description}</p>
      <p className="mt-2 font-semibold">Price: ${product.price}</p>
    </div>
  );
}
