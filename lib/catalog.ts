// src/lib/catalog.ts
import { SAMPLE_PRODUCTS } from '@/content/vertas-data';
import { IndustrialProduct } from '@/types/vertas';

/**
 * Mặc định ẨN dữ liệu mẫu (isPrototypeOrSample: true) khi NODE_ENV=production (Fail-safe).
 * Chỉ hiển thị khi có cờ máy chủ SHOW_PROTOTYPES="true" (môi trường staging/nội bộ).
 */
export function getPublicProducts(): IndustrialProduct[] {
  const isProduction = process.env.NODE_ENV === 'production';
  const showPrototypes = process.env.SHOW_PROTOTYPES === 'true';

  return SAMPLE_PRODUCTS.filter((product) => {
    if (product.isPrototypeOrSample && isProduction && !showPrototypes) {
      return false;
    }
    return true;
  });
}