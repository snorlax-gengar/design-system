import React from 'react';
import { Layers, Box, MoveRight } from 'lucide-react';

export const ElevationSpacingSection: React.FC = () => {
  const shadows = [
    {
      level: 'Elevation 1 (Card / Surface)',
      variable: 'shadow-xs / border-slate-200',
      css: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      description: '기본 정보 카드, 리스트 아이템 및 입력 필드',
      sampleClass: 'shadow-xs border border-slate-200 bg-white',
    },
    {
      level: 'Elevation 2 (Floating / Dropdown)',
      variable: 'shadow-md',
      css: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      description: '셀렉트박스 메뉴, 팝오버, 캘린더 피커 레이어',
      sampleClass: 'shadow-md border border-slate-200 bg-white',
    },
    {
      level: 'Elevation 3 (Modal / Dialog)',
      variable: 'shadow-2xl',
      css: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      description: '전체 화면 오버레이 모달 및 최상위 다이얼로그',
      sampleClass: 'shadow-2xl border border-slate-200 bg-white',
    },
    {
      level: 'Signature Glow (Mama Sky)',
      variable: 'shadow-[0_0_25px_rgba(56,189,248,0.35)]',
      css: '0 0 25px rgba(56, 189, 248, 0.35)',
      description: '주요 활성 버튼, 호버 상태 및 시그니처 뱃지',
      sampleClass: 'shadow-[0_0_20px_rgba(56,189,248,0.3)] border border-sky-300 bg-white',
    },
  ];

  const radiuses = [
    { name: 'sm (Small)', value: '6px', usage: '태그, 인라인 칩, 작은 배지' },
    { name: 'md (Medium)', value: '10px', usage: '버튼, 텍스트 입력창, 셀렉트박스' },
    { name: 'lg (Large)', value: '14px', usage: '카드 컨테이너, 드롭다운 메뉴' },
    { name: 'xl (Extra Large)', value: '20px', usage: '모달 시트, 큰 히어로 카드' },
    { name: 'full (Pill)', value: '9999px', usage: '원형 버튼, 아바타, 상태 필' },
  ];

  const spacingScale = [
    { token: 'space-1', value: '4px', rem: '0.25rem' },
    { token: 'space-2', value: '8px', rem: '0.5rem' },
    { token: 'space-3', value: '12px', rem: '0.75rem' },
    { token: 'space-4', value: '16px', rem: '1.0rem' },
    { token: 'space-6', value: '24px', rem: '1.5rem' },
    { token: 'space-8', value: '32px', rem: '2.0rem' },
    { token: 'space-12', value: '48px', rem: '3.0rem' },
    { token: 'space-16', value: '64px', rem: '4.0rem' },
  ];

  return (
    <section id="elevation-spacing" className="py-12 border-b border-[#EFEFEF]">
      <div className="space-y-10">
        
        {/* Header */}
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
            03. FOUNDATIONS / ELEVATION & SPACING
          </span>
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight mt-1">
            엘리베이션, 곡률 & 8pt 그리드 시스템
          </h2>
          <p className="text-sm text-slate-500 mt-1 max-w-3xl">
            콘텐츠의 깊이감을 표현하는 3단계 그림자 스케일과 8pt 배수 기반의 안정적인 여백 규격입니다.
          </p>
        </div>

        {/* 1. Shadows Grid */}
        <div className="space-y-4">
          <h3 className="text-sm font-bold text-slate-800 flex items-center gap-2">
            <Layers className="w-4 h-4 text-[#0284C7]" />
            <span>Elevation & Shadow Specs</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {shadows.map((sh, idx) => (
              <div 
                key={idx} 
                className={`p-5 rounded-xl ${sh.sampleClass} flex flex-col justify-between min-h-[140px]`}
              >
                <div>
                  <div className="text-xs font-bold text-slate-900">{sh.level}</div>
                  <div className="text-[11px] font-mono text-slate-400 mt-0.5">{sh.variable}</div>
                </div>
                <p className="text-xs text-slate-500 mt-4 leading-relaxed">
                  {sh.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Radius & Spacing Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-2">
          
          {/* Border Radius Table */}
          <div className="bg-white border border-slate-200 rounded-xl p-5 space-y-4">
            <h3 className="text-sm font-bold text-slate-800 flex items-center gap-2">
              <Box className="w-4 h-4 text-[#A855F7]" />
              <span>Corner Radius (곡률) 규격</span>
            </h3>
            <div className="space-y-2.5">
              {radiuses.map((r, i) => (
                <div key={i} className="flex items-center justify-between text-xs py-2 border-b border-slate-100 last:border-0">
                  <div className="flex items-center gap-2.5">
                    <div 
                      className="w-6 h-6 border-2 border-[#38BDF8] bg-sky-50"
                      style={{ borderRadius: r.value }}
                    />
                    <span className="font-bold text-slate-900">{r.name}</span>
                  </div>
                  <span className="font-mono text-slate-500">{r.value}</span>
                  <span className="text-slate-400 hidden sm:inline text-right">{r.usage}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 8pt Spacing Scale */}
          <div className="bg-white border border-slate-200 rounded-xl p-5 space-y-4">
            <h3 className="text-sm font-bold text-slate-800 flex items-center gap-2">
              <MoveRight className="w-4 h-4 text-[#FB923C]" />
              <span>8pt Spacing Scale</span>
            </h3>
            <div className="space-y-2">
              {spacingScale.map((s, i) => (
                <div key={i} className="flex items-center gap-3 text-xs">
                  <span className="font-mono font-bold w-16 text-slate-700">{s.token}</span>
                  <div className="flex-1 bg-slate-100 h-3 rounded-full overflow-hidden">
                    <div 
                      className="bg-[#38BDF8] h-full rounded-full" 
                      style={{ width: `${Math.min(100, (parseInt(s.value) / 64) * 100)}%` }}
                    />
                  </div>
                  <span className="font-mono text-slate-500 w-12 text-right">{s.value}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
