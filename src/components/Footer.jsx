import React from 'react';
import { Sparkles, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0B132B] text-slate-300 border-t border-[#1C2541] pt-16 pb-12 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#1C2541]">
          
          {/* Brand Info (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#3A506B] via-[#5BC0BE] to-[#FFFFFF] p-0.5 shadow-glow-teal-sm">
                <div className="w-full h-full bg-[#0B132B] rounded-[10px] flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-[#5BC0BE]" />
                </div>
              </div>
              <span className="text-2xl font-extrabold tracking-tight text-white font-['Space_Grotesk']">
                NEXORA
              </span>
            </div>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-sm">
              Đơn vị chuyên sâu về thiết kế UI/UX độc quyền, lập trình Website chuẩn SEO, Mobile App và Web App/SaaS theo yêu cầu riêng của từng doanh nghiệp.
            </p>

            <div className="pt-2 text-xs text-slate-400">
              © {new Date().getFullYear()} Nexora Digital Studio. Tất cả các quyền được bảo lưu.
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4">Dịch Vụ</h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li><a href="#services" className="hover:text-[#5BC0BE] transition-colors">Thiết kế UI/UX Figma</a></li>
              <li><a href="#services" className="hover:text-[#5BC0BE] transition-colors">Thiết kế Website Doanh Nghiệp</a></li>
              <li><a href="#services" className="hover:text-[#5BC0BE] transition-colors">Phát triển Mobile App Flutter</a></li>
              <li><a href="#services" className="hover:text-[#5BC0BE] transition-colors">Web App & Hệ Thống SaaS</a></li>
              <li><a href="#services" className="hover:text-[#5BC0BE] transition-colors">Tối ưu SEO & Tốc độ Web</a></li>
            </ul>
          </div>

          {/* Column 3: Quick links */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4">Khám Phá</h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li><a href="#portfolio" className="hover:text-[#5BC0BE] transition-colors">Portfolio Dự Án Mẫu</a></li>
              <li><a href="#calculator" className="hover:text-[#5BC0BE] transition-colors">Bảng Dự Toán Chi Phí</a></li>
              <li><a href="#process" className="hover:text-[#5BC0BE] transition-colors">Quy Trình 5 Bước</a></li>
              <li><a href="#why-us" className="hover:text-[#5BC0BE] transition-colors">Cam Kết Chất Lượng</a></li>
              <li><a href="#faq" className="hover:text-[#5BC0BE] transition-colors">Câu Hỏi Thường Gặp (FAQ)</a></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4">Liên Hệ Trực Tiếp</h4>
            <ul className="space-y-3 text-xs text-slate-300">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#5BC0BE] shrink-0" />
                <a href="tel:0987654321" className="hover:text-[#5BC0BE] font-bold text-white">
                  0987.654.321
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#5BC0BE] shrink-0" />
                <span className="font-mono text-white">contact@nexora.studio</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#5BC0BE] shrink-0 mt-0.5" />
                <span>Hà Nội & TP. Hồ Chí Minh • Phục vụ khách hàng toàn quốc & quốc tế</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            Được phát triển với tiêu chuẩn công nghệ cao bởi đội ngũ kỹ sư Nexora.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-[#5BC0BE] flex items-center gap-1 font-semibold">
              ● Hệ thống đang nhận thêm dự án
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
