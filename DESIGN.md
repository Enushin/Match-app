# Match-app DESIGN.md

> ビジネスマッチングプラットフォームのデザインシステム定義。
> 日本市場向け。信頼感 × 先進性。AIマッチング推薦搭載。

---

## 1. Design Philosophy

### コアコンセプト: 「信頼の余白」

日本のビジネスプロフェッショナルが安心して使える「場」を作る。
派手さではなく、余白と情報設計の質で信頼を獲得する。

**3原則**:
1. **Professional Warmth** — 冷たくない信頼感。インディゴ基調 + ウォームアクセント
2. **Effortless Clarity** — 3秒でわかるUI。複雑な機能を直感的に
3. **AI as Copilot** — AIは主張せず、さりげなく最適解を提示

### Anti-Patterns（禁止事項）
- グラデーション背景の多用
- 絵文字の乱用（プロフェッショナル感を損なう）
- SVGイラストの手描き風（不気味の谷）
- フィラーコンテンツ（意味のないダミーテキスト）
- Inter / Roboto / Arial（日本語サービスには不適）

---

## 2. Color System

oklch ベースで調和色を定義。信頼のインディゴ + 温かみのコーラル。

### Primary Palette

```css
:root {
  /* Primary — Trust Indigo */
  --color-primary-50:  oklch(0.97 0.01 250);   /* #f0f4ff */
  --color-primary-100: oklch(0.93 0.03 250);   /* #dde5ff */
  --color-primary-200: oklch(0.85 0.06 250);   /* #b3c4ff */
  --color-primary-300: oklch(0.73 0.10 250);   /* #7a9aff */
  --color-primary-400: oklch(0.60 0.14 250);   /* #4a6fff */
  --color-primary-500: oklch(0.50 0.16 250);   /* #2b4acf — Primary */
  --color-primary-600: oklch(0.42 0.15 250);   /* #1e3a9f */
  --color-primary-700: oklch(0.35 0.13 250);   /* #152d7a */
  --color-primary-800: oklch(0.28 0.10 250);   /* #0e2058 */
  --color-primary-900: oklch(0.20 0.07 250);   /* #091540 */

  /* Accent — Warm Coral */
  --color-accent-50:  oklch(0.97 0.02 25);     /* #fff5f0 */
  --color-accent-100: oklch(0.93 0.05 25);     /* #ffe8dd */
  --color-accent-200: oklch(0.85 0.09 25);     /* #ffcdb3 */
  --color-accent-300: oklch(0.75 0.14 25);     /* #ffa67a */
  --color-accent-400: oklch(0.65 0.17 25);     /* #ff7e4a */
  --color-accent-500: oklch(0.58 0.18 25);     /* #e85d2b — Accent */

  /* Success — Fresh Green */
  --color-success-500: oklch(0.65 0.18 145);   /* #22c55e */

  /* Warning — Amber */
  --color-warning-500: oklch(0.75 0.15 85);    /* #f59e0b */

  /* Error — Red */
  --color-error-500: oklch(0.55 0.20 25);      /* #dc2626 */

  /* Neutrals — Warm Gray */
  --color-neutral-0:   #ffffff;
  --color-neutral-50:  #fafaf8;                /* オフホワイト背景 */
  --color-neutral-100: #f5f3f0;
  --color-neutral-200: #e8e5e0;
  --color-neutral-300: #d4d0ca;
  --color-neutral-400: #a8a29e;
  --color-neutral-500: #78716c;
  --color-neutral-600: #57534e;
  --color-neutral-700: #44403c;
  --color-neutral-800: #292524;
  --color-neutral-900: #1c1917;
}
```

### Semantic Colors

```css
:root {
  --bg-page:      var(--color-neutral-50);
  --bg-card:      var(--color-neutral-0);
  --bg-elevated:  var(--color-neutral-0);
  --bg-ai:        oklch(0.96 0.02 280);        /* AIフィーチャー用 淡紫 */

  --text-primary:   var(--color-neutral-900);
  --text-secondary: var(--color-neutral-500);
  --text-inverse:   var(--color-neutral-0);

  --border-default: var(--color-neutral-200);
  --border-focus:   var(--color-primary-400);

  --ai-badge:       oklch(0.60 0.15 280);      /* AI推薦バッジ 紫系 */
  --ai-badge-bg:    oklch(0.95 0.03 280);
}
```

### Dark Mode（将来対応）

```css
@media (prefers-color-scheme: dark) {
  :root {
    --bg-page:      var(--color-neutral-900);
    --bg-card:      var(--color-neutral-800);
    --text-primary: var(--color-neutral-50);
    --text-secondary: var(--color-neutral-400);
  }
}
```

