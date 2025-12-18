import { useState } from 'react';
import { ROLES } from '../data/permissions';

export const useAuth = () => {
  const [currentRole, setCurrentRole] = useState(ROLES.GUEST);

  const switchRole = (newRole) => {
    setCurrentRole(newRole);
  };

  return {
    currentRole,
    switchRole
  };
};
