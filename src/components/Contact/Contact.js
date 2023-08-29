import React, { useState } from "react";


const ContactForm = () => {
  const [status, setStatus] = useState("Send Message");
  const [formData, setFormData] = useState({ name: '', number: '', message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const { name, number, message } = formData;

    try {
      const response = await fetch(" ", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify({ name, number, message }),
      });

      if (response.ok) {
        setStatus("Message Sent");
        setFormData({ name: '', number: '', message: '' });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      setStatus("Failed to send message");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          placeholder="e.g Aliyev Ali"
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="number">Telephone Number:</label>
        <input
          placeholder="+998990009999"
          type="tel"
          id="number"
          name="number"
          value={formData.number}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea
          value={formData.message}
          id="message"
          name="message"
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">{status}</button>
    </form>
  );
};

export default ContactForm;
