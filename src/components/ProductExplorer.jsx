import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, Search, SlidersHorizontal, Sparkles } from 'lucide-react';
import ProductCard from './ProductCard';
import { PRODUCTS } from '../data/products';
import { useTheme } from '../context/ThemeContext';

export default function ProductExplorer({ 
  selectedCategory, 
  onCategoryChange,
  onViewDetails, 
  onEnquire 
}) {
  const [activeSubcategory, setActiveSubcategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const { isDark } = useTheme();

  const colors = {
    bgSection: '#F8F5F1',
    textPrimary: '#2F2F2F',
    textSecondary: '#5A5652',
    textMuted: '#7A7570',
    accentWalnut: '#7A5A3A',
    accentGold: '#C8A96A',
    cardBg: '#FFFFFF',
    inputBg: '#FFFFFF',
    borderSubtle: 'rgba(122, 90, 58, 0.14)',
    borderInput: 'rgba(122, 90, 58, 0.22)',
  };

  const mainCategories = [
    'All',
    'Wallpapers',
    'PVC Wall Panels',
    'Carpets',
    'Artificial Turf / Grass',
    'Wall Decor',
  ];

  const wallpaperSubcategories = [
    'All',
    'Designer Wallpapers',
    'Decorative Wallpapers',
    'PVC Wallpapers',
    '3D Wallpapers',
    'Textured Wallpapers',
    'Floral / Nature Wallpapers',
    'Marble Wallpapers',
  ];

  // Handle main category switch
  const handleCategorySelect = (cat) => {
    onCategoryChange(cat);
    setActiveSubcategory('All'); // Reset subcategory filter when switching main category
  };

  // Filtered Products Calculation
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // 1. Main Category filter
      const matchesCategory =
        selectedCategory === 'All' || product.category === selectedCategory;

      // 2. Subcategory filter (active when Wallpapers or any specific category is selected)
      const matchesSubcategory =
        activeSubcategory === 'All' ||
        product.subcategory.toLowerCase() === activeSubcategory.toLowerCase() ||
        product.subcategory.toLowerCase().includes(activeSubcategory.toLowerCase().replace(' wallpapers', ''));

      // 3. Search query filter
      const matchesSearch =
        searchQuery.trim() === '' ||
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.subcategory.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSubcategory && matchesSearch;
    });
  }, [selectedCategory, activeSubcategory, searchQuery]);

  return (
    <section
      id="explorer"
      style={{
        padding: '7.5rem 0',
        backgroundColor: colors.bgSection,
        position: 'relative',
        transition: 'background-color 0.35s ease',
      }}
    >
      <div className="container-luxury">
        {/* Section Header */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            gap: '2rem',
            marginBottom: '3.5rem',
          }}
        >
          <div style={{ maxWidth: '650px' }}>
            <div className="sub-tag" style={{ color: colors.accentWalnut, marginBottom: '0.75rem', fontWeight: 700 }}>
              Showroom Catalog
            </div>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: 'clamp(2.25rem, 4.5vw, 3.75rem)',
                color: colors.textPrimary,
                marginBottom: '1rem',
                fontWeight: 600,
                letterSpacing: '-0.02em',
                lineHeight: 1.1,
              }}
            >
              Product Explorer
            </h2>
            <p style={{ fontSize: '1.05rem', color: colors.textSecondary, lineHeight: 1.7, fontWeight: 400 }}>
              Browse our complete library of wallpapers, 3D architectural panels, designer carpets, and landscape turf available for immediate specification in Surat.
            </p>
          </div>

          {/* Search Box */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '340px',
            }}
          >
            <input
              type="text"
              placeholder="Search finishes, textures..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '0.85rem 1.25rem 0.85rem 2.85rem',
                borderRadius: '24px',
                border: `1px solid ${colors.borderInput}`,
                backgroundColor: colors.inputBg,
                fontSize: '0.88rem',
                color: colors.textPrimary,
                outline: 'none',
                transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
                boxShadow: '0 4px 14px rgba(122, 90, 58, 0.05)',
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = colors.accentWalnut;
                e.currentTarget.style.boxShadow = '0 6px 18px rgba(122, 90, 58, 0.12)';
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = colors.borderInput;
                e.currentTarget.style.boxShadow = '0 4px 14px rgba(122, 90, 58, 0.05)';
              }}
            />
            <Search
              size={18}
              color={colors.accentWalnut}
              style={{
                position: 'absolute',
                left: '1.1rem',
                top: '50%',
                transform: 'translateY(-50%)',
                pointerEvents: 'none',
              }}
            />
          </div>
        </div>

        {/* Main Category Filter Buttons */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            overflowX: 'auto',
            WebkitOverflowScrolling: 'touch',
            paddingBottom: '0.85rem',
            marginBottom: '2rem',
            scrollbarWidth: 'none',
            flexWrap: 'nowrap',
          }}
          className="no-scrollbar"
        >
          {mainCategories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => handleCategorySelect(cat)}
                style={{
                  padding: '0.8rem 1.75rem',
                  borderRadius: '24px',
                  fontSize: '0.84rem',
                  fontWeight: 600,
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  whiteSpace: 'nowrap',
                  flexShrink: 0,
                  minWidth: 'max-content',
                  cursor: 'pointer',
                  transition: 'background-color 0.25s ease, color 0.25s ease, border-color 0.25s ease, transform 0.2s ease',
                  backgroundColor: isActive ? colors.accentWalnut : '#FFFFFF',
                  color: isActive ? '#FFFFFF' : '#5A5652',
                  border: isActive ? `1px solid ${colors.accentWalnut}` : `1px solid ${colors.borderSubtle}`,
                  boxShadow: isActive ? '0 6px 18px rgba(122, 90, 58, 0.25)' : '0 2px 8px rgba(0, 0, 0, 0.03)',
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Subcategory Secondary Filters (Active when Wallpapers is chosen) */}
        <AnimatePresence>
          {selectedCategory === 'Wallpapers' && (
            <motion.div
              key="wallpaper-subcategories"
              initial={{ opacity: 0, height: 0, y: -10 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -10 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              style={{
                overflow: 'hidden',
                backgroundColor: '#E7D7BE',
                padding: '1.25rem 1.5rem',
                borderRadius: '20px',
                marginBottom: '2.5rem',
                border: `1px solid ${colors.borderSubtle}`,
                boxShadow: '0 8px 24px rgba(122, 90, 58, 0.06)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                  fontSize: '0.74rem',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: colors.accentWalnut,
                  fontWeight: 700,
                  marginBottom: '0.85rem',
                }}
              >
                <SlidersHorizontal size={14} color={colors.accentWalnut} />
                <span>Wallpaper Styles &amp; Finishes</span>
              </div>

              <div
                style={{
                  display: 'flex',
                  flexWrap: 'nowrap',
                  overflowX: 'auto',
                  WebkitOverflowScrolling: 'touch',
                  gap: '0.6rem',
                  paddingBottom: '0.35rem',
                }}
                className="no-scrollbar"
              >
                {wallpaperSubcategories.map((sub) => {
                  const isSubActive = activeSubcategory === sub;
                  return (
                    <button
                      key={sub}
                      onClick={() => setActiveSubcategory(sub)}
                      style={{
                        padding: '0.5rem 1.15rem',
                        borderRadius: '9999px',
                        fontSize: '0.78rem',
                        fontWeight: 600,
                        whiteSpace: 'nowrap',
                        flexShrink: 0,
                        minWidth: 'max-content',
                        backgroundColor: isSubActive ? colors.accentWalnut : '#FFFFFF',
                        color: isSubActive ? '#FFFFFF' : '#5A5652',
                        border: isSubActive ? `1px solid ${colors.accentWalnut}` : `1px solid ${colors.borderSubtle}`,
                        boxShadow: isSubActive ? '0 4px 12px rgba(122, 90, 58, 0.25)' : 'none',
                        transition: 'all 0.2s ease',
                        cursor: 'pointer',
                      }}
                    >
                      {sub}
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Results Counter */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '2rem',
            fontSize: '0.82rem',
            color: colors.textSecondary,
          }}
        >
          <div>
            Showing <strong style={{ color: colors.textPrimary }}>{filteredProducts.length}</strong> luxury products
            {selectedCategory !== 'All' && <span> in <strong style={{ color: colors.textPrimary }}>{selectedCategory}</strong></span>}
            {activeSubcategory !== 'All' && <span> (Filtered: {activeSubcategory})</span>}
          </div>

          {(selectedCategory !== 'All' || activeSubcategory !== 'All' || searchQuery !== '') && (
            <button
              onClick={() => {
                onCategoryChange('All');
                setActiveSubcategory('All');
                setSearchQuery('');
              }}
              style={{
                backgroundColor: 'transparent',
                border: 'none',
                color: colors.accentGold,
                fontSize: '0.8rem',
                cursor: 'pointer',
                textDecoration: 'underline',
              }}
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length > 0 ? (
          <motion.div
            key={`${selectedCategory}-${activeSubcategory}-${searchQuery ? 'search' : 'all'}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '2rem',
            }}
            className="product-explorer-grid"
          >
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onViewDetails={onViewDetails}
                onEnquire={onEnquire}
              />
            ))}
          </motion.div>
        ) : (
          <div
            style={{
              padding: '5rem 2rem',
              textAlign: 'center',
              backgroundColor: '#FFFFFF',
              borderRadius: '8px',
              border: '1px dashed rgba(28, 25, 23, 0.15)',
            }}
          >
            <p style={{ fontSize: '1.25rem', color: '#1C1917', marginBottom: '0.5rem', fontFamily: "'Cormorant Garamond', serif" }}>
              No products found matching your current filter.
            </p>
            <p style={{ fontSize: '0.85rem', color: '#78716C', marginBottom: '1.5rem' }}>
              Try clearing your search or selecting a different category.
            </p>
            <button
              onClick={() => {
                onCategoryChange('All');
                setActiveSubcategory('All');
                setSearchQuery('');
              }}
              className="btn-primary"
              style={{ padding: '0.75rem 1.75rem' }}
            >
              Show All Collections
            </button>
          </div>
        )}
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        @media (max-width: 768px) {
          #explorer {
            padding: 4rem 0 !important;
          }
          .product-explorer-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 1.25rem !important;
          }
        }
        @media (max-width: 520px) {
          .product-explorer-grid {
            grid-template-columns: 1fr !important;
            gap: 1.25rem !important;
          }
        }
      `}</style>
    </section>
  );
}
