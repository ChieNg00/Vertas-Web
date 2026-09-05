// src/lib/catalog.ts
import { SAMPLE_PRODUCTS } from '@/content/vertas-data';
import { IndustrialProduct } from '@/types/vertas';

export function getPublicProducts(): IndustrialProduct[] {
  const isProduction = process.env.NODE_ENV === 'production';

  return SAMPLE_PRODUCTS.filter((product) => {
    // Khi deploy thật, nếu sản phẩm là prototype chưa hoàn thiện và có cấu hình ẩn:
    if (isProduction && product.isPrototypeOrSample && process.env.HIDE_PROTOTYPES === 'true') {
      return false;
    }
    return true;
  });
}