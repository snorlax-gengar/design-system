import React from 'react';
import { GengarileoLogo } from '../ui/GengarileoLogo';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-[#E2E8F0] bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Logo & Info */}
        <div className="flex items-center gap-3">
          <GengarileoLogo size={32} variant="gradient" showWordmark />
        </div>

        {/* Badges / Status */}
        <div className="flex items-center gap-4 text-xs text-[#64748B]">
          <span className="flex items-center gap-1.5 font-semibold text-slate-800">
            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
            v1.2.0 Family Edition (Released)
          </span>
          <span>·</span>
          <span>LINE-inspired Architecture</span>
          <span>·</span>
          <span>WCAG 2.1 AA Compliant</span>
        </div>

      </div>
    </footer>
  );
};
