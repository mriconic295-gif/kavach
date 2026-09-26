import React from "react";
const solutions = [
  ["01","Small Businesses","Practical website, Wi-Fi, data and awareness checks without enterprise-level complexity."],
  ["02","Startups & Teams","Security foundations that fit fast-moving teams, cloud tools and growing digital exposure."],
  ["03","Schools","Awareness, website and basic network security support designed for educational environments."],
  ["04","Colleges & Institutes","Institute security checks, website + Wi-Fi reviews and annual security support."],
  ["05","Professional Organizations","Structured assessments and security guidance for teams handling business information."],
  ["06","Local Businesses","Accessible security services for organizations building their digital presence in Bhavnagar and beyond."]
];

export default function Solutions() {
  return <section className="page-pad inner-page"><div className="page-title"><span className="section-no">04 / SOLUTIONS</span><h1>Security for the<br /><em>real world.</em></h1><p>Different organizations have different exposure. The security scope should match the environment.</p></div>
    <div className="solution-grid">{solutions.map(([no,title,desc])=><article className="solution-card" key={no}><span>{no}</span><h2>{title}</h2><p>{desc}</p><div>Explore focus ↗</div></article>)}</div>
  </section>;
}