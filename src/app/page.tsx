import Hero from "../app/components/Hero";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <section className="py-10">
        <h2 className="text-2xl font-bold mb-4">Product Highlights</h2>
        <p>কিছু জনপ্রিয় প্রোডাক্ট এখানে দেখানো হবে...</p>
      </section>
    </div>
  );
}
