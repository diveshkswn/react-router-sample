import './Homepage.css';

export const HomePage = () => {
  return (
    <section className="main-content">
      <div className="hero">
        <h1>Welcome to the Sample React Router Site</h1>
        <p>
          Your gateway to innovation, creativity, and cutting-edge technology.
        </p>
        <button className="glow-button">Explore Now</button>
      </div>

      <div className="features">
        <div className="feature">
          <h2>🚀 Futuristic Design</h2>
          <p>
            Immerse yourself in an ultra-modern UI with sleek neon aesthetics.
          </p>
        </div>
        <div className="feature">
          <h2>💡 Smart Solutions</h2>
          <p>AI-powered insights and automation to make life easier.</p>
        </div>
        <div className="feature">
          <h2>🌎 Global Connectivity</h2>
          <p>Stay connected with a seamless digital experience.</p>
        </div>
      </div>
    </section>
  );
};
