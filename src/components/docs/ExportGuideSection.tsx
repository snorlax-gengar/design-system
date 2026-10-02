import React, { useState } from 'react';
import { Download, Copy, Check, Terminal, FileCode, CheckCircle2 } from 'lucide-react';

interface ExportGuideSectionProps {
  onCopySuccess: (text: string) => void;
}

export const ExportGuideSection: React.FC<ExportGuideSectionProps> = ({ onCopySuccess }) => {
  const [activeTab, setActiveTab] = useState<'css' | 'tailwind' | 'react'>('tailwind');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    onCopySuccess('코드가 클립보드에 복사되었습니다!');
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const cssSnippet = `/* 1. 프로젝트의 전역 CSS(global.css 또는 index.css) 상단에 추가 */
@import url('/tokens/gds-tokens.css');
@import url('/tokens/gds-components.css');

/* 2. HTML에서 바로 사용 */
<button class="gds-btn gds-btn-lg gds-btn-primary">
  시작하기
</button>

<button class="gds-btn gds-btn-md gds-btn-secondary">
  서브 액션
</button>

<button class="gds-btn gds-btn-md gds-btn-accent">
  결제하기 (보색 CTA)
</button>

<span class="gds-badge gds-badge-lavender">신규</span>`;

  const tailwindSnippet = `// tailwind.config.js
module.exports = {
  // GDS 프리셋 추가
  presets: [
    require('./gengarileo-preset.js') // public/tokens/tailwind-preset.js 복사본
  ],
  content: [
    "./src/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

/* 이제 어디서든 내 시그니처 색상을 바로 사용할 수 있습니다: */
<div class="bg-gds-lavender-500 text-white p-4 rounded-gds-lg shadow-gds-lavender">
  <button class="bg-gds-sky-400 hover:bg-gds-sky-500 text-white px-4 py-2 rounded-gds-md">
    스카이블루 버튼
  </button>
  <button class="bg-gds-coral-400 text-white px-4 py-2 rounded-gds-md">
    코랄 보색 버튼
  </button>
</div>`;

  const reactSnippet = `// Button.tsx 컴포넌트를 새 프로젝트의 components/ui/ 폴더에 넣고 바로 import!
import { Button } from './components/ui/Button';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function MyPage() {
  return (
    <div className="flex gap-3">
      {/* 1. 메인 연보라 버튼 */}
      <Button variant="primary" size="lg" leftIcon={<Sparkles className="w-4 h-4" />}>
        메인 액션
      </Button>

      {/* 2. 보조 연하늘 버튼 */}
      <Button variant="secondary" size="md">
        정보 확인
      </Button>

      {/* 3. 보색 코랄 CTA 버튼 */}
      <Button variant="accent" size="md" rightIcon={<ArrowRight className="w-4 h-4" />}>
        주문하기
      </Button>
    </div>
  );
}`;

  return (
    <section id="quickstart" className="py-16 md:py-24 border-t border-[#E2E8F0] bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0284C7] bg-[#E0F2FE] px-2.5 py-1 rounded-full">
            Developer Integration
          </span>
          <h2 className="text-3xl font-extrabold text-[#0F172A] tracking-tight">
            새 프로젝트에 무조건 연동하는 3가지 방법
          </h2>
          <p className="text-base text-[#64748B] max-w-2xl">
            앞으로 어떤 새 웹/앱 프로젝트를 시작하더라도 아래 3가지 중 가장 편한 방식으로 시그니처 디자인을 30초 만에 가져다 쓸 수 있습니다.
          </p>
        </div>

        {/* 3 Method Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div 
            onClick={() => setActiveTab('tailwind')}
            className={`cursor-pointer p-5 rounded-2xl border transition-all ${
              activeTab === 'tailwind'
                ? 'bg-white border-[#A855F7] shadow-md ring-2 ring-[#F3E8FF]'
                : 'bg-white/80 border-[#E2E8F0] hover:border-[#CBD5E1]'
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-[#A855F7] bg-[#F3E8FF] px-2 py-0.5 rounded-full">추천 방식</span>
              <Terminal className="w-5 h-5 text-[#A855F7]" />
            </div>
            <h3 className="text-base font-bold text-[#0F172A]">방법 1: Tailwind CSS 프리셋</h3>
            <p className="text-xs text-[#64748B] mt-1">
              `tailwind.config.js`에 프리셋 한 줄 추가로 모든 클래스 자동 주입.
            </p>
          </div>

          <div 
            onClick={() => setActiveTab('react')}
            className={`cursor-pointer p-5 rounded-2xl border transition-all ${
              activeTab === 'react'
                ? 'bg-white border-[#38BDF8] shadow-md ring-2 ring-[#E0F2FE]'
                : 'bg-white/80 border-[#E2E8F0] hover:border-[#CBD5E1]'
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-[#0284C7] bg-[#E0F2FE] px-2 py-0.5 rounded-full">React / Next.js</span>
              <FileCode className="w-5 h-5 text-[#38BDF8]" />
            </div>
            <h3 className="text-base font-bold text-[#0F172A]">방법 2: React 컴포넌트 복사</h3>
            <p className="text-xs text-[#64748B] mt-1">
              `Button.tsx` 단일 파일을 새 프로젝트 컴포넌트 폴더에 복사해 즉시 사용.
            </p>
          </div>

          <div 
            onClick={() => setActiveTab('css')}
            className={`cursor-pointer p-5 rounded-2xl border transition-all ${
              activeTab === 'css'
                ? 'bg-white border-[#64748B] shadow-md ring-2 ring-[#F1F5F9]'
                : 'bg-white/80 border-[#E2E8F0] hover:border-[#CBD5E1]'
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-[#475569] bg-[#F1F5F9] px-2 py-0.5 rounded-full">순수 HTML/CSS</span>
              <Download className="w-5 h-5 text-[#64748B]" />
            </div>
            <h3 className="text-base font-bold text-[#0F172A]">방법 3: 순수 CSS 토큰 파일</h3>
            <p className="text-xs text-[#64748B] mt-1">
              프레임워크 없이 일반 CSS 파일만으로 `.gds-btn` 클래스 사용.
            </p>
          </div>
        </div>

        {/* Code Snippet Box */}
        <div className="bg-[#0F172A] rounded-2xl overflow-hidden border border-[#1E293B] shadow-xl text-left">
          <div className="flex items-center justify-between px-5 py-3 bg-[#1E293B] border-b border-[#334155]">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#EF4444]" />
              <span className="w-3 h-3 rounded-full bg-[#F59E0B]" />
              <span className="w-3 h-3 rounded-full bg-[#10B981]" />
              <span className="ml-3 text-xs font-mono text-slate-300">
                {activeTab === 'tailwind' && 'tailwind.config.js'}
                {activeTab === 'react' && 'src/components/ui/Button.tsx & Page.tsx'}
                {activeTab === 'css' && 'styles/global.css & index.html'}
              </span>
            </div>

            <button
              onClick={() => {
                const code = activeTab === 'tailwind' ? tailwindSnippet : activeTab === 'react' ? reactSnippet : cssSnippet;
                handleCopy(code, activeTab);
              }}
              className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-white bg-[#334155]/70 hover:bg-[#334155] px-3 py-1.5 rounded-lg transition-all"
            >
              {copiedKey === activeTab ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#10B981]" />
                  <span className="text-[#10B981] font-semibold">전체 복사 완료!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>코드 전체 복사</span>
                </>
              )}
            </button>
          </div>

          <div className="p-6 overflow-x-auto font-mono text-xs text-slate-300 leading-relaxed">
            <pre>
              {activeTab === 'tailwind' && tailwindSnippet}
              {activeTab === 'react' && reactSnippet}
              {activeTab === 'css' && cssSnippet}
            </pre>
          </div>
        </div>

        {/* Asset Files Directory Summary */}
        <div className="bg-white p-6 rounded-2xl border border-[#E2E8F0] space-y-4">
          <h4 className="text-sm font-bold text-[#0F172A] flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
            이미 프로젝트 내에 준비된 에셋 파일 경로
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
            <div className="p-3 bg-[#F8FAFC] rounded-lg border border-[#E2E8F0]">
              <span className="font-bold text-[#A855F7] block mb-1">public/tokens/gds-tokens.css</span>
              <span className="text-[#64748B]">모든 CSS 변수 (연보라/하늘/보색)</span>
            </div>
            <div className="p-3 bg-[#F8FAFC] rounded-lg border border-[#E2E8F0]">
              <span className="font-bold text-[#38BDF8] block mb-1">public/tokens/gds-components.css</span>
              <span className="text-[#64748B]">완성된 CSS 버튼 및 뱃지 클래스</span>
            </div>
            <div className="p-3 bg-[#F8FAFC] rounded-lg border border-[#E2E8F0]">
              <span className="font-bold text-[#FB923C] block mb-1">public/tokens/tailwind-preset.js</span>
              <span className="text-[#64748B]">Tailwind 프리셋 설정 파일</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
