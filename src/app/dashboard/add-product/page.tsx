"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import { FiUpload } from "react-icons/fi";
import toast, { Toaster } from "react-hot-toast";

export default function AddProductPage() {
  const { data: session, status } = useSession();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [uploading, setUploading] = useState(false);

  if (status === "loading") return <p>Loading...</p>;
  if (!session) return redirect("/login");

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);
    setUploading(true);

    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      setImageUrl(data.secure_url);
      toast.success("📸 Image uploaded successfully!");
    } catch (error) {
      console.error("Upload failed:", error);
      toast.error("❌ Image upload failed!");
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!imageUrl) {
      toast.error("⚠️ Please upload an image first!");
      return;
    }

    const res = await fetch("/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, description, price, image: imageUrl }),
    });

    if (res.ok) {
      toast.success("✅ Product added successfully!");
      setName("");
      setDescription("");
      setPrice("");
      setImageUrl("");
    } else {
      toast.error("❌ Failed to add product!");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen px-4 py-8 ">
      {/* Toaster */}
      <Toaster position="top-right" reverseOrder={false} />

      <div className="bg-white mt-20 shadow-2xl rounded-3xl w-full max-w-2xl p-8 sm:p-10">
        {/* Header */}
        <div className="flex items-center justify-center mb-6">
          <h1 className="text-2xl sm:text-4xl font-bold text-gray-800 flex items-center gap-2">
            🛒 Add New Product
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Image Upload */}
          <div className="flex flex-col items-center">
            {imageUrl && (
              <div className="mb-4 relative w-40 h-40 sm:w-48 sm:h-48">
                <Image
                  src={imageUrl}
                  alt="Product Preview"
                  fill
                  className="rounded-xl border object-cover"
                />
              </div>
            )}
            <label className="cursor-pointer flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
              <FiUpload size={20} />
              {uploading ? "Uploading..." : "Upload Image"}
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
            </label>
          </div>

          {/* Product Name */}
          <input
            type="text"
            placeholder="Product Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-300 p-4 w-full rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
            required
          />

          {/* Price */}
          <input
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="border border-gray-300 p-4 w-full rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
            required
          />

          {/* Description */}
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={5}
            className="border border-gray-300 p-4 w-full rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
          />

          {/* Submit Button */}
          <button
            type="submit"
            disabled={uploading}
            className="w-full bg-yellow-500 text-gray-900 font-semibold py-4 rounded-xl hover:bg-yellow-600 transition text-lg"
          >
            {uploading ? "Please wait..." : "Add Product"}
          </button>
        </form>
      </div>
    </div>
  );
}