---

## 3. Typography

### Font Stack

```css
:root {
  /* 日本語: Noto Sans JP (デファクトスタンダード) */
  --font-sans: "Noto Sans JP", "Hiragino Kaku Gothic ProN", "BIZ UDGothic", system-ui, sans-serif;

  /* 英数字: Geist (Vercel公式、Next.jsデフォルト) */
  --font-heading: "Geist", var(--font-sans);

  /* Monospace */
  --font-mono: "Geist Mono", "SF Mono", "Fira Code", monospace;
}
```

### Type Scale

| Token | Size | Weight | Line Height | Usage |
|-------|------|--------|-------------|-------|
| `display` | 48px / 3rem | 700 | 1.1 | ヒーローセクション |
| `h1` | 36px / 2.25rem | 700 | 1.2 | ページタイトル |
| `h2` | 28px / 1.75rem | 600 | 1.3 | セクション見出し |
| `h3` | 22px / 1.375rem | 600 | 1.4 | カードタイトル |
| `h4` | 18px / 1.125rem | 600 | 1.4 | サブヘッダー |
| `body-lg` | 18px / 1.125rem | 400 | 1.7 | リード文 |
| `body` | 16px / 1rem | 400 | 1.7 | 本文 |
| `body-sm` | 14px / 0.875rem | 400 | 1.6 | 補助テキスト |
| `caption` | 12px / 0.75rem | 400 | 1.5 | ラベル・注釈 |

**日本語テキストのルール**:
- `text-wrap: pretty` を本文に適用
- 行長: 全角35-40文字（最適可読性）
- letter-spacing: 日本語本文は `0.02em`、見出しは `0.04em`

---

## 4. Spacing System

8px ベースグリッド。Tailwindのデフォルトスケールに準拠。

| Token | Value | Usage |
|-------|-------|-------|
| `space-1` | 4px | アイコンとテキスト間 |
| `space-2` | 8px | 密なグループ内 |
| `space-3` | 12px | カード内パディング（小） |
| `space-4` | 16px | カード内パディング |
| `space-5` | 20px | セクション内マージン |
| `space-6` | 24px | カード内パディング（大） |
| `space-8` | 32px | セクション間 |
| `space-10` | 40px | 大セクション間 |
| `space-12` | 48px | ページ上下パディング |
| `space-16` | 64px | ヒーローセクション |
| `space-20` | 80px | セクション間（大） |

---

## 5. Component Design

### Card（基本カード）

```
┌─────────────────────────────────┐
│  [Avatar]  Name                 │
│            Title / Role Badge   │
│                                 │
│  Skills: [Tag] [Tag] [Tag]      │
│                                 │
│  ───────────────────────────    │
│  Match Score: ████████░░ 82%    │  ← AI推薦時のみ表示
│  📍 Location    💼 Experience   │
│                                 │
│  [詳細を見る]  [マッチリクエスト]│
└─────────────────────────────────┘
```

- `border-radius: 12px`
- `box-shadow: 0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)`
- ホバー: `translateY(-2px)` + shadow強化
- AI推薦カードは `border-left: 3px solid var(--ai-badge)` + 淡紫背景

### Profile Card（プロフィールカード）

```
┌─────────────────────────────────┐
│         [Avatar 96px]           │
│         Taro Yamada             │
│     フルスタックエンジニア        │
│   [フリーランス] [コンサルタント]  │  ← ロールバッジ（複数可）
│                                 │
│  React / TypeScript / AWS       │
│  Node.js / PostgreSQL           │
│                                 │
│  "AIとデータで事業を加速させる    │
│   パートナーを探しています"       │
│                                 │
│  ⭐ 4.8  📋 23件の実績          │
│                                 │
│  [プロフィールを見る]            │
└─────────────────────────────────┘
```

### AI Recommendation Badge

```
┌──────────────────┐
│ ✦ AI推薦 92%     │  ← ✦ = AI sparkle icon (絵文字ではなくSVGアイコン)
│ 技術スタック一致   │
│ 業界経験マッチ     │
└──────────────────┘
```

- 背景: `var(--ai-badge-bg)`
- ボーダー: `1px solid var(--ai-badge)` at 20% opacity
- ✦ アイコン: SVG sparkle, `var(--ai-badge)` color

### Role Badge

| Role | Color | Label |
|------|-------|-------|
| freelancer | `oklch(0.60 0.15 200)` Blue | フリーランス |
| consultant | `oklch(0.60 0.15 280)` Purple | コンサルタント |
| business_owner | `oklch(0.60 0.15 145)` Green | 経営者 |

