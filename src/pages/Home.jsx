import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
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

import ShowroomModal from '../components/ShowroomModal';
import CatalogsSection from '../components/CatalogsSection';

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

function InstagramIcon({ size = 20, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function YouTubeIcon({ size = 20, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function FacebookIcon({ size = 20, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export default function Home() {
  const navigate = useNavigate();
  const [activeHeroSlide, setActiveHeroSlide] = useState(0);
  const [isShowroomModalOpen, setIsShowroomModalOpen] = useState(false);

  useEffect(() => {
    const handleOpenModal = () => setIsShowroomModalOpen(true);
    window.addEventListener('open-showroom-modal', handleOpenModal);
    return () => window.removeEventListener('open-showroom-modal', handleOpenModal);
  }, []);

  useEffect(() => {
    // Preload next upcoming slide sequentially to preserve bandwidth for initial critical render
    const nextIndex = (activeHeroSlide + 1) % HERO_SLIDES.length;
    const img = new Image();
    img.src = HERO_SLIDES[nextIndex].image;
  }, [activeHeroSlide]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveHeroSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 4500);

    return () => window.clearInterval(timer);
  }, []);

  const whyHighlights = [
    {
      icon: Award,
      tag: '5,000+ Ready Rolls',
      title: '5,000+ Ready Stock in Surat',
      desc: 'No waiting for weeks. Take your favorite wallpaper home today or get same-day delivery across Surat.',
    },
    {
      icon: ShieldCheck,
      tag: 'Fast 24-Hr Fitting',
      title: 'Quick Fitting by Trained Staff',
      desc: 'Our staff installs your wallpaper cleanly in 24 hours with zero bubbles and safe, odorless German glue.',
    },
    {
      icon: Layers,
      tag: '100% Washable',
      title: 'Easy to Clean & Long Lasting',
      desc: 'Wipe clean easily with a wet cloth. Safe from moisture and water, made to last 10 to 15 years.',
    },
  ];

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        overflowX: 'hidden',
        backgroundColor: 'var(--bg-primary, #F8F5F1)',
        color: 'var(--text-primary, #2F2F2F)',
      }}
    >
      {/* =========================================
          HERO SECTION — Full-Bleed Luxury Showroom Showcase
          ========================================= */}
      {/* =========================================
          HERO SECTION — High-End Luxury Showroom Experience
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
          backgroundColor: '#161412',
          overflow: 'hidden',
          transition: 'background-color 0.35s ease',
        }}
        aria-label="Gujarat Wallpaper Showroom Hero Section"
      >
        {/* ── 1. Full-Width Background Slideshow Stack with Ken Burns motion ── */}
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
                  transition: 'opacity 1.4s cubic-bezier(0.4, 0, 0.2, 1), visibility 1.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  willChange: 'opacity, transform',
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
                    transform: isActive ? 'scale(1.05)' : 'scale(1)',
                    transition: 'transform 6s ease-out',
                  }}
                  loading={slideIndex === 0 ? 'eager' : 'lazy'}
                  decoding="async"
                  fetchPriority={slideIndex === 0 ? 'high' : 'auto'}
                />
              </div>
            );
          })}

          {/* ── Multi-Layered Luxury Gradient Overlay for Maximum Readability ── */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: `linear-gradient(105deg, rgba(16, 14, 12, 0.88) 0%, rgba(20, 17, 14, 0.72) 42%, rgba(25, 20, 16, 0.42) 75%, rgba(20, 17, 14, 0.65) 100%)`,
              zIndex: 1,
            }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: `linear-gradient(180deg, rgba(16, 14, 12, 0.65) 0%, transparent 22%, transparent 68%, rgba(16, 14, 12, 0.92) 100%)`,
              zIndex: 1,
            }}
          />
          {/* Subtle warm luxury ambient glow */}
          <div
            style={{
              position: 'absolute',
              top: '15%',
              left: '5%',
              width: '45vw',
              height: '45vw',
              maxWidth: '550px',
              maxHeight: '550px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(200, 169, 106, 0.12) 0%, transparent 70%)',
              filter: 'blur(60px)',
              pointerEvents: 'none',
              zIndex: 1,
            }}
          />
        </div>

        {/* ── 2. Main Hero Content Canvas ── */}
        <div
          className="hero-main-container"
          style={{
            position: 'relative',
            zIndex: 2,
            width: '100%',
            maxWidth: '1440px',
            margin: '0 auto',
            padding: '7.5rem 2rem 2.5rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            flex: 1,
            boxSizing: 'border-box',
          }}
        >
          {/* Upper Row: Brand Content */}
          <div
            className="hero-upper-grid"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              maxWidth: '820px',
              marginBottom: '2.5rem',
            }}
          >
            {/* Brand Content & Action */}
            <div style={{ width: '100%', textAlign: 'left' }} className="hero-text-block">
              {/* Eyebrow badge */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="hero-eyebrow"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.55rem',
                  padding: '0.45rem 1.1rem',
                  backgroundColor: 'rgba(200, 169, 106, 0.14)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  border: '1px solid rgba(200, 169, 106, 0.35)',
                  borderRadius: '9999px',
                  fontSize: '0.74rem',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: '#C8A96A',
                  fontWeight: 600,
                  marginBottom: '1.4rem',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.25)',
                  width: 'fit-content',
                }}
              >
                <Sparkles size={14} color="#C8A96A" />
                <span>SURAT • GUJARAT WALLPAPER &amp; DECOR</span>
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="hero-heading"
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: 'clamp(2.7rem, 4.8vw, 4.6rem)',
                  lineHeight: 1.08,
                  color: '#FFFFFF',
                  fontWeight: 500,
                  letterSpacing: '-0.01em',
                  marginBottom: '1.4rem',
                  textAlign: 'left',
                  textShadow: '0 4px 24px rgba(0, 0, 0, 0.6)',
                }}
              >
                Transform Your Walls.
                <br />
                <span
                  style={{
                    color: '#C8A96A',
                    fontStyle: 'italic',
                    fontWeight: 500,
                    textShadow: '0 2px 20px rgba(200, 169, 106, 0.3)',
                  }}
                >
                  Transform Your Space.
                </span>
              </motion.h1>

              {/* Supporting Text */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="hero-description"
                style={{
                  fontSize: '1.12rem',
                  color: 'rgba(255, 255, 255, 0.88)',
                  lineHeight: 1.75,
                  maxWidth: '560px',
                  fontWeight: 300,
                  marginBottom: '2.2rem',
                  textAlign: 'left',
                  textShadow: '0 2px 12px rgba(0, 0, 0, 0.5)',
                }}
              >
                Surat’s destination for imported wallpapers, custom murals, 3D PVC louvers, luxury carpets, and end-to-end decor styling.
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
                  marginBottom: '2.4rem',
                }}
                className="hero-cta-buttons"
              >
                <button
                  onClick={() => navigate('/catalogs')}
                  className="btn-primary"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.65rem',
                    padding: '1rem 2.2rem',
                    backgroundColor: '#7A5A3A',
                    color: '#FFFFFF',
                    fontSize: '0.84rem',
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    borderRadius: '24px',
                    border: '1px solid #967049',
                    cursor: 'pointer',
                    boxShadow: '0 10px 28px rgba(122, 90, 58, 0.45)',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#967049';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 14px 32px rgba(122, 90, 58, 0.6)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#7A5A3A';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 10px 28px rgba(122, 90, 58, 0.45)';
                  }}
                >
                  <span>EXPLORE CATALOGS</span>
                  <ArrowUpRight size={17} />
                </button>

                <button
                  onClick={() => setIsShowroomModalOpen(true)}
                  className="btn-secondary"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.65rem',
                    padding: '1rem 2.2rem',
                    backgroundColor: 'rgba(248, 245, 241, 0.15)',
                    backdropFilter: 'blur(16px)',
                    WebkitBackdropFilter: 'blur(16px)',
                    color: '#FFFFFF',
                    fontSize: '0.84rem',
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    borderRadius: '24px',
                    border: '1px solid rgba(255, 255, 255, 0.35)',
                    cursor: 'pointer',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.25)',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#C8A96A';
                    e.currentTarget.style.backgroundColor = 'rgba(200, 169, 106, 0.25)';
                    e.currentTarget.style.color = '#FFFFFF';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.35)';
                    e.currentTarget.style.backgroundColor = 'rgba(248, 245, 241, 0.15)';
                    e.currentTarget.style.color = '#FFFFFF';
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
                  gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
                  gap: '1.25rem',
                  maxWidth: '680px',
                  paddingTop: '1.4rem',
                  borderTop: '1px solid rgba(255, 255, 255, 0.18)',
                }}
                className="hero-badges-row"
              >
                <div className="hero-badge-card" style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <div
                    style={{
                      width: '34px',
                      height: '34px',
                      borderRadius: '10px',
                      backgroundColor: 'rgba(200, 169, 106, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      border: '1px solid rgba(200, 169, 106, 0.3)',
                    }}
                  >
                    <Award size={18} color="#C8A96A" />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#FFFFFF' }}>
                      Premium Quality
                    </div>
                    <div style={{ fontSize: '0.75rem', color: 'rgba(255, 255, 255, 0.75)', lineHeight: 1.4, marginTop: '2px' }}>
                      Carefully curated materials
                    </div>
                  </div>
                </div>

                <div className="hero-badge-card" style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <div
                    style={{
                      width: '34px',
                      height: '34px',
                      borderRadius: '10px',
                      backgroundColor: 'rgba(200, 169, 106, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      border: '1px solid rgba(200, 169, 106, 0.3)',
                    }}
                  >
                    <Users size={18} color="#C8A96A" />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#FFFFFF' }}>
                      Expert Guidance
                    </div>
                    <div style={{ fontSize: '0.75rem', color: 'rgba(255, 255, 255, 0.75)', lineHeight: 1.4, marginTop: '2px' }}>
                      Personalized support
                    </div>
                  </div>
                </div>

                <div className="hero-badge-card" style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <div
                    style={{
                      width: '34px',
                      height: '34px',
                      borderRadius: '10px',
                      backgroundColor: 'rgba(200, 169, 106, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      border: '1px solid rgba(200, 169, 106, 0.3)',
                    }}
                  >
                    <Layers size={18} color="#C8A96A" />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#FFFFFF' }}>
                      Complete Solutions
                    </div>
                    <div style={{ fontSize: '0.75rem', color: 'rgba(255, 255, 255, 0.75)', lineHeight: 1.4, marginTop: '2px' }}>
                      Everything under one roof
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* ── 3. Bottom Integrated Bar: Statistics (Glassmorphism & Transparent) ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="hero-bottom-bar"
            style={{
              marginTop: '1.5rem',
              padding: '1.25rem 2rem',
              borderRadius: '24px',
              backgroundColor: 'rgba(24, 21, 18, 0.65)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.18)',
              boxShadow: '0 20px 48px rgba(0, 0, 0, 0.45)',
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
                    border: '1px solid rgba(200, 169, 106, 0.35)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    backgroundColor: 'rgba(200, 169, 106, 0.15)',
                  }}
                >
                  <InstagramIcon size={19} color="#C8A96A" />
                </div>
                <div>
                  <div className="hero-stat-number" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.65rem', fontWeight: 700, color: '#FFFFFF', lineHeight: 1.1 }}>
                    100K+
                  </div>
                  <div className="hero-stat-label" style={{ fontSize: '0.66rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#C8A96A', marginTop: '2px' }}>
                    Instagram
                  </div>
                </div>
              </div>

              {/* Stat 2: YouTube */}
              <div className="hero-stat-card hero-stat-item hero-stat-divider" style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', borderLeft: '1px solid rgba(255, 255, 255, 0.15)', paddingLeft: '1.25rem' }}>
                <div
                  className="hero-stat-icon"
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '12px',
                    border: '1px solid rgba(200, 169, 106, 0.35)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    backgroundColor: 'rgba(200, 169, 106, 0.15)',
                  }}
                >
                  <YouTubeIcon size={19} color="#C8A96A" />
                </div>
                <div>
                  <div className="hero-stat-number" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.65rem', fontWeight: 700, color: '#FFFFFF', lineHeight: 1.1 }}>
                    160K+
                  </div>
                  <div className="hero-stat-label" style={{ fontSize: '0.66rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#C8A96A', marginTop: '2px' }}>
                    YouTube
                  </div>
                </div>
              </div>

              {/* Stat 3: Facebook */}
              <div className="hero-stat-card hero-stat-item hero-stat-divider" style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', borderLeft: '1px solid rgba(255, 255, 255, 0.15)', paddingLeft: '1.25rem' }}>
                <div
                  className="hero-stat-icon"
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '12px',
                    border: '1px solid rgba(200, 169, 106, 0.35)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    backgroundColor: 'rgba(200, 169, 106, 0.15)',
                  }}
                >
                  <FacebookIcon size={19} color="#C8A96A" />
                </div>
                <div>
                  <div className="hero-stat-number" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.65rem', fontWeight: 700, color: '#FFFFFF', lineHeight: 1.1 }}>
                    300K+
                  </div>
                  <div className="hero-stat-label" style={{ fontSize: '0.66rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#C8A96A', marginTop: '2px' }}>
                    Facebook
                  </div>
                </div>
              </div>

              {/* Stat 4: Customers */}
              <div className="hero-stat-card hero-stat-item hero-stat-divider" style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', borderLeft: '1px solid rgba(255, 255, 255, 0.15)', paddingLeft: '1.25rem' }}>
                <div
                  className="hero-stat-icon"
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '12px',
                    border: '1px solid rgba(200, 169, 106, 0.35)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    backgroundColor: 'rgba(200, 169, 106, 0.15)',
                  }}
                >
                  <Users size={19} color="#C8A96A" />
                </div>
                <div>
                  <div className="hero-stat-number" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.65rem', fontWeight: 700, color: '#FFFFFF', lineHeight: 1.1 }}>
                    20K+
                  </div>
                  <div className="hero-stat-label" style={{ fontSize: '0.66rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#C8A96A', marginTop: '2px' }}>
                    Customers
                  </div>
                </div>
              </div>

              {/* Stat 5: Excellence */}
              <div className="hero-stat-card hero-stat-item hero-stat-divider hero-stat-last" style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', borderLeft: '1px solid rgba(255, 255, 255, 0.15)', paddingLeft: '1.25rem' }}>
                <div
                  className="hero-stat-icon"
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '12px',
                    border: '1px solid rgba(200, 169, 106, 0.35)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    backgroundColor: 'rgba(200, 169, 106, 0.15)',
                  }}
                >
                  <Award size={19} color="#C8A96A" />
                </div>
                <div>
                  <div className="hero-stat-number" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.65rem', fontWeight: 700, color: '#FFFFFF', lineHeight: 1.1 }}>
                    5+ Yrs
                  </div>
                  <div className="hero-stat-label" style={{ fontSize: '0.66rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#C8A96A', marginTop: '2px' }}>
                    Excellence
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ==================================================
          2. OFFICIAL CATALOGS SECTION (Graphite Cards)
          ================================================== */}
      <CatalogsSection id="catalogs" />

      {/* ==================================================
          3. FEATURED SHOWROOM EXPERIENCE (SPLIT LAYOUT)
          ================================================== */}
      <section
        id="showroom-experience"
        style={{
          padding: '6.5rem 0',
          backgroundColor: 'var(--bg-secondary, #E7D7BE)',
          borderTop: '1px solid rgba(122, 90, 58, 0.12)',
          borderBottom: '1px solid rgba(122, 90, 58, 0.12)',
          position: 'relative',
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
            {/* Left Photo */}
            <div
              style={{
                position: 'relative',
                borderRadius: '14px',
                overflow: 'hidden',
                border: '1px solid rgba(122, 90, 58, 0.18)',
                boxShadow: '0 15px 40px rgba(0, 0, 0, 0.09)',
                height: '420px',
                backgroundColor: '#EAE3D9',
              }}
              className="showroom-photo-box"
            >
              <img
                src="/assets/youtube-silver-play-button.jpg"
                alt="Gujarat Wallpaper & Decor Surat Showroom Interior"
                loading="lazy"
                decoding="async"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center 20%',
                }}
              />
            </div>

            {/* Right Content */}
            <div className="showroom-content-box">
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  fontSize: '0.72rem',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: '#7A5A3A',
                  fontWeight: 600,
                  marginBottom: '1rem',
                }}
              >
                <Eye size={14} color="#7A5A3A" />
                <span>[ The Physical Experience ]</span>
              </div>

              <h2
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: 'clamp(2.2rem, 3.4vw, 3rem)',
                  color: '#2F2F2F',
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
                  color: '#5A5652',
                  lineHeight: 1.7,
                  fontWeight: 400,
                  marginBottom: '1.75rem',
                  maxWidth: '520px',
                }}
              >
                Experience wallpapers and decor materials in person and find the perfect finish for your space.
              </p>

              {/* Showroom Bullet Points */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem', marginBottom: '2.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <CheckCircle2 size={18} color="#7A5A3A" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span style={{ fontSize: '0.88rem', color: '#5A5652', lineHeight: 1.5 }}>
                    <strong style={{ color: '#2F2F2F' }}>Touch &amp; Feel Quality:</strong> Inspect authentic metallic wallpapers, 3D PVC fluted slats, and hand-tufted carpets.
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <CheckCircle2 size={18} color="#7A5A3A" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span style={{ fontSize: '0.88rem', color: '#5A5652', lineHeight: 1.5 }}>
                    <strong style={{ color: '#2F2F2F' }}>Architectural Lighting:</strong> Observe true-to-life color reproduction under specialized showroom illumination.
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <CheckCircle2 size={18} color="#7A5A3A" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span style={{ fontSize: '0.88rem', color: '#2F2F2F' }}>
                    <strong style={{ color: '#2F2F2F' }}>Main Polaris Branch:</strong> Shop No. 154, Polaris Mall, Puna Canal Road, Surat.
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '1rem',
                }}
                className="showroom-action-btns"
              >
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Shop+No.+154+Polaris+Mall+Puna+Canal+Road+Surat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.55rem',
                    padding: '0.95rem 2.2rem',
                    backgroundColor: '#7A5A3A',
                    color: '#FFFFFF',
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    borderRadius: '24px',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 6px 20px rgba(122, 90, 58, 0.25)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#63472C';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#7A5A3A';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
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
                    gap: '0.55rem',
                    padding: '0.95rem 2.2rem',
                    backgroundColor: 'transparent',
                    color: '#2F2F2F',
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    borderRadius: '24px',
                    border: '1px solid rgba(122, 90, 58, 0.3)',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#7A5A3A';
                    e.currentTarget.style.color = '#7A5A3A';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(122, 90, 58, 0.3)';
                    e.currentTarget.style.color = '#2F2F2F';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <MessageCircle size={15} />
                  <span>WHATSAPP ENQUIRY</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          4. WHY CHOOSE US PREVIEW (3 Cards)
          ================================================== */}
      <section
        id="why-choose-us-preview"
        style={{
          padding: '72px 0',
          backgroundColor: 'var(--bg-primary, #F8F5F1)',
        }}
      >
        <div className="container-luxury">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3.5rem' }}>
            <div className="editorial-eyebrow" style={{ marginBottom: '0.85rem', color: 'var(--accent-walnut, #7A5A3A)' }}>
              <span>[ SHOWROOM EXCELLENCE ]</span>
            </div>

            <h2
              style={{
                fontFamily: "'Cormorant Garamond', Garamond, Georgia, serif",
                fontSize: 'clamp(2.3rem, 3.6vw, 3.2rem)',
                color: 'var(--text-primary, #2F2F2F)',
                fontWeight: 500,
                marginBottom: '1rem',
              }}
            >
              Why Gujarat Wallpaper &amp; Decor?
            </h2>

            <p style={{ fontSize: '1rem', color: 'var(--text-secondary, #5A5652)', lineHeight: 1.65, fontWeight: 400 }}>
              Trusted by Surat's top architects, interior decorators, and discerning homeowners.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1.5rem',
              marginBottom: '3rem',
            }}
            className="why-preview-grid"
          >
            {whyHighlights.map((item) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={item.title}
                  className="why-preview-card"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: 'var(--bg-surface, #FFFFFF)',
                    border: '1px solid var(--border-card, rgba(122, 90, 58, 0.16))',
                    borderRadius: '12px',
                    padding: '2.25rem 1.75rem',
                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '1.25rem',
                    }}
                  >
                    <div
                      style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: '10px',
                        backgroundColor: 'rgba(122, 90, 58, 0.08)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--accent-walnut, #7A5A3A)',
                        border: '1px solid rgba(122, 90, 58, 0.16)',
                      }}
                    >
                      <IconComponent size={20} />
                    </div>

                    <span
                      style={{
                        fontSize: '11px',
                        fontWeight: 600,
                        letterSpacing: '0.06em',
                        textTransform: 'uppercase',
                        color: 'var(--accent-walnut, #7A5A3A)',
                        backgroundColor: 'rgba(122, 90, 58, 0.06)',
                        padding: '4px 10px',
                        borderRadius: '9999px',
                        border: '1px solid rgba(122, 90, 58, 0.14)',
                      }}
                    >
                      {item.tag}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontFamily: "'Cormorant Garamond', Garamond, Georgia, serif",
                      fontSize: '1.35rem',
                      color: 'var(--text-primary, #2F2F2F)',
                      fontWeight: 600,
                      marginBottom: '0.75rem',
                      lineHeight: 1.25,
                    }}
                  >
                    {item.title}
                  </h3>

                  <p
                    style={{
                      fontSize: '0.88rem',
                      color: 'var(--text-secondary, #5A5652)',
                      lineHeight: 1.6,
                      fontWeight: 400,
                      margin: 0,
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

          <div style={{ textAlign: 'center' }}>
            <button
              onClick={() => navigate('/why-choose-us')}
              className="btn-secondary"
            >
              <span>VIEW WHY CHOOSE US</span>
              <ArrowUpRight size={15} />
            </button>
          </div>
        </div>
      </section>

      {/* ==================================================
          5. SOCIAL PRESENCE (3 Cards)
          ================================================== */}
      <section
        id="social-presence"
        style={{
          padding: '72px 0',
          backgroundColor: 'var(--bg-secondary, #E7D7BE)',
          borderTop: '1px solid rgba(122, 90, 58, 0.12)',
          borderBottom: '1px solid rgba(122, 90, 58, 0.12)',
        }}
      >
        <div className="container-luxury">
          <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 3.5rem' }}>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', Garamond, Georgia, serif",
                fontSize: 'clamp(2.2rem, 3.4vw, 3rem)',
                color: 'var(--text-primary, #2F2F2F)',
                fontWeight: 500,
                marginBottom: '0.75rem',
              }}
            >
              Follow Our Work
            </h2>

            <p style={{ fontSize: '1rem', color: 'var(--text-secondary, #5A5652)', lineHeight: 1.6, fontWeight: 400 }}>
              See our latest wallpaper installations, showroom updates and interior transformations.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1.5rem',
            }}
            className="social-cta-grid"
          >
            {/* INSTAGRAM */}
            <a
              href="https://www.instagram.com/gujarat_wallpaper_decor/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '1rem',
                backgroundColor: 'var(--bg-surface, #FFFFFF)',
                border: '1px solid rgba(225, 48, 108, 0.3)',
                borderRadius: '12px',
                padding: '1.5rem 1.85rem',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)',
                transition: 'all 0.3s ease',
              }}
              className="social-strip-card"
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.1rem' }}>
                <div
                  className="social-icon-box"
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '10px',
                    background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#FFFFFF',
                    flexShrink: 0,
                  }}
                >
                  <InstagramIcon size={20} color="#FFFFFF" />
                </div>
                <div>
                  <div style={{ fontSize: '0.98rem', fontWeight: 600, color: 'var(--text-primary, #2F2F2F)', marginBottom: '0.15rem' }}>
                    Follow on Instagram
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--accent-walnut, #7A5A3A)' }}>
                    @gujarat_wallpaper_decor
                  </div>
                </div>
              </div>

              <div
                className="social-arrow-btn"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '9999px',
                  backgroundColor: 'rgba(122, 90, 58, 0.08)',
                  border: '1px solid rgba(122, 90, 58, 0.16)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-walnut, #7A5A3A)',
                  flexShrink: 0,
                }}
              >
                <ArrowUpRight size={16} />
              </div>
            </a>

            {/* YOUTUBE */}
            <a
              href="https://www.youtube.com/@Gujaratwallpaper"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '1rem',
                backgroundColor: 'var(--bg-surface, #FFFFFF)',
                border: '1px solid rgba(255, 0, 0, 0.3)',
                borderRadius: '12px',
                padding: '1.5rem 1.85rem',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)',
                transition: 'all 0.3s ease',
              }}
              className="social-strip-card"
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.1rem' }}>
                <div
                  className="social-icon-box"
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '10px',
                    backgroundColor: '#FF0000',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#FFFFFF',
                    flexShrink: 0,
                  }}
                >
                  <YouTubeIcon size={20} color="#FFFFFF" />
                </div>
                <div>
                  <div style={{ fontSize: '0.98rem', fontWeight: 600, color: 'var(--text-primary, #2F2F2F)', marginBottom: '0.15rem' }}>
                    Subscribe on YouTube
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--accent-walnut, #7A5A3A)' }}>
                    @Gujaratwallpaper
                  </div>
                </div>
              </div>

              <div
                className="social-arrow-btn"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '9999px',
                  backgroundColor: 'rgba(122, 90, 58, 0.08)',
                  border: '1px solid rgba(122, 90, 58, 0.16)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-walnut, #7A5A3A)',
                  flexShrink: 0,
                }}
              >
                <ArrowUpRight size={16} />
              </div>
            </a>

            {/* FACEBOOK */}
            <a
              href="https://www.facebook.com/share/19FULrAcv3/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '1rem',
                backgroundColor: 'var(--bg-surface, #FFFFFF)',
                border: '1px solid rgba(24, 119, 242, 0.3)',
                borderRadius: '12px',
                padding: '1.5rem 1.85rem',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)',
                transition: 'all 0.3s ease',
              }}
              className="social-strip-card"
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.1rem' }}>
                <div
                  className="social-icon-box"
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '10px',
                    backgroundColor: '#1877F2',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#FFFFFF',
                    flexShrink: 0,
                  }}
                >
                  <FacebookIcon size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.98rem', fontWeight: 600, color: 'var(--text-primary, #2F2F2F)', marginBottom: '0.15rem' }}>
                    Follow on Facebook
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--accent-walnut, #7A5A3A)' }}>
                    Arun Vala
                  </div>
                </div>
              </div>

              <div
                className="social-arrow-btn"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '9999px',
                  backgroundColor: 'rgba(122, 90, 58, 0.08)',
                  border: '1px solid rgba(122, 90, 58, 0.16)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-walnut, #7A5A3A)',
                  flexShrink: 0,
                }}
              >
                <ArrowUpRight size={16} />
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* ==================================================
          6. FINAL CTA
          ================================================== */}
      <section
        id="final-cta"
        style={{
          padding: '72px 0 96px',
          backgroundColor: 'var(--bg-primary, #F8F5F1)',
        }}
      >
        <div className="container-luxury" style={{ maxWidth: '840px', margin: '0 auto' }}>
          <div
            className="final-cta-card"
            style={{
              padding: '3.5rem 2.5rem',
              textAlign: 'center',
              backgroundColor: 'var(--bg-surface, #FFFFFF)',
              border: '1px solid var(--border-card, rgba(122, 90, 58, 0.16))',
              borderRadius: '16px',
              boxShadow: '0 6px 24px rgba(0, 0, 0, 0.04)',
            }}
          >
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', Garamond, Georgia, serif",
                fontSize: 'clamp(2.3rem, 3.6vw, 3.2rem)',
                color: 'var(--text-primary, #2F2F2F)',
                fontWeight: 500,
                marginBottom: '1rem',
                lineHeight: 1.2,
              }}
            >
              Ready to Transform Your Space?
            </h2>

            <p
              style={{
                fontSize: '1rem',
                color: 'var(--text-secondary, #5A5652)',
                lineHeight: 1.65,
                fontWeight: 400,
                marginBottom: '2.5rem',
                maxWidth: '600px',
                margin: '0 auto 2.5rem',
              }}
            >
              Visit our showroom or connect with us to explore the right wallpaper and decor solution for your space.
            </p>

            <div
              className="final-cta-btns"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexWrap: 'wrap',
                gap: '1rem',
              }}
            >
              <a
                href="https://wa.me/918320802633?text=Hello%20Gujarat%20Wallpaper,%20I%20would%20like%20to%20enquire%20about%20your%20decor%20solutions."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{
                  backgroundColor: '#25D366',
                  borderColor: '#25D366',
                  color: '#FFFFFF',
                  boxShadow: '0 4px 16px rgba(37, 211, 102, 0.3)',
                }}
              >
                <MessageCircle size={15} />
                <span>WHATSAPP ENQUIRY</span>
              </a>

              <button
                onClick={() => setIsShowroomModalOpen(true)}
                className="btn-secondary"
              >
                <span>VISIT SHOWROOM</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Showroom Locations Modal */}
      <ShowroomModal
        isOpen={isShowroomModalOpen}
        onClose={() => setIsShowroomModalOpen(false)}
      />

      <style>{`
        /* -- Unified Full-Width Hero Styling -- */
        .hero-main-container {
          box-sizing: border-box;
        }

        /* Value badges transition */
        .hero-badges-row {
          transition: all 0.3s ease;
        }

        .hero-stat-card {
          transition: transform 0.25s ease;
        }
        .hero-stat-icon {
          transition: transform 0.25s ease, border-color 0.25s ease, background-color 0.25s ease;
        }
        .hero-stat-card:hover .hero-stat-icon {
          border-color: rgba(200, 169, 106, 0.55) !important;
          background-color: rgba(200, 169, 106, 0.25) !important;
          transform: translateY(-2px);
        }
        .hero-stat-divider {
          border-left: 1px solid rgba(255, 255, 255, 0.15);
          padding-left: 1.25rem;
        }

        /* Card hover effects */
        .why-preview-card:hover {
          transform: translateY(-5px);
          border-color: #7A5A3A !important;
          box-shadow: 0 12px 28px rgba(0, 0, 0, 0.08);
        }

        .social-strip-card:hover {
          transform: translateY(-4px);
        }
        .instagram-strip-card:hover {
          border-color: rgba(225, 48, 108, 0.7) !important;
          background-color: #FFF0F5 !important;
        }
        .instagram-strip-card:hover .social-strip-arrow {
          background-color: #E1306C !important;
          border-color: #E1306C !important;
          color: #FFFFFF !important;
        }
        .youtube-strip-card:hover {
          border-color: rgba(255, 0, 0, 0.7) !important;
          background-color: #FFF5F5 !important;
        }
        .youtube-strip-card:hover .social-strip-arrow {
          background-color: #FF0000 !important;
          border-color: #FF0000 !important;
          color: #FFFFFF !important;
        }
        .facebook-strip-card:hover {
          border-color: rgba(24, 119, 242, 0.7) !important;
          background-color: #F0F5FF !important;
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

        /* Tablet Portrait & Large Mobile */
        @media (max-width: 991px) {
          .hero-upper-grid {
            margin-bottom: 1.5rem !important;
          }
          .hero-stats-grid {
            grid-template-columns: repeat(3, 1fr) !important;
            gap: 1rem !important;
          }
          .hero-stat-divider {
            border-left: none !important;
            padding-left: 0 !important;
          }
        }

        /* Tablet Portrait & Mobile Smoothness */
        @media (max-width: 768px) {
          .hero-slide-img {
            object-position: center 50% !important;
            transform: none !important;
            transition: none !important;
          }
          .hero-eyebrow {
            backdrop-filter: none !important;
            -webkit-backdrop-filter: none !important;
            background-color: rgba(26, 22, 18, 0.85) !important;
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
          .hero-cta-buttons button {
            backdrop-filter: none !important;
            -webkit-backdrop-filter: none !important;
          }
          .hero-badges-row {
            grid-template-columns: repeat(3, 1fr) !important;
            gap: 0.75rem !important;
            padding-top: 1.1rem !important;
            margin-bottom: 1.25rem !important;
          }
          .hero-badge-card {
            background: rgba(255, 255, 255, 0.04) !important;
            border: 1px solid rgba(245, 242, 236, 0.08) !important;
            padding: 0.75rem 0.85rem !important;
            border-radius: 10px !important;
          }

          .hero-bottom-bar {
            margin-top: 1.75rem !important;
            padding: 1rem 1.25rem !important;
            border-radius: 14px !important;
            backdrop-filter: none !important;
            -webkit-backdrop-filter: none !important;
            background-color: rgba(20, 17, 14, 0.92) !important;
          }
          .hero-stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 1rem !important;
          }
          .hero-stat-last {
            grid-column: span 2 !important;
            justify-content: center !important;
          }
          .social-cta-grid {
            grid-template-columns: 1fr !important;
          }
          .why-preview-grid {
            grid-template-columns: 1fr !important;
          }
          #showroom-experience {
            padding: 4.5rem 0 !important;
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
          .hero-badges-row {
            grid-template-columns: 1fr !important;
            gap: 0.6rem !important;
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
          #showroom-experience {
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
