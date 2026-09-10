import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const isScrolled = window.scrollY > 20;
          setScrolled((prev) => (prev !== isScrolled ? isScrolled : prev));
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen((open) => (open ? false : open));
  }, [location.pathname]);

  const navLinks = [
    { label: 'Home', path: '/home' },
    { label: 'Catalogs', path: '/catalogs' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Our Work', path: '/our-work' },
    { label: 'Why Choose Us', path: '/why-choose-us' },
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

  const textColor = isHomeAtTop ? '#FFFFFF' : '#2F2F2F';
  const subtitleColor = isHomeAtTop ? '#C8A96A' : '#7A5A3A';
  const linkColorDefault = isHomeAtTop ? 'rgba(255, 255, 255, 0.88)' : '#4A4642';
  const linkColorActive = isHomeAtTop ? '#C8A96A' : '#7A5A3A';

  return (
    <>
      {/* Outer Fixed Header Wrapper */}
      <header
        className={`navbar-fixed-root ${scrolled ? 'is-scrolled' : 'is-top'}`}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          width: '100%',
          zIndex: 1000,
          display: 'flex',
          justifyContent: 'center',
          pointerEvents: 'none',
          padding: scrolled ? '14px 20px' : '0px 0px',
          transition: 'padding 350ms cubic-bezier(0.22, 1, 0.36, 1)',
          willChange: 'padding',
        }}
      >
        {/* Top Scrim Gradient Overlay (Fades out seamlessly on scroll) */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '110px',
            background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.65) 0%, rgba(0, 0, 0, 0.18) 65%, transparent 100%)',
            opacity: isHomeAtTop ? 1 : 0,
            pointerEvents: 'none',
            transition: 'opacity 250ms ease',
            zIndex: 0,
          }}
        />

        {/* Transforming Navbar Pill Island */}
        <div
          className="navbar-inner-island"
          style={{
            position: 'relative',
            pointerEvents: 'auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            maxWidth: scrolled ? '1140px' : '100%',
            borderRadius: scrolled ? '9999px' : '0px',
            padding: scrolled ? '0.62rem 1.6rem' : '1.35rem 2rem',
            transform: 'translate3d(0, 0, 0)',
            WebkitTransform: 'translate3d(0, 0, 0)',
            transition:
              'max-width 350ms cubic-bezier(0.22, 1, 0.36, 1), ' +
              'border-radius 350ms cubic-bezier(0.22, 1, 0.36, 1), ' +
              'padding 350ms cubic-bezier(0.22, 1, 0.36, 1)',
            willChange: 'max-width, border-radius, padding',
          }}
        >
          {/* Frosted Glass Background Layer for Floating Pill */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              borderRadius: 'inherit',
              backgroundColor: isHomeAtTop
                ? 'transparent'
                : scrolled
                ? 'rgba(255, 255, 255, 0.65)'
                : 'rgba(248, 245, 241, 0.75)',
              backdropFilter: isHomeAtTop ? 'none' : 'blur(20px) saturate(180%)',
              WebkitBackdropFilter: isHomeAtTop ? 'none' : 'blur(20px) saturate(180%)',
              border: isHomeAtTop
                ? '1px solid transparent'
                : scrolled
                ? '1px solid rgba(255, 255, 255, 0.55)'
                : '1px solid rgba(122, 90, 58, 0.12)',
              boxShadow: scrolled
                ? '0 12px 36px rgba(0, 0, 0, 0.07), 0 2px 8px rgba(122, 90, 58, 0.04), inset 0 1px 1px rgba(255, 255, 255, 0.6)'
                : 'none',
              opacity: isHomeAtTop ? 0 : 1,
              pointerEvents: 'none',
              transition:
                'opacity 350ms cubic-bezier(0.22, 1, 0.36, 1), ' +
                'background-color 350ms cubic-bezier(0.22, 1, 0.36, 1), ' +
                'border-color 350ms cubic-bezier(0.22, 1, 0.36, 1), ' +
                'box-shadow 350ms cubic-bezier(0.22, 1, 0.36, 1)',
              zIndex: 0,
            }}
          />

          {/* Logo / Brand Mark on the Left */}
          <Link
            to="/home"
            style={{
              position: 'relative',
              zIndex: 1,
              display: 'flex',
              flexDirection: 'column',
              textDecoration: 'none',
              flexShrink: 0,
            }}
          >
            <span
              className="navbar-brand-title"
              style={{
                fontFamily: "'Cormorant Garamond', Garamond, Georgia, serif",
                fontSize: scrolled ? 'clamp(1.15rem, 3.8vw, 1.35rem)' : 'clamp(1.22rem, 4.2vw, 1.45rem)',
                fontWeight: 600,
                letterSpacing: '0.02em',
                color: textColor,
                lineHeight: 1.15,
                transition: 'font-size 320ms ease, color 250ms ease',
                textShadow: isHomeAtTop ? '0 2px 12px rgba(0, 0, 0, 0.6)' : 'none',
              }}
            >
              Gujarat Wallpaper &amp; Decor
            </span>
            <span
              style={{
                fontSize: '0.66rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: subtitleColor,
                fontWeight: 600,
                marginTop: '1px',
                transition: 'color 250ms ease',
                textShadow: isHomeAtTop ? '0 1px 4px rgba(0, 0, 0, 0.6)' : 'none',
              }}
            >
              Surat
            </span>
          </Link>

          {/* Centered Navigation in the Center (Desktop) */}
          <nav
            style={{
              position: 'relative',
              zIndex: 1,
              display: 'none',
              alignItems: 'center',
              gap: scrolled ? '1.5rem' : '1.85rem',
              transition: 'gap 320ms ease',
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
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    fontWeight: active ? 600 : 500,
                    color: linkColor,
                    textDecoration: 'none',
                    position: 'relative',
                    padding: '0.35rem 0',
                    transition: 'color 200ms ease, opacity 200ms ease',
                    textShadow: isHomeAtTop ? '0 1px 6px rgba(0, 0, 0, 0.6)' : 'none',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = hoverColor;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = linkColor;
                  }}
                >
                  {link.label}
                  {active && (
                    <motion.div
                      layoutId="activeNavUnderline"
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '2px',
                        backgroundColor: isHomeAtTop ? '#C8A96A' : '#7A5A3A',
                        borderRadius: '9999px',
                      }}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action CTAs */}
          <div
            style={{
              position: 'relative',
              zIndex: 1,
              display: 'flex',
              alignItems: 'center',
              gap: '0.65rem',
              flexShrink: 0,
            }}
          >
            {/* Secondary Contact Link */}
            <Link
              to="/contact"
              className="desktop-cta"
              style={{
                display: 'none',
                alignItems: 'center',
                justifyContent: 'center',
                padding: scrolled ? '0.46rem 1.15rem' : '0.52rem 1.25rem',
                borderRadius: '9999px',
                backgroundColor: isHomeAtTop ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.55)',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
                border: isHomeAtTop ? '1px solid rgba(255, 255, 255, 0.3)' : '1px solid rgba(122, 90, 58, 0.18)',
                color: textColor,
                fontSize: '0.8rem',
                fontWeight: 500,
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                transition: 'all 200ms ease',
                textShadow: isHomeAtTop ? '0 1px 4px rgba(0, 0, 0, 0.5)' : 'none',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = isHomeAtTop ? 'rgba(255, 255, 255, 0.2)' : '#7A5A3A';
                e.currentTarget.style.borderColor = '#7A5A3A';
                if (!isHomeAtTop) e.currentTarget.style.color = '#FFFFFF';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = isHomeAtTop ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.55)';
                e.currentTarget.style.borderColor = isHomeAtTop ? 'rgba(255, 255, 255, 0.3)' : 'rgba(122, 90, 58, 0.18)';
                e.currentTarget.style.color = textColor;
              }}
            >
              <span>Contact</span>
            </Link>

            {/* Primary Explore Catalogs Button (Walnut Brown) */}
            <Link
              to="/catalogs"
              className="desktop-cta"
              style={{
                display: 'none',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.55rem',
                padding: scrolled ? '0.48rem 1.25rem' : '0.52rem 1.35rem',
                borderRadius: '9999px',
                backgroundColor: '#7A5A3A',
                color: '#FFFFFF',
                fontSize: '0.8rem',
                fontWeight: 600,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                border: '1px solid #7A5A3A',
                boxShadow: isHomeAtTop ? '0 4px 18px rgba(0, 0, 0, 0.35)' : '0 4px 14px rgba(122, 90, 58, 0.2)',
                transition: 'background-color 200ms ease, transform 200ms ease, box-shadow 200ms ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#63472C';
                e.currentTarget.style.borderColor = '#63472C';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#7A5A3A';
                e.currentTarget.style.borderColor = '#7A5A3A';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <span>Explore Catalogs</span>
              <ArrowUpRight size={14} />
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
              className="mobile-toggle"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '40px',
                height: '40px',
                borderRadius: '9999px',
                backgroundColor: isHomeAtTop ? 'rgba(255, 255, 255, 0.15)' : 'rgba(122, 90, 58, 0.08)',
                backdropFilter: 'blur(8px)',
                color: textColor,
                border: isHomeAtTop ? '1px solid rgba(255, 255, 255, 0.3)' : '1px solid rgba(122, 90, 58, 0.18)',
                cursor: 'pointer',
                transition: 'background-color 200ms ease',
              }}
            >
              {mobileMenuOpen ? <X size={20} color={textColor} /> : <Menu size={20} color={textColor} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Panel Drawer: Full overlay, no horizontal overflow */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            key="mobile-drawer"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'rgba(248, 245, 241, 0.98)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              zIndex: 1001,
              display: 'flex',
              flexDirection: 'column',
              padding: '1.75rem 1.5rem',
              overflowY: 'auto',
              overflowX: 'hidden',
            }}
          >
            {/* Header in Mobile Menu */}
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
              <div>
                <div style={{ fontFamily: "'Cormorant Garamond', Garamond, Georgia, serif", color: '#2F2F2F', fontWeight: 600, fontSize: '1.3rem' }}>
                  Gujarat Wallpaper &amp; Decor
                </div>
                <div style={{ color: '#7A5A3A', fontSize: '0.68rem', letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 600 }}>
                  Surat
                </div>
              </div>

              <button
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close Menu"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '9999px',
                  backgroundColor: 'rgba(122, 90, 58, 0.08)',
                  color: '#2F2F2F',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid rgba(122, 90, 58, 0.2)',
                  cursor: 'pointer',
                }}
              >
                <X size={18} color="#2F2F2F" />
              </button>
            </div>

            {/* Stacked Navigation Links */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '2.5rem' }}>
              {navLinks.map((link) => {
                const active = isLinkActive(link.path);
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '0.85rem 1.1rem',
                      borderRadius: '12px',
                      fontSize: '1.02rem',
                      fontWeight: active ? 600 : 400,
                      color: active ? '#7A5A3A' : '#2F2F2F',
                      backgroundColor: active ? 'rgba(122, 90, 58, 0.08)' : 'transparent',
                      border: active ? '1px solid rgba(122, 90, 58, 0.18)' : '1px solid transparent',
                      textDecoration: 'none',
                      transition: 'background-color 200ms ease',
                    }}
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight size={16} color={active ? '#7A5A3A' : '#87827C'} />
                  </Link>
                );
              })}
            </div>

            {/* Mobile CTAs */}
            <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <Link
                to="/catalogs"
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '48px',
                  width: '100%',
                  backgroundColor: '#7A5A3A',
                  color: '#FFFFFF',
                  borderRadius: '9999px',
                  fontSize: '0.92rem',
                  fontWeight: 600,
                  textDecoration: 'none',
                  border: 'none',
                  boxShadow: '0 4px 14px rgba(122, 90, 58, 0.25)',
                }}
              >
                Explore Catalogs
              </Link>
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '48px',
                  width: '100%',
                  backgroundColor: 'transparent',
                  border: '1px solid rgba(122, 90, 58, 0.25)',
                  color: '#2F2F2F',
                  borderRadius: '9999px',
                  fontSize: '0.92rem',
                  fontWeight: 500,
                  textDecoration: 'none',
                }}
              >
                Contact Showroom
              </Link>
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
          .navbar-fixed-root.is-scrolled {
            padding: 12px 14px !important;
          }
          .navbar-fixed-root.is-scrolled .navbar-inner-island {
            padding: 0.58rem 1.15rem !important;
          }
          .navbar-fixed-root.is-top .navbar-inner-island {
            padding: 1.15rem 1.25rem !important;
          }
          .mobile-toggle {
            display: flex !important;
          }
        }
        @media (max-width: 360px) {
          .navbar-fixed-root.is-scrolled {
            padding: 8px 10px !important;
          }
          .navbar-fixed-root.is-scrolled .navbar-inner-island {
            padding: 0.5rem 0.85rem !important;
          }
          .navbar-fixed-root.is-top .navbar-inner-island {
            padding: 0.85rem 0.95rem !important;
          }
        }
      `}</style>
    </>
  );
}
