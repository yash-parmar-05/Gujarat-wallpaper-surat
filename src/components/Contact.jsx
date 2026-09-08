import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, MessageCircle, Clock, Send, CheckCircle2, Sparkles, ArrowUpRight } from 'lucide-react';
import { SHOWROOM_INFO } from '../data/categories';
import { useTheme } from '../context/ThemeContext';

function InstagramIcon({ size = 18, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}

// Configurable WhatsApp placeholder per instructions
export const CONTACT_WHATSAPP_NUMBER = "919265785158";

export default function Contact({ prefilledProduct }) {
  const { isDark } = useTheme();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    category: prefilledProduct ? prefilledProduct.category : 'Wallpapers',
    spaceType: 'Residential',
    message: prefilledProduct ? `I would like to enquire about ${prefilledProduct.name}.` : '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hello Gujarat Wallpaper & Decor, I am interested in ${formData.category} for my ${formData.spaceType} project.`
    );
    window.open(`https://wa.me/${CONTACT_WHATSAPP_NUMBER}?text=${text}`, '_blank');
  };

  const colors = {
    bgSection: isDark ? '#121110' : '#FAF8F5',
    textPrimary: isDark ? '#F7F4EE' : '#1C1917',
    textSecondary: isDark ? '#C8C2B7' : '#78716C',
    textMuted: isDark ? '#8E887E' : '#A8A29E',
    accentGold: isDark ? '#C5A880' : '#A68353',
    cardBg: isDark ? '#171614' : '#FFFFFF',
    inputBg: isDark ? '#1F1E1B' : '#FAF8F5',
    borderSubtle: isDark ? 'rgba(245, 242, 236, 0.08)' : 'rgba(28, 25, 23, 0.08)',
    borderInput: isDark ? 'rgba(197, 168, 128, 0.25)' : 'rgba(28, 25, 23, 0.15)',
    boxShadow: isDark ? '0 10px 30px rgba(0, 0, 0, 0.35)' : '0 10px 30px rgba(0, 0, 0, 0.04)',
  };

  return (
    <section
      id="contact"
      style={{
        padding: '8rem 0',
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
            borderRadius: '8px',
            padding: 'clamp(2.5rem, 6vw, 5rem) clamp(1.5rem, 5vw, 3.5rem)',
            position: 'relative',
            overflow: 'hidden',
            marginBottom: '5rem',
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
              opacity: isDark ? 0.55 : 0.75,
              filter: isDark ? 'none' : 'contrast(1.08) saturate(0.85)',
              pointerEvents: 'none',
              maskImage: 'linear-gradient(to left, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 100%)',
              WebkitMaskImage: 'linear-gradient(to left, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 100%)',
            }}
          />

          <div style={{ position: 'relative', zIndex: 2, maxWidth: '780px' }}>
            <div className="sub-tag" style={{ color: colors.accentGold, marginBottom: '1rem' }}>
              Begin Your Transformation
            </div>

            <h2
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)',
                color: isDark ? '#F7F4EE' : '#1C1917',
                lineHeight: 1.08,
                marginBottom: '1.25rem',
              }}
            >
              Give Your Space a New Identity.
            </h2>

            <p
              style={{
                fontSize: 'clamp(1rem, 1.4vw, 1.2rem)',
                color: isDark ? '#D4CDC3' : '#57534E',
                lineHeight: 1.6,
                marginBottom: '2.5rem',
                fontWeight: 300,
              }}
            >
              Explore our collection and visit Gujarat Wallpaper &amp; Decor in Surat.
            </p>

            <div className="contact-banner-actions" style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem' }}>
              <a
                href="#enquiry-form"
                style={{
                  backgroundColor: colors.accentGold,
                  color: isDark ? '#141312' : '#FFFFFF',
                  padding: '0.9rem 2.25rem',
                  borderRadius: '4px',
                  fontWeight: 600,
                  fontSize: '0.82rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = isDark ? '#DFCAAD' : '#8D6B3C')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = colors.accentGold)}
              >
                <span>Get in Touch</span>
                <ArrowUpRight size={15} />
              </a>

              <button
                onClick={() => {
                  const el = document.getElementById('showroom-location');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                style={{
                  borderColor: isDark ? 'rgba(247, 244, 238, 0.3)' : 'rgba(28, 25, 23, 0.2)',
                  color: isDark ? '#F7F4EE' : '#1C1917',
                  backgroundColor: 'transparent',
                  border: `1px solid ${isDark ? 'rgba(247, 244, 238, 0.3)' : 'rgba(28, 25, 23, 0.2)'}`,
                  padding: '0.9rem 2.25rem',
                  borderRadius: '4px',
                  fontWeight: 500,
                  fontSize: '0.82rem',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = colors.accentGold)}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = isDark ? 'rgba(247, 244, 238, 0.3)' : 'rgba(28, 25, 23, 0.2)')}
              >
                <span>Visit Showroom</span>
              </button>
            </div>
          </div>
        </div>

        {/* Two-Column Form & Location Section */}
        <div
          id="enquiry-form"
          className="contact-enquiry-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '4rem',
            alignItems: 'start',
          }}
        >
          {/* Left: Contact Form */}
          <div
            style={{
              gridColumn: 'span 7',
              backgroundColor: isDark ? 'rgba(24, 22, 20, 0.85)' : '#FFFFFF',
              backdropFilter: 'blur(16px)',
              padding: '3.5rem',
              borderRadius: '12px',
              border: `1px solid ${isDark ? 'rgba(197, 168, 128, 0.22)' : 'rgba(166, 131, 83, 0.2)'}`,
              boxShadow: colors.boxShadow,
              transition: 'all 0.35s ease',
            }}
            className="contact-form-card"
          >
            <div className="sub-tag" style={{ color: colors.accentGold, marginBottom: '0.5rem' }}>
              Consultation Request
            </div>
            <h3
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: '2.2rem',
                color: colors.textPrimary,
                marginBottom: '0.75rem',
                fontWeight: 600,
                lineHeight: 1.15,
              }}
            >
              Schedule a Design Consultation
            </h3>
            <p style={{ fontSize: '0.92rem', color: colors.textSecondary, marginBottom: '2rem', lineHeight: 1.6, fontWeight: 300 }}>
              Share your project details with our showroom consultants in Surat for sample viewing or personalized surface recommendations.
            </p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{
                  padding: '2.5rem',
                  backgroundColor: isDark ? 'rgba(31, 30, 27, 0.8)' : '#F4EFEA',
                  borderRadius: '8px',
                  textAlign: 'center',
                  border: `1px solid ${colors.borderSubtle}`,
                }}
              >
                <CheckCircle2 size={42} color={colors.accentGold} style={{ margin: '0 auto 1rem' }} />
                <h4 style={{ fontSize: '1.4rem', color: colors.textPrimary, marginBottom: '0.5rem' }}>
                  Thank You, {formData.name}
                </h4>
                <p style={{ fontSize: '0.9rem', color: colors.textSecondary, marginBottom: '1.5rem', lineHeight: 1.5 }}>
                  Your enquiry for <strong>{formData.category}</strong> has been received. Our Surat showroom concierge will get in touch with you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  style={{
                    fontSize: '0.78rem',
                    padding: '0.65rem 1.6rem',
                    backgroundColor: colors.accentGold,
                    color: isDark ? '#141312' : '#FFFFFF',
                    borderRadius: '4px',
                    border: 'none',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    cursor: 'pointer',
                  }}
                >
                  Send Another Enquiry
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.35rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.25rem' }} className="form-row">
                  <div>
                    <label style={{ display: 'block', fontSize: '0.74rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: colors.textSecondary, marginBottom: '0.45rem' }}>
                      Your Name <span style={{ color: colors.accentGold }}>*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rajesh Shah"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.85rem 1rem',
                        borderRadius: '6px',
                        border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.12)'}`,
                        backgroundColor: isDark ? 'rgba(255, 255, 255, 0.04)' : '#FAF8F5',
                        color: colors.textPrimary,
                        fontSize: '0.9rem',
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        outline: 'none',
                        transition: 'border-color 0.25s ease, box-shadow 0.25s ease',
                      }}
                      onFocus={(e) => (e.target.style.borderColor = colors.accentGold)}
                      onBlur={(e) => (e.target.style.borderColor = isDark ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.12)')}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.74rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: colors.textSecondary, marginBottom: '0.45rem' }}>
                      Phone / WhatsApp <span style={{ color: colors.accentGold }}>*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 98XXX XXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.85rem 1rem',
                        borderRadius: '6px',
                        border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.12)'}`,
                        backgroundColor: isDark ? 'rgba(255, 255, 255, 0.04)' : '#FAF8F5',
                        color: colors.textPrimary,
                        fontSize: '0.9rem',
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        outline: 'none',
                        transition: 'border-color 0.25s ease, box-shadow 0.25s ease',
                      }}
                      onFocus={(e) => (e.target.style.borderColor = colors.accentGold)}
                      onBlur={(e) => (e.target.style.borderColor = isDark ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.12)')}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.25rem' }} className="form-row">
                  <div>
                    <label style={{ display: 'block', fontSize: '0.74rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: colors.textSecondary, marginBottom: '0.45rem' }}>
                      Product Category
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.85rem 1rem',
                        borderRadius: '6px',
                        border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.12)'}`,
                        backgroundColor: isDark ? 'rgba(255, 255, 255, 0.04)' : '#FAF8F5',
                        color: colors.textPrimary,
                        fontSize: '0.9rem',
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        outline: 'none',
                        cursor: 'pointer',
                        transition: 'border-color 0.25s ease',
                      }}
                      onFocus={(e) => (e.target.style.borderColor = colors.accentGold)}
                      onBlur={(e) => (e.target.style.borderColor = isDark ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.12)')}
                    >
                      <option value="Wallpapers" style={{ background: isDark ? '#1C1A18' : '#FFFFFF', color: isDark ? '#F7F4EE' : '#1C1917' }}>Wallpapers</option>
                      <option value="PVC Wall Panels" style={{ background: isDark ? '#1C1A18' : '#FFFFFF', color: isDark ? '#F7F4EE' : '#1C1917' }}>PVC Wall Panels</option>
                      <option value="Carpets" style={{ background: isDark ? '#1C1A18' : '#FFFFFF', color: isDark ? '#F7F4EE' : '#1C1917' }}>Carpets</option>
                      <option value="Artificial Turf / Grass" style={{ background: isDark ? '#1C1A18' : '#FFFFFF', color: isDark ? '#F7F4EE' : '#1C1917' }}>Artificial Turf / Grass</option>
                      <option value="Wall Decor" style={{ background: isDark ? '#1C1A18' : '#FFFFFF', color: isDark ? '#F7F4EE' : '#1C1917' }}>Wall Decor</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.74rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: colors.textSecondary, marginBottom: '0.45rem' }}>
                      Space Type
                    </label>
                    <select
                      value={formData.spaceType}
                      onChange={(e) => setFormData({ ...formData, spaceType: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.85rem 1rem',
                        borderRadius: '6px',
                        border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.12)'}`,
                        backgroundColor: isDark ? 'rgba(255, 255, 255, 0.04)' : '#FAF8F5',
                        color: colors.textPrimary,
                        fontSize: '0.9rem',
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        outline: 'none',
                        cursor: 'pointer',
                        transition: 'border-color 0.25s ease',
                      }}
                      onFocus={(e) => (e.target.style.borderColor = colors.accentGold)}
                      onBlur={(e) => (e.target.style.borderColor = isDark ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.12)')}
                    >
                      <option value="Residential Apartment" style={{ background: isDark ? '#1C1A18' : '#FFFFFF', color: isDark ? '#F7F4EE' : '#1C1917' }}>Residential Apartment / Penthouse</option>
                      <option value="Luxury Villa" style={{ background: isDark ? '#1C1A18' : '#FFFFFF', color: isDark ? '#F7F4EE' : '#1C1917' }}>Luxury Bungalow / Villa</option>
                      <option value="Commercial Office" style={{ background: isDark ? '#1C1A18' : '#FFFFFF', color: isDark ? '#F7F4EE' : '#1C1917' }}>Commercial Office / Cabin</option>
                      <option value="Showroom & Retail" style={{ background: isDark ? '#1C1A18' : '#FFFFFF', color: isDark ? '#F7F4EE' : '#1C1917' }}>Showroom &amp; Retail Space</option>
                      <option value="Hospitality" style={{ background: isDark ? '#1C1A18' : '#FFFFFF', color: isDark ? '#F7F4EE' : '#1C1917' }}>Hotel / Restaurant</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.74rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: colors.textSecondary, marginBottom: '0.45rem' }}>
                    Project Notes / Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your room dimensions, preferred colors, or desired textures..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem',
                      borderRadius: '6px',
                      border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.12)'}`,
                      backgroundColor: isDark ? 'rgba(255, 255, 255, 0.04)' : '#FAF8F5',
                      color: colors.textPrimary,
                      fontSize: '0.9rem',
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      outline: 'none',
                      resize: 'vertical',
                      lineHeight: 1.5,
                      transition: 'border-color 0.25s ease',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = colors.accentGold)}
                    onBlur={(e) => (e.target.style.borderColor = isDark ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.12)')}
                  />
                </div>

                <div className="contact-form-actions" style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '0.5rem' }}>
                  <button
                    type="submit"
                    style={{
                      flex: 1,
                      backgroundColor: colors.accentGold,
                      color: isDark ? '#141312' : '#FFFFFF',
                      padding: '0.95rem 1.8rem',
                      borderRadius: '6px',
                      border: 'none',
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem',
                      boxShadow: isDark ? '0 4px 16px rgba(197, 168, 128, 0.25)' : '0 4px 16px rgba(166, 131, 83, 0.25)',
                      transition: 'all 0.3s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = isDark ? '#DFCAAD' : '#8D6B3C')}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = colors.accentGold)}
                  >
                    <Send size={15} />
                    <span>Submit Enquiry</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppDirect}
                    style={{
                      padding: '0.95rem 1.5rem',
                      borderRadius: '6px',
                      backgroundColor: isDark ? 'rgba(37, 211, 102, 0.12)' : 'rgba(37, 211, 102, 0.1)',
                      border: '1px solid rgba(37, 211, 102, 0.35)',
                      color: isDark ? '#25D366' : '#1E7E34',
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.55rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      cursor: 'pointer',
                      transition: 'all 0.25s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#25D366';
                      e.currentTarget.style.color = '#FFFFFF';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = isDark ? 'rgba(37, 211, 102, 0.12)' : 'rgba(37, 211, 102, 0.1)';
                      e.currentTarget.style.color = isDark ? '#25D366' : '#1E7E34';
                    }}
                    title="Direct WhatsApp Consultation"
                  >
                    <MessageCircle size={16} />
                    <span>WhatsApp</span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right: Showroom Details & Location */}
          <div
            id="showroom-location"
            style={{
              gridColumn: 'span 5',
              display: 'flex',
              flexDirection: 'column',
              gap: '2.5rem',
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
                  fontSize: '2.2rem', 
                  color: colors.textPrimary, 
                  marginBottom: '1rem',
                  fontWeight: 600,
                }}
              >
                Surat Experience Center
              </h3>
              <p style={{ fontSize: '0.95rem', color: colors.textSecondary, lineHeight: 1.6 }}>
                Experience our full-scale installed wall panels, tactile wallpaper sample books, and luxury carpet textures in person.
              </p>
            </div>

            {/* Info Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1rem',
                  padding: '1.25rem',
                  backgroundColor: colors.cardBg,
                  borderRadius: '6px',
                  border: `1px solid ${colors.borderSubtle}`,
                  boxShadow: colors.boxShadow,
                }}
              >
                <MapPin size={20} color={colors.accentGold} style={{ marginTop: '2px', flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: colors.textMuted, fontWeight: 600, marginBottom: '0.2rem' }}>
                    Showroom Address
                  </div>
                  <div style={{ fontSize: '0.95rem', color: colors.textPrimary, fontWeight: 500 }}>
                    {SHOWROOM_INFO.contactPlaceholder.address}
                  </div>
                  <div style={{ fontSize: '0.82rem', color: colors.accentGold, marginTop: '0.25rem' }}>
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
                  borderRadius: '6px',
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
                    {SHOWROOM_INFO.contactPlaceholder.hours}
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
                  borderRadius: '6px',
                  border: `1px solid ${colors.borderSubtle}`,
                  boxShadow: colors.boxShadow,
                }}
              >
                <Phone size={20} color={colors.accentGold} style={{ marginTop: '2px', flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: colors.textMuted, fontWeight: 600, marginBottom: '0.2rem' }}>
                    Contact Phone
                  </div>
                  <div style={{ fontSize: '0.92rem', color: colors.textPrimary, fontWeight: 500 }}>
                    +91 9265785158 / 8320802633
                  </div>
                  <div style={{ fontSize: '0.8rem', color: colors.accentGold, marginTop: '0.25rem' }}>
                    Instagram: @gujrat_wallpaper_decor
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
            gap: 3rem !important;
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
          .form-row {
            grid-template-columns: 1fr !important;
            gap: 1.15rem !important;
          }
        }

        @media (max-width: 768px) {
          #contact {
            padding: 3rem 0 4.5rem 0 !important;
          }
          .contact-top-banner {
            margin-bottom: 2.5rem !important;
          }
          .contact-enquiry-grid {
            gap: 2.5rem !important;
          }
          .contact-form-card {
            padding: 2rem 1.25rem !important;
          }
        }

        @media (max-width: 480px) {
          #contact {
            padding: 2rem 0 3.5rem 0 !important;
          }
          .contact-top-banner {
            margin-bottom: 2rem !important;
            padding: 2rem 1.25rem !important;
          }
          .contact-cta-wallpaper {
            display: none !important;
          }
          .contact-form-card {
            padding: 1.75rem 1.15rem !important;
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
          .contact-form-actions {
            flex-direction: column !important;
            gap: 0.75rem !important;
          }
          .contact-form-actions button {
            width: 100% !important;
            justify-content: center !important;
          }
        }
      `}</style>
    </section>
  );
}
