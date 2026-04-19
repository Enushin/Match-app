import { Sparkles } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary-500">
              <Sparkles className="h-3.5 w-3.5 text-white" />
            </div>
            <span className="text-sm font-bold text-neutral-900">Match</span>
          </div>

          <nav className="flex items-center gap-6">
            <a
              href="#"
              className="text-sm text-neutral-400 transition-colors hover:text-neutral-600"
            >
              利用規約
            </a>
            <a
              href="#"
              className="text-sm text-neutral-400 transition-colors hover:text-neutral-600"
            >
              プライバシーポリシー
            </a>
            <a
              href="#"
              className="text-sm text-neutral-400 transition-colors hover:text-neutral-600"
            >
              お問い合わせ
            </a>
          </nav>

          <p className="text-xs text-neutral-400">
            &copy; 2026 Match. Portfolio Sample.
          </p>
        </div>
      </div>
    </footer>
  );
}
