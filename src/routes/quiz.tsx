import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Check, X, ArrowRight } from "lucide-react";
import { sampleQuestion } from "../lib/mock-data";

export const Route = createFileRoute("/quiz")({
  component: QuizPage,
});

function QuizPage() {
  const [selected, setSelected] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const q = sampleQuestion;

  function pick(key: string) {
    if (submitted) return;
    setSelected(key);
  }

  function submit() {
    if (!selected) return;
    setSubmitted(true);
  }

  function next() {
    setSelected(null);
    setSubmitted(false);
  }

  return (
    <div className="px-5 pt-6 space-y-8">
      <header>
        <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-primary/60 mb-1">
          Adaptive Quiz
        </p>
        <h1 className="text-3xl font-serif italic">অনুশীলন কুইজ</h1>
      </header>

      <div className="flex items-center justify-between border-b border-border pb-4">
        <span className="text-xs font-mono px-2 py-1 bg-muted rounded">প্রশ্ন ০৫ / ২০</span>
        <div className="flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold">
          <div className="size-1.5 bg-primary rounded-full animate-pulse" />
          <span className="font-bangla">AI: {q.difficulty}</span>
        </div>
      </div>

      <p className="font-bangla text-xl leading-relaxed text-pretty">{q.textBn}</p>

      <div className="grid grid-cols-1 gap-3">
        {q.options.map((opt) => {
          const isSelected = selected === opt.key;
          const showState = submitted && (isSelected || opt.correct);
          const correct = submitted && opt.correct;
          const wrong = submitted && isSelected && !opt.correct;

          return (
            <button
              key={opt.key}
              onClick={() => pick(opt.key)}
              disabled={submitted}
              className={[
                "flex items-center gap-4 p-4 rounded-xl border-2 transition-all text-left group",
                correct
                  ? "border-emerald-500 bg-emerald-50"
                  : wrong
                    ? "border-red-500 bg-red-50"
                    : isSelected
                      ? "border-primary bg-primary/5 ring-4 ring-primary/5"
                      : "border-border hover:border-primary hover:bg-primary/5",
              ].join(" ")}
            >
              <span
                className={[
                  "size-9 rounded-lg flex items-center justify-center font-bangla shrink-0 transition-colors",
                  correct
                    ? "bg-emerald-500 text-white"
                    : wrong
                      ? "bg-red-500 text-white"
                      : isSelected
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted group-hover:bg-primary group-hover:text-primary-foreground",
                ].join(" ")}
              >
                {opt.labelBn}
              </span>
              <span className="font-bangla text-lg flex-1">{opt.textBn}</span>
              {showState && (correct ? <Check className="size-5 text-emerald-600" /> : wrong ? <X className="size-5 text-red-600" /> : null)}
            </button>
          );
        })}
      </div>

      {submitted && (
        <div className="p-5 rounded-2xl bg-primary-soft border border-primary/10 space-y-2">
          <p className="text-[10px] font-mono uppercase tracking-widest text-primary">
            ব্যাখ্যা
          </p>
          <p className="font-bangla text-sm leading-relaxed">{q.explanationBn}</p>
        </div>
      )}

      <div className="pt-2">
        {!submitted ? (
          <button
            onClick={submit}
            disabled={!selected}
            className="w-full py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold font-bangla disabled:opacity-40 transition-opacity"
          >
            উত্তর দাও
          </button>
        ) : (
          <button
            onClick={next}
            className="w-full py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold font-bangla flex items-center justify-center gap-2"
          >
            পরবর্তী প্রশ্ন <ArrowRight className="size-4" />
          </button>
        )}
      </div>
    </div>
  );
}
