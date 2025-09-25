'use client'

import { useEffect, useState } from 'react'
import { useSession, signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'

export default function AdminInterface() {
  const { data: session, status } = useSession()
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    if (status === 'loading') {
      return // Still loading
    }

    if (status === 'unauthenticated') {
      router.push('/login')
      return
    }

    if (status === 'authenticated') {
      setLoading(false)
    }
  }, [status, router])

  const handleSignOut = async () => {
    try {
      await signOut({ callbackUrl: '/login' })
    } catch (error) {
      console.error('Sign out error:', error)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
      </div>
    )
  }

      if (!session) {
        return null
      }

      return (
        <div className="min-h-screen bg-gray-50">
          <div className="bg-white shadow">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center py-6">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">
                    TinaCMS Admin
                  </h1>
                  <p className="text-sm text-gray-600">
                    Welcome, {session.user.name || session.user.email}
                  </p>
                </div>
                <button
                  onClick={handleSignOut}
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium"
                >
                  Sign Out
                </button>
              </div>
            </div>
          </div>
      
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <div className="px-4 py-6 sm:px-0">
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  Content Management
                </h2>
                <p className="text-gray-600 mb-4">
                  Welcome to the TinaCMS admin interface! Your content is ready to be managed.
                </p>
                
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <h3 className="font-medium text-green-900 mb-2">✅ TinaCMS Setup Complete</h3>
                  <p className="text-sm text-green-700">
                    Your TinaCMS configuration is ready. Sample content has been created in the content/ directory.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border rounded-lg p-6">
                    <h3 className="font-medium text-gray-900 mb-3">📝 Posts</h3>
                    <p className="text-sm text-gray-600 mb-4">Manage blog posts and articles</p>
                    <div className="space-y-2">
                      <div className="text-sm text-gray-500">• 5 articles available</div>
                    </div>
                    <div className="mt-4">
                      <button 
                        onClick={() => window.open('http://localhost:4001/admin/index.html#/collections/post', '_blank')}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium"
                      >
                        Manage Posts (Local)
                      </button>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg p-6">
                    <h3 className="font-medium text-gray-900 mb-3">📄 Pages</h3>
                    <p className="text-sm text-gray-600 mb-4">Manage static pages</p>
                    <div className="space-y-2">
                      <div className="text-sm text-gray-500">• about.mdx</div>
                    </div>
                    <div className="mt-4">
                      <button 
                        onClick={() => window.open('http://localhost:4001/admin/index.html#/collections/page', '_blank')}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium"
                      >
                        Manage Pages (Local)
                      </button>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <h3 className="font-medium text-blue-900 mb-2">🚀 Content Management</h3>
                  <div className="text-sm text-blue-700 space-y-1">
                    <p>• For content editing, run <code className="bg-blue-100 px-1 rounded">npm run tina-dev</code> locally</p>
                    <p>• This will start TinaCMS on <code className="bg-blue-100 px-1 rounded">http://localhost:4001</code></p>
                    <p>• Edit content locally and push changes to deploy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </div>
  )
}
