import { Outlet } from 'react-router';
import { AppFooter } from './components/AppFooter';
import { AppHeader } from './components/AppHeader';
import { usePreloadClass } from './hooks/usePreloadClass';
import { ScrollToTop } from '@src/ui/ScrollToTop';
const RootLayout = () => {
  usePreloadClass();

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
