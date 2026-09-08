import React from 'react';
import { motion } from 'framer-motion';
import {
  Award,
  ShieldCheck,
  Grid3X3,
  Users,
  Building2,
  ArrowUpRight,
  Sparkles,
  Play
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

// Custom SVG Icons for Instagram & YouTube for precision luxury styling
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

  // Dynamic Theme Palette - Ivory + Warm Beige + Walnut Luxury
  const colors = {
    bgSection: '#F8F5F1',
    textPrimary: '#2F2F2F',
    textSecondary: '#5A5652',
    textMuted: '#7A7570',
    accentGold: '#C8A96A',
    accentWalnut: '#7A5A3A',
    accentWalnutHover: '#5E4329',
    cardBg: '#FFFFFF',
    cardHoverBg: '#FAF7F2',
    borderSubtle: 'rgba(122, 90, 58, 0.12)',
    borderCard: 'rgba(122, 90, 58, 0.16)',
    silverBg: '#FFFFFF',
    socialBg: '#FFFFFF',
    boxShadow: '0 12px 32px rgba(122, 90, 58, 0.08)',
  };

  // 5 Achievement Cards (Instagram, YouTube, Facebook, Trust, Customers)
  const achievements = [
    {
      metric: '100K+',
      label: 'INSTAGRAM FOLLOWERS',
      description: 'Gujarat Wallpaper & Decor has built a growing community of design lovers.',
      icon: InstagramIcon,
    },
    {
      metric: '160K+',
      label: 'YOUTUBE SUBSCRIBERS',
      description: 'Your trust and support are our greatest achievement.',
      icon: Play,
    },
    {
      metric: '300K+',
      label: 'FACEBOOK FOLLOWERS',
      description: 'Connected with homeowners & designers across Gujarat & India.',
      icon: FacebookIcon,
    },
    {
      metric: '5+ YEARS',
      label: 'OF TRUST & EXCELLENCE',
      description: 'Delivering quality wallpaper and decor solutions with dedication.',
      icon: Award,
    },
    {
      metric: '20K+',
      label: 'HAPPY CUSTOMERS',
      description: 'Helping transform homes and spaces with beautiful wall solutions.',
      icon: Users,
    },
  ];

  // 5 Compact Feature Cards
  const features = [
    {
      icon: Award,
      title: 'Premium Designs',
      description: 'Carefully curated patterns from around the world',
    },
    {
      icon: ShieldCheck,
      title: 'Quality Products',
      description: 'Durable, reliable & made to last',
    },
    {
      icon: Grid3X3,
      title: 'Wide Collection',
      description: 'Wallpapers, panels, carpets & more under one roof',
    },
    {
      icon: Users,
      title: 'Expert Guidance',
      description: 'Personalized assistance for every need',
    },
    {
      icon: Building2,
      title: 'Residential & Commercial',
      description: 'Solutions for homes, offices & commercial spaces',
    },
  ];

  return (
    <section
      id="why-choose-us"
      style={{
        padding: '7.5rem 0',
        backgroundColor: colors.bgSection,
        color: colors.textPrimary,
        position: 'relative',
        overflow: 'hidden',
        borderTop: `1px solid ${colors.borderSubtle}`,
        borderBottom: `1px solid ${colors.borderSubtle}`,
        transition: 'background-color 0.35s ease, color 0.3s ease, border-color 0.3s ease',
      }}
    >
      {/* Background ambient lighting */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '750px',
          height: '450px',
          background: isDark
            ? 'radial-gradient(circle, rgba(197, 168, 128, 0.05) 0%, rgba(18, 17, 16, 0) 70%)'
            : 'radial-gradient(circle, rgba(166, 131, 83, 0.06) 0%, rgba(251, 249, 245, 0) 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container-luxury" style={{ position: 'relative', zIndex: 2 }}>
        {/* ==================================================
            1. SECTION TITLE
            ================================================== */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 4rem' }}>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '0.75rem',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: colors.accentGold,
              fontWeight: 600,
              marginBottom: '0.85rem',
            }}
          >
            <Sparkles size={14} />
            OUR DISTINCTION
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(2.5rem, 4.5vw, 3.8rem)',
              color: colors.textPrimary,
              marginBottom: '1rem',
              fontWeight: 500,
              letterSpacing: '0.01em',
              lineHeight: 1.15,
            }}
          >
            Why Choose Us
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{
              fontSize: '1rem',
              color: colors.textSecondary,
              lineHeight: 1.7,
              fontWeight: 300,
            }}
          >
            Our commitment to design integrity, premium quality, and personalized service has made us a trusted name in Surat.
          </motion.p>
        </div>

        {/* ==================================================
            2. ACHIEVEMENT CARDS (5 CARDS)
            ================================================== */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: '1.25rem',
            marginBottom: '4rem',
          }}
          className="why-achievements-grid"
        >
          {achievements.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  backgroundColor: colors.cardBg,
                  border: `1px solid ${colors.borderCard}`,
                  borderRadius: '24px',
                  padding: '2.4rem 1.6rem',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  boxShadow: colors.boxShadow,
                  transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
                className="why-achievement-card"
              >
                {/* Top: Icon */}
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '12px',
                    backgroundColor: 'rgba(122, 90, 58, 0.1)',
                    border: `1px solid ${colors.borderCard}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: colors.accentWalnut,
                    marginBottom: '1.25rem',
                  }}
                >
                  <IconComp size={20} />
                </div>

                {/* Large Walnut Number */}
                <div
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: 'clamp(2.1rem, 2.8vw, 2.85rem)',
                    fontWeight: 700,
                    color: colors.accentWalnut,
                    lineHeight: 1.1,
                    letterSpacing: '-0.02em',
                    marginBottom: '0.4rem',
                  }}
                >
                  {item.metric}
                </div>

                {/* Uppercase Small Label */}
                <div
                  style={{
                    fontSize: '0.74rem',
                    fontWeight: 700,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: colors.textPrimary,
                    marginBottom: '0.75rem',
                  }}
                >
                  {item.label}
                </div>

                {/* Short Supporting Text */}
                <p
                  style={{
                    fontSize: '0.86rem',
                    color: colors.textSecondary,
                    lineHeight: 1.55,
                    fontWeight: 400,
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
            3. REAL YOUTUBE SILVER PLAY BUTTON SECTION
            ================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{
            backgroundColor: colors.silverBg,
            border: `1px solid ${colors.borderCard}`,
            borderRadius: '24px',
            overflow: 'hidden',
            marginBottom: '3.5rem',
            boxShadow: colors.boxShadow,
          }}
          className="silver-play-block"
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(320px, 1fr) 1.1fr',
              alignItems: 'center',
            }}
            className="silver-play-grid"
          >
            {/* LEFT SIDE: REAL PHOTO */}
            <div
              style={{
                position: 'relative',
                height: '100%',
                minHeight: '440px',
                maxHeight: '520px',
                overflow: 'hidden',
                backgroundColor: isDark ? '#0D0C0B' : '#EAE3D9',
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
                  transition: 'transform 0.7s ease',
                }}
                className="silver-photo"
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: isDark
                    ? 'linear-gradient(to right, rgba(20, 19, 18, 0.2) 0%, rgba(20, 19, 18, 0.7) 100%)'
                    : 'linear-gradient(to right, rgba(0, 0, 0, 0.05) 0%, rgba(0, 0, 0, 0.35) 100%)',
                  pointerEvents: 'none',
                }}
              />
            </div>

            {/* RIGHT SIDE: RICH CONTENT & STATS */}
            <div
              style={{
                padding: '3.5rem 3.5rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
              className="silver-play-content"
            >
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.72rem',
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  color: colors.accentGold,
                  fontWeight: 600,
                  marginBottom: '1rem',
                }}
              >
                <Sparkles size={14} />
                OFFICIAL RECOGNITION
              </div>

              <h3
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: 'clamp(2.1rem, 3.2vw, 3rem)',
                  color: colors.textPrimary,
                  fontWeight: 500,
                  lineHeight: 1.18,
                  marginBottom: '1.25rem',
                  letterSpacing: '0.01em',
                }}
              >
                Recognized by YouTube with the{' '}
                <span style={{ color: colors.accentGold, fontStyle: 'italic' }}>
                  Silver Creator Award
                </span>
              </h3>

              <p
                style={{
                  fontSize: '0.98rem',
                  color: colors.textSecondary,
                  lineHeight: 1.7,
                  fontWeight: 300,
                  marginBottom: '2rem',
                }}
              >
                A proud moment for the entire Gujarat Wallpaper &amp; Decor family in Surat. Our YouTube channel has surpassed 160,000+ subscribers and our Instagram community has grown beyond 100,000+ followers. This recognition belongs to our customers, architects, and designers whose ongoing trust drives our continuous pursuit of excellence.
              </p>

              {/* Verified Trust Strip */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.5rem',
                  flexWrap: 'wrap',
                  paddingTop: '1.5rem',
                  borderTop: `1px solid ${colors.borderSubtle}`,
                }}
              >
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.6rem',
                    padding: '0.45rem 1rem',
                    backgroundColor: isDark ? 'rgba(197, 168, 128, 0.1)' : 'rgba(166, 131, 83, 0.1)',
                    border: `1px solid ${colors.borderCard}`,
                    borderRadius: '9999px',
                    fontSize: '0.78rem',
                    letterSpacing: '0.08em',
                    color: colors.textPrimary,
                    textTransform: 'uppercase',
                    fontWeight: 500,
                  }}
                >
                  <span
                    style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      backgroundColor: colors.accentGold,
                      boxShadow: `0 0 10px ${colors.accentGold}`,
                    }}
                  />
                  100,000+ Subscribers Milestone
                </div>

                <div
                  style={{
                    fontSize: '0.8rem',
                    color: colors.textMuted,
                    letterSpacing: '0.04em',
                  }}
                >
                  Official YouTube Creator Award • Surat Showroom
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ==================================================
            4. SOCIAL MEDIA BUTTONS (THREE LUXURY CTA CARDS)
            ================================================== */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.5rem',
            marginBottom: '4.5rem',
          }}
          className="why-social-grid"
        >
          {/* BUTTON 1 — INSTAGRAM */}
          <motion.a
            href="https://www.instagram.com/gujarat_wallpaper_decor/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              textDecoration: 'none',
              backgroundColor: colors.socialBg,
              border: '1px solid rgba(122, 90, 58, 0.16)',
              borderRadius: '24px',
              padding: '1.85rem 2rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1.25rem',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: colors.boxShadow,
              transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
            className="social-cta-card instagram-cta"
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
              <div
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '16px',
                  background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                  flexShrink: 0,
                  boxShadow: '0 6px 18px rgba(220, 39, 67, 0.3)',
                }}
              >
                <InstagramIcon size={24} color="#FFFFFF" />
              </div>

              <div>
                <div
                  style={{
                    fontSize: '1.15rem',
                    fontWeight: 600,
                    color: colors.textPrimary,
                    marginBottom: '0.2rem',
                    letterSpacing: '0.01em',
                  }}
                >
                  Follow Us on Instagram
                </div>
                <div
                  style={{
                    fontSize: '0.86rem',
                    color: colors.accentWalnut,
                    fontWeight: 600,
                    letterSpacing: '0.02em',
                  }}
                >
                  @gujarat_wallpaper_decor
                </div>
              </div>
            </div>

            <div
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                backgroundColor: 'rgba(122, 90, 58, 0.1)',
                border: `1px solid ${colors.borderCard}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: colors.accentWalnut,
                flexShrink: 0,
                transition: 'all 0.35s ease',
              }}
              className="social-arrow-btn"
            >
              <ArrowUpRight size={20} />
            </div>
          </motion.a>

          {/* BUTTON 2 — YOUTUBE */}
          <motion.a
            href="https://www.youtube.com/@Gujaratwallpaper"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              textDecoration: 'none',
              backgroundColor: colors.socialBg,
              border: '1px solid rgba(122, 90, 58, 0.16)',
              borderRadius: '24px',
              padding: '1.85rem 2rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1.25rem',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: colors.boxShadow,
              transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
            className="social-cta-card youtube-cta"
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
              <div
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '16px',
                  backgroundColor: '#FF0000',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                  flexShrink: 0,
                  boxShadow: '0 6px 18px rgba(255, 0, 0, 0.3)',
                }}
              >
                <YouTubeIcon size={24} color="#FFFFFF" />
              </div>

              <div>
                <div
                  style={{
                    fontSize: '1.15rem',
                    fontWeight: 600,
                    color: colors.textPrimary,
                    marginBottom: '0.2rem',
                    letterSpacing: '0.01em',
                  }}
                >
                  Subscribe on YouTube
                </div>
                <div
                  style={{
                    fontSize: '0.86rem',
                    color: colors.accentWalnut,
                    fontWeight: 600,
                    letterSpacing: '0.02em',
                  }}
                >
                  @Gujaratwallpaper
                </div>
              </div>
            </div>

            <div
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                backgroundColor: 'rgba(122, 90, 58, 0.1)',
                border: `1px solid ${colors.borderCard}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: colors.accentWalnut,
                flexShrink: 0,
                transition: 'all 0.35s ease',
              }}
              className="social-arrow-btn"
            >
              <ArrowUpRight size={20} />
            </div>
          </motion.a>

          {/* BUTTON 3 — FACEBOOK */}
          <motion.a
            href="https://www.facebook.com/share/19FULrAcv3/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              textDecoration: 'none',
              backgroundColor: colors.socialBg,
              border: '1px solid rgba(122, 90, 58, 0.16)',
              borderRadius: '24px',
              padding: '1.85rem 2rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1.25rem',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: colors.boxShadow,
              transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
            className="social-cta-card facebook-cta"
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
              <div
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '16px',
                  backgroundColor: '#1877F2',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                  flexShrink: 0,
                  boxShadow: '0 6px 18px rgba(24, 119, 242, 0.3)',
                }}
              >
                <FacebookIcon size={24} color="#FFFFFF" />
              </div>

              <div>
                <div
                  style={{
                    fontSize: '1.15rem',
                    fontWeight: 600,
                    color: colors.textPrimary,
                    marginBottom: '0.2rem',
                    letterSpacing: '0.01em',
                  }}
                >
                  Follow Us on Facebook
                </div>
                <div
                  style={{
                    fontSize: '0.86rem',
                    color: colors.accentWalnut,
                    fontWeight: 600,
                    letterSpacing: '0.02em',
                  }}
                >
                  Arun Vala
                </div>
              </div>
            </div>

            <div
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                backgroundColor: 'rgba(122, 90, 58, 0.1)',
                border: `1px solid ${colors.borderCard}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: colors.accentWalnut,
                flexShrink: 0,
                transition: 'all 0.35s ease',
              }}
              className="social-arrow-btn"
            >
              <ArrowUpRight size={20} />
            </div>
          </motion.a>
        </div>

        {/* ==================================================
            5. WHY CHOOSE US FEATURES (COMPACT ROW OF 5 CARDS)
            ================================================== */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: '1.25rem',
          }}
          className="why-features-grid"
        >
          {features.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  backgroundColor: colors.cardBg,
                  padding: '2rem 1.4rem',
                  borderRadius: '20px',
                  border: `1px solid ${colors.borderCard}`,
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: colors.boxShadow,
                  transition: 'all 0.35s ease',
                }}
                className="why-feature-card"
              >
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '12px',
                    backgroundColor: 'rgba(122, 90, 58, 0.1)',
                    border: `1px solid ${colors.borderCard}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: colors.accentWalnut,
                    marginBottom: '1.25rem',
                    transition: 'all 0.3s ease',
                  }}
                  className="feature-icon-box"
                >
                  <IconComponent size={20} />
                </div>

                <h4
                  style={{
                    fontSize: '1rem',
                    color: colors.textPrimary,
                    marginBottom: '0.45rem',
                    fontWeight: 600,
                    letterSpacing: '0.01em',
                  }}
                >
                  {item.title}
                </h4>

                <p
                  style={{
                    fontSize: '0.82rem',
                    color: colors.textMuted,
                    lineHeight: 1.55,
                    fontWeight: 300,
                    margin: 0,
                  }}
                >
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Scoped CSS for hover interactions & responsive layouts */}
      <style>{`
        .why-achievement-card:hover {
          transform: translateY(-5px);
          border-color: ${colors.accentGold} !important;
          box-shadow: ${isDark ? '0 16px 36px rgba(0, 0, 0, 0.5)' : '0 14px 30px rgba(0, 0, 0, 0.09)'};
          background-color: ${colors.cardHoverBg} !important;
        }

        .silver-play-block:hover .silver-photo {
          transform: scale(1.03);
        }

        .social-cta-card:hover {
          transform: translateY(-4px);
          box-shadow: ${isDark ? '0 16px 36px rgba(0, 0, 0, 0.55)' : '0 14px 30px rgba(0, 0, 0, 0.1)'};
        }
        .instagram-cta:hover {
          border-color: rgba(225, 48, 108, 0.6) !important;
          background: ${isDark
          ? 'linear-gradient(135deg, rgba(131, 58, 180, 0.15) 0%, rgba(253, 29, 29, 0.12) 50%, rgba(20, 19, 18, 0.98) 100%)'
          : 'linear-gradient(135deg, #FFF0F5 0%, #FFFFFF 100%)'} !important;
        }
        .instagram-cta:hover .social-arrow-btn {
          background-color: #E1306C !important;
          border-color: #E1306C !important;
          color: #FFFFFF !important;
          transform: translate(2px, -2px);
        }
        .youtube-cta:hover {
          border-color: rgba(255, 0, 0, 0.6) !important;
          background: ${isDark
          ? 'linear-gradient(135deg, rgba(255, 0, 0, 0.15) 0%, rgba(20, 19, 18, 0.98) 100%)'
          : 'linear-gradient(135deg, #FFF5F5 0%, #FFFFFF 100%)'} !important;
        }
        .youtube-cta:hover .social-arrow-btn {
          background-color: #FF0000 !important;
          border-color: #FF0000 !important;
          color: #FFFFFF !important;
          transform: translate(2px, -2px);
        }
        .facebook-cta:hover {
          border-color: rgba(24, 119, 242, 0.6) !important;
          background: ${isDark
          ? 'linear-gradient(135deg, rgba(24, 119, 242, 0.15) 0%, rgba(20, 19, 18, 0.98) 100%)'
          : 'linear-gradient(135deg, #F0F5FF 0%, #FFFFFF 100%)'} !important;
        }
        .facebook-cta:hover .social-arrow-btn {
          background-color: #1877F2 !important;
          border-color: #1877F2 !important;
          color: #FFFFFF !important;
          transform: translate(2px, -2px);
        }

        .why-feature-card:hover {
          transform: translateY(-4px);
          border-color: ${colors.accentGold} !important;
          background-color: ${colors.cardHoverBg} !important;
        }
        .why-feature-card:hover .feature-icon-box {
          background-color: ${colors.accentGold} !important;
          color: ${isDark ? '#141312' : '#FFFFFF'} !important;
          border-color: ${colors.accentGold} !important;
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
          .why-features-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
          .silver-play-grid {
            grid-template-columns: 1fr !important;
          }
          .silver-play-img-box {
            min-height: 380px !important;
            max-height: 420px !important;
          }
        }

        @media (max-width: 768px) {
          .why-achievements-grid {
            grid-template-columns: 1fr !important;
            gap: 1rem !important;
          }
          .why-social-grid {
            grid-template-columns: 1fr !important;
          }
          .why-features-grid {
            grid-template-columns: 1fr !important;
          }
          .silver-play-content {
            padding: 2.25rem 1.5rem !important;
          }
          .silver-play-img-box {
            min-height: 320px !important;
          }
          #why-choose-us {
            padding: 5rem 0 !important;
          }
        }

        @media (max-width: 480px) {
          #why-choose-us {
            padding: 4rem 0 !important;
          }
          .why-achievements-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
