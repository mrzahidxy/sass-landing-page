import Link from 'next/link';
import { pricingPlans } from '@/lib/marketing';

export const metadata = {
  title: 'Pricing Overview',
  description:
    'Compare TaskMasterPro plans and discover the features that help subscription teams execute faster.'
};

export const revalidate = 3600;

export default function PricingPage() {
  return (
    <main className="bg-white">
      <section className="bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">Pricing</p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Choose the right plan for your subscription workflow
            </h1>
            <p className="mt-4 max-w-3xl text-lg text-gray-600">
              Every plan includes integrated billing, analytics, and workflow automation. Scale confidently with advanced
              access controls and dedicated support on Enterprise tiers.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            <table className="min-w-full divide-y divide-gray-200 text-left text-sm">
              <thead className="bg-gray-50 text-xs font-semibold uppercase tracking-wide text-gray-500">
                <tr>
                  <th scope="col" className="px-6 py-4">Plan</th>
                  <th scope="col" className="px-6 py-4">Ideal for</th>
                  <th scope="col" className="px-6 py-4">Monthly</th>
                  <th scope="col" className="px-6 py-4">Yearly</th>
                  <th scope="col" className="px-6 py-4">Highlights</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {pricingPlans.map((plan) => (
                  <tr key={plan.id} className={plan.featured ? 'bg-blue-50/40' : undefined}>
                    <td className="px-6 py-5 text-base font-semibold text-gray-900">{plan.name}</td>
                    <td className="px-6 py-5 text-gray-600">{plan.description}</td>
                    <td className="px-6 py-5 text-gray-900">
                      {plan.priceMonthly === null ? 'Custom' : `$${plan.priceMonthly}`}
                    </td>
                    <td className="px-6 py-5 text-gray-900">
                      {plan.priceYearly === null ? 'Custom' : `$${plan.priceYearly}`}
                    </td>
                    <td className="px-6 py-5 text-gray-600">
                      <ul className="list-disc space-y-1 pl-4">
                        {plan.highlights.slice(0, 3).map((highlight) => (
                          <li key={highlight}>{highlight}</li>
                        ))}
                      </ul>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold text-gray-900">Need a custom quote?</p>
              <p className="text-sm text-gray-600">
                Enterprise teams can tailor provisioning, security reviews, migration assistance, and launch enablement.
              </p>
            </div>
            <div className="flex gap-3">
              <Link
                href="/"
                className="rounded-lg border border-gray-200 px-6 py-3 text-sm font-semibold text-gray-700 transition-colors hover:border-gray-300"
              >
                Back to marketing site
              </Link>
              <Link
                href="#contact"
                className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
              >
                Contact sales
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

