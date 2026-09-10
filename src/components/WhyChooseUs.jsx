import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Award,
  ShieldCheck,
  Grid3X3,
  Users,
  Building2,
  ArrowUpRight,
  Sparkles,
  Play,
  Layers,
  Eye,
  Droplets,
  Compass,
  Phone,
  MapPin,
  CheckCircle2
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import ShowroomModal from './ShowroomModal';

// Custom SVG Icons for Instagram, YouTube, and Facebook
function InstagramIcon({ size = 24, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function YouTubeIcon({ size = 24, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function FacebookIcon({ size = 24, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export default function WhyChooseUs() {
  const { isDark } = useTheme();
  const [isShowroomModalOpen, setIsShowroomModalOpen] = useState(false);

  // 5 Achievement Metrics (Simple English)
  const achievements = [
    {
      metric: '100K+',
      label: 'INSTAGRAM FOLLOWERS',
      description: 'Daily new wallpaper designs and real home makeover videos.',
      icon: InstagramIcon,
    },
    {
      metric: '160K+',
      label: 'YOUTUBE SUBSCRIBERS',
      description: 'Silver Play Button winner with simple home decor video guides.',
      icon: Play,
    },
    {
      metric: '300K+',
      label: 'FACEBOOK FAMILY',
      description: 'Over 3 Lakh happy people connected with us across Gujarat.',
      icon: FacebookIcon,
    },
    {
      metric: '5+ YEARS',
      label: 'YEARS OF TRUST',
      description: 'Serving Surat with honest prices and best quality wallpapers.',
      icon: Award,
    },
    {
      metric: '20,000+',
      label: 'HAPPY HOMES',
      description: 'Wallpapers fitted in thousands of homes and shops in Gujarat.',
      icon: Users,
    },
  ];

  // 4 Main Highlights (Simple Everyday English)
  const keyDistinctions = [
    {
      icon: Layers,
      title: '5,000+ Ready Rolls in Stock',
      desc: 'No waiting for weeks. Take your favorite wallpaper home today or get same-day delivery anywhere in Surat.',
    },
    {
      icon: Eye,
      title: 'Full-Size Live Wall Displays',
      desc: 'See and touch real wallpapers on full-size walls in our showroom. Check real colors under light before buying.',
    },
    {
      icon: ShieldCheck,
      title: 'Fast 24-Hour Fitting by Experts',
      desc: 'Our trained staff fits your wallpaper in 24 hours with zero bubbles, perfect joints, and safe German glue.',
    },
    {
      icon: Droplets,
      title: '100% Washable & Long Lasting',
      desc: 'Easy to clean with a wet cloth. Safe from moisture and water, made to last 10 to 15 years in Gujarat homes.',
    },
  ];

  // 3 Easy Steps (Simple Everyday English)
  const customerSteps = [
    {
      step: '01',
      title: 'Choose Your Favorite Design',
      desc: 'Visit any of our 4 showrooms in Surat or Rajkot. Look at hundreds of books and touch real live wall displays.',
      tag: 'Step 1: In Showroom',
    },
    {
      step: '02',
      title: 'Free Wall Measurement',
      desc: 'Our team visits your home in Surat for free. We measure your walls accurately so you only buy what you need.',
      tag: 'Step 2: Free Home Visit',
    },
    {
      step: '03',
      title: '24-Hour Clean Fitting',
      desc: 'Our expert team fits your wallpaper cleanly in just 1 day. No bad smell, no mess, ready to enjoy immediately.',
      tag: 'Step 3: Fast Fitting',
    },
  ];

  return (
    <section
      id="why-choose-us"
      style={{
        padding: '72px 0',
        backgroundColor: 'var(--bg-primary, #F8F5F1)',
        color: 'var(--text-primary, #2F2F2F)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 2 }}>
        {/* ==================================================
            1. SECTION TITLE & INTRO (SIMPLE ENGLISH)
            ================================================== */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 48px' }}>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '12px',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'var(--accent-walnut, #7A5A3A)',
              backgroundColor: 'rgba(122, 90, 58, 0.08)',
              border: '1px solid rgba(122, 90, 58, 0.2)',
              padding: '6px 16px',
              borderRadius: '9999px',
              fontWeight: 600,
              marginBottom: '16px',
            }}
          >
            <Sparkles size={14} color="var(--accent-walnut, #7A5A3A)" />
            <span>Surat's Most Trusted Wallpaper Showroom</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(32px, 4.2vw, 52px)',
              color: 'var(--text-primary, #2F2F2F)',
              marginBottom: '16px',
              fontWeight: 500,
              letterSpacing: '0.01em',
              lineHeight: 1.15,
            }}
          >
            Why Choose Gujarat Wallpaper?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              fontSize: '16px',
              color: 'var(--text-secondary, #5A5652)',
              lineHeight: 1.65,
              margin: 0,
            }}
          >
            With 4 big showrooms in Surat and Rajkot, over 5,000 ready wallpaper rolls in stock, and 20,000+ happy homes, we make home decor simple, fast, and affordable for everyone.
          </motion.p>
        </div>

        {/* ==================================================
            2. ACHIEVEMENT STATS (5 METRIC CARDS)
            ================================================== */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: '16px',
            marginBottom: '48px',
          }}
          className="why-achievements-grid"
        >
          {achievements.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: 'easeOut' }}
                style={{
                  backgroundColor: 'var(--bg-surface, #FFFFFF)',
                  border: '1px solid var(--border-card, rgba(122, 90, 58, 0.16))',
                  borderRadius: '12px',
                  padding: '24px 18px',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)',
                  transition: 'border-color 0.25s ease, transform 0.25s ease',
                }}
                className="why-achievement-card"
              >
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(122, 90, 58, 0.08)',
                    border: '1px solid rgba(122, 90, 58, 0.16)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-walnut, #7A5A3A)',
                    marginBottom: '16px',
                  }}
                >
                  <IconComp size={18} />
                </div>

                <div
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: 'clamp(28px, 2.5vw, 36px)',
                    fontWeight: 700,
                    color: 'var(--accent-walnut, #7A5A3A)',
                    lineHeight: 1.1,
                    letterSpacing: '0.01em',
                    marginBottom: '6px',
                  }}
                >
                  {item.metric}
                </div>

                <div
                  style={{
                    fontSize: '10.5px',
                    fontWeight: 600,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    color: 'var(--accent-walnut, #7A5A3A)',
                    marginBottom: '8px',
                  }}
                >
                  {item.label}
                </div>

                <p
                  style={{
                    fontSize: '12.5px',
                    color: 'var(--text-secondary, #5A5652)',
                    lineHeight: 1.5,
                    margin: 0,
                  }}
                >
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* ==================================================
            3. REAL YOUTUBE SILVER PLAY BUTTON RECOGNITION
            ================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          style={{
            backgroundColor: 'var(--bg-surface, #FFFFFF)',
            border: '1px solid var(--border-card, rgba(122, 90, 58, 0.16))',
            borderRadius: '16px',
            overflow: 'hidden',
            marginBottom: '48px',
            boxShadow: '0 6px 20px rgba(0, 0, 0, 0.04)',
          }}
          className="silver-play-block"
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(320px, 1fr) 1.15fr',
              alignItems: 'center',
            }}
            className="silver-play-grid"
          >
            {/* LEFT SIDE: REAL PHOTO */}
            <div
              style={{
                position: 'relative',
                height: '100%',
                minHeight: '340px',
                overflow: 'hidden',
                backgroundColor: '#EAE3D9',
              }}
              className="silver-play-img-box"
            >
              <img
                src="/assets/youtube-silver-play-button.jpg"
                alt="Gujarat Wallpaper & Decor Team with YouTube Silver Creator Award Play Button"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center 20%',
                  display: 'block',
                  transition: 'transform 0.4s ease',
                }}
                className="silver-photo"
                loading="lazy"
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to right, transparent 60%, rgba(255, 255, 255, 0.5) 100%)',
                  pointerEvents: 'none',
                }}
              />
            </div>

            {/* RIGHT SIDE: EDITORIAL COPY (SIMPLE ENGLISH) */}
            <div
              style={{
                padding: '40px 36px',
              }}
              className="silver-play-content"
            >
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '11.5px',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'var(--accent-walnut, #7A5A3A)',
                  fontWeight: 500,
                  marginBottom: '12px',
                }}
              >
                <Sparkles size={14} color="var(--accent-walnut, #7A5A3A)" />
                <span>Official Award</span>
              </div>

              <h3
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: 'clamp(26px, 2.8vw, 36px)',
                  color: 'var(--text-primary, #2F2F2F)',
                  fontWeight: 500,
                  lineHeight: 1.2,
                  marginBottom: '14px',
                  letterSpacing: '0.01em',
                }}
              >
                YouTube <span style={{ color: 'var(--accent-walnut, #7A5A3A)' }}>Silver Play Button</span> Winner
              </h3>

              <p
                style={{
                  fontSize: '14.5px',
                  color: 'var(--text-secondary, #5A5652)',
                  lineHeight: 1.6,
                  marginBottom: '22px',
                }}
              >
                A proud achievement for Gujarat Wallpaper &amp; Decor in Surat! With over 1,60,000+ YouTube subscribers and 1,00,000+ Instagram followers, we thank all our customers and friends across Gujarat for your love and trust.
              </p>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  flexWrap: 'wrap',
                  paddingTop: '18px',
                  borderTop: '1px solid rgba(122, 90, 58, 0.16)',
                }}
              >
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '7px 14px',
                    backgroundColor: 'rgba(122, 90, 58, 0.08)',
                    border: '1px solid rgba(122, 90, 58, 0.22)',
                    borderRadius: '9999px',
                    fontSize: '12px',
                    letterSpacing: '0.04em',
                    color: 'var(--text-primary, #2F2F2F)',
                    fontWeight: 500,
                  }}
                >
                  <span
                    style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--accent-walnut, #7A5A3A)',
                      boxShadow: '0 0 8px rgba(122, 90, 58, 0.6)',
                    }}
                  />
                  100,000+ Subscribers Award
                </div>

                <div style={{ fontSize: '13px', color: 'var(--text-secondary, #5A5652)' }}>
                  Official YouTube Creator Award • Surat, Gujarat
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ==================================================
            4. SOCIAL MEDIA CHANNELS (THREE CARDS)
            ================================================== */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '18px',
            marginBottom: '56px',
          }}
          className="why-social-grid"
        >
          {/* INSTAGRAM */}
          <motion.a
            href="https://www.instagram.com/gujarat_wallpaper_decor/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{
              textDecoration: 'none',
              backgroundColor: 'var(--bg-surface, #FFFFFF)',
              border: '1px solid rgba(225, 48, 108, 0.3)',
              borderRadius: '12px',
              padding: '22px 24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '16px',
              position: 'relative',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)',
              transition: 'border-color 0.25s ease, transform 0.25s ease',
            }}
            className="social-cta-card instagram-cta"
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
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
                <InstagramIcon size={22} color="#FFFFFF" />
              </div>

              <div>
                <div style={{ fontSize: '14.5px', fontWeight: 600, color: 'var(--text-primary, #2F2F2F)', marginBottom: '3px' }}>
                  Follow Us on Instagram
                </div>
                <div style={{ fontSize: '12.5px', color: 'var(--accent-walnut, #7A5A3A)' }}>
                  @gujarat_wallpaper_decor
                </div>
              </div>
            </div>

            <div className="social-arrow-btn" style={{ width: '34px', height: '34px', borderRadius: '50%', backgroundColor: 'rgba(122, 90, 58, 0.08)', border: '1px solid rgba(122, 90, 58, 0.16)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-walnut, #7A5A3A)', flexShrink: 0, transition: 'all 0.2s ease' }}>
              <ArrowUpRight size={17} />
            </div>
          </motion.a>

          {/* YOUTUBE */}
          <motion.a
            href="https://youtube.com/@Gujaratwallpaper?si=e2Tq9p7oX8r68aM6"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
            style={{
              textDecoration: 'none',
              backgroundColor: 'var(--bg-surface, #FFFFFF)',
              border: '1px solid rgba(255, 0, 0, 0.3)',
              borderRadius: '12px',
              padding: '22px 24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '16px',
              position: 'relative',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)',
              transition: 'border-color 0.25s ease, transform 0.25s ease',
            }}
            className="social-cta-card youtube-cta"
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
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
                <YouTubeIcon size={22} color="#FFFFFF" />
              </div>

              <div>
                <div style={{ fontSize: '14.5px', fontWeight: 600, color: 'var(--text-primary, #2F2F2F)', marginBottom: '3px' }}>
                  Subscribe on YouTube
                </div>
                <div style={{ fontSize: '12.5px', color: 'var(--accent-walnut, #7A5A3A)' }}>
                  @Gujaratwallpaper
                </div>
              </div>
            </div>

            <div className="social-arrow-btn" style={{ width: '34px', height: '34px', borderRadius: '50%', backgroundColor: 'rgba(122, 90, 58, 0.08)', border: '1px solid rgba(122, 90, 58, 0.16)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-walnut, #7A5A3A)', flexShrink: 0, transition: 'all 0.2s ease' }}>
              <ArrowUpRight size={17} />
            </div>
          </motion.a>

          {/* FACEBOOK */}
          <motion.a
            href="https://www.facebook.com/share/19FULrAcv3/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.16 }}
            style={{
              textDecoration: 'none',
              backgroundColor: 'var(--bg-surface, #FFFFFF)',
              border: '1px solid rgba(24, 119, 242, 0.3)',
              borderRadius: '12px',
              padding: '22px 24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '16px',
              position: 'relative',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)',
              transition: 'border-color 0.25s ease, transform 0.25s ease',
            }}
            className="social-cta-card facebook-cta"
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
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
                <FacebookIcon size={22} color="#FFFFFF" />
              </div>

              <div>
                <div style={{ fontSize: '14.5px', fontWeight: 600, color: 'var(--text-primary, #2F2F2F)', marginBottom: '3px' }}>
                  Follow Us on Facebook
                </div>
                <div style={{ fontSize: '12.5px', color: 'var(--accent-walnut, #7A5A3A)' }}>
                  Arun Vala
                </div>
              </div>
            </div>

            <div className="social-arrow-btn" style={{ width: '34px', height: '34px', borderRadius: '50%', backgroundColor: 'rgba(122, 90, 58, 0.08)', border: '1px solid rgba(122, 90, 58, 0.16)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-walnut, #7A5A3A)', flexShrink: 0, transition: 'all 0.2s ease' }}>
              <ArrowUpRight size={17} />
            </div>
          </motion.a>
        </div>

        {/* ==================================================
            5. THE GUJARAT WALLPAPER DISTINCTION (EDITORIAL SPLIT - SIMPLE ENGLISH)
            ================================================== */}
        <div style={{ marginBottom: '56px' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1.1fr 1fr',
              gap: '32px',
              alignItems: 'center',
            }}
            className="why-editorial-split"
          >
            {/* Left: Atmospheric Showroom Visual */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{
                position: 'relative',
                borderRadius: '16px',
                overflow: 'hidden',
                height: '460px',
                backgroundColor: '#EAE3D9',
                border: '1px solid rgba(122, 90, 58, 0.16)',
                boxShadow: '0 15px 40px rgba(0, 0, 0, 0.08)',
              }}
              className="why-visual-frame"
            >
              <img
                src="/showroom/showroom-04.webp"
                alt="Gujarat Wallpaper & Decor Grand Wallpaper Showcase Gallery"
                loading="lazy"
                decoding="async"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center 58%',
                  display: 'block',
                }}
              />
              {/* Subtle Dark Gradient Vignette */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(20, 18, 16, 0.85) 0%, rgba(20, 18, 16, 0.2) 50%, transparent 100%)',
                }}
              />

              {/* Floating Highlight Badges */}
              <div
                style={{
                  position: 'absolute',
                  top: '20px',
                  left: '20px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '8px 16px',
                  borderRadius: '9999px',
                  backgroundColor: 'rgba(255, 255, 255, 0.92)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  border: '1px solid rgba(122, 90, 58, 0.2)',
                  fontSize: '12px',
                  fontWeight: 600,
                  color: 'var(--text-primary, #2F2F2F)',
                  letterSpacing: '0.04em',
                }}
              >
                <Sparkles size={14} color="var(--accent-walnut, #7A5A3A)" />
                <span>5,000+ Ready Rolls in Surat</span>
              </div>

              <div
                style={{
                  position: 'absolute',
                  bottom: '24px',
                  left: '24px',
                  right: '24px',
                }}
              >
                <div
                  style={{
                    fontSize: '11px',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: 'var(--accent-gold, #C8A96A)',
                    fontWeight: 600,
                    marginBottom: '4px',
                  }}
                >
                  Visit Our Showrooms
                </div>
                <div
                  style={{
                    fontSize: '20px',
                    fontWeight: 500,
                    color: '#FFFFFF',
                    marginBottom: '6px',
                  }}
                >
                  Touch &amp; Feel Real Wallpapers on Live Wall Displays
                </div>
                <div style={{ fontSize: '13px', color: '#E7D7BE', lineHeight: 1.45 }}>
                  4 Big Branches: Polaris Mall (Varachha), Bhatar Road, Katargam &amp; Rajkot.
                </div>
              </div>
            </motion.div>

            {/* Right: 4 Clean Editorial Highlights (Simple English) */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              <div style={{ marginBottom: '4px' }}>
                <div
                  style={{
                    fontSize: '11px',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: 'var(--accent-walnut, #7A5A3A)',
                    fontWeight: 600,
                    marginBottom: '6px',
                  }}
                >
                  Our Main Strengths
                </div>
                <h3
                  style={{
                    fontSize: 'clamp(22px, 2.4vw, 30px)',
                    color: 'var(--text-primary, #2F2F2F)',
                    fontWeight: 500,
                    letterSpacing: '0.01em',
                    margin: 0,
                  }}
                >
                  Why Customers Love Our Service
                </h3>
              </div>

              {keyDistinctions.map((item, idx) => {
                const ItemIcon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    style={{
                      display: 'flex',
                      gap: '16px',
                      padding: '16px 20px',
                      borderRadius: '12px',
                      backgroundColor: 'var(--bg-surface, #FFFFFF)',
                      border: '1px solid var(--border-card, rgba(122, 90, 58, 0.16))',
                      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.03)',
                      transition: 'border-color 0.2s ease, transform 0.2s ease',
                    }}
                    className="editorial-item-box"
                  >
                    <div
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '10px',
                        backgroundColor: 'rgba(122, 90, 58, 0.08)',
                        border: '1px solid rgba(122, 90, 58, 0.16)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--accent-walnut, #7A5A3A)',
                        flexShrink: 0,
                      }}
                    >
                      <ItemIcon size={20} />
                    </div>
                    <div>
                      <div
                        style={{
                          fontSize: '15px',
                          fontWeight: 600,
                          color: 'var(--text-primary, #2F2F2F)',
                          marginBottom: '4px',
                        }}
                      >
                        {item.title}
                      </div>
                      <div
                        style={{
                          fontSize: '13px',
                          color: 'var(--text-secondary, #5A5652)',
                          lineHeight: 1.5,
                        }}
                      >
                        {item.desc}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ==================================================
            6. 3-STEP SEAMLESS JOURNEY (SIMPLE ENGLISH)
            ================================================== */}
        <div style={{ marginBottom: '56px' }}>
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 32px' }}>
            <div
              style={{
                fontSize: '11px',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'var(--accent-walnut, #7A5A3A)',
                fontWeight: 600,
                marginBottom: '8px',
              }}
            >
              Easy 3 Steps
            </div>
            <h3
              style={{
                fontSize: 'clamp(22px, 2.8vw, 30px)',
                color: 'var(--text-primary, #2F2F2F)',
                fontWeight: 500,
                letterSpacing: '0.01em',
                margin: 0,
              }}
            >
              How We Work (Simple 3 Steps)
            </h3>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '20px',
            }}
            className="why-steps-grid"
          >
            {customerSteps.map((stepItem, idx) => (
              <motion.div
                key={stepItem.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                style={{
                  backgroundColor: 'var(--bg-surface, #FFFFFF)',
                  padding: '28px 24px',
                  borderRadius: '14px',
                  border: '1px solid var(--border-card, rgba(122, 90, 58, 0.16))',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)',
                  transition: 'border-color 0.25s ease, transform 0.25s ease',
                }}
                className="why-step-card"
              >
                {/* Step Number + Tag */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '16px',
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                      fontSize: '32px',
                      fontWeight: 600,
                      color: 'var(--accent-walnut, #7A5A3A)',
                      lineHeight: 1,
                    }}
                  >
                    {stepItem.step}
                  </span>
                  <span
                    style={{
                      fontSize: '10.5px',
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      color: 'var(--accent-walnut, #7A5A3A)',
                      backgroundColor: 'rgba(122, 90, 58, 0.08)',
                      padding: '4px 10px',
                      borderRadius: '9999px',
                      fontWeight: 500,
                      border: '1px solid rgba(122, 90, 58, 0.14)',
                    }}
                  >
                    {stepItem.tag}
                  </span>
                </div>

                <h4
                  style={{
                    fontSize: '16px',
                    fontWeight: 600,
                    color: 'var(--text-primary, #2F2F2F)',
                    marginBottom: '8px',
                    letterSpacing: '0.01em',
                  }}
                >
                  {stepItem.title}
                </h4>

                <p
                  style={{
                    fontSize: '13px',
                    color: 'var(--text-secondary, #5A5652)',
                    lineHeight: 1.55,
                    margin: 0,
                  }}
                >
                  {stepItem.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ==================================================
            7. SHOWROOM VISIT & CONSULTATION BANNER (SIMPLE ENGLISH)
            ================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{
            backgroundColor: 'var(--bg-secondary, #E7D7BE)',
            border: '1px solid rgba(122, 90, 58, 0.22)',
            borderRadius: '16px',
            padding: '36px 32px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '24px',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.04)',
          }}
          className="why-cta-banner"
        >
          <div style={{ maxWidth: '600px', position: 'relative', zIndex: 1 }}>
            <div
              style={{
                fontSize: '11px',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'var(--accent-walnut, #7A5A3A)',
                fontWeight: 600,
                marginBottom: '6px',
              }}
            >
              Visit Us Today
            </div>
            <h3
              style={{
                fontSize: 'clamp(22px, 2.5vw, 28px)',
                color: 'var(--text-primary, #2F2F2F)',
                fontWeight: 500,
                marginBottom: '8px',
              }}
            >
              Visit Our Showroom or Call for Free Home Visit
            </h3>
            <p
              style={{
                fontSize: '14px',
                color: 'var(--text-secondary, #5A5652)',
                lineHeight: 1.55,
                margin: 0,
              }}
            >
              See thousands of ready wallpapers in person at Polaris Mall (Varachha), Bhatar Road, or Katargam. Open 7 days a week (10 AM to 9 PM).
            </p>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              flexWrap: 'wrap',
              position: 'relative',
              zIndex: 1,
            }}
            className="why-cta-btns"
          >
            <button
              onClick={() => setIsShowroomModalOpen(true)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '13px 24px',
                borderRadius: '9999px',
                backgroundColor: 'var(--accent-walnut, #7A5A3A)',
                color: '#ffffff',
                fontSize: '13px',
                fontWeight: 600,
                letterSpacing: '0.03em',
                textTransform: 'uppercase',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 4px 14px rgba(122, 90, 58, 0.25)',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--accent-walnut-hover, #63472C)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--accent-walnut, #7A5A3A)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <MapPin size={16} />
              <span>Visit Showroom</span>
            </button>

            <Link
              to="/catalogs"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '13px 22px',
                borderRadius: '9999px',
                backgroundColor: '#FFFFFF',
                border: '1px solid rgba(122, 90, 58, 0.3)',
                color: 'var(--text-primary, #2F2F2F)',
                fontSize: '13px',
                fontWeight: 500,
                letterSpacing: '0.03em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(122, 90, 58, 0.08)';
                e.currentTarget.style.borderColor = 'var(--accent-walnut, #7A5A3A)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#FFFFFF';
                e.currentTarget.style.borderColor = 'rgba(122, 90, 58, 0.3)';
              }}
            >
              <span>See Catalogs</span>
              <ArrowUpRight size={16} />
            </Link>

            <a
              href="https://wa.me/918320802633?text=Hi%2C%20I%20want%20to%20know%20more%20about%20Gujarat%20Wallpaper%20%26%20Decor%20collections"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '13px 20px',
                borderRadius: '9999px',
                backgroundColor: '#25D366',
                border: '1px solid #25D366',
                color: '#ffffff',
                fontSize: '13px',
                fontWeight: 600,
                letterSpacing: '0.03em',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
                boxShadow: '0 4px 14px rgba(37, 211, 102, 0.25)',
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
              <Phone size={15} />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Showroom Branches Modal Teleported to document.body */}
      <ShowroomModal
        isOpen={isShowroomModalOpen}
        onClose={() => setIsShowroomModalOpen(false)}
      />

      {/* Scoped CSS for hover interactions & responsive layouts */}
      <style>{`
        .why-achievement-card:hover,
        .editorial-item-box:hover,
        .why-step-card:hover,
        .social-cta-card:hover {
          border-color: rgba(122, 90, 58, 0.4) !important;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(122, 90, 58, 0.08) !important;
        }

        .social-cta-card:hover .social-arrow-btn {
          background-color: var(--accent-walnut, #7A5A3A) !important;
          border-color: var(--accent-walnut, #7A5A3A) !important;
          color: #ffffff !important;
          transform: translate(2px, -2px);
        }

        .silver-play-block:hover .silver-photo {
          transform: scale(1.03);
        }

        /* Responsive Breakpoints */
        @media (max-width: 1200px) {
          .why-achievements-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }

        @media (max-width: 1024px) {
          .why-achievements-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .why-social-grid {
            grid-template-columns: 1fr !important;
            max-width: 520px !important;
            margin-left: auto !important;
            margin-right: auto !important;
          }
          .why-editorial-split {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
          .why-visual-frame {
            height: 380px !important;
          }
          .silver-play-grid {
            grid-template-columns: 1fr !important;
          }
          .silver-play-img-box {
            min-height: 320px !important;
            max-height: 380px !important;
          }
        }

        @media (max-width: 768px) {
          #why-choose-us {
            padding: 48px 0 !important;
          }
          .why-achievements-grid {
            grid-template-columns: 1fr !important;
            gap: 12px !important;
          }
          .why-social-grid {
            grid-template-columns: 1fr !important;
          }
          .why-steps-grid {
            grid-template-columns: 1fr !important;
            gap: 14px !important;
          }
          .silver-play-content {
            padding: 24px 20px !important;
          }
          .silver-play-img-box {
            min-height: 250px !important;
          }
          .why-visual-frame {
            height: 320px !important;
          }
          .why-cta-banner {
            padding: 24px 20px !important;
          }
          .why-cta-btns {
            width: 100% !important;
            flex-direction: column !important;
          }
          .why-cta-btns button,
          .why-cta-btns a {
            width: 100% !important;
            justify-content: center !important;
          }
        }

        @media (max-width: 480px) {
          .why-achievements-grid {
            grid-template-columns: 1fr !important;
          }
          .why-visual-frame {
            height: 280px !important;
          }
        }
      `}</style>
    </section>
  );
}
