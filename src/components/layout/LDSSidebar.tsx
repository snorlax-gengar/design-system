import React, { useState } from 'react';
import { 
  Download, 
  ChevronDown
} from 'lucide-react';

import { LDS_NAVIGATION_GROUPS } from './lds-navigation';

interface LDSSidebarProps {
  activeSection: string;
  onNavigate: (id: string) => void;
  mobileOpen: boolean;
  onCloseMobile: () => void;
  searchFilter?: string;
}

export const LDSSidebar: React.FC<LDSSidebarProps> = ({
  activeSection,
  onNavigate,
  mobileOpen,
  onCloseMobile,
  searchFilter = '',
}) => {
  const [collapsedGroups, setCollapsedGroups] = useState<Record<string, boolean>>({});

  const toggleGroup = (groupTitle: string) => {
    setCollapsedGroups((prev) => ({
      ...prev,
      [groupTitle]: !prev[groupTitle],
    }));
  };

  const handleItemClick = (id: string) => {
    onNavigate(id);
    onCloseMobile();
  };

  const currentActiveLabel = () => {
    for (const group of LDS_NAVIGATION_GROUPS) {
      for (const item of group.items) {
        if (item.id === activeSection) return item.label;
      }
    }
    return 'System Overview';
  };

  return (
    <>
      {/* Mobile Current Menu Bar (LDS signature: .btn_lnb) */}
      <div className="lg:hidden sticky top-[76px] z-40 bg-white border-b border-[#EFEFEF] px-4 py-3 flex items-center justify-between shadow-xs">
        <div className="flex items-center gap-2 overflow-hidden">
          <span className="text-xs font-semibold text-slate-400">Current :</span>
          <span className="text-sm font-bold text-slate-900 truncate">
            {currentActiveLabel()}
          </span>
        </div>
        <button
          onClick={onCloseMobile}
          className="flex items-center gap-1 text-xs font-semibold text-[#0284C7] bg-sky-50 px-2.5 py-1 rounded-md"
        >
          <span>메뉴 {mobileOpen ? '닫기' : '열기'}</span>
          <ChevronDown className={`w-3.5 h-3.5 transition-transform ${mobileOpen ? 'rotate-180' : ''}`} />
        </button>
      </div>

      {/* Mobile Backdrop Mask */}
      {mobileOpen && (
        <div 
          onClick={onCloseMobile}
          className="lg:hidden fixed inset-0 bg-black/40 z-40 backdrop-blur-xs transition-opacity"
          aria-hidden="true"
        />
      )}

      {/* Main LNB Sidebar Container */}
      <aside
        className={`fixed top-[76px] lg:top-[84px] left-0 bottom-0 z-40 w-[270px] bg-white border-r border-[#EFEFEF] overflow-y-auto transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          mobileOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full'
        }`}
        style={{
          scrollbarWidth: 'thin',
          scrollbarColor: '#E2E8F0 transparent',
        }}
      >
        <div className="p-5 lg:p-6 space-y-7 pb-20">
          
          {/* Quick Header in Sidebar */}
          <div className="pb-3 border-b border-slate-100 flex items-center justify-between">
            <div className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">
              GDS Architecture
            </div>
            <span className="text-[10px] font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
              ● Live Sync
            </span>
          </div>

          {/* Navigation Groups */}
          <nav className="space-y-6">
            {LDS_NAVIGATION_GROUPS.map((group) => {
              const isCollapsed = collapsedGroups[group.title];
              
              // Filter items if search query is active
              const filteredItems = group.items.filter((item) => {
                if (!searchFilter.trim()) return true;
                return item.label.toLowerCase().includes(searchFilter.toLowerCase());
              });

              if (searchFilter.trim() && filteredItems.length === 0) {
                return null;
              }

              return (
                <div key={group.title} className="space-y-2">
                  
                  {/* Category Title Header */}
                  <div 
                    onClick={() => toggleGroup(group.title)}
                    className="flex items-center justify-between text-xs font-bold text-slate-800 tracking-tight cursor-pointer select-none py-1 group"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-mono text-[#0284C7] font-semibold">
                        {group.number}
                      </span>
                      <span className="text-slate-900 group-hover:text-[#0284C7] transition-colors">
                        {group.title}
                      </span>
                    </div>
                    <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform ${isCollapsed ? '-rotate-90' : ''}`} />
                  </div>

                  {/* Sub-item List */}
                  {!isCollapsed && (
                    <ul className="space-y-0.5 pl-2 border-l border-slate-100">
                      {filteredItems.map((item) => {
                        const isActive = activeSection === item.id ||
                          (item.id === 'toggles-checkboxes' && activeSection === 'form-controls') ||
                          (item.id === 'calendar-component' && activeSection === 'form-controls') ||
                          (item.id === 'favicon-system' && activeSection === 'brand-asset');

                        return (
                          <li key={item.id}>
                            <button
                              onClick={() => handleItemClick(item.id)}
                              className={`w-full text-left flex items-center justify-between px-3 py-2 text-[13px] rounded-lg transition-all relative ${
                                isActive
                                  ? 'font-bold text-black bg-slate-100/90 shadow-2xs'
                                  : 'font-normal text-slate-600 hover:text-black hover:bg-slate-50'
                              }`}
                            >
                              <span className="truncate">{item.label}</span>
                              
                              {/* Active indicator dot or badge */}
                              {isActive ? (
                                <span className="w-1.5 h-1.5 rounded-full bg-[#0284C7]" />
                              ) : item.badge ? (
                                <span className="text-[10px] font-semibold px-1.5 py-0.2 bg-slate-100 text-slate-600 rounded">
                                  {item.badge}
                                </span>
                              ) : null}
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                  )}

                </div>
              );
            })}
          </nav>

          {/* Quick Download Card at bottom of Sidebar */}
          <div className="pt-4 border-t border-slate-100">
            <div className="bg-[#F8FAFC] border border-slate-200 rounded-xl p-3.5 space-y-2.5">
              <div className="flex items-center gap-2">
                <Download className="w-4 h-4 text-[#0284C7]" />
                <span className="text-xs font-bold text-slate-900">Tokens Package</span>
              </div>
              <p className="text-[11px] text-slate-500 leading-relaxed">
                순수 CSS 변수와 Tailwind 프리셋을 프로젝트에 즉시 연동하세요.
              </p>
              <a
                href="/tokens/gds-tokens.css"
                download="gds-tokens.css"
                className="block text-center w-full py-1.5 text-xs font-semibold text-white bg-[#0284C7] hover:bg-[#0369A1] rounded-md transition-colors"
              >
                gds-tokens.css 받기
              </a>
            </div>
          </div>

        </div>
      </aside>
    </>
  );
};
