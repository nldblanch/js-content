import React, { useMemo } from 'react';
import { navLinks } from '../data/permissions';
import PermissionManager from '../utils/permissions';

const Sidebar = ({ currentRole, activePage, setActivePage }) => {
  const permissionManager = useMemo(() => new PermissionManager(currentRole), [currentRole]);
  const accessibleLinks = permissionManager.getAccessibleLinks(navLinks);

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h2>🔐 SecureApp</h2>
        <p className="role-badge">Role: {currentRole}</p>
      </div>
      
      <nav className="sidebar-nav">
        <ul>
          {accessibleLinks.map(link => (
            <li key={link.id}>
              <button
                className={`nav-link ${activePage === link.path ? 'active' : ''}`}
                onClick={() => setActivePage(link.path)}
              >
                <span className="nav-icon">{link.icon}</span>
                <span className="nav-label">{link.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className="sidebar-footer">
        <p>Accessible: {accessibleLinks.length}/{navLinks.length} pages</p>
      </div>
    </aside>
  );
};

export default Sidebar;
