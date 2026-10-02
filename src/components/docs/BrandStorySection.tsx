import React from 'react';
import { Eye, ShieldCheck, Zap, AlertCircle, CheckCircle } from 'lucide-react';
import { Card } from '../ui/Card';

export const BrandStorySection: React.FC = () => {
  return (
    <section id="brand-story" className="py-16 md:py-24 border-t border-[#E2E8F0] bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-[#A855F7] bg-[#F3E8FF] px-2.5 py-1 rounded-full">
            Brand Identity & Philosophy
          </span>
          <h2 className="text-3xl font-extrabold text-[#0F172A] tracking-tight">
            우리 가족의 이야기가 담긴 3대 시각 언어
          </h2>
          <p className="text-base text-[#64748B] max-w-3xl">
            단순히 예쁜 색을 고르는 것을 넘어, 가족 구성원 각자의 개성과 온기가 하나의 조화로운 프로덕트 경험으로 완성되는 철학입니다.
          </p>
        </div>

        {/* 3 Core Principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card variant="default" className="space-y-4">
            <div className="w-11 h-11 rounded-xl bg-[#E0F2FE] flex items-center justify-center text-[#0284C7]">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#0F172A]">01. Mama Sky (엄마의 하늘)</h3>
            <p className="text-sm text-[#475569] leading-relaxed">
              가족을 포근하고 맑게 감싸주는 엄마의 단아한 온기. UI 전체에 신뢰감과 인지적 편안함을 선사하는 <strong>디자인 시스템의 메인 중심축(Primary Core)</strong>입니다.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-[#0369A1]">
              <span className="w-3 h-3 rounded-full bg-[#38BDF8]" />
              <span>Primary #38BDF8 (Aero Sky)</span>
            </div>
          </Card>

          <Card variant="default" className="space-y-4">
            <div className="w-11 h-11 rounded-xl bg-[#F3E8FF] flex items-center justify-center text-[#9333EA]">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#0F172A]">02. Papa Lavender (아빠의 위트)</h3>
            <p className="text-sm text-[#475569] leading-relaxed">
              겐가릴레오 특유의 유쾌한 장난기와 번뜩이는 지성. 차분한 하늘색에 몽환적인 깊이와 크리에이티브한 생동감을 불어넣는 든든한 서브 파트너입니다.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-[#7E22CE]">
              <span className="w-3 h-3 rounded-full bg-[#A855F7]" />
              <span>Secondary #A855F7 (Papa Lavender)</span>
            </div>
          </Card>

          <Card variant="default" className="space-y-4">
            <div className="w-11 h-11 rounded-xl bg-[#FFF7ED] flex items-center justify-center text-[#EA580C]">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#0F172A]">03. Baby Butter (아기의 첫 햇살)</h3>
            <p className="text-sm text-[#475569] leading-relaxed">
              세상에 온 천사 같은 아기의 보드라운 볼살과 햇살 같은 미소. 중요한 알림과 결제(CTA) 순간에 가장 사랑스럽고 따뜻하게 시선을 사로잡습니다.
            </p>
            <div className="pt-2 flex items-center gap-3 text-xs font-semibold">
              <span className="flex items-center gap-1.5 text-[#854D0E]">
                <span className="w-3 h-3 rounded-full bg-[#FEF08A]" /> Butter #FEF08A
              </span>
              <span className="flex items-center gap-1.5 text-[#C2410C]">
                <span className="w-3 h-3 rounded-full bg-[#FB923C]" /> Peach #FB923C
              </span>
            </div>
          </Card>
        </div>

        {/* 60-30-10 Visual Rule & Do's & Don'ts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-4">
          
          {/* 60-30-10 Ratio Guide */}
          <div className="bg-[#F8FAFC] border border-[#E2E8F0] p-6 rounded-[16px] space-y-4">
            <h4 className="text-base font-bold text-[#0F172A] flex items-center gap-2">
              <span>🎨 UI 배색의 60-30-10 황금 규칙</span>
            </h4>
            <p className="text-xs text-[#64748B]">
              프로젝트를 만들 때 이 비율을 지키면 언제나 디자이너가 작업한 듯한 완성도가 유지됩니다.
            </p>

            <div className="h-10 rounded-xl overflow-hidden flex border border-[#CBD5E1] shadow-inner font-semibold text-xs text-center leading-10">
              <div className="w-[60%] bg-[#F8FAFC] text-[#475569] border-r border-[#CBD5E1]">
                Neutral 60% (배경/카드)
              </div>
              <div className="w-[30%] bg-[#A855F7] text-white">
                Primary 30% (브랜드)
              </div>
              <div className="w-[10%] bg-[#FB923C] text-white">
                10% CTA
              </div>
            </div>

            <ul className="text-xs text-[#475569] space-y-2 pt-1 list-disc list-inside">
              <li><strong>60% 배경:</strong> 순수 흰색 대신 Cool Slate 50 (`#F8FAFC`)을 써서 눈의 피로를 방지</li>
              <li><strong>30% 브랜드:</strong> 헤더, 탭, 주요 연보라 버튼, 스카이블루 서브 칩</li>
              <li><strong>10% 악센트:</strong> 결제, 구매, 신규 배지, 핵심 알림 등에 코랄/버터 보색 사용</li>
            </ul>
          </div>

          {/* Do's and Don'ts */}
          <div className="bg-[#F8FAFC] border border-[#E2E8F0] p-6 rounded-[16px] space-y-4">
            <h4 className="text-base font-bold text-[#0F172A]">
              <span>⚖️ 디자인 시스템 가이드라인 (Do & Don't)</span>
            </h4>

            <div className="space-y-3">
              <div className="flex items-start gap-3 bg-white p-3 rounded-lg border border-[#E2E8F0]">
                <CheckCircle className="w-5 h-5 text-[#10B981] shrink-0 mt-0.5" />
                <div className="text-xs">
                  <strong className="text-[#0F172A] block font-semibold">DO: 텍스트는 Slate 900/800 사용</strong>
                  <span className="text-[#64748B]">
                    연보라/연하늘은 밝기 때문에 본문 텍스트로 쓰지 않고, 쿨 슬레이트 900(`#0F172A`)으로 가독성을 확보하세요.
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white p-3 rounded-lg border border-[#E2E8F0]">
                <AlertCircle className="w-5 h-5 text-[#EF4444] shrink-0 mt-0.5" />
                <div className="text-xs">
                  <strong className="text-[#0F172A] block font-semibold">DON'T: 원색 옐로우나 빨강을 직접 쓰지 않기</strong>
                  <span className="text-[#64748B]">
                    파스텔 톤과 충돌하는 네온 옐로우 대신, 톤을 조율한 버터 레몬(`#FEF08A`)과 소프트 코랄(`#FB923C`)을 사용하세요.
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
