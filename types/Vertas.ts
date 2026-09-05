// types/vertas.ts
export type BusinessSector =
  | 'MEASUREMENT_CONTROL'
  | 'INDUSTRIAL_SERVICES'
  | 'HARDWARE_DISTRIBUTION'
  | 'EMBEDDED_SOFTWARE'
  | 'RD_INNOVATION';

export type ComplianceLevel =
  | 'CERTIFIED'
  | 'SELF_DECLARED_COMPLIANT'
  | 'IN_PROGRESS'
  | 'PLANNED';

export interface CertificationStatus {
  standard: string;
  status: ComplianceLevel;
  declarationNote?: string;
  dossierNumber?: string;
}

export interface TechnicalSpec {
  parameter: string;
  value: string;
  tolerance?: string;
  unit?: string;
}

export interface IndustrialProduct {
  id: string;
  slug: string;
  partNumber: string;
  name: string;
  sector: BusinessSector;
  tagline: string;
  images: {
    thumbnail: string;
    diagram?: string;
    gallery: string[];
  };
  specs: TechnicalSpec[];
  certifications: CertificationStatus[];
  leadTime: string;
  isPrototypeOrSample: boolean;
  primaryCTA: 'REQUEST_A_QUOTE';
}

export interface EngineeringSolution {
  id: string;
  slug: string;
  title: string;
  sector: BusinessSector;
  scope: string;
  engineeringPillars: string[];
  primaryCTA: 'TALK_TO_AN_ENGINEER';
}

export interface CompanyLegalInfo {
  legalNameVN: string;
  legalNameEN: string;
  brandName: string;
  taxCode: string;
  establishedDate: string;
  representative: string;
  registeredOffice: string;
  natureOfOperations: string;
  hotlineEngineering: string;
}

export interface LeadCapturePayload {
  intent: 'QUOTE_INQUIRY' | 'ENGINEERING_CONSULTATION';
  itemRefId?: string;
  projectDescription: string;
  contact: {
    fullName: string;
    workEmail: string;
    companyName: string;
    phone: string;
  };
  consentGiven: boolean;
}