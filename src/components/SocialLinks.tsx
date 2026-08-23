import type { SVGProps } from "react";
import { facebook, linkedin, site } from "@/data/site";

/**
 * Brand marks are inlined because lucide-react 1.x no longer ships brand icons,
 * and because these links must not pull in any third-party script.
 */
function FacebookMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" {...props}>
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.78-1.63 1.57v1.88h2.78l-.45 2.91h-2.33V22c4.78-.76 8.45-4.92 8.45-9.94Z" />
    </svg>
  );
}

function LinkedInMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" {...props}>
      <path d="M6.94 5.5a1.94 1.94 0 1 1-3.88 0 1.94 1.94 0 0 1 3.88 0ZM3.25 8.98h3.5V21h-3.5V8.98Zm5.75 0h3.35v1.64h.05c.47-.86 1.6-1.77 3.3-1.77 3.53 0 4.18 2.24 4.18 5.15V21h-3.5v-5.32c0-1.27-.02-2.9-1.79-2.9-1.79 0-2.06 1.37-2.06 2.8V21H9V8.98Z" />
    </svg>
  );
}

const channels = [
  {
    label: `${site.name} on Facebook`,
    short: "Facebook",
    href: facebook.pageUrl,
    Mark: FacebookMark,
  },
  {
    label: `${site.name} on LinkedIn`,
    short: "LinkedIn",
    href: linkedin.pageUrl,
    Mark: LinkedInMark,
  },
];

type SocialLinksProps = {
  tone?: "dark" | "light";
  showLabels?: boolean;
  className?: string;
};

export function SocialLinks({ tone = "light", showLabels = false, className = "" }: SocialLinksProps) {
  const styles =
    tone === "light"
      ? "border-white/25 bg-white/10 text-white hover:border-gold-400/70 hover:bg-white/20"
      : "border-teal-900/15 bg-white text-teal-800 hover:border-gold-400/70 hover:bg-teal-50";

  return (
    <ul className={`flex flex-wrap items-center gap-3 ${className}`.trim()}>
      {channels.map(({ label, short, href, Mark }) => (
        <li key={href}>
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={`${label} (opens in a new tab)`}
            className={`focus-ring inline-flex min-h-11 items-center gap-2 rounded-md border px-4 py-2 text-sm font-bold transition duration-300 ease-out hover:-translate-y-0.5 ${styles}`}
          >
            <Mark className="h-5 w-5" />
            {showLabels ? <span>{short}</span> : null}
          </a>
        </li>
      ))}
    </ul>
  );
}
