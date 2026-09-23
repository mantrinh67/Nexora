import React, { useState } from 'react';
import { projectsData } from '../data/projectsData';
import { Sparkles, ArrowRight, X, CheckCircle2 } from 'lucide-react';

export default function Portfolio({ onSelectProjectToQuote }) {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = [
    { id: 'all', label: 'Tất Cả Dự Án' },
    { id: 'corporate', label: 'Website Doanh Nghiệp' },
    { id: 'mobile', label: 'Mobile App' },
    { id: 'webapp', label: 'Web App & SaaS' },
    { id: 'ecommerce', label: 'E-Commerce' },
  ];

  const filteredProjects = activeTab === 'all'
    ? projectsData
    : projectsData.filter((p) => p.category === activeTab);

  const handleOpenCaseStudy = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="portfolio" className="py-24 relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-bold text-[#0D7A78] uppercase tracking-wider mb-4 shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Dự Án Đã Triển Khai</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B132B] tracking-tight font-['Space_Grotesk']">
              Portfolio & Case Studies Thực Chiến
            </h2>
            <p className="text-[#3A506B] text-sm sm:text-base mt-3 max-w-2xl">
              Không chỉ là giao diện đẹp mắt, mỗi sản phẩm Nexora tạo ra đều tập trung vào giải quyết bài toán kinh doanh, tối ưu tốc độ và tỷ lệ chuyển đổi đơn hàng.
            </p>
          </div>

          <div className="text-xs text-[#3A506B] bg-slate-50 border border-slate-200 px-4 py-3 rounded-xl max-w-xs shrink-0 shadow-sm">
            <span className="text-[#0D7A78] font-bold">100% Sản Phẩm Thật:</span> Khách hàng có thể trải nghiệm trực tiếp hoặc xem bản prototype tương tác.
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-12 border-b border-slate-200 pb-4">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === cat.id
                  ? 'bg-[#0B132B] text-white shadow-md scale-105'
                  : 'bg-slate-100 text-[#3A506B] hover:bg-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl border border-slate-200 hover:border-[#5BC0BE] overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-xl shadow-sm"
            >
              <div>
                {/* Visual Thumbnail Container */}
                <div
                  className="h-56 bg-gradient-to-br from-slate-100 via-slate-200 to-[#5BC0BE]/20 p-5 relative overflow-hidden flex flex-col justify-between border-b border-slate-200"
                >
                  {/* Category Pill & Year */}
                  <div className="flex items-center justify-between z-10">
                    <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/90 text-[#0B132B] shadow-sm border border-slate-200">
                      {project.categoryLabel}
                    </span>
                    <span className="text-xs text-[#3A506B] font-mono font-bold">
                      {project.year}
                    </span>
                  </div>

                  {/* Simulated Device Graphic inside Thumbnail */}
                  <div className="relative z-10 my-auto">
                    <div className="bg-white/95 border border-slate-200 rounded-xl p-3.5 shadow-md transform group-hover:scale-[1.03] transition-transform duration-300">
                      <div className="flex items-center justify-between border-b border-slate-100 pb-2 mb-2 text-[10px] text-[#3A506B] font-mono">
                        <span className="truncate max-w-[150px] text-[#0B132B] font-bold">{project.client}</span>
                        <span className="text-[#0D7A78] font-bold">Live Verified</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="text-xl font-extrabold text-[#0B132B]">
                          {project.impact[0].metric}
                        </div>
                        <div className="text-[11px] text-[#3A506B] leading-tight font-medium">
                          {project.impact[0].label}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom metrics pills */}
                  <div className="flex items-center gap-2 z-10">
                    <span className="text-[11px] font-mono bg-white/90 text-[#3A506B] px-2.5 py-0.5 rounded border border-slate-200 shadow-sm font-semibold">
                      {project.tags[0]}
                    </span>
                    <span className="text-[11px] font-mono bg-white/90 text-[#3A506B] px-2.5 py-0.5 rounded border border-slate-200 shadow-sm font-semibold">
                      {project.tags[1]}
                    </span>
                  </div>

                  {/* Background ambient lighting */}
                  <div
                    className="absolute -right-10 -bottom-10 w-40 h-40 rounded-full blur-2xl bg-[#5BC0BE]/30 group-hover:bg-[#5BC0BE]/50 transition-all"
                  />
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-[#0B132B] mb-2 line-clamp-2 group-hover:text-[#0D7A78] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#3A506B] mb-4 line-clamp-2 leading-relaxed">
                    {project.shortDesc}
                  </p>

                  {/* Highlight impact numbers */}
                  <div className="grid grid-cols-2 gap-2 bg-slate-50 p-3 rounded-xl border border-slate-200 mb-4">
                    <div>
                      <div className="text-xs text-[#3A506B]">Kết quả</div>
                      <div className="text-sm font-extrabold text-[#0D7A78]">
                        {project.impact[0].metric}
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-[#3A506B]">Tốc độ/Đánh giá</div>
                      <div className="text-sm font-extrabold text-[#0B132B]">
                        {project.impact[1].metric}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Card Action */}
              <div className="px-6 pb-6 pt-2 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => handleOpenCaseStudy(project)}
                  className="text-xs sm:text-sm font-bold text-[#0B132B] hover:text-[#0D7A78] flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>Xem Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#0D7A78]" />
                </button>

                <button
                  onClick={() => {
                    if (onSelectProjectToQuote) onSelectProjectToQuote(project.title);
                  }}
                  className="text-xs font-bold text-[#0D7A78] hover:underline cursor-pointer"
                >
                  Làm giống dự án này →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Portfolio CTA Banner */}
        <div className="mt-16 text-center bg-slate-50 rounded-2xl p-8 border border-slate-200 shadow-sm">
          <h3 className="text-xl sm:text-2xl font-bold text-[#0B132B] mb-2">
            Bạn muốn xem thêm các dự án chuyên sâu khác hoặc yêu cầu Demo trực tiếp?
          </h3>
          <p className="text-[#3A506B] text-sm max-w-xl mx-auto mb-6">
            Chúng tôi có kho tài liệu hơn 50+ sản phẩm mẫu trong mọi lĩnh vực (Bất động sản, Y tế, Giáo dục, Bán lẻ, Fintech).
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#5BC0BE] text-[#0B132B] font-bold text-sm shadow-glow-teal-sm hover:bg-[#7CE5E3] hover:scale-105 transition-all"
          >
            <span>Yêu Cầu Nhận Portfolio PDF & Demo Trực Tiếp</span>
            <ArrowRight className="w-4 h-4 text-[#0B132B]" />
          </a>
        </div>

      </div>

      {/* Case Study Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-in fade-in">
          <div
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white border border-slate-200 rounded-2xl shadow-2xl p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-5 right-5 p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#3A506B] hover:text-[#0B132B] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0B132B] bg-[#5BC0BE] px-3 py-1 rounded-full">
                {selectedProject.categoryLabel}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B132B] mt-3 mb-2 font-['Space_Grotesk']">
                {selectedProject.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#3A506B]">
                Khách hàng: <strong className="text-[#0B132B]">{selectedProject.client}</strong> • Năm triển khai: {selectedProject.year}
              </p>
            </div>

            {/* Impact Highlights */}
            <div className="grid grid-cols-3 gap-3 mb-8 bg-slate-50 p-4 rounded-xl border border-slate-200 text-center">
              {selectedProject.impact.map((item, idx) => (
                <div key={idx}>
                  <div className="text-lg sm:text-2xl font-extrabold text-[#0D7A78]">
                    {item.metric}
                  </div>
                  <div className="text-[11px] sm:text-xs text-[#3A506B] mt-0.5 font-medium">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Problem & Solution Breakdown */}
            <div className="space-y-6 mb-8 text-sm">
              <div className="p-4 rounded-xl bg-rose-50 border border-rose-200">
                <h4 className="font-bold text-rose-700 mb-1 flex items-center gap-2">
                  <span>⚠️ Thách thức & Bài toán ban đầu:</span>
                </h4>
                <p className="text-[#1C2541] leading-relaxed">
                  {selectedProject.problem}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-teal-50 border border-teal-200">
                <h4 className="font-bold text-teal-800 mb-1 flex items-center gap-2">
                  <span>💡 Giải pháp kỹ thuật từ Nexora:</span>
                </h4>
                <p className="text-[#1C2541] leading-relaxed">
                  {selectedProject.solution}
                </p>
              </div>
            </div>

            {/* Key Features List */}
            <div className="mb-8">
              <h4 className="font-bold text-[#0B132B] text-base mb-3">
                Tính năng & Điểm nhấn công nghệ:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {selectedProject.features.map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-2 text-xs sm:text-sm text-[#1C2541]">
                    <CheckCircle2 className="w-4 h-4 text-[#0D7A78] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Badges */}
            <div className="mb-8">
              <h4 className="font-bold text-xs uppercase tracking-wider text-[#3A506B] mb-2.5">
                Công nghệ sử dụng (Tech Stack):
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tags.map((t, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-xs font-mono font-bold px-3 py-1 rounded-lg bg-slate-100 text-[#0B132B] border border-slate-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Bottom CTA */}
            <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                onClick={handleCloseModal}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-slate-300 text-[#3A506B] hover:text-[#0B132B] text-xs font-semibold hover:bg-slate-100 cursor-pointer"
              >
                Đóng lại
              </button>

              <a
                href="#contact"
                onClick={() => {
                  if (onSelectProjectToQuote) onSelectProjectToQuote(selectedProject.title);
                  handleCloseModal();
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#5BC0BE] text-[#0B132B] font-bold text-xs sm:text-sm shadow-glow-teal-sm hover:bg-[#7CE5E3] hover:scale-[1.02] transition-transform"
              >
                <span>Yêu Cầu Làm Sản Phẩm Tương Tự Dự Án Này</span>
                <ArrowRight className="w-4 h-4 text-[#0B132B]" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
