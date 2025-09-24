export type PricingCycle = 'monthly' | 'yearly';

export type TrialFormState = {
  name: string;
  email: string;
  company: string;
  teamSize: string;
  password: string;
  terms: boolean;
};

export type CheckoutFormState = {
  email: string;
  company: string;
  country: string;
  vat: string;
  cardNumber: string;
  expiry: string;
  cvc: string;
  saveCard: boolean;
};

export type SalesFormState = {
  name: string;
  workEmail: string;
  companySize: string;
  message: string;
};

export type FormErrors<T extends Record<string, unknown>> = Partial<Record<keyof T | 'submit', string>>;

