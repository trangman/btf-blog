import { createBrowserClient } from '@supabase/ssr'

export function createClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  const serviceRoleKey = process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY

  console.log('Supabase client config:', {
    url: supabaseUrl,
    hasAnonKey: !!supabaseAnonKey,
    hasServiceRoleKey: !!serviceRoleKey
  })

  // For authentication, we should use the anon key, not the service role key
  // Service role key bypasses RLS and can cause authentication issues
  const keyToUse = supabaseAnonKey || serviceRoleKey

  if (!supabaseUrl || !keyToUse) {
    console.warn('Supabase environment variables not configured')
    console.log('Available env vars:', {
      supabaseUrl: !!supabaseUrl,
      supabaseAnonKey: !!supabaseAnonKey,
      serviceRoleKey: !!serviceRoleKey
    })
    return null
  }

  if (!supabaseAnonKey) {
    console.warn('WARNING: Using service role key for client-side authentication. This may cause issues.')
    console.warn('Please add NEXT_PUBLIC_SUPABASE_ANON_KEY to your .env.local file')
  }

  return createBrowserClient(supabaseUrl, keyToUse)
}
