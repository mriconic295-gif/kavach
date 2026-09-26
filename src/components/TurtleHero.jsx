import React from "react";
export default function TurtleHero() {
  return (
    <div className="turtle-stage">
      <div className="turtle-glow" />
      <div className="turtle-frame">
        <div className="pixel-turtle" aria-label="KAVACH digital guardian">
          <span className="t-shell">🐢</span>
          <span className="t-spark s1">+</span><span className="t-spark s2">+</span>
          <span className="t-spark s3">✦</span>
        </div>
      </div>
      <div className="stage-tag">DIGITAL GUARDIAN / 01</div>
    </div>
  );
}