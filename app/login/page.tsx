"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase-client";
import { saveSession } from "@/lib/auth-client";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setError(null);
    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    try {
      setLoading(true);
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) throw error;
      saveSession(data.session);
      router.push("/chat");
    } catch (err: any) {
      setError(err.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-[#0c0c0c] to-[#111111] relative">
      {/* Top-left clickable logo */}
      <div
        className="absolute top-6 left-6 cursor-pointer z-50"
        onClick={() => router.push("/")}
      >
        <h1 className="text-3xl md:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
          kronos.ai
        </h1>
      </div>

      {/* Left Side: Welcome / Info */}
      <div className="hidden md:flex w-1/2 bg-gradient-to-br from-blue-950 via-indigo-950 to-purple-950 items-center justify-center p-12">
        <div className="text-white max-w-lg">
          <h1 className="text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Welcome Back!
          </h1>
          <p className="text-lg mb-6">
            Log in to meet legends of history, share ideas, and discover what the past can teach you today.
          </p>
          <p className="text-blue-300 font-medium">
            The past is waiting — continue where you left off.
          </p>
        </div>
      </div>

      {/* Right Side: Login Form */}
      <div className="flex w-full md:w-1/2 items-center justify-center p-8">
        <div className="w-full max-w-md bg-[#1b1b1b]/80 backdrop-blur-md rounded-3xl shadow-xl p-10 flex flex-col items-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-10 leading-snug">
            Login
          </h1>

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mb-5 w-full p-4 rounded-2xl bg-[#2a2a2a]/80 text-white border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mb-5 w-full p-4 rounded-2xl bg-[#2a2a2a]/80 text-white border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition"
          />

          {error && (
            <div className="bg-red-600/90 text-white px-4 py-3 rounded-2xl mb-5 text-center w-full font-medium animate-pulse">
              {error}
            </div>
          )}

          <button
            onClick={handleLogin}
            disabled={loading}
            className="w-full p-4 mb-5 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 rounded-2xl text-white font-semibold text-lg transition-all duration-300 shadow-lg hover:scale-105 disabled:opacity-60"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          <p className="text-gray-400">
            Don’t have an account?{" "}
            <span
              onClick={() => router.push("/register")}
              className="text-blue-400 cursor-pointer hover:underline font-medium"
            >
              Register
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
