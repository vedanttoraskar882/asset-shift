export interface RoadmapPhase {
  id: string;
  phaseNumber: string;
  timeline: string;
  title: string;
  status: 'Planned';
  objectives: string[];
}

export const ROADMAP_PHASES: RoadmapPhase[] = [
  {
    id: 'phase-1',
    phaseNumber: '01',
    timeline: 'Months 1–6',
    title: 'MVP Development and Market Validation',
    status: 'Planned',
    objectives: [
      'Develop the core obligation engine',
      'Use synthetic data and public industry documentation',
      'Conduct 10–15 customer discovery interviews',
      'Validate obligation templates with practitioners',
      'Recruit an industry adviser',
      'Aim to secure two design partners'
    ]
  },
  {
    id: 'phase-2',
    phaseNumber: '02',
    timeline: 'Months 7–12',
    title: 'Controlled Pilot Validation',
    status: 'Planned',
    objectives: [
      'Conduct controlled design-partner pilots',
      'Validate MAP invoice challenge functionality',
      'Introduce migration assurance',
      'Measure exceptions identified',
      'Assess financial exposure identified',
      'Evaluate analyst hours saved',
      'Aim to convert one pilot into a paying customer'
    ]
  },
  {
    id: 'phase-3',
    phaseNumber: '03',
    timeline: 'Year 2',
    title: 'Commercialisation and Connectivity',
    status: 'Planned',
    objectives: [
      'Target four to six paying electricity suppliers',
      'Introduce MAP counterparty licences',
      'Develop packaged platform connectors',
      'Introduce planned Kraken-compatible connectivity',
      'Expand evidence packs and operational hotspots',
      'Develop commercial case studies based on actual results'
    ]
  },
  {
    id: 'phase-4',
    phaseNumber: '04',
    timeline: 'Year 3',
    title: 'Market and Product Expansion',
    status: 'Planned',
    objectives: [
      'Expand the multi-supplier platform',
      'Develop a counterparty network',
      'Pilot the gas metering module',
      'Explore additional utility asset classes',
      'Develop platform ecosystem partnerships',
      'Explore international market opportunities',
      'Target a team of approximately eight to ten people'
    ]
  }
];
