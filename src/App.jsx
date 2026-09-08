import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Lenis from 'lenis';

import ScrollToTop from './components/ScrollToTop';
import Preloader from './components/Preloader';
import Layout from './components/Layout';

import Home from './pages/Home';
import CatalogsPage from './pages/CatalogsPage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import GalleryPage from './pages/GalleryPage';
import OurWorkPage from './pages/OurWorkPage';
import WhyChooseUsPage from './pages/WhyChooseUsPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';
import { ThemeProvider } from './context/ThemeContext';

export default function App() {
  const [initialLoading, setInitialLoading] = useState(true);

  // Initial site load timer — ensures fonts & assets are ready only once on first load
  useEffect(() => {
    let isMounted = true;
    const maxTimer = setTimeout(() => {
      if (isMounted) setInitialLoading(false);
    }, 800);

    const fontsPromise = document.fonts ? document.fonts.ready.catch(() => {}) : Promise.resolve();

    fontsPromise.then(() => {
      if (isMounted) {
        setInitialLoading(false);
      }
    });

    return () => {
      isMounted = false;
      clearTimeout(maxTimer);
    };
  }, []);

  useEffect(() => {
    // Check if device is mobile or touch device
    const isTouchOrMobile = window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 1024;
    
    // If mobile/touch, use ultra-responsive native browser momentum scrolling (zero lag)
    if (isTouchOrMobile) {
      return;
    }

    // Initialize Lenis smooth scroll for Desktop/Laptop only
    const lenis = new Lenis({
      duration: 1.0,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.0,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <ThemeProvider>
      {/* Site-wide preloader runs only once on initial website visit */}
      <Preloader isLoading={initialLoading} />

      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route element={<Layout />}>
            {/* Root redirect to /home */}
            <Route path="/" element={<Navigate to="/home" replace />} />

            {/* Individual Page Routes */}
            <Route path="/home" element={<Home />} />
            <Route path="/catalogs" element={<CatalogsPage />} />
            <Route path="/collections" element={<Navigate to="/catalogs" replace />} />
            <Route path="/products" element={<Navigate to="/catalogs" replace />} />
            <Route path="/products/:id" element={<Navigate to="/catalogs" replace />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/our-work" element={<OurWorkPage />} />
            <Route path="/why-choose-us" element={<WhyChooseUsPage />} />

            <Route path="/contact" element={<ContactPage />} />

            {/* 404 Fallback */}
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
