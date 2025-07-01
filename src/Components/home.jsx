
import React, { useState } from 'react';

function Home() {
  const [selectedFlower, setSelectedFlower] = useState('');
  const [showTips, setShowTips] = useState(false);

  const flowerTypes = [
    'Rose',
    'Tulip',
    'Lily',
    'Orchid',
    'Sunflower',
    'Daisy'
  ];

  const handleFlowerChange = (e) => {
    setSelectedFlower(e.target.value);
  };

  const toggleTips = () => {
    setShowTips(!showTips);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>This is the Home Page</h1>
      <h2 style={styles.subtitle}>Tap Submit Button for Next Page</h2>
      <button style={styles.button}>Submit</button>

      {/* Seller & Buyer Options */}
      <div style={styles.section}>
        <h3>Choose your role:</h3>
        <button style={styles.roleButton}>Seller</button>
        <button style={styles.roleButton}>Buyer</button>
      </div>

      {/* Flower Dropdown */}
      <div style={styles.section}>
        <h3>Select a Flower:</h3>
        <select value={selectedFlower} onChange={handleFlowerChange} style={styles.select}>
          <option value="">-- Select Flower --</option>
          {flowerTypes.map((flower, index) => (
            <option key={index} value={flower}>{flower}</option>
          ))}
        </select>
        {selectedFlower && (
          <p style={{ marginTop: '10px' }}>
            You selected: <strong>{selectedFlower}</strong>
          </p>
        )}
      </div>

      {/* Flower Care Tips */}
      <div style={styles.section}>
        <h3>Need Flower Caring Tips?</h3>
        <button onClick={toggleTips} style={styles.tipButton}>
          {showTips ? 'Hide Tips' : 'Show Tips'}

        </button>
        {showTips && (
          <ul style={styles.tipsList}>
            <li>Water flowers regularly without overwatering.</li>
            <li>Ensure they get enough sunlight.</li>
            <li>Use organic fertilizer once a month.</li>
            <li>Prune dead petals and leaves.</li>
            <li>Keep them in a clean pot or vase.</li>
          </ul>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: '#f5f5f5',
      backgroundImage: 'url("https://wallpapers.com/images/featured/aesthetic-floral-background-03obnwro9jtlzpg8.jpg")',
    padding: '30px',
    fontFamily: 'Arial, sans-serif',
    minHeight: '100vh'
  },
  title: {
    color: '#4B0082',
    textAlign: 'center'
  },
  subtitle: {
    textAlign: 'center',
    color: '#555'
  },
  button: {
    display: 'block',
    margin: '10px auto',
    padding: '10px 20px',
    backgroundColor: '#6a1b9a',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer'
  },
  section: {
    marginTop: '30px',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '12px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
  },
  roleButton: {
    marginRight: '10px',
    padding: '8px 16px',
    backgroundColor: '#2196f3',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer'
  },
  select: {
    padding: '8px 12px',
    borderRadius: '6px',
    border: '1px solid #ccc'
  },
  tipButton: {
    marginTop: '10px',
    padding: '8px 16px',
    backgroundColor: '#ff5722',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer'
  },
  tipsList: {
    marginTop: '15px',
    lineHeight: '1.6',
    paddingLeft: '20px'
  }
};

export default Home;
