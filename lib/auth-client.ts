// lib/auth-client.ts
import { supabase } from "./supabase-client";

// Save session to localStorage
export const saveSession = (session: any) => {
  if (!session) return;
  localStorage.setItem("supabase_session", JSON.stringify(session));
};

// Get session from localStorage
export const getSession = () => {
  const session = localStorage.getItem("supabase_session");
  return session ? JSON.parse(session) : null;
};

// Remove session (sign out)
export const signOut = async () => {
  localStorage.removeItem("supabase_session");
  await supabase.auth.signOut();
};
