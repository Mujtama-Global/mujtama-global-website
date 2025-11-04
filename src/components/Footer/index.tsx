import React from "react";
import s from "./Footer.module.scss";
import Link from "next/link";
const Footer = () => {
  return (
    <div className={s.footer}>
      <ul>
        <li>
          <Link href="/privacy-policy">Privacy Policy</Link>
        </li>
        <li>Terms & Conditions</li>
        <li>Contact Us</li>
      </ul>
      <p>&copy; {new Date().getFullYear()} Mujtama. All rights reserved.</p>
    </div>
  );
};

export default Footer;
