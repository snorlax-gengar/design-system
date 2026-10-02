import React, { useState } from 'react';
import { 
  ArrowRight, 
  Mail, 
  Lock, 
  TrendingUp 
} from 'lucide-react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { Input } from '../ui/Input';

export const ShowcaseSection: React.FC = () => {
  const [email, setEmail] = useState('user@gengarileo.design');
  const [password, setPassword] = useState('••••••••');
  const [loginLoading, setLoginLoading] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);

  const handleFakeLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoginLoading(true);
    setTimeout(() => {
      setLoginLoading(false);
      setLoginSuccess(true);
      setTimeout(() => setLoginSuccess(false), 3000);
    }, 1000);
  };

  return (
    <section id="showcase" className="py-16 md:py-24 border-t border-[#E2E8F0] bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-[#A855F7] bg-[#F3E8FF] px-2.5 py-1 rounded-full">
            Real-world Application
          </span>
          <h2 className="text-3xl font-extrabold text-[#0F172A] tracking-tight">
            실제 프로덕트에 적용된 디자인 시스템
          </h2>
          <p className="text-base text-[#64748B] max-w-2xl">
            로그인 화면, 분석 대시보드, 유저 프로필 카드 등 실제 프로젝트 화면에 적용했을 때의 완성도를 직접 확인해보세요.
          </p>
        </div>

        {/* 3 UI Mockup Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Mockup 1: Authentication Widget */}
          <Card variant="default" className="flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Badge variant="lavender" dot>인증 모듈</Badge>
                <span className="text-xs text-[#94A3B8]">GDS Auth UI</span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#0F172A]">환영합니다!</h3>
                <p className="text-xs text-[#64748B]">디자인 시스템 계정으로 로그인하세요.</p>
              </div>

              <form onSubmit={handleFakeLogin} className="space-y-3">
                <Input
                  label="이메일 주소"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  leftIcon={<Mail className="w-4 h-4" />}
                />

                <Input
                  label="비밀번호"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  leftIcon={<Lock className="w-4 h-4" />}
                  helperText="영문, 숫자 포함 8자리 이상"
                />

                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="primary"
                    size="md"
                    fullWidth
                    isLoading={loginLoading}
                  >
                    {loginSuccess ? '인증 완료! ✓' : '로그인'}
                  </Button>
                </div>
              </form>
            </div>

            <div className="pt-4 border-t border-[#F1F5F9] text-center">
              <p className="text-xs text-[#64748B]">
                계정이 없으신가요?{' '}
                <button className="text-[#A855F7] font-semibold hover:underline">
                  회원가입
                </button>
              </p>
            </div>
          </Card>

          {/* Mockup 2: Analytics KPI Card */}
          <Card variant="interactive" className="space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Badge variant="sky" dot>성장 지표</Badge>
                <Badge variant="butter">★ PRO FEATURE</Badge>
              </div>

              <div>
                <span className="text-xs font-semibold text-[#64748B] uppercase tracking-wider">
                  이번 달 신규 활성 유저
                </span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-3xl font-extrabold text-[#0F172A]">284,910</span>
                  <span className="text-xs font-bold text-[#0284C7] bg-[#E0F2FE] px-2 py-0.5 rounded-full flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" /> +24.8%
                  </span>
                </div>
              </div>

              {/* Progress bar with dual gradient */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs text-[#64748B]">
                  <span>목표 달성률</span>
                  <span className="font-semibold text-[#7E22CE]">92.4%</span>
                </div>
                <div className="h-2.5 w-full bg-[#F1F5F9] rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#A855F7] to-[#38BDF8] rounded-full w-[92.4%]" />
                </div>
              </div>

              {/* Quick stats mini list */}
              <div className="bg-[#F8FAFC] rounded-xl p-3 space-y-2 border border-[#E2E8F0]">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#64748B]">전환율 (Conversion)</span>
                  <span className="font-bold text-[#0F172A]">4.82%</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#64748B]">고객 만족도 (CSAT)</span>
                  <span className="font-bold text-[#0F172A]">98.7점</span>
                </div>
              </div>
            </div>

            <div className="flex gap-2">
              <Button variant="secondary" size="sm" fullWidth>
                보고서 다운로드
              </Button>
              <Button variant="outline" size="sm">
                상세보기
              </Button>
            </div>
          </Card>

          {/* Mockup 3: Project & Notification Card */}
          <Card variant="glowing" className="space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#A855F7] to-[#38BDF8] flex items-center justify-center text-white font-bold text-sm">
                    G
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#0F172A]">Gengarileo Workspace</h4>
                    <p className="text-[11px] text-[#64748B]">Project Admin</p>
                  </div>
                </div>
                <Badge variant="coral">새 알림 3개</Badge>
              </div>

              <p className="text-xs text-[#475569] leading-relaxed">
                모든 컴포넌트가 동일한 디자인 토큰을 참조하므로, 서비스 전체가 마치 하나의 유기체처럼 통일된 톤앤매너를 유지합니다.
              </p>

              {/* Tag Cloud */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                <Badge variant="lavender">#DesignSystem</Badge>
                <Badge variant="sky">#SkyBlue</Badge>
                <Badge variant="butter">#ButterYellow</Badge>
                <Badge variant="coral">#CoralPoint</Badge>
                <Badge variant="slate">#CleanCode</Badge>
              </div>
            </div>

            {/* Action with Coral Accent (CTA) */}
            <div className="space-y-2 pt-2">
              <Button 
                variant="accent" 
                size="md" 
                fullWidth 
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                지금 프로젝트 배포하기
              </Button>
              <p className="text-[11px] text-center text-[#94A3B8]">
                보색(Soft Coral)은 가장 중요한 실행 버튼에 적합합니다.
              </p>
            </div>
          </Card>

        </div>

      </div>
    </section>
  );
};
