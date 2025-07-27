import Link from 'next/link'

import { useRouter } from 'next/router';
import Header from './Header';
import Footer from './Footer';
import { useState, useEffect } from 'react';

export default function Layout({ children }) {
  const router = useRouter();
   const [hideFooter, setHideFooter] = useState(false);
  // Hide footer only on homepage
   useEffect(() => {
    // Safe to access router.pathname on client side
    setHideFooter(router.pathname === '/state/[slug]');
  }, [router.pathname]);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <main className="flex-grow">{children}</main>
      {!hideFooter && <Footer />}
    </div>
  );
}
