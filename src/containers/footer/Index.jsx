import React from "react";
import "./style.scss";
import { FaFacebook, FaLinkedin, FaEnvelope, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="logos">
          <a href="https://github.com/RyanMohammad18" target="_blank">
            <FaGithub size={40} />
          </a>
          <a href="https://www.facebook.com/" target="_blank">
            <FaFacebook size={40} />
          </a>
          <a
            href="https://www.linkedin.com/in/ryan-mohammad-35b59518b/"
            target="_blank"
          >
            <FaLinkedin size={40} />
          </a>
          <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank">
            <FaEnvelope size={40} />
          </a>
        </div>

        <h1>Thanks for visiting my profile</h1>
        <p>Reach me via phone: +8801834754045</p>
      </div>
    </>
  );
};

export default Footer;
