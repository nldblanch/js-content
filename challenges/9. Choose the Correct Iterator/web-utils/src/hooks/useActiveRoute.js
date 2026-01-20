import { useLocation } from 'react-router-dom';
import { isRouteActive } from '../utils';

/**
 * Custom hook to check if a given path is currently active
 * Uses the isRouteActive utility function that students will implement
 * @param {string} path - The path to check against the current location
 * @returns {boolean} - True if the path matches the current location
 */
export const useActiveRoute = (path) => {
  const location = useLocation();
  
  return isRouteActive(path, location.pathname);
};
