import { useEffect, useRef } from 'react';

export function CursorFollower() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)');
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    const ring = ref.current;
    if (!ring) return;
    let frame = 0;
    let initialized = false;
    let visible = false;
    let x = 0, y = 0, targetX = 0, targetY = 0;

    const animate = () => {
      x += (targetX - x) * 0.2;
      y += (targetY - y) * 0.2;
      ring.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      if (visible && (Math.abs(targetX - x) > 0.1 || Math.abs(targetY - y) > 0.1)) frame = requestAnimationFrame(animate);
      else frame = 0;
    };
    const hide = () => {
      visible = false;
      initialized = false;
      ring.classList.remove('is-visible', 'is-interactive');
      cancelAnimationFrame(frame);
      frame = 0;
    };
    const move = (event: PointerEvent) => {
      if (!fine.matches || reduced.matches || event.pointerType === 'touch') return;
      targetX = event.clientX;
      targetY = event.clientY;
      if (!initialized) { x = targetX; y = targetY; initialized = true; }
      visible = true;
      ring.classList.add('is-visible');
      ring.classList.toggle('is-interactive', event.target instanceof Element && Boolean(event.target.closest('a, button, input, textarea, select')));
      if (!frame) frame = requestAnimationFrame(animate);
    };

    window.addEventListener('pointermove', move, { passive: true });
    document.documentElement.addEventListener('pointerleave', hide);
    window.addEventListener('blur', hide);
    fine.addEventListener('change', hide);
    reduced.addEventListener('change', hide);
    return () => {
      hide();
      window.removeEventListener('pointermove', move);
      document.documentElement.removeEventListener('pointerleave', hide);
      window.removeEventListener('blur', hide);
      fine.removeEventListener('change', hide);
      reduced.removeEventListener('change', hide);
    };
  }, []);

  return <div ref={ref} className="cursor-follower" aria-hidden="true"><div /></div>;
}
