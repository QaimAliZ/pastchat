"use client";

import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase-client";
import { signOut } from "@/lib/auth-client";

export default function Header() {
  const router = useRouter();
  const [userName, setUserName] = useState<string | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();

      if (user) {
        const first = user.user_metadata?.first_name ?? "";
        const last = user.user_metadata?.last_name ?? "";
        setUserName(`${first} ${last}`.trim());
      }
    };

    fetchUser();
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSignOut = () => {
    signOut();
    router.push("/login");
  };

  return (
    <header className="flex items-center justify-between p-4 bg-black text-white shadow-md">
      <h1
        className="text-xl font-bold cursor-pointer hover:text-indigo-400 transition-colors"
        onClick={() => router.push("/")}
      >
        PastChat
      </h1>

      {userName && (
        <div className="relative" ref={dropdownRef}>
          <span
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="cursor-pointer text-gray-100 font-medium hover:text-indigo-400 transition-colors px-3 py-2 rounded-lg bg-gray-900/50 backdrop-blur-sm"
          >
            {userName}
          </span>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-gray-900 border border-gray-700 rounded-lg shadow-lg z-50">
              <button
                onClick={handleSignOut}
                className="w-full text-left px-4 py-2 hover:bg-red-600 hover:text-white transition-colors rounded-lg"
              >
                Sign Out
              </button>
            </div>
          )}
        </div>
      )}
    </header>
  );
}
