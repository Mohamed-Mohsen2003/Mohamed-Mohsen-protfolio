'use client';

import type { ReactNode } from 'react';
import { CursorFollower } from './CursorFollower';
import { Sidebar } from './Sidebar';
import { ThemeToggle } from './ThemeToggle';
import { pages, usePageNavigation, type Page } from '../hooks/usePageNavigation';

const titles: Record<Page, string> = {
  about: 'About Me',
  resume: 'Resume',
  portfolio: 'Portfolio',
  contact: 'Contact',
};

export default function PortfolioShell({ sections }: { sections: Record<Page, ReactNode> }) {
  const { page, navigate } = usePageNavigation();
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <CursorFollower />
      <main>
        <Sidebar />
        <div className="main-content" id="main-content">
          <nav className="navbar" aria-label="Main navigation">
            <ul className="navbar-list">
              {pages.map((item) => (
                <li className="navbar-item" key={item}>
                  <a
                    href={`#${item}`}
                    className={`navbar-link${page === item ? ' active' : ''}`}
                    aria-current={page === item ? 'page' : undefined}
                    onClick={(event) => {
                      event.preventDefault();
                      navigate(item);
                    }}
                  >
                    {titles[item] === 'About Me' ? 'About' : titles[item]}
                  </a>
                </li>
              ))}
              <li className="navbar-item navbar-theme">
                <ThemeToggle />
              </li>
            </ul>
          </nav>
          {pages.map((item) => (
            <article
              key={item}
              id={item}
              className={`${item}${page === item ? ' active' : ''}`}
              aria-labelledby={`${item}-title`}
              aria-hidden={page !== item}
            >
              <header>
                <h2 className="h2 article-title" id={`${item}-title`}>
                  {titles[item]}
                </h2>
              </header>
              {sections[item]}
            </article>
          ))}
        </div>
      </main>
    </>
  );
}
