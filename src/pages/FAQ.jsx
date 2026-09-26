import React from "react";
import { useState } from "react";

const faqs = [
["What is KAVACH?","KAVACH is a cybersecurity-as-a-service initiative focused on practical security checks, assessments, awareness, hardening and ongoing support."],
["Do you perform authorized security testing?","Yes. Security testing should be performed only on systems and environments where the client has permission and a defined scope."],
["Can a small business start with one service?","Yes. A focused website, Wi-Fi, data, awareness or other security check can be used as a starting point."],
["Do you provide reports?","Yes. Engagements are designed around clear findings and practical recommendations appropriate to the selected scope."],
["Do you offer annual support?","Yes. KAVACH has Basic, Business and Complete annual support options, along with institute-focused annual support."],
["Can you help after a security incident?","KAVACH offers an initial security incident check and basic incident assistance. More complex incidents may require specialist response partners."],
["Are the listed prices fixed?","They are launch prices for the listed scopes. A custom or expanded engagement may require a different scope and quotation."],
["Where is KAVACH based?","KAVACH is based in Bhavnagar, Gujarat, India, with a focus on accessible cybersecurity services."]
];

export default function FAQ() { const [open,setOpen]=useState(0); return <section className="page-pad inner-page"><div className="page-title"><span className="section-no">07 / FAQ</span><h1>Questions, answered<br /><em>clearly.</em></h1><p>Short answers to common questions about scope, services and support.</p></div><div className="faq-list">{faqs.map(([q,a],i)=><div className={`faq-item ${open===i?"open":""}`} key={q}><button onClick={()=>setOpen(open===i?-1:i)}><span>{String(i+1).padStart(2,"0")}</span><b>{q}</b><strong>{open===i?"−":"+"}</strong></button>{open===i&&<div className="faq-answer"><p>{a}</p></div>}</div>)}</div></section> }