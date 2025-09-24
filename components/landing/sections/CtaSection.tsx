interface CtaSectionProps {
  onOpenTrial: (source: string) => void;
  onOpenSales: (source: string) => void;
}

export default function CtaSection({ onOpenTrial, onOpenSales }: CtaSectionProps) {
  return (
    <section className="bg-blue-600 py-20">
      <div className="mx-auto max-w-4xl px-4 text-center text-white sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Ready to transform your team&apos;s productivity?
        </h2>
        <p className="mt-4 text-xl text-blue-100">
          Join thousands of teams already using TaskMasterPro to streamline their subscription workflows.
        </p>
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <button
            type="button"
            onClick={() => onOpenTrial('cta_footer_trial')}
            className="transform rounded-lg bg-white px-8 py-4 text-lg font-semibold text-blue-600 shadow-lg transition duration-200 hover:scale-105 hover:bg-gray-100"
          >
            Start Free Trial
          </button>
          <button
            type="button"
            onClick={() => onOpenSales('cta_footer_demo')}
            className="rounded-lg border-2 border-white px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-white hover:text-blue-600"
          >
            Schedule Demo
          </button>
        </div>
        <p className="mt-4 text-sm text-blue-200">No credit card required — 14-day free trial</p>
      </div>
    </section>
  );
}


