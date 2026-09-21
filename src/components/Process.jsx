import React from 'react';
import { Search, PenTool, Code, Rocket, LifeBuoy, Sparkles } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      num: '01',
      icon: Search,
      title: 'Tiếp Nhận & Tư Vấn Giải Pháp',
      desc: 'Phân tích nghiệp vụ chuyên sâu, xác định chân dung người dùng và đề xuất kiến trúc công nghệ tối ưu chi phí. Gửi bảng dự toán và lộ trình triển khai chi tiết trong 24h.',
      tag: 'Tư vấn miễn phí 100%'
    },
    {
      num: '02',
      icon: PenTool,
      title: 'Thiết Kế UI/UX & Prototype Figma',
      desc: 'Xây dựng Wireframe và thiết kế toàn bộ giao diện độc quyền chuẩn Design System. Khách hàng trực tiếp click trải nghiệm bản Prototype và chỉnh sửa đến khi hài lòng.',
      tag: 'Duyệt UI trước khi code'
    },
    {
      num: '03',
      icon: Code,
      title: 'Lập Trình & Kiểm Thử QA/QC Khắt Khe',
      desc: 'Đội ngũ kỹ sư viết code sạch (Clean Architecture), tích hợp cơ sở dữ liệu và API. Đội QA/QC kiểm thử tốc độ, bảo mật và khả năng phản hồi trên hàng chục dòng máy thật.',
      tag: 'Báo cáo tiến độ tuần'
    },
    {
      num: '04',
      icon: Rocket,
      title: 'Triển Khai & Bàn Giao 100% Mã Nguồn',
      desc: 'Hỗ trợ đưa website lên Server / Cloud và đưa ứng dụng lên Apple App Store & Google Play. Bàn giao trọn gói toàn bộ Source Code, Database và tài liệu hướng dẫn.',
      tag: 'Bàn giao 100% Source'
    },
    {
      num: '05',
      icon: LifeBuoy,
      title: 'Bảo Hành 12 Tháng & Đồng Hành',
      desc: 'Cam kết hỗ trợ kỹ thuật 24/7, khắc phục sự cố phát sinh ngay lập tức trong vòng 2 tiếng. Sẵn sàng nâng cấp thêm tính năng mới khi quy mô kinh doanh của bạn mở rộng.',
      tag: 'Hỗ trợ kỹ thuật 24/7'
    }
  ];

  return (
    <section id="process" className="py-24 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-bold text-[#0D7A78] uppercase tracking-wider mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Quy Trình Chuẩn Quốc Tế</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B132B] tracking-tight font-['Space_Grotesk']">
            5 Bước Làm Việc Minh Bạch & Chuẩn Chỉ
          </h2>
          <p className="text-[#3A506B] text-sm sm:text-base mt-3">
            Quy trình khép kín giúp bạn hoàn toàn an tâm: nắm rõ tiến độ từng ngày, duyệt từng giai đoạn và không sợ bị trễ hạn.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="relative bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-[#5BC0BE] transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5 shadow-sm hover:shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-2xl font-extrabold font-['Space_Grotesk'] text-[#3A506B] group-hover:text-[#0D7A78] transition-colors">
                      {step.num}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-[#0B132B] group-hover:bg-[#5BC0BE] transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-[#0B132B] mb-2.5 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#3A506B] leading-relaxed mb-6">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200">
                  <span className="inline-block text-[11px] font-bold text-[#0D7A78] bg-teal-50 px-2.5 py-1 rounded-md border border-teal-200">
                    {step.tag}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
