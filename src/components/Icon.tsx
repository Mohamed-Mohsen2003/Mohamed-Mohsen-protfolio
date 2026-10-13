import { createElement } from 'react';

export function Icon({ name, className }: { name: string; className?: string }) {
  return createElement('ion-icon', { name, className, 'aria-hidden': 'true' });
}
