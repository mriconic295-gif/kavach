import React from "react";
import { Link } from "react-router-dom";

const team = [
  ["team-01.jpg", "Security Analyst", "Assessment & Reporting"],
  ["team-02.jpg", "Security Associate", "Web & Network Security"],
  ["team-03.jpg", "Awareness Lead", "Training & Human Risk"],
  ["team-04.jpg", "Technical Associate", "Security Support"],
  ["team-05.jpg", "Security Coordinator", "Client & Operations"]
];

export default function About() {
  return <section className="page-pad inner-page">
    <div className="page-title"><span className="section-no">02 / ABOUT KAVACH</span><h1>Security that feels<br /><em>understandable.</em></h1><p>We believe cybersecurity should be practical, transparent and accessible — not a maze of jargon.</p></div>
    <div className="about-story"><div className="story-card accent-blue"><span>01</span><h2>Our purpose</h2><p>KAVACH is built around a simple idea: organizations should know where they are exposed before an incident forces the question.</p></div><div className="story-card accent-purple"><span>02</span><h2>Our principles</h2><p>Authorized testing, responsible disclosure, privacy-first handling and clear reporting guide the way we work.</p></div><div className="story-card accent-lime"><span>03</span><h2>Our focus</h2><p>Websites, applications, networks, data, accounts and people — the everyday layers where practical security matters.</p></div></div>
    <div className="founder-section"><div className="founder-photo"><img src="/assets/founder.jpg" alt="Founder placeholder"/><span>FOUNDER PHOTO</span></div><div className="founder-info"><span className="section-no">FOUNDER / KAVACH</span><h2>Built around<br /><em>practical security.</em></h2><p>Leadership, security strategy and responsible delivery.</p><div className="founder-links"><a href="tel:+91XXXXXXXXXX">+91 XXXXXXXXXX</a><a href="mailto:hello@kavach.security">hello@kavach.security</a><a href="https://github.com/" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://linkedin.com/" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="https://instagram.com/" target="_blank" rel="noreferrer">Instagram ↗</a></div></div></div>
    <div className="team-head"><span className="section-no">TEAM KAVACH</span><h2>People behind the<br /><em>protection.</em></h2></div>
    <div className="team-grid team-five">{team.map(([img,role,desc],i)=><article className="person-card" key={role}><div className="person-image"><img src={`/assets/${img}`} alt={`${role} placeholder`} /><span>UPLOAD / {img}</span></div><div className="person-meta"><small>{String(i+1).padStart(2,"0")}</small><h3>{role}</h3><p>{desc}</p></div></article>)}</div>
    <div className="note-box"><strong>IMAGE UPLOADS</strong><p>Upload only these 5 Team KAVACH images: team-01.jpg to team-05.jpg. Founder photo stays separate as founder.jpg.</p></div>
    <Link className="btn btn-dark" to="/contact">Work with KAVACH ↗</Link>
  </section>;
}
