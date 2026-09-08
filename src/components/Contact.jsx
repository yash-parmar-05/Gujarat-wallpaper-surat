import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, MessageCircle, Clock, Sparkles, ArrowUpRight, PhoneCall } from 'lucide-react';
import { SHOWROOM_INFO } from '../data/categories';
import { useTheme } from '../context/ThemeContext';

function InstagramIcon({ size = 18, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

// WhatsApp Enquiry Number & Direct Call Numbers
export const WHATSAPP_ENQUIRY_NUMBER = "8320802633";
export const CALL_NUMBERS = [
  { display: "+91 99044 89826", dial: "+919904489826", label: "Primary Direct Line" },
  { display: "+91 92657 85158", dial: "+919265785158", label: "Showroom & Customer Desk" },
];

export default function Contact({ prefilledProduct }) {
  const { isDark } = useTheme();

  const handleWhatsAppEnquiry = () => {
    const text = encodeURIComponent(
      prefilledProduct
        ? `Hello Gujarat Wallpaper & Decor, I want to enquire about ${prefilledProduct.name} (${prefilledProduct.category}).`
        : `Hello Gujarat Wallpaper & Decor, I want to enquire about your luxury wallpapers, PVC wall panels & interior decor products.`
    );
    window.open(`https://wa.me/91${WHATSAPP_ENQUIRY_NUMBER}?text=${text}`, '_blank');
  };

  const colors = {
    bgSection: isDark ? '#121110' : '#FAF8F5',
    textPrimary: isDark ? '#F7F4EE' : '#1C1917',
    textSecondary: isDark ? '#C8C2B7' : '#78716C',
    textMuted: isDark ? '#8E887E' : '#A8A29E',
    accentGold: isDark ? '#C5A880' : '#A68353',
    cardBg: isDark ? '#171614' : '#FFFFFF',
    cardHoverBg: isDark ? '#1F1D1A' : '#F4EFEA',
    borderSubtle: isDark ? 'rgba(245, 242, 236, 0.08)' : 'rgba(28, 25, 23, 0.08)',
    borderCard: isDark ? 'rgba(197, 168, 128, 0.22)' : 'rgba(166, 131, 83, 0.22)',
    boxShadow: isDark ? '0 10px 30px rgba(0, 0, 0, 0.35)' : '0 10px 30px rgba(0, 0, 0, 0.04)',
  };

  return (
    <section
      id="contact"
      style={{
        padding: '7rem 0',
        backgroundColor: colors.bgSection,
        position: 'relative',
        transition: 'background-color 0.35s ease',
      }}
    >
      <div className="container-luxury">
        {/* Main CTA Top Banner */}
        <div
          className="contact-top-banner"
          style={{
            backgroundColor: isDark ? '#141312' : '#FFFFFF',
            color: isDark ? '#F7F4EE' : '#1C1917',
            borderRadius: '12px',
            padding: 'clamp(2.5rem, 6vw, 4.5rem) clamp(1.5rem, 5vw, 3.5rem)',
            position: 'relative',
            overflow: 'hidden',
            marginBottom: '4rem',
            border: `1px solid ${colors.borderSubtle}`,
            boxShadow: isDark ? '0 12px 36px rgba(0, 0, 0, 0.4)' : '0 10px 30px rgba(0, 0, 0, 0.04)',
            transition: 'background-color 0.35s ease, border-color 0.35s ease, color 0.35s ease',
          }}
        >
          {/* Subtle Ambient Background */}
          <div
            className="contact-cta-wallpaper"
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              width: '55%',
              height: '100%',
              backgroundImage: 'url(/assets/products/wallpaper-card.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: isDark ? 0.45 : 0.65,
              pointerEvents: 'none',
              maskImage: 'linear-gradient(to left, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 100%)',
              WebkitMaskImage: 'linear-gradient(to left, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 100%)',
            }}
          />

          <div style={{ position: 'relative', zIndex: 2, maxWidth: '780px' }}>
            <div className="sub-tag" style={{ color: colors.accentGold, marginBottom: '0.85rem' }}>
              Begin Your Transformation
            </div>

            <h2
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: 'clamp(2.4rem, 5vw, 4.2rem)',
                color: isDark ? '#F7F4EE' : '#1C1917',
                lineHeight: 1.1,
                marginBottom: '1rem',
              }}
            >
              Give Your Space a New Identity.
            </h2>

            <p
              style={{
                fontSize: 'clamp(1rem, 1.35vw, 1.15rem)',
                color: isDark ? '#D4CDC3' : '#57534E',
                lineHeight: 1.65,
                marginBottom: '2.25rem',
                fontWeight: 300,
              }}
            >
              Connect directly with our design consultants on WhatsApp or call our Surat showroom lines for immediate assistance.
            </p>

            <div className="contact-banner-actions" style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem' }}>
              <button
                onClick={() => {
                  const el = document.getElementById('showroom-location');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                style={{
                  backgroundColor: colors.accentGold,
                  color: isDark ? '#141312' : '#FFFFFF',
                  border: `1px solid ${colors.accentGold}`,
                  padding: '0.95rem 2.5rem',
                  borderRadius: '6px',
                  fontWeight: 600,
                  fontSize: '0.84rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.55rem',
                  boxShadow: isDark ? '0 6px 20px rgba(197, 168, 128, 0.25)' : '0 4px 16px rgba(166, 131, 83, 0.25)',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = colors.accentGoldHover;
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = colors.accentGold;
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <span>Visit Showroom</span>
                <ArrowUpRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Two-Column: Left (Enquiry & Calling Hub) & Right (Showroom Location) */}
        <div
          id="enquiry-hub"
          className="contact-enquiry-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '3.5rem',
            alignItems: 'start',
          }}
        >
          {/* Left: Instant WhatsApp & Calling Desk */}
          <div
            style={{
              gridColumn: 'span 7',
              backgroundColor: isDark ? 'rgba(24, 22, 20, 0.85)' : '#FFFFFF',
              backdropFilter: 'blur(16px)',
              padding: 'clamp(2rem, 4vw, 3.25rem)',
              borderRadius: '12px',
              border: `1px solid ${colors.borderCard}`,
              boxShadow: colors.boxShadow,
              transition: 'all 0.35s ease',
            }}
            className="contact-form-card"
          >
            <div className="sub-tag" style={{ color: colors.accentGold, marginBottom: '0.5rem' }}>
              Direct Showroom Connect
            </div>
            <h3
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: 'clamp(1.9rem, 3vw, 2.4rem)',
                color: colors.textPrimary,
                marginBottom: '0.75rem',
                fontWeight: 600,
                lineHeight: 1.15,
              }}
            >
              WhatsApp Enquiry &amp; Call Desk
            </h3>
            <p style={{ fontSize: '0.94rem', color: colors.textSecondary, marginBottom: '2rem', lineHeight: 1.6, fontWeight: 300 }}>
              Need catalogue samples, price estimates, or site visit consultations? Message us directly or give us a call right now.
            </p>

            {/* Premium WhatsApp Action Card */}
            <div
              style={{
                backgroundColor: isDark ? 'rgba(37, 211, 102, 0.08)' : 'rgba(37, 211, 102, 0.06)',
                border: '1px solid rgba(37, 211, 102, 0.3)',
                borderRadius: '10px',
                padding: '1.75rem',
                marginBottom: '1.75rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
              }}
              className="whatsapp-enquiry-box"
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '10px',
                    backgroundColor: '#25D366',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#FFFFFF',
                    flexShrink: 0,
                    boxShadow: '0 4px 14px rgba(37, 211, 102, 0.35)',
                  }}
                >
                  <MessageCircle size={24} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: colors.textMuted, fontWeight: 600 }}>
                    Official WhatsApp Enquiry
                  </div>
                  <div style={{ fontSize: '1.25rem', fontWeight: 700, color: colors.textPrimary }}>
                    +91 {WHATSAPP_ENQUIRY_NUMBER}
                  </div>
                </div>
              </div>

              <p style={{ fontSize: '0.86rem', color: colors.textSecondary, margin: 0, lineHeight: 1.5 }}>
                Click below to start an instant WhatsApp chat with our Surat showroom team:
              </p>

              <button
                onClick={handleWhatsAppEnquiry}
                style={{
                  width: '100%',
                  padding: '1rem 1.5rem',
                  backgroundColor: '#25D366',
                  color: '#FFFFFF',
                  borderRadius: '6px',
                  border: 'none',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.65rem',
                  boxShadow: '0 4px 16px rgba(37, 211, 102, 0.3)',
                  transition: 'all 0.25s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#1EBE5D';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#25D366';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <MessageCircle size={18} />
                <span>Chat on WhatsApp (+91 {WHATSAPP_ENQUIRY_NUMBER})</span>
                <ArrowUpRight size={16} />
              </button>
            </div>

            {/* Direct Calling Numbers */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ fontSize: '0.78rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: colors.accentGold, fontWeight: 600 }}>
                Direct Calling Numbers
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }} className="contact-call-grid">
                {CALL_NUMBERS.map((item, idx) => (
                  <a
                    key={idx}
                    href={`tel:${item.dial}`}
                    style={{
                      textDecoration: 'none',
                      backgroundColor: colors.cardBg,
                      border: `1px solid ${colors.borderSubtle}`,
                      borderRadius: '8px',
                      padding: '1.25rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.9rem',
                      transition: 'all 0.3s ease',
                      boxShadow: colors.boxShadow,
                    }}
                    className="contact-call-card"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = colors.accentGold;
                      e.currentTarget.style.backgroundColor = colors.cardHoverBg;
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = colors.borderSubtle;
                      e.currentTarget.style.backgroundColor = colors.cardBg;
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    <div
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '8px',
                        backgroundColor: isDark ? 'rgba(197, 168, 128, 0.12)' : 'rgba(166, 131, 83, 0.12)',
                        border: `1px solid ${colors.borderCard}`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: colors.accentGold,
                        flexShrink: 0,
                      }}
                    >
                      <PhoneCall size={18} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: colors.textMuted, fontWeight: 600 }}>
                        {item.label}
                      </div>
                      <div style={{ fontSize: '1rem', fontWeight: 600, color: colors.textPrimary, marginTop: '0.15rem' }}>
                        {item.display}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Showroom Details & Location */}
          <div
            id="showroom-location"
            style={{
              gridColumn: 'span 5',
              display: 'flex',
              flexDirection: 'column',
              gap: '2rem',
            }}
            className="contact-info-col"
          >
            <div>
              <div className="sub-tag" style={{ color: colors.accentGold, marginBottom: '0.5rem' }}>
                Showroom Visit
              </div>
              <h3
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: 'clamp(1.9rem, 3vw, 2.3rem)',
                  color: colors.textPrimary,
                  marginBottom: '0.85rem',
                  fontWeight: 600,
                }}
              >
                Surat Experience Center
              </h3>
              <p style={{ fontSize: '0.94rem', color: colors.textSecondary, lineHeight: 1.6, fontWeight: 300 }}>
                Experience full-scale installed wall panels, tactile wallpaper sample books, and luxury carpet textures in person across our branches.
              </p>
            </div>

            {/* Info Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1rem',
                  padding: '1.25rem',
                  backgroundColor: colors.cardBg,
                  borderRadius: '8px',
                  border: `1px solid ${colors.borderSubtle}`,
                  boxShadow: colors.boxShadow,
                }}
              >
                <MapPin size={20} color={colors.accentGold} style={{ marginTop: '2px', flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: colors.textMuted, fontWeight: 600, marginBottom: '0.2rem' }}>
                    Main Branch (Polaris)
                  </div>
                  <div style={{ fontSize: '0.92rem', color: colors.textPrimary, fontWeight: 500, lineHeight: 1.45 }}>
                    Shop No. 154, Polaris Mall, Puna Canal Road, Surat
                  </div>
                  <div style={{ fontSize: '0.8rem', color: colors.accentGold, marginTop: '0.25rem' }}>
                    Surat, Gujarat, India
                  </div>
                </div>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1rem',
                  padding: '1.25rem',
                  backgroundColor: colors.cardBg,
                  borderRadius: '8px',
                  border: `1px solid ${colors.borderSubtle}`,
                  boxShadow: colors.boxShadow,
                }}
              >
                <Clock size={20} color={colors.accentGold} style={{ marginTop: '2px', flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: colors.textMuted, fontWeight: 600, marginBottom: '0.2rem' }}>
                    Visiting Hours
                  </div>
                  <div style={{ fontSize: '0.92rem', color: colors.textPrimary, fontWeight: 500 }}>
                    Monday – Sunday: 10:00 AM – 7:00 PM
                  </div>
                </div>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1rem',
                  padding: '1.25rem',
                  backgroundColor: colors.cardBg,
                  borderRadius: '8px',
                  border: `1px solid ${colors.borderSubtle}`,
                  boxShadow: colors.boxShadow,
                }}
              >
                <InstagramIcon size={20} color={colors.accentGold} style={{ marginTop: '2px', flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: colors.textMuted, fontWeight: 600, marginBottom: '0.2rem' }}>
                    Instagram Community
                  </div>
                  <div style={{ fontSize: '0.92rem', color: colors.textPrimary, fontWeight: 500 }}>
                    @gujrat_wallpaper_decor
                  </div>
                  <div style={{ fontSize: '0.8rem', color: colors.accentGold, marginTop: '0.25rem' }}>
                    All India Delivery &amp; Fitting Support
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .contact-enquiry-grid {
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            gap: 2.5rem !important;
            width: 100% !important;
          }
          .contact-form-card {
            width: 100% !important;
            max-width: 100% !important;
            margin: 0 auto !important;
            padding: 2.5rem 1.75rem !important;
            box-sizing: border-box !important;
          }
          .contact-info-col {
            width: 100% !important;
            max-width: 100% !important;
            margin: 0 auto !important;
          }
          .contact-call-grid {
            grid-template-columns: 1fr !important;
          }
        }

        @media (max-width: 768px) {
          #contact {
            padding: 3.5rem 0 4.5rem 0 !important;
          }
          .contact-top-banner {
            margin-bottom: 2.5rem !important;
          }
          .contact-enquiry-grid {
            gap: 2rem !important;
          }
          .contact-form-card {
            padding: 1.75rem 1.25rem !important;
          }
        }

        @media (max-width: 480px) {
          #contact {
            padding: 2.5rem 0 3.5rem 0 !important;
          }
          .contact-top-banner {
            margin-bottom: 2rem !important;
            padding: 2rem 1.25rem !important;
          }
          .contact-cta-wallpaper {
            display: none !important;
          }
          .contact-form-card {
            padding: 1.5rem 1rem !important;
            border-radius: 10px !important;
          }
          .contact-banner-actions {
            flex-direction: column !important;
            width: 100% !important;
          }
          .contact-banner-actions a,
          .contact-banner-actions button {
            width: 100% !important;
            justify-content: center !important;
          }
          .whatsapp-enquiry-box {
            padding: 1.25rem 1rem !important;
          }
        }
      `}</style>
    </section>
  );
}
