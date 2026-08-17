import { createClient, SupabaseClient } from '@supabase/supabase-js';

const DEFAULT_SUPABASE_URL = 'https://sznnaybcedigejusidfh.supabase.co';
const FALLBACK_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.e30.placeholder';

function getValidSupabaseUrl(): string {
  try {
    const envUrl = import.meta.env?.VITE_SUPABASE_URL;
    if (typeof envUrl === 'string' && envUrl.trim().length > 0) {
      const trimmed = envUrl.trim();
      const parsed = new URL(trimmed);
      if (parsed.protocol === 'http:' || parsed.protocol === 'https:') {
        return trimmed;
      }
    }
  } catch {
    // If URL parsing fails, return default
  }
  return DEFAULT_SUPABASE_URL;
}

function getValidSupabaseKey(): string {
  const envKey = import.meta.env?.VITE_SUPABASE_PUBLISHABLE_KEY || import.meta.env?.VITE_SUPABASE_ANON_KEY;
  if (typeof envKey === 'string' && envKey.trim().length > 0) {
    return envKey.trim();
  }
  return FALLBACK_KEY;
}

export const isSupabaseConfigured = (): boolean => {
  const envKey = import.meta.env?.VITE_SUPABASE_PUBLISHABLE_KEY || import.meta.env?.VITE_SUPABASE_ANON_KEY;
  return Boolean(typeof envKey === 'string' && envKey.trim().length > 10 && envKey !== FALLBACK_KEY);
};

function initSupabase(): SupabaseClient {
  const url = getValidSupabaseUrl();
  const key = getValidSupabaseKey();
  try {
    return createClient(url, key, {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
        detectSessionInUrl: false
      }
    });
  } catch (err) {
    console.warn('Supabase initialization fallback:', err);
    return createClient(DEFAULT_SUPABASE_URL, FALLBACK_KEY, {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
        detectSessionInUrl: false
      }
    });
  }
}

export const supabase: SupabaseClient = initSupabase();
