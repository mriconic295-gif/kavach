import React from "react";
import { useEffect, useRef } from "react";

export default function CursorEffect() {
  const ref = useRef(null);
  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const el = ref.current;
    const move = (e) => {
      el.style.transform = `translate3d(${e.clientX - 18}px, ${e.clientY - 18}px, 0)`;
      const target = e.target.closest("a, button, .interactive-card, .price-card, .solution-card");
      document.body.classList.toggle("cursor-hover", !!target);
    };
    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, []);
  return <div ref={ref} className="cursor-dot" aria-hidden="true" />;
}