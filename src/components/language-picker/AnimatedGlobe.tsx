'use client';

import { useEffect, useRef } from 'react';

type IPoint = {
  lat: number;
  lng: number;
  x: number;
  y: number;
  z: number;
};

type IFloatingDot = {
  color: string;
  point: IPoint;
  pulseOffset: number;
  size: number;
};

const GLOBE_COLORS = {
  border: 'rgba(14, 116, 144, 0.2)',
  connectionLines: 'rgba(14, 116, 144, 0.15)',
  continentFill: 'rgba(14, 116, 144, 0.15)',
  dots: [
    'rgba(14, 116, 144, 0.9)',
    'rgba(6, 182, 212, 0.85)',
    'rgba(20, 184, 166, 0.85)',
    'rgba(59, 130, 246, 0.8)',
    'rgba(249, 115, 22, 0.85)',
  ],
  glowInner: 'rgba(14, 116, 144, 0.08)',
  gridLines: 'rgba(14, 116, 144, 0.12)',
  landOutline: 'rgba(14, 116, 144, 0.35)',
};

// Simplified continent outlines (lat, lng pairs)
const CONTINENTS: [number, number][][] = [
  // North America
  [
    [60, -140],
    [65, -170],
    [72, -170],
    [71, -155],
    [60, -140],
    [55, -130],
    [50, -125],
    [48, -123],
    [40, -124],
    [33, -117],
    [25, -110],
    [20, -105],
    [15, -92],
    [18, -88],
    [22, -97],
    [25, -97],
    [30, -85],
    [30, -81],
    [35, -75],
    [40, -74],
    [45, -67],
    [47, -60],
    [50, -57],
    [52, -55],
    [55, -60],
    [58, -65],
    [60, -65],
    [62, -75],
    [65, -85],
    [68, -95],
    [70, -100],
    [70, -130],
    [65, -140],
    [60, -140],
  ],
  // South America
  [
    [12, -72],
    [10, -67],
    [8, -60],
    [5, -52],
    [0, -50],
    [-5, -35],
    [-10, -37],
    [-15, -39],
    [-20, -40],
    [-23, -43],
    [-28, -49],
    [-33, -52],
    [-38, -57],
    [-42, -63],
    [-46, -67],
    [-50, -70],
    [-53, -70],
    [-55, -68],
    [-52, -75],
    [-46, -75],
    [-40, -73],
    [-35, -72],
    [-30, -71],
    [-22, -70],
    [-15, -75],
    [-5, -80],
    [0, -78],
    [5, -77],
    [10, -75],
    [12, -72],
  ],
  // Europe
  [
    [36, -5],
    [38, -9],
    [43, -9],
    [47, -2],
    [48, -5],
    [51, 2],
    [54, 8],
    [55, 12],
    [57, 10],
    [60, 5],
    [62, 5],
    [65, 12],
    [70, 20],
    [70, 30],
    [65, 30],
    [60, 30],
    [55, 28],
    [50, 30],
    [45, 28],
    [42, 28],
    [40, 26],
    [38, 24],
    [36, 22],
    [36, 15],
    [38, 12],
    [40, 15],
    [42, 12],
    [44, 8],
    [43, 3],
    [39, 0],
    [36, -5],
  ],
  // Africa
  [
    [37, 10],
    [35, -1],
    [32, -5],
    [28, -13],
    [22, -17],
    [15, -17],
    [10, -15],
    [5, -10],
    [5, -5],
    [0, 10],
    [-5, 12],
    [-10, 14],
    [-15, 17],
    [-20, 20],
    [-25, 25],
    [-30, 28],
    [-34, 18],
    [-34, 25],
    [-30, 32],
    [-25, 35],
    [-15, 40],
    [-10, 42],
    [-2, 42],
    [5, 42],
    [10, 45],
    [12, 44],
    [15, 40],
    [20, 40],
    [25, 35],
    [30, 32],
    [32, 32],
    [35, 25],
    [37, 15],
    [37, 10],
  ],
  // Asia
  [
    [42, 28],
    [45, 40],
    [42, 50],
    [35, 52],
    [25, 57],
    [20, 58],
    [25, 65],
    [28, 70],
    [35, 75],
    [40, 75],
    [45, 80],
    [50, 80],
    [55, 75],
    [60, 70],
    [65, 75],
    [70, 70],
    [70, 140],
    [65, 142],
    [60, 140],
    [55, 135],
    [50, 130],
    [45, 135],
    [42, 132],
    [38, 128],
    [35, 130],
    [32, 122],
    [28, 120],
    [22, 115],
    [20, 110],
    [10, 106],
    [5, 103],
    [1, 104],
    [-5, 105],
    [-8, 115],
    [-8, 120],
    [-5, 120],
    [5, 120],
    [10, 120],
    [15, 121],
    [20, 110],
    [25, 100],
    [30, 95],
    [28, 85],
    [22, 88],
    [20, 73],
    [25, 68],
    [30, 65],
    [35, 52],
  ],
  // Australia
  [
    [-12, 130],
    [-15, 125],
    [-20, 118],
    [-25, 114],
    [-30, 115],
    [-35, 117],
    [-38, 145],
    [-35, 150],
    [-30, 153],
    [-25, 153],
    [-20, 149],
    [-15, 145],
    [-12, 142],
    [-10, 135],
    [-12, 130],
  ],
];

