import React, { useEffect } from "react";
import "./index.css";

export default function Heading() {
  useEffect(() => {
    const letters = document.querySelectorAll(".page-title span");
    letters.forEach((letter, index) => {
      letter.style.animationDelay = `${index * 0.1}s`;
    });
  }, []);

  const title = "Le Blogue.";
  return (
    <p className="page-title">
      {title.split("").map((char, index) => (
        <span key={index}>{char}</span>
      ))}
    </p>
  );
}
