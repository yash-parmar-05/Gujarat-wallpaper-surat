import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function NotFoundPage() {
  const { isDark } = useTheme();

  const bg = '#F8F5F1';
  const textPrimary = '#2F2F2F';
  const textSecondary = '#5A5652';
  const walnut = '#7A5A3A';
  const gold = '#C8A96A';

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
            fontWeight: 400,
            lineHeight: 1,
            color: walnut,
            marginBottom: '1rem',
          }}
        >
          404
        </div>

        <div
          style={{
            fontSize: '0.82rem',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: walnut,
            marginBottom: '1.25rem',
            fontWeight: 700,
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
            fontWeight: 600,
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
            fontWeight: 400,
          }}
        >
          The link you followed may be expired or the address may have been mistyped. Allow us to direct you back to our curated showroom collections.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
          <Link
            to="/home"
            className="btn-primary"
            style={{
              backgroundColor: walnut,
              color: '#FFFFFF',
              borderColor: walnut,
              padding: '0.95rem 2.5rem',
              borderRadius: '24px',
              boxShadow: '0 8px 24px rgba(122, 90, 58, 0.25)',
            }}
          >
            <span>Return to Home</span>
            <ArrowUpRight size={16} />
          </Link>

          <Link
            to="/products"
            className="btn-secondary"
            style={{
              borderColor: 'rgba(122, 90, 58, 0.25)',
              color: textPrimary,
              padding: '0.95rem 2.5rem',
              borderRadius: '24px',
              backgroundColor: '#FFFFFF',
            }}
          >
            <span>Browse Products</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
