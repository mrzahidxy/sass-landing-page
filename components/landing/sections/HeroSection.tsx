import type { ReactNode } from 'react';

interface HeroSectionProps {
  onOpenTrial: (source: string) => void;
  children?: ReactNode;
}

export default function HeroSection({ onOpenTrial, children }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Manage tasks
            <span className="block text-blue-600">effortlessly</span>
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600 sm:text-xl">
            Transform your remote team&apos;s productivity with TaskMasterPro. Real-time collaboration, intelligent tracking,
            and seamless integrations - all in one powerful platform.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button
              type="button"
              onClick={() => onOpenTrial('hero_trial')}
              className="transform rounded-lg bg-blue-600 px-8 py-4 text-lg font-medium text-white shadow-lg transition duration-200 hover:scale-105 hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Start Free Trial
            </button>
            {children ?? (
              <a
                href="#pricing"
                className="rounded-lg border-2 border-gray-300 px-8 py-4 text-lg font-medium text-gray-700 transition-colors hover:border-gray-400 hover:text-gray-900"
              >
                View Pricing
              </a>
            )}
          </div>
          <p className="mt-4 text-sm text-gray-500">No credit card required — 14-day free trial</p>
        </div>

        <div className="relative mt-16">
          <div className="mx-auto max-w-4xl rounded-2xl bg-gray-100 p-8 shadow-2xl">
            <div className="rounded-lg bg-white p-6 shadow-lg">
              <div className="mb-4 flex items-center space-x-2">
                <span aria-hidden className="h-3 w-3 rounded-full bg-red-400" />
                <span aria-hidden className="h-3 w-3 rounded-full bg-yellow-400" />
                <span aria-hidden className="h-3 w-3 rounded-full bg-green-400" />
              </div>
              <div className="space-y-4">
                <div className="h-8 w-1/3 rounded bg-gray-200" />
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                  <div className="rounded-lg bg-blue-50 p-4">
                    <div className="mb-2 h-4 w-2/3 rounded bg-blue-200" />
                    <div className="h-3 w-full rounded bg-blue-100" />
                  </div>
                  <div className="rounded-lg bg-green-50 p-4">
                    <div className="mb-2 h-4 w-2/3 rounded bg-green-200" />
                    <div className="h-3 w-full rounded bg-green-100" />
                  </div>
                  <div className="rounded-lg bg-yellow-50 p-4">
                    <div className="mb-2 h-4 w-2/3 rounded bg-yellow-200" />
                    <div className="h-3 w-full rounded bg-yellow-100" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}




