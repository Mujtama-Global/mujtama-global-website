"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import s from "./Navbar.module.scss";

export default function Navbar() {
  const pathname = usePathname(); // ✅ works on the server now

  return (
    <div className={s.root}>
      <div></div>
      <div className={s.links}>
        <Link href="/" className={pathname === "/" ? s.active : ""}>
          Home
        </Link>
        <Link href="/about" className={pathname === "/about" ? s.active : ""}>
          About
        </Link>
        <Link
          href="/contact"
          className={pathname === "/contact" ? s.active : ""}
        >
          Contact
        </Link>
      </div>
      <div />
    </div>
  );
}
