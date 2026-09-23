import React, { useState } from 'react';
import { Phone, X } from 'lucide-react';

export default function QuickContactWidget() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Tooltip hint */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-white text-[#0B132B] text-xs font-bold px-3.5 py-2 rounded-xl shadow-xl border border-slate-200 animate-bounce">
          <span>👋 Cần báo giá gấp? Chat Zalo ngay!</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-[#3A506B] hover:text-[#0B132B] ml-1 cursor-pointer"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Action buttons */}
      <div className="flex flex-col gap-2.5">
        {/* Zalo Button */}
        <a
          href="https://zalo.me/0987654321"
          target="_blank"
          rel="noreferrer"
          title="Chat Zalo Kỹ Thuật"
          className="w-13 h-13 p-3.5 bg-white hover:bg-slate-50 text-[#0B132B] border-2 border-[#5BC0BE] rounded-full shadow-lg flex items-center justify-center font-extrabold text-sm hover:scale-110 transition-all group"
        >
          <span className="font-extrabold text-xs text-[#0D7A78]">Zalo</span>
        </a>

        {/* Hotline Call Button */}
        <a
          href="tel:0987654321"
          title="Gọi Hotline 0987.654.321"
          className="w-13 h-13 p-3.5 bg-[#5BC0BE] hover:bg-[#7CE5E3] text-[#0B132B] rounded-full shadow-glow-teal flex items-center justify-center hover:scale-110 transition-all group"
        >
          <Phone className="w-5 h-5 animate-pulse text-[#0B132B]" />
        </a>
      </div>
    </div>
  );
}
