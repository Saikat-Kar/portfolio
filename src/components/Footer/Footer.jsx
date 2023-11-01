import React from "react";
import "./Footer.css";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import {BsGithub, BsInstagram, BsLinkedin} from "react-icons/bs"

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <Typography variant="h5">About Me</Typography>
        <Typography>
          Hey, my name is Saikat Kar. I am a Full-Stack Developer
        </Typography>

        <Link to="/contact" className="footerContactBtn">
          <Typography>Contact Us</Typography>
        </Link>
      </div>

      <div>
        <Typography variant="h6">Social Media</Typography>
        <a href="https://github.com/Saikat-Kar" target="blank">
          <BsGithub />
        </a>

        <a href="https://www.instagram.com/sai_ikat/" target="blank">
          <BsInstagram />
        </a>

        <a href="https://www.linkedin.com/in/saikat-kar-8178451b2/" target="blank">
          <BsLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Footer;
