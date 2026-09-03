import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Eye, MessageCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

export default function ProductCard({ product, onViewDetails, onEnquire }) {
  const navigate = useNavigate();
  const { isDark } = useTheme();

  const handleCardClick = () => {
    if (onViewDetails) {
      onViewDetails(product);
    } else {
      navigate(`/products/${product.id}`);
    }
  };

  const handleEnquireClick = (e) => {
    e.stopPropagation();
    if (onEnquire) {
      onEnquire(product);
    } else {
      navigate(`/contact?product=${encodeURIComponent(product.id)}`);
    }
  };

  const colors = {
    cardBg: isDark ? '#171614' : '#FFFFFF',
    textPrimary: isDark ? '#F7F4EE' : '#1C1917',
    textSecondary: isDark ? '#C8C2B7' : '#78716C',
    accentGold: isDark ? '#C5A880' : '#A68353',
    borderSubtle: isDark ? 'rgba(245, 242, 236, 0.08)' : 'rgba(28, 25, 23, 0.08)',
    btnDetailsBg: isDark ? '#22201D' : '#F4EFEA',
    btnDetailsHover: isDark ? '#2C2A26' : '#EAE3D9',
    btnEnquireBg: isDark ? '#C5A880' : '#1C1917',
    btnEnquireText: isDark ? '#141312' : '#FFFFFF',
    boxShadow: isDark ? '0 8px 24px rgba(0, 0, 0, 0.4)' : '0 4px 20px rgba(0, 0, 0, 0.03)',
  };

  return (
    <div
      style={{
        backgroundColor: colors.cardBg,
        borderRadius: '8px',
        overflow: 'hidden',
        border: `1px solid ${colors.borderSubtle}`,
        boxShadow: colors.boxShadow,
        display: 'flex',
        flexDirection: 'column',
        transition: 'box-shadow 0.3s ease, transform 0.3s ease, border-color 0.3s ease, background-color 0.3s ease',
      }}
      className="product-card"
    >
      {/* Product Image Container */}
      <div
        style={{
          position: 'relative',
          aspectRatio: '1/1',
          overflow: 'hidden',
          backgroundColor: '#EAE3D9',
          cursor: 'pointer',
        }}
        onClick={handleCardClick}
      >
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
          className="product-card-img"
        />

        {/* Floating Category Badge */}
        <div
          style={{
            position: 'absolute',
            top: '0.85rem',
            left: '0.85rem',
            backgroundColor: 'rgba(20, 19, 18, 0.75)',
            backdropFilter: 'blur(6px)',
            color: '#F7F4EE',
            fontSize: '0.68rem',
            fontWeight: 500,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            padding: '0.3rem 0.65rem',
            borderRadius: '4px',
            border: '1px solid rgba(255, 255, 255, 0.12)',
          }}
        >
          {product.category}
        </div>

        {/* Quick View Floating Action */}
        <div
          className="quick-view-overlay"
          style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'rgba(20, 19, 18, 0.35)',
            backdropFilter: 'blur(2px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: 0,
            transition: 'opacity 0.3s ease',
          }}
        >
          <span
            style={{
              backgroundColor: '#F7F4EE',
              color: '#141312',
              padding: '0.55rem 1.1rem',
              borderRadius: '9999px',
              fontSize: '0.75rem',
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
            }}
          >
            <Eye size={14} /> View Details
          </span>
        </div>
      </div>

      {/* Product Content Details */}
      <div
        style={{
          padding: '1.5rem',
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
        }}
      >
        <div
          style={{
            fontSize: '0.72rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: colors.accentGold,
            fontWeight: 600,
            marginBottom: '0.35rem',
          }}
        >
          {product.subcategory}
        </div>

        <h3
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: '1.35rem',
            color: colors.textPrimary,
            marginBottom: '0.5rem',
            fontWeight: 600,
            lineHeight: 1.25,
            cursor: 'pointer',
          }}
          onClick={handleCardClick}
        >
          {product.name}
        </h3>

        <p
          style={{
            fontSize: '0.86rem',
            color: colors.textSecondary,
            lineHeight: 1.5,
            marginBottom: '1.25rem',
            fontWeight: 400,
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {product.description}
        </p>

        {/* Action Buttons */}
        <div
          style={{
            marginTop: 'auto',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            borderTop: `1px solid ${colors.borderSubtle}`,
            paddingTop: '1rem',
          }}
        >
          <button
            onClick={handleCardClick}
            style={{
              flex: 1,
              padding: '0.6rem 0.8rem',
              fontSize: '0.78rem',
              fontWeight: 600,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              color: colors.textPrimary,
              backgroundColor: colors.btnDetailsBg,
              borderRadius: '4px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.35rem',
              transition: 'all 0.25s ease',
              border: 'none',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = colors.btnDetailsHover)}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = colors.btnDetailsBg)}
          >
            <span>View Details</span>
            <ArrowUpRight size={13} />
          </button>

          <button
            onClick={handleEnquireClick}
            style={{
              padding: '0.6rem 0.9rem',
              fontSize: '0.78rem',
              fontWeight: 600,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              color: colors.btnEnquireText,
              backgroundColor: colors.btnEnquireBg,
              borderRadius: '4px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.35rem',
              transition: 'all 0.25s ease',
              border: 'none',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = isDark ? '#DFCAAD' : '#8D6B3C';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = colors.btnEnquireBg;
            }}
            title="Enquire via Showroom Concierge"
          >
            <MessageCircle size={13} />
            <span>Enquire</span>
          </button>
        </div>
      </div>

      <style>{`
        .product-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08) !important;
        }
        .product-card:hover .product-card-img {
          transform: scale(1.06);
        }
        .product-card:hover .quick-view-overlay {
          opacity: 1 !important;
        }
      `}</style>
    </div>
  );
}