- `border-radius: 9999px` (pill shape)
- `padding: 4px 12px`
- `font-size: 12px`, `font-weight: 500`
- 背景: 各色の50相当（薄い）, テキスト: 各色の700相当

### Button System

| Variant | Style | Usage |
|---------|-------|-------|
| Primary | `bg: primary-500`, `text: white`, `rounded: 8px` | メインCTA |
| Secondary | `bg: transparent`, `border: primary-500`, `text: primary-500` | サブアクション |
| Ghost | `bg: transparent`, `text: primary-500` | テキストリンク風 |
| Accent | `bg: accent-500`, `text: white` | 特別なCTA |
| Destructive | `bg: error-500`, `text: white` | 削除等 |

- 高さ: `40px`（default）, `36px`（small）, `48px`（large）
- タッチターゲット: 最小 `44px`
- ホバー: 明度 -5%
- フォーカス: `ring-2 ring-primary-400 ring-offset-2`
- disabled: `opacity: 0.5`, `cursor: not-allowed`

### Navigation

```
┌─────────────────────────────────────────────┐
│  [Logo] Match   探す  マッチ  案件  メッセージ  [Avatar ▼] │
└─────────────────────────────────────────────┘
```

- Fixed top, `height: 64px`
- `backdrop-filter: blur(12px)` + `bg: white/90`
- モバイル: Bottom tab navigation (5 items max)

### Search & Filter Bar

```
┌─────────────────────────────────────────────┐
│  🔍 スキル、職種、キーワードで検索...          │
│                                             │
│  [フリーランス] [コンサル] [経営者]  [地域 ▼]  [AIおすすめ ✦] │
└─────────────────────────────────────────────┘
```

- フィルターチップ: toggleable pill buttons
- AI推薦トグル: accent color, sparkle icon

---

## 6. Layout System

### Bento Box Grid

メインレイアウトにBento Box (モジュラーグリッド) を採用。

```
Desktop (1280px+):
┌──────────┬──────────┬──────────┐
│          │          │          │
│  Card    │  Card    │  Card    │
│          │          │          │
├──────────┼──────────┼──────────┤
│          │          │          │
│  Card    │  Card    │  Card    │
│          │          │          │
└──────────┴──────────┴──────────┘

Tablet (768px-1279px):
┌──────────┬──────────┐
│  Card    │  Card    │
├──────────┼──────────┤
│  Card    │  Card    │
└──────────┴──────────┘

Mobile (<768px):
┌──────────┐
│  Card    │
├──────────┤
│  Card    │
├──────────┤
│  Card    │
└──────────┘
```

- CSS Grid: `grid-template-columns: repeat(auto-fill, minmax(340px, 1fr))`
- Gap: `24px`
- コンテナ最大幅: `1280px`

### Page Templates

#### Landing Page
```
[Nav]
[Hero: キャッチコピー + CTA + ヒーローイメージ]
[3つの価値提案カード]
[AI推薦デモセクション]
[ユーザータイプ別導線（3カラム）]
[利用の流れ（4ステップ）]
[CTA帯]
[Footer]
```

#### Dashboard (ログイン後)
```
[Nav]
[Sidebar?]
[Welcome + Stats Cards]
[AI推薦カルーセル]
[最新マッチリクエスト]
[おすすめ案件]
```

#### Search Results
```
[Nav]
[Search + Filter Bar]
[Results Count + Sort]
[Card Grid (Bento)]
[Pagination]
```

#### Profile Detail
```
[Nav]
[Cover Image]
[Avatar + Name + Roles]
[Bio]
[Skills Grid]
[Portfolio / 実績]
[Reviews]
[Contact CTA]
```

---

## 7. Motion & Animation

### Principles
- **Purposeful**: 意味のあるアニメーションのみ
- **Subtle**: 200-300ms、ease-out主体
- **Responsive**: `prefers-reduced-motion` 対応

### Tokens

```css
:root {
  --duration-fast:   150ms;
  --duration-normal: 250ms;
  --duration-slow:   400ms;
  --ease-default:    cubic-bezier(0.4, 0, 0.2, 1);
  --ease-in:         cubic-bezier(0.4, 0, 1, 1);
  --ease-out:        cubic-bezier(0, 0, 0.2, 1);
  --ease-spring:     cubic-bezier(0.34, 1.56, 0.64, 1);
}
```

### Usage

