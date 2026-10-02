import React, { useState } from 'react';
import { Download, Copy, Check, ArrowUpRight } from 'lucide-react';

interface LDSDownloadGridProps {
  onCopySuccess: (text: string) => void;
}

interface DownloadItem {
  id: string;
  name: string;
  description: string;
  fileUrl: string;
  fileName: string;
  fileType: 'css' | 'js' | 'svg' | 'react';
  size: string;
}

export const LDSDownloadGrid: React.FC<LDSDownloadGridProps> = ({ onCopySuccess }) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const downloadList: DownloadItem[] = [
    {
      id: 'tokens-css',
      name: 'gds-tokens.css',
      description: 'CSS 전역 변수 (스카이, 라벤더, 버터, 코랄 전 단계)',
      fileUrl: '/tokens/gds-tokens.css',
      fileName: 'gds-tokens.css',
      fileType: 'css',
      size: '4.8 KB',
    },
    {
      id: 'tailwind-preset',
      name: 'tailwind-preset.js',
      description: 'Tailwind CSS 테마 설정 프리셋 플러그인',
      fileUrl: '/tokens/tailwind-preset.js',
      fileName: 'tailwind-preset.js',
      fileType: 'js',
      size: '1.8 KB',
    },
    {
      id: 'components-css',
      name: 'gds-components.css',
      description: '버튼, 배지, 셀렉트 등 즉시 사용 가능한 CSS 클래스',
      fileUrl: '/tokens/gds-components.css',
      fileName: 'gds-components.css',
      fileType: 'css',
      size: '6.2 KB',
    },
    {
      id: 'logo-svg',
      name: 'gengarileo-logo.svg',
      description: '무손실 순수 벡터 시그니처 3D 오비탈 로고',
      fileUrl: '/favicon.svg',
      fileName: 'gengarileo-logo.svg',
      fileType: 'svg',
      size: '3.4 KB',
    },
    {
      id: 'favicon-svg',
      name: 'favicon.svg',
      description: '웹 브라우저 탭 및 앱 아이콘용 반응형 파비콘',
      fileUrl: '/favicon.svg',
      fileName: 'favicon.svg',
      fileType: 'svg',
      size: '1.2 KB',
    },
    {
      id: 'react-components',
      name: '@gds/react-components',
      description: '버튼, 토글, 셀렉트, 캘린더 TSX 컴포넌트 킷',
      fileUrl: '#buttons',
      fileName: 'gds-react-components.zip',
      fileType: 'react',
      size: '8 TSX Files',
    },
  ];

  const handleCopyCodeSnippet = (item: DownloadItem) => {
    let snippet = '';
    if (item.fileType === 'css') {
      snippet = `@import url("${window.location.origin}${item.fileUrl}");`;
    } else if (item.fileType === 'js') {
      snippet = `presets: [require("./${item.fileName}")]`;
    } else if (item.fileType === 'svg') {
      snippet = `<link rel="icon" type="image/svg+xml" href="${item.fileUrl}" />`;
    } else {
      snippet = `import { Button, Select, Toggle, Calendar } from '@/components/ui';`;
    }

    navigator.clipboard.writeText(snippet);
    setCopiedId(item.id);
    onCopySuccess(`${item.name} 연동 코드가 복사되었습니다!`);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const getIconForType = (type: DownloadItem['fileType']) => {
    switch (type) {
      case 'css':
        return (
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-xs border border-blue-100">
            CSS
          </div>
        );
      case 'js':
        return (
          <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold text-xs border border-amber-100">
            JS
          </div>
        );
      case 'svg':
        return (
          <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold text-xs border border-purple-100">
            SVG
          </div>
        );
      case 'react':
        return (
          <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center font-bold text-xs border border-sky-100">
            TSX
          </div>
        );
    }
  };

  return (
    <div id="download-center" className="py-10 border-b border-[#EFEFEF]">
      
      {/* Title */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
            GDS Resource Hub
          </span>
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight mt-1">
            원클릭 에셋 다운로드 센터
          </h2>
          <p className="text-sm text-slate-500 mt-1">
            글로벌 표준 3열 카드 레이아웃으로 필요한 디자인 토큰과 에셋을 파일로 받거나 즉시 복사하세요.
          </p>
        </div>
      </div>

      {/* LDS Signature 3-Column Download Grid (.file_download) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {downloadList.map((item) => (
          <div
            key={item.id}
            className="group relative bg-white border border-[#EFEFEF] hover:border-slate-300 rounded-xl p-4.5 flex flex-col justify-between shadow-2xs hover:shadow-md hover:-translate-y-0.5 transition-all"
          >
            <div>
              {/* Card Top: Icon & Metadata */}
              <div className="flex items-start gap-3.5 mb-3">
                {getIconForType(item.fileType)}
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-bold text-slate-900 truncate group-hover:text-[#0284C7] transition-colors">
                      {item.name}
                    </h3>
                    <span className="text-[11px] font-mono font-medium text-slate-400">
                      {item.size}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 line-clamp-2 mt-1 leading-snug">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Card Footer: Action Buttons */}
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
              <button
                onClick={() => handleCopyCodeSnippet(item)}
                className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-black py-1 px-2 rounded hover:bg-slate-100 transition-colors"
              >
                {copiedId === item.id ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-600">복사됨</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-slate-400" />
                    <span>코드 복사</span>
                  </>
                )}
              </button>

              {item.fileUrl.startsWith('/') ? (
                <a
                  href={item.fileUrl}
                  download={item.fileName}
                  className="flex items-center gap-1.5 text-xs font-semibold text-[#0284C7] hover:text-[#0369A1] bg-sky-50 hover:bg-sky-100/80 py-1.5 px-3 rounded-lg transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>다운로드</span>
                </a>
              ) : (
                <a
                  href={item.fileUrl}
                  className="flex items-center gap-1 text-xs font-semibold text-slate-700 hover:text-black bg-slate-100 hover:bg-slate-200 py-1.5 px-3 rounded-lg transition-colors"
                >
                  <span>프리뷰</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              )}
            </div>

          </div>
        ))}
      </div>

    </div>
  );
};
