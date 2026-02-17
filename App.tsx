import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Outlet, useLocation } from 'react-router-dom';
import { Sun, Moon } from 'lucide-react';

const App: React.FC = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const location = useLocation();
  const currentPath = location.pathname;

  useEffect(() => {
    if (theme === 'light') {
      document.body.classList.add('theme-light');
    } else {
      document.body.classList.remove('theme-light');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="min-h-screen bg-brand-dark text-brand-text-primary transition-colors duration-500 overflow-x-hidden">
      <Header theme={theme} />
      {currentPath !== '/' && currentPath !== '/zero-data' && (
        <div className="relative mt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <img src="https://raw.githubusercontent.com/shockandco-dev/Simtope-Jan-15/main/assets/zero-dollars-for-6-months-with-Simtope-leaderboard.png" alt="Zero Dollars for 6 months with Simtope" className="w-full" />
          </div>
        </div>
      )}
      <main className="relative">
        <Outlet />
      </main>
      
      <Footer theme={theme} />
      
      {/* Theme Toggle */}
      <button 
        onClick={toggleTheme}
        className="fixed bottom-6 left-6 z-50 p-4 bg-brand-surface/80 backdrop-blur-md border border-brand-border text-brand-text-primary rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all"
        aria-label="Toggle Theme"
      >
        {theme === 'dark' ? <Sun className="w-6 h-6 text-amber-400" /> : <Moon className="w-6 h-6 text-brand-primary" />}
      </button>
    </div>
  );
};

export default App;
