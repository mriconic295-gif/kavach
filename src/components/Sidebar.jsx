import React from "react";
import { NavLink } from "react-router-dom";

const links = [
  ["/", "01", "Home"], ["/about", "02", "About"], ["/services", "03", "Services"],
  ["/solutions", "04", "Solutions"], ["/process", "05", "Process"],
  ["/pricing", "06", "Pricing"], ["/faq", "07", "FAQ"], ["/contact", "08", "Contact"]
];

export default function Sidebar() {
  return (
    <aside className="side-rail" aria-label="Page navigation">
      <div className="rail-label">KAVACH / SECURITY</div>
      <div className="rail-links">
        {links.map(([to, no, label]) => (
          <NavLink key={to} to={to} end={to === "/"} className={({isActive}) => isActive ? "rail-link active" : "rail-link"}>
            <span>{no}</span><b>{label}</b>
          </NavLink>
        ))}
      </div>
      <div className="rail-bottom">BHAVNAGAR · GUJARAT · INDIA</div>
    </aside>
  );
}