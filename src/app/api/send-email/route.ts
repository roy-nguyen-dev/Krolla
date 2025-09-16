import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { emailSchema } from '@/lib/validations'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email } = emailSchema.parse(body)

    // For now, we'll just simulate sending an email
    // In production, you would use a real email service
    console.log(`Simulating email send to: ${email}`)

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000))

    // In a real implementation, you would:
    // 1. Send the email with PDF attachment
    // 2. Handle errors properly
    // 3. Log the email send event

    return NextResponse.json(
      { 
        success: true, 
        message: 'Email sent successfully',
        email 
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Email send error:', error)
    
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to send email' 
      },
      { status: 500 }
    )
  }
}

// Example of how to send a real email with Resend (commented out for now)
/*
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email } = emailSchema.parse(body)

    const { data, error } = await resend.emails.send({
      from: 'Anxiety Management <noreply@yourdomain.com>',
      to: [email],
      subject: 'Your Free Anxiety Management eBook',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #fbbf24;">Thank you for downloading our eBook!</h1>
          <p>Your free copy of "Break the Anxiety Cycle" is attached to this email.</p>
          <p>This comprehensive guide will help you:</p>
          <ul>
            <li>Understand the root causes of anxiety</li>
            <li>Learn proven breathing techniques</li>
            <li>Master mindfulness exercises</li>
            <li>Build lasting calm and confidence</li>
          </ul>
          <p>If you have any questions, feel free to reply to this email.</p>
          <p>Best regards,<br>The Anxiety Management Team</p>
        </div>
      `,
      attachments: [
        {
          filename: 'anxiety-management-ebook.pdf',
          content: 'PDF_CONTENT_HERE', // In production, read from file system
        },
      ],
    })

    if (error) {
      throw new Error(error.message)
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Email sent successfully',
        emailId: data?.id 
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Email send error:', error)
    
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to send email' 
      },
      { status: 500 }
    )
  }
}
*/
