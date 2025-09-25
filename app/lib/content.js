import { promises as fs } from 'fs'
import path from 'path'
import matter from 'gray-matter'

// Define user roles
export const USER_ROLES = {
  BUYER: 'BUYER',
  ACCOUNTANT: 'ACCOUNTANT', 
  DEVELOPER: 'DEVELOPER',
  LAWYER: 'LAWYER',
  EXISTING_PROPERTY_OWNER: 'EXISTING_PROPERTY_OWNER',
  GENERAL: 'GENERAL'
}

// Map user roles to content categories for backward compatibility
export const ROLE_TO_CATEGORIES = {
  BUYER: ['general', 'buyer'],
  ACCOUNTANT: ['general', 'accountant'],
  DEVELOPER: ['general', 'developer'], 
  LAWYER: ['general', 'lawyer'],
  EXISTING_PROPERTY_OWNER: ['general', 'property-owner'],
  GENERAL: ['general']
}

// Check if a post is accessible by a user role
export function isPostAccessibleByRole(post, userRole) {
  // If no audience specified, make it accessible to everyone (backward compatibility)
  if (!post.audience || post.audience === 'undefined') {
    return true
  }
  
  // Use audience field for filtering
  return post.audience === userRole || post.audience === 'GENERAL'
}

// Get content categories for a user role
export function getContentCategoriesForRole(role) {
  return ROLE_TO_CATEGORIES[role] || ['general']
}

export async function getAllPosts(userRole = null) {
  try {
    const postsDirectory = path.join(process.cwd(), 'content/posts')
    
    // Check if directory exists
    try {
      await fs.access(postsDirectory)
    } catch (error) {
      console.warn('Content directory not found:', postsDirectory)
      return []
    }
    
    const filenames = await fs.readdir(postsDirectory)
    const posts = await Promise.all(
      filenames
        .filter(filename => filename.endsWith('.mdx'))
        .map(async (filename) => {
          try {
            const filePath = path.join(postsDirectory, filename)
            const fileContents = await fs.readFile(filePath, 'utf8')
            const { data, content } = matter(fileContents)
            
            return {
              slug: filename.replace(/\.mdx$/, ''),
              title: data.title,
              description: data.description,
              pubDate: data.pubDate,
              heroImage: data.heroImage,
              categories: data.categories ? data.categories.split(',').map(c => c.trim()) : [],
              audience: data.audience && data.audience !== 'undefined' ? data.audience : 'GENERAL',
              content: content,
            }
          } catch (error) {
            console.error(`Error reading file ${filename}:`, error)
            return null
          }
        })
    )
    
    // Filter posts based on user role
    const filteredPosts = userRole
      ? posts.filter(post => post !== null && isPostAccessibleByRole(post, userRole))
      : posts.filter(post => post !== null)
    
    // Sort posts by date (newest first)
    filteredPosts.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate))
    return filteredPosts
  } catch (error) {
    console.error('Error loading posts:', error)
    return []
  }
}

export async function getPostBySlug(slug, userRole = null) {
  try {
    const postsDirectory = path.join(process.cwd(), 'content/posts')
    
    // Check if directory exists
    try {
      await fs.access(postsDirectory)
    } catch (error) {
      console.warn('Content directory not found:', postsDirectory)
      return null
    }
    
    const filePath = path.join(postsDirectory, `${slug}.mdx`)
    const fileContents = await fs.readFile(filePath, 'utf8')
    const { data, content } = matter(fileContents)
    
    const post = {
      slug,
      title: data.title,
      description: data.description,
      pubDate: data.pubDate,
      heroImage: data.heroImage,
      categories: data.categories ? data.categories.split(',').map(c => c.trim()) : [],
      audience: data.audience && data.audience !== 'undefined' ? data.audience : 'GENERAL',
      content,
    }
    
    // Check if user has access to this post
    if (userRole && !isPostAccessibleByRole(post, userRole)) {
      return null
    }
    
    return post
  } catch (error) {
    console.error('Error loading post:', error)
    return null
  }
}
