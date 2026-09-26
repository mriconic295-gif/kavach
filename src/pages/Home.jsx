import React from "react";
import { Link } from "react-router-dom";
import TurtleHero from "../components/TurtleHero";

const risks = [
  ["01", "Website Exposure", "Misconfiguration, outdated software and exposed services can create avoidable entry points."],
  ["02", "Unsafe Wi-Fi & Networks", "Weak passwords, poor segmentation and insecure network settings can expose devices and data."],
  ["03", "Data & Account Risks", "Weak access controls and poor handling practices can put important information at risk."],
  ["04", "Phishing & Human Error", "A single convincing message can turn a normal workday into a security incident."]
];

export default function Home() {
  return (
    <>
      <section className="hero page-pad">
        <div className="hero-copy">
          <div className="eyebrow">CYBERSECURITY-AS-A-SERVICE / BHAVNAGAR</div>
          <h1>Protect what<br /><em>matters.</em></h1>
          <p className="hero-lead">KAVACH helps organizations understand their exposure, reduce practical security risks and build a stronger everyday security posture.</p>
          <div className="hero-actions">
            <Link className="btn btn-dark" to="/request?service=Website%20Security%20Check">Secure Web <span>↗</span></Link>
            <Link className="text-link" to="/services">Explore services →</Link>
          </div>
        </div>
        <TurtleHero />
      </section>

      <div className="ticker"><span>SECURITY SHOULD BE ACCESSIBLE</span><span>•</span><span>CLARITY OVER COMPLEXITY</span><span>•</span><span>PROTECTION WITH PURPOSE</span><span>•</span></div>

      <section className="page-pad section">
        <div className="section-head">
          <span className="section-no">01 / EXPOSURE</span>
          <h2>Most security problems<br /><em>start quietly.</em></h2>
          <p>We focus on the practical weaknesses organizations can actually understand and improve.</p>
        </div>
        <div className="risk-grid">
          {risks.map(([no,title,desc]) => <article className="risk-card interactive-card" key={no}><div className="card-no">{no}</div><h3>{title}</h3><p>{desc}</p><Link className="card-arrow" to={`/request?service=${encodeURIComponent(title)}`}>↗</Link></article>)}
        </div>
      </section>

      <section className="page-pad split-section accent-lime">
        <div><span className="section-no">02 / THE KAVACH APPROACH</span><h2>One security partner.<br /><em>Multiple layers.</em></h2></div>
        <div><p className="large-copy">From a website check to Wi-Fi security, awareness, hardening and ongoing support, KAVACH turns scattered security tasks into a clear path forward.</p><Link className="btn btn-dark" to="/services">See all services ↗</Link></div>
      </section>

      <section className="page-pad section">
        <div className="section-head compact"><span className="section-no">03 / WHO WE HELP</span><h2>Built for organizations that<br /><em>can't ignore security.</em></h2></div>
        <div className="mini-grid">
          {["Small Businesses","Startups & Teams","Schools","Colleges & Institutes","Professional Organizations","Local Businesses"].map((x,i)=><div className="mini-card" key={x}><span>0{i+1}</span><h3>{x}</h3><p>Practical security support matched to your environment and needs.</p></div>)}
        </div>
      </section>

      <section className="page-pad final-cta">
        <span className="section-no">04 / TAKE THE FIRST STEP</span>
        <h2>Find the weakness<br /><em>before someone else does.</em></h2>
        <Link className="btn btn-dark" to="/contact">Talk to KAVACH ↗</Link>
      </section>
    </>
  );
}