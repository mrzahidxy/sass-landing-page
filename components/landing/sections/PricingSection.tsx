import { pricingPlans } from '@/lib/marketing';
import type { PricingCycle } from '@/types/forms';

interface PricingSectionProps {
  cycle: PricingCycle;
  onToggleCycle: () => void;
  onOpenTrial: (source: string) => void;
  onOpenCheckout: (source: string) => void;
  onOpenSales: (source: string) => void;
}

const formatPrice = (cycle: PricingCycle, planId: string) => {
  const plan = pricingPlans.find((item) => item.id === planId);
  if (!plan) return { display: 'Custom', suffix: '/pricing' };

  if (plan.priceMonthly === 0 && plan.priceYearly === 0) {
    return { display: '$0', suffix: '/month' };
  }

  if (plan.priceMonthly === null || plan.priceYearly === null) {
    return { display: 'Custom', suffix: '/pricing' };
  }

  const amount = cycle === 'monthly' ? plan.priceMonthly : plan.priceYearly;
  return { display: `$${amount}`, suffix: '/month per user' };
};

type CTAKind = (typeof pricingPlans)[number]['ctaAction'];

const CTA_HANDLERS: Record<CTAKind, (props: PricingSectionProps) => (source: string) => void> = {
  trial: ({ onOpenTrial }) => onOpenTrial,
  checkout: ({ onOpenCheckout }) => onOpenCheckout,
  sales: ({ onOpenSales }) => onOpenSales
};

export default function PricingSection(props: PricingSectionProps) {
  const { cycle, onToggleCycle } = props;

  return (
    <section id="pricing" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Simple, transparent pricing</h2>
          <p className="mt-4 text-xl text-gray-600">Choose the plan that fits your team&apos;s needs.</p>

          <div className="mt-8 flex items-center justify-center gap-4">
            <span className={`text-sm font-medium ${cycle === 'monthly' ? 'text-gray-900' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button
              type="button"
              onClick={onToggleCycle}
              className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  cycle === 'yearly' ? 'translate-x-6 bg-blue-600' : 'translate-x-1'
                }`}
              />
              <span className="sr-only">Toggle billing cadence</span>
            </button>
            <span className={`text-sm font-medium ${cycle === 'yearly' ? 'text-gray-900' : 'text-gray-500'}`}>
              Yearly
            </span>
            {cycle === 'yearly' && (
              <span className="rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-semibold text-green-800">
                2 months free
              </span>
            )}
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {pricingPlans.map((plan) => {
            const { display, suffix } = formatPrice(cycle, plan.id);
            const handler = CTA_HANDLERS[plan.ctaAction](props);
            const sourcePayload = `pricing_${plan.id}_${cycle}`;

            return (
              <article
                key={plan.id}
                className={`relative rounded-2xl border-2 bg-white p-8 shadow-lg ${
                  plan.featured ? 'border-blue-600 shadow-xl' : 'border-gray-200'
                }`}
              >
                {plan.featured && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-4 py-1 text-sm font-semibold text-white">
                    Most Popular
                  </span>
                )}
                <div className="mb-8 text-center">
                  <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                  <p className="mt-3 text-gray-600">{plan.description}</p>
                  <div className="mt-6">
                    <span className="text-4xl font-bold text-gray-900">{display}</span>
                    <span className="ml-1 text-gray-600">{suffix}</span>
                    {plan.id === 'pro' && cycle === 'yearly' && (
                      <div className="mt-2 text-sm font-medium text-green-600">Save $36/year per user</div>
                    )}
                  </div>
                </div>
                <ul className="mb-8 space-y-4 text-sm text-gray-700">
                  {plan.highlights.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span aria-hidden className="h-2 w-2 rounded-full bg-green-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  onClick={() => handler(sourcePayload)}
                  className={`${
                    plan.ctaAction === 'checkout'
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : plan.ctaAction === 'trial'
                        ? 'border-2 border-gray-300 text-gray-700 hover:border-gray-400'
                        : 'border-2 border-gray-300 text-gray-700 hover:border-gray-400'
                  } w-full rounded-lg py-3 font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600`}
                >
                  {plan.ctaLabel}
                </button>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}



