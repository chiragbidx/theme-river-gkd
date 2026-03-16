"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

const menu = [
  { label: "Features", href: "#features" },
  { label: "How it Works", href: "#benefits" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar({ isLoggedIn = false }: { isLoggedIn?: boolean }) {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 bg-background/85 backdrop-blur border-b border-b-secondary/30">
      <nav className="mx-auto flex max-w-[1600px] items-center justify-between p-4 px-6 sm:px-10 lg:px-16">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center font-bold text-2xl group">
            <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-tr from-primary via-primary/80 to-primary text-background mr-2 border border-secondary group-hover:scale-105 transition-transform">
              {/* Replace with MailSprout icon or logomark if available */}
              <svg width="22" height="22" fill="none" className="inline" viewBox="0 0 24 24">
                <rect width="24" height="24" rx="5" fill="url(#ms-bg)"/>
                <defs>
                  <linearGradient id="ms-bg" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#D247BF"/>
                    <stop offset="1" stopColor="#fb7232"/>
                  </linearGradient>
                </defs>
              </svg>
            </span>
            <span>MailSprout</span>
          </Link>
          <span className="ml-2 hidden text-xs tracking-tight font-semibold text-primary/60 sm:block">
            Smarter Email Marketing
          </span>
        </div>
        <div className="hidden md:flex gap-6 items-center">
          {menu.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`transition-colors text-sm font-medium ${
                pathname + window.location.hash === item.href
                  ? "text-primary"
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-3">
          {isLoggedIn ? (
            <Button asChild variant="outline" size="sm">
              <Link href="/dashboard">Go to Dashboard</Link>
            </Button>
          ) : (
            <>
              <Button asChild variant="secondary" size="sm">
                <Link href="/auth#signup">Start for Free</Link>
              </Button>
              <Button asChild variant="outline" size="sm" className="hidden sm:inline-flex">
                <Link href="/auth#signin">Sign In</Link>
              </Button>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}