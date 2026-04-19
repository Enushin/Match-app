import Image from "next/image";

type AvatarSize = "sm" | "md" | "lg" | "xl";

interface AvatarProps {
  src?: string | null;
  name: string;
  size?: AvatarSize;
  className?: string;
}

const sizeMap: Record<AvatarSize, { px: number; text: string }> = {
  sm: { px: 32, text: "text-xs" },
  md: { px: 48, text: "text-sm" },
  lg: { px: 96, text: "text-2xl" },
  xl: { px: 128, text: "text-3xl" },
};

function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/);
  if (parts.length >= 2) {
    return (parts[0][0] + parts[1][0]).toUpperCase();
  }
  return name.slice(0, 2).toUpperCase();
}

export function Avatar({ src, name, size = "md", className = "" }: AvatarProps) {
  const { px, text } = sizeMap[size];

  if (src) {
    return (
      <Image
        src={src}
        alt={name}
        width={px}
        height={px}
        className={`rounded-full object-cover ${className}`}
        style={{ width: px, height: px }}
      />
    );
  }

  return (
    <div
      className={`inline-flex items-center justify-center rounded-full bg-primary-100 text-primary-600 font-semibold ${text} ${className}`}
      style={{ width: px, height: px }}
      aria-label={name}
    >
      {getInitials(name)}
    </div>
  );
}
