"use client";
import React from "react";
import "./Header.css";
import { useState } from "react";
import Image from "next/image";
import logo from "public/Image/logo.png";
import logo1 from "public/Image/logo1.png";

import Link from "next/link";
import { ReactElement } from "react";
import { faCartShopping, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";

export default function Header() {
  return (
    <nav className="nav">
      <div className="logo-left">
        <Image className="logo" src={logo1} alt="logo" />
      </div>
      <div className="header-middle">
        <ul className="menu">
          <li className="menu-item">
            <a href="/">Home</a>
          </li>
          <li className="menu-item">
            <a href="/about">About</a>
          </li>
          <li className="menu-item">
            <a href="/blog">Recipes</a>
          </li>
        </ul>
      </div>
      <div className="header-right">
        <ul>
          <li>
            <FontAwesomeIcon icon={faGithub} />
          </li>
          <li>
            <FontAwesomeIcon icon={faTwitter} />
          </li>
          <li>
            <FontAwesomeIcon icon={faEnvelope} />
          </li>
          <button className="button__loader">
            <span className="button__text">
              Checklist
              <FontAwesomeIcon icon={faCartShopping} />
            </span>
          </button>
        </ul>
      </div>
    </nav>
  );
}
