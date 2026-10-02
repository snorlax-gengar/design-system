import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { COLOR_PALETTES, type ColorFamily } from '../../tokens/colors';

interface ColorSectionProps {
  onCopySuccess: (text: string) => void;
}

export const ColorSection: React.FC<ColorSectionProps> = ({ onCopySuccess }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [copyFormat, setCopyFormat] = useState<'hex' | 'var'>('hex');
  const [copiedHex, setCopiedHex] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: '전체 패밀리 팔레트' },
    { id: 'primary', label: 'Primary (엄마의 하늘)' },
    { id: 'secondary', label: 'Secondary (아빠의 라벤더)' },
    { id: 'complementary', label: 'Family Accent (아기 햇살/피치)' },
    { id: 'neutral', label: 'Home Slate (보금자리)' },
  ];

  const filteredPalettes = COLOR_PALETTES.filter((p) => {
    if (activeCategory === 'all') return true;
    return p.category === activeCategory;
  });

  const handleCopy = (family: ColorFamily, step: string, hex: string) => {
    let copyText = hex;
    if (copyFormat === 'var') {
      copyText = `var(--gds-color-${family.id}-${step})`;
    }

    navigator.clipboard.writeText(copyText);
    setCopiedHex(hex);
    onCopySuccess(copyText);

    setTimeout(() => {
      setCopiedHex(null);
    }, 2000);
  };

  return (
    <section id="colors" className="py-16 md:py-24 border-t border-[#E2E8F0] bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0284C7] bg-[#E0F2FE] px-2.5 py-1 rounded-full">
              Color Token System
            </span>
            <h2 className="text-3xl font-extrabold text-[#0F172A] tracking-tight">
              디자인 토큰 컬러 매트릭스
            </h2>
            <p className="text-base text-[#64748B] max-w-2xl">
              색상 카드를 클릭하면 코드가 즉시 복사됩니다. 50단계부터 950단계까지의 완벽한 스케일을 제공합니다.
            </p>
          </div>

          {/* Copy Format Switcher */}
          <div className="flex items-center gap-2 bg-white border border-[#E2E8F0] p-1 rounded-[10px] self-start md:self-auto text-xs font-semibold">
            <span className="text-[#64748B] px-2">복사 형식:</span>
            <button
              onClick={() => setCopyFormat('hex')}
              className={`px-3 py-1 rounded-[7px] transition-colors ${
                copyFormat === 'hex' ? 'bg-[#0F172A] text-white' : 'text-[#475569] hover:bg-[#F1F5F9]'
              }`}
            >
              HEX (#A855F7)
            </button>
            <button
              onClick={() => setCopyFormat('var')}
              className={`px-3 py-1 rounded-[7px] transition-colors ${
                copyFormat === 'var' ? 'bg-[#0F172A] text-white' : 'text-[#475569] hover:bg-[#F1F5F9]'
              }`}
            >
              CSS Var (var(--gds-...))
            </button>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveCategory(c.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                activeCategory === c.id
                  ? 'bg-[#0F172A] text-white shadow-sm'
                  : 'bg-white text-[#475569] border border-[#E2E8F0] hover:border-[#CBD5E1]'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Color Families List */}
        <div className="space-y-12">
          {filteredPalettes.map((family) => (
            <div key={family.id} className="bg-white rounded-[16px] border border-[#E2E8F0] p-6 shadow-sm space-y-6">
              
              {/* Palette Title & Meta */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#F1F5F9] gap-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span
                      className="w-4 h-4 rounded-full border border-black/10 shrink-0"
                      style={{ backgroundColor: family.baseHex }}
                    />
                    <h3 className="text-lg font-bold text-[#0F172A]">{family.koreanName}</h3>
                    <span className="text-xs text-[#94A3B8] font-mono">({family.name})</span>
                  </div>
                  <p className="text-xs text-[#64748B]">{family.description}</p>
                </div>
                <div className="text-left sm:text-right">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded bg-[#F8FAFC] border border-[#E2E8F0] text-[#334155]">
                    주요 용도: {family.role}
                  </span>
                </div>
              </div>

              {/* Swatches Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-11 gap-3">
                {family.shades.map((shade) => {
                  const isCopied = copiedHex === shade.hex;
                  return (
                    <div
                      key={shade.step}
                      onClick={() => handleCopy(family, shade.step, shade.hex)}
                      className="group cursor-pointer rounded-xl border border-[#E2E8F0] overflow-hidden hover:shadow-md hover:border-[#CBD5E1] transition-all duration-200 flex flex-col"
                    >
                      {/* Color Preview Block */}
                      <div
                        className="h-20 sm:h-24 w-full relative p-2.5 flex flex-col justify-between transition-transform group-hover:scale-[1.02]"
                        style={{ backgroundColor: shade.hex }}
                      >
                        <div className="flex items-center justify-between">
                          <span
                            className={`text-xs font-bold font-mono px-1.5 py-0.5 rounded backdrop-blur-md ${
                              shade.isDarkText
                                ? 'text-[#0F172A] bg-white/70'
                                : 'text-white bg-black/30'
                            }`}
                          >
                            {shade.step}
                          </span>

                          <span
                            className={`p-1 rounded-md transition-opacity opacity-0 group-hover:opacity-100 ${
                              shade.isDarkText
                                ? 'text-[#0F172A] bg-white/80'
                                : 'text-white bg-black/40'
                            }`}
                          >
                            {isCopied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                          </span>
                        </div>

                        {/* Hex Code Badge */}
                        <div className="text-left">
                          <span
                            className={`text-[11px] font-mono font-medium ${
                              shade.isDarkText ? 'text-[#1E293B]' : 'text-white/95'
                            }`}
                          >
                            {shade.hex}
                          </span>
                        </div>
                      </div>

                      {/* Info Label Below */}
                      <div className="p-2 bg-white flex-1 flex flex-col justify-between text-left">
                        <p className="text-[11px] text-[#64748B] line-clamp-2 leading-tight">
                          {shade.usage}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
