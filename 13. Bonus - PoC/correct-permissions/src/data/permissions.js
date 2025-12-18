// Role definitions
export const ROLES = {
  ADMIN: 'admin',
  MANAGER: 'manager',
  USER: 'user',
  GUEST: 'guest'
};

// Permission definitions
export const PERMISSIONS = {
  VIEW_DASHBOARD: 'view_dashboard',
  VIEW_USERS: 'view_users',
  EDIT_USERS: 'edit_users',
  VIEW_REPORTS: 'view_reports',
  EDIT_REPORTS: 'edit_reports',
  VIEW_SETTINGS: 'view_settings',
  EDIT_SETTINGS: 'edit_settings',
  VIEW_ANALYTICS: 'view_analytics'
};

// Role to permissions mapping
export const rolePermissions = {
  [ROLES.ADMIN]: [
    PERMISSIONS.VIEW_DASHBOARD,
    PERMISSIONS.VIEW_USERS,
    PERMISSIONS.EDIT_USERS,
    PERMISSIONS.VIEW_REPORTS,
    PERMISSIONS.EDIT_REPORTS,
    PERMISSIONS.VIEW_SETTINGS,
    PERMISSIONS.EDIT_SETTINGS,
    PERMISSIONS.VIEW_ANALYTICS
  ],
  [ROLES.MANAGER]: [
    PERMISSIONS.VIEW_DASHBOARD,
    PERMISSIONS.VIEW_USERS,
    PERMISSIONS.VIEW_REPORTS,
    PERMISSIONS.EDIT_REPORTS,
    PERMISSIONS.VIEW_ANALYTICS
  ],
  [ROLES.USER]: [
    PERMISSIONS.VIEW_DASHBOARD,
    PERMISSIONS.VIEW_REPORTS
  ],
  [ROLES.GUEST]: [
    PERMISSIONS.VIEW_DASHBOARD
  ]
};

// Navigation links with required permissions
export const navLinks = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    path: '/dashboard',
    icon: '📊',
    requiredPermission: PERMISSIONS.VIEW_DASHBOARD
  },
  {
    id: 'users',
    label: 'Users',
    path: '/users',
    icon: '👥',
    requiredPermission: PERMISSIONS.VIEW_USERS
  },
  {
    id: 'reports',
    label: 'Reports',
    path: '/reports',
    icon: '📄',
    requiredPermission: PERMISSIONS.VIEW_REPORTS
  },
  {
    id: 'analytics',
    label: 'Analytics',
    path: '/analytics',
    icon: '📈',
    requiredPermission: PERMISSIONS.VIEW_ANALYTICS
  },
  {
    id: 'settings',
    label: 'Settings',
    path: '/settings',
    icon: '⚙️',
    requiredPermission: PERMISSIONS.VIEW_SETTINGS
  }
];
