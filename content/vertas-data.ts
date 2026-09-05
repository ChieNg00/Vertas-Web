// src/content/vertas-data.ts
import { CompanyLegalInfo, IndustrialProduct, EngineeringSolution } from '@/types/vertas';

export const VERTAS_LEGAL: CompanyLegalInfo = {
  legalNameVN: 'CÔNG TY TNHH VERTAS',
  legalNameEN: 'VERTAS COMPANY LIMITED',
  brandName: 'VERTAS',
  taxCode: '3703443995',
  establishedDate: '2026-02-13',
  representative: 'NGUYỄN VĂN CHIẾN THẮNG',
  registeredOffice: '160 Bùi Thị Cội, Khu phố Đông An, Phường Tân Đông Hiệp, TP. Hồ Chí Minh',
  natureOfOperations: 'Nghiên cứu R&D, Tích hợp Hệ thống Đo lường & Giải pháp Kỹ thuật Công nghiệp',
  hotlineEngineering: process.env.NEXT_PUBLIC_HOTLINE_PHONE || '0966200378'
};

export const HERO_CONTENT = {
  badge: 'CÔNG NGHỆ ĐO LƯỜNG & ĐIỀU KHIỂN CHÍNH XÁC • MST: 3703443995',
  headline: 'Độ Chuẩn Xác Trong Đo Lường. Sự Chắc Chắn Trong Điều Khiển.',
  subline: 
    'VERTAS đồng hành cùng các đơn vị sản xuất và viện nghiên cứu bằng giải pháp tích hợp phần cứng đo lường, phần mềm nhúng và tự động hóa công nghiệp chuẩn mực. Tư vấn trực tiếp bởi kỹ sư chuyên trách.',
  metrics: [
    { label: 'Dung sai kiểm soát', value: '±0.02%', unit: 'F.S.' },
    { label: 'Chuẩn công nghiệp', value: 'RS-485 / Modbus / CAN', unit: 'Standard' },
    { label: 'Mô hình triển khai', value: 'R&D & Tích hợp On-site', unit: 'Dedicated' },
    { label: 'Hỗ trợ kỹ thuật', value: '1-on-1', unit: 'Với Kỹ Sư' }
  ]
};

export const FEATURED_PRODUCTS: IndustrialProduct[] = [
  {
    id: 'vts-m2651-01',
    partNumber: 'VTS-AXIS-500',
    name: 'Module Giám Sát Tín Hiệu Đo Lường Đa Kênh',
    sector: 'MEASUREMENT_CONTROL',
    tagline: 'Thu thập tín hiệu cảm biến áp suất, nhiệt độ với độ ổn định cao',
    specs: [
      { parameter: 'Độ phân giải ADC', value: '24-bit', tolerance: '±0.01%' },
      { parameter: 'Giao thức xuất dữ liệu', value: 'Modbus RTU/TCP', unit: 'Ethernet/RS485' },
      { parameter: 'Điện áp cách ly', value: '2500', unit: 'Vrms' }
    ],
    certifications: ['CE', 'RoHS Ready'],
    leadTime: 'Sẵn sàng giao mẫu kỹ thuật',
    primaryCTA: 'REQUEST_A_QUOTE'
  }
];

export const FEATURED_SOLUTIONS: EngineeringSolution[] = [
  {
    id: 'sol-auto-retrofit',
    slug: 'modernization-retrofit',
    title: 'Nâng Cấp & Tối Ưu Hệ Thống Điều Khiển Máy Tự Động',
    sector: 'INDUSTRIAL_SERVICES',
    scope: 'Hiện đại hóa tủ điện, lập trình PLC/SCADA thay thế dòng máy cũ không còn phụ tùng',
    engineeringPillars: [
      'Khảo sát hiện trường & đo kiểm tín hiệu thực tế',
      'Thiết kế sơ đồ nguyên lý mạch động lực & điều khiển',
      'Lập trình thuật toán điều khiển thích nghi bù sai số'
    ],
    primaryCTA: 'TALK_TO_AN_ENGINEER'
  }
];