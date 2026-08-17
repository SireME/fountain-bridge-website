import Link from "next/link";
import type { ComponentProps } from "react";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "light"
  | "gold"
  | "outlineLight"
  | "brandFacebook";
export type ButtonSize = "sm" | "md" | "lg";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-teal-700 text-white shadow-card hover:bg-teal-900",
  secondary: "border border-teal-700 text-teal-900 hover:bg-teal-50",
  light: "bg-white text-teal-900 shadow-card hover:bg-gold-100",
  gold: "bg-gold-400 text-teal-900 shadow-card hover:bg-gold-200",
  outlineLight: "border border-white/45 text-white hover:bg-white/10",
  brandFacebook: "bg-blue-600 text-white shadow-card hover:bg-blue-900",
};

const sizes: Record<ButtonSize, string> = {
  sm: "min-h-10 px-4 py-2 text-sm",
  md: "min-h-11 px-5 py-3 text-sm",
  lg: "min-h-12 px-6 py-3 text-base",
};

/**
 * Shared button styling so plain anchors (external links, mailto, tel) look and
 * behave exactly like the internal `ButtonLink`.
 */
export function buttonClasses({
  variant = "primary",
  size = "md",
  className = "",
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
} = {}) {
  return `focus-ring inline-flex items-center justify-center gap-2 rounded-md text-center font-bold transition ${sizes[size]} ${variants[variant]} ${className}`.trim();
}

type ButtonLinkProps = ComponentProps<typeof Link> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

export function ButtonLink({ className = "", variant, size, ...props }: ButtonLinkProps) {
  return <Link className={buttonClasses({ variant, size, className })} {...props} />;
}
