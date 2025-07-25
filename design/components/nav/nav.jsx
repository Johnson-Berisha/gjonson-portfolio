import Link from "next/link";

export default function Nav() {
  return (
    <nav>
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
      {/* hamburger menu */}
      <div className="menu">
        <div className="hamburger">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
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
