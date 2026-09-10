import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Maximize2, Sparkles } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/products';
import { useTheme } from '../context/ThemeContext';

export default function Gallery({ id = 'gallery' }) {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [mounted, setMounted] = useState(false);
  const { isDark } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.classList.add('lightbox-open');
      if (window.lenis) {
        window.lenis.stop();
      }
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.classList.remove('lightbox-open');
        if (window.lenis) {
          window.lenis.start();
        }
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [lightboxIndex]);

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
      id={id}
      style={{
        padding: '72px 0',
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
                fontSize: 'clamp(2.4rem, 4.5vw, 3.75rem)',
                color: textPrimary,
                marginBottom: '1rem',
                letterSpacing: '-0.02em',
                lineHeight: 1.1,
                fontWeight: 600,
              }}
            >
              The Visual Gallery
            </h2>
            <p style={{ fontSize: '1.05rem', color: textSecondary, lineHeight: 1.7, margin: 0, fontWeight: 400 }}>
              A curated visual anthology of luxury Italian textures, embossed damasks, marble wallcoverings, and designer living room walls from our signature catalogs.
            </p>
          </div>

          <div
            style={{
              fontSize: '0.75rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: walnut,
              fontWeight: 700,
              padding: '0.5rem 1.15rem',
              backgroundColor: '#E7D7BE',
              borderRadius: '20px',
              border: '1px solid rgba(122, 90, 58, 0.2)',
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
            gap: '1.5rem',
          }}
          className="gallery-masonry-grid"
        >
          {GALLERY_ITEMS.map((item, index) => {
            // Asymmetric layout spans
            let colSpan = 'span 4';
            let height = '380px';

            if (index === 0) {
              colSpan = 'span 8';
              height = '440px';
            } else if (index === 1) {
              colSpan = 'span 4';
              height = '440px';
            } else if (index === 2) {
              colSpan = 'span 5';
              height = '400px';
            } else if (index === 3) {
              colSpan = 'span 7';
              height = '400px';
            } else if (index === 4) {
              colSpan = 'span 7';
              height = '420px';
            } else if (index === 5) {
              colSpan = 'span 5';
              height = '420px';
            }

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.06, ease: 'easeOut' }}
                onClick={() => setLightboxIndex(index)}
                style={{
                  gridColumn: colSpan,
                  position: 'relative',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  height: height,
                  backgroundColor: '#E7D7BE',
                  boxShadow: '0 8px 24px rgba(122, 90, 58, 0.06)',
                  border: '1px solid rgba(122, 90, 58, 0.16)',
                  transition: 'box-shadow 0.35s ease, transform 0.35s ease, border-color 0.35s ease',
                }}
                className="gallery-item-card"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                  className="gallery-zoom-img"
                />

                {/* Subtle Hover Gradient & Overlay */}
                <div
                  className="gallery-hover-overlay"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(20, 19, 18, 0.95) 0%, rgba(20, 19, 18, 0.4) 60%, transparent 100%)',
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
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
                      marginBottom: '0.4rem',
                      fontWeight: 700,
                    }}
                  >
                    {item.category}
                  </span>
                  <h4
                    style={{
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                      fontSize: '1.4rem',
                      color: '#FFFFFF',
                      marginBottom: '0.4rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      fontWeight: 600,
                    }}
                  >
                    <span>{item.title}</span>
                    <Maximize2 size={18} color="#C8A96A" />
                  </h4>
                  <p style={{ fontSize: '0.85rem', color: '#E7D7BE', lineHeight: 1.5, margin: 0, fontWeight: 300 }}>
                    {item.caption}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal Portaled Directly to document.body */}
      {mounted && createPortal(
        <AnimatePresence>
          {activeItem && (
            <div
              role="dialog"
              aria-modal="true"
              aria-label="Gallery Image Lightbox"
              data-lenis-prevent="true"
              onWheel={(e) => e.stopPropagation()}
              onTouchMove={(e) => e.stopPropagation()}
              style={{
                position: 'fixed',
                inset: 0,
                zIndex: 999999,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '24px',
                boxSizing: 'border-box',
              }}
              className="gallery-lightbox-overlay"
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
                  WebkitBackdropFilter: 'blur(16px)',
                }}
              />

              {/* Viewport Top-Right Close Button */}
              <button
                onClick={() => setLightboxIndex(null)}
                aria-label="Close Lightbox"
                className="gallery-lightbox-close"
                style={{
                  position: 'fixed',
                  top: '24px',
                  right: '24px',
                  zIndex: 1000000,
                  color: '#F7F4EE',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '50%',
                  width: '44px',
                  height: '44px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  boxShadow: '0 6px 24px rgba(0, 0, 0, 0.65)',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = walnut;
                  e.currentTarget.style.borderColor = walnut;
                  e.currentTarget.style.transform = 'scale(1.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                <X size={22} color="#ffffff" />
              </button>

              {/* Viewport Fixed Navigation Controls */}
              <button
                onClick={() => setLightboxIndex((prev) => (prev > 0 ? prev - 1 : GALLERY_ITEMS.length - 1))}
                aria-label="Previous image"
                className="gallery-lightbox-nav-btn gallery-nav-prev"
                style={{
                  position: 'fixed',
                  left: '24px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  zIndex: 100000,
                  color: '#F7F4EE',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '50%',
                  width: '48px',
                  height: '48px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = walnut;
                  e.currentTarget.style.borderColor = walnut;
                  e.currentTarget.style.transform = 'translateY(-50%) scale(1.06)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                  e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
                }}
              >
                <ChevronLeft size={24} />
              </button>

              <button
                onClick={() => setLightboxIndex((prev) => (prev < GALLERY_ITEMS.length - 1 ? prev + 1 : 0))}
                aria-label="Next image"
                className="gallery-lightbox-nav-btn gallery-nav-next"
                style={{
                  position: 'fixed',
                  right: '24px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  zIndex: 100000,
                  color: '#F7F4EE',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '50%',
                  width: '48px',
                  height: '48px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = walnut;
                  e.currentTarget.style.borderColor = walnut;
                  e.currentTarget.style.transform = 'translateY(-50%) scale(1.06)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                  e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
                }}
              >
                <ChevronRight size={24} />
              </button>

              {/* Lightbox Content Frame */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96, y: 12 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: 12 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="gallery-lightbox-card"
                style={{
                  position: 'relative',
                  maxWidth: '1200px',
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  zIndex: 10,
                }}
              >
                {/* Main Lightbox Image Frame */}
                <div
                  className="gallery-lightbox-img-frame"
                  style={{
                    borderRadius: '8px',
                    overflow: 'hidden',
                    backgroundColor: '#141312',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7)',
                    maxHeight: '75vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <img
                    src={activeItem.image}
                    alt={activeItem.title}
                    decoding="async"
                    className="gallery-lightbox-img"
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
                  className="gallery-lightbox-caption"
                  style={{
                    marginTop: '1.25rem',
                    textAlign: 'center',
                    maxWidth: '700px',
                    padding: '0 16px',
                  }}
                >
                  <span
                    style={{
                      fontSize: '0.72rem',
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      color: gold,
                      fontWeight: 600,
                    }}
                  >
                    {activeItem.category} • Image {lightboxIndex + 1} of {GALLERY_ITEMS.length}
                  </span>
                  <h3
                    style={{
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                      fontSize: '1.5rem',
                      color: '#F7F4EE',
                      marginTop: '0.25rem',
                      marginBottom: '0.25rem',
                      fontWeight: 600,
                    }}
                  >
                    {activeItem.title}
                  </h3>
                  <p style={{ fontSize: '0.88rem', color: '#A8A29E', margin: 0, fontWeight: 300 }}>
                    {activeItem.caption}
                  </p>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>,
        document.body
      )}

      <style>{`
        .gallery-item-card:hover {
          border-color: rgba(122, 90, 58, 0.4) !important;
          transform: translateY(-4px);
        }
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
        }

        @media (max-width: 768px) {
          #gallery,
          #gallery-page {
            padding: 44px 0 !important;
          }
          .gallery-item-card {
            height: 240px !important;
          }
          .gallery-lightbox-overlay {
            padding: 16px !important;
          }
          .gallery-lightbox-close {
            top: 18px !important;
            right: 18px !important;
            width: 44px !important;
            height: 44px !important;
          }
          .gallery-lightbox-nav-btn {
            width: 42px !important;
            height: 42px !important;
          }
          .gallery-nav-prev {
            left: 12px !important;
          }
          .gallery-nav-next {
            right: 12px !important;
          }
          .gallery-lightbox-img-frame {
            max-height: 75vh !important;
            width: 100% !important;
          }
          .gallery-lightbox-img {
            max-height: 75vh !important;
            width: auto !important;
            max-width: 100% !important;
            object-fit: contain !important;
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
          #gallery,
          #gallery-page {
            padding: 36px 0 !important;
          }
          .gallery-item-card {
            height: 220px !important;
          }
          .gallery-lightbox-close {
            top: 16px !important;
            right: 16px !important;
            width: 42px !important;
            height: 42px !important;
          }
          .gallery-lightbox-nav-btn {
            width: 38px !important;
            height: 38px !important;
          }
          .gallery-nav-prev {
            left: 8px !important;
          }
          .gallery-nav-next {
            right: 8px !important;
          }
          .gallery-lightbox-img-frame {
            max-height: 70vh !important;
            width: 100% !important;
          }
          .gallery-lightbox-img {
            max-height: 70vh !important;
            width: auto !important;
            max-width: 100% !important;
            object-fit: contain !important;
          }
        }
      `}</style>
    </section>
  );
}
