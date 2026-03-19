import type { Dict } from './ko';

export const ja: Dict = {
  locale: 'ja',
  nav: {
    services: 'サービス',
    about: '会社概要',
    partners: 'パートナー',
    contact: 'お問い合わせ',
    cta: 'お問い合わせ',
  },
  hero: {
    badge: 'Security · Intelligence · Engineering',
    title1: '監査した全てのアプリに',
    title2: '重大な脆弱性がありました。',
    desc: 'SOC 2認証企業も、シリーズBスタートアップも、$500M+企業も例外ではありませんでした。',
    descBold: '48時間以内にあなたの製品が安全か確認してください。',
    ctaPrimary: '無料スキャンを受ける',
    ctaSecondary: 'サービスを見る',
  },
  stats: [
    { value: '17+', label: '分析完了したプロダクション・アプリ' },
    { value: '48h', label: 'URLから完全な設計図まで' },
    { value: '13K+', label: '単一プロジェクトでデコードしたプロトコル' },
    { value: '10x', label: '従来のコンサルティングより高速' },
  ],
  services: {
    label: 'サービス',
    title: 'どんなSaaS製品でも、48時間以内に\n完全な設計図を抽出できます。',
    desc: 'セキュリティ監査から投資デューデリジェンス、競合分析、製品設計まで — 一つの核心能力が全てを可能にします。',
    categories: [
      {
        category: 'Security',
        tagline: 'セキュリティはコストではありません。保険です。',
        items: [
          {
            icon: '01', title: 'Security Audit',
            hook: 'あなたのアプリには脆弱性があります。攻撃者より先に見つけます。',
            desc: '48時間以内にWebアプリ、API、DB、AIシステムの脆弱性を全数調査します。SOC 2認証企業でもクリティカルな脆弱性が発見されました。',
            link: 'https://securefirst.dev', product: 'SecureFirst',
          },
          {
            icon: '02', title: 'Architecture Exposure Audit',
            hook: 'あなたの製品は48時間で複製可能ですか？検証します。',
            desc: '競合他社があなたの設計図を抽出できるかテストします。内部プロトコル、ソースコード、APIスキーマの露出を検証します。',
            isNew: true,
          },
          {
            icon: '03', title: 'Compliance & Secure Development',
            hook: '本当に合格する監査。最初から正しく。',
            desc: 'SOC 2、ISO 27001の実際の技術統制を実装。最初からセキュリティが設計されたシステムを構築します。',
          },
        ],
      },
      {
        category: 'Investment & M&A',
        tagline: '投資前に技術を検証してください。',
        items: [
          {
            icon: '04', title: 'Tech Due Diligence',
            hook: 'このスタートアップに投資する価値があるか、48時間でお伝えします。',
            desc: 'コード品質、アーキテクチャ、セキュリティ、技術的負債を48時間で評価。VCとPEファンドのための技術デューデリジェンスレポート。',
            isNew: true,
          },
          {
            icon: '05', title: 'Moat Verification',
            hook: '技術的な堀は本物か、それともwebpackバンドルに過ぎないのか。',
            desc: '投資対象の技術的な堀が本物かどうかを検証します。48時間の複製可能性テストで証明または反証します。',
            isNew: true,
          },
          {
            icon: '06', title: 'Build vs Buy Analysis',
            hook: '買収するか、自社で構築するか。正確な答えをお伝えします。',
            desc: '買収対象製品の完全なアーキテクチャを抽出し、自社構築時のコストと期間を正確に算定します。',
            isNew: true,
          },
        ],
      },
      {
        category: 'Competitive Intelligence',
        tagline: '競合の技術を完全に把握してください。',
        items: [
          {
            icon: '07', title: 'Competitor Tech Benchmark',
            hook: '競合が何を構築したか、プロトコルレベルまで把握します。',
            desc: '競合の技術スタック、アーキテクチャ、内部プロトコル、API構造を完全分析。デスクトップアプリも含みます。',
            isNew: true,
          },
          {
            icon: '08', title: 'Replication Feasibility',
            hook: '競合の機能を作るのに正確にどれくらいかかるかお伝えします。',
            desc: '競合の特定機能を設計図ベースで分析し、実装に必要な正確な時間とリソースを算定します。',
            isNew: true,
          },
        ],
      },
      {
        category: 'Enterprise & Procurement',
        tagline: '導入前にも、導入後にも、しっかり検証を。',
        items: [
          {
            icon: '09', title: 'SaaS Vendor Assessment',
            hook: 'ベンダーは本当に安全ですか？チェックリストではなく、実際のコードを見ます。',
            desc: 'SaaS導入前にベンダーの実際のセキュリティレベルを検証します。チェックリストではなく、内部アーキテクチャを直接確認します。',
            isNew: true,
          },
          {
            icon: '10', title: 'Cyber Insurance Risk Assessment',
            hook: '引き受ける前にリスクを定量化してください。',
            desc: 'サイバー保険加入・引受前の技術的リスクを定量評価。実際の攻撃面分析に基づく正確なリスクレポート。',
            isNew: true,
          },
        ],
      },
      {
        category: 'Legal & Litigation',
        tagline: '技術紛争には技術証拠が必要です。',
        items: [
          {
            icon: '11', title: 'Expert Witness & IP Forensics',
            hook: '製品は複製されたか？証明または反証します。',
            desc: 'IP紛争、営業秘密訴訟で両製品のプロトコル/アーキテクチャを比較分析。法廷で使用可能な技術鑑定レポートを提供。',
            isNew: true,
          },
          {
            icon: '12', title: 'Patent & Trade Secret Analysis',
            hook: '独自技術か、オープンソースの組み合わせか。真実を見つけます。',
            desc: '特許侵害の有無、独自技術の有無を実際のコード/プロトコルレベルで判別します。',
            isNew: true,
          },
        ],
      },
      {
        category: 'Product Engineering',
        tagline: '設計図があれば、実装は早い。',
        items: [
          {
            icon: '13', title: 'Rapid Product Design',
            hook: '「Xのような製品を作って」 — 48時間で完全な設計図。',
            desc: '製品の完全な設計文書を48時間で提供します。APIスキーマ、データモデル、プロトコル、UI仕様を含みます。',
            isNew: true,
          },
          {
            icon: '14', title: 'AI & Automation',
            hook: '40時間の手作業を一つのコマンドで置き換えます。',
            desc: 'ブラウザ自動化、AIエージェント、ワークフロー最適化。反復作業を自動化して、チームが本当に重要なことに集中できるようにします。',
          },
        ],
      },
    ],
  },
  about: {
    label: '会社概要',
    title: 'どんな製品でも48時間で\n完全に把握します。',
    p1: '代表キム・ヒギョンは17以上のプロダクションアプリの完全なアーキテクチャを分析し、セキュリティを検証してきました。FAANG級製品からシードスタートアップまで —',
    p1Bold: '把握できなかった製品は一つもありませんでした。',
    p2: 'セキュリティ監査、技術デューデリジェンス、競合分析、製品設計 —',
    p2Bold: '従来コンサルティングの1/10のコスト、1/10の時間',
    p2After: 'で提供します。',
    p3: 'VC技術デューデリジェンス、M&A技術評価、競合ベンチマーク、ペネトレーションテスト — 何でも48時間以内に結果をお見せします。',
    founderName: 'HeeKyung Kim',
    founderTitle: 'Founder & Lead Security Auditor',
  },
  partners: {
    label: 'Partners & Technology',
    title: '実績あるインフラの上に構築します',
  },
  cta: {
    title: '競合より先に把握してください。',
    desc: '48時間以内に技術分析結果をお送りします。ミーティングも、営業電話もありません。',
    sub: 'セキュリティ監査、技術デューデリジェンス、競合分析 — まずは無料相談から。',
    ctaPrimary: '無料相談を申し込む',
  },
  footer: {
    ceo: 'CEO: HeeKyung Kim',
    bizNo: 'Business No: 740-05-03702',
    address: '53 Biraeseoro, Daedeok-gu, Daejeon 306, South Korea',
    phone: '+82 10-5769-4366',
    rights: '© 2026 HK Solution. All rights reserved.',
  },
};
