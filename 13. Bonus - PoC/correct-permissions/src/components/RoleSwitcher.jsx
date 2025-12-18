import React from 'react';
import { ROLES } from '../data/permissions';

const RoleSwitcher = ({ currentRole, onRoleChange }) => {
  const roles = Object.values(ROLES);

  return (
    <div className="role-switcher">
      <label htmlFor="role-select">Test as:</label>
      <select 
        id="role-select"
        value={currentRole} 
        onChange={(e) => onRoleChange(e.target.value)}
        className="role-select"
      >
        {roles.map(role => (
          <option key={role} value={role}>
            {role.charAt(0).toUpperCase() + role.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
};

export default RoleSwitcher;
