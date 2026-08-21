import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, MessageCircle, Volume2 } from 'lucide-react';
import { TeddyMascot } from './TeddyMascot';
import { sounds } from '../utils/audio';
import FlowerIcon from './FlowerIcon';

export const TeddyWavingSection: React.FC = () => {
  const [activeQuoteIndex, setActiveQuoteIndex] = useState(0);

  const teddyQuotes = [
    '“Always waving with love! Keep being your wonderful self, Keerthi!”',
    '“Remember: you are appreciated more than words can express!”',
    '“Sending you endless smiles and warmth across the screen!”',
    '“Whenever you need a smile, this little corner is always here for you!”',
    '“8 years down, a whole lifetime of friendship to go!”',
  ];

  const handleTeddyClick = () => {
    sounds.playSparkle();
    setActiveQuoteIndex((prev) => (prev + 1) % teddyQuotes.length);
  };

  return (
    <section id="teddy-waving" className="py-16 px-4 relative max-w-2xl mx-auto text-center">
      {/* Chapter Marker */}
      <div className="flex justify-center mb-6">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-amber-200 shadow-xs text-xs font-bold text-amber-700 tracking-wider uppercase">
          <Heart className="w-3.5 h-3.5 text-pink-500 fill-pink-500" />
          <span>TEDDY WAVING</span>
        </span>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-white/90 backdrop-blur-md rounded-3xl border-2 border-pink-200 shadow-lg p-8 sm:p-10 relative flex flex-col items-center"
      >
        {/* Animated Speech Bubble */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeQuoteIndex}
            initial={{ opacity: 0, scale: 0.9, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -10 }}
            transition={{ duration: 0.3 }}
            className="mb-6 p-4 sm:p-5 bg-gradient-to-r from-pink-50 via-rose-50 to-amber-50 rounded-2xl border-2 border-pink-200 shadow-xs relative max-w-md w-full"
          >
            {/* Speech bubble pointer */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-rose-50 border-b-2 border-r-2 border-pink-200 transform rotate-45" />

            <p className="text-base sm:text-lg font-handwriting text-2xl sm:text-3xl text-pink-700 font-bold">
              {teddyQuotes[activeQuoteIndex]}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Waving Mascot */}
        <div className="my-2">
          <TeddyMascot
            mood="waving"
            size="xl"
            onClick={handleTeddyClick}
          />
        </div>

        <p className="text-xs text-slate-500 font-semibold mt-3 flex items-center gap-1.5">
          <FlowerIcon className="w-3.5 h-3.5 text-amber-500" />
          <span>Tap Teddy to hear another sweet thought!</span>
          <FlowerIcon className="w-3.5 h-3.5 text-amber-500" />
        </p>
      </motion.div>
    </section>
  );
};
