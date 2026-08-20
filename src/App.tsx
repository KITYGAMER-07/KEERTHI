/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { IntroSection } from './components/IntroSection';
import { EightYearsSection } from './components/EightYearsSection';
import { MemoriesSection } from './components/MemoriesSection';
import { FunnyChatSection } from './components/FunnyChatSection';
import { MessageSection } from './components/MessageSection';
import { SurpriseSection } from './components/SurpriseSection';
import { FinalMessageSection } from './components/FinalMessageSection';
import { TeddyWavingSection } from './components/TeddyWavingSection';
import { FooterSection } from './components/FooterSection';
import { FloatingHeartsOverlay } from './components/FloatingHeartsOverlay';
import { sounds } from './utils/audio';
import { Heart, Camera, MessageSquare, Mail, Gift, ChevronDown } from 'lucide-react';
import FlowerIcon from './components/FlowerIcon';

export default function App() {
  const [burstCount, setBurstCount] = useState(0);

  const handleTriggerHearts = () => {
    setBurstCount((prev) => prev + 1);
  };

  const handleOpenStory = () => {
    sounds.playSparkle();
    handleTriggerHearts();
    const introEl = document.getElementById('intro');
    if (introEl) {
      introEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Cute flowchart step connector matching the PDF's `│ ▼` tree lines with SVG icons
  const FlowConnector = ({ icon: Icon }: { icon?: React.ElementType }) => {
    const RenderIcon = Icon || ChevronDown;
    return (
      <div className="flex flex-col items-center justify-center my-4 py-2 select-none pointer-events-none">
        <div className="w-0.5 h-8 bg-gradient-to-b from-pink-300 to-pink-400" />
        <div className="my-1.5 p-1.5 rounded-full bg-pink-50 border border-pink-200 text-pink-500 shadow-xs animate-bounce">
          <RenderIcon className="w-4 h-4" />
        </div>
        <div className="w-0.5 h-8 bg-gradient-to-b from-pink-400 to-pink-300" />
      </div>
    );
  };

  return (
    <div className="relative min-h-screen bg-[#FFF9F9] text-slate-800 overflow-x-hidden selection:bg-pink-200 selection:text-pink-900">
      {/* Ambient and Burst Hearts System */}
      <FloatingHeartsOverlay burstCount={burstCount} active={true} />

      {/* Top Navbar */}
      <Navbar onTriggerHearts={handleTriggerHearts} />

      {/* Main Flow Content matching the PDF schema */}
      <main className="relative z-10 max-w-6xl mx-auto px-4">
        {/* 1. HOMEPAGE */}
        <HeroSection onOpenStory={handleOpenStory} />

        <FlowConnector icon={FlowerIcon} />

        {/* 2. INTRODUCTION */}
        <IntroSection />

        <FlowConnector icon={Heart} />

        {/* 3. 8 YEARS */}
        <EightYearsSection />

        <FlowConnector icon={Camera} />

        {/* 4. MEMORIES */}
        <MemoriesSection />

        <FlowConnector icon={MessageSquare} />

        {/* FUNNY CHAT */}
        <FunnyChatSection onTriggerHearts={handleTriggerHearts} />

        <FlowConnector icon={Mail} />

        {/* 5. MESSAGE */}
        <MessageSection />

        <FlowConnector icon={Gift} />

        {/* 6. SURPRISE & CLICK BUTTON */}
        <SurpriseSection onTriggerHearts={handleTriggerHearts} />

        <FlowConnector icon={FlowerIcon} />

        {/* 7. FINAL MESSAGE */}
        <FinalMessageSection />

        <FlowConnector icon={Heart} />

        {/* 8. TEDDY WAVING */}
        <TeddyWavingSection />

        <FlowConnector icon={FlowerIcon} />

        {/* 9. FOOTER */}
        <FooterSection onTriggerHearts={handleTriggerHearts} />
      </main>
    </div>
  );
}

