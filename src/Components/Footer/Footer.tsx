import React from "react";
import "./Footer.css";
import githubLogo from "../../Images/GitHub-Logo.svg";
import linkedinLogo from "../../Images/LinkedIn-Logo.svg";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="name-container">
        <h4 className="name-tag">Danielle Sweeny</h4>
        <div className="links-container">
          <a href="https://www.linkedin.com/in/danielle-sweeny-75b50b84/">
            <img
              className="link-logo"
              src={linkedinLogo}
              alt="LinkedIn logo"
              height="50vh"
            />
          </a>
          <a href="https://github.com/dsweeny1">
            <img
              className="link-logo"
              src={githubLogo}
              alt="GitHub logo"
              height="50vh"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
