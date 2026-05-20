import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { predictions } from "../lib/mock-data";

const subjectFilters = ["All", "Physics", "Chemistry", "Math", "Biology"];

export const Route = createFileRoute("/predict")({
  component: PredictPage,
});

function PredictPage() {
  const [filter, setFilter] = useState("All");
  const list = predictions
    .filter((p) => filter === "All" || p.subject === filter)
    .sort((a, b) => b.probability - a.probability);

  return (
    <div className="px-5 pt-6 space-y-8">
      <header>
        <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-primary/60 mb-1">
          Exam Predictor
        </p>
        <h1 className="text-3xl font-serif italic">পরীক্ষা প্রেডিক্টর</h1>
        <p className="mt-2 text-sm text-muted-foreground font-bangla">
          XGBoost মডেলে গত ৫ বছরের SSC প্রশ্নপত্র বিশ্লেষণ — শীর্ষ ১০ সম্ভাব্য টপিক।
        </p>
      </header>

      <div className="flex gap-2 overflow-x-auto -mx-5 px-5 pb-1">
        {subjectFilters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={[
              "px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-widest shrink-0 transition-colors",
              filter === f
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:bg-primary/10",
            ].join(" ")}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="space-y-3">
        {list.map((p, i) => (
          <div
            key={p.topicBn}
            className="p-4 rounded-xl border border-border bg-card hover:border-primary/40 transition-colors"
          >
            <div className="flex items-start justify-between gap-4 mb-3">
              <div className="flex items-start gap-3">
                <span className="text-xs font-mono text-muted-foreground mt-0.5 w-6">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="font-bangla font-semibold">{p.topicBn}</p>
                  <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mt-0.5">
                    {p.subject} • SSC 2025
                  </p>
                </div>
              </div>
              <span className="text-sm font-mono font-bold text-primary shrink-0">
                {Math.round(p.probability * 100)}%
              </span>
            </div>
            <div className="h-1.5 bg-muted rounded-full overflow-hidden">
              <div
                className="h-full bg-primary rounded-full transition-all"
                style={{ width: `${p.probability * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
