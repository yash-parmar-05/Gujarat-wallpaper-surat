import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageCircle, Check, ArrowRight, ShieldCheck, Sparkles, Layers } from 'lucide-react';
import { SHOWROOM_INFO } from '../data/categories';
import { useTheme } from '../context/ThemeContext';

export default function ProductModal({ product, onClose, onEnquire }) {
  const [activeImageView, setActiveImageView] = useState('card'); // 'card' or 'showcase'
  const { isDark } = useTheme();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!product) return null;

  const currentImage = activeImageView === 'showcase' && product.showcaseImage
    ? product.showcaseImage
    : product.image;

  return (
    <AnimatePresence>
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 200,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1.5rem',
        }}
      >
        {/* Backdrop */}
        <motion.div
          key="modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'rgba(20, 19, 18, 0.85)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
          }}
        />

        {/* Modal Window */}
        <motion.div
          key="modal-window"
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: '1080px',
            maxHeight: '90vh',
            backgroundColor: isDark ? '#171614' : '#FAF8F5',
            borderRadius: '10px',
            border: isDark ? '1px solid rgba(245, 242, 236, 0.1)' : '1px solid rgba(28, 25, 23, 0.08)',
            overflow: 'hidden',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
            display: 'flex',
            flexDirection: 'column',
            zIndex: 10,
            transition: 'background-color 0.35s ease',
          }}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Close Product Details Modal"
            style={{
              position: 'absolute',
              top: '1.25rem',
              right: '1.25rem',
              zIndex: 30,
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              backgroundColor: 'rgba(20, 19, 18, 0.65)',
              backdropFilter: 'blur(6px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              color: '#F7F4EE',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background-color 0.2s ease, transform 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = isDark ? '#C5A880' : '#A68353';
              e.currentTarget.style.color = '#141312';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(20, 19, 18, 0.65)';
              e.currentTarget.style.color = '#F7F4EE';
            }}
          >
            <X size={18} />
          </button>

          {/* Modal Content Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(12, 1fr)',
              flexGrow: 1,
              overflowY: 'auto',
            }}
            className="modal-grid"
          >
            {/* Left Column: Product Image & View Switcher */}
            <div
              style={{
                gridColumn: 'span 6',
                position: 'relative',
                backgroundColor: isDark ? '#0D0C0B' : '#EAE3D9',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '440px',
                overflow: 'hidden',
              }}
              className="modal-img-col"
            >
              <img
                src={currentImage}
                alt={product.name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />

              {/* View Selector Switcher if showcaseImage exists */}
              {product.showcaseImage && (
                <div
                  style={{
                    position: 'absolute',
                    bottom: '1.25rem',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    backgroundColor: 'rgba(20, 19, 18, 0.8)',
                    backdropFilter: 'blur(8px)',
                    padding: '0.35rem',
                    borderRadius: '9999px',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    zIndex: 2,
                  }}
                >
                  <button
                    onClick={() => setActiveImageView('card')}
                    style={{
                      padding: '0.35rem 0.9rem',
                      borderRadius: '9999px',
                      fontSize: '0.7rem',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      color: activeImageView === 'card' ? '#141312' : '#D4CDC3',
                      backgroundColor: activeImageView === 'card' ? (isDark ? '#C5A880' : '#A68353') : 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    Detail View
                  </button>
                  <button
                    onClick={() => setActiveImageView('showcase')}
                    style={{
                      padding: '0.35rem 0.9rem',
                      borderRadius: '9999px',
                      fontSize: '0.7rem',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      color: activeImageView === 'showcase' ? '#141312' : '#D4CDC3',
                      backgroundColor: activeImageView === 'showcase' ? (isDark ? '#C5A880' : '#A68353') : 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    Room Context
                  </button>
                </div>
              )}
            </div>

            {/* Right Column: Detailed Product Information */}
            <div
              style={{
                gridColumn: 'span 6',
                padding: '3rem 2.5rem',
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: isDark ? '#171614' : '#FAF8F5',
              }}
              className="modal-info-col"
            >
              {/* Category Path */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.75rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: isDark ? '#C5A880' : '#A68353',
                  fontWeight: 600,
                  marginBottom: '0.75rem',
                }}
              >
                <span>{product.category}</span>
                <span>/</span>
                <span>{product.subcategory}</span>
              </div>

              {/* Product Title */}
              <h2
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: 'clamp(1.85rem, 2.5vw, 2.4rem)',
                  color: isDark ? '#F7F4EE' : '#1C1917',
                  marginBottom: '1rem',
                  lineHeight: 1.15,
                  fontWeight: 600,
                }}
              >
                {product.name}
              </h2>

              {/* Product Description */}
              <p
                style={{
                  fontSize: '0.95rem',
                  color: isDark ? '#C8C2B7' : '#57534E',
                  lineHeight: 1.65,
                  marginBottom: '2rem',
                  fontWeight: 400,
                }}
              >
                {product.description}
              </p>

              {/* Specifications Matrix */}
              {product.specifications && (
                <div
                  style={{
                    backgroundColor: isDark ? '#1F1E1B' : '#F3EFE9',
                    borderRadius: '8px',
                    padding: '1.25rem',
                    marginBottom: '2rem',
                    border: isDark ? '1px solid rgba(197, 168, 128, 0.2)' : '1px solid rgba(28, 25, 23, 0.06)',
                  }}
                >
                  <div
                    style={{
                      fontSize: '0.72rem',
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      color: isDark ? '#F7F4EE' : '#1C1917',
                      fontWeight: 700,
                      marginBottom: '0.75rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                    }}
                  >
                    <Layers size={13} color={isDark ? '#C5A880' : '#A68353'} /> Specifications &amp; Architectural Application
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.75rem', fontSize: '0.82rem' }}>
                    {Object.entries(product.specifications).map(([key, val]) => (
                      <div key={key} style={{ gridColumn: key === 'recommendedSpaces' ? 'span 2' : 'span 1' }}>
                        <div style={{ textTransform: 'capitalize', color: isDark ? '#A8A29E' : '#78716C', fontSize: '0.7rem' }}>
                          {key.replace(/([A-Z])/g, ' $1')}
                        </div>
                        <div style={{ color: isDark ? '#F7F4EE' : '#1C1917', fontWeight: 500 }}>{val}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Showroom Assurance */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  fontSize: '0.8rem',
                  color: isDark ? '#A8A29E' : '#78716C',
                  marginBottom: '2rem',
                }}
              >
                <ShieldCheck size={16} color={isDark ? '#C5A880' : '#A68353'} />
                <span>Available for private viewings &amp; sample consultations at Surat showroom.</span>
              </div>

              {/* Action Buttons */}
              <div
                style={{
                  marginTop: 'auto',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                }}
              >
                <button
                  onClick={() => {
                    onClose();
                    onEnquire(product);
                  }}
                  style={{
                    flex: 1,
                    backgroundColor: isDark ? '#C5A880' : '#1C1917',
                    color: isDark ? '#141312' : '#FFFFFF',
                    padding: '0.9rem 1.5rem',
                    borderRadius: '4px',
                    border: 'none',
                    fontWeight: 600,
                    fontSize: '0.82rem',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = isDark ? '#DFCAAD' : '#33302E')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = isDark ? '#C5A880' : '#1C1917')}
                >
                  <MessageCircle size={16} />
                  <span>Enquire for Project</span>
                </button>

                <button
                  onClick={onClose}
                  style={{ 
                    padding: '0.9rem 1.5rem',
                    backgroundColor: 'transparent',
                    color: isDark ? '#F7F4EE' : '#1C1917',
                    border: isDark ? '1px solid rgba(255, 255, 255, 0.2)' : '1px solid rgba(28, 25, 23, 0.2)',
                    borderRadius: '4px',
                    fontSize: '0.82rem',
                    fontWeight: 500,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                  }}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .modal-grid .modal-img-col {
            grid-column: span 12 !important;
            min-height: 280px !important;
          }
          .modal-grid .modal-info-col {
            grid-column: span 12 !important;
            padding: 2rem 1.5rem !important;
          }
        }
      `}</style>
    </AnimatePresence>
  );
}
