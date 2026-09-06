# VERTAS-WEB: MASTER BLUEPRINT & ARCHITECTURAL ROADMAP

## 1. ĐỊNH DANH PHÁP LÝ & TÔN CHỈ HOẠT ĐỘNG
*   **Pháp nhân:** CÔNG TY TNHH VERTAS (*VERTAS COMPANY LIMITED*).
*   **Mã số thuế:** `3703443995` (Cấp ngày 13/02/2026).
*   **Người đại diện pháp luật:** NGUYỄN VĂN CHIẾN THẮNG.
*   **Địa chỉ pháp lý:** 160 Bùi Thị Cội, Khu phố Đông An, Phường Tân Đông Hiệp, TP. Hồ Chí Minh.
*   **Triết lý thương hiệu:** 
    *   *Veritas* (Chân lý, độ chuẩn xác tuyệt đối trong đo lường).
    *   *Verdant* (Bền vững, thích ứng công nghiệp dài hạn).
    *   *TAS* (Chiến Thắng, bảo chứng năng lực điều khiển).
*   **Mô hình vận hành cốt lõi (9 Mã ngành):**
    *   *Mã 2651:* Sản xuất thiết bị đo lường, kiểm tra, định hướng và điều khiển.
    *   *Mã 3312, 3313, 3314, 3320:* Sửa chữa, bảo trì và lắp đặt máy móc thiết bị công nghiệp chuyên dụng.
    *   *Mã 4652, 4659:* Phân phối thiết bị, linh kiện điện tử viễn thông và máy móc tự động hóa.
    *   *Mã 6219:* Lập trình máy tính, phát triển phần mềm nhúng (Firmware / SCADA).
    *   *Mã 7211, 7212:* Nghiên cứu khoa học và phát triển công nghệ (R&D).
*   **Tuyên bố định vị:** Trụ sở là **Văn phòng Kỹ thuật R&D, Thiết kế Mạch nhúng & Tích hợp Hệ thống**. Không quảng bá nhà máy gia công cơ khí nặng tại địa chỉ trụ sở; hoạt động chế tạo triển khai tại xưởng liên kết hoặc hiện trường nhà máy.

---

## 2. HỆ THỐNG THIẾT KẾ: "HIGH-PRECISION INDUSTRIALISM"
*   **Thẩm mỹ:** Giao diện phôi kim loại phòng lab kỹ thuật cao, dứt khoát, tối giản, minh bạch dữ liệu.
*   **Bảng màu kỹ thuật:**
    *   `industrial-base`: `#090D16` (Nền phôi thép tối).
    *   `industrial-surface`: `#0F172A` (Bề mặt panel, card kỹ thuật).
    *   `industrial-elevated`: `#1E293B` (Khối nổi, dropdown, popover).
    *   `industrial-border`: `rgba(148, 163, 184, 0.12)` (Đường nét mạch in, viền CAD).
    *   `industrial-emerald`: `#10B981` (Tín hiệu vận hành, Primary CTA, chuẩn đo lường).
    *   `industrial-cyan`: `#06B6D4` (Tín hiệu kỹ thuật số, R&D).
    *   `industrial-alert`: `#F43F5E` (Cảnh báo lỗi form validation, chặn pháp lý).
    *   `industrial-slate-body`: `#CBD5E1` (Văn bản đạt chuẩn tương phản WCAG 2.1 AA).
*   **Hệ vi mô bo góc:** Cố định chuẩn cơ khí chính xác `--radius: 0.25rem` (4px).
    *   `rounded-sm`: `0px` (Góc vát phẳng tuyệt đối).
    *   `rounded-md`: `2px` (Bo vi mô).
    *   `rounded-lg`: `var(--radius)` (4px - Bo khung tiêu chuẩn).
    *   `rounded-xl`: `calc(var(--radius) + 4px)` (8px - CẤM dùng các class bo tròn lớn hơn như 2xl, 3xl, full ngoại trừ Avatar và các chấm báo trạng thái - status/online indicator dot).
