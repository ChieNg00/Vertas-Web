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

  const quantityLine = payload.quantityRequested 
    ? `- Số lượng yêu cầu: ${payload.quantityRequested} bộ/thiết bị\n` 
    : '';

  const textSummary = `
🚨 [YÊU CẦU MỚI TỪ WEBSITE VERTAS]
- Loại yêu cầu: ${payload.intent === 'QUOTE_INQUIRY' ? 'Báo Giá Thiết Bị (RFQ)' : 'Tư Vấn Kỹ Thuật'}
- Thiết bị / Tham chiếu: ${payload.itemRefId || 'Tư vấn giải pháp / Cải tạo máy'}
${quantityLine}- Người liên hệ: ${payload.contact.fullName}
- Đơn vị: ${payload.contact.companyName}
- Email: ${payload.contact.workEmail}
- Điện thoại: ${payload.contact.phone}
- Mô tả bài toán: ${payload.projectDescription}
- Xác nhận Nghị định 13: ${payload.consentGiven ? 'ĐÃ ĐỒNG Ý' : 'CHƯA'}
- Thời gian: ${new Date().toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' })}
  `.trim();

  // Nhánh 1: CHƯA cấu hình Webhook URL
  if (!webhookUrl) {
    console.warn('⚠️ [DEV WARNING]: Chưa cấu hình LEAD_WEBHOOK_URL. Lead chỉ in trong console:');
    console.info(textSummary);

    if (isProduction) {
      console.error('CRITICAL: Production thiếu LEAD_WEBHOOK_URL. Chặn báo thành công giả để tránh mất lead.');
      return {
        success: false,
        channel: 'DEV_CONSOLE',
        message: 'Hệ thống điều phối kỹ thuật chưa sẵn sàng. Vui lòng liên hệ trực tiếp qua Zalo hoặc Hotline.',
      };
    }

    return {
      success: true,
      channel: 'DEV_CONSOLE',
      message: 'Yêu cầu kỹ thuật đã được ghi nhận trong phiên làm việc cục bộ (dev mode).',
    };
  }

  // Nhánh 2: ĐÃ cấu hình Webhook URL
  try {
    const res = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        text: textSummary,
        content: textSummary,
        payload,
      }),
    });

    if (!res.ok) {
      throw new Error(`Webhook phản hồi mã lỗi HTTP: ${res.status}`);
    }

    return {
      success: true,
      channel: 'WEBHOOK',
      message: 'Yêu cầu đã được chuyển tiếp trực tiếp tới kênh trực kỹ thuật.',
    };
  } catch (err: unknown) {
    console.error('[LEAD DISPATCH FAILED]', err);
    console.info('[DỮ LIỆU LEAD GỐC]', textSummary);
    return {
      success: false,
      channel: 'WEBHOOK',
      message: 'Không thể kết nối đến hệ thống điều phối kỹ thuật. Vui lòng liên hệ trực tiếp qua Zalo hoặc Hotline.',
    };
  }
}