import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.taskmasterpro.example'),
  title: {
    default: 'TaskMasterPro | Subscription Management for High-Performing Teams',
    template: '%s | TaskMasterPro'
  },
  description:
    'Launch high-impact projects faster with TaskMasterPro. Manage subscriptions, automate billing, and empower distributed teams with collaborative workflows.',
  keywords: [
    'project management',
    'subscription billing',
    'SaaS productivity',
    'remote collaboration',
    'task tracking'
  ],
  openGraph: {
    title: 'TaskMasterPro',
    description:
      'The modern subscription management platform for high-performing teams.',
    url: 'https://www.taskmasterpro.example',
    siteName: 'TaskMasterPro',
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TaskMasterPro',
    description:
      'Track subscriptions, automate billing, and align teams with a modern collaboration suite.'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} min-h-screen bg-white text-gray-900 antialiased`}>{children}</body>
    </html>
  );
}

