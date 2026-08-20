import React from 'react';
import { motion } from 'motion/react';
import { Heart, Gift, Smile, Coffee, Sun } from 'lucide-react';
import { sounds } from '../utils/audio';
import FlowerIcon from './FlowerIcon';

export const IntroSection: React.FC<IntroSectionProps> = () => {
  const highlights = [
    {
      icon: Smile,
      title: 'Endless Smiles',
      desc: 'Bringing brightness even on the cloudiest days.',
      color: 'bg-amber-50 text-amber-600 border-amber-200',
    },
    {
      icon: Coffee,
      title: 'Comfort & Warmth',
      desc: 'Like cozy sunshine and heartfelt warmth.',
      color: 'bg-rose-50 text-rose-600 border-rose-200',
    },
    {
      icon: Sun,
      title: 'True Friendship',
      desc: 'An 8-year strong bond built on mutual care & fun.',
      color: 'bg-orange-50 text-orange-600 border-orange-200',
    },
  ];

  return (
    <section id="intro" className="py-20 px-4 relative max-w-4xl mx-auto">
      {/* Chapter Marker */}
      <div className="flex justify-center mb-6">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-pink-200 shadow-xs text-xs font-bold text-pink-600 tracking-wider uppercase">
          <Heart className="w-3.5 h-3.5 text-pink-500 fill-pink-500" />
          <span>INTRODUCTION</span>
        </span>
      </div>

      {/* Main Container matching diagram box */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-white/90 backdrop-blur-md rounded-3xl border-2 border-pink-200 shadow-lg p-8 sm:p-12 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 transform translate-x-8 -translate-y-8 w-40 h-40 bg-pink-100/60 rounded-full blur-2xl pointer-events-none" />

        <div className="text-center space-y-4">
          <div className="inline-flex items-center justify-center p-3 bg-pink-100 text-pink-600 rounded-2xl shadow-inner">
            <Gift className="w-8 h-8" />
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-800 font-display">
            A small website made specially for{' '}
            <span className="text-pink-600 font-bold underline decoration-pink-300 decoration-wavy underline-offset-4 inline-flex items-center gap-1.5">
              <span>Keerthi</span>
              <Heart className="w-6 h-6 text-rose-500 fill-rose-500 inline-block animate-pulse" />
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed pt-2">
            Some people make the world a gentler, happier, and brighter place simply by being in it.
            This little sanctuary was designed to collect the memories, the laughter, and the unforgettable
            moments we&apos;ve shared over the past eight incredible years.
          </p>
        </div>

        {/* Feature badges */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-4">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.15 }}
                whileHover={{ y: -4 }}
                onClick={() => sounds.playPop()}
                className={`p-5 rounded-2xl border transition-all cursor-pointer ${item.color}`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-xl bg-white shadow-xs">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-sm sm:text-base text-slate-800">{item.title}</h3>
                </div>
                <p className="text-xs text-slate-600 leading-normal">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Quote banner */}
        <div className="mt-8 p-4 bg-gradient-to-r from-pink-50 via-rose-50 to-pink-50 rounded-2xl border border-pink-200/70 text-center flex items-center justify-center gap-3">
          <Heart className="w-4 h-4 text-pink-500 fill-pink-500 flex-shrink-0 animate-pulse" />
          <p className="text-xs sm:text-sm font-medium text-pink-800 font-handwriting text-xl sm:text-2xl">
            &ldquo;True friends are like stars; you don&apos;t always see them, but you know they&apos;re always there.&rdquo;
          </p>
          <FlowerIcon className="w-4 h-4 text-amber-500 flex-shrink-0" />
        </div>
      </motion.div>
    </section>
  );
};

interface IntroSectionProps {}
