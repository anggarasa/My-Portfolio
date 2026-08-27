"use client";

import * as React from "react";
import * as THREE from "three";

interface IntroThreeCanvasProps {
  progress: number;
  isExiting?: boolean;
}

export function IntroThreeCanvas({ progress, isExiting = false }: IntroThreeCanvasProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const progressRef = React.useRef(progress);
  const isExitingRef = React.useRef(isExiting);
  const mouseRef = React.useRef({ x: 0, y: 0 });

  React.useEffect(() => {
    progressRef.current = progress;
  }, [progress]);

  React.useEffect(() => {
    isExitingRef.current = isExiting;
  }, [isExiting]);

  React.useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Dimensions
    const width = container.clientWidth || 400;
    const height = container.clientHeight || 400;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 4.8;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Root Group
    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    // 1. Primary Polyhedral Wireframe Matrix (Icosahedron)
    const outerGeo = new THREE.IcosahedronGeometry(1.5, 1);
    const outerWireGeo = new THREE.WireframeGeometry(outerGeo);
    const outerMat = new THREE.LineBasicMaterial({
      color: 0x0a0a0a,
      linewidth: 1.5,
      transparent: true,
      opacity: 0.85,
    });
    const outerMesh = new THREE.LineSegments(outerWireGeo, outerMat);
    rootGroup.add(outerMesh);

    // 2. Inner Concentric Octahedron
    const innerGeo = new THREE.OctahedronGeometry(0.95, 0);
    const innerWireGeo = new THREE.WireframeGeometry(innerGeo);
    const innerMat = new THREE.LineBasicMaterial({
      color: 0x525252,
      linewidth: 1,
      transparent: true,
      opacity: 0.7,
    });
    const innerMesh = new THREE.LineSegments(innerWireGeo, innerMat);
    rootGroup.add(innerMesh);

    // 3. Orbital Concentric Ring Lattice
    const ringGeo = new THREE.TorusGeometry(1.8, 0.015, 8, 48);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0xef4444,
      wireframe: true,
    });
    const ringMesh = new THREE.Mesh(ringGeo, ringMat);
    ringMesh.rotation.x = Math.PI / 3;
    rootGroup.add(ringMesh);

    // 4. Glowing Red Accent Nodes (#EF4444) at Outer Vertices
    const vertexPositions = outerGeo.attributes.position;
    const vertexGroup = new THREE.Group();
    const dotGeo = new THREE.SphereGeometry(0.04, 8, 8);
    const dotMat = new THREE.MeshBasicMaterial({ color: 0xef4444 });

    const uniqueVertices = new Set<string>();
    for (let i = 0; i < vertexPositions.count; i++) {
      const x = Number(vertexPositions.getX(i).toFixed(2));
      const y = Number(vertexPositions.getY(i).toFixed(2));
      const z = Number(vertexPositions.getZ(i).toFixed(2));
      const key = `${x},${y},${z}`;

      if (!uniqueVertices.has(key)) {
        uniqueVertices.add(key);
        const dotMesh = new THREE.Mesh(dotGeo, dotMat);
        dotMesh.position.set(x, y, z);
        vertexGroup.add(dotMesh);
      }
    }
    rootGroup.add(vertexGroup);

    // 5. Surrounding Digital Dust / Particle Field
    const particleCount = 48;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 6;
      particlePositions[i + 1] = (Math.random() - 0.5) * 6;
      particlePositions[i + 2] = (Math.random() - 0.5) * 4;
    }
    particleGeo.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));

    const particleMat = new THREE.PointsMaterial({
      color: 0x0a0a0a,
      size: 0.04,
      transparent: true,
      opacity: 0.6,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // Mouse Tracking
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      mouseRef.current = { x, y };
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener("resize", handleResize);

    // Animation Loop
    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!prefersReducedMotion) {
        const currentProgress = progressRef.current;
        const exiting = isExitingRef.current;

        // Base rotation speed influenced by progress
        const speedMultiplier = 1 + (currentProgress / 100) * 1.5;
        const baseSpeed = exiting ? 0.04 : 0.008 * speedMultiplier;

        rootGroup.rotation.y += baseSpeed;
        rootGroup.rotation.x += baseSpeed * 0.6;
        innerMesh.rotation.y -= baseSpeed * 1.2;
        innerMesh.rotation.z += baseSpeed * 0.8;
        ringMesh.rotation.z += baseSpeed * 1.4;
        particles.rotation.y += 0.003;

        // Interactive Mouse Perspective Lerp
        const targetRotY = mouseRef.current.x * 0.5;
        const targetRotX = -mouseRef.current.y * 0.5;
        rootGroup.rotation.y += (targetRotY - rootGroup.rotation.y * 0.1) * 0.04;
        rootGroup.rotation.x += (targetRotX - rootGroup.rotation.x * 0.1) * 0.04;

        // Warp expansion when exiting or near 100%
        if (exiting) {
          rootGroup.scale.multiplyScalar(1.05);
          outerMat.opacity = Math.max(0, outerMat.opacity - 0.04);
          innerMat.opacity = Math.max(0, innerMat.opacity - 0.04);
          particleMat.opacity = Math.max(0, particleMat.opacity - 0.04);
        } else {
          // Dynamic scale based on load progress
          const targetScale = 0.85 + (currentProgress / 100) * 0.3;
          rootGroup.scale.set(targetScale, targetScale, targetScale);
        }
      }

      renderer.render(scene, camera);
    };

    animate();

    // Complete Three.js Resource Disposal Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);

      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }

      // Dispose Geometries
      outerGeo.dispose();
      outerWireGeo.dispose();
      innerGeo.dispose();
      innerWireGeo.dispose();
      ringGeo.dispose();
      dotGeo.dispose();
      particleGeo.dispose();

      // Dispose Materials
      outerMat.dispose();
      innerMat.dispose();
      ringMat.dispose();
      dotMat.dispose();
      particleMat.dispose();

      // Dispose Renderer
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-full flex items-center justify-center relative select-none pointer-events-none"
      data-testid="intro-three-canvas"
    />
  );
}
