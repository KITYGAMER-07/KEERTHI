import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Heart, Clock, Award, Smile, MessageCircle, Star } from 'lucide-react';
import { sounds } from '../utils/audio';
import FlowerIcon from './FlowerIcon';

export const EightYearsSection: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState<number>(1);

  const stats = [
    { label: 'Years Together', value: '8', unit: 'Years', icon: Calendar, color: 'text-pink-600 bg-pink-50 border-pink-200' },
    { label: 'Days of Friendship', value: '2,920+', unit: 'Days', icon: Clock, color: 'text-amber-600 bg-amber-50 border-amber-200' },
    { label: 'Unfiltered Laughs', value: '∞', unit: 'Laughs', icon: Smile, color: 'text-rose-600 bg-rose-50 border-rose-200' },
    { label: 'Bond Strength', value: '100%', unit: 'Pure Love', icon: Heart, color: 'text-red-500 bg-red-50 border-red-200' },
  ];

  const yearMilestones = [
    {
      year: 1,
      tag: 'The Beginning',
      title: 'Chapter 1: Where It All Started',
      description: 'First introductions, polite smiles turning into quick bonding, and discovering that we vibe effortlessly.',
      memoryQuote: 'The start of a bond destined to last a lifetime.',
      badge: 'First Hello',
    },
    {
      year: 2,
      tag: 'Inside Jokes',
      title: 'Chapter 2: Endless Giggles & Secret Codes',
      description: 'Developing our own language of jokes that nobody else in the room understood, laughing at random things.',
      memoryQuote: 'Laughing till our faces hurt and tears rolled down.',
      badge: 'Giggle Mode',
    },
    {
      year: 3,
      tag: 'Late Night Talks',
      title: 'Chapter 3: Heart to Hearts & Deep Conversations',
      description: 'Sharing dreams, secret fears, life updates, and discovering what true listening and empathy feel like.',
      memoryQuote: 'Unfiltered midnight talks that made everything better.',
      badge: 'Confidante',
    },
    {
      year: 4,
      tag: 'Comfort & Trust',
      title: 'Chapter 4: The Unbreakable Comfort Zone',
      description: 'No explanations needed. A safe haven where being goofy, tired, or completely silly is 100% welcomed.',
      memoryQuote: 'Like a comforting warm glow on a rainy day.',
      badge: 'Safe Haven',
    },
    {
      year: 5,
      tag: 'Milestone Five',
      title: 'Chapter 5: Weathering Every Storm Together',
      description: 'Standing strong through challenges, exams, ups and downs, knowing someone always has your back unconditionally.',
      memoryQuote: 'Proof that true friendships only grow stronger through time.',
      badge: 'Unshakable',
    },
    {
      year: 6,
      tag: 'New Adventures',
      title: 'Chapter 6: Growing & Blooming Side by Side',
      description: 'Celebrating achievements, cheering each other on, and watching each other grow into wonderful humans.',
      memoryQuote: 'Cheering for your wins as if they were my own.',
      badge: 'Cheerleader',
    },
    {
      year: 7,
      tag: 'Golden Harmony',
      title: 'Chapter 7: Effortless Understanding',
      description: 'Even when busy with life, one glance or one text message instantly picks up right where we left off.',
      memoryQuote: 'Distance and time could never weaken our connection.',
      badge: 'Soul Friends',
    },
    {
      year: 8,
      tag: 'Present & Beyond',
      title: 'Chapter 8: Eight Glorious Years & Forever More',
      description: 'Celebrating 8 beautiful chapters of unconditional friendship, gratitude, laughter, and building lifelong memories.',
      memoryQuote: 'Here is to 8 unforgettable years and many more to come!',
      badge: 'Forever Bond',
    },
  ];

  return (
    <section id="eight-years" className="py-20 px-4 relative max-w-5xl mx-auto">
      {/* Chapter Marker */}
      <div className="flex justify-center mb-6">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-amber-200 shadow-xs text-xs font-bold text-amber-600 tracking-wider uppercase">
          <FlowerIcon className="w-3.5 h-3.5 text-amber-500" />
          <span>8 YEARS</span>
        </span>
      </div>

      {/* Main Container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-white/95 backdrop-blur-md rounded-3xl border-2 border-pink-200 shadow-xl p-6 sm:p-12 relative"
      >
        <div className="text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-amber-100/80 text-amber-800 rounded-full text-xs font-bold">
            <FlowerIcon className="w-3.5 h-3.5 text-amber-600" />
            <span>Milestone Celebration</span>
            <FlowerIcon className="w-3.5 h-3.5 text-amber-600" />
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-800 font-display flex items-center justify-center gap-2.5">
            <FlowerIcon className="w-6 h-6 sm:w-8 sm:h-8 text-amber-500 shrink-0" />
            <span>8 Years of Memories</span>
            <FlowerIcon className="w-6 h-6 sm:w-8 sm:h-8 text-amber-500 shrink-0" />
          </h2>

          <p className="text-lg sm:text-xl font-handwriting text-2xl sm:text-3xl text-pink-600 font-bold">
            laughter & friendship that grows sweeter every day
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-10">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className={`p-4 rounded-2xl border text-center transition-all hover:scale-105 ${stat.color}`}
              >
                <div className="inline-flex p-2 rounded-xl bg-white shadow-xs mb-2">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold font-display text-slate-800">
                  {stat.value}
                </div>
                <div className="text-xs font-semibold text-slate-600 mt-0.5">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* 8 Year Interactive Timeline Bar */}
        <div className="space-y-4">
          <div className="text-center font-bold text-xs text-slate-500 uppercase tracking-wider">
            Explore Each Year of the Journey (Click a Year)
          </div>

          <div className="flex items-center justify-between gap-1 sm:gap-2 overflow-x-auto pb-2 scrollbar-none">
            {yearMilestones.map((item) => {
              const isSelected = selectedYear === item.year;
              return (
                <button
                  key={item.year}
                  onClick={() => {
                    sounds.playPop();
                    setSelectedYear(item.year);
                  }}
                  className={`flex-1 min-w-[50px] sm:min-w-[70px] py-3 px-2 rounded-2xl flex flex-col items-center gap-1 transition-all border ${
                    isSelected
                      ? 'bg-gradient-to-b from-pink-500 to-rose-500 text-white shadow-md shadow-pink-300 scale-105 border-pink-400'
                      : 'bg-pink-50/70 hover:bg-pink-100 text-slate-700 border-pink-100'
                  }`}
                >
                  <span className="text-xs font-bold opacity-80">Yr</span>
                  <span className="text-lg sm:text-xl font-extrabold font-display">{item.year}</span>
                  {isSelected && <Star className="w-3 h-3 fill-amber-300 text-amber-300" />}
                </button>
              );
            })}
          </div>

          {/* Selected Year Detailed Card */}
          <AnimatePresence mode="wait">
            {yearMilestones.find((y) => y.year === selectedYear) && (
              <motion.div
                key={selectedYear}
                initial={{ opacity: 0, y: 10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.98 }}
                transition={{ duration: 0.25 }}
                className="mt-6 p-6 sm:p-8 bg-gradient-to-br from-pink-50/90 via-white to-amber-50/80 rounded-2xl border-2 border-pink-200 shadow-sm"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 bg-pink-200 text-pink-800 text-xs font-bold rounded-full">
                      Year {selectedYear} / 8
                    </span>
                    <span className="text-xs font-semibold text-amber-700 px-2.5 py-0.5 bg-amber-100 rounded-md">
                      {yearMilestones[selectedYear - 1].badge}
                    </span>
                  </div>
                  <div className="text-xs text-slate-500 font-medium">
                    {yearMilestones[selectedYear - 1].tag}
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-display mb-3">
                  {yearMilestones[selectedYear - 1].title}
                </h3>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-4">
                  {yearMilestones[selectedYear - 1].description}
                </p>

                <div className="p-3.5 bg-white rounded-xl border border-pink-100 flex items-center gap-3">
                  <Heart className="w-4 h-4 text-pink-500 fill-pink-500 flex-shrink-0" />
                  <p className="text-xs sm:text-sm font-handwriting text-xl text-pink-700">
                    &ldquo;{yearMilestones[selectedYear - 1].memoryQuote}&rdquo;
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
};
