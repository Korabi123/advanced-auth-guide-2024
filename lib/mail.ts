import PasswordResetEmail from "@/emails/password-reset";
import VerificationEmail from "@/emails/verification";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendVerificationEmail = async (email: string, token: string, name: string) => {
  const confirmLink = `http://localhost:3000/auth/new-verification?token=${token}`;

  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "Verify your email",
    react: VerificationEmail({ confirmLink: confirmLink, name: name })
  })
}

export const sendPasswordResetEmail = async (email: string, token: string, name: string) => {
  const resetPasswordLink = `http://localhost:3000/auth/new-password?token=${token}`;

  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "Reset your password",
    react: PasswordResetEmail({ resetPasswordLink: resetPasswordLink, name: name })
  })
}