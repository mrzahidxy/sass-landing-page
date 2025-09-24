import Link from 'next/link';
import { resourceArticles } from '@/lib/marketing';

export const metadata = {
  title: 'Resource Library',
  description: 'Guides and frameworks to help subscription and lifecycle teams execute world-class customer journeys.'
};

export const revalidate = 7200;

export default function ResourcesIndexPage() {
  return (
    <main className="bg-white">
      <section className="bg-gradient-to-b from-white to-gray-50 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">Playbooks</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Subscription growth frameworks
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Explore tactics curated by the TaskMasterPro product specialists to improve retention, experiment faster,
            and align go-to-market and product teams around shared metrics.
          </p>

          <div className="mt-12 space-y-6">
            {resourceArticles.map((article) => (
              <article key={article.slug} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h2 className="text-2xl font-semibold text-gray-900">
                      <Link href={`/resources/${article.slug}`}>{article.title}</Link>
                    </h2>
                    <p className="mt-2 text-gray-600">{article.summary}</p>
                  </div>
                  <Link
                    href={`/resources/${article.slug}`}
                    className="self-start rounded-lg border border-gray-200 px-4 py-2 text-sm font-semibold text-gray-700 transition-colors hover:border-gray-300"
                  >
                    Read guide
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

