import { createFileRoute } from "@tanstack/react-router";
import { Award } from "lucide-react";
import { student, subjects, badges, careerPathway } from "../lib/mock-data";

export const Route = createFileRoute("/profile")({
  component: ProfilePage,
});

function ProfilePage() {
  return (
    <div className="px-5 pt-6 space-y-10">
      {/* Header */}
      <header className="flex items-center gap-4">
        <div className="size-16 rounded-full bg-primary/10 text-primary flex items-center justify-center font-serif italic text-2xl ring-4 ring-primary/5">
          {student.name.charAt(0)}
        </div>
        <div>
          <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-primary/60">
            Profile
          </p>
          <h1 className="text-2xl font-bangla font-bold">{student.name}</h1>
          <p className="text-sm text-muted-foreground font-bangla">
            শ্রেণি {student.grade} • SSC প্রার্থী
          </p>
        </div>
      </header>

      {/* Theta */}
      <section className="space-y-5">
        <h3 className="font-bangla font-bold text-lg border-b border-border pb-3">
          IRT দক্ষতা স্তর (θ)
        </h3>
        <div className="grid grid-cols-2 gap-3">
          {subjects.map((s) => (
            <div
              key={s.key}
              className="p-4 rounded-2xl border border-border bg-card"
            >
              <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                {s.labelEn}
              </p>
              <p className="font-bangla text-sm mt-0.5">{s.labelBn}</p>
              <div className="mt-3 flex items-end justify-between">
                <span className="text-2xl font-bold leading-none">
                  {s.theta.toFixed(1)}
                  <span className="text-base text-muted-foreground ml-1">θ</span>
                </span>
                <span className="text-xs font-mono text-primary">{s.pct}%</span>
              </div>
              <div className="mt-2 h-1 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary rounded-full"
                  style={{ width: `${s.pct}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Badges */}
      <section className="space-y-5">
        <h3 className="font-bangla font-bold text-lg border-b border-border pb-3">
          ব্যাজ সংগ্রহ
        </h3>
        <div className="grid grid-cols-3 gap-3">
          {badges.map((b) => (
            <div
              key={b.id}
              className={`p-4 rounded-2xl border border-border bg-card flex flex-col items-center gap-2 text-center ${
                b.earned ? "" : "opacity-30 grayscale"
              }`}
            >
              <div className="text-3xl">{b.icon}</div>
              <p className="text-xs font-bangla leading-tight">{b.nameBn}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Career */}
      <section className="space-y-5">
        <h3 className="font-bangla font-bold text-lg border-b border-border pb-3">
          ক্যারিয়ার পাথওয়ে
        </h3>
        <div className="p-6 rounded-3xl bg-primary text-primary-foreground relative overflow-hidden">
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-3">
              <Award className="size-4" />
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] opacity-70">
                AI Recommended
              </span>
            </div>
            <h4 className="font-bangla text-xl font-semibold">{careerPathway.nameBn}</h4>
            <p className="mt-2 text-sm opacity-80 font-bangla leading-relaxed">
              {careerPathway.descBn}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {careerPathway.topicsBn.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-full bg-white/15 text-xs font-bangla"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div className="absolute -right-10 -bottom-10 size-40 bg-white/10 rounded-full blur-3xl" />
        </div>
      </section>
    </div>
  );
}
