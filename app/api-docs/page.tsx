'use client';

import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { ApiReferenceReact } from '@scalar/api-reference-react';
import '@scalar/api-reference-react/style.css';

const App = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'data-theme') {
          const newTheme = document.documentElement.getAttribute('data-theme');
          if (newTheme === 'light' || newTheme === 'dark') {
            setTheme(newTheme);
          }
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });

    return () => observer.disconnect();
  }, [setTheme]);

  if (!mounted) return null;

  return (
    <ApiReferenceReact
      configuration={{
        spec: {
          url: 'https://okto-sdk-docs-new.vercel.app/api-sec',
        },
        theme: 'none',
        hideTestRequestButton: true,
        darkMode: theme === 'dark',
        favicon: '../../public/logo/okto-icon.png',
        hiddenClients: [],
        metadata: {
          title: 'Okto API Reference'
        },
        hideDarkModeToggle: true
      }}
    />
  );
};

export default App;