// src/app/layout.tsx
import { Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import '@/app/globals.css';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin', 'vietnamese'],
  variable: '--font-jakarta',
  display: 'swap'
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap'
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" className={`${jakarta.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-industrial-base text-industrial-slate-body font-sans antialiased">
        {children}
      </body>
    </html>
  );
}