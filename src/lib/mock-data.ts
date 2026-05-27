export const student = {
  name: "আরিয়ান",
  grade: 10,
  streak: 12,
  xp: 2450,
  theta: {
    physics: 1.8,
    chemistry: 1.2,
    mathematics: 2.1,
    biology: 0.9,
  },
};

export const subjects = [
  { key: "physics", labelBn: "পদার্থবিজ্ঞান", labelEn: "Physics", theta: 1.8, pct: 85 },
  { key: "chemistry", labelBn: "রসায়ন", labelEn: "Chemistry", theta: 1.2, pct: 62 },
  { key: "mathematics", labelBn: "গণিত", labelEn: "Mathematics", theta: 2.1, pct: 92 },
  { key: "biology", labelBn: "জীববিজ্ঞান", labelEn: "Biology", theta: 0.9, pct: 45 },
];

export const learningPath = [
  { id: 1, titleBn: "গতি (Motion)", status: "completed", progress: 100, sub: "১০/১০ লেসন সম্পন্ন" },
  { id: 2, titleBn: "বল (Force)", status: "active", progress: 42, sub: "বর্তমান অধ্যায় • ৪২% সম্পন্ন" },
  { id: 3, titleBn: "কাজ, শক্তি ও ক্ষমতা", status: "locked", progress: 0, sub: "লক করা আছে" },
  { id: 4, titleBn: "নিউটনের গতিসূত্র", status: "locked", progress: 0, sub: "লক করা আছে" },
  { id: 5, titleBn: "তরঙ্গ ও শব্দ", status: "locked", progress: 0, sub: "লক করা আছে" },
];

export const sampleQuestion = {
  topic: "কাজ ও ক্ষমতা",
  difficulty: "Medium",
  textBn:
    "একটি বস্তুর ওপর ৫ নিউটন বল প্রয়োগ করলে যদি বস্তুর সরণ ২ মিটার হয়, তবে কাজের পরিমাণ কত?",
  options: [
    { key: "ka", labelBn: "ক", textBn: "২.৫ জুল", correct: false },
    { key: "kha", labelBn: "খ", textBn: "১০ জুল", correct: true },
    { key: "ga", labelBn: "গ", textBn: "৭ জুল", correct: false },
    { key: "gha", labelBn: "ঘ", textBn: "৩ জুল", correct: false },
  ],
  explanationBn: "কাজ = বল × সরণ = ৫ × ২ = ১০ জুল।",
};

export const predictions = [
  { topicBn: "নিউটনের গতিসূত্র", subject: "Physics", probability: 0.92 },
  { topicBn: "কাজ ও ক্ষমতা", subject: "Physics", probability: 0.78 },
  { topicBn: "জৈব রসায়নের নামকরণ", subject: "Chemistry", probability: 0.85 },
  { topicBn: "পর্যায় সারণির প্রবণতা", subject: "Chemistry", probability: 0.74 },
  { topicBn: "ত্রিকোণমিতি অনুপাত", subject: "Math", probability: 0.81 },
  { topicBn: "সম্ভাবনা", subject: "Math", probability: 0.69 },
  { topicBn: "মানব শ্বসনতন্ত্র", subject: "Biology", probability: 0.77 },
  { topicBn: "জিন ও বংশগতি", subject: "Biology", probability: 0.71 },
  { topicBn: "আলোর প্রতিফলন", subject: "Physics", probability: 0.66 },
  { topicBn: "এসিড-ক্ষারক", subject: "Chemistry", probability: 0.62 },
];

export const badges = [
  { id: 1, nameBn: "৭ দিনের ধারা", icon: "🔥", earned: true },
  { id: 2, nameBn: "প্রথম কুইজ", icon: "✨", earned: true },
  { id: 3, nameBn: "পদার্থ গুরু", icon: "⚡", earned: true },
  { id: 4, nameBn: "নিখুঁত স্কোর", icon: "🏆", earned: false },
  { id: 5, nameBn: "৩০ দিনের ধারা", icon: "🎯", earned: false },
];

export const careerPathway = {
  nameBn: "ইঞ্জিনিয়ারিং ও প্রযুক্তি",
  descBn: "তোমার গণিত ও পদার্থবিজ্ঞানের শক্তি প্রকৌশল ক্যারিয়ারের জন্য আদর্শ।",
  topicsBn: ["ক্যালকুলাস", "তড়িৎ চুম্বকত্ব", "প্রোগ্রামিং ভিত্তি"],
};

// IRT theta progression over the last 8 weeks (per subject)
export const thetaHistory = [
  { week: "W1", physics: 0.4, chemistry: 0.2, math: 0.9, biology: 0.3 },
  { week: "W2", physics: 0.7, chemistry: 0.4, math: 1.1, biology: 0.4 },
  { week: "W3", physics: 0.9, chemistry: 0.5, math: 1.3, biology: 0.5 },
  { week: "W4", physics: 1.1, chemistry: 0.7, math: 1.5, biology: 0.6 },
  { week: "W5", physics: 1.3, chemistry: 0.9, math: 1.6, biology: 0.7 },
  { week: "W6", physics: 1.5, chemistry: 1.0, math: 1.8, biology: 0.8 },
  { week: "W7", physics: 1.7, chemistry: 1.1, math: 2.0, biology: 0.85 },
  { week: "W8", physics: 1.8, chemistry: 1.2, math: 2.1, biology: 0.9 },
];

// Weekly study time distribution
export const studyMinutes = [
  { day: "শনি", minutes: 45 },
  { day: "রবি", minutes: 60 },
  { day: "সোম", minutes: 35 },
  { day: "মঙ্গল", minutes: 80 },
  { day: "বুধ", minutes: 50 },
  { day: "বৃহঃ", minutes: 70 },
  { day: "শুক্র", minutes: 90 },
];
