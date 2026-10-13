import { About } from './components/About';
import { Contact } from './components/Contact';
import { CursorFollower } from './components/CursorFollower';
import { Portfolio } from './components/Portfolio';
import { Resume } from './components/Resume';
import { Sidebar } from './components/Sidebar';
import { ThemeToggle } from './components/ThemeToggle';
import { pages, usePageNavigation, type Page } from './hooks/usePageNavigation';
import { profile } from './data/portfolio';

const titles: Record<Page, string> = { about: 'About Me', resume: 'Resume', portfolio: 'Portfolio', contact: 'Contact' };

export default function App() {
  const { page, navigate } = usePageNavigation();
  return <>
    <a className="skip-link" href="#main-content">Skip to content</a>
    <ThemeToggle /><CursorFollower />
    <main><Sidebar /><div className="main-content" id="main-content">
      <nav className="navbar" aria-label="Main navigation"><ul className="navbar-list">{pages.map(item => <li className="navbar-item" key={item}>
        <a href={`#${item}`} className={`navbar-link${page === item ? ' active' : ''}`} aria-current={page === item ? 'page' : undefined} onClick={event => { event.preventDefault(); navigate(item); }}>{titles[item] === 'About Me' ? 'About' : titles[item]}</a>
      </li>)}</ul></nav>
      {pages.map(item => <article key={item} id={item} className={`${item}${page === item ? ' active' : ''}`} aria-labelledby={`${item}-title`} aria-hidden={page !== item}>
        <header><h2 className="h2 article-title" id={`${item}-title`}>{titles[item]}</h2></header>
        {item === 'about' ? <About /> : item === 'resume' ? <Resume /> : item === 'portfolio' ? <Portfolio /> : <Contact />}
      </article>)}
    </div></main>
    <footer className="site-footer"><a href={profile.source} target="_blank" rel="noopener noreferrer">View React source on GitHub</a></footer>
  </>;
}
