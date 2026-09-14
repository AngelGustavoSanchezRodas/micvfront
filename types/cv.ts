export type SystemStatus = 'HEALTHY' | 'DEGRADED' | 'MAINTENANCE';

export interface NetworkConfig {
  protocols: string[];
  standards: string[];
  cctvSecurity: string[];
}

export interface BackendSkillCategory {
  category: string;
  items: string[];
  levelDescription: string;
}

export interface ApiContract {
  endpoint: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  headers: Record<string, string>;
  requestPayload?: Record<string, unknown>;
  responsePayload: Record<string, unknown>;
  defensiveMechanisms: string[];
}

export interface ProjectData {
  id: string;
  name: string;
  role: string;
  environment: string;
  focus: string;
  summary: string;
  architectureHighlights: string[];
  techStack: string[];
  liveUrl?: string;
  apiSample?: ApiContract;
}

export interface CandidateProfile {
  lang: 'es' | 'en';
  name: string;
  title: string;
  location: string;
  contact: {
    email: string;
    phone: string;
    terminalHandle: string;
  };
  executiveSummary: string;
  systemTelemetry: {
    coreLanguage: string;
    primaryRuntime: string;
    uptimeScore: string;
    securityFocus: string;
  };
  networkSkills: NetworkConfig;
  backendSkills: BackendSkillCategory[];
  projects: ProjectData[];
  education: {
    degree: string;
    institution: string;
    period: string;
    highlights: string[];
  }[];
}