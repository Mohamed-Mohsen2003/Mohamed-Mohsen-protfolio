import { useEffect, useSyncExternalStore } from 'react';

export type Theme = 'dark' | 'light';
export const THEME_KEY = 'mm-portfolio-theme';
const subscribers = new Set<() => void>();
let fallbackTheme: Theme | undefined;

export function readSavedTheme(): Theme {
  if (fallbackTheme) return fallbackTheme;
  try {
    return window.localStorage.getItem(THEME_KEY) === 'light' ? 'light' : 'dark';
  } catch {
    return 'dark';
  }
}

function subscribe(callback: () => void) {
  subscribers.add(callback);
  const sync = (event: StorageEvent) => {
    if (event.key === THEME_KEY || event.key === null) {
      fallbackTheme = undefined;
      callback();
    }
  };
  window.addEventListener('storage', sync);
  return () => {
    window.removeEventListener('storage', sync);
    subscribers.delete(callback);
    if (subscribers.size === 0) fallbackTheme = undefined;
  };
}

export function useTheme() {
  const theme = useSyncExternalStore(subscribe, readSavedTheme, () => 'dark' as Theme);
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', theme === 'dark' ? '#121212' : '#f5f3ed');
  }, [theme]);

  function toggleTheme() {
    const next = theme === 'dark' ? 'light' : 'dark';
    try {
      window.localStorage.setItem(THEME_KEY, next);
      fallbackTheme = undefined;
    } catch {
      fallbackTheme = next;
    }
    subscribers.forEach((callback) => callback());
  }
  return { theme, toggleTheme };
}
