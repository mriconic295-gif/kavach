import React from "react";
import { Link } from "react-router-dom";

const services = [
  ["01","Web Security","Website Security Check, Web Application Security, Website Hardening, WAF Setup Assistance"],
  ["02","Network & Wi-Fi","Basic Wi-Fi Security Check, Business Wi-Fi Security Check, Small Office Network Security Check"],
  ["03","Data & Access","Basic Data Security Check, Data + Access Security Check, account and access review"],
  ["04","Human Risk","Cybersecurity Awareness Session, Employee Cybersecurity Training, Phishing Awareness Session"],
  ["05","Assessment","Complete Basic Security Assessment, exposure review and clear security reporting"],
  ["06","Security Support","Security Incident Initial Check, Basic Incident Assistance and ongoing annual support"]
];

export default function Services() {
  return <section className="page-pad inner-page"><div className="page-title"><span className="section-no">03 / SERVICES</span><h1>Protection across<br /><em>the attack surface.</em></h1><p>Choose a focused check or combine services into a practical security program.</p></div>
    <div className="service-list">{services.map(([no,title,desc])=><Link className="service-row interactive-card" key={no} to={`/request?service=${encodeURIComponent(title)}`}><span className="service-no">{no}</span><h2>{title}</h2><p>{desc}</p><span className="row-arrow">↗</span></Link>)}</div>
    <div className="service-bottom"><h2>Need a tailored scope?</h2><p>We can define an authorized assessment around your website, applications, office network, people or data.</p><Link className="btn btn-dark" to="/contact">Request a Scope ↗</Link></div>
  </section>;
}