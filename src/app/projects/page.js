"use client";

import "./projects.css";
import Image from "next/image";
import Link from "next/link";

import { useEffect, useRef } from "react";

export default function ProjectsPage() {
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
    <div className="projects-showcase">
      <div className="projects">
        <div className="scroll-breakout">
          <div className="projects-cards" ref={scrollRef}>
            <div className="project p1">
              <div className="project-name">
                <div className="img-logo"></div>
              </div>
              <div className="hidden-btn">
                <Link href="/" className="btn">
                  View More
                </Link>
              </div>
            </div>
            <div className="project p2">
              <div className="project-name">
                <div className="img-logo"></div>
              </div>
              <div className="hidden-btn">
                <Link href="/" className="btn">
                  View More
                </Link>
              </div>
            </div>
            <div className="project demo"></div>
            <div className="project demo"></div>
            <div className="project demo"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
