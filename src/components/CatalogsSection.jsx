import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Eye, Download, BookOpen } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const CATALOGS_DATA = [
  {
    id: 'big-boss',
    title: 'Big Boss Luxury Wallpaper Catalog',
    tagline: 'Exclusive Italian Textures, Embossed Damask & Classical Heritage Prints',
    fileSize: '15 MB (Fast HD Edition)',
    pdfUrl: '/BIG%20BOSS.pdf',
    downloadName: 'BIG BOSS.pdf',
    coverImage: '/bigboss-luxury-cover.png',
    features: ['Italian Vinyl & Linens', 'High Washability', 'Commercial & Residential Grade'],
  },
  {
    id: 'wallkalakaar',
    title: 'Wallkalakaar Wallpaper Catalog',
    tagline: 'Architectural Motifs, Contemporary Murals & Designer Living Walls',
    fileSize: '73 MB (Full HD Original Edition)',
    pdfUrl: '/WALLKALAKAAR%20NEW.pdf',
    downloadName: 'WALLKALAKAAR NEW.pdf',
    coverImage: '/wallkalakaar-luxury-cover.png',
    features: ['Custom Murals', 'Seamless Textures', 'Anti-Fungal & Odorless Substrates'],
  },
];

export default function CatalogsSection({ id = 'catalogs' }) {
  const { isDark } = useTheme();

  const colors = {
    bgMain: '#F8F5F1',
    bgCard: '#FFFFFF',
    bgCardHover: '#FCFAF7',
    textPrimary: '#2F2F2F',
    textSecondary: '#5A5652',
    textMuted: '#87827C',
    accentWalnut: '#7A5A3A',
    accentGold: '#7A5A3A',
    accentGoldHover: '#63472C',
    borderSubtle: 'rgba(122, 90, 58, 0.12)',
    borderCard: 'rgba(122, 90, 58, 0.16)',
  };

  const handleViewCatalog = (pdfUrl) => {
    window.open(pdfUrl, '_blank', 'noopener,noreferrer');
  };

  const handleDownload = (e, pdfUrl, downloadName) => {
    e.stopPropagation();
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = downloadName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id={id}
      style={{
        padding: '7.5rem 0',
        backgroundColor: colors.bgMain,
        position: 'relative',
        transition: 'background-color 0.35s ease',
      }}
    >
      <div className="container-luxury">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 4.5rem' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '0.74rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: colors.accentWalnut,
              fontWeight: 700,
              marginBottom: '0.85rem',
            }}
          >
            <BookOpen size={14} color={colors.accentWalnut} />
            <span>OFFICIAL WALLPAPER EDITIONS</span>
          </div>

          <h2
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(2.35rem, 4vw, 3.4rem)',
              color: colors.textPrimary,
              fontWeight: 500,
              marginBottom: '0.85rem',
              letterSpacing: '0.01em',
              lineHeight: 1.15,
            }}
          >
            Explore Our Catalogs
          </h2>

          <p
            style={{
              fontSize: '1rem',
              color: colors.textSecondary,
              lineHeight: 1.65,
              fontWeight: 300,
              margin: 0,
            }}
          >
            Browse our complete editions of luxury wallpapers, Italian textures, and architectural surface designs. View online or download high-resolution PDF catalogs.
          </p>
        </div>

        {/* 2 Catalog Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '2.5rem',
            maxWidth: '1120px',
            margin: '0 auto',
          }}
          className="catalogs-grid"
        >
          {CATALOGS_DATA.map((catalog, idx) => (
            <motion.div
              key={catalog.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: idx * 0.1, ease: 'easeOut' }}
              style={{
                backgroundColor: colors.bgCard,
                border: `1px solid ${colors.borderCard}`,
                borderRadius: '24px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 12px 36px rgba(122, 90, 58, 0.08)',
                transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                willChange: 'transform, opacity',
              }}
              className="catalog-card"
            >
              {/* Cover Preview Image with Gradient & Badge */}
              <div
                style={{
                  position: 'relative',
                  height: '260px',
                  overflow: 'hidden',
                  backgroundColor: '#E7D7BE',
                }}
              >
                <img
                  src={catalog.coverImage}
                  alt={catalog.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                  className="catalog-cover-img"
                />

                {/* Soft warm gradient overlay for luxury depth */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, rgba(122, 90, 58, 0.04) 0%, rgba(30, 24, 18, 0.35) 100%)',
                  }}
                />
              </div>

              {/* Card Content */}
              <div
                style={{
                  padding: '2rem 2.25rem 2.25rem',
                  display: 'flex',
                  flexDirection: 'column',
                  flex: 1,
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <h3
                    style={{
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                      fontSize: '1.75rem',
                      fontWeight: 600,
                      color: colors.textPrimary,
                      margin: '0 0 0.5rem',
                      letterSpacing: '0.01em',
                      lineHeight: 1.25,
                    }}
                  >
                    {catalog.title}
                  </h3>

                  <p
                    style={{
                      fontSize: '0.92rem',
                      lineHeight: 1.6,
                      color: colors.textSecondary,
                      margin: '0 0 1.5rem',
                      fontWeight: 300,
                    }}
                  >
                    {catalog.tagline}
                  </p>

                  {/* Highlights Tags */}
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '0.5rem',
                      marginBottom: '2rem',
                    }}
                  >
                    {catalog.features.map((feat) => (
                      <span
                        key={feat}
                        style={{
                          fontSize: '0.75rem',
                          color: colors.accentWalnut,
                          backgroundColor: '#F8F5F1',
                          border: `1px solid rgba(122, 90, 58, 0.15)`,
                          padding: '0.35rem 0.8rem',
                          borderRadius: '20px',
                          fontWeight: 500,
                        }}
                      >
                        {feat}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 2 CTA Buttons: VIEW CATALOG & DOWNLOAD PDF */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '1rem',
                  }}
                  className="catalog-btn-row"
                >
                  {/* VIEW CATALOG */}
                  <button
                    onClick={() => handleViewCatalog(catalog.pdfUrl)}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.55rem',
                      padding: '0.92rem 1.1rem',
                      backgroundColor: '#FFFFFF',
                      color: colors.textPrimary,
                      border: `1px solid ${colors.borderCard}`,
                      borderRadius: '22px',
                      fontSize: '0.78rem',
                      fontWeight: 600,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      cursor: 'pointer',
                      transition: 'all 0.25s ease',
                      width: '100%',
                      boxShadow: '0 2px 8px rgba(122, 90, 58, 0.06)',
                    }}
                    className="catalog-btn-view"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = colors.accentWalnut;
                      e.currentTarget.style.backgroundColor = '#F8F5F1';
                      e.currentTarget.style.color = colors.accentWalnut;
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = colors.borderCard;
                      e.currentTarget.style.backgroundColor = '#FFFFFF';
                      e.currentTarget.style.color = colors.textPrimary;
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    <Eye size={15} />
                    <span>VIEW CATALOG</span>
                  </button>

                  {/* DOWNLOAD PDF */}
                  <button
                    onClick={(e) => handleDownload(e, catalog.pdfUrl, catalog.downloadName)}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.55rem',
                      padding: '0.92rem 1.1rem',
                      backgroundColor: colors.accentWalnut,
                      color: '#FFFFFF',
                      border: `1px solid ${colors.accentWalnut}`,
                      borderRadius: '22px',
                      fontSize: '0.78rem',
                      fontWeight: 600,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      cursor: 'pointer',
                      transition: 'all 0.25s ease',
                      width: '100%',
                      boxShadow: '0 4px 14px rgba(122, 90, 58, 0.22)',
                    }}
                    className="catalog-btn-download"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = colors.accentGoldHover;
                      e.currentTarget.style.borderColor = colors.accentGoldHover;
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = '0 8px 20px rgba(122, 90, 58, 0.35)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = colors.accentWalnut;
                      e.currentTarget.style.borderColor = colors.accentWalnut;
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 4px 14px rgba(122, 90, 58, 0.22)';
                    }}
                  >
                    <Download size={15} />
                    <span>DOWNLOAD PDF</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (hover: hover) {
          .catalog-card:hover {
            transform: translateY(-6px);
            border-color: rgba(197, 168, 128, 0.5) !important;
          }
          .catalog-card:hover .catalog-cover-img {
            transform: scale(1.05);
          }
        }

        @media (max-width: 860px) {
          .catalogs-grid {
            grid-template-columns: 1fr !important;
            max-width: 580px !important;
            gap: 1.5rem !important;
          }
          .catalog-card {
            box-shadow: ${isDark ? '0 8px 24px rgba(0, 0, 0, 0.35)' : '0 4px 16px rgba(0, 0, 0, 0.04)'} !important;
          }
        }

        @media (max-width: 480px) {
          .catalog-btn-row {
            grid-template-columns: 1fr !important;
            gap: 0.65rem !important;
          }
        }
      `}</style>
    </section>
  );
}
