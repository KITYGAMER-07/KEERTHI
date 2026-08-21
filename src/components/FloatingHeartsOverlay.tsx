import React, { useEffect, useState } from 'react';
import { Heart, Star } from 'lucide-react';
import FlowerIcon from './FlowerIcon';

interface FloatingIconItem {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  iconType: 'heart' | 'flower' | 'star';
  color: string;
  fill: string;
  opacity: number;
}

interface FloatingHeartsOverlayProps {
  burstCount?: number;
  active?: boolean;
}

export const FloatingHeartsOverlay: React.FC<FloatingHeartsOverlayProps> = ({
  burstCount = 0,
  active = true,
}) => {
  const [items, setItems] = useState<FloatingIconItem[]>([]);
  const [burstItems, setBurstItems] = useState<FloatingIconItem[]>([]);

  const palette = [
    { color: 'text-pink-500', fill: '#ec4899' },
    { color: 'text-rose-500', fill: '#f43f5e' },
    { color: 'text-amber-400', fill: '#fbbf24' },
    { color: 'text-pink-400', fill: '#f472b6' },
    { color: 'text-rose-400', fill: '#fb7185' },
  ];

  const iconTypes: Array<'heart' | 'flower' | 'star'> = ['heart', 'heart', 'heart', 'flower', 'star'];

  useEffect(() => {
    if (!active) {
      setItems([]);
      return;
    }
    // Generate gentle ambient floating SVG icons
    const ambient: FloatingIconItem[] = Array.from({ length: 16 }).map((_, i) => {
      const p = palette[Math.floor(Math.random() * palette.length)];
      return {
        id: i,
        left: Math.random() * 95,
        size: Math.floor(Math.random() * 14) + 16,
        duration: Math.random() * 8 + 8,
        delay: Math.random() * 6,
        iconType: iconTypes[Math.floor(Math.random() * iconTypes.length)],
        color: p.color,
        fill: p.fill,
        opacity: Math.random() * 0.4 + 0.3,
      };
    });
    setItems(ambient);
  }, [active]);

  useEffect(() => {
    if (burstCount <= 0) return;
    const newBursts: FloatingIconItem[] = Array.from({ length: 28 }).map((_, i) => {
      const p = palette[Math.floor(Math.random() * palette.length)];
      return {
        id: Date.now() + i,
        left: Math.random() * 90 + 5,
        size: Math.floor(Math.random() * 18) + 20,
        duration: Math.random() * 3 + 2.5,
        delay: Math.random() * 0.4,
        iconType: iconTypes[Math.floor(Math.random() * iconTypes.length)],
        color: p.color,
        fill: p.fill,
        opacity: 0.9,
      };
    });

    setBurstItems((prev) => [...prev, ...newBursts]);
    const timer = setTimeout(() => {
      setBurstItems([]);
    }, 4500);

    return () => clearTimeout(timer);
  }, [burstCount]);

  const renderIcon = (item: FloatingIconItem) => {
    if (item.iconType === 'flower') {
      return <FlowerIcon style={{ width: item.size, height: item.size }} className={item.color} />;
    }
    if (item.iconType === 'star') {
      return <Star style={{ width: item.size, height: item.size, fill: item.fill }} className={item.color} />;
    }
    return <Heart style={{ width: item.size, height: item.size, fill: item.fill }} className={item.color} />;
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden">
      {/* Ambient Floating Icons */}
      {items.map((h) => (
        <div
          key={`ambient-${h.id}`}
          className="absolute select-none"
          style={{
            left: `${h.left}%`,
            bottom: '-40px',
            opacity: h.opacity,
            animation: `floatUp ${h.duration}s linear infinite`,
            animationDelay: `${h.delay}s`,
          }}
        >
          {renderIcon(h)}
        </div>
      ))}

      {/* Burst Floating Icons */}
      {burstItems.map((h) => (
        <div
          key={`burst-${h.id}`}
          className="absolute select-none drop-shadow-md transition-transform"
          style={{
            left: `${h.left}%`,
            bottom: '20%',
            opacity: h.opacity,
            animation: `burstUp ${h.duration}s cubic-bezier(0.2, 0.8, 0.2, 1) forwards`,
            animationDelay: `${h.delay}s`,
          }}
        >
          {renderIcon(h)}
        </div>
      ))}

      <style>{`
        @keyframes floatUp {
          0% {
            transform: translateY(0) rotate(0deg) scale(0.8);
            opacity: 0;
          }
          15% {
            opacity: 0.5;
          }
          80% {
            opacity: 0.5;
          }
          100% {
            transform: translateY(-110vh) rotate(35deg) scale(1.1);
            opacity: 0;
          }
        }
        @keyframes burstUp {
          0% {
            transform: translateY(0) scale(0.4) rotate(0deg);
            opacity: 1;
          }
          50% {
            opacity: 0.9;
            transform: translateY(-50vh) scale(1.3) rotate(20deg);
          }
          100% {
            transform: translateY(-90vh) scale(1) rotate(45deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};
