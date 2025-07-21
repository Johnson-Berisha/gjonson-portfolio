// import css
import "./styles/berisha-prj.css";
import Image from "next/image";
import Link from "next/link";

export default function BerishaPrj() {
  return (
    <div className="berisha-prj">
      <div className="showcase">
        <div className="logo">
          <div className="img-logo"></div>
        </div>
        <div className="project-detail">
          <div className="name">
            <span className="name-placeholder">Project</span>
            <h1>Berisha AL</h1>
          </div>
          <div className="date">
            <span className="date-placeholder">Year</span>
            <h1>2023</h1>
          </div>
        </div>
      </div>
      <div className="description">
        <p>
          Berisha AL is a project that showcases the work of a talented
          construcsion group in Kosovo. It highlights their achievements and
          contributions in their field.
        </p>
        <div className="image-grid">
          <Image
            src="/berisha-al.png"
            width={300}
            height={200}
            alt="prj1"
            className="prj-img"
          ></Image>
          <Image
            src="/berisha-al-img/berisha-al-2.png"
            width={300}
            height={200}
            alt="prj1"
            className="prj-img"
          ></Image>
          <Image
            src="/berisha-al-img/berisha-al-4.png"
            width={300}
            height={200}
            alt="prj1"
            className="prj-img"
          ></Image>
          <Image
            src="/berisha-al-img/berisha-al-3.png"
            width={300}
            height={200}
            alt="prj1"
            className="prj-img"
          ></Image>
          <Image
            src="/berisha-al-img/berisha-al-5.png"
            width={300}
            height={200}
            alt="prj1"
            className="prj-img"
          ></Image>
          <Image
            src="/berisha-al-img/berisha-al-6.png"
            width={300}
            height={200}
            alt="prj1"
            className="prj-img"
          ></Image>
        </div>
        <div className="link">
          <Link href="https://berishaal.vercel.app/" className="link">
            View Website
          </Link>
        </div>
      </div>
    </div>
  );
}
