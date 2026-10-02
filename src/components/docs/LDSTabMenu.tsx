import React from 'react';

export type LDSTabKey = 'all' | 'components' | 'tokens' | 'code';

interface LDSTabMenuProps {
  activeTab: LDSTabKey;
  onTabChange: (tab: LDSTabKey) => void;
  counts?: Record<LDSTabKey, number>;
}

export const LDSTabMenu: React.FC<LDSTabMenuProps> = ({
  activeTab,
  onTabChange,
  counts,
}) => {
  const tabs: { key: LDSTabKey; label: string; sub: string }[] = [
    { key: 'all', label: 'Full Documentation', sub: '전체 가이드' },
    { key: 'components', label: 'Interactive Components', sub: 'UI 컴포넌트' },
    { key: 'tokens', label: 'Design Tokens & Colors', sub: '컬러/타이포 매트릭스' },
    { key: 'code', label: 'Developer Integration', sub: '코드 및 패키지' },
  ];

  return (
    <div className="border-b border-[#EFEFEF] mb-8">
      <div className="flex items-center gap-6 sm:gap-8 overflow-x-auto no-scrollbar">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.key;
          return (
            <button
              key={tab.key}
              onClick={() => onTabChange(tab.key)}
              className={`pb-3.5 pt-1 text-sm sm:text-base font-bold whitespace-nowrap transition-colors relative flex items-center gap-2 ${
                isActive ? 'text-black' : 'text-slate-400 hover:text-slate-700'
              }`}
            >
              <span>{tab.label}</span>
              {counts && counts[tab.key] !== undefined && (
                <span
                  className={`text-[11px] font-semibold px-1.5 py-0.5 rounded-full ${
                    isActive ? 'bg-black text-white' : 'bg-slate-100 text-slate-500'
                  }`}
                >
                  {counts[tab.key]}
                </span>
              )}

              {/* LDS Signature Underline Active Bar */}
              {isActive && (
                <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-black rounded-t-full transition-all" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};
