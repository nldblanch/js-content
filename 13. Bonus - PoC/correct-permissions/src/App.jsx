import { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import RoleSwitcher from './components/RoleSwitcher';
import ProtectedRoute from './components/ProtectedRoute';
import { Dashboard, Users, Reports, Analytics, Settings } from './pages';
import { useAuth } from './hooks/useAuth';
import { PERMISSIONS } from './data/permissions';

// Route configuration mapping paths to components and permissions
const ROUTES = {
  '/dashboard': {
    component: Dashboard,
    permission: PERMISSIONS.VIEW_DASHBOARD
  },
  '/users': {
    component: Users,
    permission: PERMISSIONS.VIEW_USERS
  },
  '/reports': {
    component: Reports,
    permission: PERMISSIONS.VIEW_REPORTS
  },
  '/analytics': {
    component: Analytics,
    permission: PERMISSIONS.VIEW_ANALYTICS
  },
  '/settings': {
    component: Settings,
    permission: PERMISSIONS.VIEW_SETTINGS
  }
};

const App = () => {
  const { currentRole, switchRole } = useAuth();
  const [activePage, setActivePage] = useState('/dashboard');

  // Get the current route configuration
  const currentRoute = ROUTES[activePage] || ROUTES['/dashboard'];
  const PageComponent = currentRoute.component;

  return (
    <div className="app">
      <Sidebar 
        currentRole={currentRole}
        activePage={activePage}
        setActivePage={setActivePage}
      />
      
      <main className="main-content">
        <header className="app-header">
          <h1>Permission-Based Access Control</h1>
          <RoleSwitcher 
            currentRole={currentRole}
            onRoleChange={switchRole}
          />
        </header>
        
        <div className="page-container">
          <ProtectedRoute 
            requiredPermission={currentRoute.permission}
            currentRole={currentRole}
          >
            <PageComponent />
          </ProtectedRoute>
        </div>
      </main>
    </div>
  );
};

export default App;
