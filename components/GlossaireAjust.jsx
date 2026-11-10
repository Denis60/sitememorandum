'use client';
import { useEffect } from 'react';

// Garde les infobulles des termes techniques dans l’écran : une bulle qui déborderait à droite s’aligne sur le bord droit du terme.
export default function GlossaireAjust() {
  useEffect(() => {
    const ajuster = (e) => {
      const terme = e.target.closest && e.target.closest('.terme');
      if (!terme) return;
      const bulle = terme.querySelector('.terme-bulle');
      if (!bulle || window.matchMedia('(max-width: 640px)').matches) return;
      bulle.style.left = '';
      bulle.style.right = '';
      requestAnimationFrame(() => {
        const r = bulle.getBoundingClientRect();
        if (r.right > window.innerWidth - 12) { bulle.style.left = 'auto'; bulle.style.right = '0'; }
      });
    };
    document.addEventListener('mouseover', ajuster);
    document.addEventListener('focusin', ajuster);
    return () => { document.removeEventListener('mouseover', ajuster); document.removeEventListener('focusin', ajuster); };
  }, []);
  return null;
}
