import * as THREE from 'three';

const markerTextureCache = new Map<number, THREE.CanvasTexture>();

export function getNumberedMarkerTexture(num: number): THREE.CanvasTexture {
  if (markerTextureCache.has(num)) {
    return markerTextureCache.get(num)!;
  }

  if (typeof window === 'undefined') {
    return new THREE.CanvasTexture();
  }

  const canvas = document.createElement('canvas');
  canvas.width = 128;
  canvas.height = 128;
  const ctx = canvas.getContext('2d');

  if (ctx) {
    ctx.clearRect(0, 0, 128, 128);

    // Outer soft glow shadow
    ctx.shadowColor = 'rgba(230, 161, 0, 0.4)';
    ctx.shadowBlur = 12;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 2;

    // Outer gold rim
    ctx.beginPath();
    ctx.arc(64, 60, 44, 0, Math.PI * 2);
    ctx.fillStyle = '#E6A100'; // MedGenz Gold
    ctx.fill();

    // Reset shadow
    ctx.shadowColor = 'transparent';

    // Dark titanium slate inner circle
    ctx.beginPath();
    ctx.arc(64, 60, 38, 0, Math.PI * 2);
    ctx.fillStyle = '#0f172a';
    ctx.fill();

    // Center gold number
    ctx.fillStyle = '#FFB80A';
    ctx.font = 'bold 42px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(num.toString(), 64, 61);
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  markerTextureCache.set(num, texture);
  return texture;
}

export function createMarkerSprite(num: number, productId: string): THREE.Sprite {
  const texture = getNumberedMarkerTexture(num);
  const material = new THREE.SpriteMaterial({
    map: texture,
    depthTest: false,
    depthWrite: false,
    transparent: true,
  });

  const sprite = new THREE.Sprite(material);
  sprite.scale.set(0.38, 0.38, 1.0);
  sprite.userData = { isMarker: true, productId, markerNumber: num };
  sprite.renderOrder = 999;
  return sprite;
}
