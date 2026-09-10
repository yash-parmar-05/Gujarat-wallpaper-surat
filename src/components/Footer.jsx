import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowUp, MapPin } from 'lucide-react';
import { BRANCHES, CATEGORIES } from '../data/categories';
import { useTheme } from '../context/ThemeContext';

export default function Footer() {
  const navigate = useNavigate();
  const { isDark } = useTheme();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCategoryClick = (categoryName) => {
    navigate(`/products?category=${encodeURIComponent(categoryName)}`);
  };

  const bg = '#E7D7BE';
  const textPrimary = '#2F2F2F';
  const textSecondary = '#5A5652';
  const textMuted = '#7A7570';
  const border = '1px solid rgba(122, 90, 58, 0.16)';
  const walnut = '#7A5A3A';
  const gold = '#C8A96A';

  return (
    <footer
      style={{
        backgroundColor: bg,
        color: textPrimary,
        paddingTop: '64px',
        paddingBottom: '32px',
        borderTop: border,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 2 }}>
        {/* Main Footer Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '40px 24px',
            paddingBottom: '48px',
            borderBottom: border,
          }}
        >
          {/* Brand Column */}
          <div
            style={{
              gridColumn: 'span 3',
              display: 'flex',
              flexDirection: 'column',
            }}
            className="footer-brand-col"
          >
            <h3
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '26px',
                fontWeight: 500,
                color: textPrimary,
                marginBottom: '6px',
                lineHeight: 1.2,
                letterSpacing: '0.02em',
              }}
            >
              Gujarat Wallpaper &amp; Decor
            </h3>
            <div
              style={{
                fontSize: '12px',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: walnut,
                marginBottom: '14px',
                fontWeight: 600,
              }}
            >
              Surat, Gujarat, India
            </div>
            <p
              style={{
                fontSize: '14px',
                color: textSecondary,
                lineHeight: 1.6,
                maxWidth: '340px',
                margin: '0 0 20px 0',
              }}
            >
              Surat's premier luxury interior decor showroom, delivering designer wallpapers, architectural PVC wall panels, hand-crafted carpets, and bespoke decor for residential and commercial spaces.
            </p>

            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '12px',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                color: textPrimary,
                cursor: 'pointer',
                padding: '8px 16px',
                alignSelf: 'flex-start',
                backgroundColor: 'rgba(122, 90, 58, 0.08)',
                border: '1px solid rgba(122, 90, 58, 0.22)',
                borderRadius: '9999px',
                fontWeight: 500,
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(122, 90, 58, 0.16)';
                e.currentTarget.style.borderColor = 'rgba(122, 90, 58, 0.38)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(122, 90, 58, 0.08)';
                e.currentTarget.style.borderColor = 'rgba(122, 90, 58, 0.22)';
              }}
            >
              <ArrowUp size={14} color={walnut} />
              <span>Back to Top</span>
            </button>
          </div>

          {/* Navigation Links Column */}
          <div
            style={{
              gridColumn: 'span 2',
            }}
            className="footer-nav-col"
          >
            <div
              style={{
                fontSize: '12px',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                color: textPrimary,
                fontWeight: 600,
                marginBottom: '20px',
              }}
            >
              Navigation
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { label: 'Home', path: '/home' },
                { label: 'Catalogs', path: '/catalogs' },
                { label: 'Visual Gallery', path: '/gallery' },
                { label: 'Our Work', path: '/our-work' },
                { label: 'Why Choose Us', path: '/why-choose-us' },
                { label: 'Contact & Visit', path: '/contact' },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    style={{
                      fontSize: '14px',
                      color: textSecondary,
                      textDecoration: 'none',
                      transition: 'color 0.2s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = walnut)}
                    onMouseLeave={(e) => (e.currentTarget.style.color = textSecondary)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Approved Categories Column */}
          <div
            style={{
              gridColumn: 'span 2',
            }}
            className="footer-cat-col"
          >
            <div
              style={{
                fontSize: '12px',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                color: textPrimary,
                fontWeight: 600,
                marginBottom: '20px',
              }}
            >
              Approved Categories
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <button
                    onClick={() => handleCategoryClick(cat.name)}
                    style={{
                      fontSize: '14px',
                      color: textSecondary,
                      backgroundColor: 'transparent',
                      border: 'none',
                      textAlign: 'left',
                      padding: 0,
                      cursor: 'pointer',
                      transition: 'color 0.2s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = walnut)}
                    onMouseLeave={(e) => (e.currentTarget.style.color = textSecondary)}
                  >
                    {cat.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Showroom Branch Addresses Column */}
          <div
            style={{
              gridColumn: 'span 5',
            }}
            className="footer-branches-col"
          >
            <div
              style={{
                fontSize: '12px',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                color: textPrimary,
                fontWeight: 600,
                marginBottom: '20px',
              }}
            >
              Our Branches
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '20px 20px',
              }}
              className="footer-branches-grid"
            >
              {BRANCHES.map((branch) => (
                <div
                  key={branch.id}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '6px',
                    fontSize: '14px',
                  }}
                  className="footer-branch-item"
                >
                  <div
                    style={{
                      fontSize: '13px',
                      letterSpacing: '0.02em',
                      color: textPrimary,
                      fontWeight: 600,
                      lineHeight: 1.3,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                    }}
                  >
                    <MapPin size={13} color={walnut} />
                    <span>{branch.name}</span>
                  </div>
                  <div
                    style={{
                      color: textSecondary,
                      lineHeight: 1.5,
                      fontSize: '13px',
                    }}
                  >
                    {branch.addressLines.map((line, lIdx) => (
                      <div key={lIdx}>{line}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Legal / Copyright Bar */}
        <div
          style={{
            paddingTop: '24px',
            paddingBottom: '20px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
            fontSize: '13px',
            color: textSecondary,
            position: 'relative',
            zIndex: 2,
          }}
        >
          <div>
            &copy; {new Date().getFullYear()} Gujarat Wallpaper &amp; Decor. All Rights Reserved. Surat, Gujarat, India.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span>Architectural Surface Solutions</span>
            <span style={{ width: '1px', height: '12px', backgroundColor: 'rgba(122, 90, 58, 0.25)' }} />
            <span>Residential &amp; Commercial</span>
          </div>
        </div>

        {/* Dedicated Brand Typography Section with Flanking Lines (Laptop & Desktop Only) */}
        <div
          style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: '16px',
            paddingBottom: '8px',
            zIndex: 2,
            width: '100%',
            overflow: 'hidden',
          }}
          className="footer-hero-brand-wrap desktop-only-brand"
        >
          {/* Left Decorative Line */}
          <div
            style={{
              flex: 1,
              height: '1px',
              backgroundColor: 'rgba(122, 90, 58, 0.22)',
              marginRight: '24px',
              display: 'block',
            }}
            className="footer-flank-line"
          />

          {/* Centered Brand Name */}
          <h2
            className="footer-hero-brand-text"
            style={{
              margin: 0,
              fontFamily: 'Cormorant Garamond, serif',
              fontWeight: 500,
              color: 'rgba(122, 90, 58, 0.25)',
              letterSpacing: '0.04em',
              lineHeight: 1,
              whiteSpace: 'nowrap',
              textAlign: 'center',
              userSelect: 'none',
            }}
          >
            Gujarat Wallpaper &amp; Decor
          </h2>

          {/* Right Decorative Line */}
          <div
            style={{
              flex: 1,
              height: '1px',
              backgroundColor: 'rgba(122, 90, 58, 0.22)',
              marginLeft: '24px',
              display: 'block',
            }}
            className="footer-flank-line"
          />
        </div>
      </div>

      <style>{`
        .footer-hero-brand-text {
          font-size: clamp(2.2rem, 5.2vw, 5.2rem);
        }

        /* Desktop / Laptop: Display the brand banner */
        @media (min-width: 1024px) {
          .desktop-only-brand {
            display: flex !important;
          }
        }

        /* Mobile & Tablets (< 1024px): Hide the bottom banner entirely */
        @media (max-width: 1023px) {
          .desktop-only-brand {
            display: none !important;
          }
          .footer-brand-col {
            grid-column: span 12 !important;
          }
          .footer-nav-col {
            grid-column: span 3 !important;
          }
          .footer-cat-col {
            grid-column: span 3 !important;
          }
          .footer-branches-col {
            grid-column: span 6 !important;
          }
        }

        @media (max-width: 768px) {
          .footer-nav-col {
            grid-column: span 6 !important;
          }
          .footer-cat-col {
            grid-column: span 6 !important;
          }
          .footer-branches-col {
            grid-column: span 12 !important;
          }
          .footer-branches-grid {
            grid-template-columns: 1fr !important;
            gap: 1.1rem !important;
          }
        }

        @media (max-width: 480px) {
          footer {
            padding-top: 2.75rem !important;
            padding-bottom: 1.25rem !important;
          }
          .footer-nav-col {
            grid-column: span 12 !important;
          }
          .footer-cat-col {
            grid-column: span 12 !important;
          }
        }
      `}</style>
    </footer>
  );
}
