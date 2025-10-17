import { NextRequest, NextResponse } from 'next/server'
import MailerLite from '@mailerlite/mailerlite-nodejs'

export async function POST(request: NextRequest) {
  if (!process.env.MAILERLITE_API_KEY || !process.env.MAILERLITE_GROUP_ID) {
    console.error('MailerLite API key or Group ID are not set in environment variables.')
    return NextResponse.json(
      { success: false, message: 'Server configuration error.' },
      { status: 500 },
    )
  }

  const mailerlite = new MailerLite({
    api_key: process.env.MAILERLITE_API_KEY,
  })

  try {
    const body = await request.json()
    const { email } = body

    if (!email) {
      return NextResponse.json({ success: false, message: 'Email is required.' }, { status: 400 })
    }

    const params = {
      email,
      groups: [process.env.MAILERLITE_GROUP_ID],
      status: 'active' as const,
    }

    const response = await mailerlite.subscribers.createOrUpdate(params)

    if (response.data && response.data.data.id) {
      return NextResponse.json({ success: true })
    } else {
      return NextResponse.json({ success: false, message: 'Failed to subscribe.' }, { status: 500 })
    }
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { success: false, message: 'An unknown error occurred.' },
      { status: 500 },
    )
  }
}
