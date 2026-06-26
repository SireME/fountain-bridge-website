import Link from "next/link";
import type { ComponentProps } from "react";

type ButtonLinkProps = ComponentProps<typeof Link> & {
  variant?: "primary" | "secondary" | "light";
};

export function ButtonLink({ className = "", variant = "primary", ...props }: ButtonLinkProps) {
  const variants = {
    primary: "bg-teal-700 text-white hover:bg-teal-900",
    secondary: "border border-teal-700 text-teal-900 hover:bg-teal-50",
    light: "bg-white text-teal-900 hover:bg-gold-100",
  };

  return (
    <Link
      className={`focus-ring inline-flex min-h-11 items-center justify-center rounded-md px-5 py-3 text-sm font-bold transition ${variants[variant]} ${className}`}
      {...props}
    />
  );
}
