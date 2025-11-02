import React from "react";
import s from "./Footer.module.scss";
const Footer = () => {
  return (
    <div className={s.footer}>
      <ul>
        <li>Privacy Policy</li>
        <li>Terms & Conditions</li>
        <li>Contact Us</li>
      </ul>
      <p>&copy; {new Date().getFullYear()} Mujtama. All rights reserved.</p>
    </div>
  );
};

export default Footer;
