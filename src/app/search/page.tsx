"use client";

import { useState } from "react";
import { Card, CardContent, Avatar, RoleBadge, AIBadge, Button, Input } from "@/components/ui";
import { Search, Sparkles, SlidersHorizontal, MapPin, Clock } from "lucide-react";
import { sampleUsers } from "@/lib/data/sample";
import type { UserProfile } from "@/types";

const roleFilters = [
  { value: "all", label: "すべて" },
  { value: "freelancer", label: "フリーランス" },
  { value: "consultant", label: "コンサルタント" },
  { value: "business_owner", label: "経営者" },
];

const aiScores: Record<string, number> = {
  u5: 92,
  u1: 88,
  u6: 85,
  u2: 78,
  u3: 72,
  u4: 65,
};

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [activeRole, setActiveRole] = useState("all");
  const [aiMode, setAiMode] = useState(false);

  const filtered = sampleUsers.filter((user) => {
    const matchesRole =
      activeRole === "all" || user.roles.includes(activeRole as UserProfile["roles"][number]);
    const matchesQuery =
      query === "" ||
      user.name.toLowerCase().includes(query.toLowerCase()) ||
      user.skills.some((s) => s.toLowerCase().includes(query.toLowerCase())) ||
      user.title.toLowerCase().includes(query.toLowerCase());
    return matchesRole && matchesQuery;
  });

  const sorted = aiMode
    ? [...filtered].sort(
        (a, b) => (aiScores[b.id] ?? 0) - (aiScores[a.id] ?? 0)
      )
    : filtered;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-neutral-900">パートナーを探す</h1>
        <p className="mt-1 text-neutral-500">
          {sorted.length}名のプロフェッショナルが見つかりました
        </p>
      </div>

      {/* Search & Filter */}
      <div className="space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
          <input
            type="search"
            aria-label="パートナーを検索"
            placeholder="スキル、職種、キーワードで検索..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full rounded-xl border border-neutral-200 bg-white py-3 pl-10 pr-4 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-400/20"
          />
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {roleFilters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveRole(filter.value)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                activeRole === filter.value
                  ? "bg-primary-500 text-white"
                  : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
              }`}
            >
              {filter.label}
            </button>
          ))}

          <div className="ml-auto">
            <button
              onClick={() => setAiMode(!aiMode)}
              className={`flex items-center gap-1.5 rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                aiMode
                  ? "bg-ai text-white"
                  : "border border-ai/30 bg-ai-bg text-ai hover:bg-ai/10"
              }`}
            >
              <Sparkles className="h-3.5 w-3.5" />
              AIおすすめ
            </button>
          </div>
        </div>
      </div>

      {/* Results Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {sorted.map((user) => {
          const score = aiScores[user.id];
          return (
            <Card key={user.id} ai={aiMode && !!score} elevated>
              <CardContent>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar name={user.name} size="md" />
                    <div>
                      <p className="font-semibold text-neutral-900">
                        {user.name}
                      </p>
                      <p className="text-xs text-neutral-500">{user.title}</p>
                    </div>
                  </div>
                  {aiMode && score && <AIBadge score={score} />}
                </div>

                <div className="mt-3 flex flex-wrap gap-1.5">
                  {user.roles.map((role) => (
                    <RoleBadge key={role} role={role} />
                  ))}
                </div>

                <p className="mt-3 text-xs leading-relaxed text-neutral-500 line-clamp-2">
                  {user.bio}
                </p>

                <div className="mt-3 flex flex-wrap gap-1.5">
                  {user.skills.slice(0, 4).map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md bg-neutral-100 px-2 py-0.5 text-xs text-neutral-600"
                    >
                      {skill}
                    </span>
                  ))}
                  {user.skills.length > 4 && (
                    <span className="text-xs text-neutral-400">
                      +{user.skills.length - 4}
                    </span>
                  )}
                </div>

                {aiMode && score && (
                  <div className="mt-3 flex items-center gap-2">
                    <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-neutral-200">
                      <div
                        className="h-full rounded-full bg-ai"
                        style={{ width: `${score}%` }}
                      />
                    </div>
                    <span className="text-xs font-medium text-ai">
                      {score}%
                    </span>
                  </div>
                )}

                <div className="mt-3 flex items-center gap-4 text-xs text-neutral-400">
                  {user.location && (
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {user.location}
                    </span>
                  )}
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
          );
        })}
      </div>
    </div>
  );
}
