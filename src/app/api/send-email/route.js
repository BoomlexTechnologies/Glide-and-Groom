import { NextResponse } from 'next/server'
const nodemailer = require('nodemailer')

export async function POST(request) {
  try {
    const { name, phone, email, serviceType, breed, address, specialRequests } = await request.json()

    // Create transporter (you'll need to configure this with your email service)
    const transporter = nodemailer.createTransport({
      service: 'gmail', // or your email service
      auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_PASS, // Your email password or app password
      },
    })

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.OWNER_EMAIL, // Owner's email address
      subject: `New Callback Request - ${serviceType}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #071d43; margin-bottom: 20px; text-align: center;">New Callback Request</h2>
            
            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <h3 style="color: #071d43; margin-bottom: 15px;">Customer Details</h3>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Phone:</strong> ${phone}</p>
              ${email ? `<p><strong>Email:</strong> ${email}</p>` : ''}
            </div>

            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <h3 style="color: #071d43; margin-bottom: 15px;">Service Details</h3>
              <p><strong>Service Type:</strong> ${serviceType}</p>
              <p><strong>Pet Breed:</strong> ${breed}</p>
            </div>

            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <h3 style="color: #071d43; margin-bottom: 15px;">Service Address</h3>
              <p>${address.replace(/\n/g, '<br>')}</p>
            </div>

            ${specialRequests ? `
            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <h3 style="color: #071d43; margin-bottom: 15px;">Special Requests / Notes</h3>
              <p>${specialRequests.replace(/\n/g, '<br>')}</p>
            </div>
            ` : ''}

            <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 2px solid #071d43;">
              <p style="color: #666; font-size: 14px;">This request was submitted through the Glide & Groom website.</p>
              <p style="color: #666; font-size: 14px;">Please contact the customer within 24 hours.</p>
            </div>
          </div>
        </div>
      `,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    return NextResponse.json({ success: true, message: 'Email sent successfully' })
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json({ success: false, message: 'Failed to send email' }, { status: 500 })
  }
}
