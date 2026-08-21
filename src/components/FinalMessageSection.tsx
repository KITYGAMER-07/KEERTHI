import React from 'react';
import { motion } from 'motion/react';
import { Heart, Award, Star } from 'lucide-react';
import { sounds } from '../utils/audio';
import FlowerIcon from './FlowerIcon';

export const FinalMessageSection: React.FC = () => {
  return (
    <section id="final" className="py-20 px-4 relative max-w-4xl mx-auto">
      {/* Chapter Marker */}
      <div className="flex justify-center mb-6">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-pink-200 shadow-xs text-xs font-bold text-pink-600 tracking-wider uppercase">
          <Award className="w-3.5 h-3.5 text-pink-500" />
          <span>FINAL MESSAGE</span>
        </span>
      </div>

      {/* Main Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-white/95 backdrop-blur-md rounded-3xl border-2 border-pink-200 shadow-2xl p-8 sm:p-14 text-center relative overflow-hidden"
      >
        {/* Certificate / Keepsake Ribbon */}
        <div className="inline-flex items-center justify-center p-4 bg-gradient-to-tr from-pink-500 to-rose-500 text-white rounded-3xl shadow-lg mb-6">
          <Award className="w-10 h-10" />
        </div>

        {/* Title */}
        <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-800 font-display mb-4 flex items-center justify-center gap-3">
          <span>Thank You, Keerthi</span>
          <Heart className="w-8 h-8 sm:w-10 sm:h-10 text-pink-500 fill-pink-500 inline-block animate-heart-beat" />
        </h2>

        {/* Subtitle */}
        <div className="my-6 p-6 bg-gradient-to-r from-pink-50 via-rose-50 to-amber-50 rounded-2xl border border-pink-200 flex items-center justify-center gap-2">
          <FlowerIcon className="w-6 h-6 text-pink-500" />
          <p className="text-2xl sm:text-4xl font-extrabold font-handwriting text-pink-600 tracking-wide">
            8 beautiful years of friendship
          </p>
          <FlowerIcon className="w-6 h-6 text-pink-500" />
        </div>

        <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed mb-8">
          Thank you for every shared laugh, every comforting conversation, every silly adventure,
          and every single day you made brighter. Having you as a friend for the past 8 years has been
          a blessing that words alone could never fully capture.
        </p>

        {/* Friendship Badge / Seal of Honor */}
        <div className="inline-grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-lg mx-auto w-full pt-2">
          <div className="p-3 bg-pink-50 rounded-2xl border border-pink-200 flex flex-col items-center">
            <Star className="w-5 h-5 fill-amber-400 text-amber-400 mb-1" />
            <span className="text-xs font-bold text-slate-700">Best Companion</span>
            <span className="text-[11px] text-pink-600 font-semibold">8 Years & Counting</span>
          </div>

          <div className="p-3 bg-rose-50 rounded-2xl border border-rose-200 flex flex-col items-center">
            <Heart className="w-5 h-5 fill-rose-500 text-rose-500 mb-1" />
            <span className="text-xs font-bold text-slate-700">Pure Loyalty</span>
            <span className="text-[11px] text-rose-600 font-semibold">Unconditional Bond</span>
          </div>

          <div className="p-3 bg-amber-50 rounded-2xl border border-amber-200 flex flex-col items-center">
            <FlowerIcon className="w-5 h-5 text-amber-500 mb-1" />
            <span className="text-xs font-bold text-slate-700">Forever Smile</span>
            <span className="text-[11px] text-amber-600 font-semibold">Infinite Warmth</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
