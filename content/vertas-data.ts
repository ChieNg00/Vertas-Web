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

// DỮ LIỆU MINH HỌA — có isPrototypeOrSample để lib/catalog.ts tự ẩn khi lên production
export const SAMPLE_PRODUCTS: IndustrialProduct[] = [
  {
    id: 'sample-vts-axis-500',
    slug: 'vts-axis-500-analog-acquisition',
    partNumber: 'VTS-AXIS-500',
    name: 'Module Thu Thập & Xử Lý Tín Hiệu Cảm Biến Đa Kênh',
    sector: 'MEASUREMENT_CONTROL',
    tagline: 'Bộ chuyển đổi tín hiệu tương tự sang số (ADC 24-bit) công nghiệp cho cảm biến tải và áp suất',
    images: {
      thumbnail: '/assets/products/vts-axis-500-thumb.webp',
      gallery: ['/assets/products/vts-axis-500-front.webp']
    },
    specs: [
      { parameter: 'Độ phân giải lấy mẫu', value: '24-bit Delta-Sigma', tolerance: '±0.01% F.S.' },
      { parameter: 'Cách ly quang (Galvanic)', value: '2.5', unit: 'kVrms' },
      { parameter: 'Cổng truyền thông', value: 'RS-485', unit: 'Modbus RTU / ASCII' },
      { parameter: 'Nguồn cấp công nghiệp', value: '12 - 36', unit: 'VDC' }
    ],
    certifications: [
      {
        standard: 'IEC 61010-1 (An toàn thiết bị đo lường)',
        status: 'SELF_DECLARED_COMPLIANT',
        declarationNote: 'Tuân thủ thiết kế giới hạn điện áp & cách ly an toàn theo phòng Lab nội bộ'
      },
      {
        standard: 'CE EMC Directive 2014/30/EU',
        status: 'PLANNED',
        declarationNote: 'Lộ trình thử nghiệm tương thích điện từ dự kiến Quý IV/2026'
      }
    ],
    leadTime: 'Mẫu R&D: 2 tuần • Đơn hàng tích hợp: Theo tiến độ dự án',
    isPrototypeOrSample: true,
    primaryCTA: 'REQUEST_A_QUOTE'
  }
];

export const SOLUTIONS: EngineeringSolution[] = [
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