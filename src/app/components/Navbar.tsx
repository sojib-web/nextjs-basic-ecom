"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white shadow-md fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center px-4 py-4 md:py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/logo.svg"
            alt="MyShop Logo"
            width={100}
            height={100}
            className="object-contain"
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 font-medium text-lg">
          <Link href="/" className="hover:text-yellow-400 transition">
            Home
          </Link>
          <Link href="/products" className="hover:text-yellow-400 transition">
            Products
          </Link>
          <Link href="/login" className="hover:text-yellow-400 transition">
            Login
          </Link>
          <Link
            href="/dashboard/add-product"
            className="hover:text-yellow-400 transition"
          >
            Add Product
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 text-white px-4 pt-2 pb-4 space-y-2">
          <Link
            href="/"
            className="block hover:text-yellow-400 transition"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/products"
            className="block hover:text-yellow-400 transition"
            onClick={() => setIsOpen(false)}
          >
            Products
          </Link>
          <Link
            href="/login"
            className="block hover:text-yellow-400 transition"
            onClick={() => setIsOpen(false)}
          >
            Login
          </Link>
          <Link
            href="/dashboard/add-product"
            className="block hover:text-yellow-400 transition"
            onClick={() => setIsOpen(false)}
          >
            Add Product
          </Link>
        </div>
      )}
    </nav>
  );
}
