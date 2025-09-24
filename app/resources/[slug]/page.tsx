import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { resourceArticles } from '@/lib/marketing';

export const dynamicParams = false;

export function generateStaticParams() {
  return resourceArticles.map((article) => ({ slug: article.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const article = resourceArticles.find((entry) => entry.slug === params.slug);
  if (!article) {
    return {
      title: 'Resource not found'
    };
  }

  return {
    title: `${article.title} | TaskMasterPro`,
    description: article.summary
  };
}

export default function ResourceArticlePage({ params }: { params: { slug: string } }) {
  const article = resourceArticles.find((entry) => entry.slug === params.slug);
  if (!article) {
    notFound();
  }

  return (
    <main className="bg-white">
      <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">Playbook</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">{article.title}</h1>
        <p className="mt-6 text-lg text-gray-600">{article.summary}</p>

        <div className="mt-10 space-y-6 text-base leading-7 text-gray-700">
          <p>
            This guide is part of our subscription lifecycle series. In the full version we unpack the rituals and
            dashboards our success managers deploy with scaling SaaS teams. Ready to dig deeper? Let our team know and
            we will schedule a personalised working session tailored to your operating model.
          </p>
          <p>
            Meanwhile, explore the other resources in the library to benchmark your lifecycle metrics, align revenue and
            product teams, and level up your activation and billing experiments.
          </p>
        </div>

        <div className="mt-12 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <Link href="/resources" className="text-sm font-semibold text-blue-600 hover:underline">
            ? Back to resources
          </Link>
          <Link
            href="/"
            className="rounded-lg bg-blue-600 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
          >
            Talk to the team
          </Link>
        </div>
      </article>
    </main>
  );
}

