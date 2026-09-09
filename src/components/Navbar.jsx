import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const isScrolled = window.scrollY > 30;
          setScrolled((prev) => (prev !== isScrolled ? isScrolled : prev));
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Home', path: '/home' },
    { label: 'Catalogs', path: '/catalogs' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Our Work', path: '/our-work' },
    { label: 'Why Choose Us', path: '/why-choose-us' },
    { label: 'Contact', path: '/contact' },
  ];

  const isLinkActive = (path) => {
    if (path === '/home') {
      return location.pathname === '/home' || location.pathname === '/';
    }
    if (path === '/catalogs') {
      return location.pathname.startsWith('/catalogs');
    }
    if (path === '/gallery') {
      return location.pathname.startsWith('/gallery');
    }
    if (path === '/our-work') {
      return location.pathname.startsWith('/our-work');
    }
    if (path === '/why-choose-us') {
      return location.pathname === '/why-choose-us';
    }
    return location.pathname === path;
  };

  const isHome = location.pathname === '/home' || location.pathname === '/';
  const isHomeAtTop = isHome && !scrolled;

  // On Home at top over dark hero image: White text with gold accents
  // When scrolled or on light pages (Catalogs, Gallery, etc.): Charcoal text with walnut accents
  const textColor = isHomeAtTop ? '#FFFFFF' : '#2F2F2F';
  const subtitleColor = isHomeAtTop ? '#C8A96A' : '#7A5A3A';
  const linkColorDefault = isHomeAtTop ? 'rgba(255, 255, 255, 0.88)' : '#4A4642';
  const linkColorActive = isHomeAtTop ? '#C8A96A' : '#7A5A3A';
  const headerBg = isHomeAtTop
    ? 'transparent'
    : scrolled
    ? 'rgba(255, 255, 255, 0.82)'
    : 'rgba(248, 245, 241, 0.96)';

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: scrolled ? '0.65rem 1.25rem' : '1.15rem 0',
          display: 'flex',
          justifyContent: 'center',
          pointerEvents: 'none',
          transition: 'padding 0.3s ease',
          transform: 'translateZ(0)',
          willChange: 'padding',
        }}
      >
        <div
          className="container-luxury navbar-inner"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            maxWidth: scrolled ? '1280px' : '1440px',
            padding: scrolled ? '0.6rem 1.5rem' : '0 2rem',
            backgroundColor: headerBg,
            backdropFilter: isHomeAtTop ? 'none' : 'blur(16px)',
            WebkitBackdropFilter: isHomeAtTop ? 'none' : 'blur(16px)',
            border: isHomeAtTop
              ? '1px solid transparent'
              : scrolled
              ? '1px solid rgba(122, 90, 58, 0.18)'
              : '1px solid rgba(122, 90, 58, 0.1)',
            borderRadius: scrolled ? '9999px' : '0px',
            boxShadow: scrolled
              ? '0 10px 30px rgba(122, 90, 58, 0.1)'
              : 'none',
            transition: 'background-color 0.25s ease, border-radius 0.3s ease, border-color 0.25s ease, box-shadow 0.25s ease, max-width 0.3s ease, padding 0.3s ease',
            pointerEvents: 'auto',
            transform: 'translateZ(0)',
          }}
        >
          {/* Brand Logo */}
          <Link
            to="/home"
            style={{
              display: 'flex',
              flexDirection: 'column',
              textDecoration: 'none',
            }}
          >
            <span
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: scrolled ? '1.35rem' : 'clamp(1.25rem, 3.5vw, 1.55rem)',
                fontWeight: 600,
                letterSpacing: '0.03em',
                color: textColor,
                lineHeight: 1.1,
                textShadow: isHomeAtTop ? '0 2px 12px rgba(0, 0, 0, 0.7)' : 'none',
                transition: 'all 0.3s ease',
              }}
            >
              Gujarat Wallpaper &amp; Decor
            </span>
            <span
              style={{
                fontSize: '0.64rem',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: subtitleColor,
                fontWeight: 600,
                marginTop: '2px',
                textShadow: isHomeAtTop ? '0 1px 6px rgba(0, 0, 0, 0.6)' : 'none',
                transition: 'color 0.3s ease',
              }}
            >
              Surat Showroom
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav
            style={{
              display: 'none',
              alignItems: 'center',
              gap: 'clamp(1.2rem, 1.8vw, 2.2rem)',
            }}
            className="desktop-nav"
          >
            {navLinks.map((link) => {
              const active = isLinkActive(link.path);
              const linkColor = active ? linkColorActive : linkColorDefault;
              const hoverColor = isHomeAtTop ? '#C8A96A' : '#7A5A3A';

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  style={{
                    fontSize: '0.82rem',
                    fontWeight: active ? 600 : 500,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: linkColor,
                    transition: 'color 0.25s ease',
                    position: 'relative',
                    padding: '0.25rem 0',
                    textDecoration: 'none',
                    textShadow: isHomeAtTop ? '0 2px 8px rgba(0,0,0,0.6)' : 'none',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = hoverColor)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = linkColor)}
                >
                  {link.label}
                  {active && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      style={{
                        position: 'absolute',
                        bottom: -4,
                        left: 0,
                        right: 0,
                        height: '2px',
                        backgroundColor: isHomeAtTop ? '#C8A96A' : '#7A5A3A',
                        borderRadius: '2px',
                      }}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA & Mobile Hamburger */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            {/* Desktop CTA Button */}
            <Link
              to="/catalogs"
              className="desktop-cta btn-primary"
              style={{
                display: 'none',
                alignItems: 'center',
                gap: '0.55rem',
                backgroundColor: '#7A5A3A',
                color: '#FFFFFF',
                fontSize: '0.8rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                padding: '0.7rem 1.5rem',
                borderRadius: '9999px',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                border: '1px solid #7A5A3A',
                boxShadow: isHomeAtTop
                  ? '0 4px 18px rgba(0, 0, 0, 0.35)'
                  : '0 4px 14px rgba(122, 90, 58, 0.2)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#63472C';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#7A5A3A';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <span>Explore Catalogs</span>
              <ArrowUpRight size={14} />
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              className="mobile-toggle"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: isHomeAtTop ? '#FFFFFF' : '#2F2F2F',
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                backgroundColor: isHomeAtTop ? 'rgba(255, 255, 255, 0.15)' : 'rgba(122, 90, 58, 0.08)',
                border: isHomeAtTop ? '1px solid rgba(255, 255, 255, 0.3)' : '1px solid rgba(122, 90, 58, 0.18)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Animated Drawer (Full Screen & Clean Integration) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            key="mobile-drawer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'rgba(248, 245, 241, 0.98)',
              backdropFilter: 'blur(28px)',
              WebkitBackdropFilter: 'blur(28px)',
              zIndex: 9999,
              display: 'flex',
              flexDirection: 'column',
              padding: '1.25rem 1.75rem 2rem',
              overflowY: 'auto',
            }}
          >
            {/* Top Drawer Header with Brand & Close Button */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingBottom: '1.25rem',
                borderBottom: '1px solid rgba(122, 90, 58, 0.15)',
                marginBottom: '2rem',
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: '1.4rem',
                    fontWeight: 600,
                    color: '#2F2F2F',
                    lineHeight: 1.1,
                  }}
                >
                  Gujarat Wallpaper &amp; Decor
                </span>
                <span
                  style={{
                    fontSize: '0.62rem',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: '#7A5A3A',
                    fontWeight: 600,
                    marginTop: '2px',
                  }}
                >
                  Surat Showroom
                </span>
              </div>

              <button
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close Menu"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(122, 90, 58, 0.08)',
                  border: '1px solid rgba(122, 90, 58, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#2F2F2F',
                  cursor: 'pointer',
                }}
              >
                <X size={20} />
              </button>
            </div>

            {/* Mobile Navigation Links */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.35rem', marginBottom: '2.5rem' }}>
              {navLinks.map((link, idx) => {
                const active = isLinkActive(link.path);
                const activeColor = '#7A5A3A';
                const defaultColor = '#2F2F2F';

                return (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.04 }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setMobileMenuOpen(false)}
                      style={{
                        fontFamily: "'Cormorant Garamond', Georgia, serif",
                        fontSize: '1.85rem',
                        color: active ? activeColor : defaultColor,
                        textDecoration: 'none',
                        borderBottom: '1px solid rgba(122, 90, 58, 0.1)',
                        paddingBottom: '0.65rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight size={18} color={active ? activeColor : '#87827C'} />
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            {/* Mobile Drawer Showroom Footer */}
            <div style={{ marginTop: 'auto', paddingTop: '1.5rem', borderTop: '1px solid rgba(122, 90, 58, 0.15)' }}>
              <p style={{ fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#7A5A3A', fontWeight: 600, marginBottom: '1rem' }}>
                Visit Our Showroom
              </p>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  navigate('/contact');
                }}
                className="btn-primary"
                style={{ 
                  width: '100%', 
                  backgroundColor: '#7A5A3A', 
                  color: '#FFFFFF', 
                  borderColor: '#7A5A3A',
                  padding: '0.9rem',
                  borderRadius: '24px'
                }}
              >
                Schedule Consultation
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 992px) {
          .desktop-nav {
            display: flex !important;
          }
          .desktop-cta {
            display: inline-flex !important;
          }
          .mobile-toggle {
            display: none !important;
          }
        }
        @media (max-width: 991px) {
          .mobile-toggle {
            display: flex !important;
          }
          .navbar-inner {
            backdrop-filter: blur(10px) !important;
            -webkit-backdrop-filter: blur(10px) !important;
          }
        }
      `}</style>
    </>
  );
}
