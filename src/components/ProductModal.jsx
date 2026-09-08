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
            backgroundColor: '#F8F5F1',
            borderRadius: '24px',
            border: '1px solid rgba(122, 90, 58, 0.2)',
            overflow: 'hidden',
            boxShadow: '0 25px 60px -12px rgba(47, 47, 47, 0.5)',
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
              backgroundColor: 'rgba(255, 255, 255, 0.85)',
              backdropFilter: 'blur(6px)',
              border: '1px solid rgba(122, 90, 58, 0.2)',
              color: '#2F2F2F',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background-color 0.2s ease, transform 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#7A5A3A';
              e.currentTarget.style.color = '#FFFFFF';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.85)';
              e.currentTarget.style.color = '#2F2F2F';
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
                backgroundColor: '#E7D7BE',
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
                    backgroundColor: 'rgba(248, 245, 241, 0.92)',
                    backdropFilter: 'blur(8px)',
                    padding: '0.35rem',
                    borderRadius: '9999px',
                    border: '1px solid rgba(122, 90, 58, 0.25)',
                    zIndex: 2,
                    boxShadow: '0 4px 14px rgba(122, 90, 58, 0.15)',
                  }}
                >
                  <button
                    onClick={() => setActiveImageView('card')}
                    style={{
                      padding: '0.4rem 1rem',
                      borderRadius: '9999px',
                      fontSize: '0.72rem',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      color: activeImageView === 'card' ? '#FFFFFF' : '#5A5652',
                      backgroundColor: activeImageView === 'card' ? '#7A5A3A' : 'transparent',
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
                      padding: '0.4rem 1rem',
                      borderRadius: '9999px',
                      fontSize: '0.72rem',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      color: activeImageView === 'showcase' ? '#FFFFFF' : '#5A5652',
                      backgroundColor: activeImageView === 'showcase' ? '#7A5A3A' : 'transparent',
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
                backgroundColor: '#F8F5F1',
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
                  color: '#7A5A3A',
                  fontWeight: 700,
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
                  color: '#2F2F2F',
                  marginBottom: '1rem',
                  lineHeight: 1.15,
                  fontWeight: 600,
                  letterSpacing: '-0.02em',
                }}
              >
                {product.name}
              </h2>

              {/* Product Description */}
              <p
                style={{
                  fontSize: '0.95rem',
                  color: '#5A5652',
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
                    backgroundColor: '#E7D7BE',
                    borderRadius: '16px',
                    padding: '1.25rem',
                    marginBottom: '2rem',
                    border: '1px solid rgba(122, 90, 58, 0.16)',
                  }}
                >
                  <div
                    style={{
                      fontSize: '0.72rem',
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      color: '#2F2F2F',
                      fontWeight: 700,
                      marginBottom: '0.75rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                    }}
                  >
                    <Layers size={14} color="#7A5A3A" /> Specifications &amp; Architectural Application
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.75rem', fontSize: '0.82rem' }}>
                    {Object.entries(product.specifications).map(([key, val]) => (
                      <div key={key} style={{ gridColumn: key === 'recommendedSpaces' ? 'span 2' : 'span 1' }}>
                        <div style={{ textTransform: 'capitalize', color: '#7A7570', fontSize: '0.7rem', fontWeight: 600 }}>
                          {key.replace(/([A-Z])/g, ' $1')}
                        </div>
                        <div style={{ color: '#2F2F2F', fontWeight: 600 }}>{val}</div>
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
                  fontSize: '0.82rem',
                  color: '#5A5652',
                  marginBottom: '2rem',
                  fontWeight: 400,
                }}
              >
                <ShieldCheck size={16} color="#7A5A3A" />
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
                    backgroundColor: '#7A5A3A',
                    color: '#FFFFFF',
                    padding: '0.95rem 1.6rem',
                    borderRadius: '24px',
                    border: 'none',
                    fontWeight: 600,
                    fontSize: '0.84rem',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    boxShadow: '0 6px 18px rgba(122, 90, 58, 0.25)',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#5E4329';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#7A5A3A';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <MessageCircle size={16} />
                  <span>Enquire for Project</span>
                </button>

                <button
                  onClick={onClose}
                  style={{ 
                    padding: '0.95rem 1.6rem',
                    backgroundColor: 'transparent',
                    color: '#2F2F2F',
                    border: '1px solid rgba(122, 90, 58, 0.25)',
                    borderRadius: '24px',
                    fontSize: '0.84rem',
                    fontWeight: 600,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#7A5A3A';
                    e.currentTarget.style.color = '#7A5A3A';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(122, 90, 58, 0.25)';
                    e.currentTarget.style.color = '#2F2F2F';
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