| Element | Duration | Easing | Property |
|---------|----------|--------|----------|
| Button hover | fast | default | background-color, transform |
| Card hover | normal | ease-out | transform, box-shadow |
| Modal open | normal | ease-spring | opacity, transform |
| Page transition | slow | ease-out | opacity |
| AI badge pulse | 2000ms | ease-in-out | opacity (loop) |

---

## 8. Iconography

Lucide Icons を採用（軽量、MIT、React対応）。

### カスタムアイコン
- AI Sparkle: ✦ をSVGで作成（絵文字ではない）
- ロールアイコン: フリーランス=コード, コンサル=ブリーフケース, 経営者=ビルディング

---

## 9. Image Strategy

### Hero / Feature Images
- Unsplash / Pexels から無料取得
- テーマ: 日本のビジネスパーソン、協業、テクノロジー
- カラーオーバーレイ: `primary-900` at 40% opacity for text readability

### Avatar
- デフォルト: イニシャルアバター（primary-100 bg + primary-600 text）
- サイズ: 32px (list), 48px (card), 96px (profile), 128px (detail)
- `border-radius: 9999px`

### Placeholder Pattern
- 画像なし時: `bg: neutral-100` + centered icon
- プロフィール画像なし: イニシャルアバター自動生成

---

## 10. Responsive Breakpoints

| Token | Width | Target |
|-------|-------|--------|
| `sm` | 640px | Mobile landscape |
| `md` | 768px | Tablet |
| `lg` | 1024px | Small desktop |
| `xl` | 1280px | Desktop |
| `2xl` | 1536px | Large desktop |

モバイルファースト設計。基本スタイルはモバイル → `md:` 以上でデスクトップ調整。

---

## 11. AI Feature Design Guidelines

### 表示パターン

1. **インラインサジェスト**: 検索結果内でAI推薦カードをハイライト
2. **AIバッジ**: マッチスコアを `%` + プログレスバーで表示
3. **推薦理由**: カード展開時に箇条書きで3つまで

### ビジュアル言語
- AI関連は全て `var(--ai-badge)` 紫系で統一
- ✦ Sparkle アイコンを一貫使用
- 背景: `var(--bg-ai)` 淡紫
- 「AI推薦」ラベルは控えめに。押しつけがましくない

### AIモード切替
```
[通常モード] ←→ [AI推薦モード ✦]
```
- トグルスイッチ: フィルターバー右端
- ON時: カードにスコア・理由が表示、ソート順がAI推薦順に
- OFF時: 通常の新着順/関連順

---

## 12. Accessibility

- WCAG 2.1 AA 準拠
- コントラスト比: テキスト 4.5:1 以上、大テキスト 3:1 以上
- フォーカスリング: 全インタラクティブ要素に `ring-2`
- `aria-label`: アイコンボタンに必須
- キーボードナビゲーション: Tab / Enter / Escape
- `prefers-reduced-motion`: アニメーション無効化
- スクリーンリーダー: セマンティックHTML優先

---

## Tailwind CSS v4 Config Mapping

```css
/* src/app/globals.css */
@import "tailwindcss";

@theme {
  --color-primary-50: oklch(0.97 0.01 250);
  --color-primary-100: oklch(0.93 0.03 250);
  --color-primary-200: oklch(0.85 0.06 250);
  --color-primary-300: oklch(0.73 0.10 250);
  --color-primary-400: oklch(0.60 0.14 250);
  --color-primary-500: oklch(0.50 0.16 250);
  --color-primary-600: oklch(0.42 0.15 250);
  --color-primary-700: oklch(0.35 0.13 250);
  --color-primary-800: oklch(0.28 0.10 250);
  --color-primary-900: oklch(0.20 0.07 250);

  --color-accent-50: oklch(0.97 0.02 25);
  --color-accent-100: oklch(0.93 0.05 25);
  --color-accent-200: oklch(0.85 0.09 25);
  --color-accent-300: oklch(0.75 0.14 25);
  --color-accent-400: oklch(0.65 0.17 25);
  --color-accent-500: oklch(0.58 0.18 25);

  --color-success-500: oklch(0.65 0.18 145);
  --color-warning-500: oklch(0.75 0.15 85);
  --color-error-500: oklch(0.55 0.20 25);

  --color-ai: oklch(0.60 0.15 280);
  --color-ai-bg: oklch(0.95 0.03 280);

  --font-sans: "Noto Sans JP", "Hiragino Kaku Gothic ProN", system-ui, sans-serif;
  --font-heading: "Geist", var(--font-sans);
  --font-mono: "Geist Mono", monospace;
}
```
