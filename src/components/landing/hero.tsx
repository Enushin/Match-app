import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui";
import { ArrowRight, Sparkles } from "lucide-react";
import { images } from "@/lib/images/unsplash";
import { sampleUsers } from "@/lib/data/sample";

export function Hero() {
  const featured = sampleUsers.slice(0, 3);

  return (
    <section className="relative overflow-hidden bg-neutral-900 pt-32 pb-24 sm:pt-40 sm:pb-32">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <Image
          src={images.hero}
          alt=""
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-neutral-900/60" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-neutral-300 backdrop-blur-sm">
            <Sparkles className="h-3.5 w-3.5 text-accent-400" aria-hidden="true" />
            AIが最適なビジネスパートナーを見つけます
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            ビジネスの
            <span className="text-accent-400">最適な出会い</span>
            を、
            <br className="hidden sm:block" />
            AIがつなぐ。
          </h1>

          <p className="mt-8 text-lg leading-relaxed text-neutral-400 sm:text-xl">
            フリーランス・コンサルタント・経営者。
            <br className="hidden sm:block" />
            スキルと実績でマッチングされるプラットフォーム。
          </p>

          <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/dashboard">
              <Button size="lg" className="w-full sm:w-auto">
                無料で始める
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/search">
              <Button variant="secondary" size="lg" className="w-full border-white/20 text-white hover:bg-white/10 sm:w-auto">
                パートナーを探す
              </Button>
            </Link>
          </div>

          <p className="mt-8 text-sm text-neutral-500">
            登録無料 ・ 手数料なし ・ 3分で完了
          </p>
        </div>

        {/* Featured professionals */}
        <div className="mt-20 flex justify-center">
          <div className="w-full max-w-3xl rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
            <div className="mb-6 flex items-center justify-between">
              <span className="text-sm font-medium text-neutral-400">
                注目のプロフェッショナル
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs text-accent-400">
                <Sparkles className="h-3 w-3" aria-hidden="true" />
                AI分析済み
              </span>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {featured.map((person, i) => (
                <Link
                  key={person.id}
                  href={`/profile?id=${person.id}`}
                  className="group rounded-xl border border-white/10 bg-white/5 p-5 transition-all hover:border-accent-400/30 hover:bg-white/10"
                >
                  {person.avatarUrl && (
                    <Image
                      src={person.avatarUrl}
                      alt={person.name}
                      width={48}
                      height={48}
                      className="mb-3 rounded-full object-cover"
                    />
                  )}
                  <p className="text-sm font-semibold text-white">
                    {person.name}
                  </p>
                  <p className="mt-0.5 text-xs text-neutral-400">
                    {person.title}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1">
                    {person.skills.slice(0, 2).map((skill) => (
                      <span
                        key={skill}
                        className="rounded-md bg-white/10 px-2 py-0.5 text-xs text-neutral-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  <div className="mt-3 flex items-center gap-2">
                    <div className="h-1 flex-1 overflow-hidden rounded-full bg-white/10">
                      <div
                        className="h-full rounded-full bg-accent-400"
                        style={{ width: `${[92, 88, 85][i]}%` }}
                      />
                    </div>
                    <span className="text-xs font-medium text-accent-400">
                      {[92, 88, 85][i]}%
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
