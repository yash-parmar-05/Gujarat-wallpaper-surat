import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function NotFoundPage() {
  const { isDark } = useTheme();

  const bg = isDark ? '#121110' : '#FBF9F5';
  const textPrimary = isDark ? '#F7F4EE' : '#1C1917';
  const textSecondary = isDark ? '#C8C2B7' : '#57534E';
  const gold = isDark ? '#C5A880' : '#A68353';

  return (
    <div
      style={{
        minHeight: '85vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: bg,
        color: textPrimary,
        padding: '8rem 2rem 5rem',
        textAlign: 'center',
        transition: 'background-color 0.35s ease, color 0.3s ease',
      }}
    >
      <div style={{ maxWidth: '620px' }}>
        <div
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: 'clamp(5rem, 12vw, 9rem)',
            fontWeight: 300,
            lineHeight: 1,
            color: gold,
            marginBottom: '1rem',
          }}
        >
          404
        </div>

        <div
          style={{
            fontSize: '0.8rem',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: gold,
            marginBottom: '1.25rem',
          }}
        >
          Page Not Found
        </div>

        <h1
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: 'clamp(2rem, 3.5vw, 3rem)',
            color: textPrimary,
            marginBottom: '1.5rem',
            lineHeight: 1.15,
          }}
        >
          The Surface You Are Looking For Does Not Exist
        </h1>

        <p
          style={{
            fontSize: '1rem',
            color: textSecondary,
            lineHeight: 1.65,
            marginBottom: '3rem',
            fontWeight: 300,
          }}
        >
          The link you followed may be expired or the address may have been mistyped. Allow us to direct you back to our curated showroom collections.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
          <Link
            to="/home"
            className="btn-primary"
            style={{
              backgroundColor: gold,
              color: isDark ? '#141312' : '#FFFFFF',
              borderColor: gold,
              padding: '0.9rem 2.25rem',
            }}
          >
            <span>Return to Home</span>
            <ArrowUpRight size={16} />
          </Link>

          <Link
            to="/products"
            className="btn-secondary"
            style={{
              borderColor: isDark ? 'rgba(247, 244, 238, 0.3)' : 'rgba(28, 25, 23, 0.2)',
              color: textPrimary,
              padding: '0.9rem 2.25rem',
            }}
          >
            <span>Browse Products</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
