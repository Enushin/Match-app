import { Code, Briefcase, Building2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface UserType {
  icon: LucideIcon;
  role: string;
  title: string;
  painPoint: string;
  solution: string;
  bgColor: string;
  iconColor: string;
  borderColor: string;
}

const userTypes: UserType[] = [
  {
    icon: Code,
    role: "フリーランス",
    title: "スキルに見合った案件と出会う",
    painPoint:
      "クラウドソーシングの高い手数料、低単価案件ばかりの表示、スキルを正しく評価してもらえない",
    solution:
      "AI がポートフォリオと実績を分析し、あなたのスキルレベルに合った案件や協業パートナーを推薦。手数料の透明性も確保。",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600",
    borderColor: "border-blue-200",
  },
  {
    icon: Briefcase,
    role: "コンサルタント",
    title: "専門性が刺さるクライアントを発見",
    painPoint:
      "紹介頼みの営業、専門性でフィルタできるプラットフォームがない、SESと混同される",
    solution:
      "業種×課題領域でマッチング。AIが「なぜこのクライアントに合うか」を明示し、提案書の下地にもなる推薦理由を提供。",
    bgColor: "bg-purple-50",
    iconColor: "text-purple-600",
    borderColor: "border-purple-200",
  },
  {
    icon: Building2,
    role: "経営者",
    title: "信頼できるパートナーを素早く確保",
    painPoint:
      "採用に時間がかかる、SES費用が高い、IT知識不足で何を頼めばいいか分からない",
    solution:
      "「何に困っているか」を選ぶだけで最適な専門家をAIが提案。マッチ度スコアで判断をサポート。面談1/10のスピードで。",
    bgColor: "bg-green-50",
    iconColor: "text-green-600",
    borderColor: "border-green-200",
  },
];

export function UserTypes() {
  return (
    <section id="user-types" className="bg-neutral-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
            あなたはどのタイプ？
          </h2>
          <p className="mt-4 text-lg text-neutral-500">
            3つの立場それぞれの課題を、Matchが解決します
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {userTypes.map((type) => (
            <div
              key={type.role}
              className={`rounded-2xl border ${type.borderColor} bg-white p-8 transition-all hover:shadow-lg`}
            >
              <div
                className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl ${type.bgColor} ${type.iconColor}`}
              >
                <type.icon className="h-7 w-7" />
              </div>

              <span className="text-sm font-medium text-neutral-400">
                {type.role}
              </span>
              <h3 className="mt-1 text-xl font-bold text-neutral-900">
                {type.title}
              </h3>

              <div className="mt-6 space-y-4">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-neutral-400">
                    課題
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-neutral-600">
                    {type.painPoint}
                  </p>
                </div>

                <div className="border-t border-neutral-100 pt-4">
                  <p className="text-xs font-medium uppercase tracking-wider text-primary-500">
                    Matchの解決策
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-neutral-600">
                    {type.solution}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
