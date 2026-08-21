import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import { Heart, Gift, PartyPopper, RefreshCw, Star } from 'lucide-react';
import { TeddyMascot } from './TeddyMascot';
import { sounds } from '../utils/audio';
import FlowerIcon from './FlowerIcon';

interface SurpriseSectionProps {
  onTriggerHearts: () => void;
}

export const SurpriseSection: React.FC<SurpriseSectionProps> = ({ onTriggerHearts }) => {
  const [hasClicked, setHasClicked] = useState(false);
  const [surpriseCount, setSurpriseCount] = useState(0);
  const [activeWishIndex, setActiveWishIndex] = useState(0);

  const sweetWishes = [
    '“Keep smiling, Keerthi!”',
    '“You deserve all the happiness in the entire universe!”',
    '“Thank you for being the most wonderful friend for 8 years!”',
    '“May every single dream you carry come true!”',
    '“Here is endless happiness and love just for you!”',
  ];

  const triggerConfettiExplosion = () => {
    // 1. Confetti burst left & right
    const count = 200;
    const defaults = {
      origin: { y: 0.7 },
      colors: ['#ff69b4', '#ff1493', '#ffd700', '#ffb6c1', '#a78bfa', '#fb7185'],
    };

    function fire(particleRatio: number, opts: confetti.Options) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio),
      });
    }

    fire(0.25, {
      spread: 26,
      startVelocity: 55,
    });
    fire(0.2, {
      spread: 60,
    });
    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  };

  const handleSurpriseClick = () => {
    sounds.playFanfare();
    triggerConfettiExplosion();
    onTriggerHearts();
    setHasClicked(true);
    setSurpriseCount((prev) => prev + 1);
    setActiveWishIndex((prev) => (prev + 1) % sweetWishes.length);
  };

  return (
    <section id="surprise" className="py-20 px-4 relative max-w-4xl mx-auto">
      {/* Chapter Marker */}
      <div className="flex justify-center mb-6">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-pink-200 shadow-xs text-xs font-bold text-pink-600 tracking-wider uppercase">
          <Gift className="w-3.5 h-3.5 text-pink-500" />
          <span>SURPRISE</span>
        </span>
      </div>

      {/* Main Surprise Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-b from-white via-pink-50/50 to-rose-50/60 backdrop-blur-md rounded-3xl border-2 border-pink-300 shadow-2xl p-6 sm:p-12 text-center relative overflow-hidden"
      >
        {/* Glow ambient background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-200/40 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="space-y-4 mb-8">
          <div className="inline-flex items-center justify-center p-3.5 bg-gradient-to-tr from-pink-400 to-rose-500 text-white rounded-2xl shadow-md">
            <Gift className="w-8 h-8 animate-bounce" />
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-800 font-display flex items-center justify-center gap-2">
            <span>A Sweet Surprise for You</span>
            <FlowerIcon className="w-6 h-6 text-amber-500" />
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
            Ready for a burst of joy? Press the special celebration button below!
          </p>
        </div>

        {/* The Diagram Button */}
        <div className="my-6">
          <motion.button
            id="surprise-click-me-btn"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.94 }}
            onClick={handleSurpriseClick}
            className="group inline-flex items-center justify-center gap-2 sm:gap-3 px-5 sm:px-12 py-4 sm:py-5 bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 hover:from-pink-600 hover:to-rose-600 text-white rounded-3xl font-extrabold text-base sm:text-xl shadow-xl shadow-pink-400/40 hover:shadow-pink-500/60 border-2 border-pink-200 transition-all cursor-pointer"
          >
            <FlowerIcon className="w-5 h-5 sm:w-6 sm:h-6 text-amber-200 animate-spin" style={{ animationDuration: '3s' }} />
            <span>Click Me for Surprise</span>
            <PartyPopper className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:rotate-12" />
          </motion.button>
        </div>

        {/* Active Celebration Reveal */}
        <AnimatePresence>
          {hasClicked && (
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="mt-10 p-6 sm:p-8 bg-white/95 rounded-3xl border-2 border-pink-200 shadow-xl space-y-6"
            >
              {/* Confetti & Floating Hearts Indicator Badges */}
              <div className="flex flex-wrap items-center justify-center gap-3">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-pink-100 text-pink-700 text-xs font-bold border border-pink-200">
                  <Heart className="w-3.5 h-3.5 fill-pink-500" />
                  <span>Floating Hearts</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-100 text-amber-700 text-xs font-bold border border-amber-200">
                  <PartyPopper className="w-3.5 h-3.5 text-amber-600" />
                  <span>Confetti Blast</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-purple-100 text-purple-700 text-xs font-bold border border-purple-200">
                  <Star className="w-3.5 h-3.5 fill-purple-400 text-purple-500" />
                  <span>Celebration Mode</span>
                </span>
              </div>

              {/* Teddy Animation Mascot */}
              <div className="flex flex-col items-center justify-center gap-2">
                <TeddyMascot
                  mood="jumping"
                  size="xl"
                  onClick={() => {
                    sounds.playSparkle();
                    triggerConfettiExplosion();
                  }}
                />
                <span className="text-xs text-pink-500 font-semibold">
                  (Tap Teddy for more sparkles!)
                </span>
              </div>

              {/* Quote from diagram: "Keep smiling, Keerthi! 💗" */}
              <div className="p-6 bg-gradient-to-r from-pink-50 via-rose-50 to-pink-50 rounded-2xl border-2 border-pink-200 shadow-inner">
                <h3 className="text-2xl sm:text-4xl font-extrabold font-handwriting text-pink-600 tracking-wide">
                  {sweetWishes[activeWishIndex]}
                </h3>
              </div>

              {/* Re-trigger action */}
              <div className="flex justify-center items-center gap-2 pt-2">
                <button
                  onClick={handleSurpriseClick}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-pink-100 hover:bg-pink-200 text-pink-700 rounded-xl text-xs font-bold transition-all"
                >
                  <RefreshCw className="w-4 h-4" />
                  <span>Click Again for Next Wish ({surpriseCount} bursts)</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};
