import { Link } from 'react-router-dom';

function Landing() {
  return (
    <>
      <div
        style={{
          textAlign: 'center',
          backgroundImage: 'url("https://png.pngtree.com/background/20250110/original/pngtree-blooming-beauty-aesthetic-hd-nature-image-of-flower-as-iphone-wallpaper-picture-image_15825054.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'rgb(253, 251, 251)',
          textShadow: '1px 1px 4px #000', // improves text readability
          padding: '40px'
        }}
      >

        <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>
  <span style={{ fontFamily: 'cinzel, serif', color: '#c0c0c0' }}>
    BLOSSOM
  </span><br />
  Welcome to Flower World 🌸
</h1>
<nav>
          <Link to="/home" style={linkStyle}>Home</Link>
          <Link to="/about" style={linkStyle}>About</Link>
          <Link to="/counter" style={linkStyle}>Counter</Link>
          <Link to="/navigate" style={linkStyle}>Navigate</Link>
          <Link to="/location" style={linkStyle}>Location</Link>
          <Link to="/parameter" style={linkStyle}>Parameter</Link>
    </nav>
      </div>
    </>
  );
}

// Reusable link style
const linkStyle = {
  margin: '10px',
  padding: '10px 20px',
  backgroundColor: 'rgba(255, 255, 255, 0.2)',
  borderRadius: '8px',
  color: 'white',
  textDecoration: 'none',
  fontWeight: 'bold',
  backdropFilter: 'blur(3px)'
};

export default Landing;
