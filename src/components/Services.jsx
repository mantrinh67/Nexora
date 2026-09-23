import React from 'react';
import { Palette, Globe, Smartphone, Layers, Check, ArrowUpRight, Sparkles } from 'lucide-react';

export default function Services({ onSelectService }) {
  const services = [
    {
      id: 'uiux',
      icon: Palette,
      title: 'Thiết Kế UI/UX & Prototype',
      subtitle: 'Trải nghiệm mượt mà, định vị thương hiệu cao cấp',
      desc: 'Nghiên cứu hành vi người dùng, xây dựng Wireframe trực quan, hoàn thiện giao diện Design System trên Figma và bản Prototype tương tác chân thực trước khi code.',
      features: [
        'Nghiên cứu UX & Lộ trình người dùng (User Flow)',
        'Thiết kế giao diện độc quyền, không dùng template có sẵn',
        'Bộ thư viện Design System & UI Components chuẩn Figma',
        'Bản Prototype click tương tác thử nghiệm thực tế'
      ],
      tags: ['Figma', 'Design System', 'User Testing', 'Responsive UI'],
      popular: false
    },
    {
      id: 'website',
      icon: Globe,
      title: 'Thiết Kế & Lập Trình Website',
      subtitle: 'Tối ưu chuyển đổi, chuẩn SEO Google 90+',
      desc: 'Xây dựng website doanh nghiệp, landing page chốt sale, sàn thương mại điện tử với tốc độ tải trang dưới 1 giây, bảo mật cao và tương thích 100% mọi kích cỡ màn hình.',
      features: [
        'Landing Page giới thiệu sản phẩm / dịch vụ chuyển đổi cao',
        'Website Doanh nghiệp chuẩn nhận diện thương hiệu',
        'Website Bán hàng & E-commerce tích hợp thanh toán tự động',
        'Tối ưu chuẩn SEO On-page Google, bảo mật SSL & CDN'
      ],
      tags: ['Next.js', 'React', 'Tailwind CSS', 'VNPAY / MoMo', 'SEO'],
      popular: true
    },
    {
      id: 'mobile',
      icon: Smartphone,
      title: 'Phát Triển Mobile App (iOS & Android)',
      subtitle: 'Ứng dụng mượt mà 60 FPS, trải nghiệm đẳng cấp',
      desc: 'Lập trình ứng dụng di động đa nền tảng tối ưu chi phí và thời gian ra mắt. Tích hợp định vị GPS, thông báo đẩy (Push Notification), thanh toán ví điện tử và quản trị qua backend.',
      features: [
        'Một lần code - Triển khai đồng thời cả App Store & Google Play',
        'Trải nghiệm vuốt chạm mượt mà chuẩn Native 60 FPS',
        'Tích hợp thông báo đẩy (Push Notifications) giữ chân khách',
        'Hỗ trợ trọn gói quy trình đưa ứng dụng lên 2 kho ứng dụng'
      ],
      tags: ['Flutter', 'React Native', 'Firebase', 'App Store', 'Google Play'],
      popular: false
    },
    {
      id: 'webapp',
      icon: Layers,
      title: 'Web App, SaaS & Hệ Thống Quản Trị',
      subtitle: 'Tự động hóa vận hành, mở rộng quy mô kinh doanh',
      desc: 'Phát triển các ứng dụng nền web phức tạp như hệ thống CRM, quản lý kho vận (ERP mini), cổng thông tin nội bộ, phần mềm SaaS đăng ký gói thuê bao định kỳ.',
      features: [
        'Bảng điều khiển (Dashboard) với biểu đồ phân tích thời gian thực',
        'Phân quyền tài khoản đa cấp độ bảo mật cao',
        'Tích hợp API các bên thứ 3 (Zalo, KiotViet, SMS Brandname,...)',
        'Kiến trúc Cloud chịu tải lớn, sẵn sàng mở rộng quy mô'
      ],
      tags: ['Node.js', 'PostgreSQL', 'Docker', 'RESTful API', 'AWS Cloud'],
      popular: false
    }
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-slate-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-bold text-[#0D7A78] uppercase tracking-wider mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Năng Lực Cốt Lõi</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B132B] tracking-tight mb-4 font-['Space_Grotesk']">
            Dịch Vụ Thiết Kế & Phát Triển Trọn Gói
          </h2>
          <p className="text-[#3A506B] text-base sm:text-lg">
            Chúng tôi phụ trách toàn diện từng mắt xích của sản phẩm số — từ ý tưởng sơ khởi đến khi vận hành trơn tru và tạo ra doanh thu.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <div
                key={srv.id}
                className={`relative rounded-2xl p-6 sm:p-8 bg-white border transition-all duration-300 group hover:-translate-y-1.5 flex flex-col justify-between shadow-sm hover:shadow-xl ${
                  srv.popular
                    ? 'border-[#5BC0BE] ring-1 ring-[#5BC0BE]'
                    : 'border-slate-200 hover:border-[#5BC0BE]'
                }`}
              >
                {/* Popular Ribbon */}
                {srv.popular && (
                  <div className="absolute -top-3 right-6 bg-[#5BC0BE] text-[#0B132B] text-[11px] font-extrabold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-[#0B132B]" />
                    <span>Nhu Cầu Nhiều Nhất</span>
                  </div>
                )}

                <div>
                  {/* Icon & Title Header */}
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0B132B] to-[#3A506B] p-0.5 shadow-md">
                      <div className="w-full h-full bg-[#0B132B] rounded-[14px] flex items-center justify-center group-hover:bg-[#1C2541] transition-colors">
                        <Icon className="w-7 h-7 text-[#5BC0BE]" />
                      </div>
                    </div>
                    <span className="text-xs font-bold text-[#3A506B] uppercase tracking-wider bg-slate-100 px-3 py-1 rounded-lg">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-[#0B132B] mb-2 group-hover:text-[#0D7A78] transition-colors">
                    {srv.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#0D7A78] font-bold mb-3">
                    {srv.subtitle}
                  </p>
                  <p className="text-[#3A506B] text-sm leading-relaxed mb-6">
                    {srv.desc}
                  </p>

                  {/* Checklist */}
                  <div className="space-y-2.5 mb-8 pt-4 border-t border-slate-100">
                    {srv.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#1C2541]">
                        <div className="w-4 h-4 rounded-full bg-[#5BC0BE]/20 flex items-center justify-center shrink-0 mt-0.5 text-[#0D7A78]">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span className="font-medium">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer of Card: Tags & CTA */}
                <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {srv.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] font-mono font-medium px-2 py-0.5 rounded bg-slate-100 text-[#3A506B] border border-slate-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href="#contact"
                    onClick={() => onSelectService && onSelectService(srv.title)}
                    className="inline-flex items-center gap-1 text-xs sm:text-sm font-bold text-[#0B132B] hover:text-[#0D7A78] transition-colors shrink-0"
                  >
                    <span>Tư vấn gói này</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom Solution Callout */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-[#0B132B] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <h4 className="text-lg sm:text-xl font-bold text-white">
              Bạn có yêu cầu đặc thù hoặc cần tích hợp hệ thống riêng?
            </h4>
            <p className="text-sm text-slate-300 max-w-2xl">
              Nexora nhận thiết kế và lập trình mọi tính năng chuyên sâu theo quy trình nghiệp vụ riêng của từng doanh nghiệp.
            </p>
          </div>
          <a
            href="#contact"
            className="px-6 py-3 rounded-xl bg-[#5BC0BE] text-[#0B132B] hover:bg-[#7CE5E3] font-bold text-sm shrink-0 transition-colors shadow-glow-teal-sm"
          >
            Trao Đổi Trực Tiếp Kỹ Sư Trưởng
          </a>
        </div>
      </div>
    </section>
  );
}
