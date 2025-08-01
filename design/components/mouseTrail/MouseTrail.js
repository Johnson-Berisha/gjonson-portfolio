"use client";
import { useEffect } from "react";

export default function MouseTrail() {
  useEffect(() => {
    const container = document.createElement("div");
    container.id = "trail-container";
    document.body.appendChild(container);

    const handleMove = (e) => {
      const dot = document.createElement("div");
      dot.className = "trail-dot";
      dot.style.left = `${e.clientX}px`;
      dot.style.top = `${e.clientY}px`;
      container.appendChild(dot);
      setTimeout(() => dot.remove(), 500);
    };

    document.addEventListener("mousemove", handleMove);
    return () => {
      document.removeEventListener("mousemove", handleMove);
      container.remove();
    };
  }, []);

  return null;
}
