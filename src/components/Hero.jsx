import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Sparkles } from 'lucide-react';

export default function Hero({ onExploreClick, onVisitClick }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        backgroundColor: '#141312',
      }}
    >
      {/* Hero Background Image with Subtle Ken Burns Zoom */}
      <motion.div
        initial={{ scale: 1.12, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(/assets/products/wallpaper-showcase.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 40%',
          filter: 'brightness(0.68) contrast(1.05)',
        }}
      />

      {/* Cinematic Vignette Gradients */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `
            linear-gradient(to top, rgba(20, 19, 18, 0.95) 0%, rgba(20, 19, 18, 0.4) 40%, rgba(20, 19, 18, 0.6) 100%),
            linear-gradient(to right, rgba(20, 19, 18, 0.8) 0%, transparent 60%)
          `,
          pointerEvents: 'none',
        }}
      />

      {/* Subtle architectural grid line accents */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: '10%',
          width: '1px',
          backgroundColor: 'rgba(247, 244, 238, 0.05)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: '10%',
          width: '1px',
          backgroundColor: 'rgba(247, 244, 238, 0.05)',
          pointerEvents: 'none',
        }}
      />

      {/* Hero Content */}
      <div
        className="container-luxury"
        style={{
          position: 'relative',
          zIndex: 2,
          paddingTop: '6rem',
          paddingBottom: '4rem',
        }}
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ maxWidth: '850px' }}
        >
          {/* Subtitle / Location Badge */}
          <motion.div
            variants={itemVariants}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.65rem',
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
              backdropFilter: 'blur(8px)',
              padding: '0.45rem 1.1rem',
              borderRadius: '9999px',
              border: '1px solid rgba(197, 168, 128, 0.3)',
              marginBottom: '1.75rem',
            }}
          >
            <Sparkles size={13} color="#C5A880" />
            <span
              style={{
                fontSize: '0.72rem',
                fontWeight: 600,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#F7F4EE',
              }}
            >
              Surat's Flagship Interior Decor Showroom
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={itemVariants}
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(2.75rem, 6.5vw, 5.5rem)',
              fontWeight: 400,
              lineHeight: 1.05,
              color: '#F7F4EE',
              letterSpacing: '-0.02em',
              marginBottom: '1.5rem',
            }}
          >
            Transform Your Walls.{' '}
            <span
              style={{
                display: 'block',
                fontStyle: 'italic',
                fontWeight: 300,
                color: '#C5A880',
              }}
            >
              Transform Your Space.
            </span>
          </motion.h1>

          {/* Supporting Text */}
          <motion.p
            variants={itemVariants}
            style={{
              fontSize: 'clamp(1rem, 1.3vw, 1.25rem)',
              lineHeight: 1.65,
              color: '#D4CDC3',
              maxWidth: '620px',
              fontWeight: 300,
              marginBottom: '2.5rem',
            }}
          >
            Premium wallpapers, wall panels, carpets and decor solutions for beautiful interiors.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            variants={itemVariants}
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: '1.25rem',
            }}
          >
            <button
              onClick={onExploreClick}
              className="btn-primary"
              style={{
                backgroundColor: '#C5A880',
                color: '#141312',
                borderColor: '#C5A880',
                padding: '1rem 2.25rem',
              }}
            >
              <span>Explore Collection</span>
              <ArrowUpRight size={16} />
            </button>

            <button
              onClick={onVisitClick}
              className="btn-secondary"
              style={{
                borderColor: 'rgba(247, 244, 238, 0.3)',
                color: '#F7F4EE',
                padding: '1rem 2.25rem',
              }}
            >
              <span>Visit Showroom</span>
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Architectural Bottom Feature Strip */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          borderTop: '1px solid rgba(247, 244, 238, 0.08)',
          backgroundColor: 'rgba(20, 19, 18, 0.65)',
          backdropFilter: 'blur(10px)',
          zIndex: 2,
        }}
      >
        <div
          className="container-luxury"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: '1rem',
            paddingBottom: '1rem',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '2.5rem',
              fontSize: '0.75rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#A8A29E',
            }}
          >
            <span style={{ color: '#F7F4EE' }}>Residential &amp; Commercial</span>
            <span style={{ display: 'none' }} className="hero-feature-pill">•</span>
            <span style={{ display: 'none' }} className="hero-feature-pill">Surat, Gujarat</span>
            <span style={{ display: 'none' }} className="hero-feature-pill">•</span>
            <span style={{ display: 'none' }} className="hero-feature-pill">Bespoke Design Service</span>
          </div>

          {/* Animated Scroll Down Indicator */}
          <a
            href="#categories"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: '#C5A880',
              fontSize: '0.75rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              textDecoration: 'none',
            }}
          >
            <span>Scroll</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            >
              <ArrowDown size={14} />
            </motion.div>
          </a>
        </div>
      </div>

      <style>{`
        @media (min-width: 640px) {
          .hero-feature-pill {
            display: inline-block !important;
          }
        }
      `}</style>
    </section>
  );
}
