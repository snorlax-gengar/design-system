import React, { useState, useEffect } from 'react';
import { Type, Check, Copy } from 'lucide-react';

type FontKey = 'gowun-dodum' | 'nanum-round' | 'hybrid-gowun' | 'pretendard' | 'line-seed';

interface FontOption {
  key: FontKey;
  name: string;
  creator: string;
  badge: string;
  description: string;
  license: string;
  fontFamilyRule: string;
}

export const TypographySection: React.FC = () => {
  const [selectedFont, setSelectedFont] = useState<FontKey>('gowun-dodum');
  const [previewText, setPreviewText] = useState('가족을 품어주는 맑은 하늘빛, Gengarileo Design System 2026');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const fontOptions: FontOption[] = [
    {
      key: 'gowun-dodum',
      name: '고운돋움 (Gowun Dodum)',
      creator: '양희재 / Google Fonts',
      badge: '★ 추천 1위 · 둥글둥글 따뜻한 감성',
      description: '구글 폰트 공식 등재 100% 무료 오픈소스. 모서리와 획 끝이 둥글둥글하고 포근하여 가족의 온기와 하늘빛에 가장 찰떡으로 어울립니다.',
      license: 'SIL Open Font License (특정 기업 종속 제로 · 상업적 무료)',
      fontFamilyRule: "'Gowun Dodum', sans-serif",
    },
    {
      key: 'nanum-round',
      name: '나눔스퀘어 라운드 (NanumSquare Round)',
      creator: '네이버 사회공헌 오픈소스',
      badge: '경쾌한 모던 둥근고딕',
      description: '네모꼴을 탈피한 기하학적 뼈대에 모서리를 부드럽게 굴려 친근하고 경쾌한 인상을 주는 대표적인 둥근 서체입니다.',
      license: 'SIL Open Font License (상업적 이용 100% 무료)',
      fontFamilyRule: "'NanumSquareRound', sans-serif",
    },
    {
      key: 'hybrid-gowun',
      name: 'GDS 하이브리드 (고운돋움 제목 + 프리텐다드 본문)',
      creator: 'GDS Design System Pairing',
      badge: '시각적 온기 + 극상의 가독성',
      description: '큰 타이틀과 버튼에는 둥글둥글한 고운돋움의 감성을 살리고, 작은 데이터/표/본문에는 프리텐다드의 선명한 가독성을 결합했습니다.',
      license: '100% 상업적 무료 오픈소스',
      fontFamilyRule: "Heading: 'Gowun Dodum' / Body: 'Pretendard'",
    },
    {
      key: 'pretendard',
      name: 'Pretendard (프리텐다드)',
      creator: '길형진 (orioncactus)',
      badge: '대한민국 IT 테크 표준',
      description: '토스, 당근, 인프런 등 테크 서비스들의 국민 표준 고딕. 9단계 굵기와 완벽한 자간으로 정밀하고 스마트한 느낌을 줍니다.',
      license: 'SIL Open Font License (상업적 이용 100% 무료)',
      fontFamilyRule: "'Pretendard', -apple-system, sans-serif",
    },
  ];

  // Set html[data-font] on font change
  useEffect(() => {
    document.documentElement.setAttribute('data-font', selectedFont);
    localStorage.setItem('gds-selected-font', selectedFont);
  }, [selectedFont]);

  // Load initial font from localStorage if exists
  useEffect(() => {
    const saved = localStorage.getItem('gds-selected-font') as FontKey | null;
    if (saved && ['line-seed', 'pretendard', 'suit', 'hybrid'].includes(saved)) {
      setSelectedFont(saved);
      document.documentElement.setAttribute('data-font', saved);
    }
  }, []);

  const handleCopySnippet = (snippet: string, key: string) => {
    navigator.clipboard.writeText(snippet);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const typeScales = [
    { name: 'Display Title', size: '48px (3rem)', weight: 'ExtraBold (800)', sample: '미래를 디자인하는 시각 언어', class: 'text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight' },
    { name: 'Heading 1', size: '36px (2.25rem)', weight: 'Bold (700)', sample: '감성과 기능이 만나는 지점', class: 'text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight' },
    { name: 'Heading 2', size: '28px (1.75rem)', weight: 'Bold (700)', sample: '체계적인 디자인 토큰 시스템', class: 'text-xl sm:text-2xl md:text-3xl font-bold' },
    { name: 'Heading 3', size: '20px (1.25rem)', weight: 'SemiBold (600)', sample: '어떤 프로젝트에서도 즉시 재사용', class: 'text-lg sm:text-xl font-semibold' },
    { name: 'Body Large', size: '18px (1.125rem)', weight: 'Medium (500)', sample: 'Gengarileo Design System은 완벽한 폰트 위계를 제공합니다.', class: 'text-base sm:text-lg text-slate-700' },
    { name: 'Body Medium (기본)', size: '15px (0.938rem)', weight: 'Regular (400)', sample: '사용자가 가장 오랜 시간 편안하게 읽을 수 있는 표준 본문 스타일입니다.', class: 'text-[15px] text-slate-600' },
    { name: 'Body Small', size: '13px (0.813rem)', weight: 'Regular (400)', sample: '보조 설명문, 테이블 셀, 리스트 보조 텍스트에 최적화되어 있습니다.', class: 'text-[13px] text-slate-500' },
    { name: 'Caption / Label', size: '11px (0.688rem)', weight: 'SemiBold (600)', sample: 'STATUS: RELEASED · WCAG 2.1 AA COMPLIANT', class: 'text-[11px] font-semibold uppercase tracking-wider text-slate-400' },
  ];

  const currentOption = fontOptions.find((f) => f.key === selectedFont) || fontOptions[0];

  return (
    <section id="typography" className="py-12 border-b border-[#EFEFEF]">
      <div className="space-y-10">
        
        {/* Header */}
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
            03. FOUNDATIONS / TYPOGRAPHY STUDIO
          </span>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-1">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
              타이포그래피 서체 선정 & 스튜디오
            </h2>
            <div className="flex items-center gap-1.5 text-xs text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>실시간 사이트 전체 폰트 반영 중</span>
            </div>
          </div>
          <p className="text-sm text-slate-500 mt-1 max-w-3xl">
            서체를 선택하면 <strong>현재 사이트의 헤더, 버튼, 카드, 캘린더 등 전체 UI의 글꼴이 실시간으로 변경</strong>됩니다. 직접 눌러보며 우리 가족과 프로덕트에 가장 잘 어울리는 서체를 결정해보세요!
          </p>
        </div>

        {/* 1. Live Font Selector Cards (4 Options) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {fontOptions.map((font) => {
            const isSelected = selectedFont === font.key;
            return (
              <div
                key={font.key}
                onClick={() => setSelectedFont(font.key)}
                className={`p-5 rounded-xl border transition-all cursor-pointer relative flex flex-col justify-between ${
                  isSelected
                    ? 'bg-sky-50/40 border-[#0284C7] shadow-sm ring-2 ring-sky-200'
                    : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50/50'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-bold text-slate-900 flex items-center gap-2">
                      <span>{font.name}</span>
                      {isSelected && <Check className="w-4 h-4 text-[#0284C7]" />}
                    </span>
                    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                      font.key === 'gowun-dodum' || font.key === 'hybrid-gowun'
                        ? 'bg-purple-100 text-purple-700'
                        : 'bg-slate-100 text-slate-600'
                    }`}>
                      {font.badge}
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed mb-3">
                    {font.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100/80 flex items-center justify-between text-[11px] text-slate-400">
                  <span>{font.creator}</span>
                  <span className="font-mono text-slate-500">{font.fontFamilyRule}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* 2. Interactive Font Playground Canvas */}
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-200">
            <div className="flex items-center gap-2">
              <Type className="w-4 h-4 text-[#0284C7]" />
              <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                현재 활성화된 서체: {currentOption.name}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] text-slate-500">{currentOption.license}</span>
            </div>
          </div>

          {/* Test Input */}
          <div className="space-y-1.5">
            <label className="text-[11px] font-semibold text-slate-500">
              테스트 문구 직접 입력해보기:
            </label>
            <input
              type="text"
              value={previewText}
              onChange={(e) => setPreviewText(e.target.value)}
              className="w-full px-3.5 py-2 text-sm bg-white border border-slate-200 rounded-lg outline-none focus:border-[#38BDF8] transition-colors"
            />
          </div>

          {/* Weight Comparison */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            <div className="bg-white p-4 rounded-lg border border-slate-200 space-y-1">
              <span className="text-[11px] font-mono text-slate-400">Regular (400)</span>
              <p className="text-base text-slate-800 font-normal truncate">
                {previewText}
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-slate-200 space-y-1">
              <span className="text-[11px] font-mono text-slate-400">SemiBold (600)</span>
              <p className="text-base text-slate-900 font-semibold truncate">
                {previewText}
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-slate-200 space-y-1">
              <span className="text-[11px] font-mono text-slate-400">Bold (700)</span>
              <p className="text-base text-black font-bold truncate">
                {previewText}
              </p>
            </div>
          </div>

          {/* Number & Special Characters Test */}
          <div className="bg-white p-4 rounded-lg border border-slate-200">
            <span className="text-[11px] font-mono text-slate-400 block mb-1">
              숫자, 기호, 영문 정렬 테스트 (Currency & Code):
            </span>
            <div className="text-sm font-medium text-slate-800 tracking-tight flex flex-wrap items-center gap-3">
              <span className="bg-sky-50 text-[#0284C7] px-2 py-0.5 rounded font-mono">
                ₩1,250,000 / $49.00 USD
              </span>
              <span>1234567890 · % @ & + = # [ ] ( )</span>
              <span className="text-purple-600 font-bold">Gengarileo Family Core v1.2</span>
            </div>
          </div>

          {/* Quick Copy Snippet */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2 text-xs">
            <span className="text-slate-500 font-mono">
              CSS: font-family: {currentOption.fontFamilyRule};
            </span>
            <button
              onClick={() => handleCopySnippet(`font-family: ${currentOption.fontFamilyRule};`, 'css-font')}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0284C7] hover:text-[#0369A1]"
            >
              {copiedKey === 'css-font' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedKey === 'css-font' ? '복사됨!' : 'CSS font-family 복사'}</span>
            </button>
          </div>
        </div>

        {/* 3. Type Scales Hierarchy Table */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-800">
              타이포그래피 위계 (Type Scales Scale)
            </h3>
            <span className="text-xs text-slate-400">8단계 규격화 스케일</span>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-2xs divide-y divide-slate-100">
            {typeScales.map((item, idx) => (
              <div 
                key={idx} 
                className="p-4 sm:p-5 flex flex-col lg:flex-row lg:items-center justify-between gap-3 hover:bg-slate-50/60 transition-colors"
              >
                <div className="w-full lg:w-60 shrink-0">
                  <div className="text-xs font-bold text-slate-900">{item.name}</div>
                  <div className="text-[11px] text-slate-400 font-mono mt-0.5">
                    {item.size} · {item.weight}
                  </div>
                </div>

                <div className="flex-1">
                  <div className={item.class}>{item.sample}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
