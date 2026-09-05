import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';
import { SHOWROOM_INFO, CATEGORIES } from '../data/categories';
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

  const bg = isDark ? '#100F0E' : '#F4EFEA';
  const textPrimary = isDark ? '#F7F4EE' : '#1C1917';
  const textSecondary = isDark ? '#D4CDC3' : '#57534E';
  const textMuted = isDark ? '#78716C' : '#8C827A';
  const border = isDark ? '1px solid rgba(247, 244, 238, 0.08)' : '1px solid rgba(28, 25, 23, 0.08)';
  const gold = isDark ? '#C5A880' : '#A68353';

  return (
    <footer
      style={{
        backgroundColor: bg,
        color: textPrimary,
        paddingTop: '6rem',
        paddingBottom: '3rem',
        borderTop: border,
        position: 'relative',
        transition: 'background-color 0.35s ease, color 0.3s ease, border-color 0.3s ease',
      }}
    >
      <div className="container-luxury">
        {/* Main Footer Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '3.5rem 2.5rem',
            paddingBottom: '4.5rem',
            borderBottom: border,
          }}
        >
          {/* Brand Column */}
          <div
            style={{
              gridColumn: 'span 4',
              display: 'flex',
              flexDirection: 'column',
            }}
            className="footer-brand-col"
          >
            <h3
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: '2rem',
                fontWeight: 600,
                color: textPrimary,
                marginBottom: '0.5rem',
                letterSpacing: '0.02em',
              }}
            >
              Gujarat Wallpaper &amp; Decor
            </h3>
            <div
              style={{
                fontSize: '0.72rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: gold,
                marginBottom: '1.25rem',
                fontWeight: 600,
              }}
            >
              Surat, Gujarat, India
            </div>
            <p
              style={{
                fontSize: '0.9rem',
                color: textSecondary,
                lineHeight: 1.65,
                maxWidth: '340px',
                fontWeight: 300,
                marginBottom: '2rem',
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
                gap: '0.5rem',
                fontSize: '0.75rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: gold,
                cursor: 'pointer',
                padding: '0.4rem 0',
                alignSelf: 'flex-start',
                backgroundColor: 'transparent',
                border: 'none',
              }}
            >
              <ArrowUp size={14} />
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
                fontSize: '0.75rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: gold,
                fontWeight: 600,
                marginBottom: '1.5rem',
              }}
            >
              Navigation
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {[
                { label: 'Home', path: '/home' },
                { label: 'Catalogs', path: '/catalogs' },
                { label: 'Visual Gallery', path: '/gallery' },
                { label: 'Why Choose Us', path: '/why-choose-us' },
                { label: 'Contact & Visit', path: '/contact' },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    style={{
                      fontSize: '0.88rem',
                      color: textSecondary,
                      textDecoration: 'none',
                      transition: 'color 0.2s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = gold)}
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
              gridColumn: 'span 3',
            }}
            className="footer-cat-col"
          >
            <div
              style={{
                fontSize: '0.75rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: gold,
                fontWeight: 600,
                marginBottom: '1.5rem',
              }}
            >
              Approved Categories
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <button
                    onClick={() => handleCategoryClick(cat.name)}
                    style={{
                      fontSize: '0.88rem',
                      color: textSecondary,
                      backgroundColor: 'transparent',
                      border: 'none',
                      textAlign: 'left',
                      padding: 0,
                      cursor: 'pointer',
                      transition: 'color 0.2s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = gold)}
                    onMouseLeave={(e) => (e.currentTarget.style.color = textSecondary)}
                  >
                    {cat.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Showroom & Contact Info Column */}
          <div
            style={{
              gridColumn: 'span 3',
            }}
            className="footer-contact-col"
          >
            <div
              style={{
                fontSize: '0.75rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: gold,
                fontWeight: 600,
                marginBottom: '1.5rem',
              }}
            >
              Showroom Inquiries
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem', fontSize: '0.88rem', color: textSecondary }}>
              <div>
                <span style={{ color: textMuted, fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block' }}>
                  Address:
                </span>
                <span>{SHOWROOM_INFO.contactPlaceholder.address}</span>
              </div>

              <div>
                <span style={{ color: textMuted, fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block' }}>
                  Phone:
                </span>
                <span>+91 9265785158 / 8320802633</span>
              </div>

              <div>
                <span style={{ color: textMuted, fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block' }}>
                  Consultation:
                </span>
                <Link to="/contact" style={{ color: gold, textDecoration: 'none' }}>
                  Book Private Viewing &rarr;
                </Link>
              </div>

              <div>
                <span style={{ color: textMuted, fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block' }}>
                  Instagram:
                </span>
                <span>@gujrat_wallpaper_decor</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal / Copyright */}
        <div
          style={{
            paddingTop: '2.5rem',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.5rem',
            fontSize: '0.78rem',
            color: textMuted,
          }}
        >
          <div>
            &copy; {new Date().getFullYear()} Gujarat Wallpaper &amp; Decor. All Rights Reserved. Surat, Gujarat, India.
          </div>

          <div style={{ display: 'flex', gap: '2rem' }}>
            <span>Architectural Surface Solutions</span>
            <span>Residential &amp; Commercial</span>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .footer-brand-col {
            grid-column: span 12 !important;
          }
          .footer-nav-col {
            grid-column: span 6 !important;
          }
          .footer-cat-col {
            grid-column: span 6 !important;
          }
          .footer-contact-col {
            grid-column: span 12 !important;
          }
        }

        @media (max-width: 640px) {
          .footer-nav-col {
            grid-column: span 12 !important;
          }
          .footer-cat-col {
            grid-column: span 12 !important;
          }
        }

        @media (max-width: 480px) {
          footer {
            padding-top: 4rem !important;
            padding-bottom: 2rem !important;
          }
        }
      `}</style>
    </footer>
  );
}
