"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export function HeroParticlesCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check prefers-reduced-motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let animationFrameId: number;
    let isVisible = true;
    let renderer: THREE.WebGLRenderer | null = null;
    let scene: THREE.Scene;
    let camera: THREE.PerspectiveCamera;
    let particlesGeometry: THREE.BufferGeometry;
    let particleMaterial: THREE.PointsMaterial;
    let linesGeometry: THREE.BufferGeometry;

    try {
      // Scene, Camera, Renderer
      scene = new THREE.Scene();
      const width = container.clientWidth || window.innerWidth;
      const height = container.clientHeight || window.innerHeight;

      camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
      camera.position.z = 80;

      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
      });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      container.appendChild(renderer.domElement);

      // Particle Constellation Geometry
      const particleCount = 200;
      const positions = new Float32Array(particleCount * 3);
      const velocities: { x: number; y: number; z: number }[] = [];

      const rangeX = 140;
      const rangeY = 90;
      const rangeZ = 70;

      for (let i = 0; i < particleCount; i++) {
        positions[i * 3] = (Math.random() - 0.5) * rangeX;
        positions[i * 3 + 1] = (Math.random() - 0.5) * rangeY;
        positions[i * 3 + 2] = (Math.random() - 0.5) * rangeZ;

        velocities.push({
          x: (Math.random() - 0.5) * 0.08,
          y: (Math.random() - 0.5) * 0.08,
          z: (Math.random() - 0.5) * 0.05,
        });
      }

      particlesGeometry = new THREE.BufferGeometry();
      particlesGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

      // Particle Point Material (Cyber Cyan Glow)
      particleMaterial = new THREE.PointsMaterial({
        color: new THREE.Color("#22d3ee"),
        size: 1.8,
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending,
      });

      const particleSystem = new THREE.Points(particlesGeometry, particleMaterial);
      scene.add(particleSystem);

      // Dynamic Connecting Lines
      const maxConnections = 1200;
      const linePositions = new Float32Array(maxConnections * 6);
      const lineColors = new Float32Array(maxConnections * 6);

      linesGeometry = new THREE.BufferGeometry();
      linesGeometry.setAttribute("position", new THREE.BufferAttribute(linePositions, 3));
      linesGeometry.setAttribute("color", new THREE.BufferAttribute(lineColors, 3));

      const lineMaterial = new THREE.LineSegments(
        linesGeometry,
        new THREE.LineBasicMaterial({
          vertexColors: true,
          transparent: true,
          opacity: 0.35,
          blending: THREE.AdditiveBlending,
        }),
      );
      scene.add(lineMaterial);

      // Mouse Parallax & Interactive Damping
      const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };

      const handleMouseMove = (e: MouseEvent) => {
        const rect = container.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;

        mouse.targetX = (x - 0.5) * 2;
        mouse.targetY = -(y - 0.5) * 2;
      };

      window.addEventListener("mousemove", handleMouseMove);

      // Resize Handler
      const handleResize = () => {
        if (!container || !renderer) return;
        const w = container.clientWidth || window.innerWidth;
        const h = container.clientHeight || window.innerHeight;

        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
      };

      window.addEventListener("resize", handleResize);

      // Visibility Observer to pause when off-screen
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            isVisible = entry.isIntersecting;
          });
        },
        { threshold: 0.05 },
      );
      observer.observe(container);

      // Animation Loop
      const clock = new THREE.Clock();

      const animate = () => {
        animationFrameId = requestAnimationFrame(animate);

        if (!isVisible || !renderer) return;

        const delta = clock.getDelta();

        // Smooth mouse interpolation
        mouse.x += (mouse.targetX - mouse.x) * 0.05;
        mouse.y += (mouse.targetY - mouse.y) * 0.05;

        // Rotate whole constellation subtly
        particleSystem.rotation.y += delta * 0.05 + mouse.x * 0.002;
        particleSystem.rotation.x += delta * 0.02 + mouse.y * 0.002;
        lineMaterial.rotation.copy(particleSystem.rotation);

        // Update individual particle positions
        const posArray = particlesGeometry.attributes.position.array as Float32Array;

        for (let i = 0; i < particleCount; i++) {
          const idx = i * 3;
          posArray[idx] += velocities[i].x;
          posArray[idx + 1] += velocities[i].y;
          posArray[idx + 2] += velocities[i].z;

          // Bounce within boundaries
          if (Math.abs(posArray[idx]) > rangeX / 2) velocities[i].x *= -1;
          if (Math.abs(posArray[idx + 1]) > rangeY / 2) velocities[i].y *= -1;
          if (Math.abs(posArray[idx + 2]) > rangeZ / 2) velocities[i].z *= -1;
        }
        particlesGeometry.attributes.position.needsUpdate = true;

        // Update interconnecting lines
        let vertexPos = 0;
        let colorPos = 0;
        const connectionDist = 18;
        const baseColor = new THREE.Color("#1e293b");
        const accentColor = new THREE.Color("#06b6d4");

        for (let i = 0; i < particleCount; i++) {
          for (let j = i + 1; j < particleCount; j++) {
            const dx = posArray[i * 3] - posArray[j * 3];
            const dy = posArray[i * 3 + 1] - posArray[j * 3 + 1];
            const dz = posArray[i * 3 + 2] - posArray[j * 3 + 2];
            const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

            if (dist < connectionDist && vertexPos < maxConnections * 6) {
              linePositions[vertexPos++] = posArray[i * 3];
              linePositions[vertexPos++] = posArray[i * 3 + 1];
              linePositions[vertexPos++] = posArray[i * 3 + 2];

              linePositions[vertexPos++] = posArray[j * 3];
              linePositions[vertexPos++] = posArray[j * 3 + 1];
              linePositions[vertexPos++] = posArray[j * 3 + 2];

              const alpha = 1.0 - dist / connectionDist;
              const lineColor = baseColor.clone().lerp(accentColor, alpha * 0.8);

              lineColors[colorPos++] = lineColor.r * alpha;
              lineColors[colorPos++] = lineColor.g * alpha;
              lineColors[colorPos++] = lineColor.b * alpha;

              lineColors[colorPos++] = lineColor.r * alpha;
              lineColors[colorPos++] = lineColor.g * alpha;
              lineColors[colorPos++] = lineColor.b * alpha;
            }
          }
        }

        linesGeometry.setDrawRange(0, vertexPos / 3);
        linesGeometry.attributes.position.needsUpdate = true;
        linesGeometry.attributes.color.needsUpdate = true;

        renderer.render(scene, camera);
      };

      animate();

      // Memory and Resource Cleanup
      return () => {
        cancelAnimationFrame(animationFrameId);
        observer.disconnect();
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("resize", handleResize);

        if (renderer && container.contains(renderer.domElement)) {
          container.removeChild(renderer.domElement);
        }

        particlesGeometry?.dispose();
        particleMaterial?.dispose();
        linesGeometry?.dispose();
        renderer?.dispose();
      };
    } catch {
      // Graceful fallback if WebGL is unavailable
      return;
    }
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none -z-10 overflow-hidden"
    />
  );
}
