import React, { useState } from "react";
import "./Contact.css";
import { Button, Typography } from "@mui/material";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setMail] = useState("");
  const [message, setMessege] = useState("");

  const contactFromHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="contact">
      <div className="contactRightBar"></div>

      <div className="contactContainer">
        <form
          action=""
          className="contactContainerForm"
          onSubmit={contactFromHandler}
        >
          <Typography variant="h4">Contact Us</Typography>
          <input
            type="text"
            required
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            required
            placeholder="Email"
            value={email}
            onChange={(e) => setMail(e.target.value)}
          />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            required
            placeholder="Message"
            value={message}
            onChange={(e) => setMessege(e.target.value)}
          ></textarea>
          <Button variant="contained" type="submit">
            Send
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
