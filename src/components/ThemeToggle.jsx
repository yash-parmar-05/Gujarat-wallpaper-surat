import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle({ variant = 'desktop' }) {
  const { theme, toggleTheme, isDark } = useTheme();

  // Mobile Navbar Icon Button (Placed next to hamburger menu)
  if (variant === 'mobile-nav') {
    return (
      <button
        onClick={toggleTheme}
        aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
        title={`Switch to ${isDark ? 'Light' : 'Dark'} mode`}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '42px',
          height: '42px',
          borderRadius: '4px',
          backgroundColor: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.05)',
          border: isDark ? '1px solid rgba(255, 255, 255, 0.12)' : '1px solid rgba(0, 0, 0, 0.12)',
          color: isDark ? '#C5A880' : '#A68353',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
        }}
      >
        {isDark ? <Sun size={19} color="#C5A880" /> : <Moon size={19} color="#A68353" />}
      </button>
    );
  }

  if (variant === 'mobile') {
    return (
      <button
        onClick={toggleTheme}
        aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.6rem',
          padding: '0.85rem 1.25rem',
          backgroundColor: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)',
          border: isDark ? '1px solid rgba(197, 168, 128, 0.25)' : '1px solid rgba(166, 131, 83, 0.3)',
          borderRadius: '8px',
          color: isDark ? '#F7F4EE' : '#1C1917',
          cursor: 'pointer',
          fontSize: '0.85rem',
          fontWeight: 600,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          transition: 'all 0.3s ease',
        }}
      >
        {isDark ? <Sun size={18} color="#C5A880" /> : <Moon size={18} color="#A68353" />}
        <span>Switch to {isDark ? 'Light Mode' : 'Dark Mode'}</span>
      </button>
    );
  }

  // Desktop Luxury Toggle
  return (
    <button
      onClick={toggleTheme}
      aria-label={`Current theme is ${theme}. Click to switch to ${isDark ? 'light' : 'dark'} theme.`}
      title={`Switch to ${isDark ? 'Light' : 'Dark'} mode`}
      style={{
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.45rem',
        padding: '0.42rem 0.8rem',
        backgroundColor: isDark ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.05)',
        border: isDark ? '1px solid rgba(197, 168, 128, 0.35)' : '1px solid rgba(166, 131, 83, 0.4)',
        borderRadius: '9999px',
        cursor: 'pointer',
        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = isDark ? '#C5A880' : '#A68353';
        e.currentTarget.style.transform = 'translateY(-1px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = isDark ? 'rgba(197, 168, 128, 0.35)' : 'rgba(166, 131, 83, 0.4)';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      {/* Mini Toggle Track with Active Dot Indicator */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.35rem',
          fontSize: '0.72rem',
          fontWeight: 600,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color: isDark ? '#F7F4EE' : '#1C1917',
        }}
      >
        {isDark ? (
          <>
            <Moon size={14} color="#C5A880" />
            <span>☾ DARK</span>
          </>
        ) : (
          <>
            <Sun size={14} color="#A68353" />
            <span>☀ LIGHT</span>
          </>
        )}
      </div>

      {/* Subtle indicator pill */}
      <div
        style={{
          width: '7px',
          height: '7px',
          borderRadius: '50%',
          backgroundColor: isDark ? '#C5A880' : '#A68353',
          boxShadow: isDark ? '0 0 8px #C5A880' : '0 0 6px #A68353',
        }}
      />
    </button>
  );
}
