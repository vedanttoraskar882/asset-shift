export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What is AssetShift?',
    answer: 'AssetShift is a proposed software assurance platform designed to help electricity suppliers monitor meter lifecycle obligations, identify missing evidence and address avoidable meter-asset financial exposure.'
  },
  {
    id: 'faq-2',
    question: 'Who is AssetShift designed for?',
    answer: 'The initial focus is independent and industrial and commercial electricity suppliers. Future expansion includes larger suppliers, Meter Asset Providers, Metering Equipment Managers, field-service providers and gas organisations.'
  },
  {
    id: 'faq-3',
    question: 'How is AssetShift different from traditional reconciliation tools?',
    answer: "Traditional reconciliation often compares records after charges have arisen. AssetShift's proposed model starts with an authorised meter job and generates expected obligations, allowing missing actions and supporting evidence to be identified."
  },
  {
    id: 'faq-4',
    question: 'What is the Expected-State Obligation Model?',
    answer: 'It is the core proposed AssetShift mechanism that translates authorised meter jobs into structured responsibilities, required evidence, configurable deadlines and financial cost functions.'
  },
  {
    id: 'faq-5',
    question: 'What is the Liability Clock?',
    answer: 'The Liability Clock is a planned mechanism that estimates financial exposure associated with breached obligations using applicable contractual rates and cost functions.'
  },
  {
    id: 'faq-6',
    question: 'Does AssetShift replace existing billing or metering systems?',
    answer: 'No. AssetShift is designed as a read-only assurance layer that works alongside existing supplier, billing, metering and field-service platforms.'
  },
  {
    id: 'faq-7',
    question: 'Will AssetShift integrate with Kraken?',
    answer: 'Kraken-compatible connectivity is included in the planned product roadmap. AssetShift does not currently claim an operational Kraken integration or formal partnership.'
  },
  {
    id: 'faq-8',
    question: 'What is Migration Assurance?',
    answer: 'Migration Assurance is a proposed service that captures open meter obligations before MHHS or supplier platform migration and revalidates them after the transition.'
  },
  {
    id: 'faq-9',
    question: 'Does AssetShift perform regulated market activities?',
    answer: 'No. AssetShift is not designed to submit industry data flows, perform regulated market roles or act as a regulated supplier agent.'
  },
  {
    id: 'faq-10',
    question: 'Is AssetShift an AI-powered platform?',
    answer: 'The initial MVP is planned as a deterministic, rules-first system with explainable obligation templates and evidence-linked decisions. Statistical prediction may be introduced later where supported by historical data and validation.'
  },
  {
    id: 'faq-11',
    question: 'Does AssetShift support gas metering?',
    answer: 'The initial platform focuses on electricity metering. Gas meter lifecycle assurance is planned as a Year 3 expansion.'
  },
  {
    id: 'faq-12',
    question: 'How much does AssetShift cost?',
    answer: 'The indicative annual platform subscription starts from approximately £30,000 for a smaller supplier band. Proposed onboarding costs range from £10,000 to £25,000, while migration assurance engagements range from £15,000 to £40,000. All prices remain subject to validation and agreed commercial terms.'
  },
  {
    id: 'faq-13',
    question: 'Is AssetShift currently operational?',
    answer: 'AssetShift is at the development and market validation stage and is seeking prospective design partners and pilot participants.'
  },
  {
    id: 'faq-14',
    question: 'Can AssetShift guarantee financial savings?',
    answer: 'No. AssetShift is designed to help identify potential financial exposure and support evidence-based invoice challenges. Actual outcomes will depend on customer data, contractual arrangements and pilot results.'
  },
  {
    id: 'faq-15',
    question: 'How can my organisation participate in a pilot?',
    answer: 'Organisations interested in the proposed platform can use the Request a Pilot form to register their interest in potential development and pilot opportunities. For this frontend demonstration, form details are stored locally in the browser and are not transmitted to AssetShift.'
  }
];
