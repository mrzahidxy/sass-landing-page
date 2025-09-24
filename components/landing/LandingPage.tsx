'use client';

import { useCallback, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

import MainNav from './navigation/MainNav';
import HeroSection from './sections/HeroSection';
import FeaturesSection from './sections/FeaturesSection';
import PricingSection from './sections/PricingSection';
import TestimonialsSection from './sections/TestimonialsSection';
import FaqSection from './sections/FaqSection';
import CtaSection from './sections/CtaSection';
import Footer from './sections/Footer';
import type {
  CheckoutFormState,
  FormErrors,
  PricingCycle,
  SalesFormState,
  TrialFormState
} from '@/types/forms';

const TrialModal = dynamic(() => import('./modals/TrialModal'), { ssr: false });
const CheckoutSheet = dynamic(() => import('./modals/CheckoutSheet'), { ssr: false });
const SalesModal = dynamic(() => import('./modals/SalesModal'), { ssr: false });

const TRIAL_INITIAL: TrialFormState = {
  name: '',
  email: '',
  company: '',
  teamSize: '',
  password: '',
  terms: false
};

const CHECKOUT_INITIAL: CheckoutFormState = {
  email: '',
  company: '',
  country: '',
  vat: '',
  cardNumber: '',
  expiry: '',
  cvc: '',
  saveCard: false
};

const SALES_INITIAL: SalesFormState = {
  name: '',
  workEmail: '',
  companySize: '',
  message: ''
};

export default function LandingPage() {
  const [pricingCycle, setPricingCycle] = useState<PricingCycle>('monthly');
  const [faqOpenIndex, setFaqOpenIndex] = useState<number | null>(null);

  const [trialModalOpen, setTrialModalOpen] = useState(false);
  const [checkoutSheetOpen, setCheckoutSheetOpen] = useState(false);
  const [salesModalOpen, setSalesModalOpen] = useState(false);

  const [trialForm, setTrialForm] = useState<TrialFormState>(TRIAL_INITIAL);
  const [checkoutForm, setCheckoutForm] = useState<CheckoutFormState>(CHECKOUT_INITIAL);
  const [salesForm, setSalesForm] = useState<SalesFormState>(SALES_INITIAL);

  const [trialErrors, setTrialErrors] = useState<FormErrors<TrialFormState>>({});
  const [checkoutErrors, setCheckoutErrors] = useState<FormErrors<CheckoutFormState>>({});
  const [salesErrors, setSalesErrors] = useState<FormErrors<SalesFormState>>({});

  const [trialSubmitting, setTrialSubmitting] = useState(false);
  const [checkoutSubmitting, setCheckoutSubmitting] = useState(false);
  const [salesSubmitting, setSalesSubmitting] = useState(false);

  const [trialSuccess, setTrialSuccess] = useState(false);
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);
  const [salesSuccess, setSalesSuccess] = useState(false);

  const [checkoutSeats, setCheckoutSeats] = useState(1);
  const [couponCode, setCouponCode] = useState('');

  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState<string | null>(null);

  const pricePerSeat = pricingCycle === 'yearly' ? 12 : 15;
  const totalPrice = pricePerSeat * checkoutSeats;

  const trackEvent = (eventName: string, data?: unknown) => {
    if (process.env.NODE_ENV !== 'production') {
      // eslint-disable-next-line no-console
      console.log('[analytics]', eventName, data);
    }
  };

  const resetTrialForm = useCallback(() => {
    setTrialForm(TRIAL_INITIAL);
    setTrialErrors({});
    setTrialSuccess(false);
    setTrialSubmitting(false);
  }, []);

  const resetCheckoutForm = useCallback(() => {
    setCheckoutForm(CHECKOUT_INITIAL);
    setCheckoutErrors({});
    setCheckoutSuccess(false);
    setCheckoutSubmitting(false);
    setCheckoutSeats(1);
    setCouponCode('');
  }, []);

  const resetSalesForm = useCallback(() => {
    setSalesForm(SALES_INITIAL);
    setSalesErrors({});
    setSalesSuccess(false);
    setSalesSubmitting(false);
  }, []);

  const closeTrialModal = useCallback(() => {
    setTrialModalOpen(false);
    resetTrialForm();
  }, [resetTrialForm]);

  const closeCheckoutModal = useCallback(() => {
    setCheckoutSheetOpen(false);
    resetCheckoutForm();
  }, [resetCheckoutForm]);

  const closeSalesModal = useCallback(() => {
    setSalesModalOpen(false);
    resetSalesForm();
  }, [resetSalesForm]);

  const openTrialModal = (source: string) => {
    closeCheckoutModal();
    closeSalesModal();
    resetTrialForm();
    setTrialModalOpen(true);
    trackEvent('trial_open', { source });
  };

  const openCheckoutSheet = (source: string) => {
    closeTrialModal();
    closeSalesModal();
    resetCheckoutForm();
    setCheckoutSheetOpen(true);
    trackEvent('checkout_open', { source });
  };

  const openSalesModal = (source: string) => {
    closeTrialModal();
    closeCheckoutModal();
    resetSalesForm();
    setSalesModalOpen(true);
    trackEvent('sales_open', { source });
  };

  const validateTrialForm = () => {
    const nextErrors: FormErrors<TrialFormState> = {};

    if (!trialForm.name.trim()) nextErrors.name = 'Name is required';
    if (!trialForm.email.trim()) {
      nextErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(trialForm.email)) {
      nextErrors.email = 'Enter a valid email address';
    }
    if (!trialForm.company.trim()) nextErrors.company = 'Company is required';
    if (!trialForm.teamSize) nextErrors.teamSize = 'Team size is required';
    if (trialForm.password.length < 8) nextErrors.password = 'Password must be at least 8 characters';
    if (!trialForm.terms) nextErrors.terms = 'You must accept the terms';

    setTrialErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleTrialSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validateTrialForm()) return;

    setTrialSubmitting(true);
    trackEvent('trial_submit', trialForm);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setTrialSuccess(true);
      trackEvent('trial_success', { email: trialForm.email });
    } catch (error) {
      trackEvent('trial_error', error);
      setTrialErrors({ submit: 'Something went wrong. Please try again.' });
    } finally {
      setTrialSubmitting(false);
    }
  };

  const handleCheckoutSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setCheckoutSubmitting(true);
    setCheckoutErrors({});
    trackEvent('checkout_pay', { seats: checkoutSeats, cycle: pricingCycle, amount: totalPrice });

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setCheckoutSuccess(true);
      trackEvent('checkout_success', { email: checkoutForm.email, amount: totalPrice });
    } catch (error) {
      trackEvent('checkout_error', error);
      setCheckoutErrors({ submit: 'Payment failed. Please check your card details.' });
    } finally {
      setCheckoutSubmitting(false);
    }
  };

  const handleSalesSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSalesSubmitting(true);
    setSalesErrors({});
    trackEvent('sales_submit', salesForm);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSalesSuccess(true);
      trackEvent('sales_success', { companySize: salesForm.companySize });
    } catch (error) {
      trackEvent('sales_error', error);
      setSalesErrors({ submit: 'Something went wrong. Please try again.' });
    } finally {
      setSalesSubmitting(false);
    }
  };

  const handleNewsletterSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setNewsletterStatus('Joining waitlist...');
    trackEvent('newsletter_submit', { email: newsletterEmail });

    await new Promise((resolve) => setTimeout(resolve, 800));
    setNewsletterStatus('Thanks for subscribing - check your inbox for the welcome guide.');
    setNewsletterEmail('');
  };

  useEffect(() => {
    if (!trialModalOpen && !checkoutSheetOpen && !salesModalOpen) {
      return;
    }

    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeTrialModal();
        closeCheckoutModal();
        closeSalesModal();
      }
    };

    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [trialModalOpen, checkoutSheetOpen, salesModalOpen, closeTrialModal, closeCheckoutModal, closeSalesModal]);

  const toggleFaq = (index: number) => {
    setFaqOpenIndex((current) => (current === index ? null : index));
  };

  const updateTrialField = <K extends keyof TrialFormState>(field: K, value: TrialFormState[K]) => {
    setTrialForm((prev) => ({ ...prev, [field]: value }));
  };

  const updateCheckoutField = <K extends keyof CheckoutFormState>(field: K, value: CheckoutFormState[K]) => {
    setCheckoutForm((prev) => ({ ...prev, [field]: value }));
  };

  const updateSalesField = <K extends keyof SalesFormState>(field: K, value: SalesFormState[K]) => {
    setSalesForm((prev) => ({ ...prev, [field]: value }));
  };

  const decrementSeats = () => setCheckoutSeats((current) => Math.max(1, current - 1));
  const incrementSeats = () => setCheckoutSeats((current) => Math.min(500, current + 1));

  return (
    <div className="bg-white">
      <MainNav onOpenTrial={openTrialModal} onOpenCheckout={openCheckoutSheet} />
      <main>
        <HeroSection onOpenTrial={openTrialModal} />
        <FeaturesSection />
        <PricingSection
          cycle={pricingCycle}
          onToggleCycle={() => setPricingCycle((cycle) => (cycle === 'monthly' ? 'yearly' : 'monthly'))}
          onOpenTrial={openTrialModal}
          onOpenCheckout={openCheckoutSheet}
          onOpenSales={openSalesModal}
        />
        <TestimonialsSection />
        <FaqSection openIndex={faqOpenIndex} onToggle={toggleFaq} />
        <CtaSection onOpenTrial={openTrialModal} onOpenSales={openSalesModal} />
      </main>
      <Footer
        email={newsletterEmail}
        statusMessage={newsletterStatus}
        onEmailChange={setNewsletterEmail}
        onSubmit={handleNewsletterSubmit}
      />

      <TrialModal
        open={trialModalOpen}
        form={trialForm}
        errors={trialErrors}
        submitting={trialSubmitting}
        success={trialSuccess}
        onClose={closeTrialModal}
        onUpdateField={updateTrialField}
        onSubmit={handleTrialSubmit}
      />

      <CheckoutSheet
        open={checkoutSheetOpen}
        form={checkoutForm}
        errors={checkoutErrors}
        submitting={checkoutSubmitting}
        success={checkoutSuccess}
        seats={checkoutSeats}
        cycle={pricingCycle}
        couponCode={couponCode}
        pricePerSeat={pricePerSeat}
        totalPrice={totalPrice}
        onClose={closeCheckoutModal}
        onUpdateField={updateCheckoutField}
        onSubtractSeat={decrementSeats}
        onAddSeat={incrementSeats}
        onCouponChange={setCouponCode}
        onSubmit={handleCheckoutSubmit}
      />

      <SalesModal
        open={salesModalOpen}
        form={salesForm}
        errors={salesErrors}
        submitting={salesSubmitting}
        success={salesSuccess}
        onClose={closeSalesModal}
        onUpdateField={updateSalesField}
        onSubmit={handleSalesSubmit}
      />
    </div>
  );
}







