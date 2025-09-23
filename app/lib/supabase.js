import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY

// Create Supabase client for server-side operations (defensive initialization)
export const supabase = supabaseUrl && supabaseKey
  ? createClient(supabaseUrl, supabaseKey, {
      auth: {
        autoRefreshToken: false,
        persistSession: false
      }
    })
  : null

// Helper function to ensure Supabase client is available
function ensureSupabaseClient() {
  if (!supabase) {
    throw new Error('Supabase client not initialized. Check environment variables.')
  }
  return supabase
}

// Database operations using Supabase API
export const supabaseDb = {
  // User operations
  async findUserByEmail(email) {
    const client = ensureSupabaseClient()
    const { data, error } = await client
      .from('users')
      .select('*')
      .eq('email', email)
      .single()

    if (error && error.code !== 'PGRST116') { // PGRST116 = not found
      throw error
    }

    return data
  },

  async createUser(userData) {
    const supabase = ensureSupabaseClient()

    // Build the user object
    const userObject = {
      email: userData.email,
      name: userData.name,
      role: userData.role,
      isAdmin: userData.isAdmin || false,
      id: crypto.randomUUID(),
      createdAt: new Date(),
      updatedAt: new Date()
    }

    // Always provide a password - use provided password or a temporary one
    if (userData.password) {
      userObject.password = userData.password
    } else {
      // Provide a temporary password that will be replaced during password setup
      userObject.password = 'TEMP_PASSWORD_TO_BE_REPLACED'
    }

    const { data, error } = await supabase
      .from('users')
      .insert([userObject])
      .select()
      .single()
    if (error) throw new Error('Failed to create user: ' + error.message)
    return data
  },

  async updateUser(id, userData) {
    const supabase = ensureSupabaseClient()
    const { data, error } = await supabase
      .from('users')
      .update({ ...userData, updatedAt: new Date() })
      .eq('id', id)
      .select()
      .single()
    if (error) throw new Error('Failed to update user: ' + error.message)
    return data
  },

  async deleteUser(id) {
    const supabase = ensureSupabaseClient()
    const { error } = await supabase
      .from('users')
      .delete()
      .eq('id', id)
    if (error) throw new Error('Failed to delete user: ' + error.message)
    return { success: true }
  },

  async getAllUsers() {
    const supabase = ensureSupabaseClient()
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .order('createdAt', { ascending: false })
    if (error) throw new Error('Failed to fetch users: ' + error.message)
    return data || []
  }
}