import React from 'react';
import { Sparkles, ArrowRight, Palette } from 'lucide-react';
import { Button } from '../ui/Button';

interface HeroSectionProps {
  onExploreColors: () => void;
  onExploreButtons: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreColors, onExploreButtons }) => {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-32">
      {/* Background Aurora Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-[#DDD6FE]/60 via-[#BAE6FD]/50 to-[#FEF08A]/30 blur-[100px] -z-10 rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        {/* Release Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-[#BAE6FD] shadow-sm backdrop-blur-sm animate-fade-in">
          <Sparkles className="w-4 h-4 text-[#38BDF8]" />
          <span className="text-xs font-semibold bg-gradient-to-r from-[#0284C7] to-[#9333EA] bg-clip-text text-transparent">
            Family Signature Edition 2026
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#A855F7]" />
          <span className="text-xs text-[#64748B] font-medium">엄마의 맑은 하늘(Aero Sky) 중심 시스템</span>
        </div>

        {/* Title */}
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#0F172A] leading-[1.15]">
            우리 가족의 온기로 빚어낸 <br />
            <span className="bg-gradient-to-r from-[#38BDF8] via-[#0EA5E9] to-[#A855F7] bg-clip-text text-transparent">
              Gengarileo Design System
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#475569] font-normal leading-relaxed">
            가족을 품어주는 <strong>엄마의 맑은 하늘(Aero Sky)</strong>을 중심축으로, <br className="hidden sm:inline" />
            <strong>아빠의 위트(Papa Lavender)</strong>와 <strong>아기의 첫 햇살(Baby Butter)</strong>이 조화롭게 어우러진 시그니처 표준입니다.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Button 
            variant="primary" 
            size="lg" 
            onClick={onExploreButtons}
            rightIcon={<ArrowRight className="w-4 h-4" />}
          >
            스카이블루 버튼 체험
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            onClick={onExploreColors}
            leftIcon={<Palette className="w-4 h-4 text-[#38BDF8]" />}
          >
            패밀리 컬러 토큰 보기
          </Button>
        </div>

        {/* Quick Specs Bar */}
        <div className="pt-8 max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3 text-left">
          <div className="bg-white/80 backdrop-blur-sm border border-[#BAE6FD] p-3.5 rounded-[12px] shadow-sm">
            <div className="flex items-center gap-2 text-[#0369A1] text-xs font-semibold mb-1">
              <span className="w-2 h-2 rounded-full bg-[#38BDF8]" /> Primary Core
            </div>
            <p className="text-sm font-bold text-[#0F172A]">Mama Sky</p>
            <p className="text-[11px] text-[#64748B]">#38BDF8 · 엄마의 맑은 하늘</p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm border border-[#E9D5FF] p-3.5 rounded-[12px] shadow-sm">
            <div className="flex items-center gap-2 text-[#7E22CE] text-xs font-semibold mb-1">
              <span className="w-2 h-2 rounded-full bg-[#A855F7]" /> Secondary
            </div>
            <p className="text-sm font-bold text-[#0F172A]">Papa Lavender</p>
            <p className="text-[11px] text-[#64748B]">#A855F7 · 아빠의 위트</p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm border border-[#FEF08A] p-3.5 rounded-[12px] shadow-sm">
            <div className="flex items-center gap-2 text-[#854D0E] text-xs font-semibold mb-1">
              <span className="w-2 h-2 rounded-full bg-[#FEF08A]" /> Family Accent
            </div>
            <p className="text-sm font-bold text-[#0F172A]">Baby Butter & Peach</p>
            <p className="text-[11px] text-[#64748B]">#FEF08A · 아기의 첫 햇살</p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm border border-[#E2E8F0] p-3.5 rounded-[12px] shadow-sm">
            <div className="flex items-center gap-2 text-[#334155] text-xs font-semibold mb-1">
              <span className="w-2 h-2 rounded-full bg-[#64748B]" /> 어디서나 사용
            </div>
            <p className="text-sm font-bold text-[#0F172A]">Zero Dependency</p>
            <p className="text-[11px] text-[#64748B]">CSS / Tailwind / React</p>
          </div>
        </div>

      </div>
    </section>
  );
};
