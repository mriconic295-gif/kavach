import React from 'react';
import { useSearchParams } from 'react-router-dom';
import RequestForm from '../components/RequestForm';

export default function Request(){
 const [params]=useSearchParams();
 const service=params.get('service') || '';
 return <section className="page-pad inner-page request-page">
   <div className="page-title"><span className="section-no">SERVICE REQUEST</span><h1>Tell us what you<br /><em>want secured.</em></h1><p>The selected service is shown at the top. Send only the information needed to understand your authorized scope.</p></div>
   <div className="request-layout"><RequestForm selectedService={service}/><aside className="request-side accent-lime"><span className="section-no">KAVACH / INQUIRY</span><h2>Clear scope.<br />Clear next step.</h2><p>Your request is stored in the KAVACH database when Supabase is connected. Admins can review and manage inquiries from the private admin panel.</p></aside></div>
 </section>
}
