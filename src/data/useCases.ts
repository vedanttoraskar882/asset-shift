export interface UseCase {
  id: string;
  tabLabel: string;
  title: string;
  scenario: string;
  proposedResponses: string[];
  impactSummary: string;
  category: string;
}

export const USE_CASES: UseCase[] = [
  {
    id: 'rental-stop',
    tabLabel: 'Meter Exchange / Rental Stop',
    title: 'Meter Exchange with No Rental Stop',
    scenario: 'A supplier authorises a meter exchange. The old meter is removed and the replacement is installed, but the owning MAP does not receive the removal notification.',
    proposedResponses: [
      'Detect the missing notification obligation against the expected-state template',
      'Identify the missed configured notification deadline',
      'Calculate continuing rental exposure in pounds per day via the Liability Clock',
      'Flag corresponding MAP invoice lines for discrepancy review',
      'Assemble supporting field evidence and work orders into an Evidence Pack'
    ],
    impactSummary: 'Prevents indefinite double rental accumulation by pairing physical exchange completion with prompt counterparty notification.',
    category: 'Ongoing Rental Leakage'
  },
  {
    id: 'no-return',
    tabLabel: 'Meter Removal / No Return',
    title: 'Meter Removal with No Return',
    scenario: 'A meter is removed during de-energisation, but return or disposal evidence is missing from contractor logs.',
    proposedResponses: [
      'Maintain the asset return obligation as open past physical disconnection',
      'Identify potential non-return / lost-meter charge exposure under MAP terms',
      'Evaluate applicable contractual charge schedules and risk windows',
      'Group similar unreturned asset exceptions by contractor and depot',
      'Support timely investigation and recovery before non-return charges lock in'
    ],
    impactSummary: 'Provides continuous operational accountability for removed physical assets before costly non-return penalties crystallise.',
    category: 'Asset Loss Risk'
  },
  {
    id: 'unauthorised-job',
    tabLabel: 'Unmatched Industry Record',
    title: 'Industry Record with No Authorised Job',
    scenario: 'Industry records indicate a meter change occurred on-site, but no corresponding supplier job authorisation or work order exists.',
    proposedResponses: [
      'Identify the unmatched industry event through cross-party record spine matching',
      'Raise a reverse exception for unmapped site activity',
      'Flag potentially unauthorised third-party activity or misattributed MPAN records',
      'Support prompt investigation of related agent charges and rental lines'
    ],
    impactSummary: 'Surfaces rogue or untracked field activity across industry flows that would otherwise go unnoticed until invoice reconciliation.',
    category: 'Record Integrity'
  },
  {
    id: 'migration-cutover',
    tabLabel: 'Migration Cut-Over',
    title: 'Migration Cut-Over',
    scenario: 'A supplier is migrating to a new Customer Information System or new MHHS settlement arrangements while meter obligations remain open.',
    proposedResponses: [
      'Snapshot open meter obligations, pending flows and active deadlines pre-migration',
      'Revalidate records against the migrated target system upon cut-over',
      'Identify lost, duplicated or inadvertently reassigned meter events',
      'Provide a structured migration exception report for operational sign-off'
    ],
    impactSummary: 'Ensures zero leakage and full auditability during complex system migrations and industry-wide settlement transitions.',
    category: 'Transformation Assurance'
  }
];
