import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const { name, email, phone, projectInterested, message } = data

    const notifyEmail = "farheen@stageproperties.com"

    // Send email via Resend if API key is available
    const resendApiKey = process.env.RESEND_API_KEY
    if (resendApiKey) {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Farheen Khan Website <noreply@stageproperties.com>",
          to: [notifyEmail],
          subject: `New Lead: ${name} - ${projectInterested || "General Inquiry"}`,
          html: `
            <h2>New Lead from Website</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Project Interested:</strong> ${projectInterested || "Not specified"}</p>
            <p><strong>Message:</strong> ${message || "No message"}</p>
            <p><strong>Time:</strong> ${new Date().toISOString()}</p>
          `,
        }),
      })
    }

    console.log("New lead received:", {
      name,
      email,
      phone,
      projectInterested,
      message,
      timestamp: new Date().toISOString(),
      notifyEmail,
    })

    return NextResponse.json({ success: true, message: "Lead received successfully" })
  } catch (error) {
    console.error("Error processing lead:", error)
    return NextResponse.json({ success: false, message: "Failed to process lead" }, { status: 500 })
  }
}
