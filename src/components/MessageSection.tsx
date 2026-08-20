import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Heart, Send, Check, Bookmark, Feather } from 'lucide-react';
import { sounds } from '../utils/audio';
import FlowerIcon from './FlowerIcon';

export const MessageSection: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [customReplies, setCustomReplies] = useState<Array<{ name: string; message: string; date: string }>>([
    {
      name: 'Bestie',
      message: 'Always grateful for your smile, your goofy laughs, and your unconditional support! Here is to forever! 💖',
      date: 'Today',
    },
  ]);
  const [replyName, setReplyName] = useState('');
  const [replyText, setReplyText] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const toggleLetter = () => {
    sounds.playSparkle();
    setIsOpen(!isOpen);
  };

  const handleAddReply = (e: React.FormEvent) => {
    e.preventDefault();
    if (!replyText.trim()) return;

    sounds.playPop();
    const newNote = {
      name: replyName.trim() || 'A Dear Friend',
      message: replyText.trim(),
      date: 'Just now',
    };

    setCustomReplies([newNote, ...customReplies]);
    setReplyName('');
    setReplyText('');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="message" className="py-20 px-4 relative max-w-4xl mx-auto">
      {/* Chapter Marker */}
      <div className="flex justify-center mb-6">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-pink-200 shadow-xs text-xs font-bold text-pink-600 tracking-wider uppercase">
          <Mail className="w-3.5 h-3.5 text-pink-500" />
          <span>MESSAGE</span>
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
        <div className="text-center space-y-3 mb-8">
          <div className="inline-flex items-center justify-center p-3 bg-pink-100 text-pink-600 rounded-2xl">
            <Mail className="w-7 h-7" />
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-800 font-display flex items-center justify-center gap-2">
            <span>A Personal Message Specially for</span>
            <span className="text-pink-600">Keerthi</span>
            <Heart className="w-6 h-6 text-rose-500 fill-rose-500 shrink-0" />
          </h2>

          <p className="text-slate-600 text-xs sm:text-sm max-w-md mx-auto">
            Click on the sealed letter envelope below to unfold this heartfelt message.
          </p>
        </div>

        {/* Interactive Envelope & Letter */}
        <div className="max-w-2xl mx-auto">
          {!isOpen ? (
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={toggleLetter}
              className="bg-gradient-to-br from-amber-50 via-rose-50 to-pink-100 border-2 border-pink-300 rounded-3xl p-8 sm:p-12 shadow-lg cursor-pointer text-center relative overflow-hidden transition-all group"
            >
              <div className="absolute top-4 right-4 flex items-center gap-1 text-xs text-pink-500 font-bold bg-white/80 px-3 py-1 rounded-full border border-pink-200">
                <FlowerIcon className="w-3.5 h-3.5" /> Tap to open
              </div>

              <div className="my-6 inline-flex p-5 bg-white rounded-full shadow-md border-2 border-pink-200 group-hover:scale-110 transition-transform">
                <Heart className="w-10 h-10 text-pink-500 fill-pink-500 animate-pulse" />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-800 font-display flex items-center justify-center gap-2">
                <span>For Dearest Keerthi</span>
                <FlowerIcon className="w-5 h-5 text-pink-500 shrink-0" />
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 font-handwriting text-2xl">
                Sealed with eight years of love, memories, and appreciation...
              </p>

              <div className="mt-6 inline-flex items-center gap-2 px-6 py-2.5 bg-pink-500 text-white rounded-xl text-xs font-bold shadow-md shadow-pink-300 group-hover:bg-pink-600 transition-colors">
                <Mail className="w-4 h-4" />
                <span>Open Letter</span>
                <FlowerIcon className="w-3.5 h-3.5 text-amber-200" />
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="bg-[#FFFDF9] border-2 border-amber-200/90 rounded-3xl p-6 sm:p-10 shadow-2xl relative"
            >
              {/* Envelope Header controls */}
              <div className="flex items-center justify-between border-b border-amber-200/60 pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <Feather className="w-5 h-5 text-amber-700" />
                  <span className="text-xs font-bold tracking-wider uppercase text-amber-800 font-display">
                    Handwritten Tribute
                  </span>
                </div>
                <button
                  onClick={toggleLetter}
                  className="text-xs font-bold text-pink-600 hover:text-pink-800 px-3 py-1 bg-pink-50 hover:bg-pink-100 rounded-lg border border-pink-200 transition-colors flex items-center gap-1.5"
                >
                  <span>Fold Letter</span>
                  <Mail className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Letter Content */}
              <div className="space-y-4 text-slate-800 leading-relaxed font-handwriting text-2xl sm:text-3xl text-slate-700">
                <p className="font-bold text-pink-600">Dear Keerthi,</p>

                <p>
                  Looking back across these <strong>8 incredible years</strong>, I am reminded of just how rare,
                  precious, and uplifting genuine friendship truly is.
                </p>

                <p>
                  From the spontaneous adventures and endless laughing fits to the quiet moments of mutual
                  support, you have been a pillar of kindness and constant joy. You make ordinary days feel like
                  celebrations and always know how to bring a radiant smile to everyone around you.
                </p>

                <p>
                  Thank you for being uniquely, wonderfully YOU. Thank you for 8 years of laughter, secrets,
                  unwavering trust, and unforgettable stories.
                </p>

                <p>
                  May the years ahead bring you infinite happiness, good health, exciting milestones, and
                  countless reasons to keep that brilliant smile shining bright!
                </p>

                <div className="pt-4 border-t border-amber-200/60 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xl sm:text-2xl text-pink-700 font-bold">
                  <span>With all my warmest love & gratitude,</span>
                  <span className="font-display text-base font-bold text-slate-800 bg-amber-100 px-3 py-1 rounded-xl flex items-center gap-1.5">
                    <span>Your Forever Friend</span>
                    <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
                  </span>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Friendship Memory Sticky Notes / Replies */}
        <div className="mt-12 pt-8 border-t border-slate-100">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-base sm:text-lg font-bold text-slate-800 font-display flex items-center gap-2">
              <Bookmark className="w-4 h-4 text-pink-500" />
              <span>Leave a Sweet Note for Keerthi</span>
            </h4>
            <span className="text-xs text-slate-500 font-medium">{customReplies.length} notes added</span>
          </div>

          {/* Input Form */}
          <form onSubmit={handleAddReply} className="space-y-3 bg-pink-50/50 p-4 rounded-2xl border border-pink-100 mb-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <input
                type="text"
                value={replyName}
                onChange={(e) => setReplyName(e.target.value)}
                placeholder="Your Name (Optional)"
                className="px-3.5 py-2 rounded-xl bg-white border border-pink-200 text-xs sm:text-sm focus:outline-pink-500"
              />
              <input
                type="text"
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
                placeholder="Write a sweet memory or warm wish for Keerthi..."
                className="sm:col-span-2 px-3.5 py-2 rounded-xl bg-white border border-pink-200 text-xs sm:text-sm focus:outline-pink-500"
                required
              />
            </div>
            <div className="flex justify-end items-center gap-2">
              {submitted && (
                <span className="text-xs text-emerald-600 font-bold flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" /> Note pinned!
                </span>
              )}
              <button
                type="submit"
                className="px-4 py-2 bg-pink-500 hover:bg-pink-600 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-xs transition-colors"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Pin Note</span>
                <Heart className="w-3.5 h-3.5 fill-white" />
              </button>
            </div>
          </form>

          {/* Notes display */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {customReplies.map((reply, i) => (
              <div
                key={i}
                className="p-4 bg-amber-50/80 rounded-2xl border border-amber-200/80 shadow-xs relative"
              >
                <div className="flex items-center justify-between text-xs text-amber-800 font-bold mb-1">
                  <span>{reply.name}</span>
                  <span className="text-slate-400 font-normal">{reply.date}</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 font-handwriting text-xl leading-snug">
                  &ldquo;{reply.message}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};
