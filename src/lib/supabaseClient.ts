import { createClient, type SupabaseClient } from '@supabase/supabase-js';

let supabase: SupabaseClient | null = null;

export const getSupabaseClient = (): SupabaseClient => {
  if (!supabase) {
    const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
    const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseAnonKey) {
      throw new Error(
        'Supabase environment variables are missing. Please set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY.'
      );
    }

    supabase = createClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        persistSession: false,
      },
    });
  }

  return supabase;
};
