import { Button } from "@/components/ui";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-primary-100/40 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-accent-100/30 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          {/* AI Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-ai/20 bg-ai-bg px-4 py-1.5 text-sm text-ai">
            <Sparkles className="h-3.5 w-3.5" />
            AIがあなたに最適なパートナーを見つけます
          </div>

          {/* Headline */}
          <h1 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl">
            ビジネスの
            <span className="bg-gradient-to-r from-primary-500 to-primary-700 bg-clip-text text-transparent">
              最適な出会い
            </span>
            を、
            <br className="hidden sm:block" />
            AIがつなぐ。
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-lg leading-relaxed text-neutral-500 sm:text-xl">
            フリーランス・コンサルタント・経営者。
            <br className="hidden sm:block" />
            異なる立場のプロフェッショナルが、
            <br className="hidden sm:block" />
            スキルと実績で最適にマッチングされるプラットフォーム。
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" className="w-full sm:w-auto">
              無料で始める
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button variant="secondary" size="lg" className="w-full sm:w-auto">
              デモを見る
            </Button>
          </div>

          {/* Social proof */}
          <p className="mt-8 text-sm text-neutral-400">
            登録無料 ・ 手数料なし ・ 3分で完了
          </p>
        </div>

        {/* Hero visual - Match cards preview */}
        <div className="mt-16 flex justify-center">
          <div className="relative w-full max-w-2xl">
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-xl">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-sm font-medium text-neutral-500">
                  AI推薦マッチング
                </span>
                <span className="inline-flex items-center gap-1 text-xs text-ai">
                  <Sparkles className="h-3 w-3" />
                  リアルタイム分析中
                </span>
              </div>
              {/* Sample match cards */}
              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  {
                    name: "田中 太郎",
                    role: "フリーランス",
                    skill: "React / TypeScript",
                    score: 92,
                    color: "bg-blue-50 text-blue-700",
                  },
                  {
                    name: "佐藤 花子",
                    role: "コンサルタント",
                    skill: "DX戦略 / PMO",
                    score: 88,
                    color: "bg-purple-50 text-purple-700",
                  },
                  {
                    name: "鈴木 一郎",
                    role: "経営者",
                    skill: "SaaS / HRTech",
                    score: 85,
                    color: "bg-green-50 text-green-700",
                  },
                ].map((person) => (
                  <div
                    key={person.name}
                    className="rounded-xl border border-neutral-100 bg-neutral-50/50 p-4 transition-all hover:border-primary-200 hover:bg-white hover:shadow-sm"
                  >
                    <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 text-sm font-semibold text-primary-600">
                      {person.name.charAt(0)}
                    </div>
                    <p className="text-sm font-medium text-neutral-900">
                      {person.name}
                    </p>
                    <span
                      className={`mt-1 inline-block rounded-full px-2 py-0.5 text-xs font-medium ${person.color}`}
                    >
                      {person.role}
                    </span>
                    <p className="mt-2 text-xs text-neutral-400">
                      {person.skill}
                    </p>
                    <div className="mt-3 flex items-center gap-1.5">
                      <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-neutral-200">
                        <div
                          className="h-full rounded-full bg-ai"
                          style={{ width: `${person.score}%` }}
                        />
                      </div>
                      <span className="text-xs font-medium text-ai">
                        {person.score}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
