import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Zap, Code2, Smartphone, TrendingUp } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-white">
      {/* Soft Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#5BC0BE]/12 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/4 w-[450px] h-[450px] bg-slate-200/50 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#5BC0BE]/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0B132B08_1px,transparent_1px),linear-gradient(to_bottom,#0B132B08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.15] mb-6 text-[#0B132B] font-['Space_Grotesk']">
            Biến Ý Tưởng Thành <br className="hidden sm:inline" />
            <span className="text-gradient-teal">Sản Phẩm Số Đột Phá</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-[#3A506B] max-w-2xl mx-auto leading-relaxed mb-10 font-normal">
            Dịch vụ thiết kế & phát triển phần mềm{' '}
            <strong className="text-[#0B132B] font-bold">Website, Mobile App, Web App</strong> theo yêu cầu.
            Tối ưu tốc độ, bảo mật cao.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href="#calculator"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-bold text-[#0B132B] bg-[#5BC0BE] hover:bg-[#7CE5E3] shadow-glow-teal hover:shadow-xl transition-all hover:scale-[1.02]"
            >
              <Zap className="w-5 h-5 text-[#0B132B] fill-[#0B132B]" />
              <span>Dự Toán Chi Phí Tức Thì</span>
              <ArrowRight className="w-4 h-4 text-[#0B132B]" />
            </a>

            <a
              href="#portfolio"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-[#0B132B] bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-all shadow-sm"
            >
              <span>Xem Dự Án Thực Tế</span>
            </a>
          </div>

          {/* Key Value Highlights */}
          <div className="flex flex-wrap items-center justify-center gap-y-2.5 gap-x-6 text-xs sm:text-sm text-[#3A506B] mb-14 font-medium">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#0D7A78]" />
              <span>Cam kết không phát sinh chi phí</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#0D7A78]" />
              <span>Bảo hành kỹ thuật 12 tháng</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#0D7A78]" />
              <span>Tốc độ tải trang chuẩn Google 90+</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#0D7A78]" />
              <span>Bàn giao tài liệu hướng dẫn sử dụng</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#0D7A78]" />
              <span>Hỗ trợ sau bàn giao</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
