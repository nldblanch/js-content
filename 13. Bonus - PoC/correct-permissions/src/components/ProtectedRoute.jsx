import React, { useMemo } from 'react';
import PermissionManager from '../utils/permissions';

const ProtectedRoute = ({ children, requiredPermission, currentRole }) => {
  const permissionManager = useMemo(() => new PermissionManager(currentRole), [currentRole]);
  const hasAccess = permissionManager.canAccessRoute(requiredPermission);

  if (!hasAccess) {
    return (
      <div className="access-denied">
        <div className="access-denied-content">
          <span className="lock-icon">🔒</span>
          <h2>Access Denied</h2>
          <p>You don't have permission to view this page.</p>
          <p className="current-role">Current role: <strong>{currentRole}</strong></p>
          <p className="hint">Try switching to a different role to access this content.</p>
        </div>
      </div>
    );
  }

  return children;
};

export default ProtectedRoute;
