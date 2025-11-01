"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase-client";
import { signOut } from "@/lib/auth-client"; // <-- client-side only

export default function Header() {
  const router = useRouter();
  const [userName, setUserName] = useState<string | null>(null);

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

  const handleSignOut = () => {
    signOut();
    router.push("/login");
  };

  return (
    <header className="flex items-center justify-between p-4 bg-gray-900 text-white">
      <h1 className="text-xl font-bold cursor-pointer" onClick={() => router.push("/")}>
        PastChat
      </h1>

      <div className="flex items-center gap-3">
        {userName && <span className="text-gray-100 font-medium">{userName}</span>}
        <button
          onClick={handleSignOut}
          className="bg-red-600 hover:bg-red-500 px-4 py-2 rounded text-white font-semibold"
        >
          Sign Out
        </button>
      </div>
    </header>
  );
}
