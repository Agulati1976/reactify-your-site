import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Phone, Mail, Menu, X } from "lucide-react";
import logo from "@/assets/huquo-logo.png";

type NavKey = "about" | "leadership" | "verticals" | "jobs" | "contact" | null;

const items: { key: Exclude<NavKey, null>; label: string; to?: string; hash?: string }[] = [
  { key: "about", label: "About Us", to: "/about" },
  { key: "leadership", label: "Leadership Team", to: "/leadership" },
  { key: "verticals", label: "Value Verticals", to: "/verticals" },
  { key: "jobs", label: "Job Boards", to: "/", hash: "jobs" },
  { key: "contact", label: "Contact Us", to: "/contact" },
];

export function SiteHeader({ active = null }: { active?: NavKey }) {
  const [open, setOpen] = useState(false);
  const cls = (k: NavKey) => (k === active ? "text-[#1FB6D4]" : "hover:text-[#1FB6D4]");
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 sm:py-4">
        <Link to="/" className="flex shrink-0 items-center" onClick={() => setOpen(false)}>
          <img src={logo} alt="HuQuo" className="h-10 w-auto sm:h-12" width={180} height={48} />
        </Link>
        <nav className="hidden items-center gap-8 text-[15px] font-medium uppercase tracking-wide text-[#6c6c6c] lg:flex xl:gap-10">
          {items.map((it) => (
            <Link key={it.key} to={it.to!} {...(it.hash ? { hash: it.hash } : {})} className={cls(it.key)}>
              {it.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-5 text-[#6c6c6c] lg:flex">
          <a href="tel:+911244559224" aria-label="Call"><Phone className="h-5 w-5" /></a>
          <a href="mailto:contact@huquo.com" aria-label="Email"><Mail className="h-5 w-5" /></a>
        </div>
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 shrink-0 items-center justify-center text-[#1FB6D4] lg:hidden"
        >
          {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-gray-200 bg-white lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-3 text-[15px] font-medium uppercase tracking-wide text-[#6c6c6c] sm:px-6">
            {items.map((it) => (
              <Link
                key={it.key}
                to={it.to!}
                {...(it.hash ? { hash: it.hash } : {})}
                onClick={() => setOpen(false)}
                className={`border-b border-gray-100 py-3 ${cls(it.key)}`}
              >
                {it.label}
              </Link>
            ))}
            <div className="mt-4 flex items-center gap-6 py-2 text-[#6c6c6c]">
              <a href="tel:+911244559224" aria-label="Call"><Phone className="h-5 w-5" /></a>
              <a href="mailto:contact@huquo.com" aria-label="Email"><Mail className="h-5 w-5" /></a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}