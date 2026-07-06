import { useState, useEffect } from 'react';

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    const listener = () => setMatches(media.matches);
    
    // Use modern event listener if available, fallback to deprecated addListener
    if (typeof media.addEventListener === 'function') {
      media.addEventListener('change', listener);
    } else if (typeof (media as any).addListener === 'function') {
      (media as any).addListener(listener);
    }
    
    return () => {
      if (typeof media.removeEventListener === 'function') {
        media.removeEventListener('change', listener);
      } else if (typeof (media as any).removeListener === 'function') {
        (media as any).removeListener(listener);
      }
    };
  }, [matches, query]);

  return matches;
}
