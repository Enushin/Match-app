import Link from "next/link";
import { Button } from "@/components/ui";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="bg-neutral-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            最適なパートナーとの出会いを、
            <br className="hidden sm:block" />
            今すぐ始めましょう。
          </h2>
          <p className="mt-6 text-lg text-neutral-400">
            登録無料。手数料なし。3分で完了。
          </p>

          <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/dashboard">
              <Button
                variant="accent"
                size="lg"
                className="w-full sm:w-auto"
              >
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
        </div>
      </div>
    </section>
  );
}
