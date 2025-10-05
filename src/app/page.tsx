import Hero from "../app/components/Hero";
import ProductsPage from "./products/page";

export default async function HomePage() {
  return (
    <div>
      <Hero />

      <div className="mt-0">
        <ProductsPage />
      </div>
    </div>
  );
}
