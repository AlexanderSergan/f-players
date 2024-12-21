'use client';

import { useEffect } from 'react';
import { toast } from 'sonner';

export function WelcomeToast() {
  useEffect(() => {
    // ignore if screen height is too small
    if (window.innerHeight < 650) return;
    if (!document.cookie.includes('welcome-toast=2')) {
      toast('🛍️ Welcome to F-Players', {
        id: 'welcome-toast',
        duration: Infinity,
        onDismiss: () => {
          document.cookie = 'welcome-toast=2; max-age=31536000; path=/';
        },
        description: (
          <>
            Navigate around and you will find socials of any player you like. ⚽️{' '}
            {/* <a
              href="https://vercel.com/templates/next.js/nextjs-commerce"
              className="text-blue-600 hover:underline"
              target="_blank"
            >
              Deploy your own
            </a> */}
            {/* . */}
          </>
        )
      });
    }
  }, []);

  return null;
}
