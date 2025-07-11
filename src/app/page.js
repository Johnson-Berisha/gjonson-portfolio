// import Link from "../../design/components/link/link";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 className="heading-xl">XL Heading</h1>
      <h1 className="heading-lg">Large Heading</h1>
      <h1 className="heading-md">Medium Heading</h1>
      <button className="btn">Button</button>
      <br />
      <br />
      <a href="#" className="link">
        Link Hereee
      </a>

      {/* <Link href="#" className="link">hello</Link> */}
      <Link href="/about" className="link">
        About
      </Link>

      <header>
        <h1>Gjonson Berisha</h1>
        <p>Web Developer</p>
      </header>

      <section id="about">
        <h2>About Me</h2>
        <p>
          Im Gjonson, a young web developer from Kosovo building clean,
          responsive websites. lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
          irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla
        </p>
      </section>

      <section id="projects">
        <h2>Projects</h2>
        {/* We'll add projects later */}
      </section>

      <section id="contact">
        <h2>Contact</h2>
        <p>Email: youremail@example.com</p>
        <p>WhatsApp: +383 6x xxx xxx</p>
      </section>

      <footer>
        <p>© Gjonson 2025</p>
      </footer>
    </main>
  );
}
