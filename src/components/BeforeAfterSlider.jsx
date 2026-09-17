import React, { useState, useRef, useCallback, useEffect } from 'react';

/**
 * BeforeAfterSlider
 * High-performance, lightweight before/after image comparison slider.
 * Supports mouse drag, pointer capture, touch drag, and keyboard navigation.
 */
export default function BeforeAfterSlider({
  beforeImage,
  beforeFallback,
  afterImage,
  afterFallback,
  beforeAlt = 'Before transformation',
  afterAlt = 'After transformation',
  title = 'Room transformation',
  initialPosition = 50,
  aspectRatio = '4 / 3',
}) {
  const [sliderPos, setSliderPos] = useState(initialPosition);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const calculatePosition = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percent);
  }, []);

  const handlePointerDown = (e) => {
    // Only respond to main button
    if (e.button !== 0 && e.pointerType === 'mouse') return;
    setIsDragging(true);
    e.currentTarget.setPointerCapture(e.pointerId);
    calculatePosition(e.clientX);
  };

  const handlePointerMove = (e) => {
    if (!isDragging) return;
    calculatePosition(e.clientX);
  };

  const handlePointerUp = (e) => {
    if (isDragging) {
      setIsDragging(false);
      try {
        e.currentTarget.releasePointerCapture(e.pointerId);
      } catch {
        // ignore if already released
      }
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') {
      e.preventDefault();
      setSliderPos((prev) => Math.max(0, prev - 4));
    } else if (e.key === 'ArrowRight' || e.key === 'ArrowUp') {
      e.preventDefault();
      setSliderPos((prev) => Math.min(100, prev + 4));
    } else if (e.key === 'Home') {
      e.preventDefault();
      setSliderPos(0);
    } else if (e.key === 'End') {
      e.preventDefault();
      setSliderPos(100);
    }
  };

  return (
    <div
      ref={containerRef}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      onKeyDown={handleKeyDown}
      role="slider"
      tabIndex={0}
      aria-label={`Before and After comparison slider for ${title}`}
      aria-valuenow={Math.round(sliderPos)}
      aria-valuemin={0}
      aria-valuemax={100}
      style={{
        position: 'relative',
        width: '100%',
        aspectRatio: aspectRatio,
        overflow: 'hidden',
        borderRadius: '16px',
        backgroundColor: '#1E1B18',
        cursor: isDragging ? 'ew-resize' : 'ew-resize',
        userSelect: 'none',
        WebkitUserSelect: 'none',
        touchAction: 'none',
        outline: 'none',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
      }}
    >
      {/* 1. AFTER IMAGE (Base Layer: full container) */}
      <picture style={{ width: '100%', height: '100%' }}>
        {afterImage && <source type="image/webp" srcSet={afterImage} />}
        <img
          src={afterFallback || afterImage}
          alt={afterAlt}
          loading="lazy"
          decoding="async"
          draggable={false}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            pointerEvents: 'none',
            display: 'block',
          }}
        />
      </picture>

      {/* 2. BEFORE IMAGE (Top Layer: clipped from 0% to sliderPos%) */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          clipPath: `inset(0 ${100 - sliderPos}% 0 0)`,
          WebkitClipPath: `inset(0 ${100 - sliderPos}% 0 0)`,
          pointerEvents: 'none',
          willChange: isDragging ? 'clip-path' : 'auto',
        }}
      >
        <picture style={{ width: '100%', height: '100%' }}>
          {beforeImage && <source type="image/webp" srcSet={beforeImage} />}
          <img
            src={beforeFallback || beforeImage}
            alt={beforeAlt}
            loading="lazy"
            decoding="async"
            draggable={false}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              pointerEvents: 'none',
              display: 'block',
            }}
          />
        </picture>
      </div>

      {/* 3. FLOATING BADGES: "BEFORE" on top-left, "AFTER" on top-right */}
      <div
        style={{
          position: 'absolute',
          top: '14px',
          left: '14px',
          pointerEvents: 'none',
          zIndex: 3,
        }}
      >
        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            padding: '4px 10px',
            backgroundColor: 'rgba(28, 25, 23, 0.72)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            color: '#FFFFFF',
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '0.12em',
            borderRadius: '6px',
            textTransform: 'uppercase',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.25)',
          }}
        >
          BEFORE
        </span>
      </div>

      <div
        style={{
          position: 'absolute',
          top: '14px',
          right: '14px',
          pointerEvents: 'none',
          zIndex: 3,
        }}
      >
        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            padding: '4px 10px',
            backgroundColor: 'rgba(28, 25, 23, 0.72)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            color: '#FFFFFF',
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '0.12em',
            borderRadius: '6px',
            textTransform: 'uppercase',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.25)',
          }}
        >
          AFTER
        </span>
      </div>

      {/* 4. VERTICAL SLIDER DIVIDER LINE */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: `${sliderPos}%`,
          width: '2px',
          backgroundColor: '#FFFFFF',
          boxShadow: '0 0 8px rgba(0, 0, 0, 0.45)',
          zIndex: 4,
          pointerEvents: 'none',
          transform: 'translateX(-50%)',
          willChange: isDragging ? 'left' : 'auto',
        }}
      />

      {/* 5. CIRCULAR DRAG HANDLE */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: `${sliderPos}%`,
          transform: 'translate(-50%, -50%)',
          width: '36px',
          height: '36px',
          borderRadius: '50%',
          backgroundColor: '#FFFFFF',
          border: '1px solid rgba(122, 90, 58, 0.25)',
          boxShadow: isDragging
            ? '0 0 0 4px rgba(200, 169, 106, 0.4), 0 4px 14px rgba(0, 0, 0, 0.3)'
            : '0 4px 14px rgba(0, 0, 0, 0.25)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 5,
          pointerEvents: 'none',
          transition: 'box-shadow 0.2s ease, transform 0.2s ease',
          scale: isDragging ? '1.08' : '1',
          willChange: isDragging ? 'left' : 'auto',
        }}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#2F2F2F"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ opacity: 0.85 }}
        >
          <polyline points="8 7 3 12 8 17" />
          <polyline points="16 7 21 12 16 17" />
        </svg>
      </div>
    </div>
  );
}
