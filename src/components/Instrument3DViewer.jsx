import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

const MATERIALS = {
  satin: {
    name: "German Satin Steel",
    color: 0xd8dde3,
    metalness: 0.92,
    roughness: 0.28,
    badgeColor: "bg-slate-700 text-slate-100",
  },
  chrome: {
    name: "Mirror Chrome Polish",
    color: 0xf5f7fa,
    metalness: 0.98,
    roughness: 0.08,
    badgeColor: "bg-cyan-700 text-cyan-100",
  },
  gold: {
    name: "Gold TC (Tungsten Carbide)",
    color: 0xdfb15b,
    metalness: 0.95,
    roughness: 0.18,
    badgeColor: "bg-amber-600 text-amber-100",
  },
  titanium: {
    name: "Stealth Titanium (Black)",
    color: 0x2c333a,
    metalness: 0.90,
    roughness: 0.35,
    badgeColor: "bg-gray-900 text-gray-200",
  },
};

const HOTSPOTS_DATA = {
  scalpel: [
    { id: 1, title: "Precision Blade Bayonet", desc: "Tempered surgical edge fitting standard No. 10-15 blades", x: 0, y: 1.8, z: 0.1 },
    { id: 2, title: "Laser Graduation Metric Ruler", desc: "Laser-annealed 5cm measurement scale on handle shank", x: 0, y: 0.2, z: 0.15 },
    { id: 3, title: "Ergonomic Cross-Milled Thumb Grip", desc: "Ultra-secure non-slip tactile ridges for precision incisions", x: 0, y: -1.0, z: 0.15 },
  ],
  forceps: [
    { id: 1, title: "Tungsten Carbide Micro-Serrations", desc: "Pyramid cross-hatched grip teeth for non-slip needle control", x: 0, y: 1.8, z: 0.1 },
    { id: 2, title: "Precision Box-Lock Joint", desc: "High-tolerance flush screw joint with zero lateral play", x: 0, y: 0.4, z: 0.1 },
    { id: 3, title: "3-Position Ratchet Catch", desc: "Graduated lock mechanism for calibrated clamping pressure", x: 0.4, y: -0.9, z: 0.1 },
  ],
  scissors: [
    { id: 1, title: "Hand-Honed Beveled Cutting Blades", desc: "High-carbon surgical steel edge for effortless tissue dissection", x: 0, y: 1.7, z: 0.1 },
    { id: 2, title: "Hardened Stainless Pivot Screw", desc: "Precision torque calibration prevents blade loosening", x: 0, y: 0.5, z: 0.1 },
    { id: 3, title: "Ergonomic Finger Rings", desc: "Smooth rounded loops preventing surgeon hand fatigue", x: 0.7, y: -1.4, z: 0.1 },
  ],
  tweezers: [
    { id: 1, title: "1x2 Interlocking Atraumatic Teeth", desc: "Micro-teeth designed for secure tissue handling with zero slip", x: 0, y: 1.8, z: 0.1 },
    { id: 2, title: "Ribbed Lateral Thumb Guides", desc: "Electropolished grooved side panels for steady tactile feedback", x: 0, y: 0.2, z: 0.2 },
    { id: 3, title: "Spring-Tempered Rear Joint", desc: "Calibrated flex tension ensuring consistent closing pressure", x: 0, y: -1.7, z: 0.1 },
  ],
};

