# 🌌 Gengarileo Design System (GDS)

[![npm version](https://img.shields.io/badge/npm-v1.2.0-38bdf8.svg?style=flat-square)](https://www.npmjs.com/package/gengarileo-design-system)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-a855f7.svg?style=flat-square)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-f97316.svg?style=flat-square)](LICENSE)
[![Font: SIL OFL](https://img.shields.io/badge/Font-Gowun%20Dodum%20(OFL)-eab308.svg?style=flat-square)](https://fonts.google.com/specimen/Gowun+Dodum)

> **따뜻하고 지적인 가족의 온기(Family Heritage)**를 담은 시그니처 React UI 디자인 시스템입니다.  
> 맑고 단아한 **Aero Sky (#38BDF8)**를 메인 코어로, 재치와 깊이를 주는 **Papa Lavender (#A855F7)**를 서브로, **Baby Butter & Coral**을 직보색 포인트로 구성했습니다.  
> **100% 저작권/상표권 안심(MIT License, OFL 폰트)**으로 개인 및 상업용 프로젝트 어디서든 자유롭게 사용할 수 있습니다.

---

## 📦 설치 (Installation)

### 1) NPM / Yarn / PNPM으로 설치
```bash
npm install gengarileo-design-system
# or
yarn add gengarileo-design-system
# or
pnpm add gengarileo-design-system
```

### 2) 내 다른 로컬 프로젝트에서 즉시 테스트하기 (NPM 배포 전)
NPM에 아직 배포하지 않고 내 컴퓨터의 다른 React/Next.js 프로젝트에서 바로 써보고 싶을 때:

```bash
# 1. GDS 폴더에서 압축 패키지(.tgz) 빌드
npm pack

# 2. 내 다른 프로젝트 폴더로 이동 후 설치
cd path/to/my-other-project
npm install path/to/gengarileo-design-system/gengarileo-design-system-1.2.0.tgz
```
*(또는 `npm link` 명령어를 활용하셔도 됩니다.)*

---

## ⚡ 빠른 시작 (Quick Start)

어떤 React 프로젝트(Vite, Next.js, Remix, CRA 등)에서든 번들된 CSS와 컴포넌트를 즉시 임포트하여 사용할 수 있습니다.

```tsx
// main.tsx 또는 _app.tsx
import 'gengarileo-design-system/style.css';

// 내 컴포넌트 파일
import { Button, Select, Badge, Card, Toggle, Calendar, Checkbox, Input, GengarileoLogo } from 'gengarileo-design-system';
import { useState } from 'react';

export default function App() {
  const [toggleVal, setToggleVal] = useState(true);
  const [selectVal, setSelectVal] = useState('react');

  return (
    <Card variant="glowing" padding="lg" className="max-w-md mx-auto space-y-4">
      {/* GDS 시그니처 코스믹 로고 */}
      <GengarileoLogo size={42} showWordmark={true} />

      {/* 버튼 컴포넌트 */}
      <div className="flex gap-2">
        <Button variant="primary" size="md">메인 스카이 버튼</Button>
        <Button variant="secondary" size="md">라벤더 버튼</Button>
        <Button variant="gradient" size="md">듀오 그라데이션</Button>
      </div>

      {/* 인터랙티브 토글 & 체크박스 */}
      <Toggle 
        checked={toggleVal} 
        onChange={setToggleVal} 
        label="스마트 알림 받기" 
        description="가족 기념일 및 주요 일정 알림" 
      />

      {/* 셀렉트박스 */}
      <Select
        label="선호 기술 스택"
        value={selectVal}
        onChange={setSelectVal}
        options={[
          { value: 'react', label: 'React 19 & Next.js' },
          { value: 'tailwind', label: 'Tailwind CSS' },
          { value: 'gds', label: 'GDS Family Edition' },
        ]}
      />
    </Card>
  );
}
```

---

## 🔤 권장 폰트 적용 (Typography: 고운돋움 & 프리텐다드)

GDS는 친근하고 둥글둥글한 정감을 위해 **고운돋움(Gowun Dodum)** 및 가독성이 뛰어난 **Pretendard**를 표준 폰트로 채택하고 있습니다. (두 서체 모두 상업적 무료 라이선스인 SIL Open Font License / Free 입니다.)

### HTML `<head>`에 Google Font 추가:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Gowun+Dodum&display=swap" rel="stylesheet">
```

---

## 🧩 제공 컴포넌트 (Component Catalog)

| 컴포넌트 | 주요 기능 및 옵션 |
| :--- | :--- |
| **`Button`** | 9가지 variants (`primary`, `secondary`, `accent`, `gradient`, `soft-lavender`, `soft-sky`, `soft-butter`, `outline`, `ghost`), 5가지 sizes (`xs`, `sm`, `md`, `lg`, `xl`), `isLoading`, `leftIcon`, `rightIcon`, `fullWidth` |
| **`Badge`** | 6가지 컬러 variants (`lavender`, `sky`, `butter`, `coral`, `slate`, `outline`), 상태 닷(`dot`) 옵션 |
| **`Input`** | 라벨(`label`), 도움말(`helperText`), 에러 메시지(`error`), `leftIcon`, `rightIcon`, 세련된 포커스 링 |
| **`Select`** | 커스텀 드롭다운, 라벨, 설명문, 아이콘 옵션, 바깥 영역 클릭 감지 자동 닫힘 |
| **`Toggle`** | 부드러운 스위치 애니메이션, 라벨 & 보조 설명문, 3가지 컬러 테마, 3가지 크기 |
| **`Checkbox`** | 감성적인 라운드 체크박스, 부드러운 체크 애니메이션, 라벨 & 서브 텍스트 |
| **`Calendar`** | 직관적인 월/연도 네비게이션, '오늘' 빠른 이동 버튼, 오늘/선택 날짜 시각적 하이라이트 |
| **`Card`** | 4가지 스타일 (`default`, `flat`, `interactive`, `glowing`), 패딩 제어 |
| **`GengarileoLogo`** | 갈릴레오 행성 궤도 링 & 코스믹 크라운의 시그니처 벡터 심볼, 5가지 컬러 테마, 워드마크 옵션 |

---

## 🎨 디자인 토큰 & Tailwind CSS 연동

만약 사용 중인 프로젝트가 이미 **Tailwind CSS**를 쓰고 있다면, GDS 프리셋을 프로젝트 설정에 바로 주입할 수 있습니다:

```javascript
// tailwind.config.js
module.exports = {
  presets: [
    require('gengarileo-design-system/tokens/tailwind-preset')
  ],
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/gengarileo-design-system/dist/**/*.{js,ts,jsx,tsx}'
  ],
  // ...
}
```

이제 `bg-gds-sky-400`, `text-gds-lavender-600`, `shadow-gds-family` 등 GDS의 고유 토큰 유틸리티를 자유롭게 사용할 수 있습니다.

또한 JavaScript / TypeScript 코드 내에서 색상 메트릭스 데이터가 필요할 때 언제든지 직접 토큰을 임포트할 수 있습니다:
```typescript
import { COLOR_PALETTES } from 'gengarileo-design-system/tokens';

console.log(COLOR_PALETTES); // 전체 팔레트의 50~950 HEX 코드 및 스토리 데이터
```

---

## 🛠️ 개발 및 문서 사이트 (Development & Showcase)

이 레포지토리는 디자인 시스템 컴포넌트 빌드뿐만 아니라 **전체 브랜드 센터 웹 쇼케이스**를 함께 내장하고 있습니다.

```bash
# 개발 서버 구동 (실시간 미리보기 & 플레이그라운드)
npm run dev

# 라이브러리 NPM 패키지 빌드 (dist/ 생성)
npm run build:lib

# 전체 웹사이트 프로덕션 빌드
npm run build

# NPM 패키지 사전 검증 (Dry Run)
npm pack --dry-run
```

---

## ⚖️ 라이선스 및 지식재산권 (License & Compliance)

- **소프트웨어 라이선스**: [MIT License](LICENSE) (상업적 이용, 복제, 수정, 배포 완전 허용)
- **지식재산권 안전 검증**: 
  - 특정 기업의 상표권(포켓몬, 닌텐도, 라인 등) 침해 단어 100% 제거
  - 100% 순수 자체 창작 기하학 SVG 로고 심볼 탑재 (갈릴레오 천체 궤도 & 코스믹 크라운)
  - SIL Open Font License(OFL) 기반 완전 무료 폰트 채택
