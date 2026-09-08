import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader({ isLoading }) {
  const [fontsReady, setFontsReady] = useState(false);

  useEffect(() => {
    let active = true;
    const fontTimeout = setTimeout(() => {
      if (active) setFontsReady(true);
    }, 400);

    if (document.fonts) {
      document.fonts.ready
        .then(() => {
          if (active) setFontsReady(true);
        })
        .catch(() => {
          if (active) setFontsReady(true);
        });
    } else {
      setFontsReady(true);
    }

    return () => {
      active = false;
      clearTimeout(fontTimeout);
    };
  }, []);

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isLoading]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            y: -20,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
          }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            backgroundColor: '#141312',
            color: '#F7F4EE',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem'
          }}
        >
          {/* Subtle background ambient glow */}
          <div 
            style={{
              position: 'absolute',
              width: '320px',
              height: '320px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(197, 168, 128, 0.15) 0%, rgba(20, 19, 18, 0) 70%)',
              pointerEvents: 'none'
            }}
          />

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: fontsReady ? 1 : 0, y: fontsReady ? 0 : 15 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}
          >
            <div 
              style={{
                fontSize: '0.75rem',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                color: '#C5A880',
                marginBottom: '1rem',
                fontWeight: 500
              }}
            >
              Surat, Gujarat
            </div>

            <h1 
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                fontWeight: 400,
                letterSpacing: '0.04em',
                color: '#F7F4EE',
                marginBottom: '0.5rem'
              }}
            >
              Gujarat Wallpaper & Decor
            </h1>

            <p
              style={{
                fontSize: '0.85rem',
                color: '#A8A29E',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                marginTop: '0.5rem'
              }}
            >
              Luxury Interior Showroom
            </p>
          </motion.div>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            style={{
              width: '120px',
              height: '1.5px',
              backgroundColor: '#C5A880',
              marginTop: '2.5rem',
              transformOrigin: 'left'
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
