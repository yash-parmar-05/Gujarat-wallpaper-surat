import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sofa,
  Bed,
  Tv,
  Briefcase,
  Building2,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  X,
  Clock,
  Layers,
  ShieldCheck,
} from 'lucide-react';
import BeforeAfterSlider from './BeforeAfterSlider';
import { TRANSFORMATIONS, TRANSFORMATION_CATEGORIES } from '../data/transformations';

function WhatsAppSvg({ size = 20, color = 'currentColor' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill={color}
      aria-hidden="true"
      style={{ display: 'block', flexShrink: 0 }}
    >
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.68 12.04 3.68C14.25 3.68 16.31 4.54 17.87 6.1C19.42 7.66 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.05 20.15ZM16.56 14.37C16.31 14.25 15.1 13.65 14.88 13.57C14.65 13.49 14.49 13.45 14.33 13.69C14.16 13.94 13.69 14.49 13.55 14.65C13.41 14.82 13.26 14.84 13.01 14.72C12.76 14.59 11.97 14.33 11.02 13.49C10.28 12.83 9.78 12.02 9.64 11.77C9.5 11.52 9.62 11.39 9.75 11.26C9.86 11.15 10 10.97 10.12 10.83C10.24 10.68 10.28 10.58 10.36 10.42C10.44 10.25 10.4 10.11 10.34 9.99C10.28 9.86 9.78 8.64 9.58 8.13C9.38 7.64 9.17 7.71 9.02 7.7C8.87 7.69 8.71 7.69 8.54 7.69C8.38 7.69 8.11 7.75 7.89 7.99C7.66 8.24 7.03 8.83 7.03 10.03C7.03 11.24 7.91 12.4 8.03 12.56C8.16 12.73 9.75 15.17 12.19 16.22C12.77 16.47 13.22 16.62 13.57 16.73C14.15 16.92 14.68 16.89 15.1 16.83C15.57 16.76 16.54 16.24 16.74 15.67C16.95 15.1 16.95 14.61 16.88 14.49C16.82 14.37 16.81 14.5 16.56 14.37Z" />
    </svg>
  );
}

const ROOM_ICONS = {
  sofa: Sofa,
  bed: Bed,
  tv: Tv,
  briefcase: Briefcase,
  building: Building2,
};

