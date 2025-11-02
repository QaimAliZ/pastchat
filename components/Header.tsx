"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase-client";

export default function Header() {
  const router = useRouter();
  const [userName, setUserName] = useState<string | null>(null);
  const [avatarColor, setAvatarColor] = useState<string>("#4b5563");

  useEffect(() => {
    const fetchUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (user) {
        const first = user.user_metadata?.first_name ?? "";
        const last = user.user_metadata?.last_name ?? "";
        const color = user.user_metadata?.avatar_color ?? "#4b5563";
        setUserName(`${first} ${last}`.trim());
        setAvatarColor(color);
      }
    };

    fetchUser();
  }, []);

  return (
    <header className="flex items-center justify-between p-4 bg-gradient-to-r from-[#050d3a] to-[#5b2eb5] text-white shadow-md">
      {/* Site Name */}
      <h1
        className="text-2xl font-bold cursor-pointer bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500 drop-shadow-lg"
        onClick={() => router.push("/")}
      >
        Kronos.ai
      </h1>

      {/* User Info */}
      <div>
        {userName && (
          <button
            onClick={() => router.push("/profile")}
            className="flex items-center gap-3 text-white font-medium hover:text-indigo-400 transition-colors"
          >
            {/* Avatar Circle */}
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold"
              style={{ backgroundColor: avatarColor }}
            >
              {userName.charAt(0).toUpperCase()}
            </div>

            {/* User Name */}
            <span className="text-lg">{userName}</span>

            {/* Down Arrow Icon */}
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        )}
      </div>
    </header>
  );
}
