import React from 'react';
import { ShieldCheck, Code, Zap, Clock, HeartHandshake, Award, Sparkles } from 'lucide-react';

export default function WhyUs() {
  const guarantees = [
    {
      icon: ShieldCheck,
      title: 'Cam Kết Không Phát Sinh Chi Phí',
      desc: 'Báo giá rõ ràng từng hạng mục trong hợp đồng kinh tế. Cam kết không có bất kỳ phụ phí ẩn nào trong suốt quá trình triển khai dự án.'
    },
    {
      icon: Code,
      title: 'Bàn Giao 100% Mã Nguồn & Bản Quyền',
      desc: 'Bạn là chủ sở hữu duy nhất của mã nguồn, cơ sở dữ liệu và file thiết kế Figma gốc. Không giữ code làm con tin, không phụ thuộc nhà cung cấp.'
    },
    {
      icon: Zap,
      title: 'Tốc Độ & Chuẩn SEO Google 90+',
      desc: 'Áp dụng công nghệ tiên tiến (Next.js, Tailwind, tối ưu ảnh WebP) giúp website tải dưới 1 giây, đạt điểm Core Web Vitals xanh mướt trên Google.'
    },
    {
      icon: Clock,
      title: 'Cam Kết Đúng Hạn Tiến Độ',
      desc: 'Có lộ trình chi tiết theo từng tuần (Milestones). Bồi thường hợp đồng nếu bàn giao trễ hạn so với cam kết văn bản.'
    },
    {
      icon: HeartHandshake,
      title: 'Bảo Hành Kỹ Thuật 12 Tháng Trọn Gói',
      desc: 'Khắc phục sự cố phát sinh trong vòng 2 giờ. Định kỳ sao lưu dữ liệu (backup) và kiểm tra bảo mật hệ thống miễn phí.'
    },
    {
      icon: Award,
      title: 'Đội Ngũ Kỹ Sư Senior Trực Tiếp Thực Hiện',
      desc: 'Làm việc trực tiếp cùng Tech Lead và Senior Designer hơn 6 năm kinh nghiệm, không qua trung gian, tư vấn chuẩn xác từ góc nhìn chuyên gia.'
    }
  ];

  return (
    <section id="why-us" className="py-24 relative bg-slate-50/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-bold text-[#0D7A78] uppercase tracking-wider mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Giá Trị Khác Biệt</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B132B] tracking-tight font-['Space_Grotesk']">
            Vì Sao Doanh Nghiệp Lựa Chọn Nexora?
          </h2>
          <p className="text-[#3A506B] text-sm sm:text-base mt-3">
            Chúng tôi không bán một website/ứng dụng giá rẻ dùng sẵn khuôn mẫu. Chúng tôi xây dựng tài sản số chất lượng cao giúp bạn kinh doanh thành công.
          </p>
        </div>

        {/* Guarantees Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {guarantees.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 hover:border-[#5BC0BE] transition-all duration-300 group hover:-translate-y-1 shadow-sm hover:shadow-md"
              >
                <div className="w-12 h-12 rounded-xl bg-teal-50 border border-teal-100 p-0.5 mb-5 flex items-center justify-center text-[#0D7A78] group-hover:bg-[#5BC0BE] group-hover:text-[#0B132B] transition-colors">
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-base sm:text-lg font-bold text-[#0B132B] mb-2.5">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#3A506B] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Comparison Banner */}
        <div className="mt-16 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 overflow-x-auto shadow-md">
          <div className="min-w-[600px]">
            <h3 className="text-lg font-bold text-[#0B132B] mb-6 text-center">
              So Sánh: Làm Việc Với Nexora vs. Dịch Vụ Giá Rẻ / Template Sẵn
            </h3>
            <table className="w-full text-xs sm:text-sm text-left">
              <thead>
                <tr className="border-b border-slate-200 text-[#3A506B]">
                  <th className="pb-3 w-1/3">Tiêu chí</th>
                  <th className="pb-3 w-1/3 text-[#0D7A78] font-bold">✨ Nexora Digital Studio</th>
                  <th className="pb-3 w-1/3 text-slate-400 font-normal">Dịch vụ dựng sẵn / Giá rẻ</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-[#1C2541]">
                <tr>
                  <td className="py-3 font-semibold text-[#0B132B]">Thiết kế UI/UX</td>
                  <td className="py-3 text-[#0D7A78] font-bold">Độc quyền 100% trên Figma, chuẩn nhận diện</td>
                  <td className="py-3 text-slate-400">Rập khuôn theo template tải trên mạng</td>
                </tr>
                <tr>
                  <td className="py-3 font-semibold text-[#0B132B]">Mã nguồn & Bản quyền</td>
                  <td className="py-3 text-[#0D7A78] font-bold">Bàn giao 100% full source code, sở hữu vĩnh viễn</td>
                  <td className="py-3 text-slate-400">Bị khóa mã nguồn, phải đóng phí duy trì hàng năm</td>
                </tr>
                <tr>
                  <td className="py-3 font-semibold text-[#0B132B]">Tốc độ & SEO</td>
                  <td className="py-3 text-[#0D7A78] font-bold">Tải &lt; 1s, Google PageSpeed 95+, chuẩn SEO Onpage</td>
                  <td className="py-3 text-slate-400">Tải chậm chạp 5-8s do plugin rác, dễ bị dính mã độc</td>
                </tr>
                <tr>
                  <td className="py-3 font-semibold text-[#0B132B]">Khả năng mở rộng</td>
                  <td className="py-3 text-[#0D7A78] font-bold">Dễ dàng thêm tính năng, kết nối App/API bất kỳ lúc nào</td>
                  <td className="py-3 text-slate-400">Khó mở rộng, muốn thêm tính năng phải đập đi làm lại</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
