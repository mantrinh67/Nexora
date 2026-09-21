import React from 'react';
import { Sparkles, ArrowRight, CheckCircle2, ShieldCheck, Zap, Code2, Smartphone, TrendingUp } from 'lucide-react';

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
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 mb-8 hover:border-[#5BC0BE] transition-colors shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-[#0D7A78] animate-pulse" />
            <span className="text-xs sm:text-sm font-bold text-[#0B132B]">
              Đang nhận thêm 3 dự án mới trong tháng này • Tư vấn kỹ thuật 1:1 miễn phí
            </span>
            <Sparkles className="w-4 h-4 text-[#0D7A78]" />
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.15] mb-6 text-[#0B132B] font-['Space_Grotesk']">
            Biến Ý Tưởng Thành <br className="hidden sm:inline" />
            <span className="text-gradient-teal">Sản Phẩm Số Đột Phá</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-[#3A506B] max-w-2xl mx-auto leading-relaxed mb-10 font-normal">
            Dịch vụ thiết kế & phát triển phần mềm{' '}
            <strong className="text-[#0B132B] font-bold">Website, Mobile App, Web App/SaaS</strong> theo yêu cầu.
            Tối ưu tốc độ vượt trội, bảo mật cao.
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
              <span>Bàn giao 100% Source Code</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#0D7A78]" />
              <span>Bảo hành kỹ thuật 12 tháng</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#0D7A78]" />
              <span>Tốc độ tải trang chuẩn Google 90+</span>
            </div>
          </div>
        </div>

        {/* Interactive Visual Hero Showcase Preview */}
        <div className="relative max-w-5xl mx-auto">
          {/* Card frame */}
          <div className="relative rounded-2xl p-1 bg-gradient-to-b from-[#5BC0BE]/40 via-slate-200 to-transparent shadow-2xl">
            <div className="bg-white rounded-xl overflow-hidden border border-slate-200 p-4 sm:p-6 md:p-8">

              {/* Window Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-[#5BC0BE]" />
                  <span className="ml-3 text-xs text-[#3A506B] font-mono hidden sm:inline">
                    nexora.studio/custom-solutions
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full bg-[#5BC0BE]/20 text-[#0B132B]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0D7A78] animate-pulse" />
                    Live System Active
                  </span>
                </div>
              </div>

              {/* Showcase Grid */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                {/* Left Card: Web & Dashboard Preview */}
                <div className="md:col-span-7 bg-slate-50 rounded-xl p-5 border border-slate-200 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-lg bg-[#5BC0BE]/20 text-[#0B132B]">
                        <Code2 className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-[#0B132B]">Fullstack Custom Web & SaaS</h4>
                        <p className="text-xs text-[#3A506B]">Next.js 15 • Tailwind • Node.js • PostgreSQL</p>
                      </div>
                    </div>
                    <span className="text-xs font-mono font-bold text-[#0B132B] bg-[#5BC0BE]/30 px-2.5 py-1 rounded-md">
                      0.7s Load
                    </span>
                  </div>

                  {/* Visual Chart / Metrics Mockup */}
                  <div className="h-32 rounded-lg bg-white p-3 border border-slate-200 flex flex-col justify-between shadow-sm">
                    <div className="flex justify-between items-center text-xs text-[#3A506B]">
                      <span>Hiệu năng & Tốc độ chuyển đổi</span>
                      <span className="text-[#0D7A78] font-bold flex items-center gap-1">
                        <TrendingUp className="w-3.5 h-3.5" /> +185% Tăng trưởng
                      </span>
                    </div>
                    {/* Simulated bars */}
                    <div className="flex items-end gap-2 h-16 pt-2">
                      <div className="flex-1 bg-slate-200 rounded-t h-[40%]" />
                      <div className="flex-1 bg-slate-300 rounded-t h-[55%]" />
                      <div className="flex-1 bg-[#3A506B]/50 rounded-t h-[70%]" />
                      <div className="flex-1 bg-[#5BC0BE]/70 rounded-t h-[82%]" />
                      <div className="flex-1 bg-[#5BC0BE] rounded-t h-[98%] shadow-glow-teal-sm" />
                    </div>
                  </div>
                </div>

                {/* Right Card: Mobile App Showcase */}
                <div className="md:col-span-5 bg-slate-50 rounded-xl p-5 border border-slate-200 space-y-4">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-[#0B132B] text-white">
                      <Smartphone className="w-5 h-5 text-[#5BC0BE]" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#0B132B]">Mobile App iOS & Android</h4>
                      <p className="text-xs text-[#3A506B]">Flutter • React Native • Firebase</p>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-3.5 border border-slate-200 space-y-2.5 shadow-sm">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-[#3A506B] font-medium">Trải nghiệm chạm vuốt</span>
                      <span className="text-[#0D7A78] font-bold">60 FPS Mượt mà</span>
                    </div>
                    <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden border border-slate-200">
                      <div className="bg-gradient-to-r from-[#0B132B] via-[#3A506B] to-[#5BC0BE] h-full w-[95%] rounded-full" />
                    </div>
                    <div className="flex justify-between text-[11px] text-[#3A506B] pt-1">
                      <span>Apple App Store</span>
                      <span>Google Play Store</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Floating Feature Tags */}
          <div className="hidden lg:flex absolute -bottom-6 -left-6 bg-white border border-slate-200 px-4 py-3 rounded-2xl shadow-xl items-center gap-3">
            <div className="p-2 rounded-xl bg-[#5BC0BE]/20 text-[#0D7A78]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-[#0B132B]">Bảo hành trọn vẹn</p>
              <p className="text-[11px] text-[#3A506B]">Hỗ trợ kỹ thuật 12 tháng</p>
            </div>
          </div>

          <div className="hidden lg:flex absolute -top-6 -right-6 bg-white border border-slate-200 px-4 py-3 rounded-2xl shadow-xl items-center gap-3">
            <div className="p-2 rounded-xl bg-[#0B132B] text-[#5BC0BE]">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-[#0B132B]">Điểm Google PageSpeed</p>
              <p className="text-[11px] text-[#0D7A78] font-bold">98 / 100 Xuất sắc</p>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-16 pt-10 border-t border-slate-200">
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-center shadow-sm">
            <div className="text-3xl sm:text-4xl font-extrabold text-[#0B132B] font-['Space_Grotesk'] mb-1">
              50<span className="text-[#0D7A78]">+</span>
            </div>
            <div className="text-xs sm:text-sm text-[#3A506B] font-semibold">Dự án hoàn thành xuất sắc</div>
          </div>
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-center shadow-sm">
            <div className="text-3xl sm:text-4xl font-extrabold text-[#0B132B] font-['Space_Grotesk'] mb-1">
              99.4<span className="text-[#0D7A78]">%</span>
            </div>
            <div className="text-xs sm:text-sm text-[#3A506B] font-semibold">Khách hàng đánh giá 5 sao</div>
          </div>
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-center shadow-sm">
            <div className="text-3xl sm:text-4xl font-extrabold text-[#0B132B] font-['Space_Grotesk'] mb-1">
              100<span className="text-[#0D7A78]">%</span>
            </div>
            <div className="text-xs sm:text-sm text-[#3A506B] font-semibold">Cam kết đúng hạn tiến độ</div>
          </div>
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-center shadow-sm">
            <div className="text-3xl sm:text-4xl font-extrabold text-[#0B132B] font-['Space_Grotesk'] mb-1">
              12<span className="text-[#0D7A78]">Th</span>
            </div>
            <div className="text-xs sm:text-sm text-[#3A506B] font-semibold">Bảo hành & Đồng hành kỹ thuật</div>
          </div>
        </div>

      </div>
    </section>
  );
}
