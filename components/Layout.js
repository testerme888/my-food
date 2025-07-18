import Link from 'next/link'

import { useRouter } from 'next/router';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
  const router = useRouter();

  // Hide footer only on homepage
  const hideFooter = router.pathname === '/state';

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <main className="flex-grow">{children}</main>
      {!hideFooter && <Footer />}
    </div>
  );
}
