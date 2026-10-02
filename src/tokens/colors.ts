export interface ColorShade {
  step: string;
  hex: string;
  name: string;
  usage: string;
  isDarkText?: boolean;
}

export interface ColorFamily {
  id: string;
  name: string;
  koreanName: string;
  category: 'primary' | 'secondary' | 'complementary' | 'neutral';
  description: string;
  role: string;
  baseHex: string;
  familyStory?: string;
  shades: ColorShade[];
}

export const COLOR_PALETTES: ColorFamily[] = [
  {
    id: 'sky',
    name: 'Aero Sky (Primary Core)',
    koreanName: '에어로 스카이 (엄마의 하늘 / 메인 브랜드)',
    category: 'primary',
    description: '가족을 포근하고 맑게 품어주는 엄마의 온화한 셔츠에서 영감을 얻은 메인 시그니처 컬러입니다. 사용자에게 끝없는 신뢰감과 인지적 편안함을 선사합니다.',
    role: '★ 메인 브랜드 아이덴티티, 주 액션 버튼(Primary CTA), 포커스 링, 활성화 탭',
    baseHex: '#38BDF8',
    familyStory: 'Mother’s Gentle Sky — 맑고 단아하며 변함없이 가족을 감싸주는 중심 하늘',
    shades: [
      { step: '50', hex: '#F0F9FF', name: 'Sky 50', usage: '가장 연한 배경, 마우스 호버 배경', isDarkText: true },
      { step: '100', hex: '#E0F2FE', name: 'Sky 100', usage: '스카이 칩 배경, 틴트 패널 하이라이트', isDarkText: true },
      { step: '200', hex: '#BAE6FD', name: 'Sky 200', usage: '부드러운 포커스 아웃라인, 선택된 카드 경계', isDarkText: true },
      { step: '300', hex: '#7DD3FC', name: 'Sky 300', usage: '차분한 그래픽 일러스트, 진행 바', isDarkText: true },
      { step: '400', hex: '#38BDF8', name: 'Sky 400 (Brand)', usage: '★ 핵심 브랜드 컬러, 주요 액션 버튼', isDarkText: false },
      { step: '500', hex: '#0EA5E9', name: 'Sky 500', usage: '버튼 호버(Hover) 및 인터랙션 상태', isDarkText: false },
      { step: '600', hex: '#0284C7', name: 'Sky 600', usage: '버튼 클릭(Active), 높은 가독성의 텍스트', isDarkText: false },
      { step: '700', hex: '#0369A1', name: 'Sky 700', usage: '정보성 헤더 텍스트, 다크 배경 강조', isDarkText: false },
      { step: '800', hex: '#075985', name: 'Sky 800', usage: '딥 블루 텍스트, 가독성 높은 서브헤드', isDarkText: false },
      { step: '900', hex: '#0C4A6E', name: 'Sky 900', usage: '심해 네이비 텍스트', isDarkText: false },
      { step: '950', hex: '#082F49', name: 'Sky 950', usage: '가장 어두운 밤하늘 텍스트', isDarkText: false },
    ],
  },
  {
    id: 'lavender',
    name: 'Papa Lavender (Secondary)',
    koreanName: '파파 라벤더 (아빠의 위트 / 보조 브랜드)',
    category: 'secondary',
    description: '유쾌한 장난기와 번뜩이는 지성, 가족을 든든하게 받쳐주는 아빠의 개성을 담은 보조 브랜드 컬러입니다. 차가운 스카이블루에 몽환적인 깊이와 온기를 더합니다.',
    role: '서브 브랜드 아이덴티티, 크리에이티브 버튼, 특별 기능 태그, 듀오 그라데이션',
    baseHex: '#A855F7',
    familyStory: 'Father’s Creative Wit — 소년의 호기심과 장난기를 잃지 않는 든든한 멘토',
    shades: [
      { step: '50', hex: '#FAF5FF', name: 'Lavender 50', usage: '연보라 배경 틴트, 호버 배경', isDarkText: true },
      { step: '100', hex: '#F3E8FF', name: 'Lavender 100', usage: '서브 뱃지/칩 배경, 선택된 항목', isDarkText: true },
      { step: '200', hex: '#E9D5FF', name: 'Lavender 200', usage: '선택 경계선, 연보라 아웃라인', isDarkText: true },
      { step: '300', hex: '#D8B4FE', name: 'Lavender 300', usage: '부드러운 일러스트, 서브 차트', isDarkText: true },
      { step: '400', hex: '#C084FC', name: 'Lavender 400', usage: '보조 포커스 링, 밝은 테마 강조', isDarkText: true },
      { step: '500', hex: '#A855F7', name: 'Lavender 500 (Brand)', usage: '★ 보조 브랜드 대표 컬러, 라벤더 액션', isDarkText: false },
      { step: '600', hex: '#9333EA', name: 'Lavender 600', usage: '라벤더 버튼 호버(Hover)', isDarkText: false },
      { step: '700', hex: '#7E22CE', name: 'Lavender 700', usage: '라벤더 버튼 액티브(Active)', isDarkText: false },
      { step: '800', hex: '#6B21A8', name: 'Lavender 800', usage: '어두운 배경 위 보라색 텍스트', isDarkText: false },
      { step: '900', hex: '#581C87', name: 'Lavender 900', usage: '다크 모드 포인트', isDarkText: false },
      { step: '950', hex: '#3B0764', name: 'Lavender 950', usage: '심해 보라 텍스트', isDarkText: false },
    ],
  },
  {
    id: 'butter',
    name: 'Baby Butter (Family Accent)',
    koreanName: '베이비 버터 (아기의 첫 햇살 / 감성 보색)',
    category: 'complementary',
    description: '세상에 온 천사 같은 아기의 뽀얗고 포근한 볼살과 배내옷에서 온 따뜻한 버터 옐로우입니다. 하늘과 라벤더 사이에서 가장 반짝이는 생기를 불어넣습니다.',
    role: '신규 기능 뱃지, 북마크 별점, 프로모션 카드, 반짝이는 별빛 포인트',
    baseHex: '#FEF08A',
    familyStory: 'Baby’s Pure Sunlight — 세상에서 가장 무해하고 사랑스러운 따뜻한 첫 빛',
    shades: [
      { step: '50', hex: '#FEFCE8', name: 'Butter 50', usage: '극도로 부드러운 웜 크림 배경', isDarkText: true },
      { step: '100', hex: '#FEF9C3', name: 'Butter 100', usage: '프로모션 배너 연한 배경', isDarkText: true },
      { step: '200', hex: '#FEF08A', name: 'Butter 200 (Brand)', usage: '★ 아기 햇살 시그니처 뱃지/태그', isDarkText: true },
      { step: '300', hex: '#FDE047', name: 'Butter 300', usage: '별점 아이콘, 하이라이트', isDarkText: true },
      { step: '400', hex: '#FACC15', name: 'Butter 400', usage: '주의 배지, 경쾌한 알림', isDarkText: true },
      { step: '500', hex: '#EAB308', name: 'Butter 500', usage: '강조 아이콘, 버튼 보더', isDarkText: false },
      { step: '600', hex: '#CA8A04', name: 'Butter 600', usage: '버터 텍스트 가독성 확보용', isDarkText: false },
      { step: '700', hex: '#A16207', name: 'Butter 700', usage: '골드 앰버 텍스트', isDarkText: false },
    ],
  },
  {
    id: 'coral',
    name: 'Baby Peach / Soft Coral (Action Accent)',
    koreanName: '베이비 피치 / 코랄 (아기의 생기 / 직관 보색)',
    category: 'complementary',
    description: '스카이블루의 완전한 직보색이자, 아가의 상기된 복숭아빛 볼처럼 사랑스럽고 선명한 코랄입니다. 사용자의 시선을 단숨에 사로잡는 강력한 CTA를 담당합니다.',
    role: '결제/전송 버튼, 미확인 알림 뱃지, 긴급 알림, 핵심 전환 행동 유도',
    baseHex: '#FB923C',
    familyStory: 'Baby’s Rosy Cheeks — 복숭아처럼 발그레한 생기와 가장 빠른 시선 유도',
    shades: [
      { step: '100', hex: '#FFEDD5', name: 'Coral 100', usage: '알림 배너 배경', isDarkText: true },
      { step: '200', hex: '#FED7AA', name: 'Coral 200', usage: '소프트 태그', isDarkText: true },
      { step: '300', hex: '#FDBA74', name: 'Coral 300', usage: '부드러운 살구 하이라이트', isDarkText: true },
      { step: '400', hex: '#FB923C', name: 'Coral 400 (Brand)', usage: '★ 결제/구매 핵심 CTA', isDarkText: false },
      { step: '500', hex: '#F97316', name: 'Coral 500', usage: '강한 액션 버튼', isDarkText: false },
      { step: '600', hex: '#EA580C', name: 'Coral 600', usage: '호버 상태, 에러/주의 텍스트', isDarkText: false },
      { step: '700', hex: '#C2410C', name: 'Coral 700', usage: '다크 코랄 텍스트', isDarkText: false },
    ],
  },
  {
    id: 'slate',
    name: 'Family Home Slate (Neutral)',
    koreanName: '홈 슬레이트 (가족의 보금자리 / 뉴트럴)',
    category: 'neutral',
    description: '가족들이 살아가는 아늑하고 편안한 집처럼, 차분한 블루 틴트를 머금은 세련된 쿨 슬레이트 그레이입니다.',
    role: '앱 배경, 카드 서피스, 구분선, 본문 텍스트, 플레이스홀더',
    baseHex: '#64748B',
    familyStory: 'Family Home — 안정감과 편안한 휴식을 주는 따뜻하고 단단한 울타리',
    shades: [
      { step: '50', hex: '#F8FAFC', name: 'Slate 50', usage: '앱 전체 배경(Background)', isDarkText: true },
      { step: '100', hex: '#F1F5F9', name: 'Slate 100', usage: '인풋 필드 배경, 카드 배경 2', isDarkText: true },
      { step: '200', hex: '#E2E8F0', name: 'Slate 200', usage: '기본 보더(Border), 구분선(Divider)', isDarkText: true },
      { step: '300', hex: '#CBD5E1', name: 'Slate 300', usage: '강조 보더, 비활성 텍스트', isDarkText: true },
      { step: '400', hex: '#94A3B8', name: 'Slate 400', usage: '플레이스홀더, 보조 아이콘', isDarkText: true },
      { step: '500', hex: '#64748B', name: 'Slate 500', usage: '캡션(Caption), 메타 정보 텍스트', isDarkText: false },
      { step: '600', hex: '#475569', name: 'Slate 600', usage: '보조 본문(Secondary Body)', isDarkText: false },
      { step: '700', hex: '#334155', name: 'Slate 700', usage: '일반 본문 텍스트(Body Text)', isDarkText: false },
      { step: '800', hex: '#1E293B', name: 'Slate 800', usage: '서브 헤드라인(Subtitle)', isDarkText: false },
      { step: '900', hex: '#0F172A', name: 'Slate 900', usage: '메인 헤드라인 텍스트(Heading)', isDarkText: false },
    ],
  },
];
