import React, { useState, useMemo } from 'react';
import { Calculator, Sparkles, Check, ArrowRight, ShieldCheck, Clock } from 'lucide-react';

export default function CostEstimator({ onApplyEstimate }) {
  // Step 1: Product Type
  const productTypes = [
    {
      id: 'landing',
      label: 'Landing Page Chốt Sale',
      desc: '1 trang tập trung chuyển đổi, giới thiệu 1 sản phẩm/dịch vụ',
      baseMin: 5000000,
      baseMax: 8500000,
      days: '5 - 7 ngày'
    },
    {
      id: 'website',
      label: 'Website Doanh Nghiệp Chuẩn SEO',
      desc: 'Giới thiệu công ty, dịch vụ, bảng giá, tin tức, chuẩn Google 90+',
      baseMin: 10000000,
      baseMax: 16000000,
      days: '10 - 14 ngày'
    },
    {
      id: 'ecommerce',
      label: 'Website Bán Hàng / E-Commerce',
      desc: 'Giỏ hàng, danh mục sản phẩm, quản lý đơn hàng, khuyến mãi',
      baseMin: 15000000,
      baseMax: 24000000,
      days: '15 - 20 ngày'
    },
    {
      id: 'webapp',
      label: 'Web App & Hệ Thống SaaS',
      desc: 'Dashboard quản trị, CRM, phần mềm nghiệp vụ phân quyền sâu',
      baseMin: 22000000,
      baseMax: 38000000,
      days: '20 - 30 ngày'
    },
    {
      id: 'mobile',
      label: 'Mobile App (iOS & Android)',
      desc: 'Ứng dụng di động Flutter/React Native đưa lên 2 kho ứng dụng',
      baseMin: 26000000,
      baseMax: 45000000,
      days: '25 - 35 ngày'
    },
    {
      id: 'combo',
      label: 'Combo Trọn Gói: Cả Web & App',
      desc: 'Đồng bộ toàn diện hệ sinh thái Web quản lý và App người dùng',
      baseMin: 38000000,
      baseMax: 65000000,
      days: '30 - 45 ngày'
    }
  ];

  // Step 2: Design Level
  const designLevels = [
    {
      id: 'standard',
      name: 'Giao diện Tối Ưu Hiện Đại',
      desc: 'Dựa trên thư viện layout chuẩn UX, tùy biến theo nhận diện thương hiệu',
      extra: 0
    },
    {
      id: 'exclusive',
      name: 'Thiết Kế Độc Quyền Figma 100%',
      desc: 'Được Design riêng từng màn hình theo phong cách thương hiệu độc bản',
      extra: 3000000
    },
    {
      id: 'futuristic',
      name: 'Cao Cấp 3D / Micro-Interactions',
      desc: 'Hiệu ứng chuyển động mượt mà, định vị đẳng cấp công nghệ dẫn đầu',
      extra: 6000000
    }
  ];

  // Step 3: Add-on features
  const addOnFeatures = [
    { id: 'payment', name: 'Cổng thanh toán tự động (VNPAY / MoMo / Stripe)', cost: 2500000 },
    { id: 'multilang', name: 'Hỗ trợ Đa ngôn ngữ (Anh - Việt / Trung / Nhật)', cost: 1800000 },
    { id: 'cms', name: 'Hệ thống Quản trị CMS Nâng cao & Phân quyền', cost: 2000000 },
    { id: 'chatbot', name: 'Chatbot AI trả lời tự động & Tích hợp Zalo OA', cost: 2500000 },
    { id: 'seo', name: 'Tối ưu SEO On-page Google Master & Tốc độ 95+', cost: 1500000 },
    { id: 'api', name: 'Tích hợp API phần mềm bên thứ 3 (KiotViet, SAP, CRM)', cost: 3500000 },
  ];

  const [selectedProduct, setSelectedProduct] = useState(productTypes[1]); // Default to corporate website
  const [selectedDesign, setSelectedDesign] = useState(designLevels[1]); // Default to exclusive Figma
  const [selectedFeatures, setSelectedFeatures] = useState(['payment', 'seo']);

  const toggleFeature = (featureId) => {
    if (selectedFeatures.includes(featureId)) {
      setSelectedFeatures(selectedFeatures.filter((id) => id !== featureId));
    } else {
      setSelectedFeatures([...selectedFeatures, featureId]);
    }
  };

  // Calculation
  const totalMin = useMemo(() => {
    const extraDesign = selectedDesign.extra;
    const extraFeatures = selectedFeatures.reduce((acc, featId) => {
      const feat = addOnFeatures.find((f) => f.id === featId);
      return acc + (feat ? feat.cost : 0);
    }, 0);
    return selectedProduct.baseMin + extraDesign + extraFeatures;
  }, [selectedProduct, selectedDesign, selectedFeatures]);

  const totalMax = useMemo(() => {
    const extraDesign = selectedDesign.extra * 1.2;
    const extraFeatures = selectedFeatures.reduce((acc, featId) => {
      const feat = addOnFeatures.find((f) => f.id === featId);
      return acc + (feat ? feat.cost : 0);
    }, 0);
    return Math.round(selectedProduct.baseMax + extraDesign + extraFeatures);
  }, [selectedProduct, selectedDesign, selectedFeatures]);

  const formatVND = (number) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(number);
  };

  const handleApply = () => {
    const summary = {
      product: selectedProduct.label,
      design: selectedDesign.name,
      features: selectedFeatures
        .map((fId) => addOnFeatures.find((item) => item.id === fId)?.name)
        .filter(Boolean),
      estimatedPrice: `${formatVND(totalMin)} — ${formatVND(totalMax)}`,
      timeline: selectedProduct.days
    };
    if (onApplyEstimate) {
      onApplyEstimate(summary);
    }
    // Smooth scroll to contact
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="calculator" className="py-24 relative overflow-hidden bg-slate-50/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-bold text-[#0D7A78] uppercase tracking-wider mb-4 shadow-sm">
            <Calculator className="w-3.5 h-3.5" />
            <span>Minh Bạch & Rõ Ràng</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B132B] tracking-tight font-['Space_Grotesk']">
            Dự Toán Chi Phí & Thời Gian Tức Thì
          </h2>
          <p className="text-[#3A506B] text-sm sm:text-base mt-3">
            Tự do cấu hình giải pháp phù hợp với ngân sách của bạn. Không lo chi phí phát sinh mập mờ.
          </p>
        </div>

        {/* Calculator Main Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Options (8 cols) */}
          <div className="lg:col-span-8 space-y-8 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
            
            {/* Step 1: Chọn loại sản phẩm */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-6 h-6 rounded-full bg-[#0B132B] text-white text-xs font-bold flex items-center justify-center">
                  1
                </span>
                <h3 className="text-base sm:text-lg font-bold text-[#0B132B]">
                  Chọn Loại Sản Phẩm Bạn Cần:
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {productTypes.map((pt) => (
                  <div
                    key={pt.id}
                    onClick={() => setSelectedProduct(pt)}
                    className={`p-4 rounded-xl border cursor-pointer transition-all ${
                      selectedProduct.id === pt.id
                        ? 'bg-teal-50/70 border-2 border-[#5BC0BE] shadow-sm scale-[1.01]'
                        : 'bg-slate-50/60 border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <h4 className="text-sm font-bold text-[#0B132B] mb-1">{pt.label}</h4>
                      {selectedProduct.id === pt.id && (
                        <Check className="w-4 h-4 text-[#0D7A78] shrink-0 stroke-[3]" />
                      )}
                    </div>
                    <p className="text-xs text-[#3A506B]">{pt.desc}</p>
                    <div className="mt-2 text-[11px] font-mono text-[#0D7A78] font-bold">
                      Thời gian: {pt.days}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Step 2: Cấp độ thiết kế UI/UX */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-6 h-6 rounded-full bg-[#0B132B] text-white text-xs font-bold flex items-center justify-center">
                  2
                </span>
                <h3 className="text-base sm:text-lg font-bold text-[#0B132B]">
                  Cấp Độ Thiết Kế UI/UX:
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {designLevels.map((dl) => (
                  <div
                    key={dl.id}
                    onClick={() => setSelectedDesign(dl)}
                    className={`p-4 rounded-xl border cursor-pointer transition-all ${
                      selectedDesign.id === dl.id
                        ? 'bg-teal-50/70 border-2 border-[#5BC0BE] shadow-sm'
                        : 'bg-slate-50/60 border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="text-xs sm:text-sm font-bold text-[#0B132B]">{dl.name}</h4>
                      {selectedDesign.id === dl.id && (
                        <Check className="w-4 h-4 text-[#0D7A78] stroke-[3]" />
                      )}
                    </div>
                    <p className="text-[11px] text-[#3A506B] mb-2">{dl.desc}</p>
                    <span className="text-[11px] font-mono text-[#0D7A78] font-bold">
                      {dl.extra === 0 ? 'Đã bao gồm' : `+${formatVND(dl.extra)}`}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Step 3: Tính năng bổ sung */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-6 h-6 rounded-full bg-[#0B132B] text-white text-xs font-bold flex items-center justify-center">
                  3
                </span>
                <h3 className="text-base sm:text-lg font-bold text-[#0B132B]">
                  Tính Năng Nâng Cao (Tùy chọn thêm):
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {addOnFeatures.map((f) => {
                  const isChecked = selectedFeatures.includes(f.id);
                  return (
                    <div
                      key={f.id}
                      onClick={() => toggleFeature(f.id)}
                      className={`p-3 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                        isChecked
                          ? 'bg-teal-50/70 border-[#5BC0BE] text-[#0B132B] font-medium'
                          : 'bg-slate-50/60 border-slate-200 text-[#3A506B] hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <div
                          className={`w-4 h-4 rounded flex items-center justify-center transition-colors ${
                            isChecked ? 'bg-[#5BC0BE] text-[#0B132B]' : 'border border-slate-300 bg-white'
                          }`}
                        >
                          {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                        <span className="text-xs">{f.name}</span>
                      </div>
                      <span className="text-[11px] font-mono text-[#3A506B] font-bold shrink-0 ml-2">
                        +{formatVND(f.cost)}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column: High-Impact Summary Card in Deep Navy (4 cols) */}
          <div className="lg:col-span-4 sticky top-24">
            <div className="bg-[#0B132B] text-white rounded-2xl p-6 sm:p-7 border border-[#3A506B] shadow-2xl relative overflow-hidden">
              
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-[#3A506B]/80 mb-5">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#5BC0BE]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-200">
                    Dự Toán Tức Thì
                  </span>
                </div>
                <span className="text-[11px] text-[#0B132B] font-bold bg-[#5BC0BE] px-2.5 py-0.5 rounded">
                  Chính xác 95%
                </span>
              </div>

              {/* Price Range Display */}
              <div className="mb-6">
                <p className="text-xs text-slate-300 mb-1">Khoảng ngân sách dự kiến:</p>
                <div className="text-2xl sm:text-3xl font-extrabold text-white font-['Space_Grotesk']">
                  {formatVND(totalMin)}
                </div>
                <div className="text-xs text-slate-300 mt-1">
                  đến khoảng <strong className="text-white">{formatVND(totalMax)}</strong>
                </div>
              </div>

              {/* Delivery Timeline */}
              <div className="p-3.5 rounded-xl bg-[#1C2541] border border-[#3A506B] flex items-center justify-between mb-6">
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <Clock className="w-4 h-4 text-[#5BC0BE]" />
                  <span>Thời gian bàn giao:</span>
                </div>
                <span className="text-xs font-bold text-[#5BC0BE] font-mono">
                  {selectedProduct.days}
                </span>
              </div>

              {/* Configuration Breakdown */}
              <div className="space-y-2 text-xs text-slate-300 mb-6 border-t border-[#3A506B] pt-4">
                <div className="flex justify-between">
                  <span className="text-slate-400">Loại sản phẩm:</span>
                  <span className="font-semibold text-white truncate max-w-[170px]">
                    {selectedProduct.label}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Thiết kế UI/UX:</span>
                  <span className="font-semibold text-white truncate max-w-[170px]">
                    {selectedDesign.name}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Tính năng chọn thêm:</span>
                  <span className="font-semibold text-[#5BC0BE]">
                    {selectedFeatures.length} tính năng
                  </span>
                </div>
              </div>

              {/* What is always included */}
              <div className="bg-[#1C2541] rounded-xl p-3.5 space-y-2 mb-6 text-[11px] text-slate-200 border border-[#3A506B]">
                <div className="flex items-center gap-1.5 text-[#5BC0BE] font-bold">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Cam kết chuẩn Nexora:</span>
                </div>
                <p>• Bàn giao 100% Full Source Code & Tài liệu</p>
                <p>• Bảo hành & Hỗ trợ kỹ thuật 12 tháng</p>
                <p>• Hợp đồng rõ ràng, không phát sinh 1 đồng</p>
              </div>

              {/* Apply Button */}
              <button
                onClick={handleApply}
                className="w-full py-3.5 px-4 rounded-xl font-bold text-sm text-[#0B132B] bg-[#5BC0BE] hover:bg-[#7CE5E3] shadow-glow-teal-sm hover:shadow-glow-teal transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Nhận Báo Giá Cấu Hình Này</span>
                <ArrowRight className="w-4 h-4 text-[#0B132B] group-hover:translate-x-1 transition-transform" />
              </button>

              <p className="text-[10px] text-center text-slate-400 mt-3">
                * Mức giá có thể điều chỉnh linh hoạt tùy theo độ phức tạp chi tiết của dự án
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
