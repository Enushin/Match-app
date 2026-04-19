import { Sparkles, Users, Shield, Zap, Search, MessageCircle } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: Sparkles,
    title: "AIマッチング推薦",
    description:
      "プロフィール・実績・スキルをAIが多角的に分析。マッチ度スコアと推薦理由を明示します。",
  },
  {
    icon: Users,
    title: "マルチロール対応",
    description:
      "フリーランス・コンサルタント・経営者。1つのアカウントで複数の立場を使い分けられます。",
  },
  {
    icon: Search,
    title: "高精度フィルタリング",
    description:
      "スキル、業種、地域、稼働可能時間。多次元の検索で最適な候補を瞬時に絞り込みます。",
  },
  {
    icon: Shield,
    title: "信頼の可視化",
    description:
      "実績・ポートフォリオ・レビュー評価で信頼を構築。本人確認で安心のマッチング。",
  },
  {
    icon: MessageCircle,
    title: "ダイレクトメッセージ",
    description:
      "マッチ成立後はプラットフォーム内で直接やりとり。仲介なしのスピーディーな連携。",
  },
  {
    icon: Zap,
    title: "3分で登録完了",
    description:
      "Google/GitHubアカウントで即座に登録。直感的なUIで、誰でもすぐに使い始められます。",
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
            なぜMatchが選ばれるのか
          </h2>
          <p className="mt-4 text-lg text-neutral-500">
            従来のマッチングサービスの不満を解決する、6つの機能
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-2xl border border-neutral-200 bg-white p-6 transition-all hover:border-primary-200 hover:shadow-md"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-500 transition-colors group-hover:bg-primary-500 group-hover:text-white">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-neutral-900">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
