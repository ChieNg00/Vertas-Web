// src/lib/catalog.ts
import { SAMPLE_PRODUCTS } from '@/content/vertas-data';
import { IndustrialProduct } from '@/types/vertas';

/**
 * Mặc định ẨN dữ liệu mẫu (isPrototypeOrSample: true) khi NODE_ENV=production (Fail-safe by default).
 * Chỉ hiển thị khi có cờ ghi đè tường minh NEXT_PUBLIC_SHOW_PROTOTYPES="true" (ví dụ: staging).
 */
export function getPublicProducts(): IndustrialProduct[] {
  const isProduction = process.env.NODE_ENV === 'production';
  const showPrototypesOverride = process.env.NEXT_PUBLIC_SHOW_PROTOTYPES === 'true';

  return SAMPLE_PRODUCTS.filter((product) => {
    if (product.isPrototypeOrSample && isProduction && !showPrototypesOverride) {
      return false;
    }
    return true;
  });
}