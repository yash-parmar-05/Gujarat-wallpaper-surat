import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Compass, MapPin, Sparkles } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function About({ onVisitClick }) {
  const { isDark } = useTheme();

  const bg = isDark ? '#121110' : '#FBF9F5';
  const textPrimary = isDark ? '#F7F4EE' : '#1C1917';
  const textSecondary = isDark ? '#C8C2B7' : '#44403C';
  const textMuted = isDark ? '#948E85' : '#78716C';
  const gold = isDark ? '#C5A880' : '#A68353';
  const border = isDark ? '1px solid rgba(245, 242, 236, 0.08)' : '1px solid rgba(28, 25, 23, 0.08)';

  return (
    <section
      id="about"
      style={{
        padding: '8rem 0',
        backgroundColor: bg,
        position: 'relative',
        transition: 'background-color 0.35s ease, color 0.3s ease',
      }}
    >
      <div className="container-luxury">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '4rem',
            alignItems: 'center',
          }}
        >
          {/* Left Column: Visual Composition with Image overlap */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{
              gridColumn: 'span 6',
              position: 'relative',
            }}
            className="about-img-col"
          >
            {/* Primary Image */}
            <div
              style={{
                borderRadius: '8px',
                overflow: 'hidden',
                aspectRatio: '4/3',
                backgroundColor: '#141312',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.08)',
              }}
            >
              <img
                src="/assets/products/pvc-panel-showcase.jpg"
                alt="Gujarat Wallpaper & Decor Showroom Architectural Finish"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            {/* Inset Secondary Image */}
            <div
              style={{
                position: 'absolute',
                bottom: '-2.5rem',
                right: '-2rem',
                width: '55%',
                borderRadius: '6px',
                overflow: 'hidden',
                aspectRatio: '1/1',
                border: '6px solid #FBF9F5',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.12)',
                display: 'none',
              }}
              className="about-secondary-img"
            >
              <img
                src="/assets/products/wallpaper-card.jpg"
                alt="Pichwai Gold Relief Detail"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </motion.div>

          {/* Right Column: Editorial Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{
              gridColumn: 'span 6',
            }}
            className="about-text-col"
          >
            <div className="sub-tag" style={{ marginBottom: '0.75rem' }}>
              The Showroom
            </div>

            <h2
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: 'clamp(2.25rem, 4.2vw, 3.5rem)',
                color: textPrimary,
                marginBottom: '1.5rem',
                lineHeight: 1.15,
              }}
            >
              Gujarat Wallpaper &amp; Decor
            </h2>

            <p
              style={{
                fontSize: '1.05rem',
                color: textSecondary,
                lineHeight: 1.7,
                marginBottom: '1.25rem',
                fontWeight: 400,
              }}
            >
              Located in Surat, Gujarat, we specialize in premium wallpaper and interior decor solutions for residential and commercial spaces.
            </p>

            <p
              style={{
                fontSize: '0.95rem',
                color: textMuted,
                lineHeight: 1.7,
                marginBottom: '2rem',
                fontWeight: 300,
              }}
            >
              We believe walls define the emotional soul and architectural character of every room. Our curated portfolio brings together rich tactile wallpapers, three-dimensional acoustic PVC louvers, artisanal silk-blend carpets, lush terrace turf, and bespoke wall accents, offering architects, interior designers, and discerning homeowners complete surface excellence under one roof.
            </p>

            {/* Core Values / Location Info */}
            <div
              className="about-values-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '1.5rem',
                marginBottom: '2.5rem',
                borderTop: border,
                paddingTop: '1.5rem',
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: gold, marginBottom: '0.35rem' }}>
                  <MapPin size={15} />
                  <span style={{ fontSize: '0.75rem', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600 }}>
                    Surat, Gujarat
                  </span>
                </div>
                <p style={{ fontSize: '0.85rem', color: textMuted }}>
                  Dedicated showroom showcasing full-scale architectural wall installations and material swatches.
                </p>
              </div>

              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: gold, marginBottom: '0.35rem' }}>
                  <Compass size={15} />
                  <span style={{ fontSize: '0.75rem', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600 }}>
                    Full Space Harmony
                  </span>
                </div>
                <p style={{ fontSize: '0.85rem', color: textMuted }}>
                  Cohesive material curation from vertical walls to flooring and outdoor living terraces.
                </p>
              </div>
            </div>

            <button
              onClick={onVisitClick}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.65rem',
                padding: '0.9rem 2rem',
                backgroundColor: isDark ? '#C5A880' : '#1C1917',
                color: isDark ? '#141312' : '#FFFFFF',
                borderRadius: '4px',
                fontSize: '0.82rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = isDark ? '#DFCAAD' : '#33302E')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = isDark ? '#C5A880' : '#1C1917')}
            >
              <span>Visit Showroom</span>
              <ArrowUpRight size={15} />
            </button>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .about-secondary-img {
            display: block !important;
          }
        }
        @media (max-width: 992px) {
          .about-img-col {
            grid-column: span 12 !important;
          }
          .about-text-col {
            grid-column: span 12 !important;
          }
        }

        @media (max-width: 768px) {
          #about {
            padding: 5rem 0 !important;
          }
          .about-values-grid {
            grid-template-columns: 1fr !important;
          }
        }

        @media (max-width: 480px) {
          #about {
            padding: 4rem 0 !important;
          }
        }
      `}</style>
    </section>
  );
}
