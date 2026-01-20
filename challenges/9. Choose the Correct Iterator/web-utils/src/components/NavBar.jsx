import { Link } from 'react-router-dom';
import { useActiveRoute } from '../hooks/useActiveRoute';
import { isRouteActive } from '../utils';
import { parseCodeInText } from '../helpers/introPageHelpers';

const NavBar = () => {
    const isActiveRouteCompleted = isRouteActive('a', 'b') !== undefined;
  return (
    <nav className="navbar">
      <div className="nav-brand">
        <h1>📋 Task Manager</h1>
        <p className="subtitle">Master Array Iterators in React</p>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/" className={useActiveRoute('/') ? 'active' : ''}>
            Introduction
          </Link>
        </li>
        <li>
          <Link to="/dashboard" className={useActiveRoute('/dashboard') ? 'active' : ''}>
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/tasks" className={useActiveRoute('/tasks') ? 'active' : ''}>
            All Tasks
          </Link>
        </li>
        <li>
          <Link to="/stats" className={useActiveRoute('/stats') ? 'active' : ''}>
            Statistics
          </Link>
        </li>
        <li>
          <Link to="/tags" className={useActiveRoute('/tags') ? 'active' : ''}>
            Tags
          </Link>
        </li>
        {!isActiveRouteCompleted && (
          <li className="nav-warning">
            <span className="warning-icon">⚠️</span>
            <span className="warning-text">
              {parseCodeInText('Complete [isRouteActive] for navigation highlighting')}
            </span>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
