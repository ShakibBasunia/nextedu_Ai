import { createFileRoute, Link } from "@tanstack/react-router";
import { Flame, Zap, ArrowRight, Sparkles } from "lucide-react";
import { student, subjects, learningPath, badges } from "../lib/mock-data";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  const active = learningPath.find((p) => p.status === "active");
  return (
    <div className="px-5 pt-6 space-y-10">
      {/* Greeting */}
      <section>
        <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-primary/60 mb-1">
          Dashboard
        </p>
        <h1 className="text-3xl md:text-4xl font-serif italic">
          স্বাগতম, {student.name}
        </h1>
        <p className="mt-2 text-sm text-muted-foreground font-bangla">
          আজ {active?.titleBn} অধ্যায়ে এগিয়ে যাই।
        </p>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-2 gap-3">
        <div className="p-5 rounded-2xl bg-accent/5 border border-accent/20 flex flex-col">
          <div className="flex items-center gap-2 mb-3">
            <Flame className="size-3.5 text-accent" />
            <span className="text-[10px] font-mono uppercase tracking-widest text-accent">
              Daily Streak
            </span>
          </div>
          <div className="flex items-end gap-2">
            <span className="text-4xl font-bold leading-none">১২</span>
            <span className="text-sm font-bangla mb-1 text-muted-foreground">দিন টানা</span>
          </div>
        </div>
        <div className="p-5 rounded-2xl bg-primary/5 border border-primary/10 flex flex-col">
          <div className="flex items-center gap-2 mb-3">
            <Zap className="size-3.5 text-primary" />
            <span className="text-[10px] font-mono uppercase tracking-widest text-primary">
              Total XP
            </span>
          </div>
          <div className="flex items-end gap-2">
            <span className="text-4xl font-bold leading-none">২৪৫০</span>
            <span className="text-sm font-bangla mb-1 text-muted-foreground">পয়েন্ট</span>
          </div>
        </div>
      </section>

      {/* Next topic hero */}
      <section>
        <Link
          to="/quiz"
          className="group block p-6 rounded-3xl bg-primary text-primary-foreground relative overflow-hidden"
        >
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] opacity-70">
            Next Lesson
          </span>
          <h2 className="text-2xl font-bangla font-semibold mt-2 leading-snug text-balance">
            {active?.titleBn}
          </h2>
          <p className="mt-2 text-sm opacity-80 font-bangla">{active?.sub}</p>
          <div className="mt-6 flex items-center gap-2 text-sm font-semibold">
            <span>শুরু করি</span>
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </div>
          <div className="absolute -right-10 -bottom-10 size-40 bg-white/10 rounded-full blur-3xl" />
        </Link>
      </section>

      {/* Theta per subject */}
      <section className="space-y-5">
        <h3 className="font-bangla font-bold text-lg border-b border-border pb-3">
          বিষয়ভিত্তিক দক্ষতা (θ)
        </h3>
        <div className="space-y-4">
          {subjects.map((s) => (
            <div key={s.key} className="flex items-center gap-4">
              <div className="w-32 font-bangla text-sm">{s.labelBn}</div>
              <div className="flex-1 h-1.5 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary rounded-full transition-all"
                  style={{ width: `${s.pct}%` }}
                />
              </div>
              <span className="text-xs font-mono w-12 text-right text-primary font-semibold">
                {s.theta.toFixed(1)}θ
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Badges */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-bangla font-bold text-lg">অর্জিত ব্যাজ</h3>
          <Link to="/profile" className="text-xs font-mono text-primary uppercase tracking-widest">
            View all
          </Link>
        </div>
        <div className="flex gap-3 overflow-x-auto pb-2 -mx-5 px-5">
          {badges.map((b) => (
            <div
              key={b.id}
              className={`shrink-0 w-20 flex flex-col items-center gap-2 ${
                b.earned ? "" : "opacity-30 grayscale"
              }`}
            >
              <div className="size-16 rounded-2xl bg-card border border-border flex items-center justify-center text-2xl">
                {b.icon}
              </div>
              <span className="text-[10px] font-bangla text-center text-muted-foreground leading-tight">
                {b.nameBn}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* AI emotion */}
      <section className="p-5 rounded-2xl border border-border bg-card flex items-center gap-4">
        <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center">
          <Sparkles className="size-5 text-primary" />
        </div>
        <div className="flex-1">
          <p className="text-[10px] font-mono uppercase tracking-widest text-primary">
            AI: শান্ত ও মনোযোগী
          </p>
          <p className="text-sm font-bangla mt-0.5 text-muted-foreground">
            তোমার বর্তমান অবস্থা — কঠিন প্রশ্নের জন্য প্রস্তুত।
          </p>
        </div>
      </section>
    </div>
  );
}
