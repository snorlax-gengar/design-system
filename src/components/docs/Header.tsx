import React, { useState, useRef } from 'react';
import { 
  Download, 
  Menu, 
  X, 
  ChevronDown, 
  BookOpen, 
  Sparkles, 
  Palette, 
  Type, 
  Sliders, 
  ToggleLeft
} from 'lucide-react';
import { GengarileoLogo } from '../ui/GengarileoLogo';

interface HeaderProps {
  activeSection: string;
  onNavigate: (id: string) => void;
  onOpenExportModal: () => void;
}

interface SubMenuItem {
  id: string;
  label: string;
  description: string;
  icon: React.ReactNode;
}

interface NavGroup {
  id: string;
  label: string;
  children?: SubMenuItem[];
}

export const Header: React.FC<HeaderProps> = ({ activeSection, onNavigate, onOpenExportModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpandedGroup, setMobileExpandedGroup] = useState<string | null>('brand');
  const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const navGroups: NavGroup[] = [
    {
      id: 'brand-group',
      label: 'Brand',
      children: [
        {
          id: 'brand',
          label: 'Brand Story',
          description: '듀얼 코어 컬러 철학과 60-30-10 배색 규칙',
          icon: <BookOpen className="w-4 h-4 text-[#A855F7]" />,
        },
        {
          id: 'brand-asset',
          label: 'Icon & Favicon',
          description: '시그니처 3D 심벌 & 무손실 SVG 파비콘 에셋',
          icon: <Sparkles className="w-4 h-4 text-[#38BDF8]" />,
        },
      ],
    },
    {
      id: 'foundations-group',
      label: 'Foundations',
      children: [
        {
          id: 'colors',
          label: 'Color Tokens',
          description: '50~950 전 단계 매트릭스 및 원클릭 복사',
          icon: <Palette className="w-4 h-4 text-[#0284C7]" />,
        },
        {
          id: 'typography',
          label: 'Typography',
          description: 'Pretendard 폰트 패밀리 및 텍스트 위계 스케일',
          icon: <Type className="w-4 h-4 text-[#7E22CE]" />,
        },
      ],
    },
    {
      id: 'components-group',
      label: 'Components',
      children: [
        {
          id: 'buttons',
          label: 'Buttons',
          description: '5단계 사이즈 & 9종 변형 실시간 플레이그라운드',
          icon: <Sliders className="w-4 h-4 text-[#A855F7]" />,
        },
        {
          id: 'form-controls',
          label: 'Controls & Calendar',
          description: '토글 스위치, 셀렉트박스, 캘린더, 체크박스',
          icon: <ToggleLeft className="w-4 h-4 text-[#FB923C]" />,
        },
      ],
    },
    {
      id: 'showcase',
      label: 'Showcase',
    },
    {
      id: 'quickstart',
      label: 'Quick Start',
    },
  ];

  const handleMouseEnter = (groupId: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setOpenDropdown(groupId);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
  };

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setOpenDropdown(null);
    setMobileMenuOpen(false);
  };

  const isGroupActive = (group: NavGroup) => {
    if (group.id === activeSection) return true;
    if (group.children) {
      return group.children.some((child) => child.id === activeSection);
    }
    return false;
  };

  return (
    <header className="sticky top-0 z-50 bg-white/85 backdrop-blur-md border-b border-[#E2E8F0] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand Logo */}
        <div 
          onClick={() => handleNavClick('hero')} 
          className="cursor-pointer group hover:opacity-95 transition-opacity"
        >
          <GengarileoLogo size={36} variant="gradient" showWordmark />
        </div>

        {/* Desktop Nav Items with Depth */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navGroups.map((group) => {
            const hasChildren = Boolean(group.children && group.children.length > 0);
            const active = isGroupActive(group);
            const isOpen = openDropdown === group.id;

            if (!hasChildren) {
              return (
                <button
                  key={group.id}
                  onClick={() => handleNavClick(group.id)}
                  className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-colors ${
                    active
                      ? 'text-[#7E22CE] bg-[#F3E8FF] font-semibold'
                      : 'text-[#475569] hover:text-[#0F172A] hover:bg-[#F8FAFC]'
                  }`}
                >
                  {group.label}
                </button>
              );
            }

            return (
              <div
                key={group.id}
                className="relative"
                onMouseEnter={() => handleMouseEnter(group.id)}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  onClick={() => setOpenDropdown(isOpen ? null : group.id)}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium rounded-lg transition-all ${
                    active || isOpen
                      ? 'text-[#7E22CE] bg-[#F3E8FF] font-semibold'
                      : 'text-[#475569] hover:text-[#0F172A] hover:bg-[#F8FAFC]'
                  }`}
                >
                  <span>{group.label}</span>
                  <ChevronDown className={`w-3.5 h-3.5 text-[#94A3B8] transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#7E22CE]' : ''}`} />
                </button>

                {/* Dropdown Card */}
                {isOpen && group.children && (
                  <div className="absolute top-full left-0 mt-1 w-72 bg-white rounded-2xl border border-[#E2E8F0] shadow-xl p-2 z-50 animate-fade-in space-y-1">
                    {group.children.map((child) => (
                      <div
                        key={child.id}
                        onClick={() => handleNavClick(child.id)}
                        className={`
                          flex items-start gap-3 p-2.5 rounded-xl cursor-pointer transition-colors text-left
                          ${activeSection === child.id ? 'bg-[#FAF5FF] text-[#7E22CE]' : 'hover:bg-[#F8FAFC] text-[#334155]'}
                        `}
                      >
                        <div className="p-2 rounded-lg bg-white border border-[#E2E8F0] shadow-sm shrink-0 mt-0.5">
                          {child.icon}
                        </div>
                        <div>
                          <div className="text-xs font-bold text-[#0F172A]">{child.label}</div>
                          <div className="text-[11px] text-[#64748B] mt-0.5 leading-snug line-clamp-2 font-normal">
                            {child.description}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenExportModal}
            className="inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-2 rounded-[10px] bg-[#0F172A] text-white hover:bg-[#1E293B] shadow-sm transition-all hover:-translate-y-0.5"
          >
            <Download className="w-3.5 h-3.5 text-[#38BDF8]" />
            <span>토큰 & 코드 내보내기</span>
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#475569] hover:text-[#0F172A] hover:bg-[#F1F5F9] rounded-lg"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer with Accordion Depth */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#E2E8F0] bg-white px-4 pt-2 pb-5 space-y-2 shadow-xl max-h-[80vh] overflow-y-auto">
          {navGroups.map((group) => {
            const hasChildren = Boolean(group.children && group.children.length > 0);
            const isExpanded = mobileExpandedGroup === group.id;

            if (!hasChildren) {
              return (
                <button
                  key={group.id}
                  onClick={() => handleNavClick(group.id)}
                  className={`w-full text-left px-3 py-2.5 text-sm font-semibold rounded-xl ${
                    activeSection === group.id ? 'bg-[#F3E8FF] text-[#7E22CE]' : 'text-[#334155] hover:bg-[#F8FAFC]'
                  }`}
                >
                  {group.label}
                </button>
              );
            }

            return (
              <div key={group.id} className="border border-[#E2E8F0] rounded-xl overflow-hidden">
                <button
                  onClick={() => setMobileExpandedGroup(isExpanded ? null : group.id)}
                  className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-bold text-[#0F172A] bg-[#F8FAFC]"
                >
                  <span>{group.label}</span>
                  <ChevronDown className={`w-4 h-4 text-[#64748B] transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                </button>

                {isExpanded && group.children && (
                  <div className="p-2 space-y-1 bg-white">
                    {group.children.map((child) => (
                      <button
                        key={child.id}
                        onClick={() => handleNavClick(child.id)}
                        className={`w-full text-left flex items-center gap-2.5 px-3 py-2 text-xs font-medium rounded-lg ${
                          activeSection === child.id
                            ? 'bg-[#FAF5FF] text-[#7E22CE] font-bold'
                            : 'text-[#475569] hover:bg-[#F8FAFC]'
                        }`}
                      >
                        <span className="shrink-0">{child.icon}</span>
                        <span>{child.label}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            );
          })}

          <div className="pt-3 border-t border-[#E2E8F0]">
            <button
              onClick={() => {
                onOpenExportModal();
                setMobileMenuOpen(false);
              }}
              className="w-full inline-flex items-center justify-center gap-2 text-xs font-semibold px-3 py-2.5 rounded-xl bg-[#0F172A] text-white"
            >
              <Download className="w-4 h-4 text-[#38BDF8]" />
              <span>토큰 & 코드 내보내기</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
