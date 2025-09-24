'use client';

import { AlertCircle, Check, X } from 'lucide-react';
import type { FormErrors, SalesFormState } from '@/types/forms';

interface SalesModalProps {
  open: boolean;
  form: SalesFormState;
  errors: FormErrors<SalesFormState>;
  submitting: boolean;
  success: boolean;
  onClose: () => void;
  onUpdateField: <K extends keyof SalesFormState>(field: K, value: SalesFormState[K]) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

export default function SalesModal({
  open,
  form,
  errors,
  submitting,
  success,
  onClose,
  onUpdateField,
  onSubmit
}: SalesModalProps) {
  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
      <div className="w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl">
        {!success ? (
          <form onSubmit={onSubmit} className="space-y-6 p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Talk to our sales team</h2>
                <p className="mt-1 text-sm text-gray-500">
                  Share a few details and we will tailor a private walkthrough for your organisation.
                </p>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="rounded-lg p-1 text-gray-400 transition hover:bg-gray-100 hover:text-gray-600"
                aria-label="Close sales modal"
              >
                <X aria-hidden="true" size={24} />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label htmlFor="sales-name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  id="sales-name"
                  type="text"
                  value={form.name}
                  onChange={(event) => onUpdateField('name', event.target.value)}
                  className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
                  required
                />
              </div>
              <div>
                <label htmlFor="sales-email" className="block text-sm font-medium text-gray-700">
                  Work email
                </label>
                <input
                  id="sales-email"
                  type="email"
                  value={form.workEmail}
                  onChange={(event) => onUpdateField('workEmail', event.target.value)}
                  className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
                  required
                />
              </div>
              <div>
                <label htmlFor="sales-size" className="block text-sm font-medium text-gray-700">
                  Company size
                </label>
                <select
                  id="sales-size"
                  value={form.companySize}
                  onChange={(event) => onUpdateField('companySize', event.target.value)}
                  className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
                  required
                >
                  <option value="">Select company size</option>
                  <option value="1-50">1-50</option>
                  <option value="51-200">51-200</option>
                  <option value="201-500">201-500</option>
                  <option value="500+">500+</option>
                </select>
              </div>
              <div>
                <label htmlFor="sales-message" className="block text-sm font-medium text-gray-700">
                  Project details
                </label>
                <textarea
                  id="sales-message"
                  value={form.message}
                  onChange={(event) => onUpdateField('message', event.target.value)}
                  rows={4}
                  className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
                  placeholder="Tell us about your current workflow and goals"
                />
              </div>
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
                disabled={submitting || !form.name || !form.workEmail || !form.companySize}
                className="flex-1 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {submitting ? 'Sending...' : 'Request Demo'}
              </button>
            </div>
          </form>
        ) : (
          <div className="space-y-6 p-8 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
              <Check aria-hidden="true" size={32} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Request received!</h3>
              <p className="mt-2 text-gray-600">
                Our team will reach out within one business day with personalised onboarding options.
              </p>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="w-full rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

