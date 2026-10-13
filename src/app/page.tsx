import PortfolioShell from '../components/PortfolioShell';
import { About } from '../components/About';
import { Contact } from '../components/Contact';
import { Portfolio } from '../components/Portfolio';
import { Resume } from '../components/Resume';

export default function HomePage() {
  return (
    <PortfolioShell
      sections={{
        about: <About />,
        resume: <Resume />,
        portfolio: <Portfolio />,
        contact: <Contact />,
      }}
    />
  );
}
