"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase-client";
import { signOut } from "@/lib/auth-client";

export default function Header() {
  const router = useRouter();
  const [userName, setUserName] = useState<string | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (user) {
        const first = user.user_metadata?.first_name ?? "";
        const last = user.user_metadata?.last_name ?? "";
        setUserName(`${first} ${last}`.trim());
      }
    };

    fetchUser();
  }, []);

  const handleSignOut = async () => {
    await signOut();
    router.push("/login");
  };

  return (
    <header className="flex items-center justify-between p-4 bg-black text-white shadow-md">
      {/* Site Name */}
      <h1
        className="text-2xl font-bold cursor-pointer bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500 drop-shadow-lg"
        onClick={() => router.push("/")}
      >
        PastChat
      </h1>

      {/* User Info */}
      <div className="relative">
        {userName && (
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center gap-2 text-white font-medium hover:text-indigo-400 transition-colors"
          >
            <span className="text-lg">{userName}</span>
            <svg
              className={`w-4 h-4 transform transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        )}

        {/* Dropdown */}
        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-40 bg-[#111] rounded-lg shadow-lg border border-gray-800 overflow-hidden z-50">
            <button
              onClick={handleSignOut}
              className="w-full text-left px-4 py-2 text-gray-100 hover:bg-red-600 hover:text-white transition-colors"
            >
              Sign Out
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
