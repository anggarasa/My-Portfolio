"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function FloatingGeometry3D() {
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
    let scrollTrigger: ScrollTrigger | null = null;
    let renderer: THREE.WebGLRenderer | null = null;
    let innerGeometry: THREE.IcosahedronGeometry;
    let innerMaterial: THREE.MeshPhysicalMaterial;
    let wireGeometry: THREE.IcosahedronGeometry;
    let wireMaterial: THREE.MeshBasicMaterial;
    let nodesGeometry: THREE.IcosahedronGeometry;
    let nodesMaterial: THREE.PointsMaterial;
    let ringGeometry: THREE.TorusGeometry;
    let ringMaterial: THREE.MeshBasicMaterial;

    try {
      // Three.js Scene Setup
      const scene = new THREE.Scene();
      const width = container.clientWidth || 400;
      const height = container.clientHeight || 400;

      const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
      camera.position.z = 7;

      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
      });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      container.appendChild(renderer.domElement);

      // Lights
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
      scene.add(ambientLight);

      const pointLight1 = new THREE.PointLight(0x6366f1, 2.5, 50);
      pointLight1.position.set(5, 5, 5);
      scene.add(pointLight1);

      const pointLight2 = new THREE.PointLight(0x06b6d4, 3.0, 50);
      pointLight2.position.set(-5, -5, -2);
      scene.add(pointLight2);

      // 3D Object Group
      const group = new THREE.Group();
      scene.add(group);

      // 1. Inner Polyhedron Mesh (Icosahedron)
      innerGeometry = new THREE.IcosahedronGeometry(2.0, 0);
      innerMaterial = new THREE.MeshPhysicalMaterial({
        color: new THREE.Color("#0f1422"),
        metalness: 0.2,
        roughness: 0.1,
        transmission: 0.6,
        thickness: 1.2,
        reflectivity: 0.9,
        clearcoat: 1.0,
        clearcoatRoughness: 0.1,
        wireframe: false,
      });
      const innerMesh = new THREE.Mesh(innerGeometry, innerMaterial);
      group.add(innerMesh);

      // 2. Outer Wireframe Cage (Slightly larger)
      wireGeometry = new THREE.IcosahedronGeometry(2.15, 0);
      wireMaterial = new THREE.MeshBasicMaterial({
        color: new THREE.Color("#818cf8"),
        wireframe: true,
        transparent: true,
        opacity: 0.4,
      });
      const wireMesh = new THREE.Mesh(wireGeometry, wireMaterial);
      group.add(wireMesh);

      // 3. Floating Vertex Nodes
      nodesGeometry = new THREE.IcosahedronGeometry(2.15, 0);
      nodesMaterial = new THREE.PointsMaterial({
        color: new THREE.Color("#22d3ee"),
        size: 0.12,
        transparent: true,
        opacity: 0.9,
      });
      const nodesPoints = new THREE.Points(nodesGeometry, nodesMaterial);
      group.add(nodesPoints);

      // 4. Orbiting Ring
      ringGeometry = new THREE.TorusGeometry(3.0, 0.02, 16, 100);
      ringMaterial = new THREE.MeshBasicMaterial({
        color: new THREE.Color("#6366f1"),
        transparent: true,
        opacity: 0.6,
      });
      const ringMesh = new THREE.Mesh(ringGeometry, ringMaterial);
      ringMesh.rotation.x = Math.PI / 3;
      group.add(ringMesh);

      // Mouse Interaction (Drag / Orbit & Hover)
      let isDragging = false;
      let previousMousePosition = { x: 0, y: 0 };
      const targetRotation = { x: 0, y: 0 };
      const currentRotation = { x: 0, y: 0 };

      const onMouseDown = (e: MouseEvent) => {
        isDragging = true;
        previousMousePosition = { x: e.clientX, y: e.clientY };
      };

      const onMouseMove = (e: MouseEvent) => {
        if (!isDragging) return;
        const deltaX = e.clientX - previousMousePosition.x;
        const deltaY = e.clientY - previousMousePosition.y;

        targetRotation.y += deltaX * 0.008;
        targetRotation.x += deltaY * 0.008;

        previousMousePosition = { x: e.clientX, y: e.clientY };
      };

      const onMouseUp = () => {
        isDragging = false;
      };

      // Touch support for mobile
      const onTouchStart = (e: TouchEvent) => {
        if (e.touches.length === 1) {
          isDragging = true;
          previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
        }
      };

      const onTouchMove = (e: TouchEvent) => {
        if (!isDragging || e.touches.length !== 1) return;
        const deltaX = e.touches[0].clientX - previousMousePosition.x;
        const deltaY = e.touches[0].clientY - previousMousePosition.y;

        targetRotation.y += deltaX * 0.008;
        targetRotation.x += deltaY * 0.008;

        previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      };

      const onTouchEnd = () => {
        isDragging = false;
      };

      container.addEventListener("mousedown", onMouseDown);
      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("mouseup", onMouseUp);

      container.addEventListener("touchstart", onTouchStart, { passive: true });
      window.addEventListener("touchmove", onTouchMove, { passive: true });
      window.addEventListener("touchend", onTouchEnd);

      // GSAP ScrollTrigger - Rotate group as user scrolls
      scrollTrigger = ScrollTrigger.create({
        trigger: container,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          group.position.y = (progress - 0.5) * 1.5;
          group.rotation.z = progress * Math.PI;
        },
      });

      // Resize Handler
      const handleResize = () => {
        if (!container || !renderer) return;
        const w = container.clientWidth;
        const h = container.clientHeight;

        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
      };

      window.addEventListener("resize", handleResize);

      // Visibility Observer
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

        // Continuous subtle idle rotation
        if (!isDragging) {
          targetRotation.y += delta * 0.35;
          targetRotation.x += delta * 0.15;
        }

        // Smooth damping interpolation
        currentRotation.x += (targetRotation.x - currentRotation.x) * 0.08;
        currentRotation.y += (targetRotation.y - currentRotation.y) * 0.08;

        group.rotation.x = currentRotation.x;
        group.rotation.y = currentRotation.y;

        ringMesh.rotation.z += delta * 0.5;

        renderer.render(scene, camera);
      };

      animate();

      // Memory Cleanup
      return () => {
        cancelAnimationFrame(animationFrameId);
        scrollTrigger?.kill();
        observer.disconnect();

        container.removeEventListener("mousedown", onMouseDown);
        window.removeEventListener("mousemove", onMouseMove);
        window.removeEventListener("mouseup", onMouseUp);

        container.removeEventListener("touchstart", onTouchStart);
        window.removeEventListener("touchmove", onTouchMove);
        window.removeEventListener("touchend", onTouchEnd);
        window.removeEventListener("resize", handleResize);

        if (renderer && container.contains(renderer.domElement)) {
          container.removeChild(renderer.domElement);
        }

        innerGeometry?.dispose();
        innerMaterial?.dispose();
        wireGeometry?.dispose();
        wireMaterial?.dispose();
        nodesGeometry?.dispose();
        nodesMaterial?.dispose();
        ringGeometry?.dispose();
        ringMaterial?.dispose();
        renderer?.dispose();
      };
    } catch {
      return;
    }
  }, []);

  return (
    <div
      ref={containerRef}
      data-cursor="drag"
      className="relative w-full h-[360px] sm:h-[450px] md:h-[500px] cursor-grab active:cursor-grabbing flex items-center justify-center select-none"
    >
      <div className="absolute top-4 right-4 text-[10px] font-mono tracking-widest text-muted-foreground px-3 py-1 rounded-full border border-border bg-card/60 backdrop-blur-xs pointer-events-none">
        [ DRAG TO ROTATE 3D ]
      </div>
    </div>
  );
}
