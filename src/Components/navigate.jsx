
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Navigate() {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/');
  };

  return (
    <div style={{ background: 'white', padding: '20px' }}>
      <h2 style={{ color: '#0066cc' }}>useNavigate</h2>
      <button onClick={goToHome}>Go To Home</button>
    </div>
  );
}

export default Navigate;

