import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailSent, setEmailSent] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(email);
    console.log(message);

    setEmailSent(true);

    axios
      .post("https://backportfoliotommi.fly.dev/api/sendEmail", {
        email,
        message,
      })
      .then((response) => {
        console.log("Email sent successfully");
      })
      .catch((error) => {
        console.log("Error sending email:", error.response.data);
      });
  };

  return (
    <section id="contact" className="text-center">
      <h2 className="text-4xl font-semibold text-center mb-20 mt-20">
        Contact
      </h2>
      {emailSent ? (
        <div>
          <h2 className="text-4xl font-semibold mb-4">Thank you!</h2>
          <p>Your message has been sent. I'll get back to you ASAP!</p>
        </div>
      ) : (
        <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-300 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-300 text-sm font-bold mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              rows="6"
              placeholder="Write your message here."
              value={message}
              onChange={handleMessageChange}
            ></textarea>
          </div>
          <div className="text-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Send
            </button>
          </div>
        </form>
      )}
    </section>
  );
};

export default Contact;
