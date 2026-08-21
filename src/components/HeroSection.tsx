import React from 'react';
import { motion } from 'motion/react';
import { Heart, ChevronDown, BookOpen, Star } from 'lucide-react';
import { sounds } from '../utils/audio';
import FlowerIcon from './FlowerIcon';

interface HeroSectionProps {
  onOpenStory: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenStory }) => {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex flex-col items-center justify-center pt-24 pb-16 px-4 overflow-hidden"
    >
      {/* Decorative background blurs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-200/50 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-amber-100/60 rounded-full blur-2xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-rose-200/40 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Chapter Marker */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-pink-200 shadow-xs text-xs font-bold text-pink-600 tracking-wider uppercase"
      >
        <FlowerIcon className="w-3.5 h-3.5 text-pink-500" />
        <span>HOMEPAGE</span>
      </motion.div>

      {/* Main Flow Card matching the diagram */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="w-full max-w-xl bg-white/90 backdrop-blur-md rounded-3xl border-2 border-pink-200/90 shadow-xl shadow-pink-100/60 p-5 sm:p-12 text-center relative"
      >
        {/* Cute Ribbon tag */}
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-pink-500 to-rose-500 text-white text-xs font-bold px-3.5 py-1 rounded-full shadow-md flex items-center gap-1.5 whitespace-nowrap">
          <Star className="w-3 h-3 fill-amber-300 text-amber-300" />
          <span>A Special Tribute</span>
          <Star className="w-3 h-3 fill-amber-300 text-amber-300" />
        </div>

        {/* Tribute Picture */}
        <div className="my-2 flex justify-center">
          <img
            src="/picture.jpg"
            alt="Special Tribute"
            className="w-40 h-40 sm:w-52 sm:h-52 rounded-[28px] object-cover border-4 border-white shadow-xl ring-2 ring-pink-200"
          />
        </div>

        {/* Title */}
        <div className="space-y-3 mt-4">
          <h1
            id="hero-keerthi-title"
            className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 font-display flex items-center justify-center gap-2 flex-wrap"
          >
            <FlowerIcon className="w-6 h-6 sm:w-7 sm:h-7 text-pink-500 shrink-0" />
            <span className="bg-gradient-to-r from-pink-600 via-rose-500 to-amber-600 bg-clip-text text-transparent">
              Keerthi
            </span>
            <Heart className="w-6 h-6 sm:w-7 sm:h-7 text-rose-500 fill-rose-500 animate-heart-beat shrink-0" />
          </h1>

          <p className="text-base sm:text-xl text-slate-600 font-medium font-handwriting text-2xl sm:text-3xl tracking-wide flex items-center justify-center gap-1.5">
            <span>A little corner made just for you</span>
            <FlowerIcon className="w-4 h-4 text-amber-500 shrink-0" />
          </p>

          <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto leading-relaxed pt-1">
            Celebrating our beautiful 8-year journey filled with laughter, endless conversations, inside jokes, and cherished moments.
          </p>
        </div>

        {/* Action Button from diagram: [Open My Story] */}
        <div className="mt-7 pt-1">
          <motion.button
            id="open-my-story-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              sounds.playSparkle();
              onOpenStory();
            }}
            className="group inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 hover:from-pink-600 hover:to-rose-600 text-white rounded-2xl font-bold text-sm sm:text-base shadow-lg shadow-pink-500/25 hover:shadow-pink-500/40 transition-all border border-pink-300"
          >
            <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:rotate-12" />
            <span>Open My Story</span>
            <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-white animate-pulse" />
            <FlowerIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-200 animate-spin" style={{ animationDuration: '4s' }} />
          </motion.button>
        </div>

        {/* Sweet quote chip */}
        <div className="mt-6 flex items-center justify-center gap-2 text-xs text-pink-500 font-semibold bg-pink-50/80 py-2 px-4 rounded-xl border border-pink-100">
          <FlowerIcon className="w-3.5 h-3.5 text-pink-400" />
          <span>Click anywhere or scroll down to explore memories</span>
          <FlowerIcon className="w-3.5 h-3.5 text-pink-400" />
        </div>
      </motion.div>

      {/* Down arrow indicator */}
      <motion.a
        href="#intro"
        onClick={() => sounds.playPop()}
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="mt-10 flex flex-col items-center gap-1 text-slate-400 hover:text-pink-600 transition-colors"
      >
        <span className="text-xs font-semibold uppercase tracking-widest text-slate-500">Scroll down</span>
        <ChevronDown className="w-5 h-5 text-pink-400" />
      </motion.a>
    </section>
  );
};
