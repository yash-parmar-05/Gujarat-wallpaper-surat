import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { PRODUCTS } from '../data/products';

export default function FeaturedCollection({ onSelectProduct }) {
  const featuredProducts = PRODUCTS.filter((p) => p.featured);

  return (
    <section
      id="featured"
      style={{
        padding: '8rem 0',
        backgroundColor: '#141312',
        color: '#F7F4EE',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Decorative Accent */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          right: '-10%',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(197, 168, 128, 0.08) 0%, rgba(20, 19, 18, 0) 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container-luxury">
        {/* Editorial Section Header */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            gap: '2rem',
            marginBottom: '5rem',
            borderBottom: '1px solid rgba(247, 244, 238, 0.1)',
            paddingBottom: '2.5rem',
          }}
        >
          <div style={{ maxWidth: '680px' }}>
            <div className="sub-tag" style={{ color: '#C5A880', marginBottom: '0.75rem' }}>
              Curated Masterpieces
            </div>
            <h2
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 4.25rem)',
                color: '#F7F4EE',
                lineHeight: 1.08,
              }}
            >
              The Signature Edit
            </h2>
          </div>

          <p
            style={{
              maxWidth: '380px',
              fontSize: '0.95rem',
              color: '#A8A29E',
              lineHeight: 1.6,
              fontWeight: 300,
            }}
          >
            A high-fashion interior showcase featuring architectural wall paneling, tactile wallpapers, and bespoke textiles captured inside a Surat penthouse.
          </p>
        </div>

        {/* Editorial Asymmetrical Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '3rem 2.5rem',
            alignItems: 'center',
          }}
        >
          {/* Feature 1: Hero Large Landscape Spread (Wallpaper) */}
          {featuredProducts[0] && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{ gridColumn: 'span 12' }}
              className="featured-hero-spread"
            >
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(12, 1fr)',
                  gap: '2.5rem',
                  alignItems: 'center',
                  backgroundColor: '#1C1A18',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  border: '1px solid rgba(247, 244, 238, 0.08)',
                }}
                className="featured-hero-inner-grid"
              >
                <div
                  style={{
                    gridColumn: 'span 8',
                    position: 'relative',
                    minHeight: '480px',
                    overflow: 'hidden',
                    cursor: 'pointer',
                  }}
                  className="featured-img-col"
                  onClick={() => onSelectProduct(featuredProducts[0])}
                >
                  <img
                    src={featuredProducts[0].showcaseImage || featuredProducts[0].image}
                    alt={featuredProducts[0].name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
                    }}
                    className="editorial-zoom-img"
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '1.5rem',
                      left: '1.5rem',
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
                    Flagship Wallpaper
                  </div>
                </div>

                <div
                  style={{
                    gridColumn: 'span 4',
                    padding: '3rem 2.5rem 3rem 1rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                  }}
                  className="featured-text-col"
                >
                  <span
                    style={{
                      fontSize: '0.75rem',
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      color: '#C5A880',
                      marginBottom: '0.75rem',
                    }}
                  >
                    {featuredProducts[0].subcategory}
                  </span>
                  <h3
                    style={{
                      fontSize: 'clamp(1.75rem, 2.2vw, 2.5rem)',
                      color: '#F7F4EE',
                      marginBottom: '1rem',
                      lineHeight: 1.15,
                    }}
                  >
                    {featuredProducts[0].name}
                  </h3>
                  <p
                    style={{
                      fontSize: '0.92rem',
                      color: '#A8A29E',
                      lineHeight: 1.6,
                      marginBottom: '2rem',
                      fontWeight: 300,
                    }}
                  >
                    {featuredProducts[0].description}
                  </p>
                  <button
                    onClick={() => onSelectProduct(featuredProducts[0])}
                    className="btn-primary"
                    style={{
                      alignSelf: 'flex-start',
                      backgroundColor: 'transparent',
                      color: '#F7F4EE',
                      borderColor: 'rgba(247, 244, 238, 0.3)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#C5A880';
                      e.currentTarget.style.color = '#141312';
                      e.currentTarget.style.borderColor = '#C5A880';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.color = '#F7F4EE';
                      e.currentTarget.style.borderColor = 'rgba(247, 244, 238, 0.3)';
                    }}
                  >
                    <span>View Specifications</span>
                    <ArrowUpRight size={15} />
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {/* Feature 2 & 3: Asymmetric Split (PVC Louver Panel & Carpet) */}
          {featuredProducts[1] && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              style={{ gridColumn: 'span 7' }}
              className="featured-split-card"
            >
              <div
                style={{
                  backgroundColor: '#1C1A18',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  border: '1px solid rgba(247, 244, 238, 0.08)',
                }}
              >
                <div
                  style={{ height: '380px', overflow: 'hidden', cursor: 'pointer', position: 'relative' }}
                  onClick={() => onSelectProduct(featuredProducts[1])}
                >
                  <img
                    src={featuredProducts[1].showcaseImage}
                    alt={featuredProducts[1].name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
                    }}
                    className="editorial-zoom-img"
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '1.25rem',
                      left: '1.25rem',
                      backgroundColor: 'rgba(20, 19, 18, 0.75)',
                      padding: '0.3rem 0.8rem',
                      borderRadius: '9999px',
                      fontSize: '0.68rem',
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      color: '#C5A880',
                    }}
                  >
                    3D Louver Feature
                  </div>
                </div>
                <div style={{ padding: '2rem' }}>
                  <span style={{ fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#C5A880' }}>
                    {featuredProducts[1].subcategory}
                  </span>
                  <h3 style={{ fontSize: '1.65rem', color: '#F7F4EE', margin: '0.5rem 0 0.75rem' }}>
                    {featuredProducts[1].name}
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: '#A8A29E', marginBottom: '1.5rem', fontWeight: 300 }}>
                    {featuredProducts[1].description}
                  </p>
                  <button
                    onClick={() => onSelectProduct(featuredProducts[1])}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      fontSize: '0.8rem',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: '#C5A880',
                    }}
                  >
                    <span>Discover Details</span>
                    <ArrowUpRight size={14} />
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {featuredProducts[2] && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              style={{ gridColumn: 'span 5' }}
              className="featured-split-card"
            >
              <div
                style={{
                  backgroundColor: '#1C1A18',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  border: '1px solid rgba(247, 244, 238, 0.08)',
                }}
              >
                <div
                  style={{ height: '380px', overflow: 'hidden', cursor: 'pointer', position: 'relative' }}
                  onClick={() => onSelectProduct(featuredProducts[2])}
                >
                  <img
                    src={featuredProducts[2].image}
                    alt={featuredProducts[2].name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
                    }}
                    className="editorial-zoom-img"
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '1.25rem',
                      left: '1.25rem',
                      backgroundColor: 'rgba(20, 19, 18, 0.75)',
                      padding: '0.3rem 0.8rem',
                      borderRadius: '9999px',
                      fontSize: '0.68rem',
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      color: '#C5A880',
                    }}
                  >
                    Hand-Tufted Silk &amp; Wool
                  </div>
                </div>
                <div style={{ padding: '2rem' }}>
                  <span style={{ fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#C5A880' }}>
                    {featuredProducts[2].subcategory}
                  </span>
                  <h3 style={{ fontSize: '1.65rem', color: '#F7F4EE', margin: '0.5rem 0 0.75rem' }}>
                    {featuredProducts[2].name}
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: '#A8A29E', marginBottom: '1.5rem', fontWeight: 300 }}>
                    {featuredProducts[2].description}
                  </p>
                  <button
                    onClick={() => onSelectProduct(featuredProducts[2])}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      fontSize: '0.8rem',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: '#C5A880',
                    }}
                  >
                    <span>Discover Details</span>
                    <ArrowUpRight size={14} />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      <style>{`
        .featured-hero-spread:hover .editorial-zoom-img,
        .featured-split-card:hover .editorial-zoom-img {
          transform: scale(1.04);
        }
        @media (max-width: 992px) {
          .featured-hero-inner-grid {
            display: flex !important;
            flex-direction: column !important;
            width: 100% !important;
          }
          .featured-hero-spread .featured-img-col {
            width: 100% !important;
            min-height: 340px !important;
          }
          .featured-hero-spread .featured-text-col {
            width: 100% !important;
            padding: 2rem !important;
          }
          .featured-split-card {
            grid-column: span 12 !important;
          }
        }

        @media (max-width: 640px) {
          #featured {
            padding: 5rem 0 !important;
          }
          .featured-hero-spread .featured-img-col {
            min-height: 260px !important;
          }
          .featured-hero-spread .featured-text-col {
            padding: 1.75rem 1.25rem !important;
          }
        }

        @media (max-width: 480px) {
          #featured {
            padding: 4rem 0 !important;
          }
        }
      `}</style>
    </section>
  );
}
