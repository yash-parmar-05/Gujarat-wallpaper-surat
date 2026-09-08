import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, Navigation } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const SHOWROOM_BRANCHES = [
  {
    id: 'polaris',
    name: 'Polaris Branch',
    address: 'Shop No. 154, Polaris Mall,\nPuna Canal Road, Surat',
    singleLineAddress: 'Shop No. 154, Polaris Mall, Puna Canal Road, Surat',
  },
  {
    id: 'bhatar',
    name: 'Bhatar',
    address: '22, 23, 2nd Floor,\nMangaldas Shopping Center,\nNavjivan Circle, Udhana, Magdalla Road,\nSurat - 395017',
    singleLineAddress: '22, 23, 2nd Floor, Mangaldas Shopping Center, Navjivan Circle, Udhana, Magdalla Road, Surat - 395017',
  },
  {
    id: 'katargam',
    name: 'Katargam',
    address: 'Sadguru Plaza Business Hub,\nVed Road, Tribhuvan Nagar,\nSinganpor, Surat - 395010',
    singleLineAddress: 'Sadguru Plaza Business Hub, Ved Road, Tribhuvan Nagar, Singanpor, Surat - 395010',
  },
  {
    id: 'rajkot',
    name: 'Rajkot',
    address: 'Umiya Chowk,\nJasraj Nagar, Mavdi,\nRajkot - 360004',
    singleLineAddress: 'Umiya Chowk, Jasraj Nagar, Mavdi, Rajkot - 360004',
  },
];

