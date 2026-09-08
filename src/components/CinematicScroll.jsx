import React from 'react';
import { motion } from 'framer-motion';

export default function CinematicScroll({ image, quote, author, subtext }) {
  return (
    <div
      style={{
        position: 'relative',
        height: '75vh',
        minHeight: '520px',
        width: '100%',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#141312',
      }}
    >
      {/* Background Image with Fixed/Parallax Impression */}
      <motion.div
        initial={{ scale: 1.08 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'absolute',
          inset: '-5%',
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.55)',
        }}
      />

      {/* Dark Vignette Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at center, rgba(20, 19, 18, 0.4) 0%, rgba(20, 19, 18, 0.85) 100%)',
          pointerEvents: 'none',
        }}
      />

      {/* Content */}
      <div
        className="container-luxury"
        style={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          maxWidth: '900px',
          padding: '2rem',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          {subtext && (
            <div
              style={{
                fontSize: '0.76rem',
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                color: '#C8A96A',
                marginBottom: '1.25rem',
                fontWeight: 700,
              }}
            >
              {subtext}
            </div>
          )}

          <h2
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(2.5rem, 5.5vw, 4.75rem)',
              fontWeight: 400,
              color: '#F8F5F1',
              lineHeight: 1.12,
              fontStyle: 'italic',
              marginBottom: '1.5rem',
            }}
          >
            "{quote}"
          </h2>

          {author && (
            <div
              style={{
                fontSize: '0.84rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: '#E7D7BE',
                fontWeight: 500,
              }}
            >
              — {author}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
