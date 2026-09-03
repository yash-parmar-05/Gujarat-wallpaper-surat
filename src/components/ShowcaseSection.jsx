import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Check, Sparkles, ChevronRight, Layers, Box, Maximize2, Wind } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function ShowcaseSection({ onExploreCategory, onOpenProductByName }) {
  const [activeTab, setActiveTab] = useState('wallpapers');
  const { isDark } = useTheme();

  const showcaseChapters = [
    {
      id: 'wallpapers',
      title: 'Luxury Wallpapers',
      category: 'Wallpapers',
      badge: 'Architectural Wallcoverings',
      headline: 'Heritage Pichwai & Embossed Metallic Artistry',
      description:
        'Transform plain vertical surfaces into captivating artistic statements. Our wallpaper collections span traditional Indian gilded heritage Pichwai motifs, tactile woven Italian linens, seamless 3D relief embossing, and durable commercial vinyl substrates.',
      heroImage: '/assets/products/wallpaper-showcase.jpg',
      detailImage: '/assets/products/wallpaper-card.jpg',
      subcategories: [
        'Designer Wallpapers',
        'Decorative Wallpapers',
        'PVC Wallpapers',
        '3D Wallpapers',
        'Textured Wallpapers',
        'Floral / Nature Wallpapers',
        'Marble Wallpapers',
      ],
      features: [
        'Hand-applied gold leaf & embossed metallic highlights',
        'Washable, UV-resistant non-woven linen substrate',
        'Custom wall murals scaled to architectural heights',
        'Eco-certified low-VOC non-toxic residential adhesives',
      ],
      targetProduct: 'Aura of Dwarka — Pichwai Gold-Foil Wallpaper',
    },
    {
      id: 'pvc-panels',
      title: 'PVC Wall Panels',
      category: 'PVC Wall Panels',
      badge: 'Architectural Louvers',
      headline: 'Fluted Acoustic Louvers & 3D Feature Walls',
      description:
        'Engineered for modern media backdrops, living room dividers, and executive suites. Featuring interlocking vertical slats, rich smoked oak finishes, and integrated concealed LED channels that create striking architectural shadows.',
      heroImage: '/assets/products/pvc-panel-showcase.jpg',
      detailImage: '/assets/products/pvc-panel-card.jpg',
      subcategories: [
        '3D Wall Panels',
        'Decorative PVC Panels',
        'Brick Pattern Panels',
        'Textured Panels',
      ],
      features: [
        'Deep 25mm 3D fluted profile with shadow relief',
        '100% waterproof, termite-proof & fire-retardant (Class B1)',
        'Built-in vertical channels for warm 3000K LED strip lighting',
        'Interlocking tongue & groove mechanism for zero-mess installation',
      ],
      targetProduct: 'Veneer Luxe Fluted Charcoal Louver Panel',
    },
    {
      id: 'carpets',
      title: 'Luxury Carpets',
      category: 'Carpets',
      badge: 'Bespoke Floorcoverings',
      headline: 'Hand-Tufted Kashmiri Silk & New Zealand Wool',
      description:
        'Designed to anchor the grandeur of living rooms and bedroom salons. Each carpet features hand-carved high-low relief pile, blending resilient New Zealand wool with the luminous sheen of bamboo silk in muted champagne and ivory palettes.',
      heroImage: '/assets/products/carpet-showcase.jpg',
      detailImage: '/assets/products/carpet-card.jpg',
      subcategories: ['PVC Carpets', 'Decorative Carpets'],
      features: [
        'High-low sculpted relief pile hand-sheared by master artisans',
        '70% New Zealand Wool blended with 30% Bamboo Silk sheen',
        'Durable cotton canvas with non-slip natural latex backing',
        'Acoustical dampening for modern marble & tile flooring',
      ],
      targetProduct: 'Virasat Hand-Tufted Kashmiri Silk-Wool Carpet',
    },
    {
      id: 'turf',
      title: 'Artificial Turf / Grass',
      category: 'Artificial Turf / Grass',
      badge: 'Terrace & Balcony Living',
      headline: 'Evergreen 45mm High-Density Landscape Turf',
      description:
        'Bring lush nature to high-rise penthouse terraces, balconies, and private courtyards in Surat. Engineered with four-tone natural blade variegation and soft curly thatch that withstands harsh sunlight without fading or shedding.',
      heroImage: '/assets/products/turf-showcase.jpg',
      detailImage: '/assets/products/turf-card.jpg',
      subcategories: ['Artificial Grass', 'Artificial Turf'],
      features: [
        'Plush 45mm pile height with 18,900 stitches/m² density',
        'Four-tone blade mix (emerald, olive, warm tan thatch)',
        'Perforated latex backing with rapid 60L/min/m² water drainage',
        'UV-stabilized cool-yarn technology for Gujarat climate',
      ],
      targetProduct: 'Emerald Meadow 45mm Balcony Landscape Turf',
    },
    {
      id: 'wall-decor',
      title: 'Wall Decor',
      category: 'Wall Decor',
      badge: 'Bespoke Art & Accents',
      headline: 'Curated Accent Finishes & Feature Materials',
      description:
        'Elevate entry foyers, master headboard walls, and reception alcoves with bespoke metallic wall reliefs, precision decals, and composite decorative coverings designed to harmonize with your interior architecture.',
      heroImage: '/assets/products/wallpaper-card.jpg',
      detailImage: '/assets/products/wallpaper-showcase.jpg',
      subcategories: [
        'Wall Stickers',
        'Decorative Wall Coverings',
        'Feature Wall Materials',
      ],
      features: [
        'Gilded hand-relief accents on archival woven fabric',
        'Protective luster sealant against moisture and dusting',
        'Custom modular mounting for effortless alignment',
        'Bespoke metallic inlays for contemporary wardrobes and panels',
      ],
      targetProduct: 'Gold-Leaf Embossed Lotus Wall Accent Coverings',
    },
  ];

  const current = showcaseChapters.find((c) => c.id === activeTab) || showcaseChapters[0];

  const colors = {
    bgSection: isDark ? '#141312' : '#F4EFEA',
    textPrimary: isDark ? '#F7F4EE' : '#1C1917',
    textSecondary: isDark ? '#C8C2B7' : '#57534E',
    accentGold: isDark ? '#C5A880' : '#A68353',
    borderSubtle: isDark ? 'rgba(247, 244, 238, 0.1)' : 'rgba(28, 25, 23, 0.1)',
    tagBg: isDark ? 'rgba(255, 255, 255, 0.06)' : '#FFFFFF',
    tagText: isDark ? '#D4CDC3' : '#44403C',
  };

  return (
    <section
      id="showcase"
      style={{
        padding: '8rem 0',
        backgroundColor: colors.bgSection,
        color: colors.textPrimary,
        position: 'relative',
        transition: 'background-color 0.35s ease, color 0.3s ease',
      }}
    >
      <div className="container-luxury">
        {/* Showcase Header */}
        <div style={{ maxWidth: '780px', marginBottom: '3.5rem' }}>
          <div className="sub-tag" style={{ color: colors.accentGold, marginBottom: '0.75rem' }}>
            Material &amp; Craft Showcase
          </div>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(2.5rem, 5vw, 4.25rem)',
              color: colors.textPrimary,
              marginBottom: '1rem',
            }}
          >
            Showroom Disciplines
          </h2>
          <p style={{ fontSize: '1.05rem', color: colors.textSecondary, lineHeight: 1.6 }}>
            Explore each specialized product vertical in detail, from bespoke wallcoverings and acoustic louvers to lush balcony landscapes.
          </p>
        </div>

        {/* Category Navigation Pills */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            overflowX: 'auto',
            WebkitOverflowScrolling: 'touch',
            paddingBottom: '1rem',
            marginBottom: '3rem',
            borderBottom: `1px solid ${colors.borderSubtle}`,
            scrollbarWidth: 'none',
            flexWrap: 'nowrap',
          }}
          className="no-scrollbar"
        >
          {showcaseChapters.map((chapter) => {
            const isActive = activeTab === chapter.id;
            return (
              <button
                key={chapter.id}
                onClick={() => setActiveTab(chapter.id)}
                style={{
                  padding: '0.75rem 1.5rem',
                  borderRadius: '6px',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  whiteSpace: 'nowrap',
                  flexShrink: 0,
                  minWidth: 'max-content',
                  cursor: 'pointer',
                  transition: 'background-color 0.25s ease, color 0.25s ease, border-color 0.25s ease',
                  backgroundColor: isActive ? colors.accentGold : (isDark ? 'rgba(255, 255, 255, 0.05)' : '#FFFFFF'),
                  color: isActive ? (isDark ? '#141312' : '#FFFFFF') : (isDark ? '#D4CDC3' : '#57534E'),
                  border: isActive ? `1px solid ${colors.accentGold}` : `1px solid ${colors.borderSubtle}`,
                  boxShadow: isActive ? '0 4px 12px rgba(0, 0, 0, 0.12)' : 'none',
                }}
              >
                {chapter.title}
              </button>
            );
          })}
        </div>

        {/* Active Chapter Presentation */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(12, 1fr)',
              gap: '3rem',
              alignItems: 'center',
            }}
            className="showcase-grid-container"
          >
            {/* Visual Column: Dual Image Showcase Layout */}
            <div
              style={{
                gridColumn: 'span 7',
                position: 'relative',
              }}
              className="showcase-visual-col"
            >
              {/* Main 16:9 Showcase Image */}
              <div
                style={{
                  borderRadius: '8px',
                  overflow: 'hidden',
                  aspectRatio: '16/9',
                  backgroundColor: '#1C1A18',
                  border: '1px solid rgba(247, 244, 238, 0.1)',
                  position: 'relative',
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)',
                }}
              >
                <img
                  src={current.heroImage}
                  alt={current.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    top: '1.25rem',
                    left: '1.25rem',
                    backgroundColor: 'rgba(20, 19, 18, 0.75)',
                    backdropFilter: 'blur(8px)',
                    padding: '0.35rem 0.9rem',
                    borderRadius: '9999px',
                    fontSize: '0.7rem',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: '#C5A880',
                    border: '1px solid rgba(197, 168, 128, 0.3)',
                  }}
                >
                  {current.badge}
                </div>
              </div>

              {/* Inset 1:1 Detail Thumbnail with Floating Effect */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '-2rem',
                  right: '-1.5rem',
                  width: '200px',
                  height: '200px',
                  borderRadius: '6px',
                  overflow: 'hidden',
                  border: '3px solid #141312',
                  boxShadow: '0 15px 35px rgba(0, 0, 0, 0.5)',
                  backgroundColor: '#1C1A18',
                  display: 'none',
                }}
                className="showcase-inset-thumb"
              >
                <img
                  src={current.detailImage}
                  alt="Texture macro detail"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div
                  style={{
                    position: 'absolute',
                    bottom: '0.5rem',
                    left: '0.5rem',
                    right: '0.5rem',
                    backgroundColor: 'rgba(20, 19, 18, 0.8)',
                    padding: '0.2rem 0.4rem',
                    borderRadius: '3px',
                    fontSize: '0.62rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    textAlign: 'center',
                    color: '#F7F4EE',
                  }}
                >
                  Texture Relief
                </div>
              </div>
            </div>

            {/* Information Column */}
            <div
              style={{
                gridColumn: 'span 5',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
              className="showcase-info-col"
            >
              <div
                style={{
                  fontSize: '0.75rem',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: colors.accentGold,
                  fontWeight: 600,
                  marginBottom: '0.5rem',
                }}
              >
                {current.category} Showcase
              </div>

              <h3
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: 'clamp(2rem, 3.2vw, 2.75rem)',
                  color: colors.textPrimary,
                  marginBottom: '1.25rem',
                  lineHeight: 1.15,
                }}
              >
                {current.headline}
              </h3>

              <p
                style={{
                  fontSize: '0.95rem',
                  color: colors.textSecondary,
                  lineHeight: 1.65,
                  marginBottom: '1.75rem',
                  fontWeight: 300,
                }}
              >
                {current.description}
              </p>

              {/* Subcategories List Pills */}
              <div style={{ marginBottom: '1.75rem' }}>
                <div
                  style={{
                    fontSize: '0.72rem',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: colors.accentGold,
                    fontWeight: 600,
                    marginBottom: '0.65rem',
                  }}
                >
                  Available Subcategories:
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                  {current.subcategories.map((sub) => (
                    <span
                      key={sub}
                      style={{
                        fontSize: '0.75rem',
                        color: colors.tagText,
                        backgroundColor: colors.tagBg,
                        padding: '0.35rem 0.75rem',
                        borderRadius: '4px',
                        border: `1px solid ${colors.borderSubtle}`,
                      }}
                    >
                      {sub}
                    </span>
                  ))}
                </div>
              </div>

              {/* Architectural Features */}
              <div style={{ marginBottom: '2.5rem', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                {current.features.map((feat, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.65rem',
                      fontSize: '0.85rem',
                      color: colors.textPrimary,
                    }}
                  >
                    <Check size={14} color={colors.accentGold} style={{ flexShrink: 0 }} />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <button
                  onClick={() => onExploreCategory(current.category)}
                  style={{
                    backgroundColor: colors.accentGold,
                    color: isDark ? '#141312' : '#FFFFFF',
                    padding: '0.85rem 1.8rem',
                    borderRadius: '4px',
                    border: 'none',
                    fontWeight: 600,
                    fontSize: '0.82rem',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = isDark ? '#DFCAAD' : '#8D6B3C')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = colors.accentGold)}
                >
                  <span>Explore All {current.title}</span>
                  <ArrowUpRight size={15} />
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        @media (min-width: 992px) {
          .showcase-inset-thumb {
            display: block !important;
          }
        }
        @media (max-width: 992px) {
          .showcase-grid-container {
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            gap: 2.5rem !important;
            width: 100% !important;
          }
          .showcase-visual-col {
            width: 100% !important;
            max-width: 100% !important;
          }
          .showcase-info-col {
            width: 100% !important;
            max-width: 100% !important;
          }
        }
        @media (max-width: 768px) {
          #showcase {
            padding: 4rem 0 !important;
          }
        }
        @media (max-width: 480px) {
          #showcase {
            padding: 3rem 0 !important;
          }
        }
      `}</style>
    </section>
  );
}
