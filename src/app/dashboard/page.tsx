import { Card, CardContent, Avatar, RoleBadge, AIBadge } from "@/components/ui";
import { Button } from "@/components/ui";
import {
  Users,
  Handshake,
  FolderOpen,
  TrendingUp,
  Sparkles,
  ArrowRight,
  Clock,
} from "lucide-react";
import { sampleRecommendations, sampleMatches, sampleUsers } from "@/lib/data/sample";
import Link from "next/link";

const stats = [
  { label: "マッチ候補", value: "24", icon: Users, change: "+5 今週" },
  { label: "成立マッチ", value: "8", icon: Handshake, change: "+2 今月" },
  { label: "公開案件", value: "12", icon: FolderOpen, change: "+3 新着" },
  { label: "プロフィール閲覧", value: "156", icon: TrendingUp, change: "+23 今週" },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Welcome */}
      <div>
        <h1 className="text-2xl font-bold text-neutral-900">
          おかえりなさい、健太さん
        </h1>
        <p className="mt-1 text-neutral-500">
          今日の新着マッチ候補が3件あります
        </p>
      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.label}>
            <CardContent className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-500">
                <stat.icon className="h-6 w-6" />
              </div>
              <div>
                <p className="text-2xl font-bold text-neutral-900">
                  {stat.value}
                </p>
                <p className="text-xs text-neutral-500">{stat.label}</p>
                <p className="mt-0.5 text-[10px] text-success">{stat.change}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* AI Recommendations */}
      <section>
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-ai" />
            <h2 className="text-lg font-semibold text-neutral-900">
              AI推薦マッチング
            </h2>
          </div>
          <Link href="/search?mode=ai">
            <Button variant="ghost" size="sm">
              すべて見る
              <ArrowRight className="h-3.5 w-3.5" />
            </Button>
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sampleRecommendations.map((rec) => (
            <Card key={rec.userId} ai elevated>
              <CardContent>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar name={rec.user.name} size="md" />
                    <div>
                      <p className="font-semibold text-neutral-900">
                        {rec.user.name}
                      </p>
                      <p className="text-xs text-neutral-500">
                        {rec.user.title}
                      </p>
                    </div>
                  </div>
                  <AIBadge score={rec.score} />
                </div>

                <div className="mt-3 flex flex-wrap gap-1.5">
                  {rec.user.roles.map((role) => (
                    <RoleBadge key={role} role={role} />
                  ))}
                </div>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {rec.user.skills.slice(0, 4).map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md bg-neutral-100 px-2 py-0.5 text-[11px] text-neutral-600"
                    >
                      {skill}
                    </span>
                  ))}
                  {rec.user.skills.length > 4 && (
                    <span className="text-[11px] text-neutral-400">
                      +{rec.user.skills.length - 4}
                    </span>
                  )}
                </div>

                {/* AI Reasons */}
                <div className="mt-4 rounded-lg bg-ai-bg/50 p-3">
                  <p className="mb-1.5 text-[10px] font-medium uppercase tracking-wider text-ai">
                    推薦理由
                  </p>
                  <ul className="space-y-1">
                    {rec.reasons.slice(0, 2).map((reason) => (
                      <li
                        key={reason}
                        className="flex items-start gap-1.5 text-xs text-neutral-600"
                      >
                        <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-ai" />
                        {reason}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Match score bar */}
                <div className="mt-4 flex items-center gap-2">
                  <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-neutral-200">
                    <div
                      className="h-full rounded-full bg-ai transition-all"
                      style={{ width: `${rec.score}%` }}
                    />
                  </div>
                  <span className="text-xs font-medium text-ai">{rec.score}%</span>
                </div>

                <div className="mt-4 flex gap-2">
                  <Button size="sm" className="flex-1">
                    マッチリクエスト
                  </Button>
                  <Button variant="secondary" size="sm">
                    詳細
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Recent Matches */}
      <section>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-neutral-900">
            最近のマッチング
          </h2>
          <Button variant="ghost" size="sm">
            すべて見る
            <ArrowRight className="h-3.5 w-3.5" />
          </Button>
        </div>

        <div className="space-y-3">
          {sampleMatches.map((match) => {
            const fromUser = sampleUsers.find((u) => u.id === match.fromUserId);
            const toUser = sampleUsers.find((u) => u.id === match.toUserId);
            if (!fromUser || !toUser) return null;

            return (
              <Card key={match.id}>
                <CardContent className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                      <Avatar name={fromUser.name} size="sm" />
                      <Avatar name={toUser.name} size="sm" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-neutral-900">
                        {fromUser.name} → {toUser.name}
                      </p>
                      <p className="text-xs text-neutral-500 line-clamp-1">
                        {match.message}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span
                      className={`rounded-full px-2.5 py-0.5 text-[11px] font-medium ${
                        match.status === "accepted"
                          ? "bg-green-50 text-green-700"
                          : match.status === "pending"
                            ? "bg-amber-50 text-amber-700"
                            : "bg-neutral-100 text-neutral-500"
                      }`}
                    >
                      {match.status === "accepted"
                        ? "成立"
                        : match.status === "pending"
                          ? "承認待ち"
                          : "辞退"}
                    </span>
                    <span className="flex items-center gap-1 text-[11px] text-neutral-400">
                      <Clock className="h-3 w-3" />
                      {match.createdAt.toLocaleDateString("ja-JP", {
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>
    </div>
  );
}
