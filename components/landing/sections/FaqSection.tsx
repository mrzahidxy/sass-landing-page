import { ChevronDown } from 'lucide-react';
import { faqItems } from '@/lib/marketing';

interface FaqSectionProps {
  openIndex: number | null;
  onToggle: (index: number) => void;
}

export default function FaqSection({ openIndex, onToggle }: FaqSectionProps) {
  return (
    <section id="faq" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Frequently asked questions</h2>
          <p className="mt-4 text-xl text-gray-600">Everything you need to know about TaskMasterPro.</p>
        </div>

        <div className="space-y-4">
          {faqItems.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={faq.question} className="overflow-hidden rounded-2xl bg-white shadow-sm">
                <button
                  type="button"
                  onClick={() => onToggle(index)}
                  className="flex w-full items-center justify-between px-8 py-6 text-left transition hover:bg-gray-50"
                  aria-expanded={isOpen}
                >
                  <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                  <ChevronDown
                    aria-hidden="true"
                    size={24}
                    className={`text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                {isOpen && (
                  <div className="px-8 pb-6 text-gray-600">{faq.answer}</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

