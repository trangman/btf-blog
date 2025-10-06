import { getAllCategories } from '../../../lib/content'

export async function GET() {
  try {
    const categories = await getAllCategories()
    
    return Response.json({
      success: true,
      categories: categories
    })
  } catch (error) {
    console.error('Error fetching categories:', error)
    
    return Response.json({
      success: false,
      error: 'Failed to fetch categories',
      categories: []
    }, { status: 500 })
  }
}
