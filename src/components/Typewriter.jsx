"use client";

import { useEffect, useState } from "react";

export default function Typewriter({
  text = "",
  speed = 50,
  className = "",
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(0);
  }, [text]);

  useEffect(() => {
    if (index >= text.length) return;

    const timeout = setTimeout(() => {
      setIndex((prev) => prev + 1);
    }, speed);

    return () => clearTimeout(timeout);
  }, [index, text, speed]);

  return <p className={className}>{text.slice(0, index)}</p>;
}