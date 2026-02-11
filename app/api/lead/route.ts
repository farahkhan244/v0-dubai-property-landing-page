import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const { name, email, phone, projectInterested, message } = data

    // Send email notification using a simple fetch to a mail service
    // For now, log the lead and return success
    console.log("New lead received:", {
      name,
      email,
      phone,
      projectInterested,
      message,
      timestamp: new Date().toISOString(),
      notifyEmail: "farahkhan244@gmail.com",
    })

    return NextResponse.json({ success: true, message: "Lead received successfully" })
  } catch (error) {
    console.error("Error processing lead:", error)
    return NextResponse.json({ success: false, message: "Failed to process lead" }, { status: 500 })
  }
}
