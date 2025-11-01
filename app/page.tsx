"use client";

import React from "react";
import Link from "next/link";
import { characters } from "@/data/characters";

export default function HomePage() {
  // Pick first 10 characters to display on the homepage
  const sampleCharacters = characters.slice(0, 10);

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-[#0a0a0a] text-gray-100 p-6">
      {/* Header */}
      <header className="w-full flex justify-between items-center mb-12">
        <h1 className="text-4xl font-bold">Welcome to PastChat!</h1>
        <Link
          href="/login"
          className="bg-indigo-600 hover:bg-indigo-500 transition text-white px-6 py-3 rounded-xl shadow-lg"
        >
          Login / Signup
        </Link>
      </header>

      {/* Description */}
      <section className="text-center max-w-2xl mb-12">
        <p className="text-lg">
          Chat with the most famous historical figures, scientists, and thinkers! 
          Discover insights, ask questions, and enjoy conversations with personalities such as Einstein, Genghis Khan, and more.
        </p>
      </section>

      {/* Sample Characters */}
      <section className="w-full max-w-6xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-12">
        {sampleCharacters.map((char: typeof characters[number]) => (
          <div
            key={char.id}
            className="flex flex-col items-center bg-[#151515]/80 rounded-2xl p-4 hover:bg-[#1f1f1f]/90 transition shadow-lg cursor-pointer"
          >
            <img
              src={char.image}
              alt={char.name}
              className="w-20 h-20 rounded-full object-cover mb-3 border-2 border-gray-700 shadow-md"
            />
            <span className="text-center text-gray-200 font-medium">{char.name}</span>
          </div>
        ))}
      </section>

      {/* Disclaimer */}
      <section className="max-w-2xl text-center text-gray-400 text-sm">
        <p>Unlimited messages for now. Paid plans and message limits coming soon!</p>
      </section>
    </div>
  );
}
