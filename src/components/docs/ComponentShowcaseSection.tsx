import React, { useState } from 'react';
import { 
  ToggleLeft, 
  Calendar as CalendarIcon, 
  CheckSquare, 
  ChevronDown, 
  Sparkles, 
  ShieldCheck, 
  Zap, 
  Globe, 
  User, 
  Bell 
} from 'lucide-react';
import { Toggle } from '../ui/Toggle';
import { Select } from '../ui/Select';
import { Calendar } from '../ui/Calendar';
import { Checkbox } from '../ui/Checkbox';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';

interface ComponentShowcaseSectionProps {
  onCopySuccess: (text: string) => void;
}

export const ComponentShowcaseSection: React.FC<ComponentShowcaseSectionProps> = ({ onCopySuccess }) => {
  // Toggle states
  const [toggle1, setToggle1] = useState(true);
  const [toggle2, setToggle2] = useState(true);
  const [toggle3, setToggle3] = useState(false);
  const [toggleSize, setToggleSize] = useState<'sm' | 'md' | 'lg'>('md');

  // Select states
  const [selectedPlan, setSelectedPlan] = useState('pro');
  const [selectedRole, setSelectedRole] = useState('designer');

  // Calendar state
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  // Checkbox states
  const [check1, setCheck1] = useState(true);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(true);

  const planOptions = [
    { value: 'free', label: 'Starter Free', description: '기본 기능 및 개인 프로젝트', icon: <Sparkles className="w-4 h-4" /> },
    { value: 'pro', label: 'Pro Professional', description: '무제한 토큰 및 컴포넌트 내보내기', icon: <Zap className="w-4 h-4" /> },
    { value: 'enterprise', label: 'Enterprise Suite', description: '팀 단위 협업 및 전용 CDN', icon: <ShieldCheck className="w-4 h-4" /> },
  ];

  const roleOptions = [
    { value: 'designer', label: 'UI/UX 디자이너', icon: <User className="w-4 h-4" /> },
    { value: 'frontend', label: '프론트엔드 개발자', icon: <Globe className="w-4 h-4" /> },
    { value: 'pm', label: '프로덕트 매니저', icon: <Bell className="w-4 h-4" /> },
  ];

  return (
    <section id="form-controls" className="py-16 md:py-24 border-t border-[#E2E8F0] bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-[#A855F7] bg-[#F3E8FF] px-2.5 py-1 rounded-full">
            Expanded Components
          </span>
          <h2 className="text-3xl font-extrabold text-[#0F172A] tracking-tight">
            토글, 셀렉트박스 & 달력 컴포넌트
          </h2>
          <p className="text-base text-[#64748B] max-w-2xl">
            버튼 외에도 실제 프로덕트 개발에 매일 쓰이는 핵심 UI 컴포넌트들의 디자인 규격과 인터랙션입니다.
          </p>
        </div>

        {/* 2x2 Grid for Controls */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          
          {/* Card 1: Toggle (Switch) Component */}
          <div id="toggles-checkboxes" className="scroll-mt-24">
            <Card variant="default" className="space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-[#F1F5F9]">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-[#F3E8FF] flex items-center justify-center text-[#9333EA]">
                  <ToggleLeft className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#0F172A]">토글 스위치 (Toggle / Switch)</h3>
                  <p className="text-xs text-[#64748B]">크기별(SM/MD/LG) 및 브랜드 테마별 스위치</p>
                </div>
              </div>
              <div className="flex items-center gap-1 bg-[#F1F5F9] p-1 rounded-lg">
                {(['sm', 'md', 'lg'] as const).map((s) => (
                  <button
                    key={s}
                    onClick={() => setToggleSize(s)}
                    className={`px-2 py-0.5 text-xs font-semibold rounded ${
                      toggleSize === s ? 'bg-white text-[#7E22CE] shadow-sm' : 'text-[#64748B]'
                    }`}
                  >
                    {s.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            {/* Live Toggles Demo */}
            <div className="space-y-5 bg-[#FAF5FF]/40 p-4 rounded-xl border border-[#E9D5FF]/60">
              <Toggle
                label="자동 다크 모드 동기화"
                description="기기 설정에 따라 다크 모드로 자동 전환합니다."
                checked={toggle1}
                onChange={setToggle1}
                variant="lavender"
                size={toggleSize}
              />

              <div className="h-px bg-[#E2E8F0]" />

              <Toggle
                label="스카이블루 알림 수신 (Secondary)"
                description="중요 업데이트 및 릴리즈 소식을 실시간으로 받습니다."
                checked={toggle2}
                onChange={setToggle2}
                variant="sky"
                size={toggleSize}
              />

              <div className="h-px bg-[#E2E8F0]" />

              <Toggle
                label="긴급 시스템 차단 모드 (Coral Accent)"
                description="비상 상황 시 외부 트래픽을 즉시 차단합니다."
                checked={toggle3}
                onChange={setToggle3}
                variant="coral"
                size={toggleSize}
              />
            </div>

            <div className="pt-2 text-xs text-[#64748B] flex items-center justify-between font-mono bg-white p-2.5 rounded-lg border border-[#E2E8F0]">
              <span>&lt;Toggle checked=&#123;val&#125; variant="lavender" /&gt;</span>
              <button
                onClick={() => {
                  navigator.clipboard.writeText('<Toggle checked={val} onChange={setVal} variant="lavender" size="md" label="설정" />');
                  onCopySuccess('토글 코드가 복사되었습니다!');
                }}
                className="text-[#7E22CE] font-bold hover:underline"
              >
                코드 복사
              </button>
            </div>
          </Card>
          </div>

          {/* Card 2: Select Component */}
          <Card variant="default" className="space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-[#F1F5F9]">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-[#E0F2FE] flex items-center justify-center text-[#0284C7]">
                  <ChevronDown className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#0F172A]">셀렉트박스 (Select Box)</h3>
                  <p className="text-xs text-[#64748B]">포커스 글로우 링과 맞춤형 드롭다운 메뉴</p>
                </div>
              </div>
              <Badge variant="sky">Select UI</Badge>
            </div>

            <div className="space-y-4">
              <Select
                label="구독 플랜 선택"
                options={planOptions}
                value={selectedPlan}
                onChange={setSelectedPlan}
                helperText="언제든 자유롭게 업그레이드 또는 다운그레이드할 수 있습니다."
              />

              <Select
                label="담당 직무 (Role)"
                options={roleOptions}
                value={selectedRole}
                onChange={setSelectedRole}
                size="sm"
              />
            </div>

            <div className="pt-2 text-xs text-[#64748B] flex items-center justify-between font-mono bg-white p-2.5 rounded-lg border border-[#E2E8F0]">
              <span>&lt;Select options=&#123;items&#125; value=&#123;val&#125; /&gt;</span>
              <button
                onClick={() => {
                  navigator.clipboard.writeText('<Select label="선택" options={options} value={val} onChange={setVal} />');
                  onCopySuccess('셀렉트박스 코드가 복사되었습니다!');
                }}
                className="text-[#7E22CE] font-bold hover:underline"
              >
                코드 복사
              </button>
            </div>
          </Card>

          {/* Card 3: Calendar & DatePicker */}
          <div id="calendar-component" className="scroll-mt-24">
            <Card variant="default" className="space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-[#F1F5F9]">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-[#F3E8FF] flex items-center justify-center text-[#9333EA]">
                    <CalendarIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#0F172A]">달력 (Calendar & DatePicker)</h3>
                    <p className="text-xs text-[#64748B]">오늘 날짜 인디케이터와 연보라 선택 칩</p>
                  </div>
                </div>
                <Badge variant="lavender">Date Picker</Badge>
              </div>

              <div className="flex flex-col items-center justify-center pt-1">
                <Calendar
                  selectedDate={selectedDate}
                  onSelectDate={setSelectedDate}
                />
              </div>

              <div className="pt-2 text-xs text-[#64748B] flex items-center justify-between font-mono bg-white p-2.5 rounded-lg border border-[#E2E8F0]">
                <span>&lt;Calendar selectedDate=&#123;date&#125; onSelectDate=&#123;setDate&#125; /&gt;</span>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText('<Calendar selectedDate={date} onSelectDate={setDate} />');
                    onCopySuccess('달력 코드가 복사되었습니다!');
                  }}
                  className="text-[#7E22CE] font-bold hover:underline"
                >
                  코드 복사
                </button>
              </div>
            </Card>
          </div>

          {/* Card 4: Checkbox & Radio System */}
          <Card variant="default" className="space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-[#F1F5F9]">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-[#FFF7ED] flex items-center justify-center text-[#EA580C]">
                  <CheckSquare className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#0F172A]">체크박스 (Checkbox)</h3>
                  <p className="text-xs text-[#64748B]">라벤더 & 스카이블루 체크박스 컨트롤</p>
                </div>
              </div>
              <Badge variant="coral">Check UI</Badge>
            </div>

            <div className="space-y-4 bg-[#F8FAFC] p-4 rounded-xl border border-[#E2E8F0]">
              <Checkbox
                label="디자인 시스템 토큰 자동 동기화"
                description="클라우드 저장소의 토큰 변경 사항을 실시간 반영합니다."
                checked={check1}
                onChange={setCheck1}
                variant="lavender"
              />

              <div className="h-px bg-[#E2E8F0]" />

              <Checkbox
                label="스카이블루 테마 하위 컴포넌트 적용"
                description="테이블과 데이터 그리드에 쿨 스카이 테마를 우선 적용합니다."
                checked={check2}
                onChange={setCheck2}
                variant="sky"
              />

              <div className="h-px bg-[#E2E8F0]" />

              <Checkbox
                label="이용약관 및 개인정보 처리방침 동의 (필수)"
                checked={check3}
                onChange={setCheck3}
                variant="lavender"
              />
            </div>

            <div className="pt-2 text-xs text-[#64748B] flex items-center justify-between font-mono bg-white p-2.5 rounded-lg border border-[#E2E8F0]">
              <span>&lt;Checkbox checked=&#123;val&#125; label="동의" /&gt;</span>
              <button
                onClick={() => {
                  navigator.clipboard.writeText('<Checkbox checked={val} onChange={setVal} label="항목" variant="lavender" />');
                  onCopySuccess('체크박스 코드가 복사되었습니다!');
                }}
                className="text-[#7E22CE] font-bold hover:underline"
              >
                코드 복사
              </button>
            </div>
          </Card>

        </div>

        {/* Card 5: Badge & Status Indicators */}
        <div id="badge-status" className="scroll-mt-24 pt-4">
          <Card variant="default" className="space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-[#F1F5F9]">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-[#E0F2FE] flex items-center justify-center text-[#0284C7]">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#0F172A]">배지 및 상태 인디케이터 (Badge & Status Pills)</h3>
                  <p className="text-xs text-[#64748B]">시스템 상태 표시, 태그 및 패밀리 컬러 칩</p>
                </div>
              </div>
              <Badge variant="sky">Status UI</Badge>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4 bg-[#F8FAFC] rounded-xl border border-slate-200">
              <div className="space-y-2">
                <span className="text-[11px] font-semibold text-slate-400">Mama Sky</span>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="sky">Sky Solid</Badge>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-sky-50 text-sky-700 border border-sky-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0284C7]" />
                    Released
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <span className="text-[11px] font-semibold text-slate-400">Papa Lavender</span>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="lavender">Lavender Solid</Badge>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-purple-50 text-purple-700 border border-purple-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#9333EA]" />
                    Active
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <span className="text-[11px] font-semibold text-slate-400">Baby Butter & Peach</span>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="butter">Sunshine Butter</Badge>
                  <Badge variant="coral">Coral CTA</Badge>
                </div>
              </div>

              <div className="space-y-2">
                <span className="text-[11px] font-semibold text-slate-400">Neutral & Outlines</span>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="slate">Slate Dark</Badge>
                  <Badge variant="outline">Outlined</Badge>
                </div>
              </div>
            </div>

            <div className="pt-2 text-xs text-[#64748B] flex items-center justify-between font-mono bg-white p-2.5 rounded-lg border border-[#E2E8F0]">
              <span>&lt;Badge variant="sky"&gt;텍스트&lt;/Badge&gt;</span>
              <button
                onClick={() => {
                  navigator.clipboard.writeText('<Badge variant="sky">상태</Badge>');
                  onCopySuccess('배지 코드가 복사되었습니다!');
                }}
                className="text-[#0284C7] font-bold hover:underline"
              >
                코드 복사
              </button>
            </div>
          </Card>
        </div>

      </div>
    </section>
  );
};
