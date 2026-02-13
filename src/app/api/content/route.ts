import { NextRequest, NextResponse } from 'next/server'
import { put, list } from '@vercel/blob'
import { defaultContent, type SiteContent } from '@/lib/content'

const BLOB_FILENAME = 'site-content.json'

// GET — Read current content (returns defaults if no blob exists)
export async function GET() {
  try {
    const { blobs } = await list({ prefix: BLOB_FILENAME })

    if (blobs.length > 0) {
      const response = await fetch(blobs[0].url, { cache: 'no-store' })
      if (response.ok) {
        const stored = await response.json()
        return NextResponse.json({ success: true, content: { ...defaultContent, ...stored } })
      }
    }

    return NextResponse.json({ success: true, content: defaultContent })
  } catch (error) {
    console.error('Error reading content:', error)
    return NextResponse.json({ success: true, content: defaultContent })
  }
}

// PUT — Update content (requires ADMIN_PASSWORD)
export async function PUT(request: NextRequest) {
  try {
    // Check admin password
    const adminPassword = process.env.ADMIN_PASSWORD
    if (!adminPassword) {
      return NextResponse.json(
        { success: false, message: 'Admin password not configured on server.' },
        { status: 500 }
      )
    }

    const password = request.headers.get('x-admin-password')
    if (password !== adminPassword) {
      return NextResponse.json(
        { success: false, message: 'Invalid admin password.' },
        { status: 401 }
      )
    }

    const body = (await request.json()) as SiteContent

    // Write to Vercel Blob (overwrites existing)
    const blob = await put(BLOB_FILENAME, JSON.stringify(body, null, 2), {
      access: 'public',
      addRandomSuffix: false,
      allowOverwrite: true,
      contentType: 'application/json',
    })

    return NextResponse.json({ success: true, url: blob.url })
  } catch (error) {
    console.error('Error saving content:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to save content.' },
      { status: 500 }
    )
  }
}
