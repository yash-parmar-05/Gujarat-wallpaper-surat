import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Sparkles,
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
import ShowroomModal from '../components/ShowroomModal';
import CatalogsSection from '../components/CatalogsSection';

// 6 actual showroom photos converted from HEIC to JPEG (browser-compatible)
// showroom-06 is placed first as requested, followed by 01, 02, 03, 04, 05
const HERO_SLIDES = [
  {
    image: '/showroom/showroom-06.webp',
    fallback: '/showroom/showroom-06.jpg',
    label: 'Showroom Interiors – Main Gallery & Grand Hallway',
    position: 'center 62%',
  },
  {
    image: '/showroom/showroom-01.webp',
    fallback: '/showroom/showroom-01.jpg',
    label: 'Showroom Interiors – Wallpaper Showcase & Consult Area',
    position: 'center 56%',
  },
  {
    image: '/showroom/showroom-02.webp',
    fallback: '/showroom/showroom-02.jpg',
    label: 'Showroom Interiors – Grand Wall Display & Signage',
    position: 'center 52%',
  },
  {
    image: '/showroom/showroom-03.webp',
    fallback: '/showroom/showroom-03.jpg',
    label: 'Showroom Interiors – Feature Wall & Selection Area',
    position: 'center 52%',
  },
  {
    image: '/showroom/showroom-04.webp',
    fallback: '/showroom/showroom-04.jpg',
    label: 'Showroom Interiors – Wallpaper Rolls Gallery',
    position: 'center 62%',
  },
  {
    image: '/showroom/showroom-05.webp',
    fallback: '/showroom/showroom-05.jpg',
    label: 'Showroom Interiors – PVC Louvers & Architectural Panels',
    position: 'center 58%',
  },
];

