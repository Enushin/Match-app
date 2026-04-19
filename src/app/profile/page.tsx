import { Avatar, RoleBadge, Card, CardContent, Button } from "@/components/ui";
import {
  MapPin,
  Calendar,
  Globe,
  Star,
  FileText,
  Pencil,
  ExternalLink,
} from "lucide-react";
import { sampleUsers } from "@/lib/data/sample";

export default function ProfilePage() {
  const user = sampleUsers[2]; // 大西健太

  const reviews = [
    {
      reviewer: "山田 太郎",
      rating: 5,
      comment:
        "プロダクトビジョンが明確で、開発の方向性がブレない。技術的な議論もできるCEOで、非常にやりやすかった。",
      date: "2026年3月",
    },
    {
      reviewer: "中村 彩花",
      rating: 4,
      comment:
        "デザインへの理解が深く、フィードバックが的確。スピード感があり、週次MTGで効率的に進められた。",
      date: "2026年2月",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Cover + Avatar */}
      <div className="relative">
        <div className="h-32 rounded-2xl bg-gradient-to-r from-primary-500 to-primary-700 sm:h-40" />
        <div className="absolute -bottom-12 left-6 sm:left-8">
          <div className="rounded-full border-4 border-white bg-white">
            <Avatar name={user.name} size="xl" />
          </div>
        </div>
        <div className="absolute right-4 bottom-4">
          <Button variant="secondary" size="sm" className="bg-white/90 backdrop-blur">
            <Pencil className="h-3.5 w-3.5" />
            編集
          </Button>
        </div>
      </div>

      {/* Name + Title */}
      <div className="pt-8 sm:pt-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-neutral-900">{user.name}</h1>
            <p className="mt-1 text-neutral-500">{user.title}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {user.roles.map((role) => (
                <RoleBadge key={role} role={role} />
              ))}
            </div>
          </div>

          <div className="flex gap-2">
            <Button size="sm">マッチリクエスト</Button>
            <Button variant="secondary" size="sm">
              メッセージ
            </Button>
          </div>
        </div>

        {/* Meta */}
        <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-neutral-500">
          {user.location && (
            <span className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4" />
              {user.location}
            </span>
          )}
          <span className="flex items-center gap-1.5">
            <Calendar className="h-4 w-4" />
            {user.createdAt.toLocaleDateString("ja-JP", {
              year: "numeric",
              month: "long",
            })}
            から利用
          </span>
          <span className="flex items-center gap-1.5">
            <Star className="h-4 w-4 fill-warning text-warning" />
            4.8 (2件のレビュー)
          </span>
        </div>
      </div>

      {/* Bio */}
      <Card>
        <CardContent>
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-neutral-400">
            自己紹介
          </h2>
          <p className="text-sm leading-relaxed text-neutral-700">{user.bio}</p>
        </CardContent>
      </Card>

      {/* Skills */}
      <Card>
        <CardContent>
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-neutral-400">
            スキル・専門領域
          </h2>
          <div className="flex flex-wrap gap-2">
            {user.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-lg bg-primary-50 px-3 py-1.5 text-sm font-medium text-primary-600"
              >
                {skill}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Portfolio / Projects */}
      <Card>
        <CardContent>
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-neutral-400">
            実績・ポートフォリオ
          </h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              {
                title: "HRTech SaaS 'TeamFlow'",
                desc: "人事評価・1on1管理SaaS。React/Next.jsで構築。月間アクティブユーザー500社。",
                url: "#",
              },
              {
                title: "採用管理ダッシュボード",
                desc: "応募者トラッキング・面接スケジュール管理。リアルタイム分析機能搭載。",
                url: "#",
              },
            ].map((project) => (
              <div
                key={project.title}
                className="rounded-xl border border-neutral-200 p-4 transition-colors hover:border-primary-200"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-neutral-400" />
                    <h3 className="text-sm font-semibold text-neutral-900">
                      {project.title}
                    </h3>
                  </div>
                  <ExternalLink className="h-3.5 w-3.5 text-neutral-300" />
                </div>
                <p className="mt-2 text-xs leading-relaxed text-neutral-500">
                  {project.desc}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Reviews */}
      <Card>
        <CardContent>
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-neutral-400">
            レビュー
          </h2>
          <div className="space-y-4">
            {reviews.map((review) => (
              <div
                key={review.reviewer}
                className="border-b border-neutral-100 pb-4 last:border-0 last:pb-0"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Avatar name={review.reviewer} size="sm" />
                    <span className="text-sm font-medium text-neutral-900">
                      {review.reviewer}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-3.5 w-3.5 ${
                          i < review.rating
                            ? "fill-warning text-warning"
                            : "text-neutral-200"
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                  {review.comment}
                </p>
                <p className="mt-1 text-xs text-neutral-400">{review.date}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
