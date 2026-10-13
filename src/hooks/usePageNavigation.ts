import { useEffect, useSyncExternalStore } from 'react';

export const pages = ['about', 'resume', 'portfolio', 'contact'] as const;
export type Page = (typeof pages)[number];
const navigationEvent = 'portfolio:navigate';

export function pageFromHash(hash: string): Page {
  const value = hash.replace(/^#/, '').toLowerCase();
  return pages.includes(value as Page) ? (value as Page) : 'about';
}

function subscribe(callback: () => void) {
  for (const event of ['hashchange', 'popstate', navigationEvent])
    window.addEventListener(event, callback);
  return () => {
    for (const event of ['hashchange', 'popstate', navigationEvent])
      window.removeEventListener(event, callback);
  };
}

function navigate(next: Page) {
  if (window.location.hash === `#${next}`) return;
  window.history.pushState(null, '', `#${next}`);
  window.dispatchEvent(new Event(navigationEvent));
}

export function usePageNavigation() {
  const page = useSyncExternalStore(
    subscribe,
    () => pageFromHash(window.location.hash),
    () => 'about' as Page,
  );
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [page]);
  return { page, navigate };
}
