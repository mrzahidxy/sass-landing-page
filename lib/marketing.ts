import { type LucideIcon, Users, BarChart3, Zap, CreditCard, Plus, Minus } from 'lucide-react';

export type FeatureItem = {
  title: string;
  description: string;
  icon: LucideIcon;
  accentClass: string;
  iconClass: string;
};

export type PricingPlan = {
  id: string;
  name: string;
  description: string;
  priceMonthly: number | null;
  priceYearly: number | null;
  highlights: string[];
  ctaLabel: string;
  ctaAction: 'trial' | 'checkout' | 'sales';
  featured?: boolean;
};

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  imageUrl: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export const featureItems: FeatureItem[] = [
  {
    title: 'Real-time Collaboration',
    description:
      'Work together seamlessly with live updates, instant notifications, and shared workspaces that keep everyone aligned and productive.',
    icon: Users,
    accentClass: 'bg-blue-100',
    iconClass: 'text-blue-600'
  },
  {
    title: 'Progress Tracking Dashboard',
    description:
      'Visualize project progress with intuitive charts, burndown reports, and customizable dashboards that provide insights at a glance.',
    icon: BarChart3,
    accentClass: 'bg-green-100',
    iconClass: 'text-green-600'
  },
  {
    title: 'Seamless Integrations',
    description:
      'Connect with your favorite tools including Slack, GitHub, Jira, and 50+ more to create a unified workflow ecosystem.',
    icon: Zap,
    accentClass: 'bg-purple-100',
    iconClass: 'text-purple-600'
  }
];

export const pricingPlans: PricingPlan[] = [
  {
    id: 'free',
    name: 'Free',
    description: 'Perfect for small teams getting started',
    priceMonthly: 0,
    priceYearly: 0,
    highlights: [
      'Up to 3 team members',
      'Unlimited projects',
      'Basic analytics',
      'Standard integrations',
      'Mobile app access'
    ],
    ctaLabel: 'Create Free Account',
    ctaAction: 'trial'
  },
  {
    id: 'pro',
    name: 'Pro',
    description: 'Best for growing teams and businesses',
    priceMonthly: 15,
    priceYearly: 12,
    highlights: [
      'Unlimited team members',
      'Unlimited projects',
      'Advanced analytics',
      'All integrations',
      'Priority support'
    ],
    ctaLabel: 'Buy Pro',
    ctaAction: 'checkout',
    featured: true
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'For large organizations with advanced needs',
    priceMonthly: null,
    priceYearly: null,
    highlights: [
      'Everything in Pro',
      'Advanced security & compliance',
      'Custom integrations',
      'Dedicated success manager',
      'SLA guarantee'
    ],
    ctaLabel: 'Contact Sales',
    ctaAction: 'sales'
  }
];

export const checkoutControls = {
  seatIcon: Users,
  paymentIcon: CreditCard,
  incrementIcon: Plus,
  decrementIcon: Minus
};

export const testimonials: Testimonial[] = [
  {
    name: 'Sarah Johnson',
    role: 'Product Manager, TechCorp',
    quote:
      'TaskMasterPro completely transformed how our remote team collaborates. The real-time updates and integrations have made us 40% more productive.',
    imageUrl: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150'
  },
  {
    name: 'Mike Chen',
    role: 'Engineering Lead, StartupXYZ',
    quote:
      'The dashboard analytics are incredible. We can finally see where bottlenecks occur and optimize our workflow accordingly. Game-changer!',
    imageUrl: 'https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=150'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Operations Director, CreativeAgency',
    quote:
      'Easy to use, powerful features, and excellent customer support. TaskMasterPro has everything we need to manage our distributed team effectively.',
    imageUrl: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=150'
  }
];

export const faqItems: FaqItem[] = [
  {
    question: 'Do I need a credit card for the free trial?',
    answer:
      'No. Our 14-day free trial gives you full access to all Pro features with no credit card required. Invite your team, create unlimited projects, and explore every integration before you commit.'
  },
  {
    question: 'Can I cancel anytime?',
    answer:
      'Absolutely. Cancel your subscription at any time with no questions asked. You will keep access until the end of your billing period.'
  },
  {
    question: "What's your refund policy?",
    answer:
      'We offer prorated refunds within 14 days of purchase. Contact our support team and we will process your refund quickly with no hassle.'
  },
  {
    question: 'Can I integrate with my existing tools?',
    answer:
      'Yes. TaskMasterPro integrates with 50+ popular tools including Slack, GitHub, Jira, Trello, Google Workspace, Microsoft Teams, and more. Our API supports custom integrations too.'
  },
  {
    question: 'Can I migrate from another tool?',
    answer:
      'We provide free migration assistance and built-in importers for Asana, Monday.com, ClickUp, and others. Our customer success team helps ensure a smooth transition.'
  }
];

export const pressLogos = ['Forbes', 'TechCrunch', 'Wired', 'Harvard Business Review', 'Fast Company'];

export const resourceArticles = [
  {
    slug: 'pricing-upgrades',
    title: 'When to Upgrade from Free to Pro Plans',
    summary: 'Learn how successful teams decide when it is time to move beyond free tooling and invest in scalable workflows.'
  },
  {
    slug: 'lifecycle-metrics',
    title: 'Lifecycle Metrics Every Subscription Team Should Monitor',
    summary: 'Identify the leading indicators that predict churn and expansion revenue in subscription-based businesses.'
  },
  {
    slug: 'async-collaboration',
    title: 'Async Collaboration Rituals for Distributed Teams',
    summary: 'Adopt the meeting-light rituals we use internally to keep distributed teams aligned without burning out.'
  }
] as const;

export type ResourceArticle = (typeof resourceArticles)[number];

