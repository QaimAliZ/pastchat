"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase-client";
import { signOut } from "@/lib/auth-client";

export default function ProfilePage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [avatarColor, setAvatarColor] = useState("#4b5563");
  const [originalFirst, setOriginalFirst] = useState("");
  const [originalLast, setOriginalLast] = useState("");
  const [originalColor, setOriginalColor] = useState("#4b5563");
  const [saving, setSaving] = useState(false);

  // Fetch user data
  useEffect(() => {
    const fetchUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        router.push("/login");
      } else {
        setUser(user);
        const first = user.user_metadata?.first_name ?? "";
        const last = user.user_metadata?.last_name ?? "";
        const color = user.user_metadata?.avatar_color ?? "#4b5563";
        setFirstName(first);
        setLastName(last);
        setAvatarColor(color);
        setOriginalFirst(first);
        setOriginalLast(last);
        setOriginalColor(color);
      }
    };
    fetchUser();
  }, [router]);

  // Save updated name + avatar color to Supabase
  const handleSave = async () => {
    if (!user) return;
    setSaving(true);
    const { error } = await supabase.auth.updateUser({
      data: { first_name: firstName, last_name: lastName, avatar_color: avatarColor },
    });
    if (error) {
      console.error("Error updating profile:", error.message);
    } else {
      setUser({
        ...user,
        user_metadata: {
          first_name: firstName,
          last_name: lastName,
          avatar_color: avatarColor,
        },
      });
      setOriginalFirst(firstName);
      setOriginalLast(lastName);
      setOriginalColor(avatarColor);
    }
    setSaving(false);
  };

  const handleSignOut = async () => {
    await signOut();
    router.push("/login");
  };

  const handleReturnToChat = () => {
    router.push("/chat");
  };

  // Determine if there are changes (name or color)
  const hasChanges =
    firstName !== originalFirst ||
    lastName !== originalLast ||
    avatarColor !== originalColor;

  if (!user) return null;

  const colorOptions = [
    "#4b5563", // Gray
    "#ef4444", // Red
    "#f97316", // Orange
    "#eab308", // Yellow
    "#22c55e", // Green
    "#06b6d4", // Cyan
    "#3b82f6", // Blue
    "#8b5cf6", // Purple
    "#ec4899", // Pink
    "#14b8a6", // Teal
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#050d3a] to-[#5b2eb5] text-white flex flex-col items-center p-8">
      <h1 className="text-4xl font-extrabold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500 drop-shadow-lg">
        Profile
      </h1>

      <div className="bg-[#111] p-8 rounded-2xl shadow-lg w-full max-w-md flex flex-col items-center gap-4">
        {/* Avatar */}
        <div
          className="w-28 h-28 rounded-full flex items-center justify-center text-3xl font-bold cursor-pointer transition-transform duration-200 hover:scale-105"
          style={{ backgroundColor: avatarColor }}
        >
          {firstName[0] ?? "U"}
        </div>

        {/* Color Picker */}
        <div className="grid grid-cols-5 gap-3 mt-3">
          {colorOptions.map((color) => (
            <button
              key={color}
              onClick={() => setAvatarColor(color)}
              className={`w-8 h-8 rounded-full border-2 transition-all duration-200 hover:scale-110 ${
                avatarColor === color ? "border-white scale-110" : "border-transparent"
              }`}
              style={{ backgroundColor: color }}
            />
          ))}
        </div>

        {/* Name fields */}
        <div className="w-full flex flex-col gap-4 mt-4">
          <label className="text-gray-300 font-medium">First Name</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full p-3 rounded-xl bg-[#1a1a1a]/80 text-white border border-gray-700 focus:border-indigo-500 outline-none transition"
          />

          <label className="text-gray-300 font-medium">Last Name</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-full p-3 rounded-xl bg-[#1a1a1a]/80 text-white border border-gray-700 focus:border-indigo-500 outline-none transition"
          />
        </div>

        {/* Buttons */}
        <div className="w-full flex flex-col gap-2 mt-4">
          {/* Save Changes */}
          <button
            onClick={handleSave}
            disabled={!hasChanges || saving}
            className={`w-full px-6 py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 hover:scale-105 transition-transform font-medium text-white ${
              !hasChanges || saving ? "opacity-50 cursor-not-allowed hover:scale-100" : ""
            }`}
          >
            {saving ? "Saving..." : "Save Changes"}
          </button>

          {/* Return to Chat */}
          <button
            onClick={handleReturnToChat}
            className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 hover:scale-105 transition-transform font-medium text-white"
          >
            Return to Chat
          </button>

          {/* Sign Out */}
          <button
            onClick={handleSignOut}
            className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-[#2a004f] to-[#5b2eb5] hover:scale-105 transition-transform font-medium text-white"
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
}
