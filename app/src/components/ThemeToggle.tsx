import { useTheme } from '../hooks/useTheme';
import { Icon } from './Icon';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const label = `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`;
  return <button type="button" className="theme-toggle" onClick={toggleTheme} aria-label={label} title={label}>
    <Icon name={theme === 'dark' ? 'sunny-outline' : 'moon-outline'} />
  </button>;
}
