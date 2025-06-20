import { Resend } from "resend";

const resend = new Resend("re_bVHALi7G_PVei2tdBAes1py9fgJ3RRihD");

resend.emails.send({
  from: "onboarding@resend.dev",
  to: "abdullah191864@gmail.com",
  subject: "Hello World",
  html: "<p>Congrats on sending your <strong>first email</strong>!</p>",
});
