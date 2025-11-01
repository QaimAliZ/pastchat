// server-side authentication using Supabase
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Missing Supabase environment variables");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type AuthUser = {
  id: string;
  email: string;
  createdAt: string;
  avatar_url?: string | null;
};

function mapUser(user: any): AuthUser {
  return {
    id: user.id,
    email: user.email,
    createdAt: user.created_at,
    avatar_url: user.user_metadata?.avatar_url ?? null,
  };
}

// Register user
export async function registerUser(email: string, password: string) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) throw new Error(error.message);
  if (!data.user) throw new Error("Registration failed");

  return { user: mapUser(data.user), session: data.session };
}

// Login user
export async function loginUser(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);
  if (!data.user) throw new Error("Login failed");

  return { user: mapUser(data.user), session: data.session };
}

// Logout user
export async function logoutUser() {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
}