*   **Typography:**
    *   `Plus Jakarta Sans`: Hiển thị tiêu đề, nội dung diễn giải (hỗ trợ tiếng Việt đầy đủ).
    *   `JetBrains Mono`: Part Number, bảng thông số kỹ thuật (Specs), dung sai và mã lệnh.

---

## 3. NGĂN XẾP CÔNG NGHỆ (TECH STACK CONSTRAINTS)
*   **Framework (BẮT BUỘC PIN PHIÊN BẢN):** Next.js `^16.3.4` (App Router, Turbopack) + React `19.2.x` + TypeScript `^7.0.2`.
    *   *Security Note:* Next.js đã phát hành security release gần như hàng tháng trong 2026 (5/2026, 7/2026, 8/2026 — bao gồm RCE Critical vá ở 16.3.3). KHÔNG được coi bất kỳ số phiên bản cụ thể nào trong file này là "an toàn vĩnh viễn". Trước Bước 6 (deploy production), BẮT BUỘC kiểm tra lại https://github.com/vercel/next.js/security/advisories và cài bản patch mới nhất trong nhánh 16.3.x, dù đã pin `^16.3.4` ở đây.
    *   *Compiler Note:* TypeScript 7.0 hiện chưa có Programmatic API ổn định. Mọi công cụ vibe-coding (như shadcn CLI, ESLint plugins) có thể lỗi ngầm. Bắt buộc Agent phải chạy `npx tsc --noEmit` sau mỗi lần generate code để kiểm chứng độc lập tính toàn vẹn.
*   **Cấu trúc thư mục:** **Root-level 100% (Không dùng thư mục `src/`)**. Toàn bộ cấu trúc gồm: `app/`, `components/`, `content/`, `lib/`, `types/`. Path alias: `@/*` trỏ về `./*`.
*   **CSS Engine:** Tailwind CSS v4 Native (Cấu hình qua CSS variables trong `app/globals.css`, không dùng `tailwind.config.ts`).
*   **UI Primitives:** Radix UI / shadcn/ui (`dialog`, `tabs`).
*   **Khai báo Icon:** `lucide-react`.

---

## 4. QUY CHUẨN AN TOÀN & PHÁP LÝ BẤT BIẾN (FAIL-SAFE ARCHITECTURE)
1.  **Tuân thủ Nghị định 13/2023/NĐ-CP:**
    *   Mọi điểm chạm thu thập dữ liệu (RFQ, Tư vấn kỹ thuật) bắt buộc có checkbox đồng ý điều khoản xử lý dữ liệu.
    *   API `/api/leads` thực hiện kiểm tra `consentGiven` ngay tại server (Fail-closed). Từ chối tiếp nhận (HTTP 400) nếu người dùng chưa xác nhận.
2.  **Bộ phân phối Lead B2B (No Fake Success):**
    *   Lead không được phép "biến mất trong `console.log()`".
    *   Dữ liệu được điều phối qua `lib/lead-dispatcher.ts` đến Webhook (Discord / Slack / Apps Script).
    *   Nếu đang chạy môi trường production mà thiếu cấu hình `LEAD_WEBHOOK_URL`, hệ thống bắt buộc báo lỗi fail-closed, không báo thành công ảo.
3.  **Bộ lọc dữ liệu R&D (Strict Server-Side Only):**
    *   Dữ liệu thử nghiệm gắn cờ `isPrototypeOrSample: true` tự động bị ẩn trên môi trường production qua hàm `getPublicProducts()`.
    *   Cờ giải phóng: `SHOW_PROTOTYPES="true"`.
    *   *Bảo mật tuyệt đối:* Biến môi trường này TUYỆT ĐỐI KHÔNG ĐƯỢC chứa tiền tố `NEXT_PUBLIC_`. Điều kiện đánh giá phải diễn ra 100% tại Node.js Server. Nếu lộ ra client bundle, toàn bộ dữ liệu mẫu R&D nội bộ sẽ bị rò rỉ.
4.  **Minh bạch Hợp chuẩn:**
    *   Chỉ gắn nhãn chứng chỉ tương ứng 4 cấp độ: `CERTIFIED`, `SELF_DECLARED_COMPLIANT`, `IN_PROGRESS`, `PLANNED`. Tuyệt đối không quảng bá khống chứng nhận CE/ISO.

