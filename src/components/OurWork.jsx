import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Play, X, ArrowUpRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

function InstagramIcon({ size = 22, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
        fill={color}
      />
    </svg>
  );
}

export const WORK_ITEMS = [
  // 1. Wallpaper Videos
  {
    id: 'work-video-1',
    category: 'WALLPAPER',
    title: 'Luxury Living Room Designer Wallpaper Installation',
    subtitle: 'Residential Bungalow • Surat Site Work',
    video: '/videos/work-video-01.mp4',
    aspect: 'portrait',
    description: 'Actual on-site wallpaper fitting by Gujarat Wallpaper & Decor team, showcasing seamless alignment and premium textured finish.',
  },
  {
    id: 'work-video-2',
    category: 'WALLPAPER',
    title: 'Modern Drawing Room Feature Wallfitting',
    subtitle: 'Apartment Interior • Surat Site Work',
    video: '/videos/work-video-02.mp4',
    aspect: 'portrait',
    description: 'Precision craftsmanship and smooth bubble-free wallpaper installation in progress for luxury residential space.',
  },
  {
    id: 'work-video-3',
    category: 'WALLPAPER',
    title: 'Metallic Texture & Gold Line Wallpaper Art',
    subtitle: 'Master Bedroom Accent • Surat Site Work',
    video: '/videos/work-video-03.mp4',
    aspect: 'portrait',
    description: 'High-end imported wallpaper surface fitting with specialized adhesives for long-lasting durability.',
  },

  // 2. UV Marble Roll & PVC Panel Videos
  {
    id: 'work-video-4',
    category: 'UV MARBLE ROLL',
    title: 'Self-Adhesive UV Marble Sheet Installation',
    subtitle: 'Waterproof Interior Wall Cladding • Surat Site Work',
    video: '/videos/work-video-04.mp4',
    aspect: 'portrait',
    description: 'High-gloss UV marble roll installation providing authentic Italian marble finish with waterproof & fire-resistant properties.',
  },
  {
    id: 'work-video-5',
    category: 'UV MARBLE ROLL',
    title: 'Grand Showroom Stock & Marble Roll Collection',
    subtitle: 'All India Supply & Selection • Surat Warehouse',
    video: '/videos/work-video-05.mp4',
    aspect: 'portrait',
    description: 'Unboxing and quality check of premium UV marble rolls and architectural sheets ready for client dispatch.',
  },
  {
    id: 'work-video-6',
    category: 'UV MARBLE ROLL',
    title: 'Architectural Fluted Louvers & UV Wall Fitting',
    subtitle: 'Commercial & Living Space Decor • Surat Site Work',
    video: '/videos/work-video-06.mp4',
    aspect: 'portrait',
    description: 'Live site installation of fluted wooden louvers and UV marble combination on contemporary TV unit background wall.',
  },
];

