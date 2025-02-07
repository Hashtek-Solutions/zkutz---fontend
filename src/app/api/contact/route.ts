import { NextResponse } from "next/server";
import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

const ses = new SESClient({
  region: process.env.AWS_REGION!,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

export async function POST(req: Request) {
  try {
    const formData = await req.json();
    const { name, email, message } = formData;

    const command = new SendEmailCommand({
      Source: process.env.AWS_SES_VERIFIED_EMAIL!,
      Destination: { ToAddresses: [process.env.AWS_SES_VERIFIED_EMAIL!] },
      Message: {
        Subject: { Data: `New Enquiry from ${name}` },
        Body: {
          Text: { Data: `Name: ${name}\nEmail: ${email}\nMessage: ${message}` },
        },
      },
    });

    await ses.send(command);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to send email:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to send message. Please try again.",
      },
      { status: 500 }
    );
  }
}
