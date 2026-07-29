import { cn } from "@/lib/utils";

type ButtonProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "sm";
};

const variants = {
  primary:
    "bg-accent text-background hover:bg-accent-strong shadow-[0_0_0_1px_rgba(106,168,216,0.35)]",
  secondary:
    "bg-surface-elevated text-foreground border border-border hover:border-accent/40 hover:bg-accent-soft",
  ghost:
    "bg-transparent text-muted hover:text-foreground hover:bg-surface-elevated border border-transparent",
};

const sizes = {
  md: "h-11 px-5 text-sm",
  sm: "h-9 px-3.5 text-xs",
};

export function Button({
  className,
  variant = "primary",
  size = "md",
  children,
  ...props
}: ButtonProps) {
  return (
    <a
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-md font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    >
      {children}
    </a>
  );
}
