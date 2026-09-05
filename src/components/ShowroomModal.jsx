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
            transition={{ duration: 0.28 }}
            onClick={onClose}
            style={{
              position: 'absolute',
              inset: 0,
              backgroundColor: 'rgba(12, 11, 10, 0.88)',
              backdropFilter: 'blur(14px)',
              WebkitBackdropFilter: 'blur(14px)',
            }}
          />

          {/* Modal Container */}
          <motion.div
            key="showroom-window"
            data-lenis-prevent="true"
            initial={{ opacity: 0, scale: 0.95, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 18 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '960px',
              maxHeight: '90vh',
              backgroundColor: isDark ? '#161514' : '#FAF8F5',
              borderRadius: '16px',
              border: isDark ? '1px solid rgba(197, 168, 128, 0.25)' : '1px solid rgba(166, 131, 83, 0.25)',
              boxShadow: '0 30px 70px -15px rgba(0, 0, 0, 0.75), 0 0 0 1px rgba(255, 255, 255, 0.04)',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
              zIndex: 10,
            }}
          >
            {/* Modal Header */}
            <div
              style={{
                padding: '1.75rem 2.25rem 1.25rem',
                borderBottom: isDark ? '1px solid rgba(245, 242, 236, 0.08)' : '1px solid rgba(28, 25, 23, 0.08)',
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
                    fontSize: '0.68rem',
                    fontWeight: 600,
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: '#C5A880',
                    marginBottom: '0.4rem',
                  }}
                >
                  <MapPin size={13} color="#C5A880" />
                  <span>OUR SHOWROOM LOCATIONS</span>
                </div>
                <h2
                  id="showroom-modal-title"
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: 'clamp(1.65rem, 3.2vw, 2.35rem)',
                    fontWeight: 500,
                    color: isDark ? '#F7F4EE' : '#1C1917',
                    margin: '0 0 0.4rem 0',
                    lineHeight: 1.15,
                  }}
                >
                  Visit Gujarat Wallpaper &amp; Decor
                </h2>
                <p
                  style={{
                    fontSize: '0.88rem',
                    color: isDark ? '#A69F94' : '#78716C',
                    margin: 0,
                    lineHeight: 1.5,
                    fontWeight: 300,
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
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  backgroundColor: isDark ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.05)',
                  border: isDark ? '1px solid rgba(255, 255, 255, 0.12)' : '1px solid rgba(0, 0, 0, 0.12)',
                  color: isDark ? '#F7F4EE' : '#1C1917',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  flexShrink: 0,
                  transition: 'all 0.25s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#C5A880';
                  e.currentTarget.style.borderColor = '#C5A880';
                  e.currentTarget.style.color = '#121110';
                  e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = isDark ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.05)';
                  e.currentTarget.style.borderColor = isDark ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.12)';
                  e.currentTarget.style.color = isDark ? '#F7F4EE' : '#1C1917';
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
                WebkitOverflowScrolling: 'touch',
                flex: '1 1 auto',
                minHeight: 0,
              }}
              className="showroom-modal-scroll"
            >
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '1.25rem',
                }}
                className="showroom-branch-grid"
              >
                {SHOWROOM_BRANCHES.map((branch) => {
                  return (
                    <div
                      key={branch.id}
                      style={{
                        backgroundColor: isDark ? 'rgba(26, 24, 22, 0.75)' : '#FFFFFF',
                        border: isDark ? '1px solid rgba(245, 242, 236, 0.1)' : '1px solid rgba(28, 25, 23, 0.1)',
                        borderRadius: '12px',
                        padding: '1.45rem 1.5rem',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        gap: '1.25rem',
                        boxShadow: isDark ? '0 8px 24px rgba(0, 0, 0, 0.3)' : '0 4px 16px rgba(0, 0, 0, 0.04)',
                        transition: 'all 0.3s ease',
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
                                width: '36px',
                                height: '36px',
                                borderRadius: '10px',
                                backgroundColor: isDark ? 'rgba(197, 168, 128, 0.12)' : 'rgba(166, 131, 83, 0.12)',
                                border: '1px solid rgba(197, 168, 128, 0.3)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: '#C5A880',
                                flexShrink: 0,
                              }}
                            >
                              <MapPin size={18} />
                            </div>
                            <h3
                              style={{
                                fontFamily: "'Cormorant Garamond', Georgia, serif",
                                fontSize: '1.4rem',
                                fontWeight: 600,
                                color: isDark ? '#F7F4EE' : '#1C1917',
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
                            fontSize: '0.88rem',
                            lineHeight: 1.6,
                            color: isDark ? '#C8C2B7' : '#57534E',
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
                          borderTop: isDark ? '1px solid rgba(245, 242, 236, 0.06)' : '1px solid rgba(28, 25, 23, 0.06)',
                        }}
                      >
                        <button
                          onClick={() => handleGetDirections(branch)}
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '0.65rem',
                            padding: '0.85rem 1.35rem',
                            backgroundColor: '#C5A880',
                            color: '#121110',
                            border: 'none',
                            borderRadius: '6px',
                            fontSize: '0.8rem',
                            fontWeight: 600,
                            letterSpacing: '0.1em',
                            textTransform: 'uppercase',
                            cursor: 'pointer',
                            transition: 'all 0.25s ease',
                            width: '100%',
                            boxSizing: 'border-box',
                          }}
                          className="branch-btn-directions"
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = '#DFCAAD';
                            e.currentTarget.style.transform = 'translateY(-1px)';
                            e.currentTarget.style.boxShadow = '0 6px 18px rgba(197, 168, 128, 0.3)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = '#C5A880';
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = 'none';
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
            }
            .showroom-modal-scroll::-webkit-scrollbar {
              width: 6px;
            }
            .showroom-modal-scroll::-webkit-scrollbar-track {
              background: rgba(0, 0, 0, 0.1);
            }
            .showroom-modal-scroll::-webkit-scrollbar-thumb {
              background: rgba(197, 168, 128, 0.35);
              border-radius: 3px;
            }
            .showroom-branch-card:hover {
              border-color: rgba(197, 168, 128, 0.4) !important;
              transform: translateY(-3px);
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
