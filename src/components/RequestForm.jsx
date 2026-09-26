import React, { useState } from 'react';
import { supabase, hasSupabase } from '../lib/supabase';

const services = [
  'Website Security Check','Standard Website Security Check','Web Application Security',
  'Wi-Fi / Network Security','Website + Wi-Fi Combo','Data & Access Security',
  'Cybersecurity Awareness / Training','Phishing Awareness','WAF Setup Assistance',
  'Website Hardening','Security Assessment','Security Incident Assistance','Other'
];

export default function RequestForm({ selectedService = '' }) {
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);
  const submit = async (e) => {
    e.preventDefault(); setLoading(true); setStatus('');
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    try {
      if (!hasSupabase) throw new Error('Database is not configured yet. Add the Supabase keys in .env.');
      const { error } = await supabase.from('inquiries').insert({
        name: data.name, organization: data.organization, phone: data.phone,
        email: data.email, service: data.service, message: data.message
      });
      if (error) throw error;
      setStatus('Request submitted successfully. KAVACH will contact you.');
      e.currentTarget.reset();
    } catch (err) { setStatus(err.message || 'Could not submit request.'); }
    finally { setLoading(false); }
  };
  return <form className="contact-form request-form" onSubmit={submit}>
    <div className="selected-service"><span>SELECTED SERVICE</span><strong>{selectedService || 'Choose a service'}</strong></div>
    <label>Full Name<input name="name" required placeholder="Your name" /></label>
    <label>Company / Organisation<input name="organization" required placeholder="Company / Institute name" /></label>
    <div className="form-two"><label>Phone<input name="phone" required placeholder="Phone number" /></label><label>Email<input type="email" name="email" required placeholder="you@example.com" /></label></div>
    <label>Service<select name="service" defaultValue={selectedService || services[0]}>{services.map(s=><option key={s}>{s}</option>)}</select></label>
    <label>Requirement<textarea name="message" required rows="6" placeholder="Tell us what you want checked or secured." /></label>
    <button className="btn btn-dark" disabled={loading}>{loading ? 'Submitting…' : 'Submit Security Request ↗'}</button>
    {status && <div className="form-status">{status}</div>}
  </form>;
}
