import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";



const Result = () => {
  return (
    <p>Your message has been sent</p>
  );
};

const ContactOffer = () => {
  const [result, showResult] = useState(false)
 

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_k4aiwmr",
        "template_rer8is9",
        form.current,
        "Fh0Y9YM-DloiKhGif"
      )
      .then(
        (result) => {
          console.log(result.text);
       
        },
        (error) => {
          console.log(error.text);
        }
      );
      e.target.reset();
      showResult(true)
  };

  return (
     <div className="form-webdesign">
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input className="input-webdesign" type="text" name="user_name" />
        <label>Email</label>
        <input className="input-webdesign" type="email" name="user_email" />
        <label>Message</label>
        <textarea className="input-webdesign" name="message" />
        <div> {result ? <Result/> : null}</div>
        <input className="webdesign-button" type="submit" value="Send" />
      </form>
   </div> 
  );
};

export default ContactOffer;