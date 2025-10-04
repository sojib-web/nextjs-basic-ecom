async function getProducts() {
  const res = await fetch("http://localhost:3000/api/products", {
    cache: "no-store",
  });
  return res.json();
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((p: any) => (
          <div key={p._id} className="border p-4 rounded shadow">
            <h2 className="text-xl font-bold">{p.name}</h2>
            <p>{p.description}</p>
            <p className="font-semibold">Price: ${p.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
