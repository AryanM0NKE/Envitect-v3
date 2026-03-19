"use client";

import { useState } from "react";

export default function ContactForm() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    console.log("🔥 FORM SUBMITTED");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();
      console.log(data);

      alert("Form submitted successfully!");

      setName("");
      setEmail("");
      setMessage("");

    } catch (err) {
      console.error(err);
      alert("Error submitting form");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8">

      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 mb-3 w-full"
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 mb-3 w-full"
      />

      <textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="border p-2 mb-3 w-full"
      />

      <button type="submit" className="bg-teal text-white p-3 w-full">
        Send Message
      </button>

    </form>
  );
}