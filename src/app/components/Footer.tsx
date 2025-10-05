import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 mt-10 text-gray-200 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center md:items-start justify-between gap-6 md:gap-0">
        {/* Logo */}
        <div className="flex items-center justify-center md:justify-start w-full md:w-auto">
          <Image
            src="/logo.svg"
            alt="MyShop Logo"
            width={100}
            height={100}
            className="object-contain"
          />
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-6 text-center md:text-left">
          <Link href="/" className="hover:text-white transition">
            Home
          </Link>
          <Link href="/products" className="hover:text-white transition">
            Products
          </Link>
          <Link href="/about" className="hover:text-white transition">
            About Us
          </Link>
          <Link href="/contact" className="hover:text-white transition">
            Contact
          </Link>
          <Link href="/privacy" className="hover:text-white transition">
            Privacy Policy
          </Link>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center md:justify-end gap-4">
          {/* Twitter */}
          <a href="#" className="hover:text-yellow-500 transition">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.3 4.3 0 001.88-2.37 8.56 8.56 0 01-2.72 1.04 4.28 4.28 0 00-7.3 3.9 12.14 12.14 0 01-8.81-4.47 4.28 4.28 0 001.33 5.72 4.24 4.24 0 01-1.94-.54v.05a4.28 4.28 0 003.43 4.2 4.3 4.3 0 01-1.93.07 4.28 4.28 0 004 2.97 8.57 8.57 0 01-5.3 1.83A8.79 8.79 0 012 19.54a12.08 12.08 0 006.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19 0-.38-.01-.57A8.65 8.65 0 0024 5.5a8.52 8.52 0 01-2.54.7z" />
            </svg>
          </a>
          {/* Facebook */}
          <a href="#" className="hover:text-yellow-500 transition">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 2.04c-5.52 0-10 4.48-10 10 0 4.99 3.66 9.12 8.44 9.88v-6.99h-2.54v-2.89h2.54V9.41c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.45h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.89h-2.34v6.99C18.34 21.16 22 16.99 22 12.04c0-5.52-4.48-10-10-10z" />
            </svg>
          </a>
          {/* Instagram */}
          <a href="#" className="hover:text-yellow-500 transition">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 2.2c3.2 0 3.584.012 4.85.07 1.17.056 1.956.24 2.414.398a4.92 4.92 0 011.77 1.036 4.92 4.92 0 011.036 1.77c.158.458.342 1.244.398 2.414.058 1.266.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.24 1.956-.398 2.414a4.92 4.92 0 01-1.036 1.77 4.92 4.92 0 01-1.77 1.036c-.458.158-1.244.342-2.414.398-1.266.058-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.956-.24-2.414-.398a4.92 4.92 0 01-1.77-1.036 4.92 4.92 0 01-1.036-1.77c-.158-.458-.342-1.244-.398-2.414C2.212 15.584 2.2 15.2 2.2 12s.012-3.584.07-4.85c.056-1.17.24-1.956.398-2.414a4.92 4.92 0 011.036-1.77 4.92 4.92 0 011.77-1.036c.458-.158 1.244-.342 2.414-.398C8.416 2.212 8.8 2.2 12 2.2zm0 1.8c-3.17 0-3.548.012-4.797.07-1.03.048-1.587.216-1.956.36a3.12 3.12 0 00-1.13.727 3.12 3.12 0 00-.727 1.13c-.144.37-.312.926-.36 1.956-.058 1.249-.07 1.627-.07 4.797s.012 3.548.07 4.797c.048 1.03.216 1.587.36 1.956.18.462.416.857.727 1.13.273.31.668.546 1.13.727.37.144.926.312 1.956.36 1.249.058 1.627.07 4.797.07s3.548-.012 4.797-.07c1.03-.048 1.587-.216 1.956-.36a3.12 3.12 0 001.13-.727 3.12 3.12 0 00.727-1.13c.144-.37.312-.926.36-1.956.058-1.249.07-1.627.07-4.797s-.012-3.548-.07-4.797c-.048-1.03-.216-1.587-.36-1.956a3.12 3.12 0 00-.727-1.13 3.12 3.12 0 00-1.13-.727c-.37-.144-.926-.312-1.956-.36-1.249-.058-1.627-.07-4.797-.07zM12 6.6a5.4 5.4 0 100 10.8 5.4 5.4 0 000-10.8zm0 1.8a3.6 3.6 0 110 7.2 3.6 3.6 0 010-7.2zm6.4-2.2a1.26 1.26 0 11-2.52 0 1.26 1.26 0 012.52 0z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} MyShop. All rights reserved.
      </div>
    </footer>
  );
}
