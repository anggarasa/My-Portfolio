"use client";

import * as React from "react";
import * as THREE from "three";

export function EditorialWireframe3D() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const isHoveredRef = React.useRef(false);

  React.useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Dimensions
    const width = container.clientWidth || 320;
    const height = container.clientHeight || 280;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.background = null; // Transparent background to blend with container

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 4.2;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Group for all rotating elements
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 1. Outer Polyhedral Wireframe (Icosahedron)
    const outerGeo = new THREE.IcosahedronGeometry(1.4, 0);
    const wireframeGeo = new THREE.WireframeGeometry(outerGeo);
    const lineMat = new THREE.LineBasicMaterial({
      color: 0x0a0a0a,
      linewidth: 2,
    });
    const wireframeMesh = new THREE.LineSegments(wireframeGeo, lineMat);
    mainGroup.add(wireframeMesh);

    // 2. Inner Concentric Geometric Octahedron
    const innerGeo = new THREE.OctahedronGeometry(0.85, 0);
    const innerWireframeGeo = new THREE.WireframeGeometry(innerGeo);
    const innerLineMat = new THREE.LineBasicMaterial({
      color: 0x525252,
      linewidth: 1,
    });
    const innerMesh = new THREE.LineSegments(innerWireframeGeo, innerLineMat);
    mainGroup.add(innerMesh);

    // 3. Vertex Highlight Spheres (Editorial Red Accent #EF4444)
    const vertexPositions = outerGeo.attributes.position;
    const vertexGroup = new THREE.Group();
    const dotGeo = new THREE.SphereGeometry(0.045, 8, 8);
    const dotMat = new THREE.MeshBasicMaterial({ color: 0xef4444 });

    const uniqueVertices = new Set<string>();
    for (let i = 0; i < vertexPositions.count; i++) {
      const x = Number(vertexPositions.getX(i).toFixed(3));
      const y = Number(vertexPositions.getY(i).toFixed(3));
      const z = Number(vertexPositions.getZ(i).toFixed(3));
      const key = `${x},${y},${z}`;

      if (!uniqueVertices.has(key)) {
        uniqueVertices.add(key);
        const dotMesh = new THREE.Mesh(dotGeo, dotMat);
        dotMesh.position.set(x, y, z);
        vertexGroup.add(dotMesh);
      }
    }
    mainGroup.add(vertexGroup);

    // 4. Subtle Ambient Floating Particles (Tech Coordinates)
    const particleCount = 24;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 4;
      particlePositions[i + 1] = (Math.random() - 0.5) * 4;
      particlePositions[i + 2] = (Math.random() - 0.5) * 3;
    }
    particleGeo.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));

    const particleMat = new THREE.PointsMaterial({
      color: 0x0a0a0a,
      size: 0.035,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // Mouse Interaction Target
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationX = 0;
    let targetRotationY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      mouseX = x * 2;
      mouseY = y * 2;
    };

    const handleMouseEnter = () => {
      isHoveredRef.current = true;
    };

    const handleMouseLeave = () => {
      isHoveredRef.current = false;
      mouseX = 0;
      mouseY = 0;
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    // Window Resize Handler
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
        // Base continuous rotation
        const speed = isHoveredRef.current ? 0.012 : 0.005;
        mainGroup.rotation.y += speed;
        mainGroup.rotation.x += speed * 0.5;
        innerMesh.rotation.y -= speed * 1.5;
        innerMesh.rotation.z += speed * 0.8;
        particles.rotation.y += 0.002;

        // Smooth mouse target lerp
        targetRotationY = mouseX * 0.8;
        targetRotationX = -mouseY * 0.8;

        mainGroup.rotation.y += (targetRotationY - mainGroup.rotation.y * 0.2) * 0.05;
        mainGroup.rotation.x += (targetRotationX - mainGroup.rotation.x * 0.2) * 0.05;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Complete Lifecycle Disposal Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);

      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }

      // Dispose Geometries
      outerGeo.dispose();
      wireframeGeo.dispose();
      innerGeo.dispose();
      innerWireframeGeo.dispose();
      dotGeo.dispose();
      particleGeo.dispose();

      // Dispose Materials
      lineMat.dispose();
      innerLineMat.dispose();
      dotMat.dispose();
      particleMat.dispose();

      // Dispose Renderer
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full border-2 border-[#0A0A0A] bg-[#FAFAFA] overflow-hidden group">
      {/* 3D Header Bar */}
      <div className="bg-[#0A0A0A] text-[#FAFAFA] px-3 py-1.5 flex items-center justify-between text-[10px] font-mono font-bold uppercase tracking-wider">
        <div className="flex items-center space-x-1.5">
          <span className="w-2 h-2 bg-[#EF4444] inline-block animate-pulse" />
          <span>3D SCULPTURE // WIREFRAME</span>
        </div>
        <span className="text-[#A3A3A3]">INTERACTIVE THREE.JS</span>
      </div>

      {/* Canvas Mount Container */}
      <div
        ref={containerRef}
        className="w-full h-64 sm:h-72 cursor-grab active:cursor-grabbing flex items-center justify-center relative select-none"
      />

      {/* Footer Tag */}
      <div className="bg-[#F5F5F5] border-t border-[#D4D4D4] px-3 py-1.5 flex items-center justify-between text-[9px] font-mono text-[#525252]">
        <span>ARAHKAN KURSOR UNTUK ROTASI PERSPEKTIF</span>
        <span className="text-[#EF4444] font-bold">60 FPS</span>
      </div>
    </div>
  );
}
