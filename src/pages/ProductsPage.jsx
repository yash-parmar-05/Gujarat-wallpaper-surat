import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import ProductExplorer from '../components/ProductExplorer';
import ShowcaseSection from '../components/ShowcaseSection';
import CinematicScroll from '../components/CinematicScroll';
import ProductModal from '../components/ProductModal';
import { PRODUCTS } from '../data/products';

export default function ProductsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const categoryParam = searchParams.get('category') || 'All';
  const [selectedCategory, setSelectedCategory] = useState(categoryParam);
  const [activeModalProduct, setActiveModalProduct] = useState(null);

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) {
      setSelectedCategory(cat);
    }
  }, [searchParams]);

  const handleCategorySelect = (categoryName) => {
    setSelectedCategory(categoryName);
    setSearchParams({ category: categoryName });
  };

  const handleViewDetails = (product) => {
    navigate(`/products/${product.id}`);
  };

  const handleEnquire = (product) => {
    navigate(`/contact?product=${encodeURIComponent(product.id)}`);
  };

  return (
    <div style={{ paddingTop: '80px', backgroundColor: '#F8F5F1', minHeight: '100vh', transition: 'background-color 0.35s ease' }}>
      {/* Functional Product Explorer */}
      <ProductExplorer
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategorySelect}
        onViewDetails={handleViewDetails}
        onEnquire={handleEnquire}
      />

      {/* 3. Cinematic Moment */}
      <CinematicScroll
        image="/assets/products/wallpaper-showcase.jpg"
        subtext="Surface Philosophy"
        quote="Walls That Define Your Space"
        author="Gujarat Wallpaper & Decor Editorial"
      />

      {/* 4. Showcase Section */}
      <ShowcaseSection
        onExploreCategory={handleCategorySelect}
        onOpenProductByName={(name) => {
          const p = PRODUCTS.find((item) => item.name.includes(name));
          if (p) handleViewDetails(p);
        }}
      />

      {/* Quick Modal fallback if triggered */}
      {activeModalProduct && (
        <ProductModal
          product={activeModalProduct}
          onClose={() => setActiveModalProduct(null)}
          onEnquire={handleEnquire}
        />
      )}
    </div>
  );
}
