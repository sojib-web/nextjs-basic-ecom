import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen  text-gray-800">
      <h1 className="text-6xl font-extrabold mb-4">404</h1>
      <p className="text-xl mb-6">Oops! Page not found.</p>
      <Link
        href="/"
        className="px-6 py-3 bg-yellow-500 text-gray-900 font-semibold rounded-full hover:bg-yellow-600 transition"
      >
        Go to Home
      </Link>
    </div>
  );
}
