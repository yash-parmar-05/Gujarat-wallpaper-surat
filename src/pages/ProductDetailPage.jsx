import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  MessageCircle, 
  ShieldCheck, 
  Layers, 
  ArrowUpRight, 
  ChevronRight
} from 'lucide-react';
import { PRODUCTS } from '../data/products';
import ProductCard from '../components/ProductCard';
import { useTheme } from '../context/ThemeContext';

export default function ProductDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeImageView, setActiveImageView] = useState('card');
  const { isDark } = useTheme();

  const product = PRODUCTS.find((p) => p.id === id);

  const colors = {
    bgPage: '#F8F5F1',
    cardBg: '#FFFFFF',
    textPrimary: '#2F2F2F',
    textSecondary: '#5A5652',
    textMuted: '#7A7570',
    accentWalnut: '#7A5A3A',
    accentGold: '#C8A96A',
    borderSubtle: 'rgba(122, 90, 58, 0.14)',
    matrixBg: '#E7D7BE',
    boxShadow: '0 16px 40px rgba(122, 90, 58, 0.08)',
  };

  if (!product) {
    return (
      <div
        style={{
          minHeight: '80vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '8rem 2rem 4rem',
          textAlign: 'center',
          backgroundColor: colors.bgPage,
        }}
      >
        <span style={{ fontSize: '0.85rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: colors.accentWalnut, marginBottom: '1rem', fontWeight: 700 }}>
          Product Not Found
        </span>
        <h1
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            color: colors.textPrimary,
            marginBottom: '1rem',
            fontWeight: 600,
          }}
        >
          Product ID "{id}" Unavailable
        </h1>
        <p style={{ fontSize: '1rem', color: colors.textSecondary, maxWidth: '500px', marginBottom: '2.5rem', lineHeight: 1.6 }}>
          The requested product piece could not be located in our current catalog. Please browse our collections to find similar luxury surface solutions.
        </p>
        <Link to="/products" className="btn-primary" style={{ backgroundColor: colors.accentWalnut, color: '#FFFFFF', border: 'none', borderRadius: '24px', padding: '1rem 2rem' }}>
          <span>Return to Products</span>
          <ArrowUpRight size={16} />
        </Link>
      </div>
    );
  }

  const currentImage = activeImageView === 'showcase' && product.showcaseImage
    ? product.showcaseImage
    : product.image;

  // Related products from same category
  const relatedProducts = PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 3);

  const handleEnquire = () => {
    navigate(`/contact?product=${encodeURIComponent(product.id)}`);
  };

  return (
    <div style={{ paddingTop: '100px', backgroundColor: colors.bgPage, minHeight: '100vh', transition: 'background-color 0.35s ease' }}>
      <div className="container-luxury" style={{ paddingBottom: '6rem' }}>
        {/* Navigation Breadcrumbs & Back Button */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '1.5rem 0',
            marginBottom: '2rem',
            borderBottom: `1px solid ${colors.borderSubtle}`,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.84rem' }}>
            <Link to="/home" style={{ color: colors.textSecondary, textDecoration: 'none', fontWeight: 500 }}>Home</Link>
            <ChevronRight size={14} color={colors.textMuted} />
            <Link to="/products" style={{ color: colors.textSecondary, textDecoration: 'none', fontWeight: 500 }}>Products</Link>
            <ChevronRight size={14} color={colors.textMuted} />
            <span style={{ color: colors.accentWalnut, fontWeight: 700 }}>{product.name}</span>
          </div>

          <button
            onClick={() => navigate(-1)}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontSize: '0.8rem',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: colors.accentWalnut,
              backgroundColor: 'transparent',
              border: 'none',
              cursor: 'pointer',
              fontWeight: 700,
            }}
          >
            <ArrowLeft size={16} />
            <span>Back</span>
          </button>
        </div>

        {/* Main Product Presentation Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '3.5rem',
            backgroundColor: colors.cardBg,
            borderRadius: '24px',
            border: `1px solid ${colors.borderSubtle}`,
            overflow: 'hidden',
            boxShadow: colors.boxShadow,
            marginBottom: '6rem',
            transition: 'all 0.35s ease',
          }}
          className="product-detail-grid"
        >
          {/* Image Showcase Column */}
          <div
            style={{
              gridColumn: 'span 6',
              position: 'relative',
              backgroundColor: '#E7D7BE',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              minHeight: '520px',
            }}
            className="product-detail-img-col"
          >
            <img
              src={currentImage}
              alt={product.name}
              style={{
                width: '100%',
                height: '100%',
                maxHeight: '640px',
                objectFit: 'cover',
                display: 'block',
              }}
            />

            {/* View Selector Switcher if showcaseImage exists */}
            {product.showcaseImage && (
              <div
                style={{
                  position: 'absolute',
                  bottom: '1.5rem',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  backgroundColor: 'rgba(248, 245, 241, 0.92)',
                  backdropFilter: 'blur(8px)',
                  padding: '0.4rem',
                  borderRadius: '9999px',
                  border: '1px solid rgba(122, 90, 58, 0.25)',
                  zIndex: 2,
                  boxShadow: '0 4px 14px rgba(122, 90, 58, 0.15)',
                }}
              >
                <button
                  onClick={() => setActiveImageView('card')}
                  style={{
                    padding: '0.45rem 1.1rem',
                    borderRadius: '9999px',
                    fontSize: '0.74rem',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: activeImageView === 'card' ? '#FFFFFF' : '#5A5652',
                    backgroundColor: activeImageView === 'card' ? colors.accentWalnut : 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                >
                  Detail View
                </button>
                <button
                  onClick={() => setActiveImageView('showcase')}
                  style={{
                    padding: '0.45rem 1.1rem',
                    borderRadius: '9999px',
                    fontSize: '0.74rem',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: activeImageView === 'showcase' ? '#FFFFFF' : '#5A5652',
                    backgroundColor: activeImageView === 'showcase' ? colors.accentWalnut : 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                >
                  Interior Spread
                </button>
              </div>
            )}
          </div>

          {/* Product Info Column */}
          <div
            style={{
              gridColumn: 'span 6',
              padding: '4rem 3.5rem',
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: colors.cardBg,
            }}
            className="product-detail-info-col"
          >
            {/* Category / Subcategory Path */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.75rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: colors.accentWalnut,
                fontWeight: 700,
                marginBottom: '0.75rem',
              }}
            >
              <span>{product.category}</span>
              <span>/</span>
              <span>{product.subcategory}</span>
            </div>

            {/* Product Title */}
            <h1
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: 'clamp(2.2rem, 3.2vw, 3.2rem)',
                color: colors.textPrimary,
                marginBottom: '1.25rem',
                lineHeight: 1.12,
                fontWeight: 600,
                letterSpacing: '-0.02em',
              }}
            >
              {product.name}
            </h1>

            {/* Product Description */}
            <p
              style={{
                fontSize: '1rem',
                color: colors.textSecondary,
                lineHeight: 1.7,
                marginBottom: '2rem',
                fontWeight: 400,
              }}
            >
              {product.description}
            </p>

            {/* Specifications Matrix */}
            {product.specifications && (
              <div
                style={{
                  backgroundColor: colors.matrixBg,
                  borderRadius: '20px',
                  padding: '1.6rem',
                  marginBottom: '2rem',
                  border: `1px solid ${colors.borderSubtle}`,
                }}
              >
                <div
                  style={{
                    fontSize: '0.75rem',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: colors.textPrimary,
                    fontWeight: 700,
                    marginBottom: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                  }}
                >
                  <Layers size={16} color={colors.accentWalnut} /> Specifications &amp; Architectural Application
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.1rem', fontSize: '0.85rem' }}>
                  {Object.entries(product.specifications).map(([key, val]) => (
                    <div key={key} style={{ gridColumn: key === 'recommendedSpaces' ? 'span 2' : 'span 1' }}>
                      <div style={{ textTransform: 'capitalize', color: colors.textMuted, fontSize: '0.72rem', letterSpacing: '0.05em', fontWeight: 600 }}>
                        {key.replace(/([A-Z])/g, ' $1')}
                      </div>
                      <div style={{ color: colors.textPrimary, fontWeight: 600, marginTop: '2px' }}>{val}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Showroom Assurance */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                fontSize: '0.88rem',
                color: colors.textSecondary,
                marginBottom: '2.5rem',
                fontWeight: 400,
              }}
            >
              <ShieldCheck size={18} color={colors.accentWalnut} />
              <span>Available for private viewings &amp; material swatches at our Surat showroom.</span>
            </div>

            {/* Action Buttons */}
            <div
              className="product-detail-action-btns"
              style={{
                marginTop: 'auto',
                display: 'flex',
                alignItems: 'center',
                gap: '1.25rem',
                flexWrap: 'wrap',
              }}
            >
              <button
                onClick={handleEnquire}
                style={{
                  flex: 1,
                  backgroundColor: colors.accentWalnut,
                  color: '#FFFFFF',
                  padding: '1.05rem 2rem',
                  borderRadius: '24px',
                  border: 'none',
                  fontWeight: 600,
                  fontSize: '0.88rem',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  boxShadow: '0 8px 24px rgba(122, 90, 58, 0.25)',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#5E4329';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = colors.accentWalnut;
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <MessageCircle size={18} />
                <span>Enquire for Project</span>
              </button>

              <button
                onClick={() => navigate('/products')}
                style={{ 
                  padding: '1.05rem 2rem',
                  backgroundColor: 'transparent',
                  color: colors.textPrimary,
                  border: `1px solid ${colors.borderSubtle}`,
                  borderRadius: '24px',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = colors.accentWalnut;
                  e.currentTarget.style.color = colors.accentWalnut;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = colors.borderSubtle;
                  e.currentTarget.style.color = colors.textPrimary;
                }}
              >
                All Products
              </button>
            </div>
          </div>
        </div>

        {/* Related Products Section */}
        {relatedProducts.length > 0 && (
          <div>
            <div style={{ marginBottom: '2.5rem' }}>
              <div className="sub-tag" style={{ color: colors.accentGold, marginBottom: '0.5rem' }}>
                Curated Companions
              </div>
              <h2
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: '2.5rem',
                  color: colors.textPrimary,
                }}
              >
                More in {product.category}
              </h2>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                gap: '2rem',
              }}
            >
              {relatedProducts.map((rel) => (
                <ProductCard
                  key={rel.id}
                  product={rel}
                  onViewDetails={() => navigate(`/products/${rel.id}`)}
                  onEnquire={() => navigate(`/contact?product=${encodeURIComponent(rel.id)}`)}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 992px) {
          .product-detail-grid {
            display: flex !important;
            flex-direction: column !important;
            width: 100% !important;
          }
          .product-detail-grid .product-detail-img-col {
            width: 100% !important;
            min-height: 350px !important;
          }
          .product-detail-grid .product-detail-info-col {
            width: 100% !important;
            padding: 2.5rem 1.75rem !important;
          }
        }

        @media (max-width: 640px) {
          .product-detail-grid .product-detail-img-col {
            min-height: 280px !important;
          }
          .product-detail-grid .product-detail-info-col {
            padding: 2rem 1.25rem !important;
          }
        }

        @media (max-width: 480px) {
          .product-detail-grid .product-detail-info-col {
            padding: 1.75rem 1rem !important;
          }
          .product-detail-action-btns {
            flex-direction: column !important;
            gap: 0.75rem !important;
          }
          .product-detail-action-btns button {
            width: 100% !important;
          }
        }
      `}</style>
    </div>
  );
}
