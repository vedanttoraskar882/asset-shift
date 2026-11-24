export interface CustomerSegment {
  id: string;
  name: string;
  priority: string;
  isPrimary?: boolean;
  description: string;
  focusArea: string;
}

export const CUSTOMER_SEGMENTS: CustomerSegment[] = [
  {
    id: 'ind-ic-suppliers',
    name: 'Independent and I&C Electricity Suppliers',
    priority: 'Initial Market – Year 1',
    isPrimary: true,
    description: 'Industrial and commercial electricity suppliers with mixed MAP estates, complex metering requirements, lean reconciliation teams and platform migration needs.',
    focusArea: 'Primary target market: High exposure per MPAN, multiple metering agents, and immediate return on invoice challenge automation.'
  },
  {
    id: 'large-domestic-suppliers',
    name: 'Large Domestic Electricity Suppliers',
    priority: 'Planned Year 2 Expansion',
    description: 'Larger suppliers managing high volumes of meter events and complex platform migrations.',
    focusArea: 'Scale deployment for massive portfolio churn, legacy smart meter transitions, and enterprise CIS modernization programmes.'
  },
  {
    id: 'meter-asset-providers',
    name: 'Meter Asset Providers (MAPs)',
    priority: 'Planned Year 2 Expansion',
    description: 'Organisations seeking more accurate asset registers, better removal notification visibility and fewer rental invoice disputes.',
    focusArea: 'Accelerated de-energisation notifications, transparent asset disposition logs, and reduced reconciliation cycle times.'
  },
  {
    id: 'mems-field-service',
    name: 'Metering Equipment Managers & Field Providers',
    priority: 'Planned Years 2–3 Expansion',
    description: 'Organisations seeking improved visibility of downstream meter obligations, completion evidence and operational exceptions.',
    focusArea: 'Real-time job closure tracking, reduced repeat site queries, and automated evidence audit trails.'
  },
  {
    id: 'gas-suppliers-mams',
    name: 'Gas Suppliers & Meter Asset Managers',
    priority: 'Planned Year 3 Expansion',
    description: 'Future customers for the extended gas asset lifecycle obligation model.',
    focusArea: 'Multi-fuel parity: Unified lifecycle assurance across dual-fuel residential and mixed commercial estates.'
  }
];

export const BENEFICIARY_ROLES = [
  {
    role: 'Finance Directors',
    benefit: 'Safeguard operating margins and eliminate unbudgeted ongoing meter rental drag across estate portfolios.'
  },
  {
    role: 'Revenue Assurance Teams',
    benefit: 'Systematically catch leakage points between supplier authorisations and agent invoice billing.'
  },
  {
    role: 'Reconciliation Analysts',
    benefit: 'Replace burdensome manual spreadsheet matching with automated exception discovery and evidence packs.'
  },
  {
    role: 'Metering Operations Teams',
    benefit: 'Track field returns, disposal milestones, and contractor turnaround times against strict target SLAs.'
  },
  {
    role: 'Billing and Finance Teams',
    benefit: 'Confidently validate or challenge incoming MAP invoices backed by audit-ready operational evidence.'
  },
  {
    role: 'Asset Management Teams',
    benefit: 'Maintain verified, date-effective physical asset histories across multi-party supplier changes.'
  },
  {
    role: 'Migration & Transformation Managers',
    benefit: 'Snapshot open meter events prior to CIS / MHHS cut-over to guarantee zero lost obligations.'
  },
  {
    role: 'Operational Risk Teams',
    benefit: 'Gain governance visibility over counterparty compliance, missing flows, and regulatory exposure.'
  }
];
