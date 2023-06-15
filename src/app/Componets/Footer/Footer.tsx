import React from "react";
import "./Footer.css";
import { ReactElement } from "react";
import { faCartShopping, faEnvelope, faCopyright } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";

export default async function Footer() {
  return (
    <footer>
      <ul className="footer-link">
        <li>
          <FontAwesomeIcon icon={faGithub} />
        </li>
        <li>
          <FontAwesomeIcon icon={faTwitter} />
        </li>
        <li>
          <FontAwesomeIcon icon={faEnvelope} />
        </li>
        <li>
          <FontAwesomeIcon icon={faCopyright} />
        </li>
      </ul>
    </footer>
  );
}
