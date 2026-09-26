import React from "react";
import { NavLink } from "react-router-dom";

const links = [
  ["/", "Home"],
  ["/about", "About"],
  ["/services", "Services"],
  ["/solutions", "Solutions"],
  ["/process", "Process"],
  ["/pricing", "Pricing"],
  ["/faq", "FAQ"],
  ["/contact", "Contact"]
];

export default function Navbar() {
  return (
    <header className="topbar">
      <NavLink to="/" className="brand">
        <img className="brand-logo" src="/assets/kavach-logo.png" alt="KAVACH" />
        <span>KAVACH</span>
      </NavLink>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {links.map(([to, label]) => (
          <NavLink key={to} to={to} end={to === "/"} className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>
            {label}
          </NavLink>
        ))}
      </nav>
      <NavLink to="/contact" className="nav-cta">Secure Now <span>↗</span></NavLink>
    </header>
  );
}