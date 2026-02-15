import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'PTE Study Tool',
  description: 'Master the PTE Academic exam with structure, strategy, and practice.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-slate-50 flex flex-col">
          <Navbar />
          <main className="flex-1 container mx-auto py-8 px-4">
            {children}
          </main>
          <footer className="border-t py-6 text-center text-slate-500 text-sm">
            © {new Date().getFullYear()} PTE Study Tool. Built with NotebookLM Research.
          </footer>
        </div>
      </body>
    </html>
  );
}
