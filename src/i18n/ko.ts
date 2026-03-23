export const ko = {
  locale: 'ko' as string,
  nav: {
    services: '서비스',
    about: '소개',
    partners: '기술 스택',
    contact: '문의',
    cta: '문의하기',
  },
  hero: {
    badge: 'Security · Intelligence · Engineering',
    title1: '분석한 모든 앱에서',
    title2: '크리티컬 취약점이 발견됐습니다.',
    desc: 'SOC 2 인증 기업도, 시리즈 B 스타트업도, $500M+ 기업도 예외 없었습니다.',
    descBold: '48시간 안에 당신의 제품이 안전한지 확인하세요.',
    ctaPrimary: '무료 보안 스캔 받기',
    ctaSecondary: '서비스 보기',
  },
  stats: [
    { value: '17+', label: '분석 완료한 프로덕션 앱' },
    { value: '48h', label: 'URL에서 전체 설계도까지' },
    { value: '13K+', label: '단일 프로젝트 디코딩 프로토콜' },
    { value: '10x', label: '기존 컨설팅 대비 속도' },
  ],
  services: {
    label: '서비스',
    title: '어떤 SaaS 제품이든, 48시간 안에\n전체 설계도를 추출할 수 있습니다.',
    desc: '보안 감사부터 투자 실사, 경쟁사 분석, 제품 설계까지 — 하나의 핵심 역량이 모든 것을 가능하게 합니다.',
    categories: [
      {
        category: 'Security',
        tagline: '보안은 비용이 아닙니다. 보험입니다.',
        items: [
          {
            icon: '01', title: 'Security Audit',
            hook: '당신의 앱에는 취약점이 있습니다. 공격자보다 먼저 찾아드립니다.',
            desc: '48시간 안에 웹앱, API, DB, AI 시스템의 취약점을 전수 조사합니다. SOC 2 인증 기업에서도 크리티컬 취약점이 나왔습니다.',
            link: 'https://securefirst.dev', product: 'SecureFirst',
          },
          {
            icon: '02', title: 'Architecture Exposure Audit',
            hook: '당신의 제품이 48시간 안에 복제 가능한지 테스트합니다.',
            desc: '경쟁사가 당신의 전체 설계도를 추출할 수 있는지 테스트합니다. 내부 프로토콜, 소스코드, API 스키마 노출 여부를 검증합니다.',
            isNew: true,
          },
          {
            icon: '03', title: 'Compliance & Secure Development',
            hook: '진짜로 통과하는 감사. 처음부터 올바르게.',
            desc: 'SOC 2, ISO 27001 실제 기술 통제 구현. 처음부터 보안이 설계된 시스템을 구축합니다.',
          },
        ],
      },
      {
        category: 'Investment & M&A',
        tagline: '투자 전에 기술을 검증하세요.',
        items: [
          {
            icon: '04', title: 'Tech Due Diligence',
            hook: '이 스타트업에 투자할 가치가 있는지, 48시간 안에 알려드립니다.',
            desc: '코드 품질, 아키텍처, 보안, 기술 부채를 48시간에 평가합니다. VC와 PE 펀드를 위한 기술 실사 리포트.',
            isNew: true,
          },
          {
            icon: '05', title: 'Moat Verification',
            hook: '기술적 해자가 진짜인지, 아니면 webpack 번들에 불과한지.',
            desc: '투자 대상의 기술적 해자가 진짜인지 검증합니다. 48시간 복제 가능성 테스트로 증명하거나 반증합니다.',
            isNew: true,
          },
          {
            icon: '06', title: 'Build vs Buy Analysis',
            hook: '인수할까, 직접 만들까? 정확한 답을 드립니다.',
            desc: '인수 대상 제품의 전체 아키텍처를 추출하고, 직접 구현 시 비용과 기간을 정확히 산정합니다.',
            isNew: true,
          },
        ],
      },
      {
        category: 'Competitive Intelligence',
        tagline: '경쟁사의 기술을 완전히 파악하세요.',
        items: [
          {
            icon: '07', title: 'Competitor Tech Benchmark',
            hook: '경쟁사가 무엇을 만들었는지, 프로토콜 레벨까지 파악합니다.',
            desc: '경쟁사의 기술 스택, 아키텍처, 내부 프로토콜, API 구조를 완전 분석합니다. 데스크톱 앱까지 포함.',
            isNew: true,
          },
          {
            icon: '08', title: 'Replication Feasibility',
            hook: '경쟁사의 기능을 만드는 데 정확히 얼마나 걸리는지 알려드립니다.',
            desc: '경쟁사의 특정 기능을 설계도 기반으로 분석하고, 구현에 필요한 정확한 시간과 리소스를 산정합니다.',
            isNew: true,
          },
        ],
      },
      {
        category: 'Enterprise & Procurement',
        tagline: '도입 전에, 도입 후에, 제대로 검증하세요.',
        items: [
          {
            icon: '09', title: 'SaaS Vendor Assessment',
            hook: '벤더가 정말 안전한가요? 체크리스트가 아니라 실제 코드를 봅니다.',
            desc: 'SaaS 도입 전 벤더의 실제 보안 수준을 검증합니다. 체크리스트가 아니라 내부 아키텍처와 데이터 보호 수준을 직접 확인합니다.',
            isNew: true,
          },
          {
            icon: '10', title: 'Cyber Insurance Risk Assessment',
            hook: '인수하기 전에 리스크를 정량화하세요.',
            desc: '사이버 보험 가입/인수 전 기술적 리스크를 정량 평가합니다. 실제 공격 표면 분석 기반의 정확한 리스크 리포트.',
            isNew: true,
          },
        ],
      },
      {
        category: 'Legal & Litigation',
        tagline: '기술 분쟁에는 기술 증거가 필요합니다.',
        items: [
          {
            icon: '11', title: 'Expert Witness & IP Forensics',
            hook: '제품이 복제되었는가? 증명하거나 반증합니다.',
            desc: 'IP 분쟁, 영업비밀 소송에서 양쪽 제품의 프로토콜/아키텍처를 비교 분석합니다. 법정에서 사용 가능한 기술 감정 리포트 제공.',
            isNew: true,
          },
          {
            icon: '12', title: 'Patent & Trade Secret Analysis',
            hook: '독자 기술인가, 오픈소스 조합인가? 진실을 찾습니다.',
            desc: '특허 침해 여부, 독자 기술 유무를 실제 코드/프로토콜 레벨에서 판별합니다.',
            isNew: true,
          },
        ],
      },
      {
        category: '제품 개발',
        tagline: '설계도에서 프로덕션까지 — 빠르게.',
        items: [
          {
            icon: '13', title: '풀스택 MVP 개발',
            hook: '48시간 프로토타입. 1-2주 프로덕션.',
            desc: 'React, Next.js, Node.js, PostgreSQL — 와이어프레임이 아니라 동작하는 제품을 만듭니다. 60개+ SaaS 아키텍처 역분석 완료.',
            isNew: true,
          },
          {
            icon: '14', title: '급속 제품 설계',
            hook: '"X 같은 제품 만들어주세요" — 48시간에 완전한 설계도.',
            desc: '원하는 제품의 전체 설계 문서를 48시간에 제공합니다. API 스키마, 데이터 모델, 프로토콜, UI 스펙 포함.',
            isNew: true,
          },
        ],
      },
      {
        category: 'AI & 자동화',
        tagline: '수작업을 지능형 에이전트로 대체합니다.',
        items: [
          {
            icon: '15', title: 'AI 에이전트 개발',
            hook: '새벽 3시에도 고객이 답변을 받습니다.',
            desc: '맞춤형 AI 챗봇, 세일즈 에이전트, 서포트 봇. 웹, 텔레그램, 이메일 — GPT-4o 기반 멀티채널 배포.',
            isNew: true,
          },
          {
            icon: '16', title: '브라우저 & 데스크톱 자동화',
            hook: '386개 도구. 사람이 클릭할 수 있으면 자동화합니다.',
            desc: '186개 브라우저 + 200개 데스크톱 자동화 도구. 데이터 수집, 워크플로우, 앱 제어 — Windows, Android, iOS, Electron.',
            isNew: true,
          },
        ],
      },
      {
        category: 'E2E 테스트 & QA',
        tagline: '모든 버튼. 모든 플로우. 모든 엣지 케이스.',
        items: [
          {
            icon: '17', title: '11계층 E2E 전수 테스트',
            hook: '"제 PC에서는 되는데요"는 테스트 결과가 아닙니다.',
            desc: 'UI + 예상 결과 검증 + CRUD 라이프사이클 + 유령 데이터 탐지 + API~DB 관통 검증 + 권한별 분기 + 성능. 빈틈 제로.',
            isNew: true,
          },
          {
            icon: '18', title: '자동화 회귀 테스트',
            hook: '유저보다 먼저 버그를 잡습니다.',
            desc: 'CI/CD 연동 테스트 스위트. 모든 배포 자동 검증. 삭제 플로우, 권한 엣지, 데이터 잔류까지 — 남들이 건너뛰는 것을 테스트합니다.',
            isNew: true,
          },
        ],
      },
      {
        category: '세일즈 & 아웃바운드',
        tagline: '스팸 폴더가 아닌 받은편지함에 도착하는 콜드 이메일.',
        items: [
          {
            icon: '19', title: '콜드 이메일 인프라',
            hook: '답장이 안 오는 이유? 이메일이 도착조차 안 합니다.',
            desc: '도메인 웜업, 전달률 최적화, 시퀀스 설계. Apollo, Instantly, Lemlist, Clay, Reply.io, respond.io 6개 플랫폼 교차 분석 기반.',
            isNew: true,
          },
          {
            icon: '20', title: 'AI 세일즈 에이전트',
            hook: '이의처리 완료. 미팅 예약 완료. 자동으로.',
            desc: 'AI 기반 이의처리, 팔로업, 미팅 스케줄링. 당신의 톤을 학습하고 CRM과 연동됩니다.',
            isNew: true,
          },
        ],
      },
    ],
  },
  about: {
    label: '소개',
    title: '어떤 제품이든 48시간이면\n완전히 파악합니다.',
    p1: '대표 김희경은 17개 이상의 프로덕션 앱의 전체 아키텍처를 분석하고 보안을 검증해 왔습니다. FAANG급 제품부터 시드 스타트업까지 —',
    p1Bold: '단 한 곳도 파악하지 못한 곳은 없었습니다.',
    p2: '보안 감사, 기술 실사, 경쟁사 분석, 제품 설계 —',
    p2Bold: '기존 컨설팅 대비 1/10 비용, 1/10 시간',
    p2After: '에 제공합니다.',
    p3: 'VC 기술 실사, M&A 기술 평가, 경쟁사 벤치마크, 모의 침투 테스트 — 무엇이든 48시간 안에 결과를 보여드립니다.',
    founderName: 'HeeKyung Kim',
    founderTitle: 'Founder & Lead Security Auditor',
  },
  partners: {
    label: '기술 스택',
    title: '우리가 사용하는 기술',
  },
  cta: {
    title: '경쟁사보다 먼저 파악하세요.',
    desc: '48시간 안에 기술 분석 결과를 보내드립니다. 미팅도, 영업 전화도 없습니다.',
    sub: '보안 감사, 기술 실사, 경쟁사 분석 — 무엇이든 먼저 무료 상담을 받아보세요.',
    ctaPrimary: '무료 상담 신청',
  },
  footer: {
    ceo: 'CEO: HeeKyung Kim',
    bizNo: 'Business No: 740-05-03702',
    address: '53 Biraeseoro, Daedeok-gu, Daejeon 306, South Korea',
    phone: '+82 10-5769-4366',
    rights: '© 2026 HK Solution. All rights reserved.',
  },
};

export type Dict = {
  locale: string;
  nav: { services: string; about: string; partners: string; contact: string; cta: string };
  hero: { badge: string; title1: string; title2: string; desc: string; descBold: string; ctaPrimary: string; ctaSecondary: string };
  stats: { value: string; label: string }[];
  services: {
    label: string; title: string; desc: string;
    categories: {
      category: string; tagline: string;
      items: { icon: string; title: string; hook: string; desc: string; link?: string; product?: string; isNew?: boolean }[];
    }[];
  };
  about: { label: string; title: string; p1: string; p1Bold: string; p2: string; p2Bold: string; p2After: string; p3: string; founderName: string; founderTitle: string };
  partners: { label: string; title: string };
  cta: { title: string; desc: string; sub: string; ctaPrimary: string };
  footer: { ceo: string; bizNo: string; address: string; phone: string; rights: string };
};
