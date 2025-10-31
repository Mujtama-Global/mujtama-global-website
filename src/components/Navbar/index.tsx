"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import s from "./Navbar.module.scss";

export default function Navbar() {
  const pathname = usePathname();

  const NAV_ITEMS = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav className={s.root}>
      <div className={s.logo}>🕌 Mujtama</div>
      <div className={s.links}>
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`${s.link} ${pathname === item.href ? s.active : ""}`}
          >
            {item.label}
          </Link>
        ))}
      </div>
      <div className={s.cta}>
        <button className={s.joinBtn}>Join Now</button>
      </div>
    </nav>
  );
}
