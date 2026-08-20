import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Camera, Heart, MessageSquare, Laugh, Sun, Shield, Award, X } from 'lucide-react';
import { sounds } from '../utils/audio';
import FlowerIcon from './FlowerIcon';

interface MemoryCardData {
  id: string;
  category: string;
  title: string;
  tagline: string;
  icon: React.ComponentType<{ className?: string }>;
  colorScheme: {
    bg: string;
    border: string;
    badgeBg: string;
    badgeText: string;
    accent: string;
    gradient: string;
  };
  details: string[];
  quote: string;
  specialNote: string;
}

export const MemoriesSection: React.FC = () => {
  const [activeMemory, setActiveMemory] = useState<MemoryCardData | null>(null);
  const [likedCards, setLikedCards] = useState<Record<string, number>>({
    teddy: 12,
    fun: 24,
    laughs: 38,
    conversations: 19,
    special: 28,
    unforgettable: 42,
  });

  const handleLike = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    sounds.playHeartBeat();
    setLikedCards((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  const memories: MemoryCardData[] = [
    {
      id: 'teddy',
      category: 'Care & Comfort',
      title: 'Comfort & Warmth',
      tagline: 'A warm, safe space where comfort is always guaranteed.',
      icon: Shield,
      colorScheme: {
        bg: 'bg-amber-50/70',
        border: 'border-amber-200',
        badgeBg: 'bg-amber-100',
        badgeText: 'text-amber-800',
        accent: 'text-amber-700',
        gradient: 'from-amber-400 to-orange-400',
      },
      details: [
        'Pure warmth and comfort that instantly melt away tiredness and stress.',
        'Never needing to pretend or put up filters — pure comfort.',
        'Soft vibes, heartwarming presence, and unconditional care.',
      ],
      quote: 'Soft and gentle, strong like an unshakeable bond.',
      specialNote: 'Whenever the world gets overwhelming, our friendship remains the coziest sanctuary.',
    },
    {
      id: 'fun',
      category: 'Fun Moments',
      title: 'Adventures & Spontaneous Fun',
      tagline: 'Every outing turns into a delightful celebration.',
      icon: Sun,
      colorScheme: {
        bg: 'bg-pink-50/70',
        border: 'border-pink-200',
        badgeBg: 'bg-pink-100',
        badgeText: 'text-pink-800',
        accent: 'text-pink-700',
        gradient: 'from-pink-400 to-rose-400',
      },
      details: [
        'Spontaneous food cravings, random café visits, and sweet treat dates.',
        'Taking silly pictures, funny poses, and candid snapshots.',
        'Turning the most boring mundane day into an unforgettable adventure.',
      ],
      quote: 'Life is better when you have a friend who matches your frequency.',
      specialNote: 'No matter what we do, simply being together is always the best part of the day.',
    },
    {
      id: 'laughs',
      category: 'Crazy Laughs',
      title: 'Uncontrollable Laughter & Giggles',
      tagline: 'Laughing so hard that our stomachs hurt and tears flow.',
      icon: Laugh,
      colorScheme: {
        bg: 'bg-yellow-50/70',
        border: 'border-yellow-200',
        badgeBg: 'bg-yellow-100',
        badgeText: 'text-yellow-800',
        accent: 'text-yellow-700',
        gradient: 'from-yellow-400 to-amber-500',
      },
      details: [
        'Inside jokes that make zero sense to anyone else in the room.',
        'Making eye contact and bursting into giggles during serious moments.',
        'Silly memes, voice notes with chaotic laughter, and comedy gold moments.',
      ],
      quote: 'Laughter is the shortest distance between two souls.',
      specialNote: 'Thank you for giving me reasons to smile and laugh without any hesitation.',
    },
    {
      id: 'conversations',
      category: 'Conversations',
      title: 'Heart-to-Hearts & Midnight Talks',
      tagline: 'From trivial daily gossip to deep philosophical reflections.',
      icon: MessageSquare,
      colorScheme: {
        bg: 'bg-sky-50/70',
        border: 'border-sky-200',
        badgeBg: 'bg-sky-100',
        badgeText: 'text-sky-800',
        accent: 'text-sky-700',
        gradient: 'from-sky-400 to-indigo-400',
      },
      details: [
        'Hours passing by like minutes whenever we start talking.',
        'Sharing secret thoughts, dreams, vulnerabilities, and real feelings.',
        'Being each other’s personal sounding board and trusted confidante.',
      ],
      quote: 'Words are never wasted when spoken with someone who truly listens.',
      specialNote: 'Your listening ear and gentle advice have guided me through so many chapters.',
    },
    {
      id: 'special',
      category: 'Special Moments',
      title: 'Milestones & Shared Wins',
      tagline: 'Celebrating every birthday, achievement, and milestone together.',
      icon: FlowerIcon,
      colorScheme: {
        bg: 'bg-purple-50/70',
        border: 'border-purple-200',
        badgeBg: 'bg-purple-100',
        badgeText: 'text-purple-800',
        accent: 'text-purple-700',
        gradient: 'from-purple-400 to-pink-500',
      },
      details: [
        'Hyping each other up before big days and celebrating victories loudly.',
        'Surprise birthday messages, thoughtful gifts, and warm wishes.',
        'Watching each other evolve and bloom into wiser, happier people.',
      ],
      quote: 'A true friend doubles your joys and divides your sorrows.',
      specialNote: 'Every celebration is 100x sweeter when you are there to share it with me.',
    },
    {
      id: 'unforgettable',
      category: 'Unforgettable',
      title: 'Etched In My Heart Forever',
      tagline: 'The 8-year legacy that will forever stay precious and bright.',
      icon: Award,
      colorScheme: {
        bg: 'bg-rose-50/70',
        border: 'border-rose-200',
        badgeBg: 'bg-rose-100',
        badgeText: 'text-rose-800',
        accent: 'text-rose-700',
        gradient: 'from-rose-500 to-red-400',
      },
      details: [
        '8 continuous years of consistency, loyalty, and deep warmth.',
        'Memories that bring a gentle smile no matter where life takes us.',
        'A rare bond that time, distance, and routine can never diminish.',
      ],
      quote: 'Some memories are time-stamped, but ours are timeless.',
      specialNote: 'Keerthi, you are an irreplaceable gift in my life and I will always cherish you.',
    },
  ];

  return (
    <section id="memories" className="py-20 px-4 relative max-w-6xl mx-auto">
      {/* Chapter Marker */}
      <div className="flex justify-center mb-6">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-pink-200 shadow-xs text-xs font-bold text-pink-600 tracking-wider uppercase">
          <Camera className="w-3.5 h-3.5 text-pink-500" />
          <span>MEMORIES</span>
        </span>
      </div>

      {/* Header */}
      <div className="text-center space-y-3 mb-12">
        <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-800 font-display flex items-center justify-center gap-3">
          <span>Our Cherished Memory Album</span>
          <Camera className="w-7 h-7 sm:w-9 sm:h-9 text-pink-500 shrink-0" />
        </h2>
        <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
          Six distinct flavors of our eight-year adventure. Click any card to reveal special notes!
        </p>
      </div>

      {/* 6 Category Memory Grid matching the diagram items */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {memories.map((mem, index) => {
          const Icon = mem.icon;
          return (
            <motion.div
              key={mem.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              onClick={() => {
                sounds.playSparkle();
                setActiveMemory(mem);
              }}
              className={`p-6 rounded-3xl border-2 transition-all cursor-pointer relative overflow-hidden bg-white/95 shadow-md hover:shadow-xl ${mem.colorScheme.border}`}
            >
              {/* Category Header Badge */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-xl bg-pink-50 border border-pink-100 text-pink-600">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold ${mem.colorScheme.badgeBg} ${mem.colorScheme.badgeText}`}
                  >
                    {mem.category}
                  </span>
                </div>

                {/* Heart clicker */}
                <button
                  onClick={(e) => handleLike(mem.id, e)}
                  className="flex items-center gap-1 text-xs font-bold text-rose-500 bg-rose-50 hover:bg-rose-100 px-2.5 py-1 rounded-full border border-rose-200 transition-colors"
                  title="Send Love"
                >
                  <Heart className="w-3.5 h-3.5 fill-rose-500" />
                  <span>{likedCards[mem.id] || 0}</span>
                </button>
              </div>

              {/* Title & Tagline */}
              <h3 className="text-lg font-bold text-slate-800 font-display mb-1.5 flex items-center gap-1.5">
                {mem.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed line-clamp-2">
                {mem.tagline}
              </p>

              {/* Polaroid-styled snippet */}
              <div className="p-3 bg-slate-50/80 rounded-2xl border border-slate-100 mb-4">
                <p className="text-xs font-handwriting text-lg text-slate-700 italic">
                  &ldquo;{mem.quote}&rdquo;
                </p>
              </div>

              {/* Click to expand prompt */}
              <div className="flex items-center justify-between text-xs text-pink-600 font-semibold pt-2 border-t border-slate-100">
                <span className="flex items-center gap-1">
                  <FlowerIcon className="w-3.5 h-3.5" /> Tap to read note
                </span>
                <span className="text-slate-400">→</span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Memory Detail Modal / Pop-up */}
      <AnimatePresence>
        {activeMemory && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white rounded-3xl border-2 border-pink-200 shadow-2xl max-w-lg w-full p-5 sm:p-8 relative overflow-y-auto max-h-[88vh]"
            >
              {/* Close button */}
              <button
                onClick={() => {
                  sounds.playPop();
                  setActiveMemory(null);
                }}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-2xl bg-pink-100 text-pink-600">
                  <activeMemory.icon className="w-6 h-6" />
                </div>
                <div>
                  <span
                    className={`px-3 py-0.5 rounded-full text-xs font-bold ${activeMemory.colorScheme.badgeBg} ${activeMemory.colorScheme.badgeText}`}
                  >
                    {activeMemory.category}
                  </span>
                  <h3 className="text-xl font-extrabold text-slate-800 font-display mt-1">
                    {activeMemory.title}
                  </h3>
                </div>
              </div>

              <div className="space-y-4 my-6">
                <div className="p-4 bg-pink-50/60 rounded-2xl border border-pink-100">
                  <p className="text-sm font-semibold text-slate-700 mb-2">Memory Highlights:</p>
                  <ul className="space-y-2">
                    {activeMemory.details.map((point, idx) => (
                      <li key={idx} className="text-xs sm:text-sm text-slate-600 flex items-start gap-2">
                        <span className="text-pink-500 font-bold">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 bg-amber-50/70 rounded-2xl border border-amber-100">
                  <p className="text-xs font-bold text-amber-800 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <Heart className="w-3.5 h-3.5 text-amber-600 fill-amber-600" />
                    <span>Special Note for Keerthi:</span>
                  </p>
                  <p className="text-sm font-handwriting text-2xl text-amber-900 leading-snug">
                    {activeMemory.specialNote}
                  </p>
                </div>
              </div>

              <div className="flex justify-end gap-3">
                <button
                  onClick={(e) => handleLike(activeMemory.id, e)}
                  className="px-4 py-2 bg-pink-500 hover:bg-pink-600 text-white rounded-xl text-xs font-bold flex items-center gap-2 shadow-md shadow-pink-200"
                >
                  <Heart className="w-4 h-4 fill-white" />
                  <span>Send Love ({likedCards[activeMemory.id] || 0})</span>
                </button>
                <button
                  onClick={() => {
                    sounds.playPop();
                    setActiveMemory(null);
                  }}
                  className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-semibold"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
