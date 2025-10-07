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
              featured: data.featured === true || data.featured === 'true',
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
      featured: data.featured === true || data.featured === 'true',
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

// Get all unique categories from posts
export async function getAllCategories() {
  const posts = await getAllPosts()
  const categoriesFromPosts = new Set()
  
  posts.forEach(post => {
    post.categories.forEach(category => {
      categoriesFromPosts.add(category)
    })
  })
  
  // Define all predefined categories
  const predefinedCategories = [
    'glossary/definition',
    'educational/how-to', 
    'problem/solution',
    'market-analysis',
    'legal-education',
    'technical',
    'industry-analysis',
    'professional-guidance'
  ]
  
  // Combine predefined categories with any additional categories found in posts
  const allCategories = new Set([...predefinedCategories, ...categoriesFromPosts])
  
  return Array.from(allCategories).sort()
}

// Get all unique audiences from posts
export async function getAllAudiences() {
  const posts = await getAllPosts()
  const audiences = new Set()
  
  posts.forEach(post => {
    audiences.add(post.audience)
  })
  
  return Array.from(audiences).sort()
}

// Get posts by category
export async function getPostsByCategory(category, userRole = null) {
  const posts = await getAllPosts(userRole)
  return posts.filter(post => post.categories.includes(category))
}

// Get posts by audience
export async function getPostsByAudience(audience, userRole = null) {
  const posts = await getAllPosts(userRole)
  return posts.filter(post => post.audience === audience)
}

// Get featured posts
export async function getFeaturedPosts(userRole = null) {
  const posts = await getAllPosts(userRole)
  return posts.filter(post => post.featured === true)
}

// Get category display name
export function getCategoryDisplayName(category) {
  const categoryMap = {
    'glossary/definition': 'Glossary/Definition',
    'educational/how-to': 'Educational/How-To',
    'problem/solution': 'Problem/Solution',
    'market-analysis': 'Market Analysis',
    'legal-education': 'Legal Education',
    'technical': 'Technical',
    'industry-analysis': 'Industry Analysis',
    'professional-guidance': 'Professional Guidance',
    // Legacy categories for backward compatibility
    'general': 'General Information',
    'buyer': 'For Buyers',
    'accountant': 'For Accountants',
    'developer': 'For Developers',
    'lawyer': 'For Legal Professionals',
    'property-owner': 'For Property Owners'
  }
  
  return categoryMap[category] || category.replace(/\//g, ' & ').replace(/-/g, ' ')
}

// Get audience display name
export function getAudienceDisplayName(audience) {
  const audienceMap = {
    'GENERAL': 'General Audience',
    'FOREIGN_PROPERTY_BUYERS': 'Foreign Property Buyers',
    'BUYER': 'Property Buyers',
    'ACCOUNTANT': 'Accountants',
    'DEVELOPER': 'Property Developers',
    'LAWYER': 'Legal Professionals',
    'EXISTING_PROPERTY_OWNER': 'Existing Property Owners'
  }
  
  return audienceMap[audience] || audience.replace(/_/g, ' ')
}