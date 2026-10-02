import React, { useState, useEffect } from 'react';
import { 
  Download, 
  Search, 
  Menu, 
  X, 
  ChevronDown, 
  Check,
  Type
} from 'lucide-react';
import { GengarileoLogo } from '../ui/GengarileoLogo';

interface LDSHeaderProps {
  activeSection: string;
  onNavigate: (id: string) => void;
  onOpenExportModal: () => void;
  onToggleSidebarMobile?: () => void;
  onSearchQuery?: (q: string) => void;
}

export const LDSHeader: React.FC<LDSHeaderProps> = ({
  activeSection,
  onNavigate,
  onOpenExportModal,
  onToggleSidebarMobile,
  onSearchQuery,
}) => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchVal, setSearchVal] = useState('');
  const [versionDropdownOpen, setVersionDropdownOpen] = useState(false);
  const [fontDropdownOpen, setFontDropdownOpen] = useState(false);
  const [currentFont, setCurrentFont] = useState('gowun-dodum');

  useEffect(() => {
    const saved = localStorage.getItem('gds-selected-font');
    if (saved) {
      setCurrentFont(saved);
      document.documentElement.setAttribute('data-font', saved);
    }
  }, []);

  const handleSelectFont = (fontKey: string) => {
    setCurrentFont(fontKey);
    document.documentElement.setAttribute('data-font', fontKey);
    localStorage.setItem('gds-selected-font', fontKey);
    setFontDropdownOpen(false);
  };

  const topTabs = [
    { id: 'overview', label: 'Overview', targetId: 'page-header' },
    { id: 'brand', label: 'Brand & Assets', targetId: 'brand-asset' },
    { id: 'foundations', label: 'Foundations', targetId: 'colors' },
    { id: 'components', label: 'Components', targetId: 'buttons' },
    { id: 'guides', label: 'Guides', targetId: 'quickstart' },
  ];

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setSearchVal(val);
    if (onSearchQuery) {
      onSearchQuery(val);
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchVal.trim()) return;
    const q = searchVal.toLowerCase();
    if (q.includes('btn') || q.includes('버튼') || q.includes('button')) {
      onNavigate('buttons');
    } else if (q.includes('색') || q.includes('color') || q.includes('토큰') || q.includes('token') || q.includes('sky')) {
      onNavigate('colors');
    } else if (q.includes('폰트') || q.includes('font') || q.includes('typo')) {
      onNavigate('typography');
    } else if (q.includes('아이콘') || q.includes('icon') || q.includes('파비콘') || q.includes('favicon') || q.includes('로고')) {
      onNavigate('brand-asset');
    } else if (q.includes('셀렉트') || q.includes('토글') || q.includes('캘린더') || q.includes('체크')) {
      onNavigate('form-controls');
    } else if (q.includes('tailwind') || q.includes('설치') || q.includes('가이드')) {
      onNavigate('quickstart');
    }
    setSearchOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#EFEFEF] transition-all h-[76px] lg:h-[84px] flex items-center">
      <div className="w-full px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        
        {/* Left: Mobile Toggle & Brand Logo */}
        <div className="flex items-center gap-3 lg:gap-5">
          {/* Mobile Sidebar Hamburger Toggle */}
          <button
            onClick={onToggleSidebarMobile}
            className="lg:hidden p-2 text-slate-700 hover:text-black hover:bg-slate-100 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            <Menu className="w-5 h-5" />
          </button>

          {/* Logo & System Name */}
          <div 
            onClick={() => onNavigate('page-header')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <GengarileoLogo size={36} variant="gradient" />
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-base sm:text-lg tracking-tight text-slate-900 group-hover:text-[#0284C7] transition-colors">
                  GDS
                </span>
                <span className="hidden sm:inline-block text-xs font-semibold text-slate-400">
                  /
                </span>
                <span className="hidden sm:inline-block font-semibold text-xs tracking-wide text-slate-600">
                  Gengarileo Design System
                </span>
              </div>
              <span className="text-[11px] font-medium text-slate-400">
                Enterprise Architecture & Family Edition
              </span>
            </div>
          </div>

          {/* Edition / Version Selector Dropdown */}
          <div className="relative hidden md:block">
            <button
              onClick={() => setVersionDropdownOpen(!versionDropdownOpen)}
              className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200/80 rounded-md transition-colors"
            >
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
              <span>v1.2.0 Family</span>
              <ChevronDown className={`w-3.5 h-3.5 text-slate-500 transition-transform ${versionDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {versionDropdownOpen && (
              <div 
                className="absolute left-0 mt-2 w-56 bg-white border border-slate-200 rounded-xl shadow-xl py-2 z-50"
                onMouseLeave={() => setVersionDropdownOpen(false)}
              >
                <div className="px-3 py-1.5 border-b border-slate-100">
                  <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Release Channel</p>
                  <p className="text-xs font-bold text-slate-900">Family Edition 2026</p>
                </div>
                <div className="px-3 py-2 space-y-1">
                  <div className="flex items-center justify-between text-xs font-medium text-slate-800 bg-sky-50 px-2 py-1 rounded">
                    <span>v1.2.0 (Active)</span>
                    <Check className="w-3.5 h-3.5 text-[#0284C7]" />
                  </div>
                  <div className="flex items-center justify-between text-xs text-slate-500 px-2 py-1">
                    <span>v1.0.0 (Legacy)</span>
                    <span className="text-[10px] text-slate-400">Archived</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Font Selector Dropdown */}
          <div className="relative hidden md:block">
            <button
              onClick={() => setFontDropdownOpen(!fontDropdownOpen)}
              className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200/80 rounded-md transition-colors"
              title="서체 실시간 변경"
            >
              <Type className="w-3.5 h-3.5 text-[#0284C7]" />
              <span>
                {currentFont === 'gowun-dodum' ? '고운돋움 (둥근글꼴)' :
                 currentFont === 'nanum-round' ? '나눔스퀘어 라운드' :
                 currentFont === 'hybrid-gowun' ? 'GDS 하이브리드' :
                 currentFont === 'line-seed' ? 'LINE Seed' : 'Pretendard'}
              </span>
              <ChevronDown className={`w-3.5 h-3.5 text-slate-500 transition-transform ${fontDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {fontDropdownOpen && (
              <div 
                className="absolute left-0 mt-2 w-64 bg-white border border-slate-200 rounded-xl shadow-xl py-2 z-50"
                onMouseLeave={() => setFontDropdownOpen(false)}
              >
                <div className="px-3 py-1.5 border-b border-slate-100">
                  <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Brand Font Family</p>
                  <p className="text-xs font-bold text-slate-900">100% 무료 둥근 서체 선택</p>
                </div>
                <div className="px-2 py-1.5 space-y-1">
                  {[
                    { key: 'gowun-dodum', name: '고운돋움 (추천 1위)', sub: '구글 폰트 둥글둥글 따뜻한 감성' },
                    { key: 'nanum-round', name: '나눔스퀘어 라운드', sub: 'OFL 오픈소스 둥근고딕' },
                    { key: 'hybrid-gowun', name: 'GDS 하이브리드', sub: '둥근 제목 + 프리텐다드 본문' },
                    { key: 'pretendard', name: 'Pretendard', sub: '대한민국 IT 테크 표준' },
                  ].map((f) => (
                    <button
                      key={f.key}
                      onClick={() => handleSelectFont(f.key)}
                      className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs flex items-center justify-between transition-colors ${
                        currentFont === f.key ? 'bg-sky-50 text-[#0284C7] font-bold' : 'hover:bg-slate-50 text-slate-700'
                      }`}
                    >
                      <div>
                        <div>{f.name}</div>
                        <div className="text-[10px] text-slate-400">{f.sub}</div>
                      </div>
                      {currentFont === f.key && <Check className="w-3.5 h-3.5 text-[#0284C7]" />}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Center: LDS Top Navigation Tabs */}
        <nav className="hidden xl:flex items-center gap-1">
          {topTabs.map((tab) => {
            const isActive = activeSection === tab.id || 
              (tab.id === 'brand' && activeSection === 'brand-asset') ||
              (tab.id === 'foundations' && (activeSection === 'colors' || activeSection === 'typography')) ||
              (tab.id === 'components' && (activeSection === 'buttons' || activeSection === 'form-controls')) ||
              (tab.id === 'guides' && (activeSection === 'quickstart' || activeSection === 'showcase'));

            return (
              <button
                key={tab.id}
                onClick={() => onNavigate(tab.targetId)}
                className={`px-3.5 py-1.5 text-sm font-semibold rounded-md transition-all ${
                  isActive 
                    ? 'text-black bg-slate-100' 
                    : 'text-slate-600 hover:text-black hover:bg-slate-50'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </nav>

        {/* Right: Quick Search & Export Actions */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          
          {/* LDS-style Search Input / Button */}
          <div className="relative">
            <form onSubmit={handleSearchSubmit} className="hidden sm:flex items-center">
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  value={searchVal}
                  onChange={handleSearchChange}
                  placeholder="컴포넌트, 토큰 검색..."
                  className="w-44 lg:w-56 pl-9 pr-8 py-1.5 text-xs bg-slate-50 hover:bg-slate-100 focus:bg-white text-slate-800 placeholder-slate-400 border border-slate-200 focus:border-[#38BDF8] rounded-lg outline-none transition-all"
                />
                {searchVal && (
                  <button
                    type="button"
                    onClick={() => { setSearchVal(''); onSearchQuery?.(''); }}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </form>

            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="sm:hidden p-2 text-slate-600 hover:text-black hover:bg-slate-100 rounded-lg"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
          </div>

          {/* Export Tokens Action Button */}
          <button
            onClick={onOpenExportModal}
            className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-black rounded-lg shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <Download className="w-3.5 h-3.5 text-[#38BDF8]" />
            <span className="hidden sm:inline">Export Kit</span>
            <span className="sm:hidden">Export</span>
          </button>
        </div>

      </div>

      {/* Mobile Search Overlay Bar */}
      {searchOpen && (
        <div className="sm:hidden absolute top-full left-0 w-full bg-white border-b border-slate-200 p-3 shadow-lg z-50">
          <form onSubmit={handleSearchSubmit} className="relative flex items-center">
            <Search className="w-4 h-4 text-slate-400 absolute left-3" />
            <input
              type="text"
              autoFocus
              value={searchVal}
              onChange={handleSearchChange}
              placeholder="예: 버튼, 색상, 스카이, 캘린더..."
              className="w-full pl-9 pr-9 py-2 text-xs bg-slate-100 rounded-lg outline-none"
            />
            <button
              type="button"
              onClick={() => setSearchOpen(false)}
              className="absolute right-3 text-slate-400"
            >
              <X className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </header>
  );
};
