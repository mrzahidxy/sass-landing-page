'use client';

import { AlertCircle, Check, CreditCard, Plus, Minus, X } from 'lucide-react';
import type { CheckoutFormState, FormErrors, PricingCycle } from '@/types/forms';

interface CheckoutSheetProps {
  open: boolean;
  form: CheckoutFormState;
  errors: FormErrors<CheckoutFormState>;
  submitting: boolean;
  success: boolean;
  seats: number;
  cycle: PricingCycle;
  couponCode: string;
  pricePerSeat: number;
  totalPrice: number;
  onClose: () => void;
  onUpdateField: <K extends keyof CheckoutFormState>(field: K, value: CheckoutFormState[K]) => void;
  onSubtractSeat: () => void;
  onAddSeat: () => void;
  onCouponChange: (value: string) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

export default function CheckoutSheet({
  open,
  form,
  errors,
  submitting,
  success,
  seats,
  cycle,
  couponCode,
  pricePerSeat,
  totalPrice,
  onClose,
  onUpdateField,
  onSubtractSeat,
  onAddSeat,
  onCouponChange,
  onSubmit
}: CheckoutSheetProps) {
  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/40 p-4 sm:items-center">
      <div className="w-full max-w-xl overflow-hidden rounded-2xl bg-white shadow-2xl">
        {!success ? (
          <form onSubmit={onSubmit} className="space-y-6 p-6 sm:p-8" aria-label="Complete purchase">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Checkout</h2>
                <p className="mt-1 text-sm text-gray-500">
                  Secure payment powered by Supabase. You&apos;ll be billed per seat on the {cycle} plan.
                </p>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="rounded-lg p-1 text-gray-400 transition hover:bg-gray-100 hover:text-gray-600"
                aria-label="Close checkout"
              >
                <X aria-hidden="true" size={24} />
              </button>
            </div>

            <section aria-labelledby="order-summary" className="rounded-xl border border-gray-200 p-4 sm:p-6">
              <div className="flex items-center justify-between">
                <h3 id="order-summary" className="text-sm font-semibold uppercase tracking-wider text-gray-500">
                  Order summary
                </h3>
                <span className="flex items-center gap-2 text-sm text-gray-600">
                  <CreditCard aria-hidden="true" size={18} />
                  Secured checkout
                </span>
              </div>
              <div className="mt-4 flex flex-wrap items-center gap-4">
                <div className="flex items-center rounded-full border border-gray-300">
                  <button
                    type="button"
                    onClick={onSubtractSeat}
                    className="flex h-9 w-9 items-center justify-center rounded-l-full hover:bg-gray-100"
                    aria-label="Remove seat"
                  >
                    <Minus aria-hidden="true" size={16} />
                  </button>
                  <span className="w-16 text-center font-medium">{seats}</span>
                  <button
                    type="button"
                    onClick={onAddSeat}
                    className="flex h-9 w-9 items-center justify-center rounded-r-full hover:bg-gray-100"
                    aria-label="Add seat"
                  >
                    <Plus aria-hidden="true" size={16} />
                  </button>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-800">Pro plan — {cycle === 'monthly' ? 'billed monthly' : 'billed yearly'}</p>
                  <p className="text-sm text-gray-500">${pricePerSeat}/{cycle === 'monthly' ? 'month' : 'month'} per user</p>
                  {cycle === 'yearly' && (
                    <p className="text-xs font-medium text-green-600">Save ${(15 - 12) * seats * 12}/year</p>
                  )}
                </div>
              </div>
              <div className="mt-4 flex flex-wrap items-center gap-3">
                <input
                  type="text"
                  value={couponCode}
                  onChange={(event) => onCouponChange(event.target.value)}
                  placeholder="Coupon code"
                  className="flex-1 rounded-lg border border-dashed border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
                />
                <button
                  type="button"
                  className="rounded-lg border border-gray-300 px-3 py-2 text-sm font-medium text-gray-600 transition hover:bg-gray-50"
                >
                  Apply
                </button>
              </div>
              <div className="mt-4 flex items-center justify-between text-sm text-gray-700">
                <span>Total</span>
                <span className="text-lg font-semibold text-gray-900">${totalPrice.toFixed(2)}</span>
              </div>
            </section>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-4">
                <div>
                  <label htmlFor="checkout-email" className="block text-sm font-medium text-gray-700">
                    Billing email
                  </label>
                  <input
                    id="checkout-email"
                    type="email"
                    value={form.email}
                    onChange={(event) => onUpdateField('email', event.target.value)}
                    className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="checkout-company" className="block text-sm font-medium text-gray-700">
                    Company
                  </label>
                  <input
                    id="checkout-company"
                    type="text"
                    value={form.company}
                    onChange={(event) => onUpdateField('company', event.target.value)}
                    className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="checkout-country" className="block text-sm font-medium text-gray-700">
                    Country
                  </label>
                  <select
                    id="checkout-country"
                    value={form.country}
                    onChange={(event) => onUpdateField('country', event.target.value)}
                    className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
                  >
                    <option value="">Select country</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="GB">United Kingdom</option>
                    <option value="DE">Germany</option>
                    <option value="AU">Australia</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="checkout-vat" className="block text-sm font-medium text-gray-700">
                    VAT number (optional)
                  </label>
                  <input
                    id="checkout-vat"
                    type="text"
                    value={form.vat}
                    onChange={(event) => onUpdateField('vat', event.target.value)}
                    className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label htmlFor="checkout-card" className="block text-sm font-medium text-gray-700">
                    Card number
                  </label>
                  <input
                    id="checkout-card"
                    inputMode="numeric"
                    value={form.cardNumber}
                    onChange={(event) => onUpdateField('cardNumber', event.target.value)}
                    placeholder="4242 4242 4242 4242"
                    className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="checkout-expiry" className="block text-sm font-medium text-gray-700">
                      Expiry
                    </label>
                    <input
                      id="checkout-expiry"
                      value={form.expiry}
                      onChange={(event) => onUpdateField('expiry', event.target.value)}
                      placeholder="MM/YY"
                      className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="checkout-cvc" className="block text-sm font-medium text-gray-700">
                      CVC
                    </label>
                    <input
                      id="checkout-cvc"
                      value={form.cvc}
                      onChange={(event) => onUpdateField('cvc', event.target.value)}
                      placeholder="CVC"
                      className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
                      required
                    />
                  </div>
                </div>

                <label className="flex items-center gap-3 text-sm text-gray-600">
                  <input
                    type="checkbox"
                    checked={form.saveCard}
                    onChange={(event) => onUpdateField('saveCard', event.target.checked)}
                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span>Securely save card for future invoices</span>
                </label>
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
                disabled={submitting || !form.email || !form.cardNumber || !form.expiry || !form.cvc}
                className="flex-1 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {submitting ? 'Processing...' : `Pay $${totalPrice.toFixed(2)}`}
              </button>
            </div>
          </form>
        ) : (
          <div className="space-y-6 p-8 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
              <Check aria-hidden="true" size={32} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Payment successful</h3>
              <p className="mt-2 text-gray-600">
                We&apos;ve emailed a receipt to {form.email}. Your upgraded workspace is ready and your team can start inviting
                unlimited collaborators right away.
              </p>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="w-full rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Return to dashboard
            </button>
          </div>
        )}
      </div>
    </div>
  );
}


