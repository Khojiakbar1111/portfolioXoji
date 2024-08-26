import React, { useState } from "react";
import "./contact.css";
import themePatterm from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import locationIcon from "../../assets/location_icon.svg";
import callIcon from "../../assets/call_icon.svg";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const { name, email, message } = formData;
    if (!name || !email || !message) {
      toast.error("All fields are required!", {
        autoClose: 3000,
      });
      return false;
    }
    return true;
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    const data = {
      ...formData,
      access_key: "bba42fcf-ecb4-45aa-800c-52acfd3525df",
    };
    const json = JSON.stringify(data);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    setLoading(false);

    if (res.success) {
      toast.success("Message sent successfully!", {
        autoClose: 2000,
      });
      setFormData({ name: "", email: "", message: "" });
    } else {
      toast.error("Failed to send message. Please try again.", {
        autoClose: 2000,
      });
    }
  };

  return (
    <div className="contact" id="contact">
      <div className="contact-title">
        <h1>Get in Touch</h1>
        <img src={themePatterm} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I'm currently available to take on new projects, so feel free to
            send me a message about anything that you want me to work on. You
            can contact me anytime.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" />
              <p>ahmed2007@gmai.com</p>
            </div>
            <div className="contact-detail">
              <img src={callIcon} alt="" />
              <p>+998994908327</p>
            </div>
            <div className="contact-detail">
              <img src={locationIcon} alt="" />
              <p>Uzbekistan, Namangan</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Your Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            value={formData.name}
            onChange={onChange}
          />
          <label htmlFor="">Your Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            value={formData.email}
            onChange={onChange}
          />
          <label htmlFor="">Write your message here</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter your message"
            value={formData.message}
            onChange={onChange}
          ></textarea>
          <button type="submit" className="contact-submit" disabled={loading}>
            {loading ? "Sending..." : "Submit Now"}
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Contact;
