export type ReleasePhase = 'Core MVP' | 'Months 6–12' | 'Year 2' | 'Year 3';

export interface PlatformModule {
  id: string;
  moduleNumber: string;
  name: string;
  releasePhase: ReleasePhase;
  releaseLabel: string;
  description: string;
  capabilities: string[];
  iconName: 'Database' | 'Fingerprint' | 'ListChecks' | 'Clock' | 'FileCheck' | 'FolderCheck' | 'ChartNoAxesCombined' | 'ArrowLeftRight' | 'Users' | 'Plug' | 'Flame';
  notes?: string;
}

export const PLATFORM_MODULES: PlatformModule[] = [
  {
    id: 'module-01',
    moduleNumber: '01',
    name: 'Industry and Partner Ingestion',
    releasePhase: 'Core MVP',
    releaseLabel: 'Planned MVP',
    description: 'Read-only ingestion of industry flows, Customer Information System extracts, field returns, MAP asset registers and MAP invoices. Each received record is intended to retain source, record type and receipt timestamp.',
    capabilities: [
      'Industry data ingestion',
      'Supplier record ingestion',
      'Field completion records',
      'MAP registers and invoices',
      'Source and timestamp tracking'
    ],
    iconName: 'Database'
  },
  {
    id: 'module-02',
    moduleNumber: '02',
    name: 'Asset Identity Spine',
    releasePhase: 'Core MVP',
    releaseLabel: 'Planned MVP',
    description: 'Connects meter identifiers and relevant operational records to a single physical meter event. Maintains date-effective asset history so records from different organisations can be matched accurately.',
    capabilities: [
      'MPAN matching',
      'Meter serial number matching',
      'MAP ID matching',
      'Work order matching',
      'Agent and site relationships',
      'Date-effective history'
    ],
    iconName: 'Fingerprint'
  },
  {
    id: 'module-03',
    moduleNumber: '03',
    name: 'Obligation Engine',
    releasePhase: 'Core MVP',
    releaseLabel: 'Planned MVP',
    description: 'Applies job-specific obligation templates to authorised meter activities and monitors whether the required actions and evidence are completed.',
    capabilities: [
      'Job-specific obligation templates',
      'Responsible party identification',
      'Configurable deadlines',
      'Evidence requirements',
      'Obligation status monitoring',
      'Versioned rules',
      'Evidence-linked status changes (Open, Met, Breached, Waived)'
    ],
    iconName: 'ListChecks'
  },
  {
    id: 'module-04',
    moduleNumber: '04',
    name: 'Liability Clock and Ranking',
    releasePhase: 'Core MVP',
    releaseLabel: 'Planned MVP',
    description: 'Calculates financial exposure associated with breached obligations using applicable contractual rates and cost functions. Prioritises unresolved exceptions by financial value, urgency and time-to-lock-in.',
    capabilities: [
      'Daily rental exposure calculation',
      'Non-return charge risk monitoring',
      'Configurable contractual rate cards',
      'Financial exposure ranking',
      'Deadline-based prioritisation'
    ],
    iconName: 'Clock'
  },
  {
    id: 'module-05',
    moduleNumber: '05',
    name: 'MAP Invoice Challenge',
    releasePhase: 'Core MVP',
    releaseLabel: 'Planned MVP',
    description: 'Tests meter rental and non-return invoice lines against the corresponding meter lifecycle state. Designed to identify discrepancies and prepare supporting evidence for invoice challenges.',
    capabilities: [
      'Rental invoice validation',
      'Non-return charge validation',
      'Asset ownership verification',
      'Lifecycle-to-invoice matching',
      'Evidence-linked challenge files'
    ],
    iconName: 'FileCheck'
  },
  {
    id: 'module-06',
    moduleNumber: '06',
    name: 'Evidence Pack',
    releasePhase: 'Months 6–12',
    releaseLabel: 'Planned Months 6–12',
    description: 'Creates a structured evidence bundle containing the records associated with a particular meter event and its operational and financial outcomes.',
    capabilities: [
      'Job authorisation records',
      'Field completion evidence',
      'Industry flow records',
      'MAP records',
      'Charge details',
      'Resolution history',
      'Exportable supporting evidence'
    ],
    iconName: 'FolderCheck'
  },
  {
    id: 'module-07',
    moduleNumber: '07',
    name: 'Operational Hotspots',
    releasePhase: 'Months 6–12',
    releaseLabel: 'Planned Months 6–12',
    description: 'Identifies recurring patterns of incomplete obligations across operational categories.',
    capabilities: [
      'Agent-level exception analysis',
      'Contractor-level analysis',
      'MAP-level analysis',
      'Regional patterns',
      'Job type analysis',
      'Failure reason categorisation'
    ],
    iconName: 'ChartNoAxesCombined'
  },
  {
    id: 'module-08',
    moduleNumber: '08',
    name: 'Migration Assurance',
    releasePhase: 'Months 6–12',
    releaseLabel: 'Planned Months 6–12',
    description: 'Creates pre-migration snapshots of open meter obligations and revalidates them after MHHS or supplier platform migration.',
    capabilities: [
      'Pre-migration snapshots',
      'Post-migration validation',
      'Lost-event identification',
      'Duplicate-event identification',
      'Reassigned obligation monitoring'
    ],
    iconName: 'ArrowLeftRight'
  },
  {
    id: 'module-09',
    moduleNumber: '09',
    name: 'Counterparty Portal',
    releasePhase: 'Year 2',
    releaseLabel: 'Planned Year 2',
    description: 'A planned permissioned environment enabling Meter Asset Providers and Metering Equipment Managers to view and address obligations assigned to them.',
    capabilities: [
      'Shared obligation visibility',
      'Permissioned counterparty access',
      'Assigned responsibilities',
      'Evidence sharing',
      'Obligation resolution tracking'
    ],
    iconName: 'Users',
    notes: 'Future product concept only. No live login or authentication.'
  },
  {
    id: 'module-10',
    moduleNumber: '10',
    name: 'Platform Connectors',
    releasePhase: 'Year 2',
    releaseLabel: 'Planned Year 2',
    description: 'Packaged read-only connectors for commonly used supplier Customer Information Systems and field service platforms. The roadmap includes planned Kraken-compatible connectivity.',
    capabilities: [
      'Supplier system compatibility',
      'Field-service data connectivity',
      'Reusable integration configurations',
      'Planned Kraken-compatible connector',
      'Read-only data access'
    ],
    iconName: 'Plug',
    notes: 'Planned roadmap connector. Does not imply an existing Kraken integration or formal partnership.'
  },
  {
    id: 'module-11',
    moduleNumber: '11',
    name: 'Gas Module',
    releasePhase: 'Year 3',
    releaseLabel: 'Planned Year 3',
    description: 'Future extension of the obligation-based model to gas metering assets using relevant gas industry data sources.',
    capabilities: [
      'Gas meter lifecycle obligations',
      'Gas MAP records',
      'Meter Asset Manager obligations',
      'Gas asset reconciliation'
    ],
    iconName: 'Flame',
    notes: 'Future expansion phase. Initial platform focus is strictly electricity.'
  }
];
