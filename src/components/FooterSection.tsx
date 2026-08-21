import React, { useState } from 'react';
import { Heart, ArrowUp } from 'lucide-react';
import { sounds } from '../utils/audio';
import FlowerIcon from './FlowerIcon';

interface FooterSectionProps {
  onTriggerHearts: () => void;
}

export const FooterSection: React.FC<FooterSectionProps> = ({ onTriggerHearts }) => {
  const [totalLoveCount, setTotalLoveCount] = useState(88);

  const handleSendLove = () => {
    sounds.playHeartBeat();
    onTriggerHearts();
    setTotalLoveCount((prev) => prev + 1);
  };

  const scrollToTop = () => {
    sounds.playPop();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer" className="mt-16 pb-16 px-4 relative">
      <div className="max-w-4xl mx-auto">
        {/* Main Footer Card */}
        <div className="bg-white/95 backdrop-blur-md rounded-3xl border-2 border-pink-200 shadow-lg p-8 sm:p-12 text-center relative overflow-hidden">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-800 font-display mb-2 flex items-center justify-center gap-2">
            <span>Made with friendship &amp; memories</span>
            <Heart className="w-6 h-6 text-rose-500 fill-rose-500 animate-pulse shrink-0" />
          </h3>

          <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto mb-8 font-handwriting text-2xl">
            Dedicated with endless gratitude to Keerthi for 8 wonderful years.
          </p>

          {/* Interactive Love Button */}
          <div className="flex justify-center items-center mb-8">
            <button
              onClick={handleSendLove}
              className="whitespace-nowrap inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white rounded-2xl font-bold text-sm sm:text-base shadow-md shadow-pink-300 active:scale-95 transition-all"
            >
              <Heart className="w-4 h-4 sm:w-5 sm:h-5 fill-white animate-pulse shrink-0" />
              <span className="whitespace-nowrap">Tap to Send Love ({totalLoveCount})</span>
            </button>
          </div>

          {/* Bottom Bar with 'Srie' */}
          <div className="pt-6 border-t border-pink-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <div className="flex items-center gap-2">
              <FlowerIcon className="w-4 h-4 text-pink-500" />
              <span className="font-bold text-slate-700">KEERTHI</span>
              <span className="text-slate-400 font-semibold">• Srie</span>
            </div>

            <div className="flex items-center gap-4">
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-pink-100/70 text-pink-800 font-extrabold rounded-full tracking-widest text-[11px]">
                <span>END</span>
                <FlowerIcon className="w-3 h-3 text-pink-600" />
              </span>

              <button
                onClick={scrollToTop}
                className="flex items-center gap-1 text-slate-600 hover:text-pink-600 font-semibold transition-colors"
              >
                <span>Back to top</span>
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

