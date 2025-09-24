import Image from 'next/image';
import { pressLogos, testimonials } from '@/lib/marketing';

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Loved by teams worldwide</h2>
          <p className="mt-4 text-xl text-gray-600">
            See what our customers say about building modern subscription operations with TaskMasterPro.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure key={testimonial.name} className="rounded-2xl bg-gray-50 p-8 shadow-sm">
              <div className="mb-6 flex text-yellow-400" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, index) => (
                  <svg key={index} className="h-5 w-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-lg leading-relaxed text-gray-700">“{testimonial.quote}”</blockquote>
              <figcaption className="mt-8 flex items-center">
                <div className="relative mr-4 h-12 w-12 overflow-hidden rounded-full">
                  <Image
                    src={testimonial.imageUrl}
                    alt={testimonial.name}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-16 border-t border-gray-200 pt-16">
          <p className="mb-8 text-center text-sm font-semibold uppercase tracking-wide text-gray-500">
            Trusted by leading companies
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 opacity-70">
            {pressLogos.map((logo) => (
              <span
                key={logo}
                className="rounded-lg bg-gray-900 px-5 py-2 text-sm font-semibold uppercase tracking-wide text-white shadow-md"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}




