import React from "react";
import Button from "../ui/Button";

function Contact() {
  return (
    <section
      id="contact"
      className="py-12  px-8 sm:px-12 md:px-14 lg:px-24  min-h-screen bg-gray-300 text-gray-800"
    >
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
        <p className="mb-8 text-gray-600">
          Have a project or question? Send me a message and let's chat!
        </p>

        <form
          action="https://formspree.io/f/yourFormID" // Replace with your Formspree or EmailJS endpoint
          method="POST"
          className="space-y-4 text-left"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded"
          ></textarea>

          <Button type="submit">Send Message</Button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
