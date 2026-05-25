import React from 'react';

// CGLINK Indonesia Vector SVG Logo
export const CGLinkLogo: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => {
  return (
    <svg viewBox="0 0 400 400" className={`${className}`} fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="cglink-logo-graphics">
        {/* Top Arc Shape (Letter C/G top loops) */}
        <path 
          d="M 85,150 
             C 85,75 160,55 200,55 
             C 240,55 315,75 315,150 
             L 315,175 
             L 245,175 
             L 245,150 
             C 245,120 220,115 200,115 
             C 180,115 155,120 155,150 
             L 155,175 
             L 85,175 
             Z" 
          fill="currentColor" 
        />
        
        {/* Bottom Arc Shape (Letter C/G bottom loops) */}
        <path 
          d="M 85,250 
             C 85,325 160,345 200,345 
             C 240,345 315,325 315,250 
             L 315,225 
             L 245,225 
             L 245,250 
             C 245,280 220,285 200,285 
             C 180,285 155,280 155,250 
             L 155,225 
             L 85,225 
             Z" 
          fill="currentColor" 
        />

        {/* Central White Cutout background bar */}
        <rect x="50" y="180" width="300" height="40" fill="white" />
        
        {/* Middle Line borders */}
        <line x1="50" y1="180" x2="350" y2="180" stroke="currentColor" strokeWidth="8" />
        <line x1="50" y1="220" x2="350" y2="220" stroke="currentColor" strokeWidth="8" />
        
        {/* Logo Text in the middle */}
        <text 
          x="200" 
          y="207" 
          fontFamily="system-ui, -apple-system, sans-serif" 
          fontWeight="900" 
          fontSize="22" 
          letterSpacing="4" 
          fill="currentColor" 
          textAnchor="middle"
        >
          CGLINKINDONESIA
        </text>
      </g>
    </svg>
  );
};

// Satya Petroleum Nusantara Vector SVG Logo
export const SPNLogo: React.FC<{ className?: string, showText?: boolean }> = ({ className = 'w-full h-full', showText = false }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg viewBox="0 0 300 240" className="w-[85px] h-[68px] shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Left flame/oil drop container - Yellow-orange gradient */}
        <defs>
          <linearGradient id="yellowFlame" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F5B041" />
            <stop offset="100%" stopColor="#F39C12" />
          </linearGradient>
          <linearGradient id="greenFlame" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2ECC71" />
            <stop offset="100%" stopColor="#27AE60" />
          </linearGradient>
          <linearGradient id="oilDrop" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF" stopOpacity="0.8" />
            <stop offset="40%" stopColor="#F1C40F" />
            <stop offset="100%" stopColor="#E67E22" />
          </linearGradient>
        </defs>

        {/* Left outer swoosh loop (Golden Yellow) */}
        <path 
          d="M 60,180 
             C 25,150 15,100 45,70 
             C 60,55 75,65 75,85 
             C 75,120 100,150 120,180 
             C 130,195 120,225 90,220 
             C 75,215 65,200 60,180 Z" 
          fill="url(#yellowFlame)" 
        />

        {/* Right outer swoosh loop (Emerald Green) */}
        <path 
          d="M 140,160 
             C 140,90 100,60 85,20 
             C 80,10 90,5 95,20 
             C 120,70 170,100 170,160 
             C 170,210 130,230 110,210 
             C 130,195 140,180 140,160 Z" 
          fill="url(#greenFlame)" 
        />

        {/* Center glowing oil droplet */}
        <path 
          d="M 100,135 
             C 85,160 85,190 100,205 
             C 115,220 135,220 150,205 
             C 165,190 165,160 150,135 
             C 140,120 125,110 125,95 
             C 125,110 110,120 100,135 Z" 
          fill="url(#oilDrop)" 
        />
        
        {/* Droplet Highlight shine */}
        <ellipse cx="112" cy="180" rx="6" ry="12" fill="white" transform="rotate(-15 112 180)" opacity="0.6" />
      </svg>
      
      {showText && (
        <div className="flex flex-col text-left leading-none tracking-tight">
          <span className="font-display font-black text-[15px] sm:text-[18px] text-[#27AE60] uppercase leading-none">SATYA PETROLEUM</span>
          <span className="font-display font-black text-[13px] sm:text-[16px] text-[#F39C12] uppercase tracking-[0.12em] mt-1">NUSANTARA</span>
        </div>
      )}
    </div>
  );
};

// BTW Mister Catur Vector SVG Logo with flat-portrait placeholder of Mister Catur (flat-cap, sunglasses, iconic design)
export const BTWMisterCaturLogo: React.FC<{ className?: string, isDark?: boolean }> = ({ className = 'w-full h-full', isDark = false }) => {
  return (
    <svg viewBox="0 0 400 400" className={`${className}`} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Background Outer Ring with Segmented wedges simulating the photo collage framing */}
      <circle cx="200" cy="200" r="195" stroke="#FFFFFF" strokeWidth="3" opacity="0.1" />
      
      {/* Wedge divisions (looks like the shutter shape frame in the original picture) */}
      <g opacity="0.2" stroke={isDark ? "#FFFFFF" : "#000000"} strokeWidth="1.5">
        <line x1="200" y1="5" x2="200" y2="395" />
        <line x1="5" y1="200" x2="395" y2="200" />
        <line x1="62" y1="62" x2="338" y2="338" />
        <line x1="62" y1="338" x2="338" y2="62" />
      </g>

      {/* Segmented photo frames placeholder styling (elegant grey circular arcs showing Mister Catur portrait vectors) */}
      <circle cx="200" cy="200" r="160" fill={isDark ? "#111" : "#f5f5f5"} stroke={isDark ? "#222" : "#e5e5e5"} strokeWidth="12" />
      
      {/* Vector silhouette of a professional in flat-cap and glasses (matching Mister Catur's signature pose in the photo collage) */}
      <g transform="translate(145, 95)">
        {/* Shoulders */}
        <path d="M -15,120 C -15,100 25,75 55,75 C 85,75 125,100 125,120 Z" fill={isDark ? "#333" : "#ccc"} />
        {/* Shirt collar & Tie */}
        <path d="M 40,75 L 55,95 L 70,75 Z" fill={isDark ? "#555" : "#e5e5e5"} />
        <path d="M 52,90 L 58,90 L 55,120 Z" fill="#eb2f06" />
        {/* Head/Face */}
        <circle cx="55" cy="45" r="28" fill={isDark ? "#555" : "#dfdfdf"} />
        {/* Iconic Flat Cap (Mister Catur's signature headwear from the image) */}
        <path d="M 22,35 C 22,12 55,10 88,35 C 92,38 95,44 75,44 C 55,44 25,40 22,35 Z" fill="#2d3436" />
        <path d="M 24,36 C 28,30 55,26 86,36 L 90,40 L 20,40 Z" fill="#1e272e" />
        {/* Sunglasses / Glasses */}
        <rect x="36" y="40" width="16" height="10" rx="3" fill="#111" />
        <rect x="58" y="40" width="16" height="10" rx="3" fill="#111" />
        <line x1="52" y1="43" x2="58" y2="43" stroke="#111" strokeWidth="2" />
        {/* Smile profile */}
        <path d="M 48,60 Q 55,65 62,60" stroke="#2d3436" strokeWidth="2" strokeLinecap="round" fill="none" />
      </g>

      {/* Central Brand Badge - BTW Blue circle with Orange/Red thick Border */}
      <circle cx="200" cy="200" r="105" fill="#1E3799" stroke="#E84118" strokeWidth="12" />
      <circle cx="200" cy="200" r="105" stroke="#FFFFFF" strokeWidth="2" />

      {/* BTW Letters - Large yellow block font */}
      <text 
        x="200" 
        y="170" 
        fontFamily="sans-serif" 
        fontWeight="bold" 
        fontSize="54" 
        fill="#F1C40F" 
        textAnchor="middle"
        letterSpacing="1"
      >
        BTW
      </text>

      {/* Subtext: Break Time With inside a black badge */}
      <rect x="110" y="180" width="180" height="20" rx="10" fill="#0c2461" />
      <text 
        x="200" 
        y="194" 
        fontFamily="system-ui, sans-serif" 
        fontWeight="black" 
        fontSize="10" 
        fill="#FFFFFF" 
        textAnchor="middle"
        letterSpacing="2"
      >
        -BREAK TIME WITH-
      </text>

      {/* mister catur */}
      <text 
        x="200" 
        y="230" 
        fontFamily="sans-serif" 
        fontWeight="heavy" 
        fontSize="24" 
        fill="#FFFFFF" 
        textAnchor="middle"
        letterSpacing="-0.5"
      >
        mister catur
      </text>

      {/* & Friends */}
      <text 
        x="200" 
        y="255" 
        fontFamily="sans-serif" 
        fontWeight="bold" 
        fontSize="16" 
        fill="#F1C40F" 
        textAnchor="middle"
      >
        & Friends
      </text>
    </svg>
  );
};

// CG Tour & Travel Vector SVG Logo (B2C Segment)
export const CGTourTravelLogo: React.FC<{ className?: string, isDark?: boolean }> = ({ className = 'w-full h-full', isDark = false }) => {
  return (
    <svg viewBox="0 0 400 400" className={`${className}`} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#DFBA6B" />
          <stop offset="50%" stopColor="#C5A059" />
          <stop offset="100%" stopColor="#9E7E3B" />
        </linearGradient>
      </defs>
      
      {/* Sphere/Globe Grid line markings */}
      <circle cx="200" cy="200" r="150" stroke={isDark ? "#FFFFFF" : "#111111"} strokeWidth="4" opacity="0.15" />
      <ellipse cx="200" cy="200" rx="150" ry="60" stroke={isDark ? "#FFFFFF" : "#111111"} strokeWidth="3" opacity="0.1" />
      <ellipse cx="200" cy="200" rx="60" ry="150" stroke={isDark ? "#FFFFFF" : "#111111"} strokeWidth="3" opacity="0.1" />
      
      {/* Golden Crescent Moon representing sharia/Umrah travel focus */}
      <path 
        d="M 230,120 
           A 90,90 0 1,0 230,280 
           A 75,75 0 1,1 230,120" 
        fill="url(#goldGradient)" 
      />
      
      {/* Airplane taking off diagonally upwards-right */}
      <g transform="translate(160, 160) rotate(-25)">
        <path 
          d="M 0,0 
             L 70,10 
             L 100,-5 
             L 110,15 
             L 80,20 
             L 50,55 
             L 30,50 
             L 50,20 
             L -30,15 
             L -50,40 
             L -60,35 
             L -40,10 
             L -45,0 
             Z" 
          fill={isDark ? "#FFFFFF" : "#1C2D37"} 
        />
        {/* Airplane contrail stream */}
        <path d="M -80,5 Q -40,12 0,10" stroke="#DFBA6B" strokeWidth="4" strokeDasharray="6,4" />
      </g>
      
      {/* Outer elegant text arc/labels */}
      <text 
        x="200" 
        y="340" 
        fontFamily="sans-serif" 
        fontWeight="900" 
        fontSize="17" 
        fill={isDark ? "#FFFFFF" : "#1C2D37"} 
        textAnchor="middle" 
        letterSpacing="6"
      >
        CG TOUR & TRAVEL
      </text>
      <text 
        x="200" 
        y="365" 
        fontFamily="sans-serif" 
        fontWeight="bold" 
        fontSize="11" 
        fill="#C5A059" 
        textAnchor="middle" 
        letterSpacing="4"
      >
        AMANAH • COMFORT • RELIABLE
      </text>
    </svg>
  );
};

// --- HIGH RESOLUTION IMAGE LOGOS FROM WEBSITE ---

export const CGLinkImgLogo: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => {
  return (
    <img 
      src="https://cglinkindonesia.com/wp-content/uploads/2026/03/WhatsApp-Image-2026-03-26-at-14.55.49.jpeg" 
      alt="CGLINK Indonesia Logo" 
      className={`object-contain transition-transform duration-300 ${className}`}
      referrerPolicy="no-referrer"
    />
  );
};

export const SPNImgLogo: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => {
  return (
    <img 
      src="https://cglinkindonesia.com/wp-content/uploads/2026/05/cropped-Logo-Satya-Petroleumn-Nusantara.png" 
      alt="Satya Petroleum Nusantara Logo" 
      className={`object-contain transition-transform duration-300 ${className}`}
      referrerPolicy="no-referrer"
    />
  );
};

export const AffiliateBukuLogo: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => {
  return (
    <img 
      src="https://cglinkindonesia.com/wp-content/uploads/2026/05/images_8834891768483526954.webp" 
      alt="Affiliate Buku Pulang Sebelum Berlari Logo" 
      className={`object-contain transition-transform duration-300 ${className}`}
      referrerPolicy="no-referrer"
    />
  );
};

export const YoutubeChannelLogo: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => {
  return (
    <img 
      src="https://cglinkindonesia.com/wp-content/uploads/2026/05/channels4_profile.jpg" 
      alt="BTW Mister Catur & Friends YouTube Channel Logo" 
      className={`object-contain rounded-full transition-transform duration-300 ${className}`}
      referrerPolicy="no-referrer"
    />
  );
};

export const CGTourTravelImgLogo: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => {
  return (
    <img 
      src="https://cglinkindonesia.com/wp-content/uploads/2026/05/Gemini_Generated_Image_c2o455c2o455c2o4-removebg-preview-1.webp" 
      alt="CG Tour & Travel Logo" 
      className={`object-contain transition-transform duration-300 ${className}`}
      referrerPolicy="no-referrer"
    />
  );
};


