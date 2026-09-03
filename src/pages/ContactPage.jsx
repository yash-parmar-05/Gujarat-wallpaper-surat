import React, { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import Contact from '../components/Contact';
import { PRODUCTS } from '../data/products';
import { useTheme } from '../context/ThemeContext';

export default function ContactPage() {
  const [searchParams] = useSearchParams();
  const productId = searchParams.get('product');
  const { isDark } = useTheme();

  const prefilledProduct = useMemo(() => {
    if (!productId) return null;
    return PRODUCTS.find((p) => p.id === productId) || null;
  }, [productId]);

  return (
    <div className="contact-page-container" style={{ paddingTop: '80px', backgroundColor: isDark ? '#121110' : '#FAF8F5', minHeight: '100vh', transition: 'background-color 0.35s ease' }}>
      <Contact prefilledProduct={prefilledProduct} />
      <style>{`
        @media (max-width: 768px) {
          .contact-page-container {
            padding-top: 65px !important;
          }
        }
      `}</style>
    </div>
  );
}
