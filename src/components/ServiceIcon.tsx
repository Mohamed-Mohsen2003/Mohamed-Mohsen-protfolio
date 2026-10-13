export function ServiceIcon({ name }: { name: 'mobile' | 'desktop' }) {
  return (
    <svg
      className="service-outline"
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {name === 'mobile' ? (
        <>
          <rect x="11" y="4" width="18" height="32" rx="2.5" />
          <path d="M17 7h6M19 32h2" />
        </>
      ) : (
        <>
          <rect x="4" y="6" width="32" height="22" rx="2" />
          <path d="M4 24h32M20 28v6M13 34h14" />
        </>
      )}
    </svg>
  );
}
