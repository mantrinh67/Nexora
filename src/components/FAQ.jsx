import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: 'Chi phí trọn gói tại Nexora đã bao gồm những gì? Có phát sinh thêm không?',
      a: 'Chi phí báo giá là trọn gói và cam kết không phát sinh bất kỳ khoản nào ngoài hợp đồng. Gói dịch vụ đã bao gồm: Thiết kế UI/UX độc quyền trên Figma, Lập trình hoàn thiện, Tối ưu SEO Onpage, Kiểm thử đa thiết bị, Bàn giao 100% mã nguồn, Triển khai lên server / App Store và Bảo hành kỹ thuật 12 tháng.'
    },
    {
      q: 'Thời gian hoàn thành một website hoặc mobile app là bao lâu?',
      a: 'Với Landing Page chốt sale thông thường từ 5 – 7 ngày. Website Doanh nghiệp hoặc Bán hàng chuẩn nhận diện từ 10 – 15 ngày. Đối với Mobile App hoặc Web App/SaaS phức tạp từ 20 – 35 ngày làm việc. Trước khi ký hợp đồng, Nexora sẽ gửi bạn bảng tiến độ (Milestones) chi tiết từng tuần.'
    },
    {
      q: 'Tôi có được nhận toàn bộ Source Code (Mã nguồn) sau khi nghiệm thu không?',
      a: 'Có, 100%! Bạn là chủ sở hữu duy nhất của toàn bộ mã nguồn (Source code), cơ sở dữ liệu (Database) và file thiết kế Figma gốc. Nexora bàn giao qua GitHub hoặc Google Drive, không khóa code, không ép buộc phải gia hạn duy trì ở bên chúng tôi.'
    },
    {
      q: 'Sau khi bàn giao, nếu web/app gặp lỗi hoặc muốn nâng cấp thì sao?',
      a: 'Tất cả sản phẩm đều được bảo hành kỹ thuật 12 tháng miễn phí. Mọi sự cố phát sinh do lỗi hệ thống sẽ được đội ngũ kỹ sư xử lý ngay lập tức trong vòng 2 giờ. Sau này khi bạn muốn nâng cấp hoặc tích hợp thêm tính năng mới, chúng tôi luôn có chính sách ưu đãi dành riêng cho khách hàng cũ.'
    },
    {
      q: 'Quy trình thanh toán tại Nexora được chia làm mấy đợt?',
      a: 'Thông thường quy trình thanh toán chia làm 3 đợt linh hoạt gắn liền với kết quả nghiệm thu: Đợt 1 (40% sau khi ký hợp đồng), Đợt 2 (30% sau khi bạn duyệt 100% bản thiết kế UI/UX trên Figma), và Đợt 3 (30% sau khi hoàn thành chạy thử nghiệm và tiến hành bàn giao mã nguồn).'
    },
    {
      q: 'Tôi chưa có logo, hình ảnh hay nội dung bài viết thì có làm được không?',
      a: 'Hoàn toàn được! Đội ngũ Nexora có hỗ trợ tư vấn cấu trúc nội dung, gợi ý sườn bài viết chuẩn marketing, hỗ trợ thiết kế logo nhận diện cơ bản và kho ảnh bản quyền chất lượng cao để sản phẩm của bạn trông chuyên nghiệp nhất.'
    }
  ];

  return (
    <section id="faq" className="py-24 relative bg-slate-50/70">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-bold text-[#0D7A78] uppercase tracking-wider mb-4 shadow-sm">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Giải Đáp Thắc Mắc</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B132B] tracking-tight font-['Space_Grotesk']">
            Các Câu Hỏi Thường Gặp
          </h2>
          <p className="text-[#3A506B] text-sm sm:text-base mt-3">
            Những điều khách hàng thường quan tâm nhất trước khi bắt đầu dự án cùng Nexora.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-white border border-slate-200 hover:border-[#5BC0BE] rounded-2xl overflow-hidden transition-all duration-200 shadow-sm"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-bold text-[#0B132B]">
                    {faq.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#5BC0BE] text-[#0B132B]' : 'text-[#3A506B]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-[#3A506B] leading-relaxed border-t border-slate-100 pt-4 bg-slate-50/50">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-12 text-center text-xs sm:text-sm text-[#3A506B]">
          Bạn còn câu hỏi khác cần được tư vấn chi tiết hơn?{' '}
          <a href="#contact" className="text-[#0D7A78] font-bold hover:underline">
            Chat trực tiếp qua Zalo với Kỹ Sư Trưởng ngay →
          </a>
        </div>

      </div>
    </section>
  );
}
