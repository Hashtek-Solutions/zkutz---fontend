// actions/contactActions.ts
"use server";

import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

const ses = new SESClient({
  region: process.env.NEXT_AWS_REGION!,
  credentials: {
    accessKeyId: process.env.NEXT_AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.NEXT_AWS_SECRET_ACCESS_KEY!,
  },
});

export async function sendContactEmail(formData: FormData) {
  try {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    const command = new SendEmailCommand({
      Source: process.env.NEXT_AWS_SES_VERIFIED_EMAIL!,
      Destination: { ToAddresses: [process.env.NEXT_AWS_SES_VERIFIED_EMAIL!] },
      Message: {
        Subject: { Data: `New Enquiry from ${name}` },
        Body: {
          Text: { Data: `Name: ${name}\nEmail: ${email}\nMessage: ${message}` },
        },
      },
    });

    await ses.send(command);
    return { success: true };
  } catch (error) {
    console.error("Failed to send email:", error);
    return {
      success: false,
      error: "Failed to send message. Please try again.",
    };
  }
}
