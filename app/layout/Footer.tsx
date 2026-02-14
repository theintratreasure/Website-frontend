import Link from "next/link";
import { Handshake, Info, PhoneCall, UserRound } from "lucide-react";

const footerLinks = [
  { label: "Partners", href: "/partners", Icon: Handshake },
  { label: "Accounts", href: "/accounts", Icon: UserRound },
  { label: "About", href: "/about", Icon: Info },
  { label: "Contact", href: "/contact", Icon: PhoneCall },
] as const;

export default function Footer() {
  return (
    <footer className="border-t border-[var(--card-border)] bg-[var(--card-bg)]">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-4 py-8 sm:px-6 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-[var(--text-muted)]">© 2026 ALS Trades. All rights reserved.</p>
        <nav className="flex flex-wrap items-center gap-4 text-sm">
          {footerLinks.map(({ label, href, Icon }) => (
            <Link
              key={href}
              href={href}
              className="rounded px-2 py-1 text-[var(--text-muted)] hover:bg-[var(--hover-bg)] hover:text-[var(--foreground)]"
            >
              <span className="inline-flex items-center gap-1.5">
                <Icon size={14} className="text-[var(--primary)]" />
                {label}
              </span>
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