export default function BeforeAfterSection({ id = 'transformations' }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const scrollRef = useRef(null);

  const filteredItems =
    activeCategory === 'all'
      ? TRANSFORMATIONS
      : TRANSFORMATIONS.filter((item) => item.category === activeCategory);

  // Lock body scroll and pause Lenis smoothly while modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.classList.add('modal-open');
      if (window.lenis) {
        window.lenis.stop();
      }
      const origOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';

      const handleKey = (e) => {
        if (e.key === 'Escape') closeModal();
      };
      window.addEventListener('keydown', handleKey);

      return () => {
        document.body.classList.remove('modal-open');
        if (window.lenis) {
          window.lenis.start();
        }
        document.body.style.overflow = origOverflow || '';
        window.removeEventListener('keydown', handleKey);
      };
    }
  }, [selectedProject]);

  const handleScroll = (direction) => {
    if (!scrollRef.current) return;
    const scrollAmount = direction === 'left' ? -380 : 380;
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const showArrows = filteredItems.length > 3;

  return (
    <section
      id={id}
      style={{
        padding: '80px 0 92px',
        backgroundColor: 'var(--bg-primary, #F8F5F1)',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid rgba(122, 90, 58, 0.08)',
      }}
      aria-label="Before and After Transformations Showcase"
    >
      <div className="container-luxury" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 20px' }}>
        {/* ========================================================
            1. SECTION HEADER (Mockup Match)
            ======================================================== */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 2.2rem' }}>
          {/* Eyebrow with horizontal line accents */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '14px',
              marginBottom: '0.9rem',
            }}
          >
            <span
              style={{
                width: '34px',
                height: '1px',
                backgroundColor: 'var(--accent-gold, #C8A96A)',
                opacity: 0.7,
              }}
            />
            <span
              style={{
                fontSize: '0.76rem',
                fontWeight: 700,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: 'var(--accent-walnut, #7A5A3A)',
              }}
            >
              REAL TRANSFORMATIONS
            </span>
            <span
              style={{
                width: '34px',
                height: '1px',
                backgroundColor: 'var(--accent-gold, #C8A96A)',
                opacity: 0.7,
              }}
            />
          </div>

          {/* Section Main Title */}
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', Garamond, Georgia, serif",
              fontSize: 'clamp(2.3rem, 3.8vw, 3.3rem)',
              color: 'var(--text-primary, #2F2F2F)',
              fontWeight: 500,
              lineHeight: 1.15,
              margin: '0 0 0.85rem',
              letterSpacing: '-0.01em',
            }}
          >
            Before &amp; After{' '}
            <em
              style={{
                fontFamily: "'Cormorant Garamond', Garamond, Georgia, serif",
                fontStyle: 'italic',
                fontWeight: 400,
                color: 'var(--accent-walnut, #9B784B)',
                letterSpacing: '0.01em',
              }}
            >
              Transformations
            </em>
          </h2>

          {/* Subtitle */}
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(0.92rem, 1.15vw, 1.05rem)',
              color: 'var(--text-secondary, #5A5652)',
              lineHeight: 1.6,
              margin: '0 auto',
              maxWidth: '620px',
            }}
          >
            See how the right wallpaper, panels and decor can completely change a space.
            <br />
            <span style={{ color: 'var(--text-muted, #78726B)' }}>
              Real projects, real results — from dull to stunning.
            </span>
          </p>
        </div>

        {/* ========================================================
            2. FILTER PILLS
            ======================================================== */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '10px',
            marginBottom: '2.5rem',
          }}
          role="tablist"
          aria-label="Filter transformations by room category"
        >
          {TRANSFORMATION_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => {
                  setActiveCategory(cat.id);
                  if (scrollRef.current) {
                    scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
                  }
                }}
                style={{
                  padding: '8px 20px',
                  borderRadius: '9999px',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.86rem',
                  fontWeight: isActive ? 600 : 500,
                  cursor: 'pointer',
                  transition: 'all 0.22s ease',
                  backgroundColor: isActive ? '#24201D' : 'rgba(255, 255, 255, 0.92)',
                  color: isActive ? '#FFFFFF' : '#4E4A45',
                  border: isActive
                    ? '1px solid #24201D'
                    : '1px solid rgba(122, 90, 58, 0.16)',
                  boxShadow: isActive
                    ? '0 4px 14px rgba(36, 32, 29, 0.2)'
                    : '0 2px 6px rgba(0, 0, 0, 0.02)',
                  outline: 'none',
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.borderColor = 'rgba(122, 90, 58, 0.35)';
                    e.currentTarget.style.backgroundColor = '#FFFFFF';
                    e.currentTarget.style.transform = 'translateY(-1px)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.borderColor = 'rgba(122, 90, 58, 0.16)';
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.92)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }
                }}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* ========================================================
            3. CARDS SHOWCASE (Responsive Flex/Grid with Max Widths)
            ======================================================== */}
        <div style={{ position: 'relative', width: '100%' }}>
          {/* Desktop Left Carousel Arrow (Shown only when scrolling is useful) */}
          {showArrows && (
            <button
              onClick={() => handleScroll('left')}
              aria-label="Scroll transformations left"
              className="transformations-nav-btn left"
              style={{
                position: 'absolute',
                left: '-20px',
                top: '42%',
                transform: 'translateY(-50%)',
                zIndex: 10,
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                backgroundColor: '#FFFFFF',
                border: '1px solid rgba(122, 90, 58, 0.22)',
                boxShadow: '0 4px 14px rgba(0, 0, 0, 0.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: '#3A3632',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-50%) scale(1.06)';
                e.currentTarget.style.backgroundColor = '#FAF7F2';
                e.currentTarget.style.borderColor = 'var(--accent-walnut, #7A5A3A)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
                e.currentTarget.style.backgroundColor = '#FFFFFF';
                e.currentTarget.style.borderColor = 'rgba(122, 90, 58, 0.22)';
              }}
            >
              <ChevronLeft size={20} strokeWidth={2.2} />
            </button>
          )}

          {/* Desktop Right Carousel Arrow */}
          {showArrows && (
            <button
              onClick={() => handleScroll('right')}
              aria-label="Scroll transformations right"
              className="transformations-nav-btn right"
              style={{
                position: 'absolute',
                right: '-20px',
                top: '42%',
                transform: 'translateY(-50%)',
                zIndex: 10,
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                backgroundColor: '#FFFFFF',
                border: '1px solid rgba(122, 90, 58, 0.22)',
                boxShadow: '0 4px 14px rgba(0, 0, 0, 0.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: '#3A3632',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-50%) scale(1.06)';
                e.currentTarget.style.backgroundColor = '#FAF7F2';
                e.currentTarget.style.borderColor = 'var(--accent-walnut, #7A5A3A)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
                e.currentTarget.style.backgroundColor = '#FFFFFF';
                e.currentTarget.style.borderColor = 'rgba(122, 90, 58, 0.22)';
              }}
            >
              <ChevronRight size={20} strokeWidth={2.2} />
            </button>
          )}

          {/* Scrollable Container */}
          <div
            ref={scrollRef}
            className="transformations-track"
            style={{
              display: 'flex',
              flexWrap: filteredItems.length <= 3 ? 'wrap' : 'nowrap',
              justifyContent: filteredItems.length < 3 ? 'center' : 'flex-start',
              gap: '24px',
              overflowX: filteredItems.length > 3 ? 'auto' : 'visible',
              scrollSnapType: filteredItems.length > 3 ? 'x mandatory' : 'none',
              padding: '6px 2px 20px',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch',
            }}
          >
            {filteredItems.map((item, idx) => {
              const IconComponent = ROOM_ICONS[item.iconType] || Sofa;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.06 }}
                  className="transformation-card-item"
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: '20px',
                    padding: '12px 12px 18px',
                    border: '1px solid rgba(122, 90, 58, 0.14)',
                    boxShadow: '0 8px 24px rgba(122, 90, 58, 0.06)',
                    scrollSnapAlign: 'start',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'box-shadow 0.28s ease, transform 0.28s ease',
                    boxSizing: 'border-box',
                    /* Guaranteed proportional sizing: NEVER stretches past 390px */
                    flex: filteredItems.length > 3 ? '0 0 calc((100% - 48px) / 3)' : '0 1 380px',
                    minWidth: '290px',
                    maxWidth: '400px',
                    width: '100%',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 14px 34px rgba(122, 90, 58, 0.12)';
                    e.currentTarget.style.transform = 'translateY(-4px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(122, 90, 58, 0.06)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  {/* Before & After Slider */}
                  <div style={{ marginBottom: '14px' }}>
                    <BeforeAfterSlider
                      beforeImage={item.beforeImage}
                      beforeFallback={item.beforeFallback}
                      afterImage={item.afterImage}
                      afterFallback={item.afterFallback}
                      beforeAlt={item.beforeAlt}
                      afterAlt={item.afterAlt}
                      title={item.title}
                      aspectRatio="4 / 3"
                    />
                  </div>

                  {/* Card Footer Info */}
                  <div
                    style={{
                      padding: '4px 6px 0',
                      display: 'flex',
                      alignItems: 'flex-start',
                      justifyContent: 'space-between',
                      gap: '12px',
                      marginTop: 'auto',
                    }}
                  >
                    {/* Left: Icon + Text */}
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', minWidth: 0 }}>
                      <div
                        style={{
                          width: '40px',
                          height: '40px',
                          minWidth: '40px',
                          borderRadius: '10px',
                          backgroundColor: '#F8F5F0',
                          border: '1px solid rgba(182, 141, 64, 0.24)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'var(--accent-walnut, #7A5A3A)',
                          marginTop: '2px',
                          flexShrink: 0,
                        }}
                      >
                        <IconComponent size={20} strokeWidth={1.8} />
                      </div>

                      <div style={{ minWidth: 0 }}>
                        <h3
                          style={{
                            fontFamily: "'Cormorant Garamond', Garamond, Georgia, serif",
                            fontSize: '1.3rem',
                            fontWeight: 600,
                            color: 'var(--text-primary, #2F2F2F)',
                            margin: '0 0 3px',
                            lineHeight: 1.2,
                          }}
                        >
                          {item.title}
                        </h3>
                        <p
                          style={{
                            fontFamily: 'var(--font-sans)',
                            fontSize: '0.82rem',
                            color: 'var(--text-secondary, #635F59)',
                            lineHeight: 1.45,
                            margin: 0,
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            display: '-webkit-box',
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: 'vertical',
                          }}
                        >
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* Right: View Details Action */}
                    <button
                      onClick={() => openModal(item)}
                      style={{
                        background: 'none',
                        border: 'none',
                        padding: '6px 0',
                        cursor: 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '5px',
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.82rem',
                        fontWeight: 600,
                        color: 'var(--accent-walnut, #7A5A3A)',
                        whiteSpace: 'nowrap',
                        flexShrink: 0,
                        transition: 'gap 0.2s ease, color 0.2s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = '#B68D40';
                        e.currentTarget.style.gap = '8px';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = '#7A5A3A';
                        e.currentTarget.style.gap = '5px';
                      }}
                      aria-label={`View full project details for ${item.title}`}
                    >
                      <span>View Details</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ========================================================
            4. BOTTOM CALL-TO-ACTION BANNER (Cohesive Luxury Card)
            ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.15 }}
          style={{
            marginTop: '3.2rem',
            backgroundColor: '#FFFFFF',
            borderRadius: '20px',
            padding: '28px 36px',
            boxShadow: '0 10px 32px rgba(122, 90, 58, 0.08)',
            position: 'relative',
            overflow: 'hidden',
            border: '1px solid rgba(122, 90, 58, 0.16)',
          }}
        >
          <div
            style={{
              position: 'relative',
              zIndex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '20px',
            }}
          >
            {/* Left: WhatsApp Icon + Text */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
              <div
                style={{
                  width: '52px',
                  height: '52px',
                  minWidth: '52px',
                  borderRadius: '50%',
                  border: '1.5px solid rgba(37, 211, 102, 0.35)',
                  backgroundColor: 'rgba(37, 211, 102, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#25D366',
                  boxShadow: '0 0 16px rgba(37, 211, 102, 0.18)',
                }}
              >
                <WhatsAppSvg size={26} color="#25D366" />
              </div>

              <div>
                <h3
                  style={{
                    fontFamily: "'Cormorant Garamond', Garamond, Georgia, serif",
                    fontSize: 'clamp(1.4rem, 2.2vw, 1.85rem)',
                    fontWeight: 600,
                    color: 'var(--text-primary, #2F2F2F)',
                    margin: '0 0 4px',
                    letterSpacing: '-0.01em',
                  }}
                >
                  Planning a similar transformation?
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.94rem',
                    color: 'var(--text-secondary, #5A5652)',
                    margin: 0,
                  }}
                >
                  Get expert design guidance on WhatsApp.
                </p>
              </div>
            </div>

            {/* Right: WhatsApp Button */}
            <a
              href={`https://wa.me/918320802633?text=${encodeURIComponent(
                'Hello Gujarat Wallpaper & Decor, I was viewing your Before & After Transformations and would like to get design guidance for a wall transformation in my space.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              id="before-after-whatsapp-btn"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '13px 26px',
                borderRadius: '9999px',
                backgroundColor: '#25D366',
                backgroundImage: 'linear-gradient(135deg, #25D366 0%, #1EBE5D 100%)',
                color: '#FFFFFF',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.92rem',
                fontWeight: 600,
                textDecoration: 'none',
                boxShadow: '0 6px 20px rgba(37, 211, 102, 0.35)',
                transition: 'all 0.22s ease',
                border: '1px solid rgba(255, 255, 255, 0.2)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 10px 28px rgba(37, 211, 102, 0.48)';
                e.currentTarget.style.backgroundImage =
                  'linear-gradient(135deg, #22C35E 0%, #18AA52 100%)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(37, 211, 102, 0.35)';
                e.currentTarget.style.backgroundImage =
                  'linear-gradient(135deg, #25D366 0%, #1EBE5D 100%)';
              }}
            >
              <WhatsAppSvg size={19} color="#FFFFFF" />
              <span>Chat on WhatsApp</span>
              <span style={{ fontSize: '1.05rem', marginLeft: '2px' }}>→</span>
            </a>
          </div>
        </motion.div>
      </div>

      {/* ========================================================
          5. MODAL PORTAL (Rendered at document.body)
          ======================================================== */}
      {typeof document !== 'undefined' &&
        createPortal(
          <AnimatePresence>
            {selectedProject && (
              <div
                className="transformation-modal-portal"
                style={{
                  position: 'fixed',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  zIndex: 999999,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '16px',
                  backgroundColor: 'rgba(14, 12, 10, 0.82)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  overscrollBehavior: 'contain',
                }}
                onClick={closeModal}
                onWheel={(e) => e.stopPropagation()}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 15 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="transformation-modal-card"
                  style={{
                    position: 'relative',
                    backgroundColor: '#FFFFFF',
                    borderRadius: '24px',
                    maxWidth: '680px',
                    width: '100%',
                    maxHeight: 'min(90vh, 760px)',
                    overflowY: 'auto',
                    overflowX: 'hidden',
                    overscrollBehavior: 'contain',
                    boxShadow: '0 24px 60px rgba(0, 0, 0, 0.35)',
                    border: '1px solid rgba(122, 90, 58, 0.18)',
                    padding: '24px 24px 28px',
                    boxSizing: 'border-box',
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none',
                  }}
                  onClick={(e) => e.stopPropagation()}
                  onWheel={(e) => e.stopPropagation()}
                >
                  {/* Clean Round Close Button */}
                  <button
                    onClick={closeModal}
                    aria-label="Close transformation details"
                    style={{
                      position: 'absolute',
                      top: '18px',
                      right: '18px',
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      backgroundColor: '#F5F2EC',
                      border: '1px solid rgba(122, 90, 58, 0.18)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      color: '#4A4641',
                      transition: 'all 0.2s ease',
                      zIndex: 20,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#ECE6DD';
                      e.currentTarget.style.transform = 'scale(1.05)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#F5F2EC';
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                  >
                    <X size={17} />
                  </button>

                  {/* Category Pill + Title */}
                  <div style={{ paddingRight: '44px', marginBottom: '16px' }}>
                    <span
                      style={{
                        display: 'inline-block',
                        padding: '3px 10px',
                        borderRadius: '6px',
                        backgroundColor: 'rgba(122, 90, 58, 0.1)',
                        color: 'var(--accent-walnut, #7A5A3A)',
                        fontSize: '0.74rem',
                        fontWeight: 700,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        marginBottom: '6px',
                      }}
                    >
                      {selectedProject.categoryLabel}
                    </span>

                    <h3
                      style={{
                        fontFamily: "'Cormorant Garamond', Garamond, Georgia, serif",
                        fontSize: 'clamp(1.6rem, 2.5vw, 2.1rem)',
                        color: 'var(--text-primary, #2F2F2F)',
                        margin: '0 0 6px',
                        fontWeight: 600,
                        lineHeight: 1.2,
                      }}
                    >
                      {selectedProject.title} Transformation
                    </h3>

                    <p
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.9rem',
                        color: 'var(--text-secondary, #5A5652)',
                        lineHeight: 1.5,
                        margin: 0,
                      }}
                    >
                      {selectedProject.fullStory}
                    </p>
                  </div>

                  {/* Interactive Slider Inside Modal */}
                  <div style={{ marginBottom: '18px', borderRadius: '16px', overflow: 'hidden' }}>
                    <BeforeAfterSlider
                      beforeImage={selectedProject.beforeImage}
                      beforeFallback={selectedProject.beforeFallback}
                      afterImage={selectedProject.afterImage}
                      afterFallback={selectedProject.afterFallback}
                      beforeAlt={selectedProject.beforeAlt}
                      afterAlt={selectedProject.afterAlt}
                      title={selectedProject.title}
                      aspectRatio="16 / 10"
                    />
                  </div>

                  {/* 2-Column Info Grid */}
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                      gap: '12px',
                      marginBottom: '18px',
                      padding: '14px',
                      backgroundColor: '#FAF7F2',
                      borderRadius: '12px',
                      border: '1px solid rgba(122, 90, 58, 0.1)',
                    }}
                  >
                    <div>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                          color: 'var(--accent-walnut, #7A5A3A)',
                          fontSize: '0.76rem',
                          fontWeight: 700,
                          textTransform: 'uppercase',
                          letterSpacing: '0.08em',
                          marginBottom: '4px',
                        }}
                      >
                        <Clock size={14} />
                        <span>Timeline</span>
                      </div>
                      <div style={{ fontSize: '0.88rem', color: '#2F2F2F', fontWeight: 600 }}>
                        {selectedProject.duration}
                      </div>
                    </div>

                    <div>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                          color: 'var(--accent-walnut, #7A5A3A)',
                          fontSize: '0.76rem',
                          fontWeight: 700,
                          textTransform: 'uppercase',
                          letterSpacing: '0.08em',
                          marginBottom: '4px',
                        }}
                      >
                        <ShieldCheck size={14} />
                        <span>Key Benefit</span>
                      </div>
                      <div style={{ fontSize: '0.88rem', color: '#2F2F2F', fontWeight: 600 }}>
                        {selectedProject.highlight}
                      </div>
                    </div>
                  </div>

                  {/* Materials List */}
                  <div style={{ marginBottom: '22px' }}>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        color: 'var(--accent-walnut, #7A5A3A)',
                        fontSize: '0.76rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        marginBottom: '8px',
                      }}
                    >
                      <Layers size={14} />
                      <span>Materials &amp; Decor Installed</span>
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                      {selectedProject.materials.map((mat, i) => (
                        <span
                          key={i}
                          style={{
                            padding: '5px 12px',
                            backgroundColor: '#F8F5F1',
                            border: '1px solid rgba(122, 90, 58, 0.16)',
                            borderRadius: '9999px',
                            fontSize: '0.82rem',
                            color: '#423E39',
                            fontWeight: 500,
                          }}
                        >
                          {mat}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Full-Width WhatsApp Inquiry Button */}
                  <a
                    href={`https://wa.me/918320802633?text=${encodeURIComponent(
                      `Hello Gujarat Wallpaper & Decor, I am interested in a transformation like your "${selectedProject.title}" (${selectedProject.categoryLabel}). Please share details and an estimated estimate.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '9px',
                      padding: '13px 20px',
                      borderRadius: '12px',
                      backgroundColor: '#25D366',
                      backgroundImage: 'linear-gradient(135deg, #25D366 0%, #1EBE5D 100%)',
                      color: '#FFFFFF',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.94rem',
                      fontWeight: 600,
                      textDecoration: 'none',
                      boxShadow: '0 6px 20px rgba(37, 211, 102, 0.35)',
                      transition: 'all 0.2s ease',
                      boxSizing: 'border-box',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundImage = 'linear-gradient(135deg, #22C35E 0%, #18AA52 100%)';
                      e.currentTarget.style.boxShadow = '0 10px 26px rgba(37, 211, 102, 0.48)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundImage = 'linear-gradient(135deg, #25D366 0%, #1EBE5D 100%)';
                      e.currentTarget.style.boxShadow = '0 6px 20px rgba(37, 211, 102, 0.35)';
                    }}
                  >
                    <WhatsAppSvg size={19} color="#FFFFFF" />
                    <span>Get a Free Quote for This Transformation on WhatsApp</span>
                  </a>
                </motion.div>
              </div>
            )}
          </AnimatePresence>,
          document.body
        )}

      {/* Scoped CSS for Perfect Scroll & Responsive Display */}
      <style>{`
        /* Hide all raw scrollbars on the modal card */
        .transformation-modal-card {
          scrollbar-width: none !important;
          -ms-overflow-style: none !important;
        }
        .transformation-modal-card::-webkit-scrollbar {
          display: none !important;
          width: 0 !important;
          height: 0 !important;
        }

        /* Responsive Breakpoints */
        @media (max-width: 1024px) {
          .transformations-nav-btn {
            display: none !important;
          }
          .transformations-track {
            flex-wrap: nowrap !important;
            justify-content: flex-start !important;
            overflow-x: auto !important;
            scroll-snap-type: x mandatory !important;
          }
          .transformation-card-item {
            flex: 0 0 340px !important;
            max-width: 340px !important;
          }
        }

        @media (max-width: 640px) {
          .transformation-card-item {
            flex: 0 0 88vw !important;
            max-width: 88vw !important;
            min-width: 270px !important;
          }
          #before-after-whatsapp-btn {
            width: 100%;
            justify-content: center;
          }
          .transformation-modal-card {
            padding: 20px 16px 22px !important;
            border-radius: 18px !important;
          }
        }
      `}</style>
    </section>
  );
}