export default function ShowroomModal({ isOpen, onClose }) {
  const { isDark } = useTheme();

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll when modal is active
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  // Handle Get Directions -> Opens Google Maps directly with exact branch address
  const handleGetDirections = (branch) => {
    const destination = encodeURIComponent(branch.singleLineAddress);
    const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${destination}`;
    window.open(mapsUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="showroom-modal-title"
          data-lenis-prevent="true"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 300,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.25rem',
            boxSizing: 'border-box',
          }}
        >
          {/* Backdrop */}
          <motion.div
            key="showroom-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            onClick={onClose}
            style={{
              position: 'absolute',
              inset: 0,
              backgroundColor: 'rgba(12, 11, 10, 0.78)',
              backdropFilter: 'blur(6px)',
              WebkitBackdropFilter: 'blur(6px)',
            }}
          />

          {/* Modal Container */}
          <motion.div
            key="showroom-window"
            data-lenis-prevent="true"
            initial={{ opacity: 0, scale: 0.94, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{
              type: 'spring',
              damping: 28,
              stiffness: 300,
              mass: 0.8,
            }}
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '960px',
              maxHeight: '88vh',
              backgroundColor: '#F8F5F1',
              borderRadius: '24px',
              border: '1px solid rgba(122, 90, 58, 0.2)',
              boxShadow: '0 30px 70px -15px rgba(0, 0, 0, 0.45)',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
              zIndex: 10,
              transformOrigin: 'center center',
            }}
          >
            {/* Modal Header */}
            <div
              style={{
                padding: '1.75rem 2.25rem 1.25rem',
                borderBottom: '1px solid rgba(122, 90, 58, 0.12)',
                position: 'relative',
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                gap: '1.5rem',
                flexShrink: 0,
              }}
            >
              <div>
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.45rem',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: '#7A5A3A',
                    marginBottom: '0.4rem',
                  }}
                >
                  <MapPin size={14} color="#7A5A3A" />
                  <span>OUR SHOWROOM LOCATIONS</span>
                </div>
                <h2
                  id="showroom-modal-title"
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: 'clamp(1.65rem, 3.2vw, 2.35rem)',
                    fontWeight: 600,
                    color: '#2F2F2F',
                    margin: '0 0 0.4rem 0',
                    lineHeight: 1.15,
                  }}
                >
                  Visit Gujarat Wallpaper &amp; Decor
                </h2>
                <p
                  style={{
                    fontSize: '0.9rem',
                    color: '#5A5652',
                    margin: 0,
                    lineHeight: 1.5,
                    fontWeight: 400,
                  }}
                >
                  Select a branch below to get direct turn-by-turn directions in Google Maps.
                </p>
              </div>

              {/* Close Button */}
              <button
                onClick={onClose}
                aria-label="Close Showroom Locations Modal"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(122, 90, 58, 0.08)',
                  border: '1px solid rgba(122, 90, 58, 0.16)',
                  color: '#2F2F2F',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  flexShrink: 0,
                  transition: 'all 0.25s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#7A5A3A';
                  e.currentTarget.style.borderColor = '#7A5A3A';
                  e.currentTarget.style.color = '#FFFFFF';
                  e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(122, 90, 58, 0.08)';
                  e.currentTarget.style.borderColor = 'rgba(122, 90, 58, 0.16)';
                  e.currentTarget.style.color = '#2F2F2F';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Body - Scrollable Branch Grid */}
            <div
              data-lenis-prevent="true"
              style={{
                padding: '1.75rem 2.25rem 2.25rem',
                overflowY: 'auto',
                overflowX: 'hidden',
                WebkitOverflowScrolling: 'touch',
                flex: '1 1 auto',
                minHeight: 0,
                scrollBehavior: 'smooth',
              }}
              className="showroom-modal-scroll"
            >
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '1.5rem',
                }}
                className="showroom-branch-grid"
              >
                {SHOWROOM_BRANCHES.map((branch) => {
                  return (
                    <div
                      key={branch.id}
                      style={{
                        backgroundColor: '#FFFFFF',
                        border: '1px solid rgba(122, 90, 58, 0.16)',
                        borderRadius: '20px',
                        padding: '1.6rem 1.6rem',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        gap: '1.25rem',
                        boxShadow: '0 8px 24px rgba(122, 90, 58, 0.06)',
                        transition: 'transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease',
                      }}
                      className="showroom-branch-card"
                    >
                      {/* Branch Info */}
                      <div>
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            marginBottom: '0.85rem',
                          }}
                        >
                          <div
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '0.65rem',
                            }}
                          >
                            <div
                              style={{
                                width: '38px',
                                height: '38px',
                                borderRadius: '12px',
                                backgroundColor: 'rgba(122, 90, 58, 0.1)',
                                border: '1px solid rgba(122, 90, 58, 0.25)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: '#7A5A3A',
                                flexShrink: 0,
                              }}
                            >
                              <MapPin size={18} />
                            </div>
                            <h3
                              style={{
                                fontFamily: "'Cormorant Garamond', Georgia, serif",
                                fontSize: '1.45rem',
                                fontWeight: 600,
                                color: '#2F2F2F',
                                margin: 0,
                                letterSpacing: '0.01em',
                              }}
                            >
                              {branch.name}
                            </h3>
                          </div>
                        </div>

                        {/* Full Address */}
                        <p
                          style={{
                            fontSize: '0.9rem',
                            lineHeight: 1.6,
                            color: '#5A5652',
                            margin: 0,
                            whiteSpace: 'pre-line',
                            fontWeight: 400,
                          }}
                        >
                          {branch.address}
                        </p>
                      </div>

                      {/* Action Button - GET DIRECTIONS ONLY */}
                      <div
                        style={{
                          paddingTop: '0.75rem',
                          borderTop: '1px solid rgba(122, 90, 58, 0.1)',
                        }}
                      >
                        <button
                          onClick={() => handleGetDirections(branch)}
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '0.65rem',
                            padding: '0.9rem 1.35rem',
                            backgroundColor: '#7A5A3A',
                            color: '#FFFFFF',
                            border: 'none',
                            borderRadius: '20px',
                            fontSize: '0.82rem',
                            fontWeight: 600,
                            letterSpacing: '0.1em',
                            textTransform: 'uppercase',
                            cursor: 'pointer',
                            transition: 'all 0.25s ease',
                            width: '100%',
                            boxSizing: 'border-box',
                            boxShadow: '0 4px 14px rgba(122, 90, 58, 0.25)',
                          }}
                          className="branch-btn-directions"
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = '#5E4329';
                            e.currentTarget.style.transform = 'translateY(-1px)';
                            e.currentTarget.style.boxShadow = '0 6px 18px rgba(122, 90, 58, 0.35)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = '#7A5A3A';
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = '0 4px 14px rgba(122, 90, 58, 0.25)';
                          }}
                        >
                          <Navigation size={16} />
                          <span>GET DIRECTIONS</span>
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Scoped CSS for Modal Responsiveness and Animations */}
          <style>{`
            .showroom-modal-scroll {
              overflow-y: auto !important;
              overscroll-behavior: contain !important;
              -webkit-overflow-scrolling: touch !important;
              touch-action: pan-y !important;
              scrollbar-width: thin;
              scrollbar-color: rgba(122, 90, 58, 0.3) transparent;
            }
            .showroom-modal-scroll::-webkit-scrollbar {
              width: 6px;
            }
            .showroom-modal-scroll::-webkit-scrollbar-track {
              background: transparent;
            }
            .showroom-modal-scroll::-webkit-scrollbar-thumb {
              background: rgba(122, 90, 58, 0.28);
              border-radius: 6px;
            }
            .showroom-modal-scroll::-webkit-scrollbar-thumb:hover {
              background: rgba(122, 90, 58, 0.45);
            }
            .showroom-branch-card:hover {
              border-color: rgba(122, 90, 58, 0.35) !important;
              transform: translateY(-2px);
              box-shadow: 0 12px 28px rgba(122, 90, 58, 0.12) !important;
            }

            @media (max-width: 768px) {
              .showroom-branch-grid {
                grid-template-columns: 1fr !important;
                gap: 1rem !important;
              }
            }

            @media (max-width: 480px) {
              .showroom-branch-card {
                padding: 1.2rem 1.1rem !important;
              }
            }
          `}</style>
        </div>
      )}
    </AnimatePresence>
  );
}
