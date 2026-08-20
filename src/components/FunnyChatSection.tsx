import React, { useState } from 'react';
import { MessageSquare, Eye, EyeOff, Laugh, Zap, Heart, Maximize2, X, RefreshCw, Upload } from 'lucide-react';
import { sounds } from '../utils/audio';
import FlowerIcon from './FlowerIcon';

interface FunnyChatSectionProps {
  onTriggerHearts?: () => void;
}

export const FunnyChatSection: React.FC<FunnyChatSectionProps> = ({ onTriggerHearts }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imgSrc, setImgSrc] = useState<string>('/image.jpg');
  const [imgError, setImgError] = useState(false);
  const [reactionCount, setReactionCount] = useState(24);
  const [hasReacted, setHasReacted] = useState(false);

  const toggleReveal = () => {
    sounds.playSparkle();
    if (!isOpen && onTriggerHearts) {
      onTriggerHearts();
    }
    setIsOpen(!isOpen);
  };

  const handleReaction = () => {
    sounds.playPop();
    if (!hasReacted) {
      setReactionCount((prev) => prev + 1);
      setHasReacted(true);
      if (onTriggerHearts) onTriggerHearts();
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImgSrc(url);
      setImgError(false);
      sounds.playSparkle();
    }
  };

  return (
    <section id="funny-chat" className="py-12 px-4 scroll-mt-24">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-xs font-extrabold text-amber-800 uppercase tracking-widest mb-3 shadow-xs">
            <Laugh className="w-3.5 h-3.5 text-amber-500" />
            <span>FUNNY CHAT ARCHIVE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-display mb-3">
            Real &amp; Unfiltered Banter 😂💬
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            The peak of an 8-year friendship is zero-filter WhatsApp roasts and legendary excuses. Tap below to see!
          </p>
        </div>

        {/* Interactive Reveal Card */}
        <div className="bg-white/95 backdrop-blur-md rounded-3xl border-2 border-amber-200/80 shadow-xl overflow-hidden transition-all duration-300">
          {/* Top Banner */}
          <div className="bg-gradient-to-r from-amber-400 via-rose-400 to-pink-500 p-4 sm:p-6 text-white text-center relative">
            <div className="absolute top-3 left-4 opacity-80">
              <MessageSquare className="w-5 h-5 text-white" />
            </div>
            <div className="absolute bottom-3 right-4 opacity-80">
              <Laugh className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black font-display tracking-wide mb-1 drop-shadow-xs flex items-center justify-center gap-2">
              <span>Keerthi’s Top-Tier Dialogue</span>
              <FlowerIcon className="w-5 h-5 text-amber-200" />
            </h3>
            <p className="text-xs sm:text-sm text-pink-50 font-medium max-w-md mx-auto">
              “BP 50 la iruku, teaching practice vera... Loosu kamunatti Mari pesuren”
            </p>
          </div>

          <div className="p-6 sm:p-8 text-center">
            {/* The Main "Click Here" CTA Button requested by user */}
            <div className="mb-6">
              <button
                id="reveal-funny-chat-btn"
                onClick={toggleReveal}
                className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-500 via-rose-500 to-pink-500 hover:from-amber-600 hover:via-rose-600 hover:to-pink-600 active:scale-95 text-white font-extrabold text-base sm:text-lg shadow-lg shadow-pink-200 transition-all border-2 border-white/40 cursor-pointer"
              >
                {isOpen ? (
                  <>
                    <EyeOff className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                    <span>Hide Screenshot</span>
                  </>
                ) : (
                  <>
                    <FlowerIcon className="w-5 h-5 animate-spin" />
                    <span>Funny Chat • Click Here to View!</span>
                    <Eye className="w-5 h-5 group-hover:scale-125 transition-transform" />
                  </>
                )}
              </button>
            </div>

            {/* When Clicked / Revealed */}
            {isOpen && (
              <div className="animate-in fade-in zoom-in-95 duration-300 pt-4 border-t border-amber-100">
                <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-xs font-bold border border-amber-200 flex items-center gap-1.5">
                    <FlowerIcon className="w-3 h-3 text-amber-600" />
                    <span>BP 50 Excuse</span>
                  </span>
                  <span className="px-3 py-1 bg-rose-100 text-rose-800 rounded-full text-xs font-bold border border-rose-200 flex items-center gap-1.5">
                    <FlowerIcon className="w-3 h-3 text-rose-600" />
                    <span>Teaching Practice</span>
                  </span>
                  <span className="px-3 py-1 bg-pink-100 text-pink-800 rounded-full text-xs font-bold border border-pink-200 flex items-center gap-1.5">
                    <Laugh className="w-3 h-3 text-pink-600" />
                    <span>Zero Filter WhatsApp</span>
                  </span>
                </div>

                {/* Screenshot Container */}
                <div className="relative max-w-md mx-auto bg-[#0b141a] rounded-3xl p-3 sm:p-4 shadow-2xl border-4 border-slate-800 overflow-hidden text-left">
                  {/* Phone Header Bar simulation */}
                  <div className="flex items-center justify-between px-3 py-2 bg-[#1f2c34] rounded-xl text-slate-200 mb-3 border-b border-slate-700">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-amber-500/20 border border-amber-400 flex items-center justify-center text-xs font-bold text-amber-300">
                        <MessageSquare className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-white leading-tight">Keerthi</p>
                        <p className="text-[10px] text-emerald-400 leading-tight">Online</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setIsModalOpen(true)}
                        className="p-1 text-slate-300 hover:text-white bg-slate-700/50 rounded-md transition-colors"
                        title="Expand Fullscreen"
                      >
                        <Maximize2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Screenshot Image tag pointing strictly to image.jpg */}
                  <div className="relative rounded-2xl overflow-hidden bg-[#0c1317] border border-slate-700/60 flex items-center justify-center min-h-[220px]">
                    {!imgError ? (
                      <img
                        id="funny-chat-screenshot-img"
                        src={imgSrc}
                        alt="Funny Chat with Keerthi"
                        onError={() => setImgError(true)}
                        onClick={() => setIsModalOpen(true)}
                        className="w-full h-auto object-contain cursor-pointer hover:scale-[1.02] transition-transform"
                      />
                    ) : (
                      /* Faithful replica fallback if image.jpg is in a custom path or still uploading */
                      <div
                        onClick={() => setIsModalOpen(true)}
                        className="w-full p-4 bg-[#0b141a] cursor-pointer flex flex-col gap-3 font-sans"
                        style={{
                          backgroundImage: `radial-gradient(#1f2c34 1px, transparent 1px)`,
                          backgroundSize: '16px 16px',
                        }}
                      >
                        <div className="bg-[#202c33] text-[#e9edef] p-3 rounded-2xl rounded-tl-xs max-w-[90%] self-start shadow-md text-xs sm:text-sm leading-relaxed border border-slate-700">
                          <p>
                            Gomma ni tha da pana la enaku odambu mudiyala enaku teaching practice vera eruthuchie athu ilama ethu hospital pona bp 50 la eruku ethula na vathu epidi mes pana mudium
                          </p>
                          <span className="text-[10px] text-slate-400 float-right mt-1 ml-2">9:15 pm</span>
                        </div>

                        <div className="bg-[#202c33] text-[#e9edef] p-3 rounded-2xl rounded-tl-xs max-w-[85%] self-start shadow-md text-xs sm:text-sm leading-relaxed border border-slate-700">
                          <p>Loosu kamunatti Mari pesuren 💦</p>
                          <span className="text-[10px] text-slate-400 float-right mt-1 ml-2">9:15 pm</span>
                        </div>
                      </div>
                    )}

                    {/* Expand icon overlay */}
                    <button
                      onClick={() => setIsModalOpen(true)}
                      className="absolute bottom-2 right-2 bg-black/70 hover:bg-black/90 text-white text-[11px] font-bold px-2.5 py-1 rounded-lg backdrop-blur-xs flex items-center gap-1 border border-white/20 transition-all cursor-pointer"
                    >
                      <Maximize2 className="w-3 h-3" />
                      <span>Zoom</span>
                    </button>
                  </div>

                  {/* Caption & Actions */}
                  <div className="mt-3 pt-2 border-t border-slate-700 flex items-center justify-between text-slate-300 text-xs">
                    <span className="text-[11px] text-slate-400">Screenshot: image.jpg</span>
                    <button
                      onClick={handleReaction}
                      className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold transition-all ${
                        hasReacted
                          ? 'bg-rose-500 text-white'
                          : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                      }`}
                    >
                      <Laugh className={`w-3.5 h-3.5 ${hasReacted ? 'text-white' : 'text-amber-400'}`} />
                      <span>{reactionCount}</span>
                    </button>
                  </div>
                </div>

                {/* Local Manual Upload Option to test or replace screenshot easily */}
                <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs text-slate-500">
                  <label className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 hover:bg-pink-50 text-slate-600 hover:text-pink-600 border border-slate-200 cursor-pointer transition-colors">
                    <Upload className="w-3.5 h-3.5" />
                    <span>Upload/Replace screenshot</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                  </label>
                  {imgError && (
                    <button
                      onClick={() => setImgError(false)}
                      className="inline-flex items-center gap-1 text-pink-600 hover:underline"
                    >
                      <RefreshCw className="w-3 h-3" /> Reload image.jpg
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="relative max-w-2xl w-full bg-[#0b141a] rounded-3xl border border-slate-700 shadow-2xl p-4 sm:p-6 overflow-hidden">
            <div className="flex items-center justify-between pb-3 border-b border-slate-700 mb-4 text-white">
              <div className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-amber-400" />
                <span className="font-bold text-sm sm:text-base font-display">
                  Keerthi - Funny Chat Screenshot
                </span>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-1.5 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                title="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex justify-center items-center max-h-[75vh] overflow-auto rounded-2xl bg-black/50 p-2">
              {!imgError ? (
                <img
                  src={imgSrc}
                  alt="Funny Chat Fullscreen"
                  className="max-h-[70vh] w-auto object-contain rounded-xl shadow-lg"
                />
              ) : (
                <div
                  className="w-full max-w-md p-6 bg-[#0b141a] flex flex-col gap-4 rounded-xl border border-slate-700 font-sans"
                  style={{
                    backgroundImage: `radial-gradient(#1f2c34 1px, transparent 1px)`,
                    backgroundSize: '16px 16px',
                  }}
                >
                  <div className="bg-[#202c33] text-[#e9edef] p-4 rounded-2xl rounded-tl-xs max-w-[95%] shadow-md text-sm leading-relaxed border border-slate-700">
                    <p>
                      Gomma ni tha da pana la enaku odambu mudiyala enaku teaching practice vera eruthuchie athu ilama ethu hospital pona bp 50 la eruku ethula na vathu epidi mes pana mudium
                    </p>
                    <span className="text-xs text-slate-400 float-right mt-1 ml-2">9:15 pm</span>
                  </div>

                  <div className="bg-[#202c33] text-[#e9edef] p-4 rounded-2xl rounded-tl-xs max-w-[90%] shadow-md text-sm leading-relaxed border border-slate-700">
                    <p>Loosu kamunatti Mari pesuren 💦</p>
                    <span className="text-xs text-slate-400 float-right mt-1 ml-2">9:15 pm</span>
                  </div>
                </div>
              )}
            </div>

            <div className="mt-4 flex items-center justify-between text-xs text-slate-400 pt-2 border-t border-slate-800">
              <span>Keerthi Unfiltered Moment • 8 Years of Friendship</span>
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-1.5 bg-pink-600 hover:bg-pink-700 text-white font-bold rounded-xl transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
