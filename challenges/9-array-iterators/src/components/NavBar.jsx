import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="nav-brand">
        <h1>📋 Task Manager</h1>
        <p className="subtitle">Core Array Methods (Beginner)</p>
      </div>
      <ul className="nav-links">
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
            Introduction
          </NavLink>
        </li>
        <li>
          <NavLink to="/tasks" className={({ isActive }) => (isActive ? 'active' : '')}>
            Task Manager
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
