import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Heart, Menu, X, Home, BookOpen, Calendar, Camera, Mail, Gift, Award, ChevronDown, MessageSquare } from 'lucide-react';
import { sounds } from '../utils/audio';
import FlowerIcon from './FlowerIcon';

interface NavbarProps {
  onTriggerHearts: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onTriggerHearts }) => {
  const [isMuted, setIsMuted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  const toggleSound = () => {
    sounds.isMuted = !isMuted;
    setIsMuted(!isMuted);
    if (isMuted) {
      sounds.playSparkle();
    }
  };

  const navMenuItems = [
    { label: 'Home', href: '#home', icon: Home, desc: 'Welcome corner' },
    { label: 'Intro', href: '#intro', icon: BookOpen, desc: 'Special dedication' },
    { label: 'Years', href: '#eight-years', icon: Calendar, desc: '8-year milestone journey' },
    { label: 'Memories', href: '#memories', icon: Camera, desc: '6 special moments' },
    { label: 'Funny Chat', href: '#funny-chat', icon: MessageSquare, desc: 'Iconic chat banter' },
    { label: 'Message', href: '#message', icon: Mail, desc: 'Handwritten letter' },
    { label: 'Surprise', href: '#surprise', icon: Gift, desc: 'Confetti & wishes' },
    { label: 'Final', href: '#final', icon: Award, desc: 'Gratitude tribute' },
  ];

  return (
    <header
      id="top-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-xs border-b border-pink-100 py-2.5'
          : 'bg-transparent py-3.5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-2.5 sm:px-6 flex items-center justify-between gap-1.5 sm:gap-3">
        {/* Brand logo - now with circular logo.jpg and strictly 'KEERTHI' */}
        <a
          href="#home"
          onClick={() => {
            sounds.playSparkle();
            setMenuOpen(false);
          }}
          className="flex items-center gap-1.5 sm:gap-2.5 group text-slate-800 hover:text-pink-600 transition-colors shrink-0"
        >
          <div className="relative w-7 h-7 sm:w-9 sm:h-9 rounded-full overflow-hidden border-2 border-pink-300 shadow-xs group-hover:scale-105 group-hover:border-pink-500 transition-all bg-gradient-to-tr from-pink-400 to-rose-400 shrink-0 flex items-center justify-center">
            {!logoError ? (
              <img
                src="/logo.jpg"
                alt="Keerthi"
                onError={() => setLogoError(true)}
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-white font-extrabold text-xs sm:text-sm font-display">K</span>
            )}
          </div>
          <span className="font-extrabold tracking-wider text-sm sm:text-lg text-slate-900 font-display">
            KEERTHI
          </span>
        </a>

        {/* Right Controls: 1. Speaker (Sound Toggle), 2. Menu */}
        <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0" ref={menuRef}>
          {/* 1. Speaker / Sound Toggle */}
          <button
            id="sound-toggle-btn"
            onClick={toggleSound}
            className={`p-1.5 sm:p-2 rounded-full transition-all border shrink-0 ${
              isMuted
                ? 'bg-slate-100 text-slate-400 border-slate-200'
                : 'bg-amber-50 text-amber-700 border-amber-200 hover:bg-amber-100'
            }`}
            title={isMuted ? 'Unmute Sound Effects' : 'Mute Sound Effects'}
            aria-label={isMuted ? 'Unmute Sound Effects' : 'Mute Sound Effects'}
          >
            {isMuted ? <VolumeX className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> : <Volume2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
          </button>

          {/* 2. Menu Button */}
          <div className="relative">
            <button
              id="navbar-menu-btn"
              onClick={() => {
                sounds.playPop();
                setMenuOpen(!menuOpen);
              }}
              className={`flex items-center gap-1 sm:gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-bold transition-all shadow-xs border whitespace-nowrap ${
                menuOpen
                  ? 'bg-pink-600 text-white border-pink-600 shadow-pink-200'
                  : 'bg-white/90 hover:bg-pink-50 text-slate-800 hover:text-pink-600 border-pink-200'
              }`}
              aria-expanded={menuOpen}
              aria-label="Navigation Menu"
            >
              {menuOpen ? <X className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> : <Menu className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-pink-500" />}
              <span>Menu</span>
              <ChevronDown className={`w-3 h-3 sm:w-3.5 sm:h-3.5 transition-transform duration-200 ${menuOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown Menu Container containing Send Love + All Chapters */}
            {menuOpen && (
              <div className="absolute right-0 top-full mt-2 w-[calc(100vw-24px)] max-w-xs sm:w-72 bg-white/98 backdrop-blur-md rounded-2xl border-2 border-pink-200 shadow-2xl p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200 no-scrollbar">
                {/* Dedicated Send Love Button inside Menu Options */}
                <div className="p-1 mb-1 border-b border-pink-100">
                  <button
                    id="heart-shower-menu-btn"
                    onClick={() => {
                      sounds.playSparkle();
                      onTriggerHearts();
                      setMenuOpen(false);
                    }}
                    className="w-full flex items-center justify-between px-3 py-2.5 bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 hover:from-pink-600 hover:to-rose-600 text-white rounded-xl text-xs sm:text-sm font-bold transition-all shadow-sm shadow-pink-200 group"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-white/20 flex items-center justify-center text-white shrink-0">
                        <Heart className="w-4 h-4 fill-white animate-pulse" />
                      </div>
                      <div className="text-left">
                        <p className="leading-tight">Send Love</p>
                        <p className="text-[10px] text-pink-100 font-normal">Shower floating hearts</p>
                      </div>
                    </div>
                    <FlowerIcon className="w-4 h-4 text-amber-200 group-hover:rotate-12 transition-transform" />
                  </button>
                </div>

                <div className="px-3 py-1.5 flex items-center justify-between">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-pink-600 font-display">
                    Navigate Chapters
                  </span>
                  <span className="text-[10px] text-slate-400 font-semibold">8 Sections</span>
                </div>

                <div className="flex flex-col gap-1 max-h-[65vh] overflow-y-auto no-scrollbar">
                  {navMenuItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <a
                        key={item.href}
                        href={item.href}
                        onClick={() => {
                          sounds.playSparkle();
                          setMenuOpen(false);
                        }}
                        className="flex items-center justify-between px-3 py-2 sm:py-2.5 rounded-xl text-slate-700 hover:text-pink-600 hover:bg-pink-50/90 transition-all group"
                      >
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-lg bg-pink-50 border border-pink-100 flex items-center justify-center text-pink-500 group-hover:bg-pink-500 group-hover:text-white transition-all shrink-0">
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <p className="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-pink-600 leading-tight">
                              {item.label}
                            </p>
                            <p className="text-[10px] sm:text-[11px] text-slate-400 leading-tight">
                              {item.desc}
                            </p>
                          </div>
                        </div>
                        <Icon className="w-3.5 h-3.5 text-slate-300 group-hover:text-pink-500 transition-colors" />
                      </a>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
