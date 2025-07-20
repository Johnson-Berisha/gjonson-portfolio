import Image from "next/image";
import Link from "next/link";

import "./styles/portfolio-prj.css";

export default function IntrPortfolio() {
  return (
    <div className="berisha-prj">
      <div className="showcase">
        <div className="logo">
          <div className="img-logo portfolio-logo"></div>
        </div>
        <div className="project-detail">
          <div className="name">
            <span className="name-placeholder">Project</span>
            <h1>LenisJS Portfolio</h1>
          </div>
          <div className="date">
            <span className="date-placeholder">Year</span>
            <h1>2023</h1>
          </div>
        </div>
      </div>
      <div className="description">
        <p>
          This is a personal project, where I experimented with interactive
          tools like Lenis JS and Gsap. It is themed as my own portfolio
          website.
        </p>
        <div className="image-grid">
          <Image
            src="/interactive-protfolio.png"
            width={300}
            height={200}
            alt="prj1"
            className="prj-img"
          ></Image>
          <Image
            src="/portfolio-img/portfolio-1.png"
            width={300}
            height={200}
            alt="prj1"
            className="prj-img"
          ></Image>
          <Image
            src="/portfolio-img/portfolio-3.png"
            width={300}
            height={200}
            alt="prj1"
            className="prj-img"
          ></Image>
          <Image
            src="/portfolio-img/portfolio-4.png"
            width={300}
            height={200}
            alt="prj1"
            className="prj-img"
          ></Image>
          <Image
            src="/portfolio-img/portfolio-5.png"
            width={300}
            height={200}
            alt="prj1"
            className="prj-img"
          ></Image>
          <Image
            src="/portfolio-img/portfolio-6.png"
            width={300}
            height={200}
            alt="prj1"
            className="prj-img"
          ></Image>
        </div>
        <div className="link">
          <Link href="https://beta-jb.vercel.app/" className="link">
            View Website
          </Link>
        </div>
      </div>
    </div>
  );
}
