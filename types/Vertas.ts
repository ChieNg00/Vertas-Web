// src/types/vertas.ts

export type BusinessSector = 
  | 'MEASUREMENT_CONTROL'   // Mã 2651: Thiết bị đo lường, kiểm tra, điều khiển
  | 'INDUSTRIAL_SERVICES'   // Mã 3312, 3313, 3314, 3320: Sửa chữa, lắp đặt thiết bị
  | 'HARDWARE_DISTRIBUTION' // Mã 4652, 4659: Bán buôn thiết bị, linh kiện kỹ thuật
  | 'EMBEDDED_SOFTWARE'     // Mã 6219: Lập trình máy tính & phần mềm nhúng
  | 'RD_INNOVATION';         // Mã 7211, 7212: R&D Khoa học & Công nghệ

export type ComplianceLevel = 
  | 'CERTIFIED'                  // Đã có chứng nhận chính thức
  | 'SELF_DECLARED_COMPLIANT'   // Tự công bố hợp chuẩn kỹ thuật
  | 'IN_PROGRESS'               // Đang trong quy trình thử nghiệm
  | 'PLANNED';                  // Trong lộ trình R&D

export interface CertificationStatus {
  standard: string;             // 'CE', 'RoHS', 'ISO 9001', 'IEC 61010-1'...
  status: ComplianceLevel;
  declarationNote?: string;     // Chi tiết tiêu chuẩn viện dẫn
  dossierNumber?: string;       // Mã hồ sơ kiểm định (nếu có)
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
  isPrototypeOrSample: boolean; // Flag chặn rò rỉ dữ liệu demo lên production
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

