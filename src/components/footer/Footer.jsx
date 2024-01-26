import React from "react";
import { FaMailBulk, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        <ul className="menuItems">
          <li className="menuItem">Terms Of Use</li>
          <li className="menuItem">Privacy-Policy</li>
          <li className="menuItem">About</li>
          <li className="menuItem">Blog</li>
          <li className="menuItem">FAQ</li>
        </ul>
        <div className="infoText">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </div>
        <div className="socialIcons">
          <Link to={"mailto:mdjamalansari45@outlook.com"} className="icon">
            <FaMailBulk />
          </Link>
          <span className="icon">
            <FaInstagram />
          </span>
          <Link
            to={"https://github.com/mdjamall"}
            target="_blank"
            className="icon"
          >
            <FaGithub />
          </Link>
          <Link
            to={"https://www.linkedin.com/in/md-jamal-ansari-6a413b1b0/"}
            target="_blank"
            className="icon"
          >
            <FaLinkedin />
          </Link>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
