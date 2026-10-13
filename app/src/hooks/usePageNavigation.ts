import { useEffect, useState } from 'react';

export const pages = ['about', 'resume', 'portfolio', 'contact'] as const;
export type Page = typeof pages[number];

export function pageFromHash(hash: string): Page {
  const value = hash.replace(/^#/, '').toLowerCase();
  return pages.includes(value as Page) ? value as Page : 'about';
}

export function usePageNavigation() {
  const [page, setPage] = useState<Page>('about');

  useEffect(() => {
    const sync = () => setPage(pageFromHash(window.location.hash));
    sync();
    window.addEventListener('hashchange', sync);
    window.addEventListener('popstate', sync);
    return () => {
      window.removeEventListener('hashchange', sync);
      window.removeEventListener('popstate', sync);
    };
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [page]);

  function navigate(next: Page) {
    if (page === next && window.location.hash === `#${next}`) return;
    window.history.pushState(null, '', `#${next}`);
    setPage(next);
  }

  return { page, navigate };
}
