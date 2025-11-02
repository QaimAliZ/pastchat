"use client";

import React from "react";
import Link from "next/link";
import { characters } from "@/data/characters";

export default function HomePage() {
  const sampleCharacters = characters.slice(0, 10);

  const CharacterCard = ({ char }: { char: typeof characters[number] }) => (
    <div className="flex flex-col items-center justify-center bg-[#1a1a1a] rounded-2xl p-4 hover:bg-[#262626] transition transform hover:scale-105 shadow-lg w-48 h-48">
      <img
        src={char.image}
        alt={char.name}
        className="w-32 h-32 rounded-full object-cover mb-2 border-2 border-gray-700 shadow-md"
      />
      <span className="text-center text-gray-100 font-semibold text-md">{char.name}</span>
    </div>
  );

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-gradient-to-b from-[#0a0a0a] to-[#111111] text-gray-100 p-6">
      
      {/* Header */}
      <header className="w-full flex justify-between items-center mb-16">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
          Kronos.ai
        </h1>
        <Link
          href="/register"
          className="px-6 py-3 rounded-3xl shadow-lg text-white font-bold 
                     bg-gradient-to-r from-indigo-500 to-purple-500
                     hover:scale-105 transition-transform duration-300"
        >
          Login / Signup
        </Link>
      </header>

      {/* Hero Section */}
      <section className="text-center max-w-4xl mb-16 space-y-6">
        <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
          Chat with History’s Greatest Minds
        </h2>
        <p className="text-lg text-gray-300">
          Engage in meaningful conversations with some of the most brilliant minds from history. 
          Kronos.ai provides a polished, immersive AI experience for discovery, learning, and exploration.
        </p>
        <Link
          href="/register"
          className="mt-4 inline-block px-8 py-4 rounded-3xl shadow-lg text-white font-bold 
                     bg-gradient-to-r from-indigo-500 to-purple-500
                     hover:scale-105 transition-transform duration-300"
        >
          Start Exploring
        </Link>
      </section>

      {/* Characters Section */}
      <section className="w-full max-w-6xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center mb-12">
        {sampleCharacters.map((char) => (
          <CharacterCard key={char.id} char={char} />
        ))}
      </section>

      {/* Sleek "+ More" Line */}
      <div className="mb-16">
        <p className="text-xl md:text-2xl font-extrabold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
          …and many more brilliant minds to discover
        </p>
      </div>

      {/* Divider Line */}
      <div className="w-200 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mb-12"></div>

      {/* Why Choose Kronos.ai Section */}
      <section className="w-full max-w-6xl mb-24 text-center"> {/* increased mb-24 for extra space */}
        <h2 className="text-4xl font-extrabold mb-12 bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
          Why Choose Kronos.ai
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#1a1a1a] rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300">
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
              Interactive AI
            </h3>
            <p className="text-gray-300">
              Converse with AI-powered representations of historical figures in real-time with smooth interactions.
            </p>
          </div>
          <div className="bg-[#1a1a1a] rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300">
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
              Endless Discovery
            </h3>
            <p className="text-gray-300">
              Explore knowledge across eras, cultures, and personalities in an immersive, intuitive way.
            </p>
          </div>
          <div className="bg-[#1a1a1a] rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300">
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
              24/7 Availability
            </h3>
            <p className="text-gray-300">
              Access Kronos.ai anytime, day or night. Knowledge and conversations are always just a click away.
            </p>
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 text-center">
        <div className="bg-[#1a1a1a] rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300">
          <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
            Diverse Personalities
          </h3>
          <p className="text-gray-300">
            From scientists to world leaders, explore a wide variety of historical figures and thinkers.
          </p>
        </div>
        <div className="bg-[#1a1a1a] rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300">
          <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
            Learning Made Fun
          </h3>
          <p className="text-gray-300">
            Ask questions, gain insights, and enjoy interactive learning in a sleek, modern format.
          </p>
        </div>
        <div className="bg-[#1a1a1a] rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300">
          <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
            Immersive Experience
          </h3>
          <p className="text-gray-300">
            Smooth navigation, polished animations, and a professional interface create a premium experience.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-5 border-t border-gray-800 text-center text-gray-400 space-y-2">
        <p>© 2025 Kronos.ai — All rights reserved.</p>
        <p className="flex justify-center space-x-4">
          <Link href="/register" className="text-blue-400 hover:underline">Login</Link>
          <span>|</span>
          <Link href="/register" className="text-blue-400 hover:underline">Register</Link>
          <span>|</span>
          <Link href="/terms" className="text-blue-400 hover:underline">Terms & Conditions</Link>
          <span>|</span>
          <Link href="/privacy" className="text-blue-400 hover:underline">Privacy Policy</Link>
        </p>
      </footer>
    </div>
  );
}
