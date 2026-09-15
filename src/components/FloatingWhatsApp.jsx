import React, { useState, useEffect } from 'react';

/**
 * Business WhatsApp Configuration
 * Official Gujarat Wallpaper & Decor WhatsApp Enquiry Number
 */
const WHATSAPP_PHONE_NUMBER = '918320802633';
const PREFILLED_MESSAGE =
  'Hello Gujarat Wallpaper & Decor, I would like to enquire about your wallpaper and decor collection.';

export default function FloatingWhatsApp() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // 1. Expand automatically into compact pill after a short delay (1.8s)
    const timer = setTimeout(() => {
      setIsExpanded(true);
    }, 1800);

    // 2. Or expand immediately when visitor scrolls
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsExpanded(true);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encodeURIComponent(
    PREFILLED_MESSAGE
  )}`;

  const expanded = isExpanded || isHovered;

  return (
    <>
      <style>{`
        /* ============================================================
           FLOATING WHATSAPP CTA - LUXURY INTERACTIVE & MOTION SYSTEM
           ============================================================ */

        /* 1. Periodic Attention & Breathing Glow Keyframes (7s cycle) */
        @keyframes whatsappAttentionPulse {
          0% {
            transform: scale(1);
            box-shadow: 0 10px 28px rgba(37, 211, 102, 0.36), 0 0 16px rgba(37, 211, 102, 0.18), 0 2px 8px rgba(0, 0, 0, 0.1);
          }
          45% {
            transform: scale(1);
            box-shadow: 0 10px 30px rgba(37, 211, 102, 0.42), 0 0 24px rgba(37, 211, 102, 0.28), 0 2px 8px rgba(0, 0, 0, 0.1);
          }
          88% {
            transform: scale(1);
            box-shadow: 0 10px 28px rgba(37, 211, 102, 0.36), 0 0 18px rgba(37, 211, 102, 0.2), 0 2px 8px rgba(0, 0, 0, 0.1);
          }
          94% {
            transform: scale(1.035);
            box-shadow: 0 14px 36px rgba(37, 211, 102, 0.55), 0 0 32px rgba(37, 211, 102, 0.38), 0 4px 12px rgba(0, 0, 0, 0.14);
          }
          100% {
            transform: scale(1);
            box-shadow: 0 10px 28px rgba(37, 211, 102, 0.36), 0 0 16px rgba(37, 211, 102, 0.18), 0 2px 8px rgba(0, 0, 0, 0.1);
          }
        }

        /* 2. Micro Icon Subtle Pulse & Rotation during attention sequence */
        @keyframes whatsappIconAttention {
          0%, 88% {
            transform: scale(1) rotate(0deg);
          }
          93% {
            transform: scale(1.06) rotate(2.5deg);
          }
          96% {
            transform: scale(1.03) rotate(-1.5deg);
          }
          100% {
            transform: scale(1) rotate(0deg);
          }
        }

        /* 3. Occasional Micro Glass Highlight Sweep */
        @keyframes whatsappGlassShine {
          0%, 87% {
            transform: translateX(-140%) rotate(25deg);
            opacity: 0;
          }
          89% {
            opacity: 1;
          }
          97% {
            transform: translateX(240%) rotate(25deg);
            opacity: 1;
          }
          98%, 100% {
            transform: translateX(240%) rotate(25deg);
            opacity: 0;
          }
        }

        /* Main CTA Root Button */
        .floating-whatsapp-btn {
          position: fixed;
          bottom: 28px;
          right: 28px;
          height: 62px;
          width: 62px;
          border-radius: 9999px;
          background: linear-gradient(135deg, #25D366 0%, #1EBE5D 100%);
          color: #FFFFFF;
          display: inline-flex;
          align-items: center;
          text-decoration: none;
          z-index: 995;
          cursor: pointer;
          -webkit-tap-highlight-color: transparent;
          outline: none;
          overflow: hidden;
          box-sizing: border-box;
          padding: 0;
          /* Idle Animation */
          animation: whatsappAttentionPulse 7s cubic-bezier(0.4, 0, 0.2, 1) infinite;
          will-change: transform, box-shadow, width;
          transition: width 0.42s cubic-bezier(0.16, 1, 0.3, 1),
                      padding 0.42s cubic-bezier(0.16, 1, 0.3, 1),
                      transform 0.28s cubic-bezier(0.16, 1, 0.3, 1),
                      box-shadow 0.28s cubic-bezier(0.16, 1, 0.3, 1),
                      background 0.28s ease;
        }

        /* Micro Glass Shine Overlay */
        .floating-whatsapp-btn::after {
          content: '';
          position: absolute;
          top: -60%;
          left: 0;
          width: 65%;
          height: 220%;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(255, 255, 255, 0.2) 50%,
            transparent 100%
          );
          pointer-events: none;
          animation: whatsappGlassShine 7s ease-in-out infinite;
        }

        /* Expanded Pill State */
        .floating-whatsapp-btn.is-expanded {
          width: 236px;
          padding: 0 18px 0 15px;
          gap: 12px;
        }

        /* Desktop Hover: Smooth Scale, Deeper Glow & Paused Pulse */
        @media (hover: hover) and (pointer: fine) {
          .floating-whatsapp-btn:hover {
            animation-play-state: paused;
            transform: scale(1.04) translateY(-2px);
            box-shadow: 0 16px 40px rgba(37, 211, 102, 0.55), 0 0 36px rgba(37, 211, 102, 0.38), 0 4px 12px rgba(0, 0, 0, 0.15);
            background: linear-gradient(135deg, #28E06C 0%, #1DA851 100%);
          }

          .floating-whatsapp-btn:hover .floating-whatsapp-arrow {
            transform: translateX(4px);
          }

          .floating-whatsapp-btn:hover .floating-whatsapp-label-main {
            text-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);
          }

          .floating-whatsapp-btn:hover .floating-whatsapp-label-sub {
            color: #FFFFFF;
            opacity: 1;
          }
        }

        /* Click / Tap Active Tactical Feedback (140ms duration) */
        .floating-whatsapp-btn:active {
          transform: scale(0.96) !important;
          box-shadow: 0 6px 18px rgba(37, 211, 102, 0.35) !important;
          transition: transform 0.14s ease, box-shadow 0.14s ease !important;
        }

        /* Keyboard Accessibility Focus */
        .floating-whatsapp-btn:focus-visible {
          outline: 3px solid #7A5A3A;
          outline-offset: 3px;
        }

        /* Icon Wrapper & Periodic Attention Motion */
        .floating-whatsapp-icon-wrap {
          width: 62px;
          height: 62px;
          min-width: 62px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: width 0.42s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .floating-whatsapp-btn.is-expanded .floating-whatsapp-icon-wrap {
          width: 32px;
          height: 32px;
          min-width: 32px;
        }

        .floating-whatsapp-icon-svg {
          display: block;
          animation: whatsappIconAttention 7s cubic-bezier(0.4, 0, 0.2, 1) infinite;
          transform-origin: center center;
          will-change: transform;
        }

        .floating-whatsapp-btn:hover .floating-whatsapp-icon-svg {
          animation-play-state: paused;
        }

        /* Text Block Presentation */
        .floating-whatsapp-text {
          display: flex;
          flex-direction: column;
          white-space: nowrap;
          pointer-events: none;
          opacity: 0;
          transform: translateX(8px);
          transition: opacity 0.3s cubic-bezier(0.16, 1, 0.3, 1) 0.1s,
                      transform 0.3s cubic-bezier(0.16, 1, 0.3, 1) 0.1s;
        }

        .floating-whatsapp-btn.is-expanded .floating-whatsapp-text {
          opacity: 1;
          transform: translateX(0);
        }

        .floating-whatsapp-label-sub {
          font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: rgba(255, 255, 255, 0.92);
          line-height: 1.15;
          margin-bottom: 2px;
          transition: color 0.25s ease, opacity 0.25s ease;
        }

        .floating-whatsapp-label-main {
          font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
          font-size: 13.5px;
          font-weight: 700;
          color: #FFFFFF;
          line-height: 1.2;
          display: flex;
          align-items: center;
          gap: 4px;
          transition: text-shadow 0.25s ease;
        }

        .floating-whatsapp-arrow {
          transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          display: inline-block;
        }

        /* Mobile Calibration */
        @media (max-width: 640px) {
          .floating-whatsapp-btn {
            height: 54px;
            width: 54px;
            bottom: calc(20px + env(safe-area-inset-bottom, 0px));
            right: 18px;
          }

          .floating-whatsapp-icon-wrap {
            width: 54px;
            height: 54px;
            min-width: 54px;
          }

          .floating-whatsapp-icon-wrap svg {
            width: 28px;
            height: 28px;
          }

          .floating-whatsapp-btn.is-expanded {
            width: 206px;
            padding: 0 14px 0 12px;
            gap: 10px;
          }

          .floating-whatsapp-btn.is-expanded .floating-whatsapp-icon-wrap {
            width: 28px;
            height: 28px;
            min-width: 28px;
          }

          .floating-whatsapp-label-sub {
            font-size: 10px;
            letter-spacing: 0.06em;
          }

          .floating-whatsapp-label-main {
            font-size: 12.5px;
          }
        }

        /* Reduced Motion Accessibility */
        @media (prefers-reduced-motion: reduce) {
          .floating-whatsapp-btn,
          .floating-whatsapp-btn::after,
          .floating-whatsapp-icon-svg,
          .floating-whatsapp-arrow {
            animation: none !important;
            transition: none !important;
            transform: none !important;
          }
        }
      `}</style>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`floating-whatsapp-btn ${expanded ? 'is-expanded' : ''}`}
        aria-label="Chat with Gujarat Wallpaper & Decor on WhatsApp"
        title="Chat with Gujarat Wallpaper & Decor on WhatsApp"
        id="global-floating-whatsapp"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* WhatsApp Icon */}
        <div className="floating-whatsapp-icon-wrap">
          <svg
            viewBox="0 0 24 24"
            width="32"
            height="32"
            fill="#FFFFFF"
            aria-hidden="true"
            className="floating-whatsapp-icon-svg"
          >
            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.68 12.04 3.68C14.25 3.68 16.31 4.54 17.87 6.1C19.42 7.66 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.05 20.15ZM16.56 14.37C16.31 14.25 15.1 13.65 14.88 13.57C14.65 13.49 14.49 13.45 14.33 13.69C14.16 13.94 13.69 14.49 13.55 14.65C13.41 14.82 13.26 14.84 13.01 14.72C12.76 14.59 11.97 14.33 11.02 13.49C10.28 12.83 9.78 12.02 9.64 11.77C9.5 11.52 9.62 11.39 9.75 11.26C9.86 11.15 10 10.97 10.12 10.83C10.24 10.68 10.28 10.58 10.36 10.42C10.44 10.25 10.4 10.11 10.34 9.99C10.28 9.86 9.78 8.64 9.58 8.13C9.38 7.64 9.17 7.71 9.02 7.7C8.87 7.69 8.71 7.69 8.54 7.69C8.38 7.69 8.11 7.75 7.89 7.99C7.66 8.24 7.03 8.83 7.03 10.03C7.03 11.24 7.91 12.4 8.03 12.56C8.16 12.73 9.75 15.17 12.19 16.22C12.77 16.47 13.22 16.62 13.57 16.73C14.15 16.92 14.68 16.89 15.1 16.83C15.57 16.76 16.54 16.24 16.74 15.67C16.95 15.1 16.95 14.61 16.88 14.49C16.82 14.37 16.81 14.5 16.56 14.37Z" />
          </svg>
        </div>

        {/* Expanded Content: Need Help? Chat on WhatsApp → */}
        <div className="floating-whatsapp-text">
          <span className="floating-whatsapp-label-sub">Need Help?</span>
          <span className="floating-whatsapp-label-main">
            Chat on WhatsApp <span className="floating-whatsapp-arrow">→</span>
          </span>
        </div>
      </a>
    </>
  );
}
