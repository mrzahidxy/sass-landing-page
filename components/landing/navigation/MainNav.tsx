'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const LINKS = [
  { name: 'Features', href: '#features' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Reviews', href: '#testimonials' },
  { name: 'FAQ', href: '#faq' }
];

interface MainNavProps {
  onOpenTrial: (source: string) => void;
  onOpenCheckout: (source: string) => void;
}

export default function MainNav({ onOpenTrial, onOpenCheckout }: MainNavProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleMobileNavigate = (callback?: () => void) => {
    setIsMenuOpen(false);
    callback?.();
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <nav aria-label="Primary" className="border-b border-slate-100">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="text-2xl font-bold tracking-tight text-gray-900" aria-label="TaskMasterPro home">
            TaskMasterPro
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {LINKS.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <button
              type="button"
              className="rounded-lg px-4 py-2 text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
            >
              Sign In
            </button>
            <button
              type="button"
              onClick={() => onOpenTrial('nav_trial')}
              className="rounded-lg px-4 py-2 text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
            >
              Start Free Trial
            </button>
            <button
              type="button"
              onClick={() => onOpenCheckout('nav_buy')}
              className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Buy Pro
            </button>
          </div>

          <div className="md:hidden">
            <button
              type="button"
              onClick={handleToggleMenu}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
              className="rounded-lg p-2 text-gray-600 transition hover:bg-gray-100 hover:text-gray-900"
            >
              {isMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
              <span className="sr-only">Toggle navigation</span>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div id="mobile-navigation" className="md:hidden">
            <div className="space-y-1 border-t border-gray-100 bg-white px-4 pb-6 pt-4 shadow-lg">
              {LINKS.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block rounded-lg px-3 py-2 text-base font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900"
                  onClick={() => handleMobileNavigate()}
                >
                  {item.name}
                </a>
              ))}
              <div className="mt-4 space-y-2 border-t border-gray-100 pt-4">
                <button
                  type="button"
                  className="block w-full rounded-lg px-3 py-2 text-left text-base font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900"
                >
                  Sign In
                </button>
                <button
                  type="button"
                  onClick={() => handleMobileNavigate(() => onOpenTrial('nav_trial_mobile'))}
                  className="block w-full rounded-lg px-3 py-2 text-left text-base font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900"
                >
                  Start Free Trial
                </button>
                <button
                  type="button"
                  onClick={() => handleMobileNavigate(() => onOpenCheckout('nav_buy_mobile'))}
                  className="block w-full rounded-lg bg-blue-600 px-3 py-2 text-left text-base font-semibold text-white shadow-sm transition-colors hover:bg-blue-700"
                >
                  Buy Pro
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}