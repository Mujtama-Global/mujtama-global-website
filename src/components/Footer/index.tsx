"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import s from "./Footer.module.scss";

const Footer = () => {
  const pathname = usePathname();

  const LINKS = [
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms & Conditions" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <footer className={s.footer}>
      <div className={s.leftSection}>
        <p className={s.logo}>Mujtama</p>
        <p className={s.tagline}>Stay connected to your faith</p>
      </div>

      <ul className={s.links}>
        {LINKS.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={pathname === link.href ? s.activeLink : ""}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <div className={s.copy}>
        <p>&copy; {new Date().getFullYear()} Mujtama. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
