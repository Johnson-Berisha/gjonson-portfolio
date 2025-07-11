"use client";

import { useEffect } from "react";

export default function ProgressBar() {
  useEffect(() => {
    const progressBar = document.getElementById("progress-bar");
    const updateProgressBar = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrollPercentage = (scrollTop / windowHeight) * 100;
      progressBar.style.width = `${scrollPercentage}%`;
    };

    window.addEventListener("scroll", updateProgressBar);
    updateProgressBar(); // Initial call to set the progress bar on load

    return () => {
      window.removeEventListener("scroll", updateProgressBar);
    };
  }, []);

  return <div id="progress-bar" className="progress-bar" />;
}
