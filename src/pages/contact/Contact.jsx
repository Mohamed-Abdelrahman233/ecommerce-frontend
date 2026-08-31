import React, { useState } from "react";
import PageTransition from "../../components/PageTransition";
import toast from "react-hot-toast";
import "./contact.css";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill in all fields");
      return;
    }

    toast.success("Message sent successfully!");
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <PageTransition>
      <section className="contact_page">
        <div className="container">
          <div className="contact_header">
            <h2>Contact Us</h2>
            <p>We are here to help you. Reach out anytime.</p>
            <div className="bottom_line"></div>
          </div>

          <div className="contact_wrapper">
            <div className="contact_info">
              <h3>Get in touch</h3>
              <p>Email: support@ecommerce.com</p>
              <p>Phone: +1 234 567 890</p>
              <p>Address: 123 Commerce St, Cairo, Egypt</p>
            </div>

            <form className="contact_form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
              />
              <textarea
                name="message"
                rows={5}
                placeholder="Your Message"
                value={form.message}
                onChange={handleChange}
              />
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