export default function OurWork({ id = 'our-work' }) {
  const [selectedItem, setSelectedItem] = useState(null);
  const { isDark } = useTheme();

  const colors = {
    bgMain: '#F8F5F1',
    bgCard: '#FFFFFF',
    textPrimary: '#2F2F2F',
    textSecondary: '#5A5652',
    accentWalnut: '#7A5A3A',
    accentGold: '#C8A96A',
    borderSubtle: 'rgba(122, 90, 58, 0.12)',
    borderCard: 'rgba(122, 90, 58, 0.16)',
  };

  return (
    <section
      id={id}
      style={{
        padding: '7.5rem 0',
        backgroundColor: colors.bgMain,
        borderTop: `1px solid ${colors.borderSubtle}`,
        position: 'relative',
        transition: 'background-color 0.35s ease, border-color 0.3s ease',
      }}
      aria-label="Our Work - Actual Wallpaper and UV Marble Roll Project Videos"
    >
      <div className="container-luxury">
        <div
          style={{
            maxWidth: '680px',
            marginBottom: '3.5rem',
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '0.75rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: colors.accentWalnut,
              fontWeight: 700,
              marginBottom: '0.75rem',
            }}
          >
            <Sparkles size={14} />
            <span>LIVE PROJECT &amp; INSTALLATION VIDEOS</span>
          </div>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(2.3rem, 4.5vw, 3.8rem)',
              color: colors.textPrimary,
              fontWeight: 600,
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
              marginBottom: '0.85rem',
            }}
          >
            Our Work
          </h2>
          <p
            style={{
              fontSize: '1.05rem',
              color: colors.textSecondary,
              lineHeight: 1.7,
              fontWeight: 400,
            }}
          >
            Watch actual project videos and live wall transformations executed by Gujarat Wallpaper &amp; Decor across Surat.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '2rem',
          }}
          className="our-work-grid"
        >
          {WORK_ITEMS.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              style={{
                backgroundColor: colors.bgCard,
                borderRadius: '24px',
                overflow: 'hidden',
                border: `1px solid ${colors.borderCard}`,
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                boxShadow: '0 12px 32px rgba(122, 90, 58, 0.08)',
                transition: 'transform 0.35s ease, box-shadow 0.35s ease, border-color 0.3s ease',
              }}
              className="our-work-card"
            >
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '9 / 14',
                  maxHeight: '440px',
                  overflow: 'hidden',
                  backgroundColor: '#E7D7BE',
                }}
              >
                <video
                  src={item.video}
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.play().catch(() => {});
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.pause();
                    e.currentTarget.currentTime = 0;
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(47, 47, 47, 0.75) 0%, transparent 50%)',
                    pointerEvents: 'none',
                  }}
                />
                <div
                  className="work-play-overlay"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    pointerEvents: 'none',
                  }}
                >
                  <div
                    style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(255, 255, 255, 0.95)',
                      color: colors.accentWalnut,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      paddingLeft: '3px',
                      boxShadow: '0 8px 24px rgba(122, 90, 58, 0.25)',
                      transition: 'transform 0.3s ease, background-color 0.3s ease',
                    }}
                    className="play-btn-circle"
                  >
                    <Play size={22} fill={colors.accentWalnut} />
                  </div>
                </div>
              </div>
              <div
                style={{
                  padding: '1.6rem',
                  display: 'flex',
                  flexDirection: 'column',
                  flexGrow: 1,
                  backgroundColor: colors.bgCard,
                }}
              >
                <div
                  style={{
                    fontSize: '0.74rem',
                    color: colors.accentWalnut,
                    fontWeight: 700,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    marginBottom: '0.4rem',
                  }}
                >
                  {item.subtitle}
                </div>
                <h3
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: '1.3rem',
                    color: colors.textPrimary,
                    fontWeight: 600,
                    lineHeight: 1.25,
                    marginBottom: '0.5rem',
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontSize: '0.9rem',
                    color: colors.textSecondary,
                    lineHeight: 1.6,
                    fontWeight: 400,
                    margin: 0,
                  }}
                >
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram Follow Call-to-Action Banner */}
        <div
          style={{
            marginTop: '4.5rem',
            padding: '2.75rem 2.5rem',
            borderRadius: '24px',
            backgroundColor: '#E7D7BE',
            border: `1px solid ${colors.borderCard}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '2rem',
            boxShadow: '0 16px 40px rgba(122, 90, 58, 0.1)',
            position: 'relative',
            overflow: 'hidden',
          }}
          className="our-work-instagram-banner"
        >
          {/* Subtle Walnut glow background */}
          <div
            style={{
              position: 'absolute',
              top: '-50%',
              right: '-10%',
              width: '320px',
              height: '320px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(122, 90, 58, 0.15) 0%, transparent 70%)',
              pointerEvents: 'none',
            }}
          />

          <div style={{ maxWidth: '640px', position: 'relative', zIndex: 1 }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.74rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: colors.accentWalnut,
                fontWeight: 700,
                marginBottom: '0.5rem',
              }}
            >
              <InstagramIcon size={16} color={colors.accentWalnut} />
              <span>OFFICIAL INSTAGRAM COMMUNITY • 100K+ FOLLOWERS</span>
            </div>
            <h3
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)',
                color: colors.textPrimary,
                fontWeight: 600,
                lineHeight: 1.2,
                marginBottom: '0.5rem',
              }}
            >
              Want to see more of our latest work &amp; site transformations?
            </h3>
            <p
              style={{
                fontSize: '0.95rem',
                color: colors.textSecondary,
                lineHeight: 1.6,
                fontWeight: 400,
                margin: 0,
              }}
            >
              અમારા રોજિંદા નવા પ્રોજેક્ટ્સ, લાઈવ સાઈટ વિડીયો અને લેટેસ્ટ વોલપેપર કલેક્શન જોવા માટે આજે જ અમારા Instagram પેજને ફોલો કરો.
            </p>
          </div>

          <a
            href="https://www.instagram.com/gujarat_wallpaper_decor/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem',
              padding: '1rem 2rem',
              borderRadius: '22px',
              background: 'linear-gradient(135deg, #7A5A3A 0%, #5E4329 100%)',
              color: '#FFFFFF',
              textDecoration: 'none',
              fontSize: '0.88rem',
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              boxShadow: '0 8px 24px rgba(122, 90, 58, 0.3)',
              transition: 'all 0.3s ease',
              position: 'relative',
              zIndex: 1,
            }}
            className="our-work-insta-btn"
          >
            <InstagramIcon size={20} color="#FFFFFF" />
            <span>Follow on Instagram</span>
            <ArrowUpRight size={18} />
          </a>
        </div>
      </div>

      <AnimatePresence>
        {selectedItem && (
          <div
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 350,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1.25rem',
            }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
              style={{
                position: 'absolute',
                inset: 0,
                backgroundColor: 'rgba(10, 9, 8, 0.92)',
                backdropFilter: 'blur(10px)',
              }}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              style={{
                position: 'relative',
                maxWidth: '520px',
                width: '100%',
                maxHeight: '92vh',
                backgroundColor: isDark ? '#171614' : '#FFFFFF',
                borderRadius: '14px',
                overflow: 'hidden',
                border: `1px solid ${colors.borderCard}`,
                boxShadow: '0 30px 80px rgba(0, 0, 0, 0.8)',
                zIndex: 10,
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <button
                onClick={() => setSelectedItem(null)}
                aria-label="Close Video Player"
                style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  zIndex: 20,
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(18, 17, 16, 0.85)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = colors.accentGold;
                  e.currentTarget.style.color = '#121110';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(18, 17, 16, 0.85)';
                  e.currentTarget.style.color = '#FFFFFF';
                }}
              >
                <X size={18} />
              </button>
              <div
                style={{
                  width: '100%',
                  maxHeight: '68vh',
                  backgroundColor: '#000000',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden',
                }}
              >
                <video
                  src={selectedItem.video}
                  autoPlay
                  controls
                  playsInline
                  style={{
                    width: '100%',
                    maxHeight: '68vh',
                    objectFit: 'contain',
                    display: 'block',
                  }}
                />
              </div>
              <div
                style={{
                  padding: '1.25rem 1.5rem',
                  borderTop: `1px solid ${colors.borderSubtle}`,
                  backgroundColor: isDark ? '#171614' : '#FFFFFF',
                }}
              >
                <span
                  style={{
                    fontSize: '0.72rem',
                    color: colors.accentWalnut,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    fontWeight: 700,
                  }}
                >
                  Gujarat Wallpaper &amp; Decor • Surat
                </span>
                <h3
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: '1.35rem',
                    color: colors.textPrimary,
                    marginTop: '0.25rem',
                    marginBottom: '0.35rem',
                    fontWeight: 600,
                  }}
                >
                  {selectedItem.title}
                </h3>
                <p style={{ fontSize: '0.88rem', color: colors.textSecondary, margin: 0, lineHeight: 1.55 }}>
                  {selectedItem.description}
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <style>{`
        .our-work-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 48px rgba(122, 90, 58, 0.16) !important;
          border-color: rgba(122, 90, 58, 0.35) !important;
        }
        .our-work-card:hover .play-btn-circle {
          transform: scale(1.1);
          background-color: #FFFFFF !important;
        }

        @media (max-width: 1024px) {
          .our-work-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 1.5rem !important;
          }
        }

        @media (max-width: 768px) {
          #our-work {
            padding: 4.5rem 0 !important;
          }
          .our-work-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
          .our-work-instagram-banner {
            flex-direction: column !important;
            align-items: flex-start !important;
            padding: 2rem 1.5rem !important;
          }
          .our-work-insta-btn {
            width: 100% !important;
            justify-content: center !important;
          }
        }
      `}</style>
    </section>
  );
}
