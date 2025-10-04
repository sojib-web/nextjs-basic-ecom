"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-purple-100 px-4">
      {/* Login Card */}
      <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 sm:p-10 text-center">
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <Image src="/logo.svg" alt="MyShop Logo" width={80} height={80} />
        </div>

        {/* Shop Name */}
        <div className="flex justify-center mb-6">
          <h1 className="text-4xl font-bold text-gray-900 tracking-wider">
            MyShop
          </h1>
        </div>

        {/* Welcome */}
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Welcome Back!</h2>
        <p className="text-gray-600 mb-6">
          Sign in to continue shopping the latest products.
        </p>

        {/* Email Input */}
        <div className="flex flex-col gap-4 mb-6">
          <input
            type="email"
            placeholder="Email address"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
          <button className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition">
            Sign in
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center mb-6">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-2 text-gray-400">OR</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Google Login Button */}
        <button
          onClick={() => signIn("google", { callbackUrl: "/products" })}
          className="flex items-center justify-center gap-3 w-full py-3 mb-4 rounded-xl border border-gray-300 hover:bg-gray-100 text-gray-800 font-semibold transition"
        >
          <FcGoogle size={24} />
          Sign in with Google
        </button>

        {/* Footer */}
        <p className="text-gray-500 mt-4">
          Don't have an account?{" "}
          <span className="text-blue-600 font-semibold cursor-pointer hover:underline">
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
}
