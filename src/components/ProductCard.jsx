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
    cardBg: '#FFFFFF',
    textPrimary: '#2F2F2F',
    textSecondary: '#5A5652',
    accentWalnut: '#7A5A3A',
    accentGold: '#C8A96A',
    borderSubtle: 'rgba(122, 90, 58, 0.14)',
    btnDetailsBg: '#F8F5F1',
    btnDetailsHover: '#E7D7BE',
    btnEnquireBg: '#7A5A3A',
    btnEnquireText: '#FFFFFF',
    boxShadow: '0 10px 28px rgba(122, 90, 58, 0.08)',
  };

  return (
    <div
      style={{
        backgroundColor: colors.cardBg,
        borderRadius: '24px',
        overflow: 'hidden',
        border: `1px solid ${colors.borderSubtle}`,
        boxShadow: colors.boxShadow,
        display: 'flex',
        flexDirection: 'column',
        transition: 'box-shadow 0.35s ease, transform 0.35s ease, border-color 0.35s ease',
      }}
      className="product-card"
    >
      {/* Product Image Container */}
      <div
        style={{
          position: 'relative',
          aspectRatio: '1/1',
          overflow: 'hidden',
          backgroundColor: '#E7D7BE',
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
            backgroundColor: 'rgba(248, 245, 241, 0.92)',
            backdropFilter: 'blur(6px)',
            color: '#7A5A3A',
            fontSize: '0.7rem',
            fontWeight: 700,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            padding: '0.35rem 0.75rem',
            borderRadius: '20px',
            border: '1px solid rgba(122, 90, 58, 0.2)',
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
            backgroundColor: 'rgba(47, 47, 47, 0.35)',
            backdropFilter: 'blur(3px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: 0,
            transition: 'opacity 0.3s ease',
          }}
        >
          <span
            style={{
              backgroundColor: '#F8F5F1',
              color: '#2F2F2F',
              padding: '0.6rem 1.25rem',
              borderRadius: '9999px',
              fontSize: '0.78rem',
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              boxShadow: '0 6px 20px rgba(0,0,0,0.15)',
            }}
          >
            <Eye size={14} /> View Details
          </span>
        </div>
      </div>

      {/* Product Content Details */}
      <div
        style={{
          padding: '1.6rem',
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
        }}
      >
        <div
          style={{
            fontSize: '0.74rem',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: colors.accentWalnut,
            fontWeight: 700,
            marginBottom: '0.4rem',
          }}
        >
          {product.subcategory}
        </div>

        <h3
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: '1.4rem',
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
            fontSize: '0.88rem',
            color: colors.textSecondary,
            lineHeight: 1.55,
            marginBottom: '1.4rem',
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
            paddingTop: '1.1rem',
          }}
        >
          <button
            onClick={handleCardClick}
            style={{
              flex: 1,
              padding: '0.7rem 0.9rem',
              fontSize: '0.8rem',
              fontWeight: 600,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              color: colors.textPrimary,
              backgroundColor: colors.btnDetailsBg,
              borderRadius: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.35rem',
              transition: 'all 0.25s ease',
              border: `1px solid ${colors.borderSubtle}`,
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = colors.btnDetailsHover)}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = colors.btnDetailsBg)}
          >
            <span>View Details</span>
            <ArrowUpRight size={14} />
          </button>

          <button
            onClick={handleEnquireClick}
            style={{
              padding: '0.7rem 1.1rem',
              fontSize: '0.8rem',
              fontWeight: 600,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              color: colors.btnEnquireText,
              backgroundColor: colors.btnEnquireBg,
              borderRadius: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.35rem',
              transition: 'all 0.25s ease',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 4px 12px rgba(122, 90, 58, 0.25)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#5E4329';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = colors.btnEnquireBg;
            }}
            title="Enquire via Showroom Concierge"
          >
            <MessageCircle size={14} />
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
