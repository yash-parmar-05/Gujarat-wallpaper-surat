import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout() {
  const location = useLocation();

  return (
    <div style={{ position: 'relative', width: '100%', overflowX: 'hidden', backgroundColor: 'var(--bg-primary, #F8F5F1)', color: 'var(--text-primary, #2F2F2F)', minHeight: '100vh' }}>
      <Navbar />
      <main>
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.38,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <Outlet />
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
