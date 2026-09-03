import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { theme, isDark } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
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
    { label: 'Collections', path: '/products' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Why Choose Us', path: '/why-choose-us' },
    { label: 'Contact', path: '/contact' },
  ];

  const isLinkActive = (path) => {
    if (path === '/home') {
      return location.pathname === '/home' || location.pathname === '/';
    }
    if (path === '/products') {
      return location.pathname.startsWith('/products') || location.pathname.startsWith('/collections');
    }
    if (path === '/why-choose-us') {
      return location.pathname === '/why-choose-us';
    }
    return location.pathname === path;
  };

  const isDarkHeroPage = location.pathname === '/home' || location.pathname === '/';
  const hasSolidBg = scrolled || !isDarkHeroPage;

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
          backgroundColor: hasSolidBg 
            ? (isDark ? 'rgba(20, 19, 18, 0.95)' : 'rgba(251, 249, 245, 0.96)')
            : (isDark 
                ? 'linear-gradient(to bottom, rgba(20, 19, 18, 0.7) 0%, rgba(20, 19, 18, 0) 100%)' 
                : 'linear-gradient(to bottom, rgba(251, 249, 245, 0.88) 0%, rgba(251, 249, 245, 0) 100%)'),
          backdropFilter: hasSolidBg ? 'blur(16px)' : 'none',
          WebkitBackdropFilter: hasSolidBg ? 'blur(16px)' : 'none',
          borderBottom: hasSolidBg 
            ? (isDark ? '1px solid rgba(245, 242, 236, 0.08)' : '1px solid rgba(28, 25, 23, 0.08)') 
            : '1px solid transparent',
          padding: scrolled ? '0.9rem 0' : '1.35rem 0',
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
                fontSize: '1.4rem',
                fontWeight: 600,
                letterSpacing: '0.04em',
                color: isDark ? '#F7F4EE' : '#1C1917',
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
                color: isDark ? '#C5A880' : '#A68353',
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
              const linkColor = active 
                ? (isDark ? '#C5A880' : '#A68353') 
                : (isDark ? '#E5E1D8' : '#44403C');
              const hoverColor = isDark ? '#C5A880' : '#A68353';

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
                        backgroundColor: isDark ? '#C5A880' : '#A68353',
                        borderRadius: '1px',
                      }}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Theme Toggle, CTA & Mobile Controls */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            {/* Desktop Theme Toggle (Logo -> Navigation -> Theme Toggle -> CTA) */}
            <div className="desktop-theme-toggle">
              <ThemeToggle variant="desktop" />
            </div>

            <Link
              to="/products"
              className="desktop-cta"
              style={{
                display: 'none',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.65rem 1.4rem',
                fontSize: '0.78rem',
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: isDark ? '#141312' : '#FFFFFF',
                backgroundColor: isDark ? '#C5A880' : '#A68353',
                borderRadius: '4px',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = isDark ? '#DFCAAD' : '#8D6B3C';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = isDark ? '#C5A880' : '#A68353';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <span>Explore Collection</span>
              <ArrowUpRight size={14} />
            </Link>

            {/* Mobile Theme Toggle Button (Next to hamburger) */}
            <div className="mobile-theme-toggle">
              <ThemeToggle variant="mobile-nav" />
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              className="mobile-toggle"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: isDark ? '#F7F4EE' : '#1C1917',
                width: '42px',
                height: '42px',
                borderRadius: '4px',
                backgroundColor: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.05)',
                border: isDark ? '1px solid rgba(255, 255, 255, 0.12)' : '1px solid rgba(0, 0, 0, 0.12)',
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
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'fixed',
              top: '70px',
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: isDark ? 'rgba(18, 17, 16, 0.98)' : 'rgba(251, 249, 245, 0.98)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              zIndex: 99,
              display: 'flex',
              flexDirection: 'column',
              padding: '2rem 1.5rem',
              overflowY: 'auto',
            }}
          >
            {/* Mobile Navigation Links */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2rem' }}>
              {navLinks.map((link, idx) => {
                const active = isLinkActive(link.path);
                const activeColor = isDark ? '#C5A880' : '#A68353';
                const defaultColor = isDark ? '#F7F4EE' : '#1C1917';

                return (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setMobileMenuOpen(false)}
                      style={{
                        fontFamily: "'Cormorant Garamond', Georgia, serif",
                        fontSize: '1.85rem',
                        color: active ? activeColor : defaultColor,
                        textDecoration: 'none',
                        borderBottom: isDark ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid rgba(0, 0, 0, 0.08)',
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

            {/* Mobile Theme Toggle in Menu */}
            <div style={{ marginBottom: '2rem' }}>
              <ThemeToggle variant="mobile" />
            </div>

            {/* Mobile Drawer Showroom Footer */}
            <div style={{ marginTop: 'auto', paddingTop: '1.25rem', borderTop: isDark ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.1)' }}>
              <p style={{ fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: isDark ? '#C5A880' : '#A68353', marginBottom: '0.35rem' }}>
                Visit Our Showroom
              </p>
              <p style={{ fontSize: '0.88rem', color: isDark ? '#A8A29E' : '#57534E', marginBottom: '1.25rem' }}>
                Mangaldas Complex, Ring Road / Ghod Dod Road, Surat
              </p>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  navigate('/contact');
                }}
                className="btn-primary"
                style={{ 
                  width: '100%', 
                  backgroundColor: isDark ? '#C5A880' : '#A68353', 
                  color: isDark ? '#141312' : '#FFFFFF', 
                  borderColor: isDark ? '#C5A880' : '#A68353' 
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
          .desktop-theme-toggle {
            display: inline-flex !important;
          }
          .mobile-theme-toggle {
            display: none !important;
          }
          .mobile-toggle {
            display: none !important;
          }
        }
        @media (max-width: 991px) {
          .desktop-theme-toggle {
            display: none !important;
          }
          .mobile-theme-toggle {
            display: flex !important;
          }
        }
      `}</style>
    </>
  );
}
