import React, { useState, useEffect } from 'react';
import { Menu, X, PhoneCall, Sparkles, ArrowRight } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Dịch Vụ', href: '#services' },
    { label: 'Dự Án Mẫu', href: '#portfolio' },
    { label: 'Tính Chi Phí', href: '#calculator' },
    { label: 'Quy Trình', href: '#process' },
    { label: 'Vì Sao Chọn Nexora', href: '#why-us' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-white/90 backdrop-blur-xl border-b border-slate-200/80 shadow-sm py-3'
        : 'bg-transparent py-5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">

            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-2xl font-extrabold tracking-tight text-[#0B132B] font-['Space_Grotesk']">
                  NEXORA
                </span>
                <span className="inline-block w-2 h-2 rounded-full bg-[#5BC0BE] animate-ping"></span>
              </div>

            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-50/90 border border-slate-200/80 px-4 py-1.5 rounded-full backdrop-blur-md shadow-inner">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-[#3A506B] hover:text-[#0B132B] px-3.5 py-1.5 rounded-full hover:bg-white transition-all hover:shadow-sm"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="tel:0987654321"
              className="flex items-center gap-2 text-xs font-bold text-[#0B132B] hover:text-[#0D7A78] px-3 py-2 rounded-lg hover:bg-slate-100 transition-colors"
            >
              <PhoneCall className="w-4 h-4 text-[#0D7A78]" />
              <span>0987.654.321</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-4 py-2.5 rounded-xl font-bold text-xs text-[#0B132B] bg-[#5BC0BE] hover:bg-[#7CE5E3] shadow-glow-teal-sm hover:shadow-glow-teal transition-all hover:scale-105 gap-2"
            >
              <span>Nhận Báo Giá 60s</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#0B132B]" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href="#contact"
              className="text-xs bg-[#5BC0BE] text-[#0B132B] px-3 py-1.5 rounded-lg font-bold sm:hidden"
            >
              Báo Giá
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-[#0B132B] hover:text-[#5BC0BE] bg-slate-100 border border-slate-200"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 p-4 rounded-2xl bg-white border border-slate-200 shadow-2xl backdrop-blur-2xl animate-in slide-in-from-top-2">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-semibold text-[#3A506B] hover:text-[#0B132B] px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 mt-2 border-t border-slate-100 flex flex-col gap-2">
                <a
                  href="tel:0987654321"
                  className="flex items-center justify-center gap-2 py-2.5 text-sm font-bold text-[#0B132B] bg-slate-100 rounded-xl"
                >
                  <PhoneCall className="w-4 h-4 text-[#0D7A78]" />
                  Hotline: 0987.654.321
                </a>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 py-2.5 text-sm font-bold text-[#0B132B] bg-[#5BC0BE] rounded-xl shadow-glow-teal-sm"
                >
                  Nhận Tư Vấn & Báo Giá Miễn Phí
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
