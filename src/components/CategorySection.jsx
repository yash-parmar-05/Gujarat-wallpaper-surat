import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { CATEGORIES } from '../data/categories';

export default function CategorySection({ onSelectCategory }) {
  return (
    <section
      id="categories"
      style={{
        padding: '7.5rem 0',
        backgroundColor: '#F8F5F1',
        position: 'relative',
      }}
    >
      <div className="container-luxury">
        {/* Section Header */}
        <div style={{ maxWidth: '720px', marginBottom: '4.5rem' }}>
          <div className="sub-tag" style={{ marginBottom: '0.85rem' }}>
            Curated Showroom Portfolios
          </div>
          <h2
            style={{
              fontSize: 'clamp(2.25rem, 4.5vw, 3.75rem)',
              color: '#2F2F2F',
              marginBottom: '1rem',
              fontWeight: 500,
            }}
          >
            Distinctive Collections
          </h2>
          <p style={{ fontSize: '1.02rem', color: '#5A5652', lineHeight: 1.65, fontWeight: 300 }}>
            Explore five specialized categories of surface finishes, wall coverings, and luxury accents curated for modern Indian residences and commercial interiors.
          </p>
        </div>

        {/* Category Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '2rem',
          }}
        >
          {CATEGORIES.map((cat, index) => {
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
                  gridCol: gridCol,
                  position: 'relative',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  minHeight: minHeight,
                  backgroundColor: '#E7D7BE',
                  boxShadow: '0 12px 32px rgba(122, 90, 58, 0.12)',
                  border: '1px solid rgba(122, 90, 58, 0.16)',
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
                    filter: 'brightness(0.88)',
                  }}
                />

                {/* Dark Gradient Overlay */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(30, 24, 18, 0.92) 0%, rgba(30, 24, 18, 0.25) 50%, rgba(30, 24, 18, 0.35) 100%)',
                    pointerEvents: 'none',
                  }}
                />

                {/* Category Card Content */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    padding: '2.5rem',
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
                        fontSize: '1.35rem',
                        color: '#E7D7BE',
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
                        color: '#F8F5F1',
                        backgroundColor: 'rgba(122, 90, 58, 0.5)',
                        backdropFilter: 'blur(8px)',
                        padding: '0.3rem 0.8rem',
                        borderRadius: '9999px',
                        border: '1px solid rgba(231, 215, 190, 0.4)',
                        fontWeight: 600,
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
                        color: '#FFFFFF',
                        marginBottom: '0.5rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        fontWeight: 600,
                      }}
                    >
                      <span>{cat.name}</span>
                      <div
                        className="cat-arrow"
                        style={{
                          width: '44px',
                          height: '44px',
                          borderRadius: '50%',
                          backgroundColor: 'rgba(231, 215, 190, 0.25)',
                          border: '1px solid #E7D7BE',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#FFFFFF',
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
                        color: '#E7D7BE',
                        lineHeight: 1.55,
                        maxWidth: '90%',
                        fontWeight: 300,
                        margin: 0,
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
          background-color: #7A5A3A !important;
          color: #FFFFFF !important;
          border-color: #7A5A3A !important;
          transform: translate(3px, -3px);
        }
      `}</style>
    </section>
  );
}
