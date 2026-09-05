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
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
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
    if (path === '/why-choose-us') {
      return location.pathname === '/why-choose-us';
    }
    return location.pathname === path;
  };

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          transition: 'background-color 0.35s ease, border-color 0.35s ease, padding 0.3s ease',
          backgroundColor: 'rgba(18, 17, 16, 0.92)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: '1px solid rgba(245, 242, 236, 0.08)',
          boxShadow: scrolled ? '0 4px 24px rgba(0, 0, 0, 0.5)' : 'none',
          padding: scrolled ? '0.75rem 0' : '1.1rem 0',
        }}
      >
        <div className="container-luxury" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
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
                fontSize: 'clamp(1.2rem, 3.5vw, 1.45rem)',
                fontWeight: 600,
                letterSpacing: '0.04em',
                color: '#F7F4EE',
                lineHeight: 1.1,
                transition: 'color 0.3s ease',
              }}
            >
              Gujarat Wallpaper &amp; Decor
            </span>
            <span
              style={{
                fontSize: '0.65rem',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: '#C5A880',
                fontWeight: 500,
                marginTop: '2px',
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
              const linkColor = active ? '#C5A880' : '#E5E1D8';
              const hoverColor = '#C5A880';

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  style={{
                    fontSize: '0.82rem',
                    fontWeight: 500,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: linkColor,
                    transition: 'color 0.25s ease',
                    position: 'relative',
                    padding: '0.25rem 0',
                    textDecoration: 'none',
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
                        backgroundColor: '#C5A880',
                        borderRadius: '1px',
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
              className="desktop-cta"
              style={{
                display: 'none',
                alignItems: 'center',
                gap: '0.55rem',
                backgroundColor: '#C5A880',
                color: '#121110',
                fontSize: '0.8rem',
                fontWeight: 600,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                padding: '0.75rem 1.6rem',
                borderRadius: '4px',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#DFCAAD';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#C5A880';
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
                color: '#F7F4EE',
                width: '42px',
                height: '42px',
                borderRadius: '4px',
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Animated Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            key="mobile-drawer"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'fixed',
              top: '64px',
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(18, 17, 16, 0.98)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              zIndex: 99,
              display: 'flex',
              flexDirection: 'column',
              padding: '2rem 1.5rem',
              overflowY: 'auto',
            }}
          >
            {/* Mobile Navigation Links */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2.5rem' }}>
              {navLinks.map((link, idx) => {
                const active = isLinkActive(link.path);
                const activeColor = '#C5A880';
                const defaultColor = '#F7F4EE';

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
                        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                        paddingBottom: '0.65rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight size={18} color={activeColor} />
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            {/* Mobile Drawer Showroom Footer */}
            <div style={{ marginTop: 'auto', paddingTop: '1.5rem', borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <p style={{ fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#C5A880', marginBottom: '0.35rem' }}>
                Visit Our Showroom
              </p>
              <p style={{ fontSize: '0.88rem', color: '#A8A29E', marginBottom: '1.25rem' }}>
                Mangaldas Complex, Near Navjivan Circle, Surat
              </p>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  navigate('/contact');
                }}
                className="btn-primary"
                style={{ 
                  width: '100%', 
                  backgroundColor: '#C5A880', 
                  color: '#141312', 
                  borderColor: '#C5A880',
                  padding: '0.85rem'
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
        }
      `}</style>
    </>
  );
}
