import React, { useState } from "react";
import axios from "axios";

function ContactForm() {
  const [status, setStatus] = useState("Send Message");
  const [formData, setFormData] = useState({
    "entry.644601152": "",
    "entry.2432222": "",
    "entry.747422079": "",
  });

  const handleChange = (input) => (e) => {
    const { value } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [input]: value,
    }));
    setStatus("Send Message");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Message Sent");
    setFormData({
      "entry.644601152": "",
      "entry.2432222": "",
      "entry.747422079": "",
    });

    const googleFormUrl = `https://docs.google.com/forms/d/e/1FAIpQLSf5Sexmjwb1NwunsOomG_k6OrTtU3MXHnHWr2DwzO7CB2fjqw/formResponse?entry.644601152=${formData["entry.644601152"]}&entry.2432222=${formData["entry.2432222"]}&entry.747422079=${formData["entry.747422079"]}`;

    const res = await fetch(googleFormUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    if (res.ok) {
      setStatus("Message Sent");
      setFormData({
        "entry.644601152": "",
        "entry.2432222": "",
        "entry.747422079": "",
      });
    } else {
      setStatus("Message Sent");
    }
  };

  return (
    <form onSubmit={handleSubmit} target="_self">
      <div>
        <label htmlFor="entry.644601152">Name:</label>
        <input
          type="text"
          name="entry.644601152"
          value={formData["entry.644601152"]}
          onChange={handleChange("entry.644601152")}
          required
          autoComplete={"off"}
        />
      </div>
      <div>
        <label htmlFor="entry.2432222">Telephone Number:</label>
        <input
          type="tel"
          name="entry.2432222"
          value={formData["entry.2432222"]}
          onChange={handleChange("entry.2432222")}
          required
          autoComplete={"off"}
        />
      </div>
      <div>
        <label htmlFor="entry.747422079">Message:</label>
        <textarea
          name="entry.747422079"
          value={formData["entry.747422079"]}
          onChange={handleChange("entry.747422079")}
          required
          autoComplete={"off"}
        ></textarea>
      </div>
      <button type="submit">{status}</button>
    </form>
  );
}

export default ContactForm;
