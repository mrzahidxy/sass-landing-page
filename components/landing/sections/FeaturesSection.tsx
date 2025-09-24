import { featureItems } from '@/lib/marketing';

export default function FeaturesSection() {
  return (
    <section id="features" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Everything your team needs</h2>
          <p className="mt-4 text-xl text-gray-600">
            Powerful features designed to streamline workflows and boost productivity.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {featureItems.map((feature) => (
            <article
              key={feature.title}
              className="rounded-2xl p-8 text-center shadow-sm transition-shadow duration-300 hover:shadow-lg"
            >
              <div
                className={`${feature.accentClass} mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl`}
              >
                <feature.icon aria-hidden="true" className={feature.iconClass} size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
              <p className="mt-4 text-gray-600">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

