import React, { useState, useEffect } from 'react';
import { Phone, Mail, Send, CheckCircle2, Sparkles, ShieldCheck, ArrowRight } from 'lucide-react';

export default function Contact({ initialEstimate, initialProject }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Website Doanh Nghiệp',
    budget: '10.000.000đ - 25.000.000đ',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Sync when initialEstimate changes
  useEffect(() => {
    if (initialEstimate) {
      setFormData((prev) => ({
        ...prev,
        service: initialEstimate.product || prev.service,
        message: `[Yêu cầu từ Bảng Dự Toán Tức Thì]
- Loại sản phẩm: ${initialEstimate.product}
- Cấp độ thiết kế: ${initialEstimate.design}
- Tính năng chọn thêm: ${initialEstimate.features.join(', ') || 'Cơ bản'}
- Khoảng giá ước tính: ${initialEstimate.estimatedPrice}
- Thời gian dự kiến: ${initialEstimate.timeline}

Mô tả thêm về ý tưởng của tôi:`
      }));
    }
  }, [initialEstimate]);

  // Sync when initialProject is clicked
  useEffect(() => {
    if (initialProject) {
      setFormData((prev) => ({
        ...prev,
        message: `Tôi muốn nhận tư vấn để phát triển một sản phẩm tương tự như dự án "${initialProject}". Vui lòng liên hệ và gửi chi tiết báo giá.`
      }));
    }
  }, [initialProject]);

  const N8N_WEBHOOK_URL = 'http://localhost:5678/webhook/924a2b83-36d5-4e3f-a74d-a60f19825e6f';

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('Vui lòng điền họ tên và số điện thoại / Zalo để chúng tôi liên hệ hỗ trợ!');
      return;
    }
    setLoading(true);
    try {
      const res = await fetch(N8N_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          submittedAt: new Date().toISOString(),
          source: 'Nexora Landing Page'
        }),
      });
      if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
      setIsSubmitted(true);
    } catch (err) {
      console.error('Webhook error:', err);
      alert('Gửi thất bại, vui lòng thử lại hoặc liên hệ trực tiếp qua Zalo/Hotline!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative bg-white overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#5BC0BE]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-bold text-[#0D7A78] uppercase tracking-wider mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Khởi Động Dự Án Ngay Hôm Nay</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B132B] tracking-tight font-['Space_Grotesk']">
            Nhận Báo Giá & Tư Vấn Kỹ Thuật Miễn Phí
          </h2>
          <p className="text-[#3A506B] text-sm sm:text-base mt-3">
            Để lại thông tin yêu cầu của bạn, Kỹ sư trưởng của Nexora sẽ trực tiếp liên hệ trao đổi phương án và gửi báo giá chi tiết trong vòng 30 phút.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

          {/* Left Column: Direct Contact & Benefits (5 cols) */}
          <div className="lg:col-span-5 space-y-6">

            {/* Quick Contact Cards */}
            <div className="bg-slate-50 rounded-2xl p-6 sm:p-7 border border-slate-200 space-y-5 shadow-sm">
              <h3 className="text-lg font-bold text-[#0B132B] mb-2">
                Kênh Kết Nối Nhanh 24/7
              </h3>

              {/* Zalo */}
              <a
                href="https://zalo.me/0987654321"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-white hover:bg-teal-50/50 border border-slate-200 hover:border-[#5BC0BE] transition-all group shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-[#5BC0BE] text-[#0B132B] flex items-center justify-center font-extrabold text-sm shrink-0">
                  Zalo
                </div>
                <div className="flex-1">
                  <div className="text-xs text-[#3A506B]">Chat Zalo Trực Tiếp</div>
                  <div className="text-sm font-bold text-[#0B132B] group-hover:text-[#0D7A78]">
                    0987.654.321 (Nexora Kỹ Thuật)
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 group-hover:text-[#0D7A78] transition-all" />
              </a>

              {/* Hotline */}
              <a
                href="tel:0987654321"
                className="flex items-center gap-4 p-4 rounded-xl bg-white hover:bg-teal-50/50 border border-slate-200 hover:border-[#5BC0BE] transition-all group shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0B132B] text-white flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-[#5BC0BE]" />
                </div>
                <div className="flex-1">
                  <div className="text-xs text-[#3A506B]">Gọi Hotline Khẩn Cấp</div>
                  <div className="text-sm font-bold text-[#0B132B] group-hover:text-[#0D7A78]">
                    0987.654.321
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 group-hover:text-[#0D7A78] transition-all" />
              </a>

              {/* Email */}
              <div className="flex items-center gap-4 p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-[#0B132B] shrink-0">
                  <Mail className="w-6 h-6 text-[#0D7A78]" />
                </div>
                <div>
                  <div className="text-xs text-[#3A506B]">Email Nhận Brief & Yêu Cầu</div>
                  <div className="text-sm font-bold text-[#0B132B] font-mono">
                    contact@nexora.studio
                  </div>
                </div>
              </div>
            </div>

            {/* Commitment Box */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 space-y-3 shadow-sm">
              <div className="flex items-center gap-2 text-sm font-bold text-[#0B132B]">
                <ShieldCheck className="w-5 h-5 text-[#0D7A78]" />
                <span>Cam Kết Bảo Mật Ý Tưởng (NDA)</span>
              </div>
              <p className="text-xs text-[#3A506B] leading-relaxed">
                Mọi ý tưởng kinh doanh, mô hình vận hành và dữ liệu bạn chia sẻ đều được bảo mật tuyệt đối. Chúng tôi sẵn sàng ký thỏa thuận bảo mật thông tin (NDA) trước khi trao đổi.
              </p>
            </div>

          </div>

          {/* Right Column: Lead Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-md relative">

              {isSubmitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in">
                  <div className="w-16 h-16 rounded-full bg-teal-100 text-[#0D7A78] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0B132B]">
                    Gửi Yêu Cầu Thành Công!
                  </h3>
                  <p className="text-sm text-[#3A506B] max-w-md mx-auto leading-relaxed">
                    Cảm ơn <strong className="text-[#0B132B]">{formData.name}</strong>! Kỹ sư trưởng của Nexora đã nhận được thông tin dự án và sẽ liên hệ lại qua số <strong className="text-[#0B132B]">{formData.phone}</strong> trong vòng 15 – 30 phút.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-6 px-6 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-xs font-bold text-[#0B132B] transition-colors border border-slate-300 cursor-pointer"
                  >
                    Gửi thêm yêu cầu khác
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="border-b border-slate-200 pb-4 mb-2">
                    <h3 className="text-xl font-bold text-[#0B132B]">
                      Điền Thông Tin Dự Án (Mất khoảng 60 giây)
                    </h3>
                    <p className="text-xs text-[#3A506B] mt-1">
                      Nhận giải pháp kỹ thuật và báo giá chi tiết, không ràng buộc.
                    </p>
                  </div>

                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#0B132B] mb-1.5">
                        Họ và Tên của bạn <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Nguyễn Văn A"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-[#0B132B] placeholder:text-slate-400 text-sm focus:outline-none focus:border-[#5BC0BE] focus:ring-2 focus:ring-[#5BC0BE]/20 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#0B132B] mb-1.5">
                        Số Điện Thoại / Zalo <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="0987 654 321"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-[#0B132B] placeholder:text-slate-400 text-sm focus:outline-none focus:border-[#5BC0BE] focus:ring-2 focus:ring-[#5BC0BE]/20 transition-all"
                      />
                    </div>
                  </div>

                  {/* Email & Service */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#0B132B] mb-1.5">
                        Email nhận file báo giá
                      </label>
                      <input
                        type="email"
                        placeholder="email@doanhnghiep.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-[#0B132B] placeholder:text-slate-400 text-sm focus:outline-none focus:border-[#5BC0BE] focus:ring-2 focus:ring-[#5BC0BE]/20 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#0B132B] mb-1.5">
                        Loại dịch vụ quan tâm
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-[#0B132B] text-sm focus:outline-none focus:border-[#5BC0BE] focus:ring-2 focus:ring-[#5BC0BE]/20 transition-all"
                      >
                        <option value="Landing Page Chốt Sale">Landing Page Chốt Sale</option>
                        <option value="Website Doanh Nghiệp">Website Doanh Nghiệp Chuẩn SEO</option>
                        <option value="Website Bán Hàng / E-Commerce">Website Bán Hàng / E-Commerce</option>
                        <option value="Mobile App (iOS & Android)">Mobile App (iOS & Android)</option>
                        <option value="Web App & Hệ Thống SaaS">Web App & Hệ Thống SaaS</option>
                        <option value="Thiết Kế UI/UX Figma">Thiết Kế UI/UX & Prototype</option>
                        <option value="Khác / Nâng Cấp Hệ Thống">Yêu cầu đặc thù khác</option>
                      </select>
                    </div>
                  </div>

                  {/* Budget */}
                  <div>
                    <label className="block text-xs font-bold text-[#0B132B] mb-1.5">
                      Khoảng ngân sách dự kiến của bạn
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-[#0B132B] text-sm focus:outline-none focus:border-[#5BC0BE] focus:ring-2 focus:ring-[#5BC0BE]/20 transition-all"
                    >
                      <option value="Dưới 10.000.000đ">Dưới 10.000.000đ (Landing page nhanh)</option>
                      <option value="10.000.000đ - 25.000.000đ">10.000.000đ - 25.000.000đ (Phổ biến nhất)</option>
                      <option value="25.000.000đ - 50.000.000đ">25.000.000đ - 50.000.000đ (Web App / Mobile App)</option>
                      <option value="Trên 50.000.000đ">Trên 50.000.000đ (Hệ sinh thái lớn)</option>
                      <option value="Cần tư vấn gói tối ưu">Cần Nexora tư vấn phương án tiết kiệm nhất</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold text-[#0B132B] mb-1.5">
                      Mô tả sơ bộ về ý tưởng hoặc tính năng bạn mong muốn
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Ví dụ: Tôi cần làm một web bán quần áo thời trang, có kết nối thanh toán VNPay và tự động in hóa đơn..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-[#0B132B] placeholder:text-slate-400 text-sm focus:outline-none focus:border-[#5BC0BE] focus:ring-2 focus:ring-[#5BC0BE]/20 transition-all font-sans"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 px-6 rounded-xl font-extrabold text-sm text-[#0B132B] bg-[#5BC0BE] hover:bg-[#7CE5E3] shadow-glow-teal hover:shadow-xl transition-all flex items-center justify-center gap-2 group cursor-pointer disabled:opacity-70"
                  >
                    {loading ? (
                      <span>Đang gửi yêu cầu...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-[#0B132B] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        <span>Gửi Yêu Cầu — Nhận Báo Giá Miễn Phí Trong 30 Phút</span>
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-center text-[#3A506B]">
                    🔒 Thông tin của bạn được bảo mật tuyệt đối 100%. Không spam cuộc gọi.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
