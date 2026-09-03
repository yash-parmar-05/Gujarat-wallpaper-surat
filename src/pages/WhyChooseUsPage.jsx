import React from 'react';
import WhyChooseUs from '../components/WhyChooseUs';
import { useTheme } from '../context/ThemeContext';

export default function WhyChooseUsPage() {
  const { isDark } = useTheme();

  return (
    <div style={{ paddingTop: '80px', backgroundColor: isDark ? '#121110' : '#FBF9F5', minHeight: '100vh', transition: 'background-color 0.35s ease' }}>
      <WhyChooseUs />
    </div>
  );
}
