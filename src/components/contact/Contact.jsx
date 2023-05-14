import React, { useRef, useCallback, useEffect, useState } from "react";
import emailjs from "emailjs-com";
import {
  GoogleReCaptchaProvider,
  useGoogleReCaptcha,
} from "react-google-recaptcha-v3";
import ContactInfo from "./ContactInfo";
import "./contact.css";

const Submit = () => {
  const [reCaptcha, setReCaptcha] = useState("");
  const { executeRecaptcha } = useGoogleReCaptcha();

  // Create an event handler so you can call the verification on button click event or form submit
  const handleReCaptchaVerify = useCallback(
    (event) => {
      if (!executeRecaptcha) {
        console.log("Execute recaptcha not yet available");
        return;
      }

      (async () => {
        try {
          const token = await executeRecaptcha();
          setReCaptcha(token);
        } catch (error) {
          console.log(error.response);
        }
      })();
    },
    [executeRecaptcha]
  );

  // You can use useEffect to trigger the verification as soon as the component being loaded
  useEffect(() => {
    handleReCaptchaVerify();
  }, [handleReCaptchaVerify]);

  return (
    <input
      className="submit"
      onClick={handleReCaptchaVerify}
      type="submit"
      value="Send"
    />
  );
};

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "123service_qlhk1yq",
        "123template_fb1jyck",
        form.current,
        "uN1-CbZ488UcFz06p"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log("emailjs error : ", error.text);
        }
      );
  };

  return (
    <div className="contact-container">
      <ContactInfo />
      <GoogleReCaptchaProvider reCaptchaKey="6Ldw3esfAAAAADcZDVPgCHlmLHgUcAM2ieFGh7Mj">
        <form className="contact-form" ref={form} onSubmit={sendEmail}>
          <input type="text" placeholder="Full Name" name="user_name" />
          <div>
            <input type="email" placeholder="Email" name="user_email" />
            <input type="tel" placeholder="Phone Number" name="user_phone" />
          </div>
          <textarea placeholder="Leave message" name="message" />
          <Submit />
        </form>
      </GoogleReCaptchaProvider>
    </div>
  );
};

export default Contact;
