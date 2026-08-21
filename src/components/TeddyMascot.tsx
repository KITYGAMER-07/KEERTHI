import React from 'react';
import { motion } from 'motion/react';

interface TeddyMascotProps {
  mood?: 'happy' | 'waving' | 'heart' | 'jumping' | 'surprised' | 'winking';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  onClick?: () => void;
  showHeart?: boolean;
}

export const TeddyMascot: React.FC<TeddyMascotProps> = ({
  mood = 'happy',
  size = 'md',
  className = '',
  onClick,
  showHeart = false,
}) => {
  const sizeMap = {
    sm: 'w-16 h-16',
    md: 'w-28 h-28',
    lg: 'w-44 h-44',
    xl: 'w-60 h-60',
  };

  const isWaving = mood === 'waving';
  const isJumping = mood === 'jumping';
  const isHeart = mood === 'heart' || showHeart;
  const isWinking = mood === 'winking';
  const isSurprised = mood === 'surprised';

  return (
    <motion.div
      onClick={onClick}
      className={`relative inline-flex items-center justify-center select-none ${onClick ? 'cursor-pointer' : ''} ${sizeMap[size]} ${className}`}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.96 }}
      animate={
        isJumping
          ? {
              y: [0, -18, 0, -10, 0],
              rotate: [0, -4, 4, -2, 0],
              transition: { repeat: Infinity, duration: 1.8, ease: 'easeInOut' },
            }
          : isWaving
          ? {
              rotate: [-2, 2, -2],
              transition: { repeat: Infinity, duration: 2.2, ease: 'easeInOut' },
            }
          : {
              y: [0, -4, 0],
              transition: { repeat: Infinity, duration: 3, ease: 'easeInOut' },
            }
      }
    >
      <svg
        viewBox="0 0 200 200"
        className="w-full h-full drop-shadow-md overflow-visible"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="furGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#DE9B6E" />
            <stop offset="50%" stopColor="#C97F4E" />
            <stop offset="100%" stopColor="#B36938" />
          </linearGradient>
          <linearGradient id="innerEarGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFD3B6" />
            <stop offset="100%" stopColor="#FCA888" />
          </linearGradient>
          <linearGradient id="bellyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFE0CC" />
            <stop offset="100%" stopColor="#F5C0A0" />
          </linearGradient>
          <linearGradient id="heartGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF6B97" />
            <stop offset="100%" stopColor="#E91E63" />
          </linearGradient>
          <filter id="blushFilter" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" />
          </filter>
        </defs>

        {/* Teddy Ears */}
        {/* Left Ear */}
        <circle cx="58" cy="58" r="26" fill="url(#furGradient)" stroke="#8C4A21" strokeWidth="3" />
        <circle cx="58" cy="58" r="15" fill="url(#innerEarGrad)" />
        {/* Right Ear */}
        <circle cx="142" cy="58" r="26" fill="url(#furGradient)" stroke="#8C4A21" strokeWidth="3" />
        <circle cx="142" cy="58" r="15" fill="url(#innerEarGrad)" />

        {/* Body */}
        <ellipse cx="100" cy="138" rx="50" ry="46" fill="url(#furGradient)" stroke="#8C4A21" strokeWidth="3.5" />
        {/* Belly patch */}
        <ellipse cx="100" cy="142" rx="32" ry="28" fill="url(#bellyGrad)" />

        {/* Feet / Paws */}
        <ellipse cx="64" cy="176" rx="20" ry="14" fill="url(#furGradient)" stroke="#8C4A21" strokeWidth="3" />
        <ellipse cx="64" cy="176" rx="12" ry="8" fill="#FAD2BE" />
        <circle cx="58" cy="168" r="3" fill="#FAD2BE" />
        <circle cx="64" cy="166" r="3" fill="#FAD2BE" />
        <circle cx="70" cy="168" r="3" fill="#FAD2BE" />

        <ellipse cx="136" cy="176" rx="20" ry="14" fill="url(#furGradient)" stroke="#8C4A21" strokeWidth="3" />
        <ellipse cx="136" cy="176" rx="12" ry="8" fill="#FAD2BE" />
        <circle cx="130" cy="168" r="3" fill="#FAD2BE" />
        <circle cx="136" cy="166" r="3" fill="#FAD2BE" />
        <circle cx="142" cy="168" r="3" fill="#FAD2BE" />

        {/* Head */}
        <circle cx="100" cy="92" r="48" fill="url(#furGradient)" stroke="#8C4A21" strokeWidth="3.5" />

        {/* Snout */}
        <ellipse cx="100" cy="104" rx="20" ry="16" fill="url(#bellyGrad)" />

        {/* Nose */}
        <ellipse cx="100" cy="97" rx="8.5" ry="6" fill="#3D2111" />
        <ellipse cx="98" cy="95.5" rx="2.5" ry="1.5" fill="#FFFFFF" opacity="0.6" />

        {/* Mouth */}
        {isSurprised ? (
          <ellipse cx="100" cy="111" rx="4" ry="5.5" fill="#8C3A27" />
        ) : (
          <path
            d="M 100 103 L 100 109 M 94 109 Q 100 116 106 109"
            stroke="#3D2111"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        )}

        {/* Cheeks / Blush */}
        <circle cx="68" cy="104" r="8" fill="#FF8DAA" opacity="0.65" filter="url(#blushFilter)" />
        <circle cx="132" cy="104" r="8" fill="#FF8DAA" opacity="0.65" filter="url(#blushFilter)" />

        {/* Eyes */}
        {isWinking ? (
          <>
            {/* Left eye open */}
            <circle cx="78" cy="86" r="5.5" fill="#291408" />
            <circle cx="76.5" cy="84" r="2" fill="#FFFFFF" />
            {/* Right eye winking */}
            <path
              d="M 116 87 Q 123 80 130 87"
              stroke="#291408"
              strokeWidth="3.5"
              strokeLinecap="round"
            />
          </>
        ) : isSurprised ? (
          <>
            <circle cx="78" cy="84" r="7" fill="#291408" />
            <circle cx="76" cy="82" r="3" fill="#FFFFFF" />
            <circle cx="122" cy="84" r="7" fill="#291408" />
            <circle cx="120" cy="82" r="3" fill="#FFFFFF" />
          </>
        ) : (
          <>
            {/* Standard happy sweet eyes */}
            <circle cx="78" cy="86" r="5.5" fill="#291408" />
            <circle cx="76" cy="84" r="2.2" fill="#FFFFFF" />
            <circle cx="80" cy="87.5" r="1" fill="#FFFFFF" />

            <circle cx="122" cy="86" r="5.5" fill="#291408" />
            <circle cx="120" cy="84" r="2.2" fill="#FFFFFF" />
            <circle cx="124" cy="87.5" r="1" fill="#FFFFFF" />
          </>
        )}

        {/* Eyebrows */}
        <path d="M 72 76 Q 78 73 84 76" stroke="#683413" strokeWidth="2" strokeLinecap="round" />
        <path d="M 116 76 Q 122 73 128 76" stroke="#683413" strokeWidth="2" strokeLinecap="round" />

        {/* Arms / Hands */}
        {isWaving ? (
          <>
            {/* Left Arm resting */}
            <ellipse
              cx="54"
              cy="136"
              rx="13"
              ry="22"
              transform="rotate(20 54 136)"
              fill="url(#furGradient)"
              stroke="#8C4A21"
              strokeWidth="3"
            />
            {/* Right Arm waving animated */}
            <g className="animate-waving" style={{ transformOrigin: '146px 130px' }}>
              <path
                d="M 144 125 C 160 110, 175 90, 168 76 C 160 62, 146 80, 138 108"
                fill="url(#furGradient)"
                stroke="#8C4A21"
                strokeWidth="3"
                strokeLinejoin="round"
              />
              <circle cx="166" cy="74" r="12" fill="url(#furGradient)" stroke="#8C4A21" strokeWidth="2.5" />
              <ellipse cx="166" cy="74" rx="7" ry="6" fill="#FAD2BE" />
            </g>
          </>
        ) : isHeart ? (
          <>
            {/* Left & Right arms wrapped around the heart */}
            <ellipse
              cx="65"
              cy="138"
              rx="13"
              ry="22"
              transform="rotate(40 65 138)"
              fill="url(#furGradient)"
              stroke="#8C4A21"
              strokeWidth="3"
            />
            <ellipse
              cx="135"
              cy="138"
              rx="13"
              ry="22"
              transform="rotate(-40 135 138)"
              fill="url(#furGradient)"
              stroke="#8C4A21"
              strokeWidth="3"
            />
          </>
        ) : (
          <>
            {/* Regular friendly paws */}
            <ellipse
              cx="54"
              cy="136"
              rx="14"
              ry="20"
              transform="rotate(18 54 136)"
              fill="url(#furGradient)"
              stroke="#8C4A21"
              strokeWidth="3"
            />
            <ellipse
              cx="146"
              cy="136"
              rx="14"
              ry="20"
              transform="rotate(-18 146 136)"
              fill="url(#furGradient)"
              stroke="#8C4A21"
              strokeWidth="3"
            />
          </>
        )}

        {/* Big Glow Heart (for heart mood) */}
        {isHeart && (
          <g transform="translate(100, 136) scale(0.9) translate(-100, -136)">
            <path
              d="M 100 120 C 100 105, 78 95, 68 112 C 55 134, 95 162, 100 166 C 105 162, 145 134, 132 112 C 122 95, 100 105, 100 120 Z"
              fill="url(#heartGrad)"
              stroke="#B71C1C"
              strokeWidth="2"
              className="animate-pulse-subtle"
            />
            <ellipse cx="80" cy="115" rx="5" ry="3" fill="#FFFFFF" opacity="0.6" transform="rotate(-30 80 115)" />
          </g>
        )}

        {/* Cute Bow tie on neckline */}
        {!isHeart && (
          <g transform="translate(100, 114)">
            <polygon points="-12,-6 -12,6 0,0" fill="#FF5E8E" stroke="#C2185B" strokeWidth="1.5" />
            <polygon points="12,-6 12,6 0,0" fill="#FF5E8E" stroke="#C2185B" strokeWidth="1.5" />
            <circle cx="0" cy="0" r="4" fill="#FFD54F" stroke="#F57F17" strokeWidth="1" />
          </g>
        )}
      </svg>
    </motion.div>
  );
};
