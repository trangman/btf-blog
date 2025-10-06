import { getAllAudiences } from '../../lib/content'

export async function GET() {
  try {
    const audiences = await getAllAudiences()
    
    return Response.json({
      success: true,
      audiences: audiences
    })
  } catch (error) {
    console.error('Error fetching audiences:', error)
    
    return Response.json({
      success: false,
      error: 'Failed to fetch audiences',
      audiences: []
    }, { status: 500 })
  }
}
