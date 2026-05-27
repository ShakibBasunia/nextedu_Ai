import {
  LineChart,
  Line,
  BarChart,
  Bar,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
} from "recharts";
import { thetaHistory, studyMinutes, predictions, subjects } from "../lib/mock-data";

const tealStroke = "hsl(165 65% 25%)";
const accentStroke = "hsl(25 75% 55%)";
const mutedStroke = "hsl(165 20% 70%)";
const softGrid = "hsl(165 20% 90%)";

const tooltipStyle = {
  background: "hsl(0 0% 100%)",
  border: "1px solid hsl(165 20% 88%)",
  borderRadius: "10px",
  fontSize: "12px",
  fontFamily: "var(--font-mono, monospace)",
};

function ChartCard({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <div className="p-5 rounded-2xl border border-border bg-card">
      <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-primary/60 mb-1">
        {subtitle}
      </p>
      <h4 className="font-bangla font-semibold mb-4">{title}</h4>
      <div className="h-56 -ml-3">{children}</div>
    </div>
  );
}

export function ThetaProgressionChart() {
  return (
    <ChartCard title="θ প্রগ্রেশন (৮ সপ্তাহ)" subtitle="IRT Skill Trajectory">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={thetaHistory} margin={{ top: 5, right: 12, bottom: 0, left: 0 }}>
          <CartesianGrid stroke={softGrid} strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="week" stroke={mutedStroke} fontSize={10} tickLine={false} axisLine={false} />
          <YAxis stroke={mutedStroke} fontSize={10} tickLine={false} axisLine={false} domain={[0, 3]} />
          <Tooltip contentStyle={tooltipStyle} />
          <Legend wrapperStyle={{ fontSize: 10, fontFamily: "monospace", textTransform: "uppercase" }} />
          <Line type="monotone" dataKey="math" stroke={tealStroke} strokeWidth={2} dot={false} />
          <Line type="monotone" dataKey="physics" stroke={accentStroke} strokeWidth={2} dot={false} />
          <Line type="monotone" dataKey="chemistry" stroke="hsl(200 60% 45%)" strokeWidth={2} dot={false} />
          <Line type="monotone" dataKey="biology" stroke="hsl(120 35% 45%)" strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}

export function StudyTimeChart() {
  return (
    <ChartCard title="সাপ্তাহিক অধ্যয়ন (মিনিট)" subtitle="Weekly Study Time">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={studyMinutes} margin={{ top: 5, right: 12, bottom: 0, left: 0 }}>
          <CartesianGrid stroke={softGrid} strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="day" stroke={mutedStroke} fontSize={10} tickLine={false} axisLine={false} />
          <YAxis stroke={mutedStroke} fontSize={10} tickLine={false} axisLine={false} />
          <Tooltip contentStyle={tooltipStyle} cursor={{ fill: "hsl(165 30% 95%)" }} />
          <Bar dataKey="minutes" fill={tealStroke} radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}

export function PredictionsChart() {
  const top = [...predictions].sort((a, b) => b.probability - a.probability).slice(0, 6);
  const data = top.map((p) => ({ topic: p.topicBn, prob: Math.round(p.probability * 100) }));
  return (
    <ChartCard title="শীর্ষ ৬ প্রেডিকশন (%)" subtitle="XGBoost Exam Predictor">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} layout="vertical" margin={{ top: 5, right: 16, bottom: 0, left: 0 }}>
          <CartesianGrid stroke={softGrid} strokeDasharray="3 3" horizontal={false} />
          <XAxis type="number" stroke={mutedStroke} fontSize={10} tickLine={false} axisLine={false} domain={[0, 100]} />
          <YAxis
            type="category"
            dataKey="topic"
            stroke={mutedStroke}
            fontSize={10}
            tickLine={false}
            axisLine={false}
            width={120}
          />
          <Tooltip contentStyle={tooltipStyle} cursor={{ fill: "hsl(165 30% 95%)" }} />
          <Bar dataKey="prob" fill={accentStroke} radius={[0, 6, 6, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}

export function SkillRadar() {
  const data = subjects.map((s) => ({ subject: s.labelBn, theta: s.theta, full: 3 }));
  return (
    <ChartCard title="দক্ষতা ম্যাট্রিক্স" subtitle="Skill Radar (θ)">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={data} outerRadius="75%">
          <PolarGrid stroke={softGrid} />
          <PolarAngleAxis dataKey="subject" tick={{ fontSize: 10, fill: mutedStroke, fontFamily: "var(--font-bangla)" }} />
          <PolarRadiusAxis angle={90} domain={[0, 3]} tick={{ fontSize: 9, fill: mutedStroke }} />
          <Radar dataKey="theta" stroke={tealStroke} fill={tealStroke} fillOpacity={0.3} />
          <Tooltip contentStyle={tooltipStyle} />
        </RadarChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}
