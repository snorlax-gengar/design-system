import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Copy, 
  Sliders, 
  Code2, 
  RotateCcw 
} from 'lucide-react';
import { Button, type ButtonVariant, type ButtonSize } from '../ui/Button';

interface ButtonPlaygroundProps {
  onCopySuccess: (text: string) => void;
}

export const ButtonPlayground: React.FC<ButtonPlaygroundProps> = ({ onCopySuccess }) => {
  const [variant, setVariant] = useState<ButtonVariant>('primary');
  const [size, setSize] = useState<ButtonSize>('md');
  const [buttonText, setButtonText] = useState('시작하기');
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [hasLeftIcon, setHasLeftIcon] = useState(true);
  const [hasRightIcon, setHasRightIcon] = useState(false);
  const [isFullWidth, setIsFullWidth] = useState(false);
  const [codeTab, setCodeTab] = useState<'react' | 'tailwind' | 'css'>('react');

  const variants: { id: ButtonVariant; label: string; desc: string }[] = [
    { id: 'primary', label: 'Solid Sky', desc: '★ 엄마의 맑은 하늘 (Primary Core)' },
    { id: 'secondary', label: 'Solid Lavender', desc: '아빠의 겐가 라벤더 (Secondary)' },
    { id: 'accent', label: 'Baby Peach', desc: '아기의 생기 넘치는 보색 CTA' },
    { id: 'gradient', label: 'Family Harmony', desc: '엄마의 하늘 + 아빠의 라벤더' },
    { id: 'soft-sky', label: 'Soft Sky', desc: '청량한 톤온톤' },
    { id: 'soft-lavender', label: 'Soft Lavender', desc: '감각적인 톤온톤' },
    { id: 'soft-butter', label: 'Soft Butter', desc: '아기 햇살 보색 톤온톤' },
    { id: 'outline', label: 'Outlined', desc: '경계선 버튼' },
    { id: 'ghost', label: 'Ghost', desc: '텍스트 버튼' },
  ];

  const sizes: { id: ButtonSize; label: string; height: string }[] = [
    { id: 'xs', label: 'XS (28px)', height: '28px' },
    { id: 'sm', label: 'SM (36px)', height: '36px' },
    { id: 'md', label: 'MD (44px)', height: '44px' },
    { id: 'lg', label: 'LG (52px)', height: '52px' },
    { id: 'xl', label: 'XL (60px)', height: '60px' },
  ];

  // Generate code snippets
  const getReactCode = () => {
    let props = `variant="${variant}" size="${size}"`;
    if (isLoading) props += ' isLoading';
    if (isDisabled) props += ' disabled';
    if (hasLeftIcon) props += ' leftIcon={<Sparkles className="w-4 h-4" />}';
    if (hasRightIcon) props += ' rightIcon={<ArrowRight className="w-4 h-4" />}';
    if (isFullWidth) props += ' fullWidth';

    return `<Button ${props}>\n  ${buttonText}\n</Button>`;
  };

  const getTailwindCode = () => {
    let classes = 'inline-flex items-center justify-center font-medium transition-all select-none';
    if (size === 'xs') classes += ' h-7 px-2.5 text-xs rounded-[6px] gap-1.5';
    if (size === 'sm') classes += ' h-9 px-3.5 text-sm rounded-[8px] gap-1.5';
    if (size === 'md') classes += ' h-11 px-4 text-[15px] rounded-[10px] gap-2';
    if (size === 'lg') classes += ' h-[52px] px-6 text-base rounded-[12px] gap-2.5 font-semibold';
    if (size === 'xl') classes += ' h-[60px] px-8 text-lg rounded-[14px] gap-3 font-semibold';

    if (variant === 'primary') classes += ' bg-[#38BDF8] hover:bg-[#0EA5E9] text-white shadow-sm hover:-translate-y-0.5';
    if (variant === 'secondary') classes += ' bg-[#A855F7] hover:bg-[#9333EA] text-white shadow-sm hover:-translate-y-0.5';
    if (variant === 'accent') classes += ' bg-[#FB923C] hover:bg-[#F97316] text-white shadow-sm hover:-translate-y-0.5';
    if (variant === 'gradient') classes += ' bg-gradient-to-r from-[#38BDF8] to-[#A855F7] text-white shadow-md hover:-translate-y-0.5';
    if (variant === 'soft-sky') classes += ' bg-[#E0F2FE] text-[#0369A1] hover:bg-[#BAE6FD]';
    if (variant === 'soft-lavender') classes += ' bg-[#F3E8FF] text-[#7E22CE] hover:bg-[#E9D5FF]';
    if (variant === 'soft-butter') classes += ' bg-[#FEF9C3] text-[#854D0E] hover:bg-[#FEF08A]';
    if (variant === 'outline') classes += ' border border-[#E2E8F0] hover:bg-[#F8FAFC] text-[#334155]';
    if (variant === 'ghost') classes += ' hover:bg-[#F1F5F9] text-[#475569]';

    return `<button class="${classes}">\n  ${hasLeftIcon ? '<span>✦</span> ' : ''}${buttonText}${hasRightIcon ? ' <span>→</span>' : ''}\n</button>`;
  };

  const getCssCode = () => {
    let classes = `gds-btn gds-btn-${size}`;
    if (variant === 'primary') classes += ' gds-btn-primary';
    if (variant === 'secondary') classes += ' gds-btn-secondary';
    if (variant === 'accent') classes += ' gds-btn-accent';
    if (variant === 'gradient') classes += ' gds-btn-gradient';
    if (variant.startsWith('soft-')) classes += ` gds-btn-${variant}`;
    if (variant === 'outline') classes += ' gds-btn-outline';
    if (variant === 'ghost') classes += ' gds-btn-ghost';

    return `<!-- Requires gds-components.css -->\n<button class="${classes}" ${isDisabled ? 'disabled' : ''}>\n  ${buttonText}\n</button>`;
  };

  const currentSnippet = codeTab === 'react' ? getReactCode() : codeTab === 'tailwind' ? getTailwindCode() : getCssCode();

  const handleCopyCode = () => {
    navigator.clipboard.writeText(currentSnippet);
    onCopySuccess('버튼 코드가 복사되었습니다!');
  };

  return (
    <section id="buttons" className="py-16 md:py-24 border-t border-[#E2E8F0] bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-[#A855F7] bg-[#F3E8FF] px-2.5 py-1 rounded-full">
            Component Specification
          </span>
          <h2 className="text-3xl font-extrabold text-[#0F172A] tracking-tight">
            버튼 컴포넌트 플레이그라운드
          </h2>
          <p className="text-base text-[#64748B] max-w-2xl">
            쏘카 디자인 시스템 규격처럼 모든 상태(Hover, Active, Loading, Disabled)와 사이즈를 실시간으로 테스트하고 즉시 복사하세요.
          </p>
        </div>

        {/* Playground Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Controls (5 cols) */}
          <div className="lg:col-span-5 bg-[#F8FAFC] border border-[#E2E8F0] rounded-[18px] p-6 space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-[#E2E8F0]">
              <span className="text-sm font-bold text-[#0F172A] flex items-center gap-2">
                <Sliders className="w-4 h-4 text-[#A855F7]" /> 속성 제어 (Props)
              </span>
              <button 
                onClick={() => {
                  setVariant('primary');
                  setSize('md');
                  setIsLoading(false);
                  setIsDisabled(false);
                  setHasLeftIcon(true);
                  setHasRightIcon(false);
                  setIsFullWidth(false);
                  setButtonText('시작하기');
                }}
                className="text-xs text-[#64748B] hover:text-[#0F172A] flex items-center gap-1"
              >
                <RotateCcw className="w-3 h-3" /> 초기화
              </button>
            </div>

            {/* Button Label Input */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-[#334155]">버튼 텍스트</label>
              <input
                type="text"
                value={buttonText}
                onChange={(e) => setButtonText(e.target.value)}
                className="w-full h-10 px-3 text-sm bg-white border border-[#E2E8F0] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#C084FC]"
              />
            </div>

            {/* Variant Selector */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-[#334155]">스타일 변형 (Variants)</label>
              <div className="grid grid-cols-3 gap-1.5">
                {variants.map((v) => (
                  <button
                    key={v.id}
                    onClick={() => setVariant(v.id)}
                    className={`px-2.5 py-2 text-xs font-medium rounded-lg border text-left truncate transition-all ${
                      variant === v.id
                        ? 'bg-white border-[#A855F7] text-[#7E22CE] shadow-sm font-semibold'
                        : 'bg-white/60 border-[#E2E8F0] text-[#475569] hover:bg-white'
                    }`}
                  >
                    {v.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selector */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-[#334155]">사이즈 (Size)</label>
              <div className="grid grid-cols-5 gap-1">
                {sizes.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setSize(s.id)}
                    className={`py-1.5 text-xs font-medium rounded-md border text-center transition-all ${
                      size === s.id
                        ? 'bg-[#0F172A] border-[#0F172A] text-white font-semibold'
                        : 'bg-white border-[#E2E8F0] text-[#475569] hover:bg-[#F1F5F9]'
                    }`}
                  >
                    {s.id.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            {/* Toggle Switches */}
            <div className="space-y-3 pt-2">
              <label className="text-xs font-semibold text-[#334155]">상태 및 옵션</label>
              <div className="grid grid-cols-2 gap-2 text-xs font-medium text-[#334155]">
                <label className="flex items-center gap-2 bg-white p-2 rounded-lg border border-[#E2E8F0] cursor-pointer">
                  <input
                    type="checkbox"
                    checked={isLoading}
                    onChange={(e) => setIsLoading(e.target.checked)}
                    className="accent-[#A855F7]"
                  />
                  <span>로딩 (Loading)</span>
                </label>

                <label className="flex items-center gap-2 bg-white p-2 rounded-lg border border-[#E2E8F0] cursor-pointer">
                  <input
                    type="checkbox"
                    checked={isDisabled}
                    onChange={(e) => setIsDisabled(e.target.checked)}
                    className="accent-[#A855F7]"
                  />
                  <span>비활성화 (Disabled)</span>
                </label>

                <label className="flex items-center gap-2 bg-white p-2 rounded-lg border border-[#E2E8F0] cursor-pointer">
                  <input
                    type="checkbox"
                    checked={hasLeftIcon}
                    onChange={(e) => setHasLeftIcon(e.target.checked)}
                    className="accent-[#A855F7]"
                  />
                  <span>왼쪽 아이콘</span>
                </label>

                <label className="flex items-center gap-2 bg-white p-2 rounded-lg border border-[#E2E8F0] cursor-pointer">
                  <input
                    type="checkbox"
                    checked={hasRightIcon}
                    onChange={(e) => setHasRightIcon(e.target.checked)}
                    className="accent-[#A855F7]"
                  />
                  <span>오른쪽 아이콘</span>
                </label>
              </div>

              <label className="flex items-center gap-2 bg-white p-2.5 rounded-lg border border-[#E2E8F0] cursor-pointer text-xs font-medium text-[#334155]">
                <input
                  type="checkbox"
                  checked={isFullWidth}
                  onChange={(e) => setIsFullWidth(e.target.checked)}
                  className="accent-[#A855F7]"
                />
                <span>가로 전체 채우기 (Full Width)</span>
              </label>
            </div>

          </div>

          {/* Right Preview & Code Viewer (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Live Interactive Viewport */}
            <div className="bg-white border border-[#E2E8F0] rounded-[18px] p-8 shadow-sm flex flex-col items-center justify-center min-h-[220px] relative overflow-hidden">
              
              {/* Subtle grid pattern background */}
              <div 
                className="absolute inset-0 opacity-40 pointer-events-none"
                style={{
                  backgroundImage: 'radial-gradient(#CBD5E1 1px, transparent 1px)',
                  backgroundSize: '16px 16px',
                }}
              />

              <div className="text-center z-10 w-full flex flex-col items-center justify-center">
                <Button
                  variant={variant}
                  size={size}
                  isLoading={isLoading}
                  disabled={isDisabled}
                  leftIcon={hasLeftIcon ? <Sparkles className="w-4 h-4" /> : undefined}
                  rightIcon={hasRightIcon ? <ArrowRight className="w-4 h-4" /> : undefined}
                  fullWidth={isFullWidth}
                >
                  {buttonText}
                </Button>

                <p className="text-[11px] text-[#94A3B8] mt-4 font-mono">
                  Variant: {variant} · Size: {size.toUpperCase()} · Radius: 10px
                </p>
              </div>
            </div>

            {/* Code View Tabs */}
            <div className="bg-[#0F172A] rounded-[18px] overflow-hidden border border-[#1E293B] shadow-xl text-left">
              <div className="flex items-center justify-between px-4 py-2.5 bg-[#1E293B]/70 border-b border-[#334155]">
                <div className="flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-[#A855F7]" />
                  <span className="text-xs font-bold text-slate-300">생성된 코드</span>
                  <div className="flex items-center ml-2 space-x-1">
                    <button
                      onClick={() => setCodeTab('react')}
                      className={`text-xs px-2.5 py-1 rounded-md transition-colors ${
                        codeTab === 'react' ? 'bg-[#A855F7] text-white font-semibold' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      React JSX
                    </button>
                    <button
                      onClick={() => setCodeTab('tailwind')}
                      className={`text-xs px-2.5 py-1 rounded-md transition-colors ${
                        codeTab === 'tailwind' ? 'bg-[#38BDF8] text-slate-900 font-semibold' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      Tailwind HTML
                    </button>
                    <button
                      onClick={() => setCodeTab('css')}
                      className={`text-xs px-2.5 py-1 rounded-md transition-colors ${
                        codeTab === 'css' ? 'bg-[#FEF08A] text-slate-900 font-semibold' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      Pure CSS
                    </button>
                  </div>
                </div>

                <button
                  onClick={handleCopyCode}
                  className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-white bg-[#334155]/60 hover:bg-[#334155] px-2.5 py-1 rounded-md transition-all"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>복사</span>
                </button>
              </div>

              <div className="p-4 overflow-x-auto font-mono text-xs text-slate-300 leading-relaxed">
                <pre>{currentSnippet}</pre>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
