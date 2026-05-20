import { Link, Outlet, useRouterState } from "@tanstack/react-router";
import { Home, BookOpen, Map, TrendingUp, User } from "lucide-react";

const nav = [
  { to: "/", labelBn: "হোম", labelEn: "Home", icon: Home },
  { to: "/quiz", labelBn: "কুইজ", labelEn: "Quiz", icon: BookOpen },
  { to: "/path", labelBn: "ম্যাপ", labelEn: "Map", icon: Map },
  { to: "/predict", labelBn: "প্রেডিক্ট", labelEn: "Predict", icon: TrendingUp },
  { to: "/profile", labelBn: "প্রোফাইল", labelEn: "Profile", icon: User },
];

export function AppShell() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;500;600;700&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&family=Playfair+Display:ital,wght@1,700&display=swap"
      />

      {/* Top Bar */}
      <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-5xl mx-auto px-5 h-14 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5">
            <div className="size-8 bg-primary rounded-sm flex items-center justify-center text-primary-foreground font-bold">
              N
            </div>
            <span className="font-bangla font-bold text-lg tracking-tight text-primary">
              নেক্সট-এডু
            </span>
          </Link>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-xs font-medium">
              <div className="size-1.5 bg-emerald-500 rounded-full animate-pulse" />
              <span className="font-bangla">অফলাইন মোড সচল</span>
            </div>
            <button className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors">
              EN
            </button>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="max-w-5xl mx-auto pb-24">
        <Outlet />
      </main>

      {/* Bottom Nav */}
      <nav className="fixed bottom-0 left-0 right-0 bg-card/95 backdrop-blur-lg border-t border-border z-40">
        <div className="max-w-md mx-auto flex justify-between px-6 py-3">
          {nav.map(({ to, labelEn, icon: Icon }) => {
            const active = to === "/" ? pathname === "/" : pathname.startsWith(to);
            return (
              <Link
                key={to}
                to={to}
                className={`flex flex-col items-center gap-1 transition-colors ${
                  active ? "text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Icon className="size-5" strokeWidth={active ? 2.5 : 1.75} />
                <span className="text-[10px] font-bold uppercase tracking-widest">
                  {labelEn}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
