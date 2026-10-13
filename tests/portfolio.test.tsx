import { describe, expect, it, vi } from 'vitest';
import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import App from '../src/app/page';
import { Contact } from '../src/components/Contact';
import { Portfolio } from '../src/components/Portfolio';
import { ThemeToggle } from '../src/components/ThemeToggle';
import { Sidebar } from '../src/components/Sidebar';
import { CursorFollower } from '../src/components/CursorFollower';
import { THEME_KEY } from '../src/hooks/useTheme';

describe('theme preferences', () => {
  it('defaults to the original dark theme and persists a chosen light theme', () => {
    render(<ThemeToggle />);
    fireEvent.click(screen.getByRole('button', { name: 'Switch to light mode' }));
    expect(document.documentElement.dataset.theme).toBe('light');
    expect(window.localStorage.getItem(THEME_KEY)).toBe('light');
    fireEvent.click(screen.getByRole('button', { name: 'Switch to dark mode' }));
    expect(document.documentElement.dataset.theme).toBe('dark');
  });
  it('restores a saved preference and remains usable if storage is blocked', () => {
    window.localStorage.setItem(THEME_KEY, 'light');
    render(<ThemeToggle />);
    expect(document.documentElement.dataset.theme).toBe('light');
    const spy = vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
      throw new Error('Storage blocked');
    });
    fireEvent.click(screen.getByRole('button', { name: 'Switch to dark mode' }));
    expect(document.documentElement.dataset.theme).toBe('dark');
    spy.mockRestore();
  });
});

describe('navigation', () => {
  it('opens shared hash links and handles back/forward navigation', () => {
    window.history.replaceState(null, '', '/#resume');
    render(<App />);
    expect(document.querySelector('article.active')?.id).toBe('resume');
    fireEvent.click(screen.getByRole('link', { name: 'Portfolio', exact: true }));
    expect(window.location.hash).toBe('#portfolio');
    expect(document.querySelector('article.active')?.id).toBe('portfolio');
    act(() => {
      window.history.replaceState(null, '', '/#resume');
      window.dispatchEvent(new PopStateEvent('popstate'));
    });
    expect(document.querySelector('article.active')?.id).toBe('resume');
  });
});

describe('contact validation', () => {
  it('enables submission only with valid non-empty fields and keeps the existing mail service', () => {
    render(<Contact />);
    const submit = screen.getByRole('button', { name: 'Send Message' }) as HTMLButtonElement;
    expect(submit.disabled).toBe(true);
    fireEvent.change(screen.getByLabelText('Full name'), { target: { value: 'Review Name' } });
    fireEvent.change(screen.getByLabelText('Email address'), {
      target: { value: 'review@example.com' },
    });
    fireEvent.change(screen.getByLabelText('Your message'), {
      target: { value: 'A valid message.' },
    });
    expect(submit.disabled).toBe(false);
    expect(submit.form?.action).toBe('https://formsubmit.co/mohamedmohsen.webdeveloper@gmail.com');
    fireEvent.change(screen.getByLabelText('Your message'), { target: { value: '   ' } });
    expect(submit.disabled).toBe(true);
  });
});

describe('existing content', () => {
  it('retains all nine projects and filters only by their original listed services', async () => {
    render(<Portfolio />);
    expect(screen.getAllByRole('link')).toHaveLength(9);
    fireEvent.click(screen.getByRole('button', { name: 'SEO', exact: true }));
    await waitFor(() => expect(screen.getAllByRole('link')).toHaveLength(3));
    fireEvent.click(screen.getByRole('button', { name: 'All', exact: true }));
    await waitFor(() => expect(screen.getAllByRole('link')).toHaveLength(9));
  });
  it('shows six services, keeps the theme control in navigation, and removes CV download links', () => {
    render(<App />);
    expect(document.querySelectorAll('.service-item')).toHaveLength(6);
    expect(
      screen.getByRole('button', { name: 'Switch to light mode' }).closest('nav'),
    ).not.toBeNull();
    expect(document.querySelector('a[download]')).toBeNull();
    expect(screen.queryByText(/download cv/i)).toBeNull();
  });
  it('uses the international WhatsApp link and accessible contact expansion', () => {
    render(<Sidebar />);
    expect(screen.getByRole('link', { name: '+201142413242' }).getAttribute('href')).toBe(
      'https://wa.me/201142413242',
    );
    const toggle = screen.getByRole('button', { name: 'Show contact details' });
    fireEvent.click(toggle);
    expect(toggle.getAttribute('aria-expanded')).toBe('true');
  });
});

describe('cursor follower', () => {
  it('follows a fine pointer and hides when the pointer leaves the page', () => {
    const media = vi.spyOn(window, 'matchMedia').mockImplementation((query) => ({
      matches: query.includes('pointer: fine'),
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }));
    let scheduled: FrameRequestCallback | undefined;
    const raf = vi.spyOn(window, 'requestAnimationFrame').mockImplementation((callback) => {
      scheduled = callback;
      return 7;
    });
    const cancel = vi.spyOn(window, 'cancelAnimationFrame').mockImplementation(() => {});
    const { container, unmount } = render(<CursorFollower />);
    const ring = container.querySelector('.cursor-follower') as HTMLElement;
    fireEvent(window, new MouseEvent('pointermove', { clientX: 120, clientY: 160 }));
    expect(ring.classList.contains('is-visible')).toBe(true);
    act(() => scheduled?.(0));
    expect(ring.style.transform).toBe('translate3d(120px, 160px, 0)');
    fireEvent(document.documentElement, new Event('pointerleave'));
    expect(ring.classList.contains('is-visible')).toBe(false);
    unmount();
    media.mockRestore();
    raf.mockRestore();
    cancel.mockRestore();
  });
});
