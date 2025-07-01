import React from 'react';
import { useLocation } from 'react-router-dom';

function Location() {
 const location = useLocation();
 return (
 <div style={{ background: 'white', padding: '20px' }}>
 <h2 style={{ color: '#0066cc' }}>Vithura,Nedumangad</h2>
 <p>Current Path: {location.pathname}</p>

 </div>
 );
}
export default Location;
