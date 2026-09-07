import React, { useEffect } from 'react';
import OurWork from '../components/OurWork';
import { useTheme } from '../context/ThemeContext';

export default function OurWorkPage() {
  const { isDark } = useTheme();

  useEffect(() => {
    document.title = 'Our Work | Gujarat Wallpaper & Decor — Surat';
  }, []);

  return (
    <div style={{ paddingTop: '80px', backgroundColor: isDark ? '#121110' : '#FBF9F5', minHeight: '100vh', transition: 'background-color 0.35s ease' }}>
      <OurWork id="our-work-page" />
    </div>
  );
}
