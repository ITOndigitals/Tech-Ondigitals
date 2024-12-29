import { gql } from "@apollo/client";
export const SendEmailContactForm = gql`
    mutation SEND_EMAIL(
    $body: String,
    $subject: String)  {
    sendEmail(
      input: {
        from: "vu.nguyen@ondigitals.com",
        subject: $subject,
        body: $body,
        to: "nguyenduyanhvu2812@gmail.com"
      }
    ) {
      sent
      message
      origin
    }
  }
`;
