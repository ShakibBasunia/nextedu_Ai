import { createFileRoute } from "@tanstack/react-router";
import { learningPath } from "../lib/mock-data";

export const Route = createFileRoute("/path")({
  component: PathPage,
});

function PathPage() {
  return (
    <div className="px-5 pt-6 space-y-8">
      <header>
        <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-primary/60 mb-1">
          Learning Path
        </p>
        <h1 className="text-3xl font-serif italic">পদার্থবিজ্ঞান ম্যাপ</h1>
        <p className="mt-2 text-sm text-muted-foreground font-bangla">
          প্রি-রিকুইজিট অনুসারে সাজানো পাঠক্রম।
        </p>
      </header>

      <div className="relative pl-2">
        <div className="absolute left-8 top-6 bottom-6 w-0.5 border-l-2 border-dashed border-primary/20" />
        <div className="relative flex flex-col gap-10">
          {learningPath.map((node) => {
            const isDone = node.status === "completed";
            const isActive = node.status === "active";
            return (
              <div
                key={node.id}
                className={`flex items-start gap-5 ${node.status === "locked" ? "opacity-40" : ""}`}
              >
                <div
                  className={[
                    "size-12 rounded-full flex items-center justify-center shrink-0 ring-4",
                    isDone
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20 ring-background"
                      : isActive
                        ? "bg-background border-2 border-primary text-primary ring-primary/10"
                        : "bg-card border-2 border-border text-muted-foreground ring-background",
                  ].join(" ")}
                >
                  {isDone ? (
                    <span className="text-lg">✓</span>
                  ) : isActive ? (
                    <div className="size-3 bg-primary rounded-full animate-ping" />
                  ) : (
                    <span className="text-xs font-mono">
                      {String(node.id).padStart(2, "0")}
                    </span>
                  )}
                </div>
                <div className="pt-1 flex-1">
                  <h3
                    className={`font-bangla font-semibold text-lg ${isActive ? "text-primary" : ""}`}
                  >
                    {node.titleBn}
                  </h3>
                  <p className="text-sm text-muted-foreground font-bangla mt-0.5">
                    {node.sub}
                  </p>
                  {isActive && (
                    <div className="mt-3 h-1 bg-muted rounded-full overflow-hidden max-w-xs">
                      <div
                        className="h-full bg-primary transition-all"
                        style={{ width: `${node.progress}%` }}
                      />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="p-5 rounded-2xl border border-border bg-card">
        <p className="text-[10px] font-mono uppercase tracking-widest text-primary mb-2">
          Neo4j Knowledge Graph
        </p>
        <p className="font-bangla text-sm text-muted-foreground leading-relaxed">
          “কাজ, শক্তি ও ক্ষমতা” শুরু করার আগে “বল” আয়ত্ত করা প্রয়োজন।
          প্রি-রিকুইজিট গ্যাপ ০.৫ এর নিচে হলে সিস্টেম স্বয়ংক্রিয়ভাবে রিডাইরেক্ট করবে।
        </p>
      </div>
    </div>
  );
}
