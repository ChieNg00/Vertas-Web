// lib/lead-dispatcher.ts
import { LeadCapturePayload } from '@/types/vertas';

export interface DispatchResult {
  success: boolean;
  channel: 'WEBHOOK' | 'DEV_CONSOLE';
  message: string;
}

export async function dispatchLead(payload: LeadCapturePayload): Promise<DispatchResult> {
  const webhookUrl = process.env.LEAD_WEBHOOK_URL;
  const isProduction = process.env.NODE_ENV === 'production';

  // Format thông điệp kỹ thuật chuẩn B2B
  const textSummary = `
🚨 [YÊU CẦU MỚI TỪ WEBSITE VERTAS]
- Loại yêu cầu: ${payload.intent === 'QUOTE_INQUIRY' ? 'Báo Giá Thiết Bị (RFQ)' : 'Tư Vấn Kỹ Thuật'}
- Thiết bị / Mã tham chiếu: ${payload.itemRefId || 'Tư vấn giải pháp / Cải tạo máy'}
- Người liên hệ: ${payload.contact.fullName}
- Đơn vị: ${payload.contact.companyName}
- Email: ${payload.contact.workEmail}
- Điện thoại: ${payload.contact.phone}
- Mô tả bài toán: ${payload.projectDescription}
- Xác nhận Nghị định 13: ${payload.consentGiven ? 'ĐÃ ĐỒNG Ý' : 'CHƯA'}
- Thời gian: ${new Date().toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' })}
  `.trim();

  // Kịch bản 1: Đã cấu hình Webhook (Telegram, Google Sheet, Lark, Discord)
  if (webhookUrl) {
    try {
      const res = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          text: textSummary,
          content: textSummary, // Tương thích Discord
          payload,
        }),
      });

      if (!res.ok) {
        throw new Error(`Webhook phản hồi mã lỗi: ${res.status}`);
      }

      return {
        success: true,
        channel: 'WEBHOOK',
        message: 'Yêu cầu đã được chuyển tiếp trực tiếp tới kênh trực kỹ thuật.',
      };
    } catch (err: unknown) {
      console.error('[LEAD DISPATCH FAILED]', err);
      // Trên production, nếu webhook chết, không che giấu lỗi
      if (isProduction) {
        return {
          success: false,
          channel: 'WEBHOOK',
          message: 'Không thể kết nối đến hệ thống điều phối kỹ thuật. Vui lòng liên hệ trực tiếp qua Zalo/Hotline.',
        };
      }
    }
  }

  // Kịch bản 2: Môi trường Development hoặc chưa điền Webhook
  console.warn('⚠️ [DEV WARNING]: Chưa cấu hình LEAD_WEBHOOK_URL trong .env.local. Lead đang được ghi nhận tại console:');
  console.info(textSummary);

  if (isProduction && !webhookUrl) {
    console.error('CRITICAL: Production đang chạy nhưng thiếu LEAD_WEBHOOK_URL. Lead khách hàng có nguy cơ thất lạc!');
  }

  return {
    success: true,
    channel: 'DEV_CONSOLE',
    message: 'Yêu cầu kỹ thuật đã được ghi nhận trong phiên làm việc.',
  };
}