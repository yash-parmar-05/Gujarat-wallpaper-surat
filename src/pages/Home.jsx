import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowUpRight, 
  Sparkles, 
  MapPin, 
  MessageCircle, 
  ShieldCheck, 
  Award, 
  Layers, 
  Navigation,
  Eye,
  CheckCircle2,
  Users
} from 'lucide-react';

import { useTheme } from '../context/ThemeContext';

// Custom SVG Icons for Instagram & YouTube for precision luxury styling
function InstagramIcon({ size = 22, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}

function YouTubeIcon({ size = 22, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  );
}

export default function Home() {
  const navigate = useNavigate();
  const { theme, isDark } = useTheme();

  // Dynamic Theme Colors
  const colors = {
    bgMain: isDark ? '#121110' : '#FBF9F5',
    bgSectionAlt: isDark ? '#161513' : '#F4EFEA',
    bgCard: isDark ? '#181715' : '#FFFFFF',
    bgCardHover: isDark ? '#201E1B' : '#FAF7F2',
    textPrimary: isDark ? '#F7F4EE' : '#1C1917',
    textSecondary: isDark ? '#C8C2B7' : '#57534E',
    textMuted: isDark ? '#948E85' : '#78716C',
    accentGold: isDark ? '#C5A880' : '#A68353',
    accentGoldHover: isDark ? '#DFCAAD' : '#8D6B3C',
    borderSubtle: isDark ? 'rgba(245, 242, 236, 0.08)' : 'rgba(28, 25, 23, 0.08)',
    borderCard: isDark ? 'rgba(197, 168, 128, 0.22)' : 'rgba(166, 131, 83, 0.25)',
  };

  // 5 Curated Collections
  const collections = [
    {
      id: 'wallpapers',
      title: 'Luxury Wallpapers',
      categoryQuery: 'Luxury Wallpapers',
      description: 'Designer wallcoverings, metallic relief textures & Pichwai heritage motifs.',
      image: '/assets/products/wallpaper-card.jpg',
      badge: 'Heritage & Modern',
    },
    {
      id: 'pvc-panels',
      title: 'PVC Wall Panels',
      categoryQuery: 'PVC Wall Panels',
      description: 'Architectural fluted louvers, 3D geometric textures & acoustic finishes.',
      image: '/assets/products/pvc-panel-card.jpg',
      badge: 'Architectural',
    },
    {
      id: 'carpets',
      title: 'Luxury Carpets',
      categoryQuery: 'Luxury Carpets',
      description: 'Hand-tufted transitional carpets, plush runners & bespoke wool floorings.',
      image: '/assets/products/carpet-card.jpg',
      badge: 'Hand-Crafted',
    },
    {
      id: 'turf',
      title: 'Artificial Turf / Grass',
      categoryQuery: 'Artificial Turf / Grass',
      description: 'High-density natural feel landscape turf for balconies & terrace gardens.',
      image: '/assets/products/turf-card.jpg',
      badge: 'All-Weather',
    },
    {
      id: 'wall-decor',
      title: 'Wall Decor',
      categoryQuery: 'Wall Decor',
      description: 'Artisanal 3D foam panels, metallic wall art & bespoke architectural accents.',
      image: '/assets/products/wallpaper-showcase.jpg',
      badge: 'Bespoke Accents',
    },
  ];

  // 3 Why Choose Us Highlights
  const whyHighlights = [
    {
      icon: Award,
      title: 'Premium Selection',
      desc: 'Carefully curated patterns from around the world, authentic textures, and fire & water-resistant materials.',
    },
    {
      icon: ShieldCheck,
      title: 'Expert Guidance',
      desc: 'Personalized assistance from experienced showroom specialists for residential bungalows, apartments, and commercial projects.',
    },
    {
      icon: Layers,
      title: 'Complete Wall & Decor Solutions',
      desc: 'From designer wallpapers and PVC panels to turf and bespoke carpets, everything under one roof in Surat.',
    },
  ];

  return (
    <div 
      style={{ 
        position: 'relative', 
        width: '100%', 
        overflowX: 'hidden', 
        backgroundColor: colors.bgMain, 
        color: colors.textPrimary,
        transition: 'background-color 0.35s ease, color 0.3s ease',
      }}
    >

      <section
        id="hero"
        style={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          paddingTop: '7.5rem',
          paddingBottom: '3.5rem',
          backgroundColor: colors.bgMain,
          overflow: 'hidden',
          transition: 'background-color 0.35s ease',
        }}
      >
        {/* Full-Bleed Wallpaper Visual Background */}
        <motion.div
          className="hero-wallpaper-layer"
          initial={{ scale: 1.05, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'url(/assets/products/wallpaper-showcase.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'right 35%',
            filter: isDark 
              ? 'brightness(0.64) contrast(1.06) saturate(0.95)' 
              : 'brightness(0.98) contrast(1.02) saturate(1.02)',
            transition: 'filter 0.35s ease',
          }}
        />

        {/* Master Theme-Aware Gradient Blend Overlays for Impeccable Readability */}
        <div
          className="hero-gradient-overlay"
          style={{
            position: 'absolute',
            inset: 0,
            background: isDark
              ? `
                linear-gradient(to right, 
                  rgba(20, 19, 18, 0.98) 0%, 
                  rgba(20, 19, 18, 0.94) 38%, 
                  rgba(20, 19, 18, 0.65) 58%, 
                  rgba(20, 19, 18, 0.2) 80%, 
                  rgba(20, 19, 18, 0.08) 100%),
                linear-gradient(to top, 
                  rgba(20, 19, 18, 0.98) 0%, 
                  rgba(20, 19, 18, 0.4) 30%, 
                  transparent 60%),
                linear-gradient(to bottom, 
                  rgba(20, 19, 18, 0.75) 0%, 
                  transparent 22%)
              `
              : `
                linear-gradient(to right, 
                  rgba(251, 249, 245, 0.97) 0%, 
                  rgba(251, 249, 245, 0.88) 30%, 
                  rgba(251, 249, 245, 0.45) 50%, 
                  rgba(251, 249, 245, 0.05) 70%, 
                  transparent 85%),
                linear-gradient(to top, 
                  rgba(251, 249, 245, 0.85) 0%, 
                  rgba(251, 249, 245, 0.25) 25%, 
                  transparent 50%),
                linear-gradient(to bottom, 
                  rgba(251, 249, 245, 0.95) 0%, 
                  rgba(251, 249, 245, 0.6) 12%, 
                  transparent 28%)
              `,
            pointerEvents: 'none',
            transition: 'background 0.35s ease',
          }}
        />

        {/* Subtle Architectural Grid Accent Line */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: '6%',
            width: '1px',
            backgroundColor: isDark ? 'rgba(247, 244, 238, 0.03)' : 'rgba(20, 19, 18, 0.03)',
            pointerEvents: 'none',
          }}
        />

        <div className="container-luxury" style={{ position: 'relative', zIndex: 2, width: '100%' }}>
          <div style={{ maxWidth: '680px' }}>
            {/* Eyebrow badge */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.4rem 0.95rem',
                  backgroundColor: isDark ? 'rgba(197, 168, 128, 0.1)' : 'rgba(166, 131, 83, 0.12)',
                  border: `1px solid ${colors.borderCard}`,
                  borderRadius: '9999px',
                  fontSize: '0.72rem',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: colors.accentGold,
                  fontWeight: 600,
                  marginBottom: '1.5rem',
                }}
              >
                <Sparkles size={13} />
                SURAT SHOWROOM • GUJARAT WALLPAPER & DECOR
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: 'clamp(2.75rem, 4.8vw, 4.4rem)',
                  lineHeight: 1.1,
                  color: colors.textPrimary,
                  fontWeight: 500,
                  letterSpacing: '0.01em',
                  marginBottom: '1.5rem',
                }}
              >
                Transform Your Walls.
                <br />
                <span style={{ color: colors.accentGold, fontStyle: 'italic' }}>Transform Your Space.</span>
              </motion.h1>

              {/* Supporting Text */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  fontSize: '1.08rem',
                  color: colors.textSecondary,
                  lineHeight: 1.7,
                  maxWidth: '540px',
                  fontWeight: 300,
                  marginBottom: '2.5rem',
                }}
              >
                Premium wallpapers, wall panels, carpets and decor solutions for homes, offices and commercial spaces.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '1.25rem',
                  marginBottom: '2.5rem',
                }}
              >
                <button
                  onClick={() => navigate('/products')}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.65rem',
                    padding: '0.95rem 2rem',
                    backgroundColor: colors.accentGold,
                    color: isDark ? '#141312' : '#FFFFFF',
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    borderRadius: '4px',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = colors.accentGoldHover;
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = colors.accentGold;
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <span>EXPLORE COLLECTIONS</span>
                  <ArrowUpRight size={16} />
                </button>

                <button
                  onClick={() => navigate('/contact')}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.65rem',
                    padding: '0.95rem 2rem',
                    backgroundColor: 'transparent',
                    color: colors.textPrimary,
                    fontSize: '0.82rem',
                    fontWeight: 500,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    borderRadius: '4px',
                    border: `1px solid ${colors.borderCard}`,
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = colors.accentGold;
                    e.currentTarget.style.backgroundColor = isDark ? 'rgba(197, 168, 128, 0.1)' : 'rgba(166, 131, 83, 0.1)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = colors.borderCard;
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <span>VISIT SHOWROOM</span>
                </button>
              </motion.div>

            {/* 3 Value-Prop Highlights matching user reference mockup */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
                gap: '1.25rem',
                maxWidth: '620px',
                paddingTop: '1.25rem',
                borderTop: `1px solid ${colors.borderSubtle}`,
                marginBottom: '1.5rem',
              }}
              className="hero-badges-row"
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                <Award size={19} color={colors.accentGold} style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <div style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: colors.textPrimary }}>
                    Premium Quality
                  </div>
                  <div style={{ fontSize: '0.74rem', color: colors.textSecondary, lineHeight: 1.4, marginTop: '2px' }}>
                    Carefully curated materials
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                <Users size={19} color={colors.accentGold} style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <div style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: colors.textPrimary }}>
                    Expert Guidance
                  </div>
                  <div style={{ fontSize: '0.74rem', color: colors.textSecondary, lineHeight: 1.4, marginTop: '2px' }}>
                    Personalized support at every step
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                <Layers size={19} color={colors.accentGold} style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <div style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: colors.textPrimary }}>
                    Complete Solutions
                  </div>
                  <div style={{ fontSize: '0.74rem', color: colors.textSecondary, lineHeight: 1.4, marginTop: '2px' }}>
                    Everything you need under one roof
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Showroom Location Hint */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.78rem',
                color: colors.textMuted,
                fontWeight: 400,
              }}
            >
              <MapPin size={14} color={colors.accentGold} />
              <span>Showroom: Mangaldas Shopping Centre, Near Navjivan Circle, Surat</span>
            </motion.div>
          </div>

          {/* Floating Trust Strip Card — full width below content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            style={{ marginTop: '2.5rem' }}
          >
            <div
              style={{
                  borderRadius: '20px',
                  backgroundColor: isDark ? 'rgba(24, 22, 21, 0.88)' : 'rgba(255, 255, 255, 0.94)',
                  backdropFilter: 'blur(16px)',
                  border: `1px solid ${isDark ? 'rgba(197, 168, 128, 0.25)' : 'rgba(215, 204, 188, 0.75)'}`,
                  boxShadow: isDark ? '0 20px 50px rgba(0, 0, 0, 0.55)' : '0 20px 45px rgba(0, 0, 0, 0.07)',
                  padding: '1.4rem 2rem',
                }}
              >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '1.5rem',
                alignItems: 'center',
              }}
              className="trust-strip-grid"
            >
              {/* Stat 1: Instagram */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.9rem' }}>
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    border: `1px solid ${isDark ? 'rgba(197, 168, 128, 0.3)' : 'rgba(166, 131, 83, 0.3)'}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    backgroundColor: isDark ? 'rgba(197, 168, 128, 0.08)' : 'rgba(166, 131, 83, 0.08)',
                  }}
                >
                  <InstagramIcon size={20} color={colors.accentGold} />
                </div>
                <div>
                  <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.75rem', fontWeight: 700, color: colors.textPrimary, lineHeight: 1.1 }}>
                    100K+
                  </div>
                  <div style={{ fontSize: '0.66rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: colors.accentGold, marginTop: '2px' }}>
                    Instagram Community
                  </div>
                  <div style={{ fontSize: '0.72rem', color: colors.textMuted, marginTop: '2px' }}>
                    Growing community of design lovers
                  </div>
                </div>
              </div>

              {/* Stat 2: YouTube */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.9rem', borderLeft: `1px solid ${colors.borderSubtle}`, paddingLeft: '1.5rem' }} className="trust-strip-item">
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    border: `1px solid ${isDark ? 'rgba(197, 168, 128, 0.3)' : 'rgba(166, 131, 83, 0.3)'}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    backgroundColor: isDark ? 'rgba(197, 168, 128, 0.08)' : 'rgba(166, 131, 83, 0.08)',
                  }}
                >
                  <YouTubeIcon size={20} color={colors.accentGold} />
                </div>
                <div>
                  <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.75rem', fontWeight: 700, color: colors.textPrimary, lineHeight: 1.1 }}>
                    160K+
                  </div>
                  <div style={{ fontSize: '0.66rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: colors.accentGold, marginTop: '2px' }}>
                    YouTube Subscribers
                  </div>
                  <div style={{ fontSize: '0.72rem', color: colors.textMuted, marginTop: '2px' }}>
                    Your trust and support are our strength
                  </div>
                </div>
              </div>

              {/* Stat 3: Customers */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.9rem', borderLeft: `1px solid ${colors.borderSubtle}`, paddingLeft: '1.5rem' }} className="trust-strip-item">
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    border: `1px solid ${isDark ? 'rgba(197, 168, 128, 0.3)' : 'rgba(166, 131, 83, 0.3)'}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    backgroundColor: isDark ? 'rgba(197, 168, 128, 0.08)' : 'rgba(166, 131, 83, 0.08)',
                  }}
                >
                  <Users size={20} color={colors.accentGold} />
                </div>
                <div>
                  <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.75rem', fontWeight: 700, color: colors.textPrimary, lineHeight: 1.1 }}>
                    10K+
                  </div>
                  <div style={{ fontSize: '0.66rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: colors.accentGold, marginTop: '2px' }}>
                    Happy Customers
                  </div>
                  <div style={{ fontSize: '0.72rem', color: colors.textMuted, marginTop: '2px' }}>
                    Helping transform homes and spaces
                  </div>
                </div>
              </div>

              {/* Stat 4: Excellence */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.9rem', borderLeft: `1px solid ${colors.borderSubtle}`, paddingLeft: '1.5rem' }} className="trust-strip-item">
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    border: `1px solid ${isDark ? 'rgba(197, 168, 128, 0.3)' : 'rgba(166, 131, 83, 0.3)'}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    backgroundColor: isDark ? 'rgba(197, 168, 128, 0.08)' : 'rgba(166, 131, 83, 0.08)',
                  }}
                >
                  <Award size={20} color={colors.accentGold} />
                </div>
                <div>
                  <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.75rem', fontWeight: 700, color: colors.textPrimary, lineHeight: 1.1 }}>
                    5+ Years
                  </div>
                  <div style={{ fontSize: '0.66rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: colors.accentGold, marginTop: '2px' }}>
                    Of Trust &amp; Excellence
                  </div>
                  <div style={{ fontSize: '0.72rem', color: colors.textMuted, marginTop: '2px' }}>
                    Delivering quality and commitment always
                  </div>
                </div>
              </div>
            </div>
          </div>
          </motion.div>
        </div>
      </section>

      {/* ==================================================
          3. COLLECTION PREVIEW ("Explore Our Collections")
          ================================================== */}
      <section
        id="collections-preview"
        style={{
          padding: '6.5rem 0',
          backgroundColor: colors.bgMain,
          position: 'relative',
          transition: 'background-color 0.35s ease',
        }}
      >
        <div className="container-luxury">
          {/* Section Header */}
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3.5rem' }}>
            <div
              style={{
                fontSize: '0.72rem',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: colors.accentGold,
                fontWeight: 600,
                marginBottom: '0.75rem',
              }}
            >
              CURATED PRODUCT VERTICALS
            </div>

            <h2
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: 'clamp(2.35rem, 4vw, 3.4rem)',
                color: colors.textPrimary,
                fontWeight: 500,
                marginBottom: '0.85rem',
                letterSpacing: '0.01em',
              }}
            >
              Explore Our Collections
            </h2>

            <p
              style={{
                fontSize: '0.98rem',
                color: colors.textSecondary,
                lineHeight: 1.65,
                fontWeight: 300,
              }}
            >
              Discover carefully selected wall and interior solutions designed to transform everyday spaces.
            </p>
          </div>

          {/* 5 Premium Compact Category Cards */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(5, 1fr)',
              gap: '1.25rem',
            }}
            className="collections-grid"
          >
            {collections.map((cat, idx) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                onClick={() => navigate(`/products?category=${encodeURIComponent(cat.categoryQuery)}`)}
                style={{
                  backgroundColor: colors.bgCard,
                  border: `1px solid ${colors.borderSubtle}`,
                  borderRadius: '10px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  cursor: 'pointer',
                  boxShadow: isDark ? '0 8px 24px rgba(0, 0, 0, 0.3)' : '0 6px 20px rgba(0, 0, 0, 0.04)',
                  transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
                className="collection-preview-card"
              >
                {/* Visual Thumbnail */}
                <div
                  style={{
                    position: 'relative',
                    height: '210px',
                    overflow: 'hidden',
                    backgroundColor: isDark ? '#0D0C0B' : '#EAE3D9',
                  }}
                >
                  <img
                    src={cat.image}
                    alt={cat.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)',
                    }}
                    className="col-card-img"
                  />
                  {/* Subtle Gradient Shadow */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: isDark 
                        ? 'linear-gradient(to top, rgba(24, 23, 21, 0.95) 0%, transparent 60%)'
                        : 'linear-gradient(to top, rgba(0, 0, 0, 0.5) 0%, transparent 60%)',
                      pointerEvents: 'none',
                    }}
                  />
                  {/* Category Pill Tag */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '0.85rem',
                      left: '0.85rem',
                      padding: '0.25rem 0.6rem',
                      backgroundColor: isDark ? 'rgba(20, 19, 18, 0.8)' : 'rgba(255, 255, 255, 0.85)',
                      backdropFilter: 'blur(8px)',
                      border: `1px solid ${colors.borderCard}`,
                      borderRadius: '9999px',
                      fontSize: '0.65rem',
                      letterSpacing: '0.1em',
                      color: colors.accentGold,
                      textTransform: 'uppercase',
                      fontWeight: 600,
                    }}
                  >
                    {cat.badge}
                  </div>
                </div>

                {/* Content */}
                <div
                  style={{
                    padding: '1.4rem 1.25rem',
                    display: 'flex',
                    flexDirection: 'column',
                    flexGrow: 1,
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <h3
                      style={{
                        fontFamily: "'Cormorant Garamond', Georgia, serif",
                        fontSize: '1.3rem',
                        color: colors.textPrimary,
                        fontWeight: 600,
                        marginBottom: '0.5rem',
                      }}
                    >
                      {cat.title}
                    </h3>
                    <p
                      style={{
                        fontSize: '0.82rem',
                        color: colors.textSecondary,
                        lineHeight: 1.5,
                        fontWeight: 300,
                        margin: 0,
                      }}
                    >
                      {cat.description}
                    </p>
                  </div>

                  {/* Explore Link */}
                  <div
                    style={{
                      marginTop: '1.25rem',
                      paddingTop: '0.85rem',
                      borderTop: `1px solid ${colors.borderSubtle}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      fontSize: '0.75rem',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: colors.accentGold,
                      fontWeight: 600,
                    }}
                  >
                    <span>Explore</span>
                    <ArrowUpRight size={14} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================
          4. FEATURED SHOWROOM EXPERIENCE (SPLIT LAYOUT)
          ================================================== */}
      <section
        id="showroom-experience"
        style={{
          padding: '6.5rem 0',
          backgroundColor: colors.bgSectionAlt,
          borderTop: `1px solid ${colors.borderSubtle}`,
          borderBottom: `1px solid ${colors.borderSubtle}`,
          position: 'relative',
          transition: 'background-color 0.35s ease, border-color 0.3s ease',
        }}
      >
        <div className="container-luxury">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(300px, 1fr) 1.15fr',
              gap: '3.5rem',
              alignItems: 'center',
            }}
            className="showroom-split-grid"
          >
            {/* LEFT: REAL SHOWROOM PHOTO */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              style={{
                position: 'relative',
                borderRadius: '14px',
                overflow: 'hidden',
                border: `1px solid ${colors.borderCard}`,
                boxShadow: isDark ? '0 20px 50px rgba(0, 0, 0, 0.5)' : '0 15px 40px rgba(0, 0, 0, 0.09)',
                height: '420px',
                backgroundColor: isDark ? '#0D0C0B' : '#EAE3D9',
              }}
              className="showroom-photo-wrapper"
            >
              <img
                src="/assets/youtube-silver-play-button.jpg"
                alt="Gujarat Wallpaper & Decor Surat Showroom Interior"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center 20%',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(20, 19, 18, 0.75) 0%, transparent 55%)',
                }}
              />
              {/* Bottom Showroom Badge */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '1.25rem',
                  left: '1.25rem',
                  right: '1.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.75rem 1.25rem',
                  backgroundColor: 'rgba(20, 19, 18, 0.85)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '8px',
                  border: '1px solid rgba(197, 168, 128, 0.25)',
                }}
              >
                <div>
                  <div style={{ fontSize: '0.86rem', fontWeight: 600, color: '#F7F4EE' }}>
                    Gujarat Wallpaper &amp; Decor
                  </div>
                  <div style={{ fontSize: '0.72rem', color: '#C5A880', letterSpacing: '0.04em' }}>
                    Surat Flagship Showroom
                  </div>
                </div>
                <Navigation size={18} color="#C5A880" />
              </div>
            </motion.div>

            {/* RIGHT: CONTENT & SHOWROOM DETAILS */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.72rem',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: colors.accentGold,
                  fontWeight: 600,
                  marginBottom: '0.85rem',
                }}
              >
                <Eye size={14} />
                THE PHYSICAL EXPERIENCE
              </div>

              <h2
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: 'clamp(2.35rem, 3.8vw, 3.25rem)',
                  color: colors.textPrimary,
                  fontWeight: 500,
                  lineHeight: 1.15,
                  marginBottom: '1rem',
                }}
              >
                Visit Our Showroom
              </h2>

              <p
                style={{
                  fontSize: '1.02rem',
                  color: colors.textSecondary,
                  lineHeight: 1.7,
                  fontWeight: 300,
                  marginBottom: '1.75rem',
                  maxWidth: '520px',
                }}
              >
                Experience wallpapers and decor materials in person and find the perfect finish for your space.
              </p>

              {/* Showroom Bullet Points */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem', marginBottom: '2.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <CheckCircle2 size={18} color={colors.accentGold} style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span style={{ fontSize: '0.88rem', color: colors.textSecondary, lineHeight: 1.5 }}>
                    <strong style={{ color: colors.textPrimary }}>Touch &amp; Feel Quality:</strong> Inspect authentic metallic wallpapers, 3D PVC fluted slats, and hand-tufted carpets.
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <CheckCircle2 size={18} color={colors.accentGold} style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span style={{ fontSize: '0.88rem', color: colors.textSecondary, lineHeight: 1.5 }}>
                    <strong style={{ color: colors.textPrimary }}>Architectural Lighting:</strong> Observe true-to-life color reproduction under specialized showroom illumination.
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <CheckCircle2 size={18} color={colors.accentGold} style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span style={{ fontSize: '0.88rem', color: colors.textSecondary, lineHeight: 1.5 }}>
                    <strong style={{ color: colors.textPrimary }}>Prime Surat Location:</strong> Mangaldas Shopping Centre, Near Navjivan Circle, Udhana-Magdalla Rd, Surat.
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                <a
                  href="https://maps.google.com/?q=Mangaldas+Shopping+Centre+Surat"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.65rem',
                    padding: '0.85rem 1.8rem',
                    backgroundColor: colors.accentGold,
                    color: isDark ? '#141312' : '#FFFFFF',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    borderRadius: '4px',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = colors.accentGoldHover)}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = colors.accentGold)}
                >
                  <Navigation size={15} />
                  <span>GET DIRECTIONS</span>
                </a>

                <a
                  href="https://wa.me/919265785158?text=Hello%20Gujarat%20Wallpaper,%20I%20would%20like%20to%20visit%20your%20Surat%20showroom."
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.65rem',
                    padding: '0.85rem 1.8rem',
                    backgroundColor: 'transparent',
                    color: colors.textPrimary,
                    fontSize: '0.8rem',
                    fontWeight: 500,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    borderRadius: '4px',
                    border: `1px solid ${colors.borderCard}`,
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = isDark ? 'rgba(197, 168, 128, 0.1)' : 'rgba(166, 131, 83, 0.1)';
                    e.currentTarget.style.borderColor = colors.accentGold;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.borderColor = colors.borderCard;
                  }}
                >
                  <MessageCircle size={15} color="#25D366" />
                  <span>WHATSAPP ENQUIRY</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==================================================
          5. WHY CHOOSE US PREVIEW (3 CONCISE POINTS + CTA)
          ================================================== */}
      <section
        id="why-choose-us-preview"
        style={{
          padding: '6.5rem 0',
          backgroundColor: colors.bgMain,
          position: 'relative',
          transition: 'background-color 0.35s ease',
        }}
      >
        <div className="container-luxury">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3.5rem' }}>
            <div
              style={{
                fontSize: '0.72rem',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: colors.accentGold,
                fontWeight: 600,
                marginBottom: '0.75rem',
              }}
            >
              SHOWROOM EXCELLENCE
            </div>

            <h2
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: 'clamp(2.35rem, 4vw, 3.4rem)',
                color: colors.textPrimary,
                fontWeight: 500,
                marginBottom: '0.85rem',
              }}
            >
              Why Gujarat Wallpaper &amp; Decor?
            </h2>

            <p style={{ fontSize: '0.98rem', color: colors.textSecondary, lineHeight: 1.65, fontWeight: 300 }}>
              Trusted by Surat's top architects, interior decorators, and discerning homeowners.
            </p>
          </div>

          {/* 3 Concise Highlight Cards */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1.5rem',
              marginBottom: '3rem',
            }}
            className="why-preview-grid"
          >
            {whyHighlights.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  style={{
                    backgroundColor: colors.bgCard,
                    border: `1px solid ${colors.borderCard}`,
                    borderRadius: '10px',
                    padding: '2.5rem 2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    boxShadow: isDark ? '0 8px 24px rgba(0, 0, 0, 0.3)' : '0 4px 16px rgba(0, 0, 0, 0.04)',
                    transition: 'all 0.3s ease',
                  }}
                  className="why-preview-card"
                >
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '8px',
                      backgroundColor: isDark ? 'rgba(197, 168, 128, 0.12)' : 'rgba(166, 131, 83, 0.12)',
                      border: `1px solid ${colors.borderCard}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: colors.accentGold,
                      marginBottom: '1.5rem',
                    }}
                  >
                    <IconComponent size={20} />
                  </div>

                  <h3
                    style={{
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                      fontSize: '1.45rem',
                      color: colors.textPrimary,
                      fontWeight: 600,
                      marginBottom: '0.75rem',
                    }}
                  >
                    {item.title}
                  </h3>

                  <p
                    style={{
                      fontSize: '0.88rem',
                      color: colors.textSecondary,
                      lineHeight: 1.65,
                      fontWeight: 300,
                      margin: 0,
                    }}
                  >
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* VIEW WHY CHOOSE US BUTTON */}
          <div style={{ textAlign: 'center' }}>
            <button
              onClick={() => navigate('/why-choose-us')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.65rem',
                padding: '0.9rem 2.25rem',
                backgroundColor: 'transparent',
                color: colors.accentGold,
                fontSize: '0.82rem',
                fontWeight: 600,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                borderRadius: '4px',
                border: `1px solid ${colors.accentGold}`,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = colors.accentGold;
                e.currentTarget.style.color = isDark ? '#141312' : '#FFFFFF';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = colors.accentGold;
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <span>VIEW WHY CHOOSE US</span>
              <ArrowUpRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* ==================================================
          6. SOCIAL PROOF (COMPACT SOCIAL PRESENCE)
          ================================================== */}
      <section
        id="social-presence"
        style={{
          padding: '5.5rem 0',
          backgroundColor: colors.bgSectionAlt,
          borderTop: `1px solid ${colors.borderSubtle}`,
          borderBottom: `1px solid ${colors.borderSubtle}`,
          position: 'relative',
          transition: 'background-color 0.35s ease, border-color 0.3s ease',
        }}
      >
        <div className="container-luxury">
          <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 3rem' }}>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: 'clamp(2.2rem, 3.5vw, 3rem)',
                color: colors.textPrimary,
                fontWeight: 500,
                marginBottom: '0.75rem',
              }}
            >
              Follow Our Work
            </h2>

            <p style={{ fontSize: '0.98rem', color: colors.textSecondary, lineHeight: 1.6, fontWeight: 300 }}>
              See our latest wallpaper installations, showroom updates and interior transformations.
            </p>
          </div>

          {/* TWO PREMIUM SOCIAL CTA CARDS */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '1.5rem',
              maxWidth: '920px',
              margin: '0 auto',
            }}
            className="social-cta-grid"
          >
            {/* INSTAGRAM */}
            <a
              href="https://www.instagram.com/gujrat_wallpaper_decor/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: 'none',
                backgroundColor: colors.bgCard,
                border: '1px solid rgba(225, 48, 108, 0.3)',
                borderRadius: '12px',
                padding: '1.5rem 1.85rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '1rem',
                boxShadow: isDark ? '0 8px 24px rgba(0, 0, 0, 0.3)' : '0 4px 16px rgba(0, 0, 0, 0.04)',
                transition: 'all 0.35s ease',
              }}
              className="social-strip-card instagram-strip-card"
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#FFFFFF',
                    flexShrink: 0,
                  }}
                >
                  <InstagramIcon size={22} color="#FFFFFF" />
                </div>
                <div>
                  <div style={{ fontSize: '1.05rem', fontWeight: 600, color: colors.textPrimary, marginBottom: '0.15rem' }}>
                    Follow Us on Instagram
                  </div>
                  <div style={{ fontSize: '0.82rem', color: colors.accentGold }}>
                    @gujrat_wallpaper_decor
                  </div>
                </div>
              </div>

              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  backgroundColor: isDark ? 'rgba(197, 168, 128, 0.1)' : 'rgba(166, 131, 83, 0.1)',
                  border: `1px solid ${colors.borderCard}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: colors.textPrimary,
                  flexShrink: 0,
                }}
                className="social-strip-arrow"
              >
                <ArrowUpRight size={18} />
              </div>
            </a>

            {/* YOUTUBE */}
            <a
              href="https://www.youtube.com/@Gujaratwallpaper"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: 'none',
                backgroundColor: colors.bgCard,
                border: '1px solid rgba(255, 0, 0, 0.3)',
                borderRadius: '12px',
                padding: '1.5rem 1.85rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '1rem',
                boxShadow: isDark ? '0 8px 24px rgba(0, 0, 0, 0.3)' : '0 4px 16px rgba(0, 0, 0, 0.04)',
                transition: 'all 0.35s ease',
              }}
              className="social-strip-card youtube-strip-card"
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    backgroundColor: '#FF0000',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#FFFFFF',
                    flexShrink: 0,
                  }}
                >
                  <YouTubeIcon size={22} color="#FFFFFF" />
                </div>
                <div>
                  <div style={{ fontSize: '1.05rem', fontWeight: 600, color: colors.textPrimary, marginBottom: '0.15rem' }}>
                    Subscribe on YouTube
                  </div>
                  <div style={{ fontSize: '0.82rem', color: colors.accentGold }}>
                    @Gujaratwallpaper
                  </div>
                </div>
              </div>

              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  backgroundColor: isDark ? 'rgba(197, 168, 128, 0.1)' : 'rgba(166, 131, 83, 0.1)',
                  border: `1px solid ${colors.borderCard}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: colors.textPrimary,
                  flexShrink: 0,
                }}
                className="social-strip-arrow"
              >
                <ArrowUpRight size={18} />
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* ==================================================
          7. FINAL CTA
          ================================================== */}
      <section
        id="final-cta"
        style={{
          padding: '6rem 0',
          backgroundColor: colors.bgMain,
          position: 'relative',
          textAlign: 'center',
          transition: 'background-color 0.35s ease',
        }}
      >
        <div className="container-luxury" style={{ maxWidth: '780px' }}>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(2.4rem, 4vw, 3.5rem)',
              color: colors.textPrimary,
              fontWeight: 500,
              marginBottom: '1rem',
              lineHeight: 1.2,
            }}
          >
            Ready to Transform Your Space?
          </h2>

          <p
            style={{
              fontSize: '1.05rem',
              color: colors.textSecondary,
              lineHeight: 1.7,
              fontWeight: 300,
              marginBottom: '2.5rem',
            }}
          >
            Visit our showroom or connect with us to explore the right wallpaper and decor solution for your space.
          </p>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: '1.25rem',
            }}
          >
            <a
              href="https://wa.me/919265785158?text=Hello%20Gujarat%20Wallpaper,%20I%20would%20like%20to%20enquire%20about%20your%20decor%20solutions."
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.65rem',
                padding: '0.95rem 2.2rem',
                backgroundColor: '#25D366',
                color: '#FFFFFF',
                fontSize: '0.82rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                borderRadius: '4px',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                boxShadow: '0 6px 20px rgba(37, 211, 102, 0.25)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#1EBE5D';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#25D366';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <MessageCircle size={17} />
              <span>WHATSAPP ENQUIRY</span>
            </a>

            <button
              onClick={() => navigate('/contact')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.65rem',
                padding: '0.95rem 2.2rem',
                backgroundColor: 'transparent',
                color: colors.textPrimary,
                fontSize: '0.82rem',
                fontWeight: 500,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                borderRadius: '4px',
                border: `1px solid ${colors.borderCard}`,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = colors.accentGold;
                e.currentTarget.style.backgroundColor = isDark ? 'rgba(197, 168, 128, 0.1)' : 'rgba(166, 131, 83, 0.1)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = colors.borderCard;
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <span>VISIT SHOWROOM</span>
            </button>
          </div>
        </div>
      </section>

      {/* Scoped CSS for Home Page Interactive Elements & Responsiveness */}
      <style>{`
        .collection-preview-card:hover {
          transform: translateY(-6px);
          border-color: ${colors.accentGold} !important;
          box-shadow: ${isDark ? '0 16px 36px rgba(0, 0, 0, 0.55)' : '0 14px 30px rgba(0, 0, 0, 0.08)'};
        }
        .collection-preview-card:hover .col-card-img {
          transform: scale(1.05);
        }

        .hero-badges-row {
          transition: all 0.3s ease;
        }

        .why-preview-card:hover {
          transform: translateY(-5px);
          border-color: ${colors.accentGold} !important;
          box-shadow: ${isDark ? '0 16px 36px rgba(0, 0, 0, 0.5)' : '0 12px 28px rgba(0, 0, 0, 0.08)'};
        }

        .social-strip-card:hover {
          transform: translateY(-4px);
        }
        .instagram-strip-card:hover {
          border-color: rgba(225, 48, 108, 0.7) !important;
          background-color: ${isDark ? 'rgba(35, 25, 30, 0.95)' : '#FFF0F5'} !important;
        }
        .instagram-strip-card:hover .social-strip-arrow {
          background-color: #E1306C !important;
          border-color: #E1306C !important;
          color: #FFFFFF !important;
        }
        .youtube-strip-card:hover {
          border-color: rgba(255, 0, 0, 0.7) !important;
          background-color: ${isDark ? 'rgba(35, 20, 20, 0.95)' : '#FFF5F5'} !important;
        }
        .youtube-strip-card:hover .social-strip-arrow {
          background-color: #FF0000 !important;
          border-color: #FF0000 !important;
          color: #FFFFFF !important;
        }

        /* Responsive Breakpoints */
        @media (max-width: 1024px) {
          .collections-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
          .showroom-split-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
          .why-preview-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .trust-strip-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 1.5rem !important;
          }
          .trust-strip-item {
            border-left: none !important;
            padding-left: 0 !important;
          }
          .social-cta-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }

        @media (max-width: 768px) {
          #hero {
            padding-top: 6rem !important;
            padding-bottom: 2.5rem !important;
          }
          .hero-wallpaper-layer {
            background-position: 70% center !important;
            opacity: 1 !important;
          }
          .hero-gradient-overlay {
            background: ${isDark
              ? `
                linear-gradient(to bottom, 
                  rgba(20, 19, 18, 0.94) 0%, 
                  rgba(20, 19, 18, 0.76) 35%, 
                  rgba(20, 19, 18, 0.48) 65%, 
                  rgba(20, 19, 18, 0.92) 100%),
                linear-gradient(to right, 
                  rgba(20, 19, 18, 0.7) 0%, 
                  transparent 70%)
              `
              : `
                linear-gradient(to bottom, 
                  rgba(251, 249, 245, 0.94) 0%, 
                  rgba(251, 249, 245, 0.72) 35%, 
                  rgba(251, 249, 245, 0.35) 65%, 
                  rgba(251, 249, 245, 0.92) 100%),
                linear-gradient(to right, 
                  rgba(251, 249, 245, 0.75) 0%, 
                  transparent 70%)
              `} !important;
          }
          .hero-badges-row {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 1rem !important;
          }
          .collections-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .social-cta-grid {
            grid-template-columns: 1fr !important;
          }
          .why-preview-grid {
            grid-template-columns: 1fr !important;
          }
          .trust-strip-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 1.25rem !important;
          }
          .trust-strip-item {
            border-left: none !important;
            padding-left: 0 !important;
          }
          #collections-preview,
          #showroom-location,
          #social-cta,
          #why-preview {
            padding: 5rem 0 !important;
          }
        }

        @media (max-width: 480px) {
          #hero {
            padding-top: 5.5rem !important;
            padding-bottom: 2rem !important;
            min-height: auto !important;
          }
          .hero-badges-row {
            grid-template-columns: 1fr !important;
            gap: 0.85rem !important;
          }
          .collections-grid {
            grid-template-columns: 1fr !important;
          }
          .trust-strip-grid {
            grid-template-columns: 1fr !important;
            gap: 1rem !important;
          }
          .trust-strip-item {
            border-left: none !important;
            padding-left: 0 !important;
            padding-top: 1rem !important;
            border-top: 1px solid ${colors.borderSubtle} !important;
          }
          .why-preview-grid {
            grid-template-columns: 1fr !important;
          }
          .social-cta-grid {
            grid-template-columns: 1fr !important;
          }
          #collections-preview,
          #showroom-location,
          #social-cta,
          #why-preview {
            padding: 4rem 0 !important;
          }
        }
      `}</style>
    </div>
  );
}
