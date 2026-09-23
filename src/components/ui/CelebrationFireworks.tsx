"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  alpha: number;
  decay: number;
  color: string;
  size: number;
  sparkle: boolean;
  gravity: number;
  friction: number;
}

interface Rocket {
  x: number;
  y: number;
  targetY: number;
  vx: number;
  vy: number;
  color: string;
  trail: { x: number; y: number; alpha: number }[];
  burstSize: number;
}

const CELEBRATION_PALETTES = [
  ["#FFD700", "#FFA500", "#FF4500", "#FFF8DC", "#FFB703"], // Royal Gold Celebration
  ["#00F0FF", "#38BDF8", "#0284C7", "#E0F2FE", "#00B4D8"], // Almas Cyan Blue
  ["#10B981", "#34D399", "#059669", "#A7F3D0", "#FFD700"], // Emerald & Gold
  ["#FF1493", "#FF69B4", "#FF007F", "#FFE4E1", "#FFD700"], // Festive Rose Ruby
  ["#9333EA", "#C084FC", "#F472B6", "#FFD700", "#FFFFFF"], // Royal Purple Glamour
];

interface CelebrationFireworksProps {
  className?: string;
  autoLaunch?: boolean;
  intensity?: "gentle" | "medium" | "festive";
}

export function CelebrationFireworks({
  className = "",
  autoLaunch = true,
  intensity = "festive",
}: CelebrationFireworksProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const animationFrameId = useRef<number | null>(null);

  const rocketsRef = useRef<Rocket[]>([]);
  const particlesRef = useRef<Particle[]>([]);
  const lastLaunchTime = useRef<number>(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const createBurst = useCallback((x: number, y: number, customPalette?: string[], burstScale: number = 1) => {
    const palette =
      customPalette ||
      CELEBRATION_PALETTES[Math.floor(Math.random() * CELEBRATION_PALETTES.length)];
    
    // Determine burst style: standard circular ring, willow / palm or glittering stars
    const particleCount = Math.floor((36 + Math.random() * 24) * burstScale);
    const speedBase = 2.5 + Math.random() * 3.5;

    for (let i = 0; i < particleCount; i++) {
      const angle = (Math.PI * 2 * i) / particleCount + (Math.random() - 0.5) * 0.35;
      const speed = (speedBase * (0.6 + Math.random() * 0.8)) * burstScale;
      const color = palette[Math.floor(Math.random() * palette.length)];

      particlesRef.current.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        alpha: 1,
        decay: 0.012 + Math.random() * 0.016,
        color,
        size: Math.random() * 2.5 + 1.2,
        sparkle: Math.random() > 0.3,
        gravity: 0.045 + Math.random() * 0.02,
        friction: 0.965,
      });
    }

    // Add extra glittering micro-sparklers at center
    for (let i = 0; i < 12; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 1.5;
      particlesRef.current.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        alpha: 1,
        decay: 0.02 + Math.random() * 0.025,
        color: "#FFFFFF",
        size: Math.random() * 2 + 1,
        sparkle: true,
        gravity: 0.02,
        friction: 0.94,
      });
    }
  }, []);

  const launchRocket = useCallback((startX?: number, targetY?: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const width = canvas.width / (window.devicePixelRatio || 1);
    const height = canvas.height / (window.devicePixelRatio || 1);

    const x = startX !== undefined ? startX : Math.random() * (width * 0.85) + width * 0.075;
    const y = height + 10;
    const destY = targetY !== undefined ? targetY : Math.random() * (height * 0.55) + height * 0.12;
    
    const distanceY = y - destY;
    const vy = -Math.sqrt(2 * 0.12 * distanceY) * (0.95 + Math.random() * 0.1);
    const vx = ((Math.random() - 0.5) * width * 0.15) / Math.abs(vy);

    const colors = ["#FFD700", "#FF4500", "#00F0FF", "#10B981", "#EC4899", "#F59E0B"];
    const color = colors[Math.floor(Math.random() * colors.length)];

    rocketsRef.current.push({
      x,
      y,
      targetY: destY,
      vx,
      vy,
      color,
      trail: [],
      burstSize: 1 + Math.random() * 0.4,
    });
  }, []);

  // Handle user interaction click to shoot fireworks
  const handleCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Instant celebratory explosion at clicked location + extra celebratory launch!
    createBurst(x, y, undefined, 1.4);
    setTimeout(() => {
      createBurst(x + (Math.random() - 0.5) * 50, y + (Math.random() - 0.5) * 40, undefined, 1.1);
    }, 150);
  };

  useEffect(() => {
    if (!isClient) return;

    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = container.clientWidth;
      const height = container.clientHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
    };

    resize();
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(container);

    let isVisible = true;
    const handleVisibilityChange = () => {
      isVisible = !document.hidden;
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Initial festive burst on load
    const initialTimer1 = setTimeout(() => {
      const width = container.clientWidth;
      const height = container.clientHeight;
      createBurst(width * 0.25, height * 0.35, ["#FFD700", "#FFB703", "#FFFFFF"], 1.3);
    }, 600);

    const initialTimer2 = setTimeout(() => {
      const width = container.clientWidth;
      const height = container.clientHeight;
      createBurst(width * 0.75, height * 0.3, ["#00F0FF", "#38BDF8", "#FFD700"], 1.3);
    }, 1100);

    const initialTimer3 = setTimeout(() => {
      const width = container.clientWidth;
      const height = container.clientHeight;
      createBurst(width * 0.5, height * 0.22, ["#10B981", "#FFD700", "#FF4500"], 1.4);
    }, 1600);

    // Main animation loop
    const launchInterval = intensity === "festive" ? 1800 : intensity === "medium" ? 2800 : 4200;

    const render = (time: number) => {
      if (!isVisible) {
        animationFrameId.current = requestAnimationFrame(render);
        return;
      }

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = canvas.width / dpr;
      const height = canvas.height / dpr;

      // Soft clear with transparent trail
      ctx.clearRect(0, 0, width, height);

      // Auto launch rockets periodically
      if (autoLaunch && time - lastLaunchTime.current > launchInterval) {
        lastLaunchTime.current = time;
        launchRocket();
        // Occasionally launch double fireworks
        if (Math.random() > 0.45) {
          setTimeout(() => launchRocket(), 350 + Math.random() * 400);
        }
      }

      // Update & render rockets
      for (let i = rocketsRef.current.length - 1; i >= 0; i--) {
        const r = rocketsRef.current[i];
        r.trail.push({ x: r.x, y: r.y, alpha: 0.9 });
        if (r.trail.length > 7) r.trail.shift();

        r.x += r.vx;
        r.y += r.vy;
        r.vy += 0.11; // rocket gravity deceleration

        // Draw glowing rocket trail
        ctx.beginPath();
        for (let j = 0; j < r.trail.length; j++) {
          const t = r.trail[j];
          ctx.strokeStyle = r.color;
          ctx.lineWidth = (j + 1) * 0.45;
          ctx.globalAlpha = (j / r.trail.length) * 0.8;
          if (j === 0) ctx.moveTo(t.x, t.y);
          else ctx.lineTo(t.x, t.y);
        }
        ctx.stroke();

        // Rocket head spark
        ctx.beginPath();
        ctx.arc(r.x, r.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = "#FFFFFF";
        ctx.globalAlpha = 1;
        ctx.fill();

        // Explode condition: near target altitude or downward velocity
        if (r.y <= r.targetY || r.vy >= -0.5) {
          createBurst(r.x, r.y, undefined, r.burstSize);
          rocketsRef.current.splice(i, 1);
        }
      }

      // Update & render explosion particles
      for (let i = particlesRef.current.length - 1; i >= 0; i--) {
        const p = particlesRef.current[i];
        p.vx *= p.friction;
        p.vy *= p.friction;
        p.vy += p.gravity;
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= p.decay;

        if (p.alpha <= 0) {
          particlesRef.current.splice(i, 1);
          continue;
        }

        // Particle sparkle shimmer
        let currentSize = p.size;
        let currentAlpha = p.alpha;
        if (p.sparkle && Math.random() > 0.3) {
          currentAlpha = Math.min(1, p.alpha * (1.2 + Math.random() * 0.5));
          currentSize *= 1.2;
        }

        ctx.save();
        ctx.globalAlpha = currentAlpha;
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 6;
        ctx.beginPath();
        ctx.arc(p.x, p.y, currentSize, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;
      animationFrameId.current = requestAnimationFrame(render);
    };

    animationFrameId.current = requestAnimationFrame(render);

    return () => {
      clearTimeout(initialTimer1);
      clearTimeout(initialTimer2);
      clearTimeout(initialTimer3);
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
      resizeObserver.disconnect();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [isClient, autoLaunch, intensity, createBurst, launchRocket]);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 w-full h-full overflow-hidden pointer-events-auto ${className}`}
      title="Click anywhere for celebratory fireworks!"
    >
      <canvas
        ref={canvasRef}
        onClick={handleCanvasClick}
        className="w-full h-full cursor-pointer block"
      />
    </div>
  );
}
