'use client';

import { X, Check, AlertCircle } from 'lucide-react';
import type { TrialFormState, FormErrors } from '@/types/forms';

interface TrialModalProps {
  open: boolean;
  form: TrialFormState;
  errors: FormErrors<TrialFormState>;
  submitting: boolean;
  success: boolean;
  onClose: () => void;
  onUpdateField: <K extends keyof TrialFormState>(field: K, value: TrialFormState[K]) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

export default function TrialModal({
  open,
  form,
  errors,
  submitting,
  success,
  onClose,
  onUpdateField,
  onSubmit
}: TrialModalProps) {
  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
      <div className="relative w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-2xl">
        {!success ? (
          <form onSubmit={onSubmit} className="space-y-6 p-8" aria-label="Start free trial">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Start your 14-day free trial</h2>
                <p className="mt-1 text-sm text-gray-500">Full access to every feature, no credit card required.</p>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="rounded-lg p-1 text-gray-400 transition hover:bg-gray-100 hover:text-gray-600"
                aria-label="Close modal"
              >
                <X aria-hidden="true" size={24} />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label htmlFor="trial-name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  id="trial-name"
                  type="text"
                  value={form.name}
                  onChange={(event) => onUpdateField('name', event.target.value)}
                  className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
                  required
                />
                {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="trial-email" className="block text-sm font-medium text-gray-700">
                  Work email
                </label>
                <input
                  id="trial-email"
                  type="email"
                  value={form.email}
                  onChange={(event) => onUpdateField('email', event.target.value)}
                  className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
                  required
                />
                {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="trial-company" className="block text-sm font-medium text-gray-700">
                  Company
                </label>
                <input
                  id="trial-company"
                  type="text"
                  value={form.company}
                  onChange={(event) => onUpdateField('company', event.target.value)}
                  className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
                  required
                />
                {errors.company && <p className="mt-1 text-sm text-red-500">{errors.company}</p>}
              </div>

              <div>
                <label htmlFor="trial-team" className="block text-sm font-medium text-gray-700">
                  Team size
                </label>
                <select
                  id="trial-team"
                  value={form.teamSize}
                  onChange={(event) => onUpdateField('teamSize', event.target.value)}
                  className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
                  required
                >
                  <option value="">Select team size</option>
                  <option value="1-10">1-10</option>
                  <option value="11-50">11-50</option>
                  <option value="51-200">51-200</option>
                  <option value="200+">200+</option>
                </select>
                {errors.teamSize && <p className="mt-1 text-sm text-red-500">{errors.teamSize}</p>}
              </div>

              <div>
                <label htmlFor="trial-password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  id="trial-password"
                  type="password"
                  value={form.password}
                  onChange={(event) => onUpdateField('password', event.target.value)}
                  minLength={8}
                  className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
                  required
                />
                {errors.password && <p className="mt-1 text-sm text-red-500">{errors.password}</p>}
              </div>

              <label className="flex gap-3 text-sm text-gray-600">
                <input
                  type="checkbox"
                  checked={form.terms}
                  onChange={(event) => onUpdateField('terms', event.target.checked)}
                  className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  required
                />
                <span>
                  I agree to the <a href="/legal/terms" className="text-blue-600 hover:underline">Terms of Service</a>{' '}
                  and{' '}
                  <a href="/legal/privacy" className="text-blue-600 hover:underline">
                    Privacy Policy
                  </a>
                </span>
              </label>
              {errors.terms && <p className="text-sm text-red-500">{errors.terms}</p>}
            </div>

            {errors.submit && (
              <div className="flex items-center rounded-lg bg-red-50 p-3 text-red-700">
                <AlertCircle aria-hidden="true" className="mr-2" size={16} />
                <span className="text-sm">{errors.submit}</span>
              </div>
            )}

            <div className="flex gap-3">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 rounded-lg border border-gray-300 px-6 py-3 text-gray-700 transition hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={
                  submitting ||
                  !form.name ||
                  !form.email ||
                  !form.company ||
                  !form.teamSize ||
                  form.password.length < 8 ||
                  !form.terms
                }
                className="flex-1 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {submitting ? 'Creating...' : 'Create Free Trial'}
              </button>
            </div>
          </form>
        ) : (
          <div className="space-y-6 p-8 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
              <Check aria-hidden="true" size={32} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">You&apos;re all set!</h3>
              <p className="mt-2 text-gray-600">
                Check your inbox at {form.email} for the next steps. A welcome email with setup instructions is on the way.
              </p>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="w-full rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Back to site
            </button>
          </div>
        )}
      </div>
    </div>
  );
}


