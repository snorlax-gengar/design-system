import React, { useState } from 'react';
import { X, Download } from 'lucide-react';
import { Button } from '../ui/Button';

interface ExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCopySuccess: (text: string) => void;
}

export const ExportModal: React.FC<ExportModalProps> = ({ isOpen, onClose, onCopySuccess }) => {
  const [activeTab, setActiveTab] = useState<'tokens' | 'components' | 'tailwind'>('tokens');

  if (!isOpen) return null;

  const downloadFile = (filename: string, path: string) => {
    const link = document.createElement('a');
    link.href = path;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
      <div 
        className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-[#E2E8F0] overflow-hidden flex flex-col max-h-[85vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E2E8F0]">
          <div>
            <h3 className="text-lg font-bold text-[#0F172A]">Gengarileo 에셋 내보내기</h3>
            <p className="text-xs text-[#64748B]">다른 프로젝트에서 즉시 쓸 수 있는 파일과 프리셋입니다.</p>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#94A3B8] hover:text-[#0F172A] hover:bg-[#F1F5F9]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-5 overflow-y-auto">
          
          <div className="flex border-b border-[#E2E8F0] gap-4">
            <button
              onClick={() => setActiveTab('tokens')}
              className={`pb-2.5 text-xs font-bold transition-all relative ${
                activeTab === 'tokens' ? 'text-[#7E22CE]' : 'text-[#64748B] hover:text-[#0F172A]'
              }`}
            >
              gds-tokens.css
              {activeTab === 'tokens' && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#A855F7]" />}
            </button>

            <button
              onClick={() => setActiveTab('components')}
              className={`pb-2.5 text-xs font-bold transition-all relative ${
                activeTab === 'components' ? 'text-[#7E22CE]' : 'text-[#64748B] hover:text-[#0F172A]'
              }`}
            >
              gds-components.css
              {activeTab === 'components' && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#A855F7]" />}
            </button>

            <button
              onClick={() => setActiveTab('tailwind')}
              className={`pb-2.5 text-xs font-bold transition-all relative ${
                activeTab === 'tailwind' ? 'text-[#7E22CE]' : 'text-[#64748B] hover:text-[#0F172A]'
              }`}
            >
              tailwind-preset.js
              {activeTab === 'tailwind' && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#A855F7]" />}
            </button>
          </div>

          <div className="bg-[#F8FAFC] p-4 rounded-xl border border-[#E2E8F0] space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-semibold text-[#0F172A]">
                {activeTab === 'tokens' && '/tokens/gds-tokens.css'}
                {activeTab === 'components' && '/tokens/gds-components.css'}
                {activeTab === 'tailwind' && '/tokens/tailwind-preset.js'}
              </span>

              <button
                onClick={() => {
                  const path = activeTab === 'tokens' 
                    ? '/tokens/gds-tokens.css' 
                    : activeTab === 'components' 
                    ? '/tokens/gds-components.css' 
                    : '/tokens/tailwind-preset.js';
                  const filename = path.split('/').pop() || 'file';
                  downloadFile(filename, path);
                }}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#7E22CE] hover:text-[#9333EA]"
              >
                <Download className="w-3.5 h-3.5" /> 파일 다운로드
              </button>
            </div>

            <p className="text-xs text-[#64748B] leading-relaxed">
              {activeTab === 'tokens' && '모든 색상 스케일(연보라, 연하늘, 버터, 코랄, 슬레이트) 및 라운드, 섀도우가 CSS Custom Properties로 정의되어 있습니다.'}
              {activeTab === 'components' && '.gds-btn, .gds-btn-primary, .gds-badge 등의 클래스가 정의되어 있어 프레임워크 없이도 버튼과 뱃지를 바로 사용할 수 있습니다.'}
              {activeTab === 'tailwind' && 'Tailwind CSS 프로젝트에서 presets에 추가하면 bg-gds-lavender-brand 등의 클래스를 바로 쓸 수 있습니다.'}
            </p>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-[#F8FAFC] border-t border-[#E2E8F0] flex justify-end gap-2">
          <Button variant="outline" size="sm" onClick={onClose}>
            닫기
          </Button>
          <Button 
            variant="primary" 
            size="sm" 
            onClick={() => {
              const url = window.location.origin + (activeTab === 'tokens' ? '/tokens/gds-tokens.css' : activeTab === 'components' ? '/tokens/gds-components.css' : '/tokens/tailwind-preset.js');
              navigator.clipboard.writeText(url);
              onCopySuccess('CDN/로컬 경로가 복사되었습니다!');
            }}
          >
            링크/경로 복사
          </Button>
        </div>
      </div>
    </div>
  );
};
