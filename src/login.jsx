import { Link } from 'react-router-dom';
import './Login.css';

function Login() {
  return (
    <>
    <div className="login-container">
      <label htmlFor="username">Username</label>
      <input type="text" id="username" name="username" />

      <label htmlFor="password">Password</label>
      <input type="password" id="password" name="password" />

      <button type="submit">Submit</button>
    </div>
    <nav style={{ marginTop: '20px' }}>
        <Link to="/" style={{ margin: '10px' }}>Home</Link>
        <Link to="/about" style={{ margin: '10px' }}>About</Link>
      </nav>
      </>
  );
}

export default Login;