---

## 5. LỘ TRÌNH THỰC THI 6 BƯỚC (EXECUTION ROADMAP)

*   **Bước 1: Nền Tảng & Hệ Thống Nhận Diện (LOCKED ✅)**
    *   Cấu trúc root-level, font chữ, token Tailwind v4, lưới tọa độ CAD `IndustrialGrid`.
    *   Hero Section với 2 nút CTA kép và dải số liệu kỹ thuật JetBrains Mono.
    *   Nút trực tuyến `StickyZaloCTA` fail-safe.
    *   Đã audit 7/7 hạng mục và xác nhận compile `tsc --noEmit` sạch 100%.

*   **Bước 2: Danh Mục Kỹ Thuật & Động Cơ Chuyển Đổi (TIẾP THEO 🎯)**
    *   Tạo `app/api/leads/route.ts` và `lib/lead-dispatcher.ts` (chuẩn fail-closed).
    *   Component `ProductCard` (Mã 2651) & `SolutionCard` (Mã 3312-3320).
    *   Tabs chuyển đổi phân hệ `CatalogSection.tsx`.
    *   Nâng cấp bộ đôi modal Radix Dialog: `RFQModal` (kèm `quantityRequested`) & `TalkToEngineerModal`.
    *   Tách lớp `HomePageClient.tsx` ('use client') để giữ nguyên `app/page.tsx` là Server Component.

*   **Bước 3: Minh Bạch Thể Chế & Trang "Về VERTAS"**
    *   Xây dựng route `/ve-vertas`.
    *   Hiển thị Terminal tra cứu dữ liệu Cổng thông tin Quốc gia (MST 3703443995). *Lưu ý:* Đây là component render tĩnh, mô phỏng hiệu ứng Typewriter UI (gõ chữ) từ dữ liệu đã được con người verify thủ công với Giấy phép ĐKKD. Tuyệt đối không fetch API sống từ các trang scraping bên thứ ba để tránh rủi ro ToS và sai lệch pháp lý.
    *   Trình bày 3 trục năng lực kỹ thuật (Pillars) gắn liền với 9 mã ngành ĐKKD.

*   **Bước 4: Quy Trình Triển Khai & Chính Sách Bảo Mật**
    *   Xây dựng trang `/chinh-sach-bao-mat` chuẩn Nghị định 13/2023/NĐ-CP.
    *   Section quy trình kỹ thuật 4 bước (Signal Scoping -> Circuit/CAD Simulation -> Firmware Integration -> Commissioning/FAT/SAT).

*   **Bước 5: SEO Kỹ Thuật & Cấu Trúc Dữ Liệu**
    *   Tích hợp Schema.org JSON-LD (`Organization` & `ProfessionalService`).
    *   Tạo `robots.ts` và `sitemap.ts`.

*   **Bước 6: Nghiệm Thu Bản Build & Triển Khai Production (DevOps Ops)**
    *   Kiểm tra type-safety toàn cục (`tsc --noEmit`), audit token CSS.
    *   Đóng gói build tĩnh/động kết hợp với Turbopack (`npm run build`).
    *   Cấu hình nền tảng Hosting: CHỐT triển khai trên **Vercel** (Linux-based environment). TUYỆT ĐỐI CẤM deploy trên Windows Server để phòng chống lỗ hổng RCE 25/8/2026 liên quan Windows-hosted servers. Lưu ý: lỗ hổng RCE thứ hai trong đợt vá này (Image Optimization API xử lý AVIF) không phân biệt hệ điều hành — được phòng chống bằng việc pin đúng version ở Mục 3, không phải bằng lựa chọn hosting.
    *   Bơm biến môi trường an toàn trên giao diện Production: `LEAD_WEBHOOK_URL` (bắt buộc có để nhận lead) và `SHOW_PROTOTYPES` (mặc định false).
    *   Ràng buộc Domain chính thức: `[DOMAIN_TBD]` (Sẽ xác nhận và config CORS/Metadata sau khi chính thức sở hữu domain, tuyệt đối không hardcode domain giả định vào code ở các Bước 1->5).