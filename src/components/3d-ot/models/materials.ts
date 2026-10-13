import * as THREE from 'three';

// Texture generator for medical monitor screen with MedGenz branding
export function createMonitorTexture(): THREE.CanvasTexture {
  if (typeof window === 'undefined') {
    return new THREE.CanvasTexture();
  }
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 340;
  const ctx = canvas.getContext('2d');

  if (ctx) {
    // Dark medical display fascia
    ctx.fillStyle = '#060a12';
    ctx.fillRect(0, 0, 512, 340);

    // Top status header with MedGenz branding
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(0, 0, 512, 34);
    ctx.fillStyle = '#E6A100'; // MedGenz Golden Yellow
    ctx.font = 'bold 13px sans-serif';
    ctx.fillText('MEDGENZ SURGICAL MONITOR · OT BED 01', 12, 22);
    ctx.fillStyle = '#10b981';
    ctx.fillText('NORMAL SINUS RHYTHM', 315, 22);

    // Fine grid overlay
    ctx.strokeStyle = '#1e293b';
    ctx.lineWidth = 1;
    for (let x = 0; x < 512; x += 32) {
      ctx.beginPath();
      ctx.moveTo(x, 34);
      ctx.lineTo(x, 340);
      ctx.stroke();
    }
    for (let y = 34; y < 340; y += 32) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(512, y);
      ctx.stroke();
    }

    // Lead II ECG Waveform (MedGenz Amber/Gold)
    ctx.strokeStyle = '#FFB80A';
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    let currentY = 88;
    ctx.moveTo(12, currentY);
    for (let x = 12; x < 360; x += 1) {
      const cycle = (x % 70);
      let yOffset = 0;
      if (cycle > 25 && cycle < 30) yOffset = -8;
      else if (cycle >= 30 && cycle < 35) yOffset = 42;
      else if (cycle >= 35 && cycle < 40) yOffset = -22;
      else if (cycle >= 45 && cycle < 55) yOffset = 10;
      ctx.lineTo(x, currentY - yOffset);
    }
    ctx.stroke();

    // SpO2 Plethysmograph Waveform (Cyan)
    ctx.strokeStyle = '#38bdf8';
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    currentY = 168;
    ctx.moveTo(12, currentY);
    for (let x = 12; x < 360; x += 2) {
      const cycle = (x % 60);
      const yOffset = Math.sin((cycle / 60) * Math.PI) * 22;
      ctx.lineTo(x, currentY - yOffset);
    }
    ctx.stroke();

    // Respiration / EtCO2 (Emerald)
    ctx.strokeStyle = '#10b981';
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    currentY = 248;
    ctx.moveTo(12, currentY);
    for (let x = 12; x < 360; x += 3) {
      const cycle = (x % 90);
      const yOffset = cycle < 50 ? 25 : 0;
      ctx.lineTo(x, currentY - yOffset);
    }
    ctx.stroke();

    // Vitals Readouts (Right Column)
    // HR
    ctx.fillStyle = '#FFB80A';
    ctx.font = 'bold 12px sans-serif';
    ctx.fillText('HR bpm', 380, 62);
    ctx.font = 'bold 36px monospace';
    ctx.fillText('72', 380, 98);

    // SpO2
    ctx.fillStyle = '#38bdf8';
    ctx.font = 'bold 12px sans-serif';
    ctx.fillText('SpO2 %', 380, 142);
    ctx.font = 'bold 36px monospace';
    ctx.fillText('99', 380, 178);

    // NIBP
    ctx.fillStyle = '#ef4444';
    ctx.font = 'bold 12px sans-serif';
    ctx.fillText('NIBP mmHg', 380, 222);
    ctx.font = 'bold 26px monospace';
    ctx.fillText('120/80', 380, 254);

    // EtCO2
    ctx.fillStyle = '#10b981';
    ctx.font = 'bold 12px sans-serif';
    ctx.fillText('EtCO2', 380, 292);
    ctx.font = 'bold 26px monospace';
    ctx.fillText('38', 380, 324);
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

// Texture generator for surgeon control panel
export function createSurgeonPanelTexture(): THREE.CanvasTexture {
  if (typeof window === 'undefined') {
    return new THREE.CanvasTexture();
  }
  const canvas = document.createElement('canvas');
  canvas.width = 400;
  canvas.height = 540;
  const ctx = canvas.getContext('2d');

  if (ctx) {
    // Medical glass dark fascia
    ctx.fillStyle = '#060a12';
    ctx.fillRect(0, 0, 400, 540);

    // Header
    ctx.fillStyle = '#1e293b';
    ctx.fillRect(0, 0, 400, 48);
    ctx.fillStyle = '#E6A100';
    ctx.font = 'bold 15px sans-serif';
    ctx.fillText('MEDGENZ SURGEON CONTROL SYSTEM', 16, 30);

    // Section 1: Positive Pressure & Environmental
    ctx.strokeStyle = '#334155';
    ctx.lineWidth = 1.5;
    ctx.strokeRect(16, 60, 368, 120);

    ctx.fillStyle = '#E6A100';
    ctx.font = 'bold 11px sans-serif';
    ctx.fillText('OT AIR QUALITY & PRESSURE CASSETTE', 26, 82);

    ctx.fillStyle = '#10b981';
    ctx.font = 'bold 32px monospace';
    ctx.fillText('+20 Pa', 30, 130);
    ctx.font = '11px sans-serif';
    ctx.fillText('POSITIVE OVERPRESSURE (PASS)', 30, 155);

    ctx.fillStyle = '#f8fafc';
    ctx.font = 'bold 24px monospace';
    ctx.fillText('21.5°C', 210, 125);
    ctx.fillText('48% RH', 210, 155);

    // Section 2: Surgical Clocks & Timers
    ctx.strokeRect(16, 195, 368, 110);
    ctx.fillStyle = '#E6A100';
    ctx.font = 'bold 11px sans-serif';
    ctx.fillText('PROCEDURE & ANESTHESIA TIMERS', 26, 215);

    ctx.fillStyle = '#FFB80A';
    ctx.font = 'bold 36px monospace';
    ctx.fillText('10:42:15', 30, 265);
    ctx.font = '11px sans-serif';
    ctx.fillStyle = '#94a3b8';
    ctx.fillText('ELAPSED SURGICAL TIME: 01:24:30', 30, 290);

    // Section 3: Medical Gas Pipeline Status
    ctx.strokeRect(16, 320, 368, 140);
    ctx.fillStyle = '#E6A100';
    ctx.font = 'bold 11px sans-serif';
    ctx.fillText('MEDICAL GAS PIPELINE STATUS', 26, 340);

    const gases = [
      { name: 'OXYGEN (O2)', status: '4.2 BAR OK', color: '#ffffff' },
      { name: 'NITROUS OXIDE (N2O)', status: '4.1 BAR OK', color: '#38bdf8' },
      { name: 'MED AIR 4-BAR', status: '4.0 BAR OK', color: '#e2e8f0' },
      { name: 'SURGICAL VACUUM', status: '-0.7 BAR OK', color: '#facc15' },
    ];

    gases.forEach((g, i) => {
      const y = 370 + i * 22;
      ctx.fillStyle = g.color;
      ctx.font = 'bold 11px monospace';
      ctx.fillText(`● ${g.name}: ${g.status}`, 26, y);
    });

    // Bottom laminar air status
    ctx.fillStyle = '#10b981';
    ctx.fillRect(16, 480, 368, 40);
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 12px sans-serif';
    ctx.fillText('LAMINAR AIRFLOW SYSTEM: ACTIVE [0.32 m/s]', 30, 505);
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

// X-ray DICOM viewer texture
export function createXRayTexture(): THREE.CanvasTexture {
  if (typeof window === 'undefined') {
    return new THREE.CanvasTexture();
  }
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 256;
  const ctx = canvas.getContext('2d');

  if (ctx) {
    ctx.fillStyle = '#0a0f1d';
    ctx.fillRect(0, 0, 512, 256);

    ctx.fillStyle = '#e2e8f0';
    ctx.font = '10px monospace';
    ctx.fillText('PATIENT: MEDGENZ REF-0941', 20, 24);
    ctx.fillText('CHEST PA - DIGITAL DICOM', 20, 38);

    ctx.strokeStyle = '#475569';
    ctx.lineWidth = 3;
    for (let r = 0; r < 7; r++) {
      const ry = 70 + r * 20;
      ctx.beginPath();
      ctx.ellipse(140, ry, 60 - r * 4, 10, -0.1, 0, Math.PI);
      ctx.stroke();
    }

    ctx.fillStyle = '#94a3b8';
    ctx.fillRect(135, 50, 10, 160);

    ctx.fillStyle = '#e2e8f0';
    ctx.fillText('ORTHOPEDIC KNEE AP/LAT', 280, 24);

    ctx.fillStyle = '#64748b';
    ctx.fillRect(350, 45, 45, 80);
    ctx.fillRect(345, 140, 55, 90);

    ctx.fillStyle = '#0a0f1d';
    ctx.fillRect(340, 126, 65, 12);
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

// Centralized material factory for performance & realistic PBR consistency
export class TheatreMaterials {
  static stainlessSteel = new THREE.MeshStandardMaterial({
    color: 0xe2e8f0,
    metalness: 0.94,
    roughness: 0.14,
  });

  static darkStainless = new THREE.MeshStandardMaterial({
    color: 0x334155,
    metalness: 0.88,
    roughness: 0.22,
  });

  static surgicalChrome = new THREE.MeshStandardMaterial({
    color: 0xf8fafc,
    metalness: 0.98,
    roughness: 0.06,
  });

  static wallPanel = new THREE.MeshStandardMaterial({
    color: 0xdbeafe, // Soft surgical cleanroom blue-tinted white
    metalness: 0.08,
    roughness: 0.20,
  });

  static wallPanelTransparent = new THREE.MeshStandardMaterial({
    color: 0x38bdf8,
    metalness: 0.1,
    roughness: 0.2,
    transparent: true,
    opacity: 0.20,
    wireframe: false,
  });

  static floorEpoxy = new THREE.MeshStandardMaterial({
    color: 0x1e293b, // Deep anti-static titanium slate floor
    metalness: 0.20,
    roughness: 0.28,
  });

  static ceilingPlenum = new THREE.MeshStandardMaterial({
    color: 0xe2e8f0,
    metalness: 0.1,
    roughness: 0.30,
  });

  static tableMattress = new THREE.MeshStandardMaterial({
    color: 0x1e3a8a, // Authentic surgical navy blue mattress
    metalness: 0.08,
    roughness: 0.45,
  });

  static surgicalLightHousing = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    metalness: 0.35,
    roughness: 0.22,
  });

  static surgicalLightEmissive = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    emissive: 0xffffff,
    emissiveIntensity: 1.5,
    roughness: 0.1,
  });

  static peripheralLightEmissive = new THREE.MeshStandardMaterial({
    color: 0xfffbeb,
    emissive: 0xfffbeb,
    emissiveIntensity: 0.9,
    roughness: 0.2,
  });

  static hepaDiffuser = new THREE.MeshStandardMaterial({
    color: 0xfff7ed,
    emissive: 0xE6A100, // MedGenz Gold glow
    emissiveIntensity: 0.3,
    roughness: 0.25,
    transparent: true,
    opacity: 0.88,
  });

  static glassWindow = new THREE.MeshPhysicalMaterial({
    color: 0xe0f2fe,
    metalness: 0.05,
    roughness: 0.06,
    transparent: true,
    opacity: 0.35,
    transmission: 0.90,
    ior: 1.5,
  });

  static rubberDark = new THREE.MeshStandardMaterial({
    color: 0x111827,
    metalness: 0.1,
    roughness: 0.8,
  });

  static copperPipe = new THREE.MeshStandardMaterial({
    color: 0xd97706,
    metalness: 0.92,
    roughness: 0.22,
  });

  static gasOxygen = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    metalness: 0.2,
    roughness: 0.35,
  });

  static gasNitrous = new THREE.MeshStandardMaterial({
    color: 0x2563eb,
    metalness: 0.2,
    roughness: 0.35,
  });

  static gasAir = new THREE.MeshStandardMaterial({
    color: 0x334155,
    metalness: 0.2,
    roughness: 0.35,
  });

  static gasVacuum = new THREE.MeshStandardMaterial({
    color: 0xeab308,
    metalness: 0.2,
    roughness: 0.35,
  });

  static plasticWhite = new THREE.MeshStandardMaterial({
    color: 0xf8fafc,
    metalness: 0.05,
    roughness: 0.28,
  });

  static plasticGold = new THREE.MeshStandardMaterial({
    color: 0xE6A100,
    metalness: 0.3,
    roughness: 0.25,
  });

  static redEmergency = new THREE.MeshStandardMaterial({
    color: 0xef4444,
    metalness: 0.2,
    roughness: 0.3,
  });

  static greenNormal = new THREE.MeshStandardMaterial({
    color: 0x10b981,
    metalness: 0.2,
    roughness: 0.3,
  });

  static selectionOutline = new THREE.MeshBasicMaterial({
    color: 0xE6A100, // MedGenz Golden Yellow
    wireframe: true,
  });
}
