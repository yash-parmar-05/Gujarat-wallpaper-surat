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
        padding: '72px 0',
        backgroundColor: 'var(--bg-primary, #F8F5F1)',
        position: 'relative',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '13px',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              color: 'var(--accent-walnut, #7A5A3A)',
              fontWeight: 600,
              marginBottom: '14px',
            }}
          >
            <BookOpen size={14} color="var(--accent-walnut, #7A5A3A)" />
            <span>Official Wallpaper Editions</span>
          </div>

          <h2
            style={{
              fontFamily: "'Cormorant Garamond', Garamond, Georgia, serif",
              fontSize: 'clamp(32px, 4vw, 48px)',
              color: 'var(--text-primary, #2F2F2F)',
              fontWeight: 500,
              marginBottom: '16px',
              lineHeight: 1.15,
              letterSpacing: '-0.01em',
            }}
          >
            Explore Our Catalogs
          </h2>

          <p
            style={{
              fontSize: '16px',
              color: 'var(--text-secondary, #5A5652)',
              lineHeight: 1.6,
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
            gap: '24px',
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
                backgroundColor: 'var(--bg-surface, #FFFFFF)',
                border: '1px solid var(--border-card, rgba(122, 90, 58, 0.16))',
                borderRadius: '14px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)',
                transition: 'border-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease',
              }}
              className="catalog-card"
            >
              {/* Cover Preview Image */}
              <div
                className="catalog-cover-box"
                style={{
                  position: 'relative',
                  height: '240px',
                  overflow: 'hidden',
                  backgroundColor: '#EAE3D9',
                }}
              >
                <img
                  src={catalog.coverImage}
                  alt={catalog.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                  className="catalog-cover-img"
                />

                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, rgba(24, 20, 16, 0.05) 0%, rgba(24, 20, 16, 0.6) 100%)',
                  }}
                />

                {/* File size pill */}
                <div
                  style={{
                    position: 'absolute',
                    top: '16px',
                    right: '16px',
                    backgroundColor: 'rgba(255, 255, 255, 0.92)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(122, 90, 58, 0.22)',
                    borderRadius: '9999px',
                    padding: '6px 14px',
                    fontSize: '12px',
                    color: 'var(--text-primary, #2F2F2F)',
                    fontWeight: 500,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                >
                  <FileText size={12} color="var(--accent-walnut, #7A5A3A)" />
                  <span>{catalog.fileSize}</span>
                </div>
              </div>

              {/* Card Content */}
              <div
                className="catalog-content-box"
                style={{
                  padding: '32px',
                  display: 'flex',
                  flexDirection: 'column',
                  flex: 1,
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <h3
                    style={{
                      fontFamily: "'Cormorant Garamond', Garamond, Georgia, serif",
                      fontSize: '24px',
                      fontWeight: 500,
                      color: 'var(--text-primary, #2F2F2F)',
                      margin: '0 0 10px',
                      lineHeight: 1.25,
                    }}
                  >
                    {catalog.title}
                  </h3>

                  <p
                    style={{
                      fontSize: '14px',
                      lineHeight: 1.6,
                      color: 'var(--text-secondary, #5A5652)',
                      margin: '0 0 24px',
                    }}
                  >
                    {catalog.tagline}
                  </p>

                  {/* Highlights Tags */}
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '8px',
                      marginBottom: '28px',
                    }}
                  >
                    {catalog.features.map((feat) => (
                      <span
                        key={feat}
                        style={{
                          fontSize: '12px',
                          color: 'var(--text-secondary, #5A5652)',
                          backgroundColor: 'rgba(122, 90, 58, 0.08)',
                          border: '1px solid rgba(122, 90, 58, 0.16)',
                          padding: '6px 14px',
                          borderRadius: '9999px',
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
                    gap: '12px',
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
                      gap: '8px',
                      padding: '12px 18px',
                      backgroundColor: '#FFFFFF',
                      color: 'var(--text-primary, #2F2F2F)',
                      border: '1px solid rgba(122, 90, 58, 0.3)',
                      borderRadius: '9999px',
                      fontSize: '13px',
                      fontWeight: 500,
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      width: '100%',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(122, 90, 58, 0.08)';
                      e.currentTarget.style.borderColor = 'var(--accent-walnut, #7A5A3A)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#FFFFFF';
                      e.currentTarget.style.borderColor = 'rgba(122, 90, 58, 0.3)';
                    }}
                  >
                    <Eye size={15} />
                    <span>View Catalog</span>
                  </button>

                  {/* DOWNLOAD PDF */}
                  <button
                    onClick={(e) => handleDownload(e, catalog.pdfUrl, catalog.downloadName)}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      padding: '12px 18px',
                      backgroundColor: 'var(--accent-walnut, #7A5A3A)',
                      color: '#FFFFFF',
                      border: '1px solid var(--accent-walnut, #7A5A3A)',
                      borderRadius: '9999px',
                      fontSize: '13px',
                      fontWeight: 600,
                      cursor: 'pointer',
                      boxShadow: '0 4px 14px rgba(122, 90, 58, 0.25)',
                      transition: 'all 0.2s ease',
                      width: '100%',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'var(--accent-walnut-hover, #63472C)';
                      e.currentTarget.style.borderColor = 'var(--accent-walnut-hover, #63472C)';
                      e.currentTarget.style.boxShadow = '0 6px 18px rgba(122, 90, 58, 0.35)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'var(--accent-walnut, #7A5A3A)';
                      e.currentTarget.style.borderColor = 'var(--accent-walnut, #7A5A3A)';
                      e.currentTarget.style.boxShadow = '0 4px 14px rgba(122, 90, 58, 0.25)';
                    }}
                  >
                    <Download size={15} />
                    <span>Download PDF</span>
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
            border-color: rgba(122, 90, 58, 0.4) !important;
            box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08) !important;
          }
          .catalog-card:hover .catalog-cover-img {
            transform: scale(1.04);
          }
        }

        @media (max-width: 860px) {
          .catalogs-grid {
            grid-template-columns: 1fr !important;
            max-width: 580px !important;
            gap: 20px !important;
          }
        }

        @media (max-width: 768px) {
          #catalogs,
          #catalogs-page {
            padding: 48px 0 !important;
          }
          .catalog-content-box {
            padding: 24px 20px !important;
          }
          .catalog-cover-box {
            height: 200px !important;
          }
        }

        @media (max-width: 480px) {
          .catalog-btn-row {
            grid-template-columns: 1fr !important;
            gap: 10px !important;
          }
          .catalog-content-box {
            padding: 20px 16px !important;
          }
          .catalog-cover-box {
            height: 180px !important;
          }
        }
      `}</style>
    </section>
  );
}
