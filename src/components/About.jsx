import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Compass, MapPin, Sparkles } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function About({ onVisitClick }) {
  const { isDark } = useTheme();

  const bg = '#F8F5F1';
  const textPrimary = '#2F2F2F';
  const textSecondary = '#5A5652';
  const textMuted = '#7A7570';
  const walnut = '#7A5A3A';
  const gold = '#C8A96A';
  const border = '1px solid rgba(122, 90, 58, 0.16)';

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
                borderRadius: '24px',
                overflow: 'hidden',
                aspectRatio: '4/3',
                backgroundColor: '#E7D7BE',
                boxShadow: '0 20px 48px rgba(122, 90, 58, 0.12)',
                border: '1px solid rgba(122, 90, 58, 0.16)',
              }}
            >
              <img
                src="/assets/products/pvc-panel-showcase.jpg"
                alt="Gujarat Wallpaper & Decor Showroom Architectural Finish"
                loading="lazy"
                decoding="async"
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
                borderRadius: '20px',
                overflow: 'hidden',
                aspectRatio: '1/1',
                border: '6px solid #F8F5F1',
                boxShadow: '0 20px 40px rgba(122, 90, 58, 0.16)',
                display: 'none',
              }}
              className="about-secondary-img"
            >
              <img
                src="/assets/products/wallpaper-card.jpg"
                alt="Pichwai Gold Relief Detail"
                loading="lazy"
                decoding="async"
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
            <div className="sub-tag" style={{ color: walnut, marginBottom: '0.75rem', fontWeight: 700 }}>
              The Showroom
            </div>

            <h2
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: 'clamp(2.25rem, 4.2vw, 3.5rem)',
                color: textPrimary,
                marginBottom: '1.5rem',
                lineHeight: 1.12,
                fontWeight: 600,
                letterSpacing: '-0.02em',
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
                fontWeight: 400,
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
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: walnut, marginBottom: '0.35rem' }}>
                  <MapPin size={16} />
                  <span style={{ fontSize: '0.75rem', letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 700 }}>
                    Surat, Gujarat
                  </span>
                </div>
                <p style={{ fontSize: '0.86rem', color: textMuted, lineHeight: 1.55 }}>
                  Dedicated showroom showcasing full-scale architectural wall installations and material swatches.
                </p>
              </div>

              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: walnut, marginBottom: '0.35rem' }}>
                  <Compass size={16} />
                  <span style={{ fontSize: '0.75rem', letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 700 }}>
                    Full Space Harmony
                  </span>
                </div>
                <p style={{ fontSize: '0.86rem', color: textMuted, lineHeight: 1.55 }}>
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
                padding: '1rem 2.25rem',
                backgroundColor: walnut,
                color: '#FFFFFF',
                borderRadius: '24px',
                fontSize: '0.88rem',
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 8px 24px rgba(122, 90, 58, 0.25)',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#5E4329';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = walnut;
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <span>Visit Showroom</span>
              <ArrowUpRight size={16} />
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
