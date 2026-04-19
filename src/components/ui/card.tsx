import { type HTMLAttributes, forwardRef } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  elevated?: boolean;
  ai?: boolean;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ elevated, ai, className = "", children, ...props }, ref) => {
    const baseStyles =
      "rounded-xl bg-white transition-all duration-250";
    const shadowStyles = elevated
      ? "shadow-md hover:shadow-lg hover:-translate-y-0.5"
      : "shadow-sm hover:shadow-md hover:-translate-y-0.5";
    const aiStyles = ai
      ? "border-l-[3px] border-l-ai bg-ai-bg"
      : "border border-neutral-200";

    return (
      <div
        ref={ref}
        className={`${baseStyles} ${shadowStyles} ${aiStyles} ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

export function CardHeader({
  className = "",
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`px-6 pt-6 pb-2 ${className}`} {...props}>
      {children}
    </div>
  );
}

export function CardContent({
  className = "",
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`px-6 py-4 ${className}`} {...props}>
      {children}
    </div>
  );
}

export function CardFooter({
  className = "",
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`px-6 pb-6 pt-2 flex items-center gap-3 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
