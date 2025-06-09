import { useState } from 'react';
import './Header.css';
import { NavLink } from 'react-router';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav-links">
          <h3>React Router Sample Site</h3>
          <li>
            <NavLink to={'/'}>Homepage </NavLink>
          </li>
          <li>
            <NavLink to={'/dashboard'}>Dashboard </NavLink>
          </li>
        </ul>
      </nav>
      <div className="avatar-container">
        <img
          src="data:image/png;base64,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"
          alt="Avatar"
          className="avatar"
          onClick={() => setShowMenu(!showMenu)}
        />
        {showMenu && (
          <div className="dropdown">
            <a href="/login">Login</a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
