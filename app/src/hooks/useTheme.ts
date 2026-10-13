import { useEffect, useState } from 'react';

export type Theme = 'dark' | 'light';
export const THEME_KEY = 'mm-portfolio-theme';

export function readSavedTheme(): Theme {
  try { return window.localStorage.getItem(THEME_KEY) === 'light' ? 'light' : 'dark'; }
  catch { return 'dark'; }
}

export function useTheme() {
  // A stable first render keeps server markup and hydration consistent.
  const [theme, setTheme] = useState<Theme>('dark');
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setTheme(readSavedTheme());
    setReady(true);
    const sync = (event: StorageEvent) => {
      if (event.key === THEME_KEY) setTheme(event.newValue === 'light' ? 'light' : 'dark');
    };
    window.addEventListener('storage', sync);
    return () => window.removeEventListener('storage', sync);
  }, []);

  useEffect(() => {
    // The small head script has already applied a saved theme. Do not
    // overwrite it with the server's default before the preference is restored.
    if (!ready) return;
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#121212' : '#f5f3ed');
  }, [theme, ready]);

  function toggleTheme() {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    try { window.localStorage.setItem(THEME_KEY, next); } catch { /* Browsing remains usable when storage is unavailable. */ }
  }

  return { theme, toggleTheme };
}
