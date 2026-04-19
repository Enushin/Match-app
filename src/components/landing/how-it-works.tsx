import { UserPlus, Search, Sparkles, MessageCircle } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Step {
  number: number;
  icon: LucideIcon;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    number: 1,
    icon: UserPlus,
    title: "プロフィール登録",
    description:
      "Google/GitHubで即登録。スキル、経歴、ロールを設定するだけ。3分で完了。",
  },
  {
    number: 2,
    icon: Search,
    title: "パートナーを探す",
    description:
      "スキル・業種・地域でフィルタリング。条件に合う候補がカード形式で一覧表示。",
  },
  {
    number: 3,
    icon: Sparkles,
    title: "AI推薦を受ける",
    description:
      "AIがあなたのプロフィールと相手の実績を分析。マッチ度スコアと推薦理由を表示。",
  },
  {
    number: 4,
    icon: MessageCircle,
    title: "つながる",
    description:
      "マッチリクエストを送信。承認されたらDMで直接やりとり。仲介なしで素早く連携開始。",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
            4ステップで始める
          </h2>
          <p className="mt-4 text-lg text-neutral-500">
            シンプルな流れで、最適なビジネスパートナーと出会えます
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.number} className="relative text-center">
              {/* Connector line */}
              {step.number < 4 && (
                <div className="absolute top-8 left-[60%] hidden h-0.5 w-[80%] bg-neutral-200 lg:block" />
              )}

              <div className="relative mx-auto mb-4 flex h-16 w-16 items-center justify-center">
                <div className="absolute inset-0 rounded-2xl bg-primary-50" />
                <step.icon className="relative h-7 w-7 text-primary-500" />
                <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary-500 text-xs font-bold text-white">
                  {step.number}
                </span>
              </div>

              <h3 className="text-lg font-semibold text-neutral-900">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
