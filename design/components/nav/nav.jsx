"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Nav() {
  useEffect(() => {
    const menu = document.querySelector(".menu");
    const hamburger = document.querySelector(".hamburger");

    hamburger?.addEventListener("click", () => {
      menu?.classList.toggle("open");
    });
  }, []);

  return (
    <nav>
      <ul className="normal-menu">
        <li>
          <Link href="/" className="link">
            Home
            <div className="underline shorter-underline"></div>
          </Link>
        </li>
        <li>
          <Link href="/about" className="link">
            About
            <div className="underline shorter-underline"></div>
          </Link>
        </li>
        <li>
          <Link href="/projects" className="link">
            Projects
            <div className="underline longer-underline"></div>
          </Link>
        </li>
        <li>
          <Link href="/contact" className="link">
            Contact
            <div className="underline longer-underline"></div>
          </Link>
        </li>
      </ul>
      {/* hamburger menu */}
      <div className="hamburger">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div className="menu">
        <div className="actual-menu">
          <ul>
            <li>
              <Link href="/" className="link">
                Home
                <div className="underline shorter-underline"></div>
              </Link>
            </li>
            <li>
              <Link href="/about" className="link">
                About
                <div className="underline shorter-underline"></div>
              </Link>
            </li>
            <li>
              <Link href="/projects" className="link">
                Projects
                <div className="underline longer-underline"></div>
              </Link>
            </li>
            <li>
              <Link href="/contact" className="link">
                Contact
                <div className="underline longer-underline"></div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
