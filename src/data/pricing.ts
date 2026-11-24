export interface PricingTier {
  id: string;
  title: string;
  price: string;
  billing: string;
  description: string;
  features: string[];
  ctaText: string;
  isPrimary?: boolean;
}

export interface AdditionalOption {
  id: string;
  title: string;
  pricing: string;
  description: string;
  ctaText: string;
}

export const MAIN_PRICING_PLANS: PricingTier[] = [
  {
    id: 'platform-subscription',
    title: 'Platform Subscription',
    price: 'From approximately £30,000 / year',
    billing: 'Annual SaaS Subscription',
    description: 'Proposed annual subscription priced according to bands of meter points monitored, starting from approximately £30,000 per year for a smaller supplier band.',
    features: [
      'Meter lifecycle obligation monitoring',
      'Asset identity matching',
      'Configurable obligation templates',
      'Financial exposure monitoring',
      'Exception prioritisation',
      'MAP invoice validation'
    ],
    ctaText: 'Request a Pilot',
    isPrimary: true
  },
  {
    id: 'onboarding-integration',
    title: 'Onboarding & Integration',
    price: '£10,000–£25,000',
    billing: 'One-Time Fee per Client',
    description: 'Proposed onboarding engagement covering the configuration of customer data sources, obligation templates and contractual rate cards.',
    features: [
      'Data source configuration',
      'Asset identity mapping',
      'Obligation template configuration',
      'Contractual rate card configuration',
      'Integration setup'
    ],
    ctaText: 'Discuss Your Requirements',
    isPrimary: false
  },
  {
    id: 'migration-assurance',
    title: 'Migration Assurance',
    price: '£15,000–£40,000',
    billing: 'Fixed-Price Engagement per Migration',
    description: 'A proposed time-boxed assurance engagement supporting MHHS or supplier platform cut-over.',
    features: [
      'Pre-migration obligation snapshots',
      'Open meter event assessment',
      'Post-migration record validation',
      'Missing-event identification',
      'Duplicate-event identification',
      'Migration exception reporting'
    ],
    ctaText: 'Request a Pilot',
    isPrimary: false
  }
];

export const ADDITIONAL_COMMERCIAL_OPTIONS: AdditionalOption[] = [
  {
    id: 'recovery-option',
    title: 'Recovery Option',
    pricing: 'Capped Percentage – Subject to Agreement',
    description: 'An optional first-year commercial arrangement based on an agreed capped share of MAP charges successfully challenged, with the intention of transitioning to a subscription model.',
    ctaText: 'Discuss Your Requirements'
  },
  {
    id: 'counterparty-licences',
    title: 'Counterparty Licences',
    pricing: 'Custom Annual Licence',
    description: 'Proposed annual licensing for MAPs and MEMs based on estate size and access to the future shared obligation environment.',
    ctaText: 'Register Interest'
  },
  {
    id: 'additional-modules',
    title: 'Additional Modules',
    pricing: 'Custom Add-On Pricing',
    description: 'Future commercial add-ons covering extended installation and de-energisation capabilities, gas metering and additional utility asset classes.',
    ctaText: 'Register Interest'
  }
];

export const PRICING_DISCLAIMER = 'All pricing shown represents illustrative commercial planning assumptions and is subject to customer discovery, pilot validation, solution scope and mutually agreed commercial terms. Pricing does not represent confirmed market rates or an active commercial offer.';
