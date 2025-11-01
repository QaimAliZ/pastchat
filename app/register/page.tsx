"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase-client";
import { saveSession } from "@/lib/auth-client";

export default function RegisterPage() {
  const router = useRouter();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    setError(null);
    if (!firstName || !lastName || !email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    try {
      setLoading(true);
      const { data, error } = await supabase.auth.signUp(
        {
          email,
          password,
          options: {
            data: { firstName, lastName },
            // Redirect to production chat page after confirmation
            emailRedirectTo: "https://pastchat.vercel.app/chat",
          },
        }
      );

      if (error) throw error;

      saveSession(data.session); // store session
      router.push("/chat");
    } catch (err: any) {
      setError(err.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#0a0a0a] text-gray-100 p-6">
      <h1 className="text-4xl font-bold mb-8">Register</h1>

      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        className="mb-4 p-3 rounded-xl bg-[#1a1a1a]/80 text-white border border-gray-700 w-80"
      />
      <input
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        className="mb-4 p-3 rounded-xl bg-[#1a1a1a]/80 text-white border border-gray-700 w-80"
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="mb-4 p-3 rounded-xl bg-[#1a1a1a]/80 text-white border border-gray-700 w-80"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="mb-4 p-3 rounded-xl bg-[#1a1a1a]/80 text-white border border-gray-700 w-80"
      />

      {error && (
        <div className="bg-red-600 text-white px-4 py-2 rounded-xl mb-4 text-center w-80">
          {error}
        </div>
      )}

      <button
        onClick={handleRegister}
        disabled={loading}
        className="mb-4 w-80 p-3 bg-indigo-600 hover:bg-indigo-500 rounded-xl text-white font-semibold"
      >
        {loading ? "Registering..." : "Register"}
      </button>

      <p>
        Already have an account?{" "}
        <span
          onClick={() => router.push("/login")}
          className="text-indigo-400 cursor-pointer hover:underline"
        >
          Login
        </span>
      </p>
    </div>
  );
}
