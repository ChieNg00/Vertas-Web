// src/types/vertas.ts

export type BusinessSector = 
  | 'MEASUREMENT_CONTROL'   // Mã 2651: Thiết bị đo lường, kiểm tra, điều khiển
  | 'INDUSTRIAL_SERVICES'   // Mã 3312, 3313, 3314, 3320: Sửa chữa, lắp đặt thiết bị
  | 'HARDWARE_DISTRIBUTION' // Mã 4652, 4659: Bán buôn thiết bị, linh kiện kỹ thuật
  | 'EMBEDDED_SOFTWARE'     // Mã 6219: Lập trình máy tính & phần mềm nhúng
  | 'RD_INNOVATION';         // Mã 7211, 7212: R&D Khoa học & Công nghệ

export interface CompanyLegalInfo {
  legalNameVN: string;
  legalNameEN: string;
  brandName: string;
  taxCode: string;
  establishedDate: string;
  representative: string;
  registeredOffice: string;
  natureOfOperations: string;
}

export interface TechnicalSpec {
  parameter: string;
  value: string;
  tolerance?: string;
  unit?: string;
}

export interface IndustrialProduct {
  id: string;
  partNumber: string;
  name: string;
  sector: BusinessSector;
  tagline: string;
  specs: TechnicalSpec[];
  certifications: string[];
  leadTime: string;
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
  /** Bắt buộc theo Nghị định 13/2023/NĐ-CP */
  consentGiven: boolean;
}

