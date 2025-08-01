"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const slider = scrollRef.current;
    if (!slider) return;

    let isDown = false;
    let startX;
    let scrollLeft;
    let animationFrame;

    const handleMouseDown = (e) => {
      isDown = true;
      slider.classList.add("active");
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    };

    const handleMouseLeave = () => {
      isDown = false;
      slider.classList.remove("active");
      cancelAnimationFrame(animationFrame);
    };

    const handleMouseUp = () => {
      isDown = false;
      slider.classList.remove("active");
      cancelAnimationFrame(animationFrame);
    };

    const handleMouseMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 1.8; // adjust speed here

      cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(() => {
        slider.scrollLeft = scrollLeft - walk;
      });
    };

    slider.addEventListener("mousedown", handleMouseDown);
    slider.addEventListener("mouseleave", handleMouseLeave);
    slider.addEventListener("mouseup", handleMouseUp);
    slider.addEventListener("mousemove", handleMouseMove);

    return () => {
      slider.removeEventListener("mousedown", handleMouseDown);
      slider.removeEventListener("mouseleave", handleMouseLeave);
      slider.removeEventListener("mouseup", handleMouseUp);
      slider.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <main>
      {/* <h1 className="heading-xl">XL Heading</h1>
      <h1 className="heading-lg">Large Heading</h1>
      <h1 className="heading-md">Medium Heading</h1>
      <button className="btn">Button</button>
      <br />
      <br />
      <a href="#" className="link">
        Link Hereee
      </a> */}
      <header>
        <div className="title-side">
          <div className="tooltip">
            <h1 className="heading-xl title">Gjonson Berisha</h1>
            <span className="tooltip-text">Jon-sohn Beh-ree-shah</span>
          </div>
          <p className="heading-md title-desc">Web Developer</p>
        </div>
        <div className="potrait-side">
          <div className="img-me"></div>
        </div>
      </header>

      <section id="about">
        <h2 className="heading-md">About Me</h2>
        <p>
          <span>
            My name is Gjonson Berisha, and I’m an aspiring web developer based
            in Kosovo. I specialize in front-end development with a strong focus
            on clean, maintainable code, accessibility, and responsive design.
          </span>
          <span>
            I primarily work with HTML, CSS, and JavaScript, and I’m currently
            deepening my skills with modern frameworks like Next.js and React. I
            enjoy building intuitive user interfaces, exploring UI/UX best
            practices, and crafting experiences that feel fast, stable, and
            user-focused.
          </span>
          <span>
            My work is driven by constant learning and curiosity. I regularly
            build personal projects to improve my knowledge, challenge myself,
            and better understand how professional-grade web applications are
            structured and deployed.
          </span>
          <span>
            While I’m still early in my journey, I take every line of code
            seriously and aim to grow into a developer who builds tools people
            genuinely enjoy using.
          </span>
          <span>
            I’m currently focused on improving my CSS skills, building
            full-stack web apps, and preparing for real-world freelance and
            collaboration opportunities in the near future.
          </span>
        </p>
      </section>

      <section id="projects">
        <h2 className="heading-md">Projects</h2>
        <p>A selection of projects I have developed and continue to enhance</p>

        <div className="scroll-breakout">
          <div className="projects-cards" ref={scrollRef}>
            <div className="project p1">
              <Image
                src="/interactive-protfolio.png"
                alt="Project 1"
                width={300}
                height={200}
                className="project-image"
              />
              <div className="hidden-btn">
                <Link className="btn" href="./projects/intr-portfolio">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="project p2">
              <Image
                src="/berisha-al.png"
                alt="Project 2"
                width={300}
                height={200}
                className="project-image"
              />
              <div className="hidden-btn">
                <Link className="btn" href="./projects/berisha-al">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="project demo">
              Coming soon...
              <div className="hidden-btn">
                <button className="btn">Learn More</button>
              </div>
            </div>
            <div className="project demo">
              Coming soon...
              <div className="hidden-btn">
                <button className="btn">Learn More</button>
              </div>
            </div>
            <div className="project demo">
              Coming soon...
              <div className="hidden-btn">
                <button className="btn">Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact">
        <h2 className="heading-md">Contact</h2>
        <p>gjonsonberisha@email.com</p>
        <p>+383 48 711 544</p>
      </section>

      <footer>
        <p>© Gjonson 2025</p>
      </footer>
    </main>
  );
}
