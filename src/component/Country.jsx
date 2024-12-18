import { CountryField,StateField, VisitorAPIComponents } from 'react-country-state-fields';
import React, { useState } from 'react';

function Country() {
    const [country, setCountry] = useState({}); // the selected country
  const [state, setState] = useState({}); // the selected state
  const visitorApiPrjectId = ""; // assign your project ID here
  return (
    <VisitorAPIComponents projectId={visitorApiPrjectId} handleCountryChange={(countryObj) => setCountry(countryObj)} handleStateChange={(stateObj) => setState(stateObj)}>
        <div className=''>  <CountryField  label="" className="rounded-xl bg-slate-300"></CountryField></div>
    
      {/* <StateField label="State/Province"></StateField> */}
    </VisitorAPIComponents>
  )
}

export default Country