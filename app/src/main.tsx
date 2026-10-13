import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App';
import './styles/original.css';
import './styles/theme.css';

const root = document.getElementById('root');
if (!root) throw new Error('Portfolio root element is missing.');
const app = <StrictMode><App /></StrictMode>;
if (root.childElementCount > 0) hydrateRoot(root, app);
else createRoot(root).render(app);