// Custom SVG Icons for Instagram & YouTube for precision luxury styling
function InstagramIcon({ size = 22, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function YouTubeIcon({ size = 22, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function FacebookIcon({ size = 22, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export default function Home() {
  const navigate = useNavigate();
  const { isDark } = useTheme();
  const [activeHeroSlide, setActiveHeroSlide] = useState(0);
  const [isShowroomModalOpen, setIsShowroomModalOpen] = useState(false);

  // Allow other components/buttons to trigger the showroom modal
  useEffect(() => {
    const handleOpenModal = () => setIsShowroomModalOpen(true);
    window.addEventListener('open-showroom-modal', handleOpenModal);
    return () => window.removeEventListener('open-showroom-modal', handleOpenModal);
  }, []);

  // Pre-cache all 6 showroom images once on mount
  useEffect(() => {
    HERO_SLIDES.forEach((slide) => {
      const img = new Image();
      img.src = slide.image;
    });
  }, []);

  // Smooth automatic slideshow rotation (Every 4 seconds)
  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveHeroSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 4000);

    return () => window.clearInterval(timer);
  }, []);

  const changeHeroSlide = (direction) => {
    setActiveHeroSlide((prev) => (prev + direction + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  // Signature Luxury Dark Theme Colors
  const colors = {
    bgMain: '#121110',
    bgSectionAlt: '#161513',
    bgCard: '#181715',
    bgCardHover: '#201E1B',
    textPrimary: '#F7F4EE',
    textSecondary: '#C8C2B7',
    textMuted: '#948E85',
    accentGold: '#C5A880',
    accentGoldHover: '#DFCAAD',
    borderSubtle: 'rgba(245, 242, 236, 0.08)',
    borderCard: 'rgba(197, 168, 128, 0.22)',
  };

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

      {/* =========================================
          HERO SECTION — Unified Luxury Showroom Slideshow
          ========================================= */}
      <section
        id="hero"
        style={{
          position: 'relative',
          minHeight: '100vh',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: colors.bgMain,
          overflow: 'hidden',
          transition: 'background-color 0.35s ease',
        }}
        aria-label="Gujarat Wallpaper Showroom Hero Section"
      >
        {/* ── 1. Full-Width Background Slideshow Stack ── */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            zIndex: 0,
            overflow: 'hidden',
            pointerEvents: 'none',
          }}
          aria-hidden="true"
        >
          {HERO_SLIDES.map((slide, slideIndex) => {
            const isActive = slideIndex === activeHeroSlide;
            return (
              <div
                key={`hero-bg-${slide.image}`}
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  opacity: isActive ? 1 : 0,
                  visibility: isActive ? 'visible' : 'hidden',
                  transition: 'opacity 1.2s cubic-bezier(0.4, 0, 0.2, 1), visibility 1.2s cubic-bezier(0.4, 0, 0.2, 1)',
                  willChange: 'opacity',
                }}
              >
                <img
                  src={slide.image}
                  alt={slide.label}
                  className="hero-slide-img"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: slide.position,
                    display: 'block',
                    transform: isActive ? 'scale(1)' : 'scale(1.04)',
                    transition: 'transform 4.5s ease-out',
                  }}
                  loading={slideIndex === 0 ? 'eager' : 'lazy'}
                  decoding="async"
                />
              </div>
            );
          })}

          {/* ── Seamless Multi-Directional Luxury Gradient Overlay (Subtle & Natural) ── */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: `linear-gradient(90deg, rgba(18, 17, 16, 0.78) 0%, rgba(18, 17, 16, 0.52) 36%, rgba(18, 17, 16, 0.18) 68%, rgba(18, 17, 16, 0.04) 100%), linear-gradient(180deg, rgba(18, 17, 16, 0.45) 0%, transparent 16%, transparent 78%, rgba(18, 17, 16, 0.75) 100%)`,
              zIndex: 1,
            }}
          />
        </div>

        {/* ── 2. Unified Hero Content Canvas ── */}
        <div
          className="hero-main-container"
          style={{
            position: 'relative',
            zIndex: 2,
            width: '100%',
            maxWidth: '1440px',
            margin: '0 auto',
            padding: '6.5rem 2rem 2rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            flex: 1,
          }}
        >
          {/* Upper Row: Left Brand Narrative & Right Minimal Luxury Slider Controls */}
          <div
            className="hero-upper-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 1.25fr) minmax(0, 0.75fr)',
              gap: '2.5rem',
              alignItems: 'center',
              marginBottom: '2.5rem',
            }}
          >
            {/* Left Column: Brand Content */}
            <div style={{ maxWidth: '640px' }} className="hero-text-block">
              {/* Eyebrow badge */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="hero-eyebrow"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.4rem 0.95rem',
                  backgroundColor: 'rgba(197, 168, 128, 0.12)',
                  backdropFilter: 'blur(8px)',
                  border: `1px solid ${colors.borderCard}`,
                  borderRadius: '9999px',
                  fontSize: '0.72rem',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: colors.accentGold,
                  fontWeight: 600,
                  marginBottom: '1.4rem',
                  width: 'fit-content',
                }}
              >
                <Sparkles size={13} />
                SURAT SHOWROOM • GUJARAT WALLPAPER &amp; DECOR
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="hero-heading"
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: 'clamp(2.6rem, 4.4vw, 4.4rem)',
                  lineHeight: 1.1,
                  color: colors.textPrimary,
                  fontWeight: 500,
                  letterSpacing: '0.01em',
                  marginBottom: '1.4rem',
                  textShadow: '0 2px 16px rgba(0, 0, 0, 0.7)',
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
                className="hero-description"
                style={{
                  fontSize: '1.08rem',
                  color: colors.textSecondary,
                  lineHeight: 1.7,
                  maxWidth: '520px',
                  fontWeight: 300,
                  marginBottom: '2.2rem',
                  textShadow: '0 1px 10px rgba(0, 0, 0, 0.6)',
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
                  gap: '1.15rem',
                  marginBottom: '2.2rem',
                }}
                className="hero-cta-buttons"
              >
                <button
                  onClick={() => {
                    const el = document.getElementById('catalogs');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.65rem',
                    padding: '0.95rem 2.2rem',
                    backgroundColor: colors.accentGold,
                    color: '#121110',
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    borderRadius: '4px',
                    border: 'none',
                    cursor: 'pointer',
                    boxShadow: '0 4px 16px rgba(197, 168, 128, 0.25)',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = colors.accentGoldHover;
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(197,168,128,0.35)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = colors.accentGold;
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <span>EXPLORE CATALOGS</span>
                  <ArrowUpRight size={16} />
                </button>

                <button
                  onClick={() => setIsShowroomModalOpen(true)}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.65rem',
                    padding: '0.95rem 2rem',
                    backgroundColor: 'rgba(18, 17, 16, 0.6)',
                    backdropFilter: 'blur(8px)',
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
                    e.currentTarget.style.backgroundColor = 'rgba(197, 168, 128, 0.15)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = colors.borderCard;
                    e.currentTarget.style.backgroundColor = 'rgba(18, 17, 16, 0.6)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <span>VISIT SHOWROOM</span>
                </button>
              </motion.div>

              {/* 3 Value-Prop Highlights */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                  gap: '1.25rem',
                  maxWidth: '560px',
                  paddingTop: '1.25rem',
                  borderTop: `1px solid ${colors.borderSubtle}`,
                  marginBottom: '1.25rem',
                }}
                className="hero-badges-row"
              >
                <div className="hero-badge-card" style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
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

                <div className="hero-badge-card" style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                  <Users size={19} color={colors.accentGold} style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <div style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: colors.textPrimary }}>
                      Expert Guidance
                    </div>
                    <div style={{ fontSize: '0.74rem', color: colors.textSecondary, lineHeight: 1.4, marginTop: '2px' }}>
                      Personalized support
                    </div>
                  </div>
                </div>

                <div className="hero-badge-card" style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                  <Layers size={19} color={colors.accentGold} style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <div style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: colors.textPrimary }}>
                      Complete Solutions
                    </div>
                    <div style={{ fontSize: '0.74rem', color: colors.textSecondary, lineHeight: 1.4, marginTop: '2px' }}>
                      Everything under one roof
                    </div>
                  </div>
                </div>
              </motion.div>


            </div>
          </div>

          {/* ── 3. Bottom Integrated Bar: Statistics ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="hero-bottom-bar"
            style={{
              marginTop: '2.5rem',
              padding: '1.2rem 1.8rem',
              borderRadius: '16px',
              backgroundColor: 'rgba(22, 20, 19, 0.85)',
              backdropFilter: 'blur(20px)',
              border: `1px solid rgba(197, 168, 128, 0.22)`,
              boxShadow: '0 20px 48px rgba(0, 0, 0, 0.55)',
            }}
          >
            {/* Integrated Stats Grid */}
            <div
              className="hero-stats-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(5, 1fr)',
                gap: '1.25rem',
                alignItems: 'center',
              }}
            >
              {/* Stat 1: Instagram */}
              <div className="hero-stat-card" style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                <div
                  className="hero-stat-icon"
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '12px',
                    border: '1px solid rgba(197, 168, 128, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    backgroundColor: 'rgba(197, 168, 128, 0.08)',
                  }}
                >
                  <InstagramIcon size={19} color={colors.accentGold} />
                </div>
                <div>
                  <div className="hero-stat-number" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.55rem', fontWeight: 700, color: colors.textPrimary, lineHeight: 1.1 }}>
                    100K+
                  </div>
                  <div className="hero-stat-label" style={{ fontSize: '0.62rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: colors.accentGold, marginTop: '2px' }}>
                    Instagram
                  </div>
                </div>
              </div>

              {/* Stat 2: YouTube */}
              <div className="hero-stat-card hero-stat-item" style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', borderLeft: `1px solid ${colors.borderSubtle}`, paddingLeft: '1.25rem' }}>
                <div
                  className="hero-stat-icon"
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '12px',
                    border: '1px solid rgba(197, 168, 128, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    backgroundColor: 'rgba(197, 168, 128, 0.08)',
                  }}
                >
                  <YouTubeIcon size={19} color={colors.accentGold} />
                </div>
                <div>
                  <div className="hero-stat-number" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.55rem', fontWeight: 700, color: colors.textPrimary, lineHeight: 1.1 }}>
                    160K+
                  </div>
                  <div className="hero-stat-label" style={{ fontSize: '0.62rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: colors.accentGold, marginTop: '2px' }}>
                    YouTube
                  </div>
                </div>
              </div>

              {/* Stat 3: Facebook */}
              <div className="hero-stat-card hero-stat-item" style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', borderLeft: `1px solid ${colors.borderSubtle}`, paddingLeft: '1.25rem' }}>
                <div
                  className="hero-stat-icon"
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '12px',
                    border: '1px solid rgba(197, 168, 128, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    backgroundColor: 'rgba(197, 168, 128, 0.08)',
                  }}
                >
                  <FacebookIcon size={19} color={colors.accentGold} />
                </div>
                <div>
                  <div className="hero-stat-number" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.55rem', fontWeight: 700, color: colors.textPrimary, lineHeight: 1.1 }}>
                    300K+
                  </div>
                  <div className="hero-stat-label" style={{ fontSize: '0.62rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: colors.accentGold, marginTop: '2px' }}>
                    Facebook
                  </div>
                </div>
              </div>

              {/* Stat 4: Customers */}
              <div className="hero-stat-card hero-stat-item" style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', borderLeft: `1px solid ${colors.borderSubtle}`, paddingLeft: '1.25rem' }}>
                <div
                  className="hero-stat-icon"
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '12px',
                    border: '1px solid rgba(197, 168, 128, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    backgroundColor: 'rgba(197, 168, 128, 0.08)',
                  }}
                >
                  <Users size={19} color={colors.accentGold} />
                </div>
                <div>
                  <div className="hero-stat-number" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.55rem', fontWeight: 700, color: colors.textPrimary, lineHeight: 1.1 }}>
                    20K+
                  </div>
                  <div className="hero-stat-label" style={{ fontSize: '0.62rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: colors.accentGold, marginTop: '2px' }}>
                    Customers
                  </div>
                </div>
              </div>

              {/* Stat 5: Excellence */}
              <div className="hero-stat-card hero-stat-item" style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', borderLeft: `1px solid ${colors.borderSubtle}`, paddingLeft: '1.25rem' }}>
                <div
                  className="hero-stat-icon"
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '12px',
                    border: '1px solid rgba(197, 168, 128, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    backgroundColor: 'rgba(197, 168, 128, 0.08)',
                  }}
                >
                  <Award size={19} color={colors.accentGold} />
                </div>
                <div>
                  <div className="hero-stat-number" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.55rem', fontWeight: 700, color: colors.textPrimary, lineHeight: 1.1 }}>
                    5+ Yrs
                  </div>
                  <div className="hero-stat-label" style={{ fontSize: '0.62rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: colors.accentGold, marginTop: '2px' }}>
                    Excellence
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ==================================================
          3. CATALOGS SECTION (2 EXCLUSIVE WALLPAPER PDFS)
          ================================================== */}
      <CatalogsSection id="catalogs" />


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
                    <strong style={{ color: colors.textPrimary }}>Main Polaris Branch:</strong> Shop No. 154, Polaris Mall, Puna Canal Road, Surat.
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Shop+No.+154+Polaris+Mall+Puna+Canal+Road+Surat"
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
                  href="https://wa.me/918320802633?text=Hello%20Gujarat%20Wallpaper,%20I%20would%20like%20to%20visit%20your%20Surat%20showroom."
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

          {/* THREE PREMIUM SOCIAL CTA CARDS */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1.5rem',
              maxWidth: '1160px',
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

            {/* FACEBOOK */}
            <a
              href="https://www.facebook.com/share/19FULrAcv3/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: 'none',
                backgroundColor: colors.bgCard,
                border: '1px solid rgba(24, 119, 242, 0.3)',
                borderRadius: '12px',
                padding: '1.5rem 1.85rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '1rem',
                boxShadow: isDark ? '0 8px 24px rgba(0, 0, 0, 0.3)' : '0 4px 16px rgba(0, 0, 0, 0.04)',
                transition: 'all 0.35s ease',
              }}
              className="social-strip-card facebook-strip-card"
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    backgroundColor: '#1877F2',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#FFFFFF',
                    flexShrink: 0,
                  }}
                >
                  <FacebookIcon size={22} color="#FFFFFF" />
                </div>
                <div>
                  <div style={{ fontSize: '1.05rem', fontWeight: 600, color: colors.textPrimary, marginBottom: '0.15rem' }}>
                    Follow Us on Facebook
                  </div>
                  <div style={{ fontSize: '0.82rem', color: colors.accentGold }}>
                    Arun Vala
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
              href="https://wa.me/918320802633?text=Hello%20Gujarat%20Wallpaper,%20I%20would%20like%20to%20enquire%20about%20your%20decor%20solutions."
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
              onClick={() => setIsShowroomModalOpen(true)}
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

      {/* Showroom Location Modal */}
      <ShowroomModal
        isOpen={isShowroomModalOpen}
        onClose={() => setIsShowroomModalOpen(false)}
      />

      {/* Scoped CSS for Home Page Interactive Elements & Responsiveness */}
      <style>{`
        /* -- Unified Full-Width Hero Styling -- */
        .hero-main-container {
          box-sizing: border-box;
        }

        /* Value badges transition */
        .hero-badges-row {
          transition: all 0.3s ease;
        }

        /* Card hover effects */
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
        .facebook-strip-card:hover {
          border-color: rgba(24, 119, 242, 0.7) !important;
          background-color: ${isDark ? 'rgba(18, 30, 48, 0.95)' : '#F0F5FF'} !important;
        }
        .facebook-strip-card:hover .social-strip-arrow {
          background-color: #1877F2 !important;
          border-color: #1877F2 !important;
          color: #FFFFFF !important;
        }

        /* -- Responsive Breakpoints -- */

        /* Tablet Landscape */
        @media (max-width: 1024px) {
          .showroom-split-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
          .why-preview-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .social-cta-grid {
            grid-template-columns: 1fr !important;
            max-width: 520px !important;
          }
        }

        .hero-stat-card {
          transition: transform 0.25s ease;
        }
        .hero-stat-icon {
          transition: transform 0.25s ease, border-color 0.25s ease, background-color 0.25s ease;
        }
        .hero-stat-card:hover .hero-stat-icon {
          border-color: rgba(197, 168, 128, 0.55) !important;
          background-color: rgba(197, 168, 128, 0.16) !important;
          transform: translateY(-2px);
        }

        /* Tablet Portrait & Large Mobile */
        @media (max-width: 991px) {
          .hero-upper-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
            margin-bottom: 1.5rem !important;
          }
          .hero-text-block {
            max-width: 100% !important;
          }
          .hero-stats-grid {
            grid-template-columns: repeat(3, 1fr) !important;
            gap: 1rem !important;
          }
          .hero-stat-item {
            border-left: none !important;
            padding-left: 0 !important;
          }
        }

        /* Tablet Portrait */
        @media (max-width: 768px) {
          .hero-slide-img {
            object-position: center 50% !important;
          }
          .hero-main-container {
            padding: 5.75rem 1.5rem 1.75rem !important;
          }
          .hero-heading {
            font-size: clamp(2.1rem, 6.5vw, 2.75rem) !important;
            line-height: 1.15 !important;
            margin-bottom: 1rem !important;
          }
          .hero-description {
            font-size: 0.98rem !important;
            line-height: 1.65 !important;
            margin-bottom: 1.5rem !important;
            max-width: 100% !important;
          }
          .hero-cta-buttons {
            gap: 0.85rem !important;
            margin-bottom: 1.75rem !important;
          }
          .hero-badges-row {
            grid-template-columns: repeat(3, 1fr) !important;
            gap: 0.75rem !important;
            padding-top: 1.1rem !important;
            margin-bottom: 1.25rem !important;
          }
          .hero-badge-card {
            background: rgba(255, 255, 255, 0.03) !important;
            border: 1px solid rgba(245, 242, 236, 0.07) !important;
            padding: 0.75rem 0.85rem !important;
            border-radius: 10px !important;
          }

          .hero-bottom-bar {
            margin-top: 1.75rem !important;
            padding: 1rem 1.25rem !important;
            border-radius: 14px !important;
          }
          .hero-stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 1rem !important;
          }
          .hero-stat-item {
            border-left: none !important;
            padding-left: 0 !important;
          }
          .social-cta-grid {
            grid-template-columns: 1fr !important;
          }
          .why-preview-grid {
            grid-template-columns: 1fr !important;
          }
          #showroom-location,
          #social-cta,
          #why-preview {
            padding: 5rem 0 !important;
          }
        }

        /* Mobile Medium */
        @media (max-width: 580px) {
          .hero-badges-row {
            grid-template-columns: 1fr !important;
            gap: 0.65rem !important;
          }
          .hero-badge-card {
            display: flex !important;
            align-items: center !important;
            gap: 0.85rem !important;
            padding: 0.65rem 0.9rem !important;
          }
        }

        /* Mobile Standard */
        @media (max-width: 480px) {
          .hero-main-container {
            padding: 5.25rem 1.15rem 1.5rem !important;
          }
          .hero-eyebrow {
            font-size: 0.64rem !important;
            letter-spacing: 0.14em !important;
            padding: 0.32rem 0.75rem !important;
            margin-bottom: 0.9rem !important;
          }
          .hero-heading {
            font-size: clamp(1.95rem, 8vw, 2.35rem) !important;
            line-height: 1.18 !important;
            margin-bottom: 0.85rem !important;
          }
          .hero-description {
            font-size: 0.92rem !important;
            line-height: 1.6 !important;
            margin-bottom: 1.35rem !important;
          }
          .hero-cta-buttons {
            flex-direction: column !important;
            align-items: stretch !important;
            gap: 0.75rem !important;
            margin-bottom: 1.5rem !important;
          }
          .hero-cta-buttons button {
            width: 100% !important;
            justify-content: center !important;
            padding: 0.85rem 1.25rem !important;
            font-size: 0.8rem !important;
            letter-spacing: 0.1em !important;
          }
          .hero-stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 0.75rem 0.85rem !important;
          }
          .hero-stats-grid > :last-child {
            grid-column: span 2;
            justify-content: center;
          }
          .hero-stat-card {
            padding: 0.4rem 0 !important;
          }
          .hero-stat-number {
            font-size: 1.35rem !important;
          }
          .hero-stat-label {
            font-size: 0.58rem !important;
          }
          .hero-bottom-bar {
            margin-top: 1.25rem !important;
            padding: 0.85rem 1rem !important;
          }
          .why-preview-grid {
            grid-template-columns: 1fr !important;
          }
          .social-cta-grid {
            grid-template-columns: 1fr !important;
          }
          #showroom-location,
          #social-cta,
          #why-preview {
            padding: 4rem 0 !important;
          }
        }

        /* Small Mobile */
        @media (max-width: 360px) {
          .hero-main-container {
            padding: 5rem 0.85rem 1.25rem !important;
          }
          .hero-heading {
            font-size: 1.75rem !important;
          }
          .hero-description {
            font-size: 0.86rem !important;
          }
          .hero-stat-number {
            font-size: 1.2rem !important;
          }
        }
      `}</style>
    </div>
  );
}


