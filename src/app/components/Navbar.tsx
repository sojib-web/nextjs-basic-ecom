"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900  text-white shadow-md fixed w-full z-50 transition-colors">
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
        <div className="hidden md:flex space-x-6 font-medium text-lg items-center">
          <Link href="/" className="hover:text-yellow-400 transition-colors">
            Home
          </Link>
          <Link
            href="/products"
            className="hover:text-yellow-400 transition-colors"
          >
            Products
          </Link>
          <Link
            href="/login"
            className="hover:text-yellow-400 transition-colors"
          >
            Login
          </Link>
          <Link
            href="/dashboard/add-product"
            className="hover:text-yellow-400 transition-colors"
          >
            Add Product
          </Link>

          {/* Theme Toggle Button */}
          <ThemeToggle />
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
        <div className="md:hidden bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white px-4 pt-2 pb-4 space-y-2 transition-colors">
          <Link
            href="/"
            className="block hover:text-yellow-400 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/products"
            className="block hover:text-yellow-400 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Products
          </Link>
          <Link
            href="/login"
            className="block hover:text-yellow-400 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Login
          </Link>
          <Link
            href="/dashboard/add-product"
            className="block hover:text-yellow-400 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Add Product
          </Link>

          {/* Mobile Theme Toggle */}
          <ThemeToggle />
        </div>
      )}
    </nav>
  );
}
