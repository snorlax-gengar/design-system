import React from 'react';
import { Download, ExternalLink, Code2, Layers } from 'lucide-react';

interface LDSPageHeaderProps {
  onOpenExportModal: () => void;
  onExploreComponents: () => void;
}

export const LDSPageHeader: React.FC<LDSPageHeaderProps> = ({
  onOpenExportModal,
  onExploreComponents,
}) => {
  const resourceSpecs = [
    {
      name: 'Design Tokens (Pure CSS)',
      format: 'CSS Custom Properties',
      version: 'v1.2.0',
      status: 'Released',
      size: '4.8 KB',
      file: '/tokens/gds-tokens.css',
      badge: 'Zero-Dependency',
    },
    {
      name: 'Tailwind CSS Preset',
      format: 'Preset JavaScript Module',
      version: 'v1.2.0',
      status: 'Released',
      size: '1.8 KB',
      file: '/tokens/tailwind-preset.js',
      badge: 'Tailwind Ready',
    },
    {
      name: 'Component Stylesheet',
      format: 'Pre-styled CSS Classes',
      version: 'v1.2.0',
      status: 'Released',
      size: '6.2 KB',
      file: '/tokens/gds-components.css',
      badge: 'Drop-in Classes',
    },
    {
      name: 'Brand Vector Identity',
      format: 'Lossless Vector SVG',
      version: 'SVG 1.0',
      status: 'Released',
      size: '3.4 KB',
      file: '/favicon.svg',
      badge: 'Pure Vector',
    },
    {
      name: 'React 18/19 UI Components',
      format: 'TypeScript TSX Library',
      version: 'v1.2.0',
      status: 'Released',
      size: '8 Components',
      file: '#buttons',
      badge: 'Accessible UI',
    },
  ];

  return (
    <div id="page-header" className="border-b border-[#EFEFEF] pb-12 pt-6 lg:pt-10">
      
      {/* Category Tag & Release Pill */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
            01. OVERVIEW
          </span>
          <span className="text-slate-300">/</span>
          <span className="text-xs font-semibold text-[#0284C7] bg-sky-50 px-2.5 py-0.5 rounded-full border border-sky-200">
            Family Signature Edition
          </span>
        </div>

        {/* LDS Release Status Dot */}
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-semibold text-slate-700 shadow-2xs">
          <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
          <span>Status: Released (v1.2.0)</span>
          <span className="text-slate-300">|</span>
          <span className="text-slate-500 font-normal">2026.10 Update</span>
        </div>
      </div>

      {/* Main Title & Subtitle */}
      <div className="space-y-4">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.2]">
          Gengarileo Design System (GDS)
        </h1>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl font-normal">
          엔터프라이즈 테크 기업 표준의 체계적인 정보 구조와 높은 가독성을 바탕으로, 
          가족을 품어주는 <strong>엄마의 맑은 하늘(Aero Sky)</strong>을 핵심 코어로 확립한 공식 디자인 시스템입니다. 
          개인 프로젝트부터 상용 프로덕트까지 누구나 제약 없이 재사용할 수 있도록 설계되었습니다.
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap items-center gap-3 pt-6">
        <button
          onClick={onOpenExportModal}
          className="flex items-center gap-2 px-5 py-2.5 bg-black hover:bg-slate-800 text-white rounded-lg text-sm font-semibold shadow-xs transition-all hover:scale-[1.01] active:scale-[0.99]"
        >
          <Download className="w-4 h-4 text-[#38BDF8]" />
          <span>전체 에셋 킷 내보내기 (Export Kit)</span>
        </button>
        <button
          onClick={onExploreComponents}
          className="flex items-center gap-2 px-5 py-2.5 bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 rounded-lg text-sm font-semibold transition-colors"
        >
          <Code2 className="w-4 h-4 text-slate-500" />
          <span>컴포넌트 라이브 데모 보기</span>
        </button>
      </div>

      {/* LDS Signature: Resource & Platform Status Table (.editor_table) */}
      <div className="mt-10 overflow-hidden border border-slate-200 rounded-xl bg-white shadow-2xs">
        <div className="px-5 py-3.5 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-slate-500" />
            <h2 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
              System Specification & Resources
            </h2>
          </div>
          <span className="text-[11px] text-slate-500">
            5 Modules Ready for Production
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-slate-100 text-slate-400 font-semibold uppercase bg-slate-50/50">
                <th className="py-3 px-5">Resource Module</th>
                <th className="py-3 px-4">Type / Format</th>
                <th className="py-3 px-4">Version</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4">Payload</th>
                <th className="py-3 px-5 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
              {resourceSpecs.map((spec, i) => (
                <tr key={i} className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-3.5 px-5">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-slate-900">{spec.name}</span>
                      <span className="text-[10px] font-semibold text-sky-700 bg-sky-50 px-2 py-0.5 rounded border border-sky-100">
                        {spec.badge}
                      </span>
                    </div>
                  </td>
                  <td className="py-3.5 px-4 text-slate-500">{spec.format}</td>
                  <td className="py-3.5 px-4 font-mono text-slate-800">{spec.version}</td>
                  <td className="py-3.5 px-4">
                    <span className="inline-flex items-center gap-1.5 text-emerald-700 font-semibold text-[11px]">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      {spec.status}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 font-mono text-slate-500">{spec.size}</td>
                  <td className="py-3.5 px-5 text-right">
                    {spec.file.startsWith('/') ? (
                      <a
                        href={spec.file}
                        download
                        className="inline-flex items-center gap-1 text-[#0284C7] hover:text-[#0369A1] font-semibold text-xs"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>Download</span>
                      </a>
                    ) : (
                      <button
                        onClick={onExploreComponents}
                        className="inline-flex items-center gap-1 text-[#0284C7] hover:text-[#0369A1] font-semibold text-xs"
                      >
                        <span>View Component</span>
                        <ExternalLink className="w-3 h-3" />
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};