export default function Instrument3DViewer({
  modelType = "scalpel",
  productName = "Surgical Instrument",
  sku = "BK-001",
  finish = "Mirror Finish",
}) {
  const mountRef = useRef(null);
  const [selectedMat, setSelectedMat] = useState("chrome");
  const [autoRotate, setAutoRotate] = useState(true);
  const [activeHotspot, setActiveHotspot] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const sceneStateRef = useRef({
    scene: null,
    camera: null,
    renderer: null,
    group: null,
    material: null,
    goldMaterial: null,
    animationId: null,
    isDragging: false,
    prevMousePos: { x: 0, y: 0 },
    rotationVelocity: { x: 0, y: 0.005 },
  });

  const hotspots = HOTSPOTS_DATA[modelType] || HOTSPOTS_DATA.scalpel;

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 500;
    const height = container.clientHeight || 500;

    // 1. Scene
    const scene = new THREE.Scene();
    scene.background = null; // transparent background

    // 2. Camera
    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100);
    camera.position.set(0, 0, 6.2);

    // 3. Renderer with high DPI and Anti-aliasing
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.3;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    container.innerHTML = "";
    container.appendChild(renderer.domElement);

    // 4. Studio Environment Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const mainKeyLight = new THREE.DirectionalLight(0xffffff, 2.8);
    mainKeyLight.position.set(5, 8, 6);
    mainKeyLight.castShadow = true;
    scene.add(mainKeyLight);

    const fillLight = new THREE.DirectionalLight(0x90b4ce, 1.5);
    fillLight.position.set(-6, -4, -4);
    scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(0x60a5fa, 2.0);
    rimLight.position.set(0, 7, -6);
    scene.add(rimLight);

    const bottomReflect = new THREE.DirectionalLight(0xffffff, 1.0);
    bottomReflect.position.set(0, -6, 4);
    scene.add(bottomReflect);

    // 5. Materials
    const matConfig = MATERIALS[selectedMat] || MATERIALS.chrome;
    const mainMaterial = new THREE.MeshStandardMaterial({
      color: matConfig.color,
      metalness: matConfig.metalness,
      roughness: matConfig.roughness,
      envMapIntensity: 1.5,
    });

    const goldMaterial = new THREE.MeshStandardMaterial({
      color: 0xdfb15b,
      metalness: 0.95,
      roughness: 0.18,
    });

    const blackGripMaterial = new THREE.MeshStandardMaterial({
      color: 0x1f2429,
      metalness: 0.4,
      roughness: 0.6,
    });

    // 6. Build High-Precision 3D Geometry Group
    const instrumentGroup = new THREE.Group();
    buildInstrumentModel(instrumentGroup, modelType, mainMaterial, goldMaterial, blackGripMaterial);
    scene.add(instrumentGroup);

    // Initial slight angle
    instrumentGroup.rotation.x = 0.2;
    instrumentGroup.rotation.y = 0.6;
    instrumentGroup.rotation.z = -0.15;

    // Save refs
    sceneStateRef.current = {
      scene,
      camera,
      renderer,
      group: instrumentGroup,
      material: mainMaterial,
      goldMaterial,
      animationId: null,
      isDragging: false,
      prevMousePos: { x: 0, y: 0 },
      rotationVelocity: { x: 0, y: 0.006 },
    };

    // 7. Mouse/Touch Interaction Listeners
    const onPointerDown = (e) => {
      sceneStateRef.current.isDragging = true;
      sceneStateRef.current.prevMousePos = { x: e.clientX, y: e.clientY };
    };

    const onPointerMove = (e) => {
      if (!sceneStateRef.current.isDragging) return;
      const deltaX = e.clientX - sceneStateRef.current.prevMousePos.x;
      const deltaY = e.clientY - sceneStateRef.current.prevMousePos.y;

      instrumentGroup.rotation.y += deltaX * 0.008;
      instrumentGroup.rotation.x += deltaY * 0.008;

      sceneStateRef.current.rotationVelocity = {
        x: deltaY * 0.003,
        y: deltaX * 0.003,
      };

      sceneStateRef.current.prevMousePos = { x: e.clientX, y: e.clientY };
    };

    const onPointerUp = () => {
      sceneStateRef.current.isDragging = false;
    };

    const onWheel = (e) => {
      e.preventDefault();
      const zoom = camera.position.z + e.deltaY * 0.003;
      camera.position.z = Math.max(3.8, Math.min(8.5, zoom));
    };

    const dom = renderer.domElement;
    dom.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
    dom.addEventListener("wheel", onWheel, { passive: false });

    // 8. Animation Loop
    const animate = () => {
      sceneStateRef.current.animationId = requestAnimationFrame(animate);

      if (autoRotate && !sceneStateRef.current.isDragging) {
        instrumentGroup.rotation.y += 0.007;
        // Floating gentle breathing movement
        instrumentGroup.position.y = Math.sin(Date.now() * 0.0015) * 0.08;
      }

      renderer.render(scene, camera);
    };
    animate();

    // 9. Resize Observer
    const resizeObserver = new ResizeObserver(() => {
      if (!container) return;
      const newW = container.clientWidth;
      const newH = container.clientHeight;
      if (newW && newH) {
        camera.aspect = newW / newH;
        camera.updateProjectionMatrix();
        renderer.setSize(newW, newH);
      }
    });
    resizeObserver.observe(container);

    // Cleanup
    return () => {
      if (sceneStateRef.current.animationId) {
        cancelAnimationFrame(sceneStateRef.current.animationId);
      }
      dom.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
      dom.removeEventListener("wheel", onWheel);
      resizeObserver.disconnect();
      renderer.dispose();
    };
  }, [modelType]);

  // Update material on select
  useEffect(() => {
    if (sceneStateRef.current.material) {
      const mat = MATERIALS[selectedMat] || MATERIALS.chrome;
      sceneStateRef.current.material.color.setHex(mat.color);
      sceneStateRef.current.material.metalness = mat.metalness;
      sceneStateRef.current.material.roughness = mat.roughness;
      sceneStateRef.current.material.needsUpdate = true;
    }
  }, [selectedMat]);

  const handleResetView = () => {
    if (sceneStateRef.current.group && sceneStateRef.current.camera) {
      sceneStateRef.current.group.rotation.set(0.2, 0.6, -0.15);
      sceneStateRef.current.group.position.set(0, 0, 0);
      sceneStateRef.current.camera.position.set(0, 0, 6.2);
    }
  };

  return (
    <div
      className={`relative w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-[var(--border)] bg-gradient-to-b from-slate-900 via-slate-950 to-black select-none shadow-2xl transition-all duration-300 ${
        isFullscreen ? "fixed inset-0 z-50 rounded-none h-screen w-screen" : "h-[440px] sm:h-[500px] lg:h-[540px]"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 3D Canvas Mount */}
      <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

      {/* Top Header Badge & SKU */}
      <div className="absolute top-3 sm:top-4 left-3 sm:left-4 right-3 sm:right-4 flex items-center justify-between pointer-events-none gap-2">
        <div className="flex items-center gap-2 bg-black/70 backdrop-blur-xl px-3 py-1.5 rounded-full border border-white/10 shadow-lg">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
          <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400">3D Interactive</span>
          <span className="hidden sm:inline text-xs text-slate-500">|</span>
          <span className="hidden sm:inline text-[11px] font-mono text-slate-300">{sku}</span>
        </div>

        <div className="flex items-center gap-1.5 sm:gap-2 pointer-events-auto">
          {/* Auto Rotate Toggle */}
          <button
            onClick={() => setAutoRotate(!autoRotate)}
            title={autoRotate ? "Pause 360 Rotation" : "Play 360 Rotation"}
            className={`px-2.5 sm:px-3 py-1.5 rounded-xl text-[11px] font-semibold backdrop-blur-xl border transition-all ${
              autoRotate
                ? "bg-blue-600/30 border-blue-400/60 text-blue-300 shadow-md shadow-blue-500/20"
                : "bg-black/60 border-white/10 text-slate-400 hover:text-white"
            }`}
          >
            {autoRotate ? "Auto-Spin" : "Paused"}
          </button>

          {/* Reset Camera */}
          <button
            onClick={handleResetView}
            title="Reset View"
            className="p-2 rounded-xl text-xs bg-black/60 border border-white/10 text-slate-300 hover:text-white backdrop-blur-xl transition hover:scale-105 active:scale-95"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </button>

          {/* Fullscreen Toggle */}
          <button
            onClick={() => setIsFullscreen(!isFullscreen)}
            title="Toggle Fullscreen"
            className="p-2 rounded-xl text-xs bg-black/60 border border-white/10 text-slate-300 hover:text-white backdrop-blur-xl transition hover:scale-105 active:scale-95"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isFullscreen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Interactive Spec Hotspot Overlay Pins */}
      <div className="absolute inset-x-0 bottom-14 sm:bottom-16 pointer-events-none flex flex-col justify-end p-2.5 sm:p-4">
        <div className="flex flex-wrap gap-1 sm:gap-2 pointer-events-auto">
          {hotspots.map((h, idx) => (
            <button
              key={h.id}
              onClick={() => setActiveHotspot(activeHotspot === h.id ? null : h.id)}
              className={`group relative text-left text-[10px] sm:text-[11px] px-2 sm:px-2.5 py-1 sm:py-1.5 rounded-xl backdrop-blur-xl border transition-all ${
                activeHotspot === h.id
                  ? "bg-blue-600/90 text-white border-blue-300 shadow-lg shadow-blue-500/30 scale-105"
                  : "bg-black/60 text-slate-300 border-white/10 hover:border-blue-400/50 hover:bg-black/80"
              }`}
            >
              <div className="flex items-center gap-1 sm:gap-1.5">
                <span className="w-3.5 h-3.5 rounded-full bg-blue-500 text-[9px] font-bold flex items-center justify-center text-white">
                  {idx + 1}
                </span>
                <span className="font-medium truncate max-w-[100px] sm:max-w-none">{h.title}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Hotspot details card popup */}
        {activeHotspot && (
          <div className="mt-2 sm:mt-3 p-3 sm:p-4 rounded-xl bg-slate-900/95 backdrop-blur-xl border border-blue-500/40 text-slate-100 shadow-2xl max-w-md pointer-events-auto animate-in fade-in slide-in-from-bottom-2 duration-200">
            {(() => {
              const item = hotspots.find((h) => h.id === activeHotspot);
              if (!item) return null;
              return (
                <div>
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs sm:text-sm font-bold text-blue-400 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                      {item.title}
                    </h4>
                    <button
                      onClick={() => setActiveHotspot(null)}
                      className="text-xs text-slate-400 hover:text-white p-1"
                    >
                      ✕
                    </button>
                  </div>
                  <p className="mt-1 text-[11px] sm:text-xs text-slate-300 leading-relaxed">{item.desc}</p>
                </div>
              );
            })()}
          </div>
        )}
      </div>

      {/* Bottom Material Selector Bar */}
      <div className="absolute bottom-2.5 sm:bottom-4 left-2.5 sm:left-4 right-2.5 sm:right-4 flex items-center justify-between gap-2 bg-black/70 backdrop-blur-xl px-3 py-1.5 sm:py-2 rounded-xl border border-white/10 pointer-events-auto overflow-x-auto">
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          <span className="text-[10px] sm:text-xs font-semibold text-slate-300 hidden xs:inline">Finish:</span>
          <div className="flex items-center gap-1 sm:gap-1.5">
            {Object.entries(MATERIALS).map(([key, config]) => (
              <button
                key={key}
                onClick={() => setSelectedMat(key)}
                className={`px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg text-[10px] sm:text-xs font-medium transition-all ${
                  selectedMat === key
                    ? "bg-blue-600 text-white shadow-md shadow-blue-500/30 scale-105"
                    : "bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700"
                }`}
              >
                {config.name.split(" ")[0]}
              </button>
            ))}
          </div>
        </div>

        <div className="hidden md:flex items-center gap-2 text-[10px] sm:text-[11px] text-slate-400 shrink-0">
          <span>Drag to rotate • Scroll to zoom</span>
        </div>
      </div>
    </div>
  );
}

/**
 * Procedural Geometry Builder for Precision Medical Instruments
 */
function buildInstrumentModel(group, type, metalMat, goldMat, darkMat) {
  group.clear();

  if (type === "scissors" || type === "cuticle") {
    buildScissorsModel(group, metalMat, goldMat);
  } else if (type === "forceps" || type === "needle-holder") {
    buildForcepsModel(group, metalMat, goldMat);
  } else if (type === "tweezers") {
    buildTweezersModel(group, metalMat);
  } else {
    // Default: Scalpel Handle / Dental Probe / Spatula
    buildScalpelModel(group, metalMat, darkMat);
  }
}

/**
 * 1. Precision Scalpel Handle #3 & #4
 */
function buildScalpelModel(group, metalMat, darkMat) {
  // Main flat handle shank
  const handleGeo = new THREE.BoxGeometry(0.32, 2.6, 0.08);
  const handle = new THREE.Mesh(handleGeo, metalMat);
  handle.position.y = -0.3;
  group.add(handle);

  // Scalpel Neck tapering
  const neckGeo = new THREE.CylinderGeometry(0.08, 0.14, 0.8, 16);
  const neck = new THREE.Mesh(neckGeo, metalMat);
  neck.position.y = 1.3;
  group.add(neck);

  // Scalpel Blade Holder Bayonet (Slanted surgical blade #10)
  const bladeShape = new THREE.Shape();
  bladeShape.moveTo(0, 0);
  bladeShape.lineTo(0.18, 0.6);
  bladeShape.lineTo(0.02, 1.3);
  bladeShape.lineTo(-0.06, 0.5);
  bladeShape.closePath();

  const extrudeSettings = { depth: 0.02, bevelEnabled: true, bevelSegments: 3, steps: 1, bevelSize: 0.01, bevelThickness: 0.01 };
  const bladeGeo = new THREE.ExtrudeGeometry(bladeShape, extrudeSettings);
  const blade = new THREE.Mesh(bladeGeo, metalMat);
  blade.position.set(-0.05, 1.6, -0.01);
  group.add(blade);

  // Laser Etched Metric Graduation lines (Tactile ridges on handle)
  for (let i = -1.0; i <= 0.6; i += 0.14) {
    const ridgeGeo = new THREE.BoxGeometry(0.24, 0.03, 0.095);
    const ridge = new THREE.Mesh(ridgeGeo, metalMat);
    ridge.position.set(0, i, 0);
    group.add(ridge);
  }

  // Rounded handle butt
  const buttGeo = new THREE.CylinderGeometry(0.15, 0.15, 0.08, 16);
  const butt = new THREE.Mesh(buttGeo, metalMat);
  butt.rotation.x = Math.PI / 2;
  butt.position.set(0, -1.6, 0);
  group.add(butt);
}

/**
 * 2. Surgical Hemostatic Forceps / Needle Holder (Halsted & Mayo-Hegar)
 */
function buildForcepsModel(group, metalMat, goldMat) {
  // Pivot screw / Box lock
  const pivotGeo = new THREE.CylinderGeometry(0.22, 0.22, 0.16, 20);
  const pivot = new THREE.Mesh(pivotGeo, metalMat);
  pivot.rotation.x = Math.PI / 2;
  pivot.position.set(0, 0.4, 0);
  group.add(pivot);

  // Left Shank & Blade
  const leftBladeGeo = new THREE.BoxGeometry(0.12, 1.4, 0.09);
  const leftBlade = new THREE.Mesh(leftBladeGeo, goldMat || metalMat);
  leftBlade.position.set(-0.08, 1.15, 0);
  leftBlade.rotation.z = 0.08;
  group.add(leftBlade);

  // Right Shank & Blade
  const rightBladeGeo = new THREE.BoxGeometry(0.12, 1.4, 0.09);
  const rightBlade = new THREE.Mesh(rightBladeGeo, goldMat || metalMat);
  rightBlade.position.set(0.08, 1.15, 0);
  rightBlade.rotation.z = -0.08;
  group.add(rightBlade);

  // Serrated tip details
  for (let y = 1.2; y <= 1.8; y += 0.09) {
    const serrGeo = new THREE.BoxGeometry(0.14, 0.02, 0.11);
    const serr = new THREE.Mesh(serrGeo, goldMat || metalMat);
    serr.position.set(0, y, 0);
    group.add(serr);
  }

  // Left Arm Shaft
  const leftArmGeo = new THREE.CylinderGeometry(0.07, 0.08, 1.6, 16);
  const leftArm = new THREE.Mesh(leftArmGeo, metalMat);
  leftArm.position.set(-0.25, -0.4, 0);
  leftArm.rotation.z = -0.22;
  group.add(leftArm);

  // Right Arm Shaft
  const rightArmGeo = new THREE.CylinderGeometry(0.07, 0.08, 1.6, 16);
  const rightArm = new THREE.Mesh(rightArmGeo, metalMat);
  rightArm.position.set(0.25, -0.4, 0);
  rightArm.rotation.z = 0.22;
  group.add(rightArm);

  // Finger Loops (Torus Geometry)
  const loopGeo = new THREE.TorusGeometry(0.38, 0.07, 16, 32);

  const leftLoop = new THREE.Mesh(loopGeo, goldMat || metalMat);
  leftLoop.position.set(-0.55, -1.4, 0);
  group.add(leftLoop);

  const rightLoop = new THREE.Mesh(loopGeo, goldMat || metalMat);
  rightLoop.position.set(0.55, -1.4, 0);
  group.add(rightLoop);

  // 3-step Ratchet lock catch
  const ratchetGeo = new THREE.BoxGeometry(0.4, 0.08, 0.08);
  const ratchet = new THREE.Mesh(ratchetGeo, metalMat);
  ratchet.position.set(0, -0.9, 0);
  group.add(ratchet);
}

/**
 * 3. Surgical Scissors (Mayo / Metzenbaum)
 */
function buildScissorsModel(group, metalMat, goldMat) {
  // Center Pivot screw
  const screwGeo = new THREE.CylinderGeometry(0.18, 0.18, 0.18, 20);
  const screw = new THREE.Mesh(screwGeo, metalMat);
  screw.rotation.x = Math.PI / 2;
  screw.position.set(0, 0.3, 0);
  group.add(screw);

  // Left Cutting Blade
  const bladeShape = new THREE.Shape();
  bladeShape.moveTo(-0.06, 0.3);
  bladeShape.lineTo(-0.16, 1.2);
  bladeShape.lineTo(-0.02, 1.8);
  bladeShape.lineTo(0.02, 0.3);
  bladeShape.closePath();

  const extrudeSettings = { depth: 0.04, bevelEnabled: true, bevelSegments: 3, steps: 1, bevelSize: 0.01, bevelThickness: 0.01 };
  const blade1Geo = new THREE.ExtrudeGeometry(bladeShape, extrudeSettings);
  const blade1 = new THREE.Mesh(blade1Geo, metalMat);
  blade1.position.set(0.02, 0, 0.02);
  group.add(blade1);

  // Right Cutting Blade
  const blade2Geo = new THREE.ExtrudeGeometry(bladeShape, extrudeSettings);
  const blade2 = new THREE.Mesh(blade2Geo, metalMat);
  blade2.scale.x = -1;
  blade2.position.set(-0.02, 0, -0.04);
  group.add(blade2);

  // Left Shank
  const shank1Geo = new THREE.CylinderGeometry(0.08, 0.09, 1.5, 16);
  const shank1 = new THREE.Mesh(shank1Geo, metalMat);
  shank1.position.set(-0.28, -0.5, 0);
  shank1.rotation.z = -0.25;
  group.add(shank1);

  // Right Shank
  const shank2Geo = new THREE.CylinderGeometry(0.08, 0.09, 1.5, 16);
  const shank2 = new THREE.Mesh(shank2Geo, metalMat);
  shank2.position.set(0.28, -0.5, 0);
  shank2.rotation.z = 0.25;
  group.add(shank2);

  // Gold / Chrome Finger Rings
  const ringGeo = new THREE.TorusGeometry(0.42, 0.08, 16, 32);

  const ring1 = new THREE.Mesh(ringGeo, goldMat || metalMat);
  ring1.position.set(-0.62, -1.45, 0);
  group.add(ring1);

  const ring2 = new THREE.Mesh(ringGeo, goldMat || metalMat);
  ring2.position.set(0.62, -1.45, 0);
  group.add(ring2);
}

/**
 * 4. Micro Tissue Forceps / Tweezers (Adson 1x2 Teeth)
 */
function buildTweezersModel(group, metalMat) {
  // Top joined spring bridge
  const bridgeGeo = new THREE.CylinderGeometry(0.18, 0.18, 0.35, 16);
  const bridge = new THREE.Mesh(bridgeGeo, metalMat);
  bridge.rotation.z = Math.PI / 2;
  bridge.position.set(0, -1.6, 0);
  group.add(bridge);

  // Left Arm
  const arm1Geo = new THREE.BoxGeometry(0.12, 3.2, 0.06);
  const arm1 = new THREE.Mesh(arm1Geo, metalMat);
  arm1.position.set(-0.16, 0, 0);
  arm1.rotation.z = 0.05;
  group.add(arm1);

  // Right Arm
  const arm2Geo = new THREE.BoxGeometry(0.12, 3.2, 0.06);
  const arm2 = new THREE.Mesh(arm2Geo, metalMat);
  arm2.position.set(0.16, 0, 0);
  arm2.rotation.z = -0.05;
  group.add(arm2);

  // Serrated thumb pads on both sides
  for (let y = -0.3; y <= 0.5; y += 0.12) {
    const pad1Geo = new THREE.BoxGeometry(0.16, 0.03, 0.09);
    const pad1 = new THREE.Mesh(pad1Geo, metalMat);
    pad1.position.set(-0.18, y, 0);
    group.add(pad1);

    const pad2 = new THREE.Mesh(pad1Geo, metalMat);
    pad2.position.set(0.18, y, 0);
    group.add(pad2);
  }

  // 1x2 Micro interlocking teeth at tip
  const tooth1 = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.12, 0.06), metalMat);
  tooth1.position.set(-0.03, 1.6, 0);
  group.add(tooth1);

  const tooth2 = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.12, 0.06), metalMat);
  tooth2.position.set(0.03, 1.6, 0);
  group.add(tooth2);
}
