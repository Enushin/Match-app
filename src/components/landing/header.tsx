import Link from "next/link";
import { Button } from "@/components/ui";
import { Sparkles } from "lucide-react";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-neutral-900/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-500">
            <Sparkles className="h-4 w-4 text-white" aria-hidden="true" />
          </div>
          <span className="text-lg font-bold tracking-tight text-white">
            Match
          </span>
        </Link>

        <nav aria-label="サイトナビゲーション" className="hidden items-center gap-8 md:flex">
          <Link
            href="#features"
            className="text-sm text-neutral-400 transition-colors hover:text-white"
          >
            特徴
          </Link>
          <Link
            href="#user-types"
            className="text-sm text-neutral-400 transition-colors hover:text-white"
          >
            ユーザータイプ
          </Link>
          <Link
            href="#how-it-works"
            className="text-sm text-neutral-400 transition-colors hover:text-white"
          >
            使い方
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/dashboard">
            <Button variant="ghost" size="sm" className="text-neutral-300 hover:text-white hover:bg-white/10">
              ログイン
            </Button>
          </Link>
          <Link href="/dashboard">
            <Button size="sm">無料で始める</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
