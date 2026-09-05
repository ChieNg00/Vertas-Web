// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        industrial: {
          base: '#090D16',       // Nền đen phôi kim loại
          surface: '#0F172A',    // Bề mặt bảng mạch / Card
          elevated: '#1E293B',   // Bề mặt nổi / Popover
          border: 'rgba(148, 163, 184, 0.12)',
          borderHover: 'rgba(16, 185, 129, 0.4)',
          emerald: {
            DEFAULT: '#10B981',  // Tín hiệu vận hành / Mộc
            glow: 'rgba(16, 185, 129, 0.25)',
            muted: '#064E3B'
          },
          cyan: '#06B6D4',       // Đường truyền dữ liệu / Đo lường
          slate: {
            body: '#CBD5E1',     // Đạt chuẩn WCAG AA trên nền dark
            muted: '#94A3B8',    // Label phụ, thông số
            code: '#E2E8F0'
          }
        }
      },
      fontFamily: {
        sans: ['var(--font-jakarta)', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace']
      }
    }
  },
  plugins: []
};

export default config;