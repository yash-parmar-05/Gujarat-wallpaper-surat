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
    coverImage: '/BIG BOSS-cover.jpg',
    features: ['Italian Vinyl & Linens', 'High Washability', 'Commercial & Residential Grade'],
  },
  {
    id: 'wallkalakaar',
    title: 'Wallkalakaar Wallpaper Catalog',
    tagline: 'Architectural Motifs, Contemporary Murals & Designer Living Walls',
    fileSize: '2 MB (Instant HD Edition)',
    pdfUrl: '/WALLKALAKAAR%20NEW.pdf',
    downloadName: 'WALLKALAKAAR NEW.pdf',
    coverImage: '/WALLKALAKAAR NEW-cover.jpg',
    features: ['Custom Murals', 'Seamless Textures', 'Anti-Fungal & Odorless Substrates'],
  },
];

export default function CatalogsSection({ id = 'catalogs' }) {
  const { isDark } = useTheme();

  const colors = {
    bgMain: isDark ? '#121110' : '#FBF9F5',
    bgCard: isDark ? '#181715' : '#FFFFFF',
    bgCardHover: isDark ? '#201E1B' : '#F7F4EE',
    textPrimary: isDark ? '#F7F4EE' : '#1C1917',
    textSecondary: isDark ? '#C8C2B7' : '#57534E',
    textMuted: isDark ? '#948E85' : '#78716C',
    accentGold: isDark ? '#C5A880' : '#A68353',
    accentGoldHover: isDark ? '#DFCAAD' : '#8D6B3C',
    borderSubtle: isDark ? 'rgba(245, 242, 236, 0.08)' : 'rgba(28, 25, 23, 0.08)',
    borderCard: isDark ? 'rgba(197, 168, 128, 0.22)' : 'rgba(166, 131, 83, 0.22)',
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
        padding: '6.5rem 0',
        backgroundColor: colors.bgMain,
        position: 'relative',
        transition: 'background-color 0.35s ease',
      }}
    >
      <div className="container-luxury">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3.5rem' }}>
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
            <BookOpen size={14} color={colors.accentGold} />
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
              fontSize: '0.98rem',
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
            gap: '2rem',
            maxWidth: '1080px',
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
                borderRadius: '14px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: isDark ? '0 12px 36px rgba(0, 0, 0, 0.45)' : '0 8px 24px rgba(0, 0, 0, 0.05)',
                transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                willChange: 'transform, opacity',
              }}
              className="catalog-card"
            >
              {/* Cover Preview Image with Gradient & Badge */}
              <div
                style={{
                  position: 'relative',
                  height: '240px',
                  overflow: 'hidden',
                  backgroundColor: isDark ? '#0D0C0B' : '#EAE3D9',
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

                {/* Subtle dark gradient overlay for depth */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, rgba(18, 17, 16, 0.2) 0%, rgba(18, 17, 16, 0.85) 100%)',
                  }}
                />

                {/* PDF Badge */}
                <div
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    left: '1rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.45rem',
                    padding: '0.4rem 0.85rem',
                    backgroundColor: 'rgba(18, 17, 16, 0.85)',
                    backdropFilter: 'blur(8px)',
                    borderRadius: '6px',
                    border: `1px solid ${colors.borderCard}`,
                    color: colors.accentGold,
                    fontSize: '0.7rem',
                    fontWeight: 600,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                  }}
                >
                  <FileText size={13} color={colors.accentGold} />
                  <span>PDF CATALOG • {catalog.fileSize}</span>
                </div>
              </div>

              {/* Card Content */}
              <div
                style={{
                  padding: '1.75rem 2rem 2rem',
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
                      fontSize: '1.65rem',
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
                      fontSize: '0.9rem',
                      lineHeight: 1.6,
                      color: colors.textSecondary,
                      margin: '0 0 1.25rem',
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
                      gap: '0.45rem',
                      marginBottom: '1.75rem',
                    }}
                  >
                    {catalog.features.map((feat) => (
                      <span
                        key={feat}
                        style={{
                          fontSize: '0.74rem',
                          color: colors.textMuted,
                          backgroundColor: isDark ? 'rgba(255, 255, 255, 0.04)' : 'rgba(0, 0, 0, 0.04)',
                          border: `1px solid ${colors.borderSubtle}`,
                          padding: '0.28rem 0.65rem',
                          borderRadius: '4px',
                          fontWeight: 400,
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
                    gap: '0.85rem',
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
                      padding: '0.88rem 1rem',
                      backgroundColor: 'transparent',
                      color: colors.textPrimary,
                      border: `1px solid ${colors.borderCard}`,
                      borderRadius: '6px',
                      fontSize: '0.78rem',
                      fontWeight: 600,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      cursor: 'pointer',
                      transition: 'all 0.25s ease',
                      width: '100%',
                    }}
                    className="catalog-btn-view"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = colors.accentGold;
                      e.currentTarget.style.backgroundColor = isDark ? 'rgba(197, 168, 128, 0.12)' : 'rgba(166, 131, 83, 0.12)';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = colors.borderCard;
                      e.currentTarget.style.backgroundColor = 'transparent';
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
                      padding: '0.88rem 1rem',
                      backgroundColor: colors.accentGold,
                      color: '#121110',
                      border: 'none',
                      borderRadius: '6px',
                      fontSize: '0.78rem',
                      fontWeight: 600,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      cursor: 'pointer',
                      transition: 'all 0.25s ease',
                      width: '100%',
                    }}
                    className="catalog-btn-download"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = colors.accentGoldHover;
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = '0 6px 20px rgba(197, 168, 128, 0.35)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = colors.accentGold;
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
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
