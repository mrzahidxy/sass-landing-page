import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

interface FooterProps {
  email: string;
  statusMessage: string | null;
  onEmailChange: (value: string) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const NAV_GROUPS = [
  {
    title: 'Product',
    links: [
      { label: 'Features', href: '#features' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'Integrations', href: '/pricing' },
      { label: 'API', href: '/resources' }
    ]
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Terms of Service', href: '/legal/terms' },
      { label: 'Privacy Policy', href: '/legal/privacy' },
      { label: 'Contact', href: '/contact' }
    ]
  }
];

const SOCIAL_LINKS = [
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com', label: 'GitHub' }
];

export default function Footer({ email, statusMessage, onEmailChange, onSubmit }: FooterProps) {
  return (
    <footer className="bg-gray-900 py-16 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold">TaskMasterPro</h3>
            <p className="mt-4 max-w-md text-gray-400">
              Empowering remote teams with intelligent task management, automated subscription workflows, and seamless collaboration tools.
            </p>

            <form onSubmit={onSubmit} className="mt-6 flex flex-col gap-3 sm:flex-row" aria-label="Join the newsletter">
              <div className="relative flex-1">
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  value={email}
                  onChange={(event) => onEmailChange(event.target.value)}
                  placeholder="Enter your email"
                  className="h-12 w-full rounded-lg border border-gray-700 bg-gray-800 px-4 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none"
                  autoComplete="email"
                />
              </div>
              <button
                type="submit"
                className="flex h-12 items-center justify-center rounded-lg bg-blue-600 px-4 text-sm font-semibold text-white transition-colors hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
              >
                <Mail aria-hidden="true" size={20} />
                <span className="ml-2">Subscribe</span>
              </button>
            </form>
            {statusMessage && <p className="mt-2 text-sm text-blue-300">{statusMessage}</p>}
          </div>

          {NAV_GROUPS.map((group) => (
            <div key={group.title}>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300">{group.title}</h4>
              <ul className="mt-4 space-y-3 text-gray-400">
                {group.links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith('#') ? (
                      <a
                        href={link.href}
                        className="transition-colors hover:text-white"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <a href={link.href} className="transition-colors hover:text-white">
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-gray-800 pt-8 text-sm text-gray-400 sm:flex-row">
          <p>ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â© {new Date().getFullYear()} TaskMasterPro. All rights reserved.</p>
          <div className="flex gap-4">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="rounded-full border border-gray-700 p-2 text-gray-400 transition-colors hover:border-gray-500 hover:text-white"
              >
                <social.icon aria-hidden="true" size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

