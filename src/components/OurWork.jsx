import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Maximize2, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const WORK_ITEMS = [
  // WALLPAPER WORK
  {
    id: 'work-wp-1',
    category: 'WALLPAPER',
    title: 'Warm Bronze Floral Living Suite',
    subtitle: 'Luxury Textured Wallpaper Installation',
    image: '/assets/our-work/work-wp-01.jpg',
    aspect: 'landscape',
    description: 'Bespoke textured branch wallpaper in warm bronze tones, curated for luxury living room credenza wall.'
  },
  {
    id: 'work-wp-2',
    category: 'WALLPAPER',
    title: 'Monochrome Gilded Foliage Accent',
    subtitle: 'Contemporary Drawing Room Installation',
    image: '/assets/our-work/work-wp-02.jpg',
    aspect: 'landscape',
    description: 'Artistic charcoal foliage wallcovering with light-catching texture behind modern sofa arrangement.'
  },
  {
    id: 'work-wp-3',
    category: 'WALLPAPER',
    title: 'Silver Mist Botanical Feature Wall',
    subtitle: 'Minimalist Lounge Installation',
    image: '/assets/our-work/work-wp-03.jpg',
    aspect: 'landscape',
    description: 'Subtle vertical branch motifs with serene linen backdrop creating an airy, refined atmosphere.'
  },
  {
    id: 'work-wp-4',
    category: 'WALLPAPER',
    title: 'Geometric Diamond Salon Wall',
    subtitle: 'Modern Classical Wallpaper Installation',
    image: '/assets/our-work/work-wp-04.jpg',
    aspect: 'landscape',
    description: 'Precision geometric pattern wallpaper complementing warm wood paneling and contemporary furniture.'
  },

  // UV MARBLE ROLL WORK
  {
    id: 'work-uv-1',
    category: 'UV MARBLE ROLL',
    title: 'Gloss Italian Marble Sheet Rolls',
    subtitle: 'Seamless UV Marble Wall Finishing',
    image: '/assets/our-work/work-uv-01.jpg',
    aspect: 'landscape',
    description: 'High-gloss UV marble rolls featuring Carrara and Statuario veining for seamless waterproof wall installations.'
  },
  {
    id: 'work-uv-2',
    category: 'UV MARBLE ROLL',
    title: 'Designer Fluted & Marble Roll Gallery',
    subtitle: 'Showroom Selection & Architectural Rolls',
    image: '/assets/our-work/work-uv-02.jpg',
    aspect: 'landscape',
    description: 'Architectural collection of metallic foil, abstract vein, and fluted UV marble sheets for luxury interior accents.'
  },
  {
    id: 'work-uv-3',
    category: 'UV MARBLE ROLL',
    title: 'Grand Marble & Sheet Display Gallery',
    subtitle: 'Commercial & Residential Surface Cladding',
    image: '/assets/our-work/work-uv-03.jpg',
    aspect: 'landscape',
    description: 'Full showroom range of UV marble rolls, gold line sheets, and waterproof architectural surface materials.'
  },
  {
    id: 'work-uv-4',
    category: 'UV MARBLE ROLL',
    title: 'Architectural Louver & UV Panel Wall',
    subtitle: 'Fluted Louvers & UV Marble Accent Panels',
    image: '/assets/our-work/work-uv-04.jpg',
    aspect: 'landscape',
    description: 'Precision mounted UV marble wall panels, wood-grain louvers, and gold accent strip combinations.'
  }
];

export default function OurWork({ id = 'our-work' }) {
  const [activeTab, setActiveTab] = useState('ALL');
  const [selectedItem, setSelectedItem] = useState(null);
  const { isDark } = useTheme();

  const filteredItems = activeTab === 'ALL' 
    ? WORK_ITEMS 
    : WORK_ITEMS.filter(item => item.category === activeTab);

  const colors = {
    bgMain: isDark ? '#121110' : '#FBF9F5',
    bgCard: isDark ? '#181715' : '#FFFFFF',
    textPrimary: isDark ? '#F7F4EE' : '#1C1917',
    textSecondary: isDark ? '#C8C2B7' : '#57534E',
    accentGold: isDark ? '#C5A880' : '#A68353',
    borderSubtle: isDark ? 'rgba(245, 242, 236, 0.08)' : 'rgba(28, 25, 23, 0.08)',
    borderCard: isDark ? 'rgba(197, 168, 128, 0.22)' : 'rgba(166, 131, 83, 0.22)',
  };

  return (
    <section
      id={id}
      style={{
        padding: '6.5rem 0',
        backgroundColor: colors.bgMain,
        borderTop: `1px solid ${colors.borderSubtle}`,
        position: 'relative',
        transition: 'background-color 0.35s ease, border-color 0.3s ease',
      }}
      aria-label="Our Work - Wallpaper and UV Marble Roll"
    >
      <div className="container-luxury">
        {/* Section Header */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            gap: '2rem',
            marginBottom: '3rem',
          }}
        >
          <div style={{ maxWidth: '650px' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.72rem',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: colors.accentGold,
                fontWeight: 600,
                marginBottom: '0.75rem',
              }}
            >
              <Sparkles size={13} />
              <span>ACTUAL SHOWROOM &amp; PROJECT WORK</span>
            </div>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: 'clamp(2.35rem, 4.5vw, 3.75rem)',
                color: colors.textPrimary,
                fontWeight: 500,
                lineHeight: 1.15,
                marginBottom: '0.85rem',
              }}
            >
              Our Work
            </h2>
            <p
              style={{
                fontSize: '1rem',
                color: colors.textSecondary,
                lineHeight: 1.65,
                fontWeight: 300,
              }}
            >
              Explore real work and installations by Gujarat Wallpaper &amp; Decor across luxury residences and commercial projects in Surat.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div
            style={{
              display: 'inline-flex',
              gap: '0.5rem',
              backgroundColor: isDark ? 'rgba(255, 255, 255, 0.04)' : 'rgba(0, 0, 0, 0.04)',
              padding: '0.35rem',
              borderRadius: '8px',
              border: `1px solid ${colors.borderSubtle}`,
            }}
            className="work-filter-tabs"
          >
            {[
              { label: 'ALL WORK', value: 'ALL' },
              { label: 'WALLPAPER', value: 'WALLPAPER' },
              { label: 'UV MARBLE ROLL', value: 'UV MARBLE ROLL' }
            ].map((tab) => {
              const active = activeTab === tab.value;
              return (
                <button
                  key={tab.value}
                  onClick={() => setActiveTab(tab.value)}
                  style={{
                    padding: '0.6rem 1.25rem',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    borderRadius: '6px',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                    backgroundColor: active ? colors.accentGold : 'transparent',
                    color: active ? (isDark ? '#141312' : '#FFFFFF') : colors.textSecondary,
                  }}
                  className="work-tab-btn"
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Work Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1.5rem',
          }}
          className="our-work-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.45, delay: idx * 0.05 }}
                onClick={() => setSelectedItem(item)}
                style={{
                  backgroundColor: colors.bgCard,
                  borderRadius: '10px',
                  overflow: 'hidden',
                  border: `1px solid ${colors.borderCard}`,
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  boxShadow: isDark ? '0 10px 30px rgba(0, 0, 0, 0.35)' : '0 6px 20px rgba(0, 0, 0, 0.05)',
                  transition: 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.35s ease, border-color 0.3s ease',
                }}
                className="our-work-card"
              >
                {/* Image Container with Fixed Aspect Ratio */}
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    paddingTop: '68%',
                    overflow: 'hidden',
                    backgroundColor: isDark ? '#141312' : '#EAE5DE',
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    decoding="async"
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                    }}
                    className="our-work-img"
                  />

                  {/* Badge */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '0.85rem',
                      left: '0.85rem',
                      zIndex: 2,
                      backgroundColor: 'rgba(18, 17, 16, 0.85)',
                      backdropFilter: 'blur(8px)',
                      border: '1px solid rgba(197, 168, 128, 0.3)',
                      padding: '0.3rem 0.65rem',
                      borderRadius: '4px',
                      fontSize: '0.62rem',
                      fontWeight: 600,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: '#C5A880',
                    }}
                  >
                    {item.category}
                  </div>

                  {/* Hover Quick Zoom Icon */}
                  <div
                    className="work-zoom-overlay"
                    style={{
                      position: 'absolute',
                      inset: 0,
                      backgroundColor: 'rgba(18, 17, 16, 0.4)',
                      opacity: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'opacity 0.3s ease',
                    }}
                  >
                    <div
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                        color: '#141312',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transform: 'scale(0.85)',
                        transition: 'transform 0.3s ease',
                      }}
                      className="zoom-btn-icon"
                    >
                      <Maximize2 size={18} />
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div
                  style={{
                    padding: '1.25rem 1.35rem 1.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    flexGrow: 1,
                  }}
                >
                  <div
                    style={{
                      fontSize: '0.7rem',
                      color: colors.accentGold,
                      fontWeight: 500,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      marginBottom: '0.3rem',
                    }}
                  >
                    {item.subtitle}
                  </div>
                  <h3
                    style={{
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                      fontSize: '1.25rem',
                      color: colors.textPrimary,
                      fontWeight: 600,
                      lineHeight: 1.25,
                      marginBottom: '0.5rem',
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontSize: '0.84rem',
                      color: colors.textSecondary,
                      lineHeight: 1.5,
                      fontWeight: 300,
                      margin: 0,
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Lightbox / Full View Modal */}
      <AnimatePresence>
        {selectedItem && (
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
              onClick={() => setSelectedItem(null)}
              style={{
                position: 'absolute',
                inset: 0,
                backgroundColor: 'rgba(14, 13, 12, 0.94)',
                backdropFilter: 'blur(16px)',
              }}
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              style={{
                position: 'relative',
                maxWidth: '920px',
                width: '100%',
                maxHeight: '90vh',
                backgroundColor: isDark ? '#171614' : '#FFFFFF',
                borderRadius: '12px',
                overflow: 'hidden',
                border: `1px solid ${colors.borderCard}`,
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.75)',
                zIndex: 10,
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedItem(null)}
                aria-label="Close Work Modal"
                style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  color: '#F7F4EE',
                  backgroundColor: 'rgba(0, 0, 0, 0.65)',
                  backdropFilter: 'blur(6px)',
                  borderRadius: '50%',
                  width: '38px',
                  height: '38px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  cursor: 'pointer',
                  zIndex: 20,
                  transition: 'background-color 0.2s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = colors.accentGold)}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.65)')}
              >
                <X size={18} />
              </button>

              {/* Modal Image */}
              <div
                style={{
                  width: '100%',
                  maxHeight: '62vh',
                  backgroundColor: '#0F0E0D',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden',
                }}
              >
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  style={{
                    maxWidth: '100%',
                    maxHeight: '62vh',
                    objectFit: 'contain',
                    display: 'block',
                  }}
                />
              </div>

              {/* Modal Details */}
              <div style={{ padding: '1.75rem 2rem' }}>
                <span
                  style={{
                    fontSize: '0.72rem',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: colors.accentGold,
                    fontWeight: 600,
                  }}
                >
                  {selectedItem.category} • Gujarat Wallpaper &amp; Decor
                </span>
                <h3
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: '1.65rem',
                    color: colors.textPrimary,
                    marginTop: '0.35rem',
                    marginBottom: '0.4rem',
                    fontWeight: 600,
                  }}
                >
                  {selectedItem.title}
                </h3>
                <p style={{ fontSize: '0.92rem', color: colors.textSecondary, fontWeight: 300, margin: 0, lineHeight: 1.6 }}>
                  {selectedItem.description}
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <style>{`
        .our-work-card:hover {
          transform: translateY(-6px);
          border-color: ${colors.accentGold} !important;
          box-shadow: ${isDark ? '0 16px 36px rgba(0, 0, 0, 0.55)' : '0 12px 28px rgba(0, 0, 0, 0.1)'} !important;
        }
        .our-work-card:hover .our-work-img {
          transform: scale(1.06);
        }
        .our-work-card:hover .work-zoom-overlay {
          opacity: 1 !important;
        }
        .our-work-card:hover .zoom-btn-icon {
          transform: scale(1) !important;
        }

        @media (max-width: 1200px) {
          .our-work-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 1.5rem !important;
          }
        }

        @media (max-width: 768px) {
          #our-work {
            padding: 4.5rem 0 !important;
          }
          .our-work-grid {
            grid-template-columns: 1fr !important;
            gap: 1.25rem !important;
          }
          .work-filter-tabs {
            width: 100% !important;
            display: flex !important;
            justifyContent: space-between !important;
          }
          .work-tab-btn {
            flex: 1 !important;
            padding: 0.55rem 0.65rem !important;
            font-size: 0.68rem !important;
            text-align: center !important;
          }
        }

        @media (max-width: 480px) {
          #our-work {
            padding: 3.5rem 0 !important;
          }
        }
      `}</style>
    </section>
  );
}
