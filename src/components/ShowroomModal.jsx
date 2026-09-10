import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
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
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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

  // Lock body scroll and pause smooth scroll when modal is active
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('modal-open');
      if (window.lenis) {
        window.lenis.stop();
      }
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.classList.remove('modal-open');
        if (window.lenis) {
          window.lenis.start();
        }
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

  if (!mounted) return null;

  return createPortal(
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
            zIndex: 99999,
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
            transition={{ duration: 0.25, ease: 'easeOut' }}
            onClick={onClose}
            style={{
              position: 'absolute',
              inset: 0,
              backgroundColor: 'rgba(12, 11, 10, 0.78)',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
            }}
          />

          {/* Modal Container */}
          <motion.div
            key="showroom-window"
            data-lenis-prevent="true"
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '920px',
              maxHeight: '88vh',
              backgroundColor: '#F8F5F1',
              borderRadius: '16px',
              border: '1px solid rgba(122, 90, 58, 0.2)',
              boxShadow: '0 24px 60px rgba(0, 0, 0, 0.2)',
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
                padding: '24px 32px 18px',
                borderBottom: '1px solid rgba(122, 90, 58, 0.12)',
                position: 'relative',
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                gap: '20px',
                flexShrink: 0,
              }}
            >
              <div>
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: '11px',
                    fontWeight: 600,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    color: '#7A5A3A',
                    marginBottom: '6px',
                  }}
                >
                  <MapPin size={13} color="#7A5A3A" />
                  <span>Our Showroom Locations</span>
                </div>
                <h2
                  id="showroom-modal-title"
                  style={{
                    fontSize: 'clamp(22px, 3vw, 28px)',
                    fontWeight: 500,
                    color: '#2F2F2F',
                    margin: '0 0 6px 0',
                    lineHeight: 1.2,
                    letterSpacing: '0.01em',
                  }}
                >
                  Visit Gujarat Wallpaper &amp; Decor
                </h2>
                <p
                  style={{
                    fontSize: '14px',
                    color: '#5A5652',
                    margin: 0,
                    lineHeight: 1.5,
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
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(122, 90, 58, 0.08)',
                  border: '1px solid rgba(122, 90, 58, 0.16)',
                  color: '#2F2F2F',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  flexShrink: 0,
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(122, 90, 58, 0.16)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(122, 90, 58, 0.08)';
                }}
              >
                <X size={16} />
              </button>
            </div>

            {/* Modal Body - Scrollable Branch Grid */}
            <div
              data-lenis-prevent="true"
              style={{
                padding: '24px 32px 32px',
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
                  gap: '20px',
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
                        borderRadius: '12px',
                        padding: '24px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        gap: '16px',
                        boxShadow: '0 4px 14px rgba(0, 0, 0, 0.03)',
                        transition: 'border-color 0.2s ease, transform 0.2s ease',
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
                            marginBottom: '12px',
                          }}
                        >
                          <div
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '10px',
                            }}
                          >
                            <div
                              style={{
                                width: '36px',
                                height: '36px',
                                borderRadius: '8px',
                                backgroundColor: 'rgba(122, 90, 58, 0.08)',
                                border: '1px solid rgba(122, 90, 58, 0.18)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: '#7A5A3A',
                                flexShrink: 0,
                              }}
                            >
                              <MapPin size={16} />
                            </div>
                            <h3
                              style={{
                                fontSize: '18px',
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
                            fontSize: '13px',
                            lineHeight: 1.6,
                            color: '#5A5652',
                            margin: 0,
                            whiteSpace: 'pre-line',
                          }}
                        >
                          {branch.address}
                        </p>
                      </div>

                      {/* Action Button - GET DIRECTIONS */}
                      <div
                        style={{
                          paddingTop: '12px',
                          borderTop: '1px solid rgba(122, 90, 58, 0.1)',
                        }}
                      >
                        <button
                          onClick={() => handleGetDirections(branch)}
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '8px',
                            padding: '11px 20px',
                            backgroundColor: '#7A5A3A',
                            color: '#ffffff',
                            border: 'none',
                            borderRadius: '9999px',
                            fontSize: '13px',
                            fontWeight: 600,
                            letterSpacing: '0.04em',
                            textTransform: 'uppercase',
                            cursor: 'pointer',
                            boxShadow: '0 4px 14px rgba(122, 90, 58, 0.25)',
                            transition: 'all 0.2s ease',
                            width: '100%',
                            boxSizing: 'border-box',
                          }}
                          className="branch-btn-directions"
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = '#63472C';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = '#7A5A3A';
                          }}
                        >
                          <Navigation size={15} />
                          <span>Get Directions</span>
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Scoped CSS for Modal Responsiveness */}
          <style>{`
            .showroom-modal-scroll {
              overflow-y: auto !important;
              overscroll-behavior: contain !important;
              -webkit-overflow-scrolling: touch !important;
              touch-action: pan-y !important;
              scrollbar-width: thin;
              scrollbar-color: rgba(122, 90, 58, 0.2) transparent;
            }
            .showroom-modal-scroll::-webkit-scrollbar {
              width: 6px;
            }
            .showroom-modal-scroll::-webkit-scrollbar-track {
              background: transparent;
            }
            .showroom-modal-scroll::-webkit-scrollbar-thumb {
              background: rgba(122, 90, 58, 0.2);
              border-radius: 6px;
            }
            .showroom-branch-card:hover {
              border-color: rgba(122, 90, 58, 0.4) !important;
              transform: translateY(-2px);
            }

            @media (max-width: 768px) {
              .showroom-branch-grid {
                grid-template-columns: 1fr !important;
                gap: 14px !important;
              }
            }

            @media (max-width: 480px) {
              .showroom-branch-card {
                padding: 16px !important;
              }
            }
          `}</style>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
}
