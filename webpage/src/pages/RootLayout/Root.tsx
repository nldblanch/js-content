import { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router';
import { AppFooter } from './components/AppFooter';
import { AppHeader } from './components/AppHeader';
import { usePreloadClass } from './hooks/usePreloadClass';
import { ScrollToTop } from '@src/ui/ScrollToTop';
const RootLayout = () => {
  usePreloadClass();

  const location = useLocation();
  const navigate = useNavigate();
  
  // one time hook for gh-pages redirects
  useEffect(() => {
    if (!location.search.startsWith('?/')) return;

    const raw = location.search.slice(2);
    const querySeparatorIndex = raw.indexOf('&');

    const rawPath = querySeparatorIndex === -1 ? raw : raw.slice(0, querySeparatorIndex);
    const rawQuery = querySeparatorIndex === -1 ? '' : raw.slice(querySeparatorIndex + 1);

    const pathname = `/${rawPath.replace(/~and~/g, '&')}`.replace(/\/+/g, '/');
    const query = rawQuery ? `?${rawQuery.replace(/~and~/g, '&')}` : '';

    navigate(`${pathname}${query}${location.hash}`, { replace: true });
  }, [location.hash, location.search, navigate]);

  return (
    <div className="flex flex-col min-h-screen">
      <AppHeader />
      <main className="bg-black-700 grow flex flex-col min-h-0">
        <ScrollToTop />
        <Outlet />
      </main>
      <AppFooter />
    </div>
  );
};

export default RootLayout;