// City positions for floating dots
const CITIES = [
  { lat: 40.7, lng: -74 },
  { lat: 51.5, lng: -0.1 },
  { lat: 35.7, lng: 139.7 },
  { lat: -33.9, lng: 18.4 },
  { lat: -23.5, lng: -46.6 },
  { lat: 19.4, lng: -99.1 },
  { lat: 55.7, lng: 37.6 },
  { lat: 28.6, lng: 77.2 },
  { lat: -33.8, lng: 151.2 },
  { lat: 48.9, lng: 2.35 },
  { lat: 1.35, lng: 103.8 },
  { lat: 25.2, lng: 55.3 },
  { lat: 37.5, lng: 127 },
  { lat: 22.3, lng: 114.2 },
  { lat: -1.3, lng: 36.8 },
];

function latLngToPoint(lat: number, lng: number, radius: number): IPoint {
  const phi = ((90 - lat) * Math.PI) / 180;
  const theta = ((lng + 180) * Math.PI) / 180;
  return {
    lat,
    lng,
    x: -(radius * Math.sin(phi) * Math.cos(theta)),
    y: radius * Math.cos(phi),
    z: radius * Math.sin(phi) * Math.sin(theta),
  };
}

function rotateY(point: IPoint, angle: number): IPoint {
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  return {
    ...point,
    x: point.x * cos - point.z * sin,
    z: point.x * sin + point.z * cos,
  };
}

function rotateX(point: IPoint, angle: number): IPoint {
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  return {
    ...point,
    y: point.y * cos - point.z * sin,
    z: point.y * sin + point.z * cos,
  };
}

export type AnimatedGlobeProps = {
  /** Size of the globe in pixels */
  size?: number;
};

