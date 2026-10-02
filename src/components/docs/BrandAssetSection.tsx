import React, { useState } from 'react';
import { Download, Copy, Check, Sparkles, Orbit, Compass } from 'lucide-react';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { GengarileoLogo } from '../ui/GengarileoLogo';

interface BrandAssetSectionProps {
  onCopySuccess: (text: string) => void;
}

export const BrandAssetSection: React.FC<BrandAssetSectionProps> = ({ onCopySuccess }) => {
  const [selectedVariant, setSelectedVariant] = useState<'gradient' | 'lavender' | 'sky' | 'dark'>('gradient');
  const [copiedType, setCopiedType] = useState<string | null>(null);

  const faviconHtmlSnippet = `<!-- Gengarileo Signature Vector Favicon -->
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />`;

  const reactSvgUsageSnippet = `import { GengarileoLogo } from '@/components/ui/GengarileoLogo';

// 1. 헤더용 로고 (심벌 + 텍스트)
<GengarileoLogo size={36} variant="gradient" showWordmark />

// 2. 앱 아이콘 형태 (둥근 사각형)
<GengarileoLogo size={64} variant="gradient" isAppIcon />

// 3. 단색 심벌 (스카이블루 / 라벤더)
<GengarileoLogo size={24} variant="lavender" />`;

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    onCopySuccess('코드가 클립보드에 복사되었습니다!');
    setTimeout(() => setCopiedType(null), 2000);
  };

  const handleDownloadSvg = () => {
    const link = document.createElement('a');
    link.href = '/favicon.svg';
    link.download = 'gengarileo-logo.svg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    onCopySuccess('gengarileo-logo.svg 벡터 파일이 다운로드되었습니다.');
  };

  return (
    <section id="brand-asset" className="py-16 md:py-24 border-t border-[#E2E8F0] bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-[#A855F7] bg-[#F3E8FF] px-2.5 py-1 rounded-full">
            Official Brand Symbol & Favicon
          </span>
          <h2 className="text-3xl font-extrabold text-[#0F172A] tracking-tight">
            Gengarileo 벡터 심벌 가이드
          </h2>
          <p className="text-base text-[#64748B] max-w-2xl">
            인공지능 비트맵 이미지가 아닌, <strong>피그마에서 정밀하게 패스를 깎은 순수 벡터(SVG)</strong> 기반의 공식 브랜드 로고마크입니다. 16px 파비콘부터 초대형 옥외 간판까지 완벽한 무손실 선명도를 보장합니다.
          </p>
        </div>

        {/* 4 Variant Tabs + Hero Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Interactive Vector Logo Stage (7 cols) */}
          <div className="lg:col-span-7 bg-[#0F172A] rounded-3xl p-8 sm:p-12 border border-[#1E293B] shadow-2xl relative overflow-hidden flex flex-col items-center justify-center text-center">
            
            {/* Background Subtle Grid & Glow */}
            <div 
              className="absolute inset-0 opacity-20 pointer-events-none"
              style={{
                backgroundImage: 'radial-gradient(#38BDF8 1px, transparent 1px)',
                backgroundSize: '24px 24px',
              }}
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[#8B5CF6]/20 blur-[90px] pointer-events-none rounded-full" />

            {/* Variant Switcher Pills */}
            <div className="z-10 flex flex-wrap items-center justify-center gap-1.5 bg-[#1E293B]/80 backdrop-blur-md p-1.5 rounded-xl border border-[#334155] mb-10">
              <button
                onClick={() => setSelectedVariant('gradient')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                  selectedVariant === 'gradient'
                    ? 'bg-gradient-to-r from-[#A855F7] to-[#38BDF8] text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Signature Gradient
              </button>
              <button
                onClick={() => setSelectedVariant('lavender')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                  selectedVariant === 'lavender'
                    ? 'bg-[#A855F7] text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Solid Lavender
              </button>
              <button
                onClick={() => setSelectedVariant('sky')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                  selectedVariant === 'sky'
                    ? 'bg-[#38BDF8] text-slate-900 font-bold shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Aero Sky
              </button>
              <button
                onClick={() => setSelectedVariant('dark')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                  selectedVariant === 'dark'
                    ? 'bg-white text-slate-900 font-bold shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Monochrome
              </button>
            </div>

            {/* Main Logo Display (Vector SVG) */}
            <div className="z-10 my-4 transform transition-all hover:scale-105 duration-300">
              <GengarileoLogo
                size={180}
                variant={selectedVariant}
                isAppIcon
              />
            </div>

            {/* Vector Specs Badge */}
            <div className="z-10 mt-6 flex items-center gap-3 text-xs text-slate-400 font-mono">
              <span className="flex items-center gap-1.5 text-purple-300">
                <span className="w-1.5 h-1.5 rounded-full bg-[#A855F7]" /> Pure SVG
              </span>
              <span>·</span>
              <span className="text-sky-300">Infinite Scale</span>
              <span>·</span>
              <span className="text-yellow-300">Zero Artifacts</span>
            </div>

          </div>

          {/* Right: Architecture & Action Tools (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Visual Anatomy Card */}
            <Card variant="default" className="space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-[#F1F5F9]">
                <h3 className="text-sm font-bold text-[#0F172A]">심벌 조형 철학 (Symbol Anatomy)</h3>
                <Badge variant="lavender">Vector Crafted</Badge>
              </div>

              <div className="space-y-3 text-xs">
                <div className="flex items-start gap-3 p-2.5 rounded-xl bg-[#FAF5FF] border border-[#E9D5FF]/60">
                  <div className="p-1.5 rounded-lg bg-white text-[#9333EA] shadow-sm shrink-0">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-[#0F172A] block font-semibold">01. Cosmic Crown (성운의 코스믹 크라운)</strong>
                    <span className="text-[#64748B]">하늘을 향해 뻗은 듀얼 윙 크라운으로 아빠의 창의적 위트와 진취적 개성을 상징</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-2.5 rounded-xl bg-[#F0F9FF] border border-[#BAE6FD]/60">
                  <div className="p-1.5 rounded-lg bg-white text-[#0284C7] shadow-sm shrink-0">
                    <Orbit className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-[#0F172A] block font-semibold">02. Galileo Orbit Ring (행성 궤도)</strong>
                    <span className="text-[#64748B]">-26도 기울어진 천체 궤도로 탐구심과 안정적인 균형미 부여</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-2.5 rounded-xl bg-[#FEFCE8] border border-[#FEF08A]/60">
                  <div className="p-1.5 rounded-lg bg-white text-[#CA8A04] shadow-sm shrink-0">
                    <Compass className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-[#0F172A] block font-semibold">03. Celestial Nova Star (중심 별빛)</strong>
                    <span className="text-[#64748B]">버터 옐로우(#FEF08A) 4각 별빛으로 명확한 시각적 중심점 확립</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Direct Downloads & Code Snippet */}
            <Card variant="interactive" className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-[#0F172A]">에셋 다운로드 & 코드 복사</h3>
                <span className="text-xs text-[#64748B]">v1.0.0</span>
              </div>

              {/* Download Button */}
              <button
                onClick={handleDownloadSvg}
                className="w-full flex items-center justify-between p-3.5 rounded-xl border border-[#A855F7] bg-[#FAF5FF] hover:bg-[#F3E8FF] transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#A855F7] text-white flex items-center justify-center font-bold text-xs shadow-sm">
                    SVG
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-bold text-[#0F172A] group-hover:text-[#7E22CE]">
                      gengarileo-logo.svg 다운로드
                    </div>
                    <div className="text-[11px] text-[#64748B]">초경량 무손실 공식 벡터 그래픽</div>
                  </div>
                </div>
                <Download className="w-4 h-4 text-[#A855F7] group-hover:translate-y-0.5 transition-transform" />
              </button>

              {/* Code Tabs */}
              <div id="favicon-system" className="space-y-2 pt-2 scroll-mt-24">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-[#334155]">HTML Favicon 연결 코드</span>
                  <button
                    onClick={() => handleCopy(faviconHtmlSnippet, 'favicon')}
                    className="text-[#7E22CE] font-bold hover:underline flex items-center gap-1"
                  >
                    {copiedType === 'favicon' ? <Check className="w-3.5 h-3.5 text-[#10B981]" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedType === 'favicon' ? '복사됨!' : '태그 복사'}</span>
                  </button>
                </div>
                <div className="p-3 bg-[#0F172A] rounded-xl text-left font-mono text-[11px] text-slate-300 border border-[#1E293B] overflow-x-auto">
                  <code>{faviconHtmlSnippet}</code>
                </div>
              </div>

              {/* React Usage Code */}
              <div className="space-y-2 pt-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-[#334155]">React 컴포넌트 사용법</span>
                  <button
                    onClick={() => handleCopy(reactSvgUsageSnippet, 'react')}
                    className="text-[#7E22CE] font-bold hover:underline flex items-center gap-1"
                  >
                    {copiedType === 'react' ? <Check className="w-3.5 h-3.5 text-[#10B981]" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedType === 'react' ? '복사됨!' : '코드 복사'}</span>
                  </button>
                </div>
                <div className="p-3 bg-[#0F172A] rounded-xl text-left font-mono text-[11px] text-slate-300 border border-[#1E293B] overflow-x-auto">
                  <pre>{reactSvgUsageSnippet}</pre>
                </div>
              </div>

            </Card>

          </div>

        </div>

      </div>
    </section>
  );
};
