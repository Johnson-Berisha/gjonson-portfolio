import React from "react";
import Link from "next/link";
import Image from "next/image";

const socials = () => {
  return (
    <div className="socials">
      <ul className="social-list">
        <li>
          <Link
            href="https://www.facebook.com/gjonson.berisha.1"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <Image src="/facebook.svg" alt="Facebook" width={30} height={30} />
          </Link>
        </li>
        <li>
          <Link
            href="https://www.instagram.com/johnson_berisha/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/2/21/Instagram_Glyph_Gradient_RGB_logo.svg"
              alt="Instagram"
              width={30}
              height={30}
            />
          </Link>
        </li>
        <li>
          <Link
            href="https://github.com/Johnson-Berisha/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <Image src="/github.svg" alt="GitHub" width={30} height={30} />
          </Link>
        </li>
        <li>
          <Link
            href="https://codepen.io/johnsonberisha"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <Image src="/codepen.svg" alt="CodePen" width={30} height={30} />
          </Link>
        </li>
        <li>
          <Link
            href="https://twitter.com/BerishaGjonson"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <Image src="/twitter.svg" alt="Twitter" width={30} height={30} />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default socials;