export const AnimatedGlobe = ({ size = 160 }: AnimatedGlobeProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const rotationRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const ctx = canvas.getContext('2d');
    if (!ctx) return undefined;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    ctx.scale(dpr, dpr);

    const centerX = size / 2;
    const centerY = size / 2;
    const radius = size * 0.38;

    const floatingDots: IFloatingDot[] = CITIES.map((city, i) => {
      const colorIndex = i % GLOBE_COLORS.dots.length;
      const color = GLOBE_COLORS.dots[colorIndex] ?? 'rgba(14, 116, 144, 0.9)';
      return {
        color,
        point: latLngToPoint(city.lat, city.lng, radius),
        pulseOffset: Math.random() * Math.PI * 2,
        size: 2 + Math.random() * 2,
      };
    });

    const tiltAngle = -0.3;

    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, size, size);

      const rotation = rotationRef.current;

      // Draw outer glow
      const glowGradient = ctx.createRadialGradient(
        centerX,
        centerY,
        radius * 0.8,
        centerX,
        centerY,
        radius * 1.4,
      );
      glowGradient.addColorStop(0, GLOBE_COLORS.glowInner);
      glowGradient.addColorStop(1, 'rgba(14, 116, 144, 0)');
      ctx.fillStyle = glowGradient;
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius * 1.4, 0, Math.PI * 2);
      ctx.fill();

      // Draw globe background
      const bgGradient = ctx.createRadialGradient(
        centerX - radius * 0.2,
        centerY - radius * 0.2,
        0,
        centerX,
        centerY,
        radius,
      );
      bgGradient.addColorStop(0, 'rgba(240, 249, 255, 0.8)');
      bgGradient.addColorStop(0.7, 'rgba(224, 242, 254, 0.5)');
      bgGradient.addColorStop(1, 'rgba(186, 230, 253, 0.3)');
      ctx.fillStyle = bgGradient;
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.fill();

      // Draw grid lines (latitude)
      for (let lat = -60; lat <= 60; lat += 30) {
        const points: IPoint[] = [];
        for (let lng = -180; lng <= 180; lng += 5) {
          let p = latLngToPoint(lat, lng, radius);
          p = rotateY(p, rotation);
          p = rotateX(p, tiltAngle);
          points.push(p);
        }
        ctx.strokeStyle = GLOBE_COLORS.gridLines;
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        let started = false;
        for (const p of points) {
          if (p.z > 0) {
            if (!started) {
              ctx.moveTo(centerX + p.x, centerY - p.y);
              started = true;
            } else {
              ctx.lineTo(centerX + p.x, centerY - p.y);
            }
          } else {
            started = false;
          }
        }
        ctx.stroke();
      }

      // Draw grid lines (longitude)
      for (let lng = -180; lng < 180; lng += 30) {
        const points: IPoint[] = [];
        for (let lat = -90; lat <= 90; lat += 5) {
          let p = latLngToPoint(lat, lng, radius);
          p = rotateY(p, rotation);
          p = rotateX(p, tiltAngle);
          points.push(p);
        }
        ctx.strokeStyle = GLOBE_COLORS.gridLines;
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        let started = false;
        for (const p of points) {
          if (p.z > 0) {
            if (!started) {
              ctx.moveTo(centerX + p.x, centerY - p.y);
              started = true;
            } else {
              ctx.lineTo(centerX + p.x, centerY - p.y);
            }
          } else {
            started = false;
          }
        }
        ctx.stroke();
      }

      // Draw continents
      for (const continent of CONTINENTS) {
        const transformed = continent.map(([contLat, contLng]) => {
          let p = latLngToPoint(contLat, contLng, radius);
          p = rotateY(p, rotation);
          p = rotateX(p, tiltAngle);
          return p;
        });

        ctx.fillStyle = GLOBE_COLORS.continentFill;
        ctx.beginPath();
        let started = false;
        for (const p of transformed) {
          if (p.z > 0) {
            if (!started) {
              ctx.moveTo(centerX + p.x, centerY - p.y);
              started = true;
            } else {
              ctx.lineTo(centerX + p.x, centerY - p.y);
            }
          }
        }
        ctx.closePath();
        ctx.fill();

        ctx.strokeStyle = GLOBE_COLORS.landOutline;
        ctx.lineWidth = 1;
        ctx.beginPath();
        started = false;
        for (const p of transformed) {
          if (p.z > 0) {
            if (!started) {
              ctx.moveTo(centerX + p.x, centerY - p.y);
              started = true;
            } else {
              ctx.lineTo(centerX + p.x, centerY - p.y);
            }
          } else {
            started = false;
          }
        }
        ctx.stroke();
      }

      // Draw connection lines between nearby visible dots
      const visibleDots: { dot: IFloatingDot; x: number; y: number }[] = [];
      for (const dot of floatingDots) {
        let p = rotateY(dot.point, rotation);
        p = rotateX(p, tiltAngle);
        if (p.z > 0) {
          visibleDots.push({ dot, x: centerX + p.x, y: centerY - p.y });
        }
      }

      for (let i = 0; i < visibleDots.length; i += 1) {
        for (let j = i + 1; j < visibleDots.length; j += 1) {
          const visibleDotI = visibleDots[i];
          const visibleDotJ = visibleDots[j];
          if (!visibleDotI || !visibleDotJ) continue;

          const dx = visibleDotI.x - visibleDotJ.x;
          const dy = visibleDotI.y - visibleDotJ.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < radius * 0.9) {
            ctx.strokeStyle = GLOBE_COLORS.connectionLines;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(visibleDotI.x, visibleDotI.y);
            ctx.lineTo(visibleDotJ.x, visibleDotJ.y);
            ctx.stroke();
          }
        }
      }

      // Draw floating dots with pulse
      const time = Date.now() * 0.001;
      for (const { dot, x, y } of visibleDots) {
        const pulse = 0.6 + 0.4 * Math.sin(time * 2 + dot.pulseOffset);

        const glow = ctx.createRadialGradient(x, y, 0, x, y, dot.size * 4);
        glow.addColorStop(0, dot.color.replace(/[\d.]+\)$/, `${0.3 * pulse})`));
        glow.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(x, y, dot.size * 4, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = dot.color.replace(/[\d.]+\)$/, `${pulse})`);
        ctx.beginPath();
        ctx.arc(x, y, dot.size * pulse, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = `rgba(255, 255, 255, ${0.8 * pulse})`;
        ctx.beginPath();
        ctx.arc(x, y, dot.size * 0.4 * pulse, 0, Math.PI * 2);
        ctx.fill();
      }

      // Draw globe border
      ctx.strokeStyle = GLOBE_COLORS.border;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.stroke();

      // Specular highlight
      const specGradient = ctx.createRadialGradient(
        centerX - radius * 0.3,
        centerY - radius * 0.3,
        0,
        centerX - radius * 0.3,
        centerY - radius * 0.3,
        radius * 0.6,
      );
      specGradient.addColorStop(0, 'rgba(255, 255, 255, 0.15)');
      specGradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
      ctx.fillStyle = specGradient;
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.fill();

      rotationRef.current += 0.003;
      animationRef.current = requestAnimationFrame(draw);
    }

    draw();

    return () => {
      cancelAnimationFrame(animationRef.current);
    };
  }, [size]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      height={size}
      style={{ height: size, width: size }}
      width={size}
    />
  );
};
