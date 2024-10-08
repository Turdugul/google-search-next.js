import './globals.css';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Google Search',
  description:
    'Google search built with Next.js and Tailwind CSS.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className='relative min-h-screen'>
        {children}
        <Footer />
      </body>
    </html>
  );
}
