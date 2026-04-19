"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sparkles, LayoutDashboard, Search, FolderOpen, MessageCircle, User } from "lucide-react";
import { Avatar } from "@/components/ui";

const navItems = [
  { href: "/dashboard", label: "ダッシュボード", icon: LayoutDashboard },
  { href: "/search", label: "探す", icon: Search },
  { href: "/projects", label: "案件", icon: FolderOpen },
  { href: "/messages", label: "メッセージ", icon: MessageCircle },
];

export function AppNav() {
  const pathname = usePathname();

  return (
    <>
      {/* Desktop nav */}
      <header className="fixed top-0 left-0 right-0 z-50 hidden border-b border-neutral-200/50 bg-white/90 backdrop-blur-xl md:block">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <div className="flex items-center gap-8">
            <Link href="/dashboard" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-500">
                <Sparkles className="h-4 w-4 text-white" />
              </div>
              <span className="text-lg font-bold tracking-tight text-neutral-900">
                Match
              </span>
            </Link>

            <nav className="flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = pathname.startsWith(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-primary-50 text-primary-600"
                        : "text-neutral-500 hover:bg-neutral-100 hover:text-neutral-900"
                    }`}
                  >
                    <item.icon className="h-4 w-4" />
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>

          <Link href="/profile" className="flex items-center gap-3">
            <Avatar name="大西 健太" size="sm" />
            <span className="text-sm font-medium text-neutral-700">大西 健太</span>
          </Link>
        </div>
      </header>

      {/* Mobile bottom nav */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-neutral-200 bg-white md:hidden">
        <div className="flex items-center justify-around py-2">
          {[...navItems, { href: "/profile", label: "プロフィール", icon: User }].map(
            (item) => {
              const isActive = pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex flex-col items-center gap-1 px-3 py-1.5 text-[10px] ${
                    isActive ? "text-primary-500" : "text-neutral-400"
                  }`}
                >
                  <item.icon className="h-5 w-5" />
                  {item.label}
                </Link>
              );
            }
          )}
        </div>
      </nav>
    </>
  );
}
