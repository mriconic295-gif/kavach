import React from "react";
const steps = [
  ["01","Understand Scope","We define what is authorized, what needs checking and what success should look like."],
  ["02","Discover","We review the agreed digital or physical security surface and identify relevant exposure."],
  ["03","Assess","We perform the selected security checks using a controlled, responsible approach."],
  ["04","Report","Findings are organized into clear priorities, impact and practical recommendations."],
  ["05","Improve","We help apply reasonable hardening, configuration or awareness improvements."],
  ["06","Support","For ongoing needs, KAVACH can continue with periodic checks and annual support."]
];

export default function Process() {
  return <section className="page-pad inner-page"><div className="page-title"><span className="section-no">05 / PROCESS</span><h1>Clear from<br /><em>start to finish.</em></h1><p>No unnecessary mystery. Every engagement starts with authorization and ends with understandable next steps.</p></div>
    <div className="process-list">{steps.map(([no,title,desc])=><article key={no} className="process-step"><div className="process-no">{no}</div><div><h2>{title}</h2><p>{desc}</p></div><span>↗</span></article>)}</div>
  </section>;
}