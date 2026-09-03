import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { CATEGORIES } from '../data/categories';

export default function CategorySection({ onSelectCategory }) {
  return (
    <section
      id="categories"
      style={{
        padding: '7rem 0',
        backgroundColor: '#F4EFEA',
        position: 'relative',
      }}
    >
      <div className="container-luxury">
        {/* Section Header */}
        <div style={{ maxWidth: '720px', marginBottom: '4rem' }}>
          <div className="sub-tag" style={{ marginBottom: '0.75rem' }}>
            Curated Showroom Portfolios
          </div>
          <h2
            style={{
              fontSize: 'clamp(2.25rem, 4.5vw, 3.75rem)',
              color: '#1C1917',
              marginBottom: '1rem',
            }}
          >
            Distinctive Collections
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#78716C', lineHeight: 1.6 }}>
            Explore five specialized categories of surface finishes, wall coverings, and luxury accents curated for modern Indian residences and commercial interiors.
          </p>
        </div>

        {/* Category Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '1.75rem',
          }}
        >
          {CATEGORIES.map((cat, index) => {
            // Asymmetric layout logic for high-end editorial feel
            // Items 0 and 1: 7 cols & 5 cols
            // Items 2, 3, 4: 4 cols each
            let gridCol = 'span 4';
            let minHeight = '420px';

            if (index === 0) {
              gridCol = 'span 7';
              minHeight = '460px';
            } else if (index === 1) {
              gridCol = 'span 5';
              minHeight = '460px';
            }

            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => onSelectCategory(cat.name)}
                style={{
                  gridColumn: gridCol,
                  position: 'relative',
                  borderRadius: '6px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  minHeight: minHeight,
                  backgroundColor: '#141312',
                }}
                className="category-card"
              >
                {/* Background Image with Zoom on Hover */}
                <div
                  className="cat-bg-image"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: `url(${cat.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    transition: 'transform 0.9s cubic-bezier(0.16, 1, 0.3, 1), filter 0.5s ease',
                    filter: 'brightness(0.85)',
                  }}
                />

                {/* Dark Gradient Overlay */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(20, 19, 18, 0.92) 0%, rgba(20, 19, 18, 0.25) 50%, rgba(20, 19, 18, 0.4) 100%)',
                    pointerEvents: 'none',
                  }}
                />

                {/* Category Card Content */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    padding: '2.25rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    zIndex: 2,
                  }}
                >
                  {/* Top: Category Number & Tag */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span
                      style={{
                        fontFamily: "'Cormorant Garamond', Georgia, serif",
                        fontSize: '1.25rem',
                        color: '#C5A880',
                        fontWeight: 600,
                        letterSpacing: '0.05em',
                      }}
                    >
                      0{index + 1}
                    </span>
                    <span
                      style={{
                        fontSize: '0.68rem',
                        letterSpacing: '0.18em',
                        textTransform: 'uppercase',
                        color: 'rgba(247, 244, 238, 0.75)',
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        backdropFilter: 'blur(6px)',
                        padding: '0.25rem 0.65rem',
                        borderRadius: '9999px',
                        border: '1px solid rgba(255, 255, 255, 0.15)',
                      }}
                    >
                      {cat.subcategories.length} Collections
                    </span>
                  </div>

                  {/* Bottom: Title, Description, Arrow Button */}
                  <div>
                    <h3
                      style={{
                        fontSize: 'clamp(1.75rem, 2.5vw, 2.35rem)',
                        color: '#F7F4EE',
                        marginBottom: '0.5rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}
                    >
                      <span>{cat.name}</span>
                      <div
                        className="cat-arrow"
                        style={{
                          width: '40px',
                          height: '40px',
                          borderRadius: '50%',
                          backgroundColor: 'rgba(197, 168, 128, 0.2)',
                          border: '1px solid #C5A880',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#F7F4EE',
                          transition: 'all 0.4s ease',
                          flexShrink: 0,
                        }}
                      >
                        <ArrowUpRight size={18} />
                      </div>
                    </h3>

                    <p
                      style={{
                        fontSize: '0.88rem',
                        color: '#D4CDC3',
                        lineHeight: 1.5,
                        maxWidth: '90%',
                        fontWeight: 300,
                      }}
                    >
                      {cat.tagline}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .category-card {
            grid-column: span 6 !important;
            min-height: 380px !important;
          }
        }
        @media (max-width: 640px) {
          .category-card {
            grid-column: span 12 !important;
            min-height: 340px !important;
          }
        }
        .category-card:hover .cat-bg-image {
          transform: scale(1.06);
          filter: brightness(0.95);
        }
        .category-card:hover .cat-arrow {
          background-color: #C5A880 !important;
          color: #141312 !important;
          transform: translate(3px, -3px);
        }
      `}</style>
    </section>
  );
}
