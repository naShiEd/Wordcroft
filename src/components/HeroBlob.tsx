import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { createNoise3D } from 'simplex-noise';

export default function HeroBlob() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    containerRef.current.appendChild(renderer.domElement);

    const geometry = new THREE.IcosahedronGeometry(2.2, 64);
    const material = new THREE.MeshPhongMaterial({
      color: 0x007a4b,
      emissive: 0x002d1c,
      shininess: 120,
      flatShading: false,
      transparent: true,
      opacity: 0.85,
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const light1 = new THREE.DirectionalLight(0xffffff, 1.4);
    light1.position.set(5, 5, 5);
    scene.add(light1);

    const light2 = new THREE.PointLight(0x00c878, 2.5, 12);
    light2.position.set(-5, -5, 2);
    scene.add(light2);

    const ambientLight = new THREE.AmbientLight(0x001f13, 1.2);
    scene.add(ambientLight);

    camera.position.z = 4.2;

    const noise3D = createNoise3D();
    const pos = geometry.attributes.position;
    const initialPos = Array.from(pos.array);

    const onMouseMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', onMouseMove);

    let time = 0;
    let animationFrameId: number;
    let isVisible = true;

    const observer = new IntersectionObserver(
      (entries) => {
        isVisible = entries[0].isIntersecting;
      },
      { threshold: 0 }
    );
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      if (!isVisible) return; // Pause rendering loop when off-screen to prevent scroll jank
      
      time += 0.0035;

      const positionAttribute = geometry.getAttribute('position');
      for (let i = 0; i < positionAttribute.count; i++) {
        const x = initialPos[i * 3];
        const y = initialPos[i * 3 + 1];
        const z = initialPos[i * 3 + 2];
        
        const noise = noise3D(x * 0.5 + time, y * 0.5 + time, z * 0.5 + time) * 0.45;
        const v = new THREE.Vector3(x, y, z).normalize().multiplyScalar(2.2 + noise);
        
        positionAttribute.setXYZ(i, v.x, v.y, v.z);
      }
      positionAttribute.needsUpdate = true;

      // Mouse interaction
      // Mouse interaction & Position
      mesh.rotation.y += 0.001;
      mesh.position.x += (mouse.current.x * 0.1 + 0.5 - mesh.position.x) * 0.05;
      mesh.position.y += (mouse.current.y * 0.1 - mesh.position.y) * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
      renderer.dispose();
      mesh.geometry.dispose();
      (mesh.material as THREE.Material).dispose();
      if (containerRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={containerRef} id="blob-canvas" style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none' }} />;
}
