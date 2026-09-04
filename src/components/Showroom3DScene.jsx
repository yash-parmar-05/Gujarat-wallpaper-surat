import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { useTheme } from '../context/ThemeContext';

export default function Showroom3DScene() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const { isDark } = useTheme();
  const sceneElementsRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    let width = container.clientWidth || 600;
    let height = container.clientHeight || 550;

    // 1. Scene
    const scene = new THREE.Scene();

    // 2. Camera
    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100);
    camera.position.set(0, 0.2, 5.2);

    // 3. Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;

    // 4. Lighting Setup (Showroom Atmospheric Lighting)
    const ambientLight = new THREE.AmbientLight(0xf5efe6, 0.9);
    scene.add(ambientLight);

    const warmSpot = new THREE.SpotLight(0xffe6c2, 4.2);
    warmSpot.position.set(2.5, 4.5, 3.5);
    warmSpot.angle = Math.PI / 4.5;
    warmSpot.penumbra = 0.6;
    scene.add(warmSpot);

    const goldAccentLight = new THREE.PointLight(0xc5a880, 2.8, 8);
    goldAccentLight.position.set(-2, 1, 2);
    scene.add(goldAccentLight);

    const rimLight = new THREE.DirectionalLight(0xe5dfd3, 1.4);
    rimLight.position.set(-3, 3, -2);
    scene.add(rimLight);

    // 5. 3D Showroom Architecture Group
    const showroomGroup = new THREE.Group();
    scene.add(showroomGroup);

    // Texture Loader
    const textureLoader = new THREE.TextureLoader();

    // A. Main Architectural Wall (Backdrop)
    const backWallGeo = new THREE.PlaneGeometry(7, 4.5);
    const backWallMat = new THREE.MeshStandardMaterial({
      color: 0x181715,
      roughness: 0.85,
      metalness: 0.1,
    });
    const backWall = new THREE.Mesh(backWallGeo, backWallMat);
    backWall.position.set(0, 0, -1.8);
    showroomGroup.add(backWall);

    // B. Fluted PVC Panel Slat Accent (Vertical Wooden/Gold Fluting)
    const slatGroup = new THREE.Group();
    const slatGeo = new THREE.BoxGeometry(0.045, 3.6, 0.045);
    const slatMat = new THREE.MeshStandardMaterial({
      color: 0x22201d,
      roughness: 0.45,
      metalness: 0.35,
    });
    const slatGoldMat = new THREE.MeshStandardMaterial({
      color: 0xc5a880,
      roughness: 0.3,
      metalness: 0.8,
    });

    for (let i = 0; i < 28; i++) {
      const isGold = i % 5 === 0;
      const slat = new THREE.Mesh(slatGeo, isGold ? slatGoldMat : slatMat);
      slat.position.set(-2.8 + i * 0.08, 0.1, -1.5);
      slatGroup.add(slat);
    }
    showroomGroup.add(slatGroup);

    // C. Primary Wallpaper Exhibition Plaque (Curved / Angled Showcase)
    const panelGeo = new THREE.BoxGeometry(2.1, 3.1, 0.06);
    const panelMat = new THREE.MeshStandardMaterial({
      color: 0xd8caa8,
      roughness: 0.5,
      metalness: 0.15,
    });

    // Try loading existing product texture
    textureLoader.load(
      '/assets/products/wallpaper-card.jpg',
      (tex) => {
        tex.wrapS = THREE.ClampToEdgeWrapping;
        tex.wrapT = THREE.ClampToEdgeWrapping;
        tex.colorSpace = THREE.SRGBColorSpace;
        panelMat.map = tex;
        panelMat.needsUpdate = true;
        setIsLoaded(true);
      },
      undefined,
      () => {
        setIsLoaded(true);
      }
    );

    const mainPanel = new THREE.Mesh(panelGeo, panelMat);
    mainPanel.position.set(-0.35, 0.15, -0.4);
    mainPanel.rotation.y = THREE.MathUtils.degToRad(8);
    showroomGroup.add(mainPanel);

    // Elegant Slim Gold Frame for the Wallpaper Panel
    const frameGeo = new THREE.BoxGeometry(2.16, 3.16, 0.04);
    const frameMat = new THREE.MeshStandardMaterial({
      color: 0xc5a880,
      roughness: 0.25,
      metalness: 0.9,
    });
    const frameMesh = new THREE.Mesh(frameGeo, frameMat);
    frameMesh.position.set(-0.35, 0.15, -0.42);
    frameMesh.rotation.y = THREE.MathUtils.degToRad(8);
    showroomGroup.add(frameMesh);

    // D. Secondary Offset Showcase Panel (PVC Architectural Finish)
    const secPanelGeo = new THREE.BoxGeometry(1.6, 2.5, 0.05);
    const secPanelMat = new THREE.MeshStandardMaterial({
      color: 0x2a2825,
      roughness: 0.4,
      metalness: 0.25,
    });

    textureLoader.load(
      '/assets/products/pvc-panel-card.jpg',
      (tex) => {
        tex.colorSpace = THREE.SRGBColorSpace;
        secPanelMat.map = tex;
        secPanelMat.needsUpdate = true;
      }
    );

    const secPanel = new THREE.Mesh(secPanelGeo, secPanelMat);
    secPanel.position.set(1.45, -0.15, -0.85);
    secPanel.rotation.y = THREE.MathUtils.degToRad(-15);
    showroomGroup.add(secPanel);

    // E. Luxury Marble/Dark Exhibition Plinth (Bottom Pedestal)
    const plinthGeo = new THREE.CylinderGeometry(1.6, 1.7, 0.35, 36);
    const plinthMat = new THREE.MeshStandardMaterial({
      color: 0x191816,
      roughness: 0.35,
      metalness: 0.4,
    });
    const plinth = new THREE.Mesh(plinthGeo, plinthMat);
    plinth.position.set(0.65, -1.5, 0.2);
    showroomGroup.add(plinth);

    // Store references for dynamic theme updates
    sceneElementsRef.current = {
      backWallMat,
      plinthMat,
      ambientLight,
      warmSpot,
    };

    // Plinth Gold Accent Trim
    const plinthRingGeo = new THREE.TorusGeometry(1.62, 0.02, 16, 60);
    const plinthRingMat = new THREE.MeshStandardMaterial({
      color: 0xc5a880,
      roughness: 0.2,
      metalness: 0.9,
    });
    const plinthRing = new THREE.Mesh(plinthRingGeo, plinthRingMat);
    plinthRing.rotation.x = Math.PI / 2;
    plinthRing.position.set(0.65, -1.33, 0.2);
    showroomGroup.add(plinthRing);

    // F. Floating Bespoke Decor Accent (Interlocking Golden Rings Sculpture)
    const decorGroup = new THREE.Group();
    decorGroup.position.set(0.7, -0.85, 0.3);

    const ring1Geo = new THREE.TorusGeometry(0.38, 0.025, 24, 60);
    const ringMat = new THREE.MeshStandardMaterial({
      color: 0xd4af37,
      roughness: 0.2,
      metalness: 0.92,
    });
    const ring1 = new THREE.Mesh(ring1Geo, ringMat);
    decorGroup.add(ring1);

    const ring2Geo = new THREE.TorusGeometry(0.28, 0.02, 24, 60);
    const ring2 = new THREE.Mesh(ring2Geo, ringMat);
    ring2.rotation.x = Math.PI / 3;
    ring2.rotation.y = Math.PI / 4;
    decorGroup.add(ring2);

    showroomGroup.add(decorGroup);

    // 6. Interactive Mouse Parallax & Gentle Damping
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const clientX = e.clientX - rect.left;
      const clientY = e.clientY - rect.top;
      mouse.targetX = (clientX / rect.width - 0.5) * 2;
      mouse.targetY = -(clientY / rect.height - 0.5) * 2;
    };

    const handleTouchMove = (e) => {
      if (e.touches.length > 0) {
        const rect = container.getBoundingClientRect();
        const clientX = e.touches[0].clientX - rect.left;
        const clientY = e.touches[0].clientY - rect.top;
        mouse.targetX = (clientX / rect.width - 0.5) * 1.5;
        mouse.targetY = -(clientY / rect.height - 0.5) * 1.5;
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    // 7. Optimized Animation Loop with IntersectionObserver
    let animationFrameId;
    let clock = new THREE.Clock();
    let isVisible = true;

    const animate = () => {
      if (!isVisible) return;
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth camera interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.045;
      mouse.y += (mouse.targetY - mouse.y) * 0.045;

      camera.position.x = mouse.x * 0.55;
      camera.position.y = 0.2 + mouse.y * 0.35;
      camera.lookAt(0, 0, 0);

      // Subtle atmospheric motion
      decorGroup.rotation.y = elapsedTime * 0.35;
      decorGroup.rotation.x = Math.sin(elapsedTime * 0.5) * 0.15;
      decorGroup.position.y = -0.85 + Math.sin(elapsedTime * 0.9) * 0.04;

      // Subtle light oscillation
      goldAccentLight.intensity = 2.4 + Math.sin(elapsedTime * 1.2) * 0.4;

      // Slight breathing rotation of the showroom showcase panel
      mainPanel.rotation.y = THREE.MathUtils.degToRad(8) + Math.sin(elapsedTime * 0.4) * 0.02;
      frameMesh.rotation.y = mainPanel.rotation.y;

      renderer.render(scene, camera);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        if (isVisible) {
          clock.start();
          animate();
        } else {
          cancelAnimationFrame(animationFrameId);
        }
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    // 8. Resize Handler
    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth;
      height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // 9. Cleanup
    return () => {
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('resize', handleResize);

      scene.traverse((obj) => {
        if (obj.geometry) obj.geometry.dispose();
        if (obj.material) {
          if (Array.isArray(obj.material)) {
            obj.material.forEach((m) => m.dispose());
          } else {
            obj.material.dispose();
          }
        }
      });
      renderer.dispose();
      sceneElementsRef.current = null;
    };
  }, []);

  // Dynamically update materials and lighting when theme toggles
  useEffect(() => {
    if (sceneElementsRef.current) {
      const { backWallMat, plinthMat, ambientLight, warmSpot } = sceneElementsRef.current;
      if (backWallMat) backWallMat.color.setHex(isDark ? 0x181715 : 0xece6dc);
      if (plinthMat) plinthMat.color.setHex(isDark ? 0x191816 : 0xf2ece4);
      if (ambientLight) {
        ambientLight.color.setHex(isDark ? 0xf5efe6 : 0xfffaf2);
        ambientLight.intensity = isDark ? 0.9 : 1.25;
      }
      if (warmSpot) {
        warmSpot.intensity = isDark ? 4.2 : 3.6;
      }
    }
  }, [isDark]);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        minHeight: '480px',
        maxHeight: '680px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
      className="showroom-3d-wrapper"
    >
      {/* 3D Canvas */}
      <canvas
        ref={canvasRef}
        style={{
          width: '100%',
          height: '100%',
          display: 'block',
          outline: 'none',
          cursor: 'grab',
        }}
      />

      {/* Subtle Showroom Overlay Lighting Vignette */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: isDark
            ? 'radial-gradient(circle at 65% 50%, transparent 45%, rgba(20, 19, 18, 0.6) 80%, rgba(20, 19, 18, 0.95) 100%)'
            : 'radial-gradient(circle at 65% 50%, transparent 45%, rgba(240, 234, 225, 0.4) 80%, rgba(251, 249, 245, 0.85) 100%)',
          pointerEvents: 'none',
        }}
      />

      {/* Subtle Interactive Hint Badge */}
      <div
        style={{
          position: 'absolute',
          bottom: '1.25rem',
          right: '1.5rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.45rem',
          padding: '0.35rem 0.75rem',
          backgroundColor: isDark ? 'rgba(20, 19, 18, 0.75)' : 'rgba(255, 255, 255, 0.88)',
          backdropFilter: 'blur(10px)',
          border: isDark ? '1px solid rgba(197, 168, 128, 0.25)' : '1px solid rgba(166, 131, 83, 0.3)',
          borderRadius: '9999px',
          fontSize: '0.68rem',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: isDark ? '#C5A880' : '#A68353',
          pointerEvents: 'none',
        }}
      >
        <span
          style={{
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            backgroundColor: isDark ? '#C5A880' : '#A68353',
            boxShadow: isDark ? '0 0 8px #C5A880' : '0 0 6px #A68353',
          }}
        />
        Interactive 3D Showroom
      </div>
    </div>
  );
}
