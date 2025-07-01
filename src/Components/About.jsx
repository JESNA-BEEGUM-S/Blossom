import React from 'react';

const About = () => {
  const styles = {
    container: {
      background: 'linear-gradient(to right, #fdf6f0, #ffe9ec)',
      minHeight: '100vh',
      padding: '40px',
      fontFamily: 'Arial, sans-serif',
      color: '#333',
    },
    heading: {
      fontSize: '2.5rem',
      color: '#c94f7c',
      marginBottom: '20px',
    },
    paragraph: {
      fontSize: '1.1rem',
      lineHeight: '1.8',
      maxWidth: '800px',
    },
    image: {
      marginTop: '30px',
      maxWidth: '100%',
      borderRadius: '12px',
      boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>About Blossom - The Flower App</h1>
      <p style={styles.paragraph}>
        Blossom is your go-to app for discovering, caring, and shopping for your favorite flowers.
        Whether you're a passionate gardener or someone who simply loves fresh blooms,
        Blossom brings the beauty of flowers right to your fingertips.
      </p>
      <p style={styles.paragraph}>
        Our mission is to spread joy through nature's most beautiful creations.
        With expert flower care tips, seasonal suggestions, and an ever-growing catalog,
        we help you nurture your green thumb and create a blooming atmosphere wherever you are.
      </p>
      <img
        src="/flower.avif"
        alt="Beautiful flowers"
        style={styles.image}
      />
    </div>
  );
};

export default About;
