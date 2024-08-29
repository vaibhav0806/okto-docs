"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    // Automatically redirect to /docs when this page is visited
    router.replace('/docs/react-sdk/introduction-to-okto/okto-universe');
  }, [router]);
  return (
    <main className="flex h-screen flex-col justify-center text-center">
      {/* <h1 className="mb-4 text-2xl font-bold">Okto SDK</h1>
      <p className="text-fd-muted-foreground">
        You can open{' '}
        <Link
          href="/docs/react-sdk/getting-started"
          className="text-fd-foreground font-semibold underline"
        >
          /docs
        </Link>{' '}
        and see the documentation.
      </p> */}
    </main>
  );
}
