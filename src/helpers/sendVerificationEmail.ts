import {resend} from "@/lib/resend";
import VerificationEmail from "../../emails/verificationEmail";
import {ApiResponse} from "@/types/ApiResponse";
import { verify } from "crypto";

export async function sendVerificationEmail(
    email : string,
    username : string,
    verifyCode:string,

) : Promise<ApiResponse> {
try {
    await resend.emails.send({
        from: 'Acme <onboarding@resend.dev>',
        to: email,
        subject: 'Mystery Message Verification Code',
        react: VerificationEmail({username, otp: verifyCode}),
      });
    return {success: true, message : "Verification Email Sent Successfully"}
} catch (emailError) {
    console.error("Error sending Verification Email:", emailError);
    return {success : false, message : "Failed send Verification Email"};    
}
}