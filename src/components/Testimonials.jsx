import React from 'react';
import { Star, Sparkles, Quote } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: 'Trần Hoàng Long',
      role: 'Founder & CEO',
      company: 'LuxeAura Fashion',
      avatar: 'HL',
      rating: 5,
      content:
        'Website mới do Nexora làm giúp tỷ lệ chuyển đổi đơn hàng của chúng tôi tăng gần gấp 3 lần ngay trong tháng đầu tiên. Trải nghiệm thanh toán 1-trang cực kỳ mượt mà, khách hàng khen rất nhiều.',
      tag: 'Website E-Commerce'
    },
    {
      name: 'Nguyễn Thị Minh Thảo',
      role: 'Giám Đốc Vận Hành (COO)',
      company: 'Chuỗi Glow Beauty',
      avatar: 'MT',
      rating: 5,
      content:
        'Ứng dụng đặt lịch trên điện thoại hoàn thành vượt tiến độ 4 ngày. Khách hàng giờ đây tự đặt lịch qua app, nhân viên giảm 80% áp lực trực inbox. Đội ngũ Nexora phản hồi rất nhanh và có tâm.',
      tag: 'Mobile App iOS/Android'
    },
    {
      name: 'Lê Minh Quân',
      role: 'Tech Lead / Quản Lý Sản Phẩm',
      company: 'TaskFlow OS',
      avatar: 'MQ',
      rating: 5,
      content:
        'Tôi là dân kỹ thuật nên yêu cầu rất khắt khe về cấu trúc code và tốc độ. Nexora bàn giao source code rất sạch (clean code), chuẩn TypeScript, tài liệu API đầy đủ. Rất đáng đồng tiền bát gạo.',
      tag: 'Web App & SaaS'
    }
  ];

  return (
    <section className="py-24 relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-bold text-[#0D7A78] uppercase tracking-wider mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Khách Hàng Nói Gì</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B132B] tracking-tight font-['Space_Grotesk']">
            Được Tin Tưởng Bởi Hơn 50+ Doanh Nghiệp
          </h2>
          <p className="text-[#3A506B] text-sm sm:text-base mt-3">
            Sự thành công và hài lòng của khách hàng là thước đo giá trị lớn nhất của chúng tôi.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-slate-50 rounded-2xl p-7 border border-slate-200 hover:border-[#5BC0BE] transition-all flex flex-col justify-between relative group shadow-sm hover:shadow-lg"
            >
              <div>
                {/* Quote Icon & Tag */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-1 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-mono text-[#0D7A78] font-bold bg-white px-2 py-0.5 rounded border border-slate-200 shadow-sm">
                    {rev.tag}
                  </span>
                </div>

                <Quote className="w-8 h-8 text-[#5BC0BE]/40 mb-2" />

                <p className="text-xs sm:text-sm text-[#1C2541] italic leading-relaxed mb-6 font-medium">
                  "{rev.content}"
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-200">
                <div
                  className="w-11 h-11 rounded-full bg-[#0B132B] text-white flex items-center justify-center font-extrabold text-sm shadow-md shrink-0"
                >
                  {rev.avatar}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#0B132B]">{rev.name}</h4>
                  <p className="text-xs text-[#3A506B]">
                    {rev.role} • <span className="text-[#0D7A78] font-bold">{rev.company}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
