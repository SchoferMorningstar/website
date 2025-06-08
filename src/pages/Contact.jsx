import React, { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState(null);

  const serviceID = "service_v7aktdq";
  const templateID = "template_pf2c8v9";
  const publicKey = import.meta.env.VITE_EMAIL_PUBLIC_KEY;

  function handleChange(e) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .send(serviceID, templateID, formData, publicKey)
      .then(() => {
        setStatus("success");
        setFormData({
          from_name: "",
          from_email: "",
          subject: "",
          message: "",
        });
      })
      .catch(() => {
        setStatus("error");
      });
  }

  return (
    <div className="max-w-xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-md shadow-md text-gray-800 dark:text-gray-200">
      <h1 className="text-3xl font-semibold mb-6">Contact Me</h1>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="from_name" className="block mb-1 font-medium">
            Name
          </label>
          <input
            type="text"
            name="from_name"
            id="from_name"
            required
            value={formData.from_name}
            onChange={handleChange}
            placeholder="Your name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="from_email" className="block mb-1 font-medium">
            Email
          </label>
          <input
            type="email"
            name="from_email"
            id="from_email"
            required
            value={formData.from_email}
            onChange={handleChange}
            placeholder="your.email@example.com"
            className="w-full px-4 py-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="subject" className="block mb-1 font-medium">
            Subject
          </label>
          <input
            type="text"
            name="subject"
            id="subject"
            required
            value={formData.subject}
            onChange={handleChange}
            placeholder="Email topic"
            className="w-full px-4 py-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="message" className="block mb-1 font-medium">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            rows="5"
            required
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message here..."
            className="w-full px-4 py-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 disabled:opacity-50 transition"
        >
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>

        {status === "success" && (
          <p className="mt-3 text-green-600 font-medium">
            Message sent successfully!
          </p>
        )}
        {status === "error" && (
          <p className="mt-3 text-red-600 font-medium">
            Something went wrong. Please try again later.
          </p>
        )}
      </form>
    </div>
  );
}
