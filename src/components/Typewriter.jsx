"use client";
import { useEffect, useState } from "react";

export default function Typewriter({
  texts = [],
  speed = 50,
  deleteSpeed = 30,
  pause = 1500,
  className = ""
}) {
  const [textIndex, setTextIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];

    let timeout;

    if (!isDeleting) {
      // typing
      if (displayed.length < currentText.length) {
        timeout = setTimeout(() => {
          setDisplayed(currentText.slice(0, displayed.length + 1));
        }, speed);
      } else {
        // pause before deleting
        timeout = setTimeout(() => setIsDeleting(true), pause);
      }
    } else {
      // deleting
      if (displayed.length > 0) {
        timeout = setTimeout(() => {
          setDisplayed(currentText.slice(0, displayed.length - 1));
        }, deleteSpeed);
      } else {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, textIndex, texts, speed, deleteSpeed, pause]);

  return <span className={className} style={{whiteSpace: "pre-line"}}>{displayed}</span>;
}