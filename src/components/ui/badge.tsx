import type { HTMLAttributes } from "react";

type BadgeVariant = "freelancer" | "consultant" | "business_owner" | "ai" | "default";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

const variantStyles: Record<BadgeVariant, string> = {
  freelancer: "bg-blue-50 text-blue-700 border-blue-200",
  consultant: "bg-purple-50 text-purple-700 border-purple-200",
  business_owner: "bg-green-50 text-green-700 border-green-200",
  ai: "bg-ai-bg text-ai border-ai/20",
  default: "bg-neutral-100 text-neutral-600 border-neutral-200",
};

const roleLabels: Record<string, string> = {
  freelancer: "フリーランス",
  consultant: "コンサルタント",
  business_owner: "経営者",
};

export function Badge({
  variant = "default",
  className = "",
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full border px-3 py-0.5 text-xs font-medium ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}

export function RoleBadge({ role }: { role: string }) {
  const variant = (
    role === "freelancer" || role === "consultant" || role === "business_owner"
      ? role
      : "default"
  ) as BadgeVariant;

  return <Badge variant={variant}>{roleLabels[role] ?? role}</Badge>;
}

export function AIBadge({ score, className = "" }: { score: number; className?: string }) {
  return (
    <Badge variant="ai" className={className}>
      <svg
        width="12"
        height="12"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="shrink-0"
      >
        <path d="M12 2l2.4 7.2H22l-6 4.8 2.4 7.2L12 16.4 5.6 21.2 8 14 2 9.2h7.6z" />
      </svg>
      AI推薦 {score}%
    </Badge>
  );
}
