import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Maximize2, Sparkles } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/products';
import { useTheme } from '../context/ThemeContext';

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const { isDark } = useTheme();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev > 0 ? prev - 1 : GALLERY_ITEMS.length - 1));
      }
      if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev < GALLERY_ITEMS.length - 1 ? prev + 1 : 0));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex]);

  const activeItem = lightboxIndex !== null ? GALLERY_ITEMS[lightboxIndex] : null;

  const bg = '#F8F5F1';
  const textPrimary = '#2F2F2F';
  const textSecondary = '#5A5652';
  const walnut = '#7A5A3A';
  const gold = '#C8A96A';

  return (
    <section
      id="gallery"
      style={{
        padding: '8rem 0',
        backgroundColor: bg,
        color: textPrimary,
        position: 'relative',
        transition: 'background-color 0.35s ease, color 0.3s ease',
      }}
    >
      <div className="container-luxury">
        {/* Gallery Header */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            gap: '2rem',
            marginBottom: '4.5rem',
          }}
        >
          <div style={{ maxWidth: '680px' }}>
            <div className="sub-tag" style={{ color: walnut, marginBottom: '0.75rem', fontWeight: 600 }}>
              Architectural Installations
            </div>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: 'clamp(2.5rem, 5vw, 4.25rem)',
                color: textPrimary,
                marginBottom: '1rem',
                letterSpacing: '-0.02em',
                lineHeight: 1.08,
              }}
            >
              The Visual Gallery
            </h2>
            <p style={{ fontSize: '1.05rem', color: textSecondary, lineHeight: 1.7, fontWeight: 400 }}>
              A curated visual anthology of luxury Italian textures, embossed damasks, marble wallcoverings, and designer living room walls from our signature catalogs.
            </p>
          </div>

          <div
            style={{
              fontSize: '0.8rem',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: walnut,
              fontWeight: 600,
            }}
          >
            Click Any Image for Full-Screen View
          </div>
        </div>

        {/* Editorial Asymmetric Masonry / Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '1.75rem',
          }}
          className="gallery-masonry-grid"
        >
          {GALLERY_ITEMS.map((item, index) => {
            // Asymmetric layout spans
            let colSpan = 'span 4';
            let height = '380px';

            if (index === 0) {
              colSpan = 'span 8';
              height = '460px';
            } else if (index === 1) {
              colSpan = 'span 4';
              height = '460px';
            } else if (index === 2) {
              colSpan = 'span 5';
              height = '420px';
            } else if (index === 3) {
              colSpan = 'span 7';
              height = '420px';
            } else if (index === 4) {
              colSpan = 'span 7';
              height = '440px';
            } else if (index === 5) {
              colSpan = 'span 5';
              height = '440px';
            }

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.65, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setLightboxIndex(index)}
                style={{
                  gridColumn: colSpan,
                  position: 'relative',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  height: height,
                  backgroundColor: '#E7D7BE',
                  boxShadow: '0 12px 32px rgba(122, 90, 58, 0.08)',
                  border: '1px solid rgba(122, 90, 58, 0.12)',
                }}
                className="gallery-item-card"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                  className="gallery-zoom-img"
                />

                {/* Subtle Hover Gradient & Overlay */}
                <div
                  className="gallery-hover-overlay"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(47, 47, 47, 0.92) 0%, rgba(47, 47, 47, 0.35) 60%, rgba(47, 47, 47, 0) 100%)',
                    opacity: 0,
                    transition: 'opacity 0.35s ease',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    padding: '2rem',
                  }}
                >
                  <span
                    style={{
                      fontSize: '0.72rem',
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      color: '#C8A96A',
                      marginBottom: '0.35rem',
                      fontWeight: 600,
                    }}
                  >
                    {item.category}
                  </span>
                  <h4
                    style={{
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                      fontSize: '1.45rem',
                      color: '#F8F5F1',
                      marginBottom: '0.4rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <span>{item.title}</span>
                    <Maximize2 size={18} color="#C8A96A" />
                  </h4>
                  <p style={{ fontSize: '0.85rem', color: '#E7D7BE', lineHeight: 1.5, fontWeight: 300 }}>
                    {item.caption}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeItem && (
          <div
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 300,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1.5rem',
            }}
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightboxIndex(null)}
              style={{
                position: 'absolute',
                inset: 0,
                backgroundColor: 'rgba(14, 13, 12, 0.95)',
                backdropFilter: 'blur(16px)',
              }}
            />

            {/* Lightbox Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              style={{
                position: 'relative',
                maxWidth: '1200px',
                width: '100%',
                maxHeight: '92vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                zIndex: 10,
              }}
            >
              {/* Close Button */}
              <button
                onClick={() => setLightboxIndex(null)}
                aria-label="Close Lightbox"
                className="lightbox-close-btn"
                style={{
                  position: 'absolute',
                  top: '-3.5rem',
                  right: 0,
                  color: '#F7F4EE',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '50%',
                  width: '42px',
                  height: '42px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'background-color 0.2s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#C5A880')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)')}
              >
                <X size={20} />
              </button>

              {/* Navigation Controls */}
              <button
                onClick={() => setLightboxIndex((prev) => (prev > 0 ? prev - 1 : GALLERY_ITEMS.length - 1))}
                aria-label="Previous image"
                style={{
                  position: 'absolute',
                  left: '-3.5rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: '#F7F4EE',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '50%',
                  width: '48px',
                  height: '48px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  zIndex: 20,
                }}
                className="lightbox-nav-btn"
              >
                <ChevronLeft size={24} />
              </button>

              <button
                onClick={() => setLightboxIndex((prev) => (prev < GALLERY_ITEMS.length - 1 ? prev + 1 : 0))}
                aria-label="Next image"
                style={{
                  position: 'absolute',
                  right: '-3.5rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: '#F7F4EE',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '50%',
                  width: '48px',
                  height: '48px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  zIndex: 20,
                }}
                className="lightbox-nav-btn"
              >
                <ChevronRight size={24} />
              </button>

              {/* Main Lightbox Image Frame */}
              <div
                style={{
                  borderRadius: '8px',
                  overflow: 'hidden',
                  backgroundColor: '#141312',
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  maxHeight: '75vh',
                }}
              >
                <img
                  src={activeItem.image}
                  alt={activeItem.title}
                  style={{
                    maxHeight: '75vh',
                    width: 'auto',
                    maxWidth: '100%',
                    objectFit: 'contain',
                    display: 'block',
                  }}
                />
              </div>

              {/* Caption Strip */}
              <div
                style={{
                  marginTop: '1.25rem',
                  textAlign: 'center',
                  maxWidth: '700px',
                }}
              >
                <span
                  style={{
                    fontSize: '0.72rem',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: '#C5A880',
                  }}
                >
                  {activeItem.category} • Image {lightboxIndex + 1} of {GALLERY_ITEMS.length}
                </span>
                <h3
                  style={{
                    fontSize: '1.5rem',
                    color: '#F7F4EE',
                    marginTop: '0.25rem',
                    marginBottom: '0.25rem',
                  }}
                >
                  {activeItem.title}
                </h3>
                <p style={{ fontSize: '0.88rem', color: '#A8A29E', fontWeight: 300 }}>
                  {activeItem.caption}
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <style>{`
        .gallery-item-card:hover .gallery-zoom-img {
          transform: scale(1.05);
        }
        .gallery-item-card:hover .gallery-hover-overlay {
          opacity: 1 !important;
        }

        @media (max-width: 992px) {
          .gallery-masonry-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 1.25rem !important;
          }
          .gallery-item-card {
            grid-column: span 1 !important;
            height: 300px !important;
          }
          .lightbox-nav-btn {
            display: none !important;
          }
        }

        @media (max-width: 768px) {
          #gallery {
            padding: 4rem 0 !important;
          }
          .gallery-item-card {
            height: 240px !important;
          }
        }

        @media (max-width: 640px) {
          .gallery-masonry-grid {
            grid-template-columns: 1fr !important;
            gap: 1rem !important;
          }
          .gallery-item-card {
            grid-column: span 1 !important;
            height: 260px !important;
          }
        }

        @media (max-width: 480px) {
          #gallery {
            padding: 3rem 0 !important;
          }
          .gallery-item-card {
            height: 220px !important;
          }
          .lightbox-close-btn {
            top: 0.75rem !important;
            right: 0.75rem !important;
            position: fixed !important;
          }
        }
      `}</style>
    </section>
  );
}
