import type { Dict } from './ko';

export const ja: Dict = {
  locale: 'ja',
  nav: {
    services: '主要サービス',
    about: '紹介',
    partners: '技術スタック',
    contact: 'お問い合わせ',
    cta: 'プロジェクト相談',
  },
  hero: {
    badge: 'Tech Diligence · Security · Execution',
    title1: '複雑な技術課題を',
    title2: '素早く解決する専門チーム',
    desc: 'セキュリティ監査、技術デューデリジェンス、競合分析、フォレンジック、MVP開発まで。',
    descBold: '重要な技術判断と実行を一か所で支援します。',
    highlights: ['Security Audit', 'Tech Due Diligence', 'Competitive Intelligence', 'Product Execution'],
    ctaPrimary: 'プロジェクトを相談する',
    ctaSecondary: '主要サービスを見る',
  },
  stats: [
    { value: '60+', label: '分析・検証した本番プロダクト' },
    { value: '48h', label: '初期診断と主要リスク整理' },
    { value: '4', label: 'メインで集中する主要サービス' },
    { value: '10x', label: '従来コンサルより速い意思決定' },
  ],
  proof: {
    label: 'WHY HK SOLUTION',
    title: '技術リスクを説明ではなく証拠として整理します。',
    desc: 'HK Solutionはサービス一覧を並べるのではなく、企業が重要な判断を下す瞬間に必要な分析と実行を提供します。',
    items: [
      {
        title: 'Decision-grade analysis',
        desc: 'セキュリティ、技術実査、競合分析、フォレンジックを経営判断に直結する形で整理します。',
      },
      {
        title: 'Fast first answers',
        desc: '48時間以内に何が重要で、どこまで深掘りすべきかを最初に示します。',
      },
      {
        title: 'From diagnosis to execution',
        desc: '課題の発見で終わらず、改善、再設計、検証、MVP実行まで継続して支援できます。',
      },
    ],
  },
  services: {
    label: 'CORE SERVICES',
    title: 'メインでは4つの主要サービスだけを明確に見せます。',
    desc: 'HK Solutionは複雑な技術課題を分析して解決する上位ブランドです。セキュリティは代表的な専門領域として残し、高単価案件は技術判断と実行を軸に説明します。',
    categories: [
      {
        category: 'Security Audit',
        tagline: '外部露出、実際の脆弱性、攻撃面の検証',
        items: [
          {
            icon: '01',
            title: 'Security Audit',
            hook: 'チェックリストではなく、実際の攻撃者が見る攻撃面を検証します。',
            desc: 'Webアプリ、API、認証、データ露出、決済フロー、AI設定まで攻撃者視点で点検します。セキュリティ案件の入口はSecureFirstからより速く始められます。',
            link: 'https://securefirst.dev',
            product: 'SecureFirst',
          },
        ],
      },
      {
        category: 'Tech Due Diligence',
        tagline: '投資、調達、導入前の技術検証',
        items: [
          {
            icon: '02',
            title: 'Tech Due Diligence',
            hook: '見栄えが良い製品ではなく、実際に耐えられる製品かを検証します。',
            desc: 'コード品質、アーキテクチャ、セキュリティ、技術的負債、運用リスクを整理し、投資・調達・導入判断に使えるレポートとして提供します。',
          },
        ],
      },
      {
        category: 'Competitive Intelligence',
        tagline: '競合の技術構造と再現難易度の分析',
        items: [
          {
            icon: '03',
            title: 'Competitor Tech Benchmark',
            hook: '競合の機能、構造、実装難易度をプロトコルレベルまで把握します。',
            desc: 'フロントエンドバンドル、API、内部フロー、製品構造を分析し、追随戦略、Build vs Buy判断、差別化ポイント整理に役立つ形で提供します。',
          },
        ],
      },
      {
        category: 'Expert Witness & IP Forensics',
        tagline: '技術紛争やIP論点に必要な証拠化',
        items: [
          {
            icon: '04',
            title: 'Expert Witness & IP Forensics',
            hook: '複製有無、独自技術性、実装の類似性を技術証拠として整理します。',
            desc: '法律事務所、企業、投資家向けに、製品構造比較、フォレンジック分析、技術意見書を提供します。',
          },
        ],
      },
    ],
    securefirst: {
      label: 'SECUREFIRST',
      title: 'セキュリティの入口はSecureFirstに分けました。',
      desc: '広告や初期リード獲得はSecureFirstが担い、より大きなセキュリティ案件や高度な技術判断はHK Solutionへつなぎます。',
      points: [
        'URLを送るだけで、24時間以内に外部から見える主要な脆弱性を整理します。',
        'クレジットカードも営業電話も不要で開始できます。',
        '初期診断の後は、有償監査、修正支援、継続モニタリングへ拡張できます。',
      ],
      ctaPrimary: 'SecureFirstを見る',
      ctaSecondary: 'HK Solutionに相談する',
      href: 'https://securefirst.dev',
    },
    special: {
      label: 'SPECIAL PROJECTS',
      title: '必要なときだけ開く拡張サービス',
      desc: 'すべてを前面に出すのではなく、主要サービスの後に続く実行型プロジェクトだけを別枠で紹介します。',
      items: [
        {
          icon: '05',
          title: 'MVP & Product Build',
          desc: '検証後にすばやくプロトタイプや実運用プロダクトを作るプロジェクト。',
        },
        {
          icon: '06',
          title: 'AI Agents & Automation',
          desc: '業務自動化、営業自動化、運用効率化のためのカスタムエージェントとワークフロー。',
        },
        {
          icon: '07',
          title: 'QA & Regression',
          desc: 'リリース前後に見落としやすいフロー、権限、データ整合性を検証するテスト体系。',
        },
        {
          icon: '08',
          title: 'Vendor & Procurement Review',
          desc: '導入候補製品の技術構造とリスクを事前に評価する企業向けレビュー。',
        },
      ],
    },
  },
  about: {
    label: 'ABOUT',
    title: '技術を検証し、\nリスクを減らし、\n実行までつなげます。',
    p1: 'HK Solutionは単なるセキュリティ会社ではなく、セキュリティ、実査、分析、実行を一体で扱う専門スタジオとして設計されています。',
    p1Bold: '課題を見つけるチームと解決するチームが分かれていません。',
    p2: 'SecureFirstが迅速なセキュリティ入口を担い、HK Solutionは技術実査、競合分析、フォレンジック、実行案件のような',
    p2Bold: '高難度のB2Bプロジェクトを深く担当します',
    p2After: '。',
    p3: '代表のHeeKyung Kimは、本番SaaS、AIサービス、エンタープライズ製品の分析とリスク検証を中心にプロジェクトをリードしています。',
    founderName: 'HeeKyung Kim',
    founderTitle: 'Founder & Technical Lead',
  },
  partners: {
    label: 'EXECUTION STACK',
    title: '分析の後に実行までつなぐ技術スタック',
  },
  cta: {
    title: 'セキュリティ監査、技術実査、競合分析が必要な場面なら',
    desc: 'プロジェクトに合った開始地点を素早く整理します。',
    sub: 'セキュリティの入口はSecureFirstへ、高単価の技術判断と実行はHK Solutionで進めます。',
    ctaPrimary: 'プロジェクト相談を送る',
  },
  footer: {
    ceo: 'CEO: HeeKyung Kim',
    bizNo: 'Business No: 740-05-03702',
    address: '53 Biraeseoro, Daedeok-gu, Daejeon 306, South Korea',
    phone: '+82 10-5769-4366',
    rights: '© 2026 HK Solution. All rights reserved.',
  },
};
