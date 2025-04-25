"use client"

import React, { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  brightness: number;
  brightnessSpeed: number;
}

const StarryCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stars: Star[] = [];
  const numStars = 60; 

  // 初始化光点
  const createStar = (): Star => {
    return {
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 2.5 + 0.5, // 光点大小（较小）
      speedX: (Math.random() - 0.5) * 0.5, // 较慢的速度
      speedY: (Math.random() - 0.5) * 0.5,
      brightness: Math.random(), // 初始亮度
      brightnessSpeed: Math.random() * 0.03 + 0.01, // 亮度变化速度
    };
  };

  // 初始化所有光点
  const initStars = () => {
    for (let i = 0; i < numStars; i++) {
      stars.push(createStar());
    }
  };

  // 动画逻辑
  const animate = (ctx: CanvasRenderingContext2D) => {
    // 清空画布
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    stars.forEach((star) => {
      // 更新位置
      star.x += star.speedX;
      star.y += star.speedY;

      // 边界检测
      if (star.x < 0 || star.x > ctx.canvas.width) {
        star.speedX *= -1;
      }
      if (star.y < 0 || star.y > ctx.canvas.height) {
        star.speedY *= -1;
      }

      // 更新亮度（模拟闪烁）
      star.brightness += star.brightnessSpeed;
      if (star.brightness > 1 || star.brightness < 0) {
        star.brightnessSpeed *= -1;
      }

      // 绘制光点
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 215, 0, ${star.brightness})`; // 金黄色光点，亮度变化
      ctx.fill();
    });

    // 循环动画
    requestAnimationFrame(() => animate(ctx));
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // 设置画布大小
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // 初始化光点并开始动画
    initStars();
    animate(ctx);

    // 清理事件监听器
    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="canvas"
      className="home_v4_fire_fly_bg fixed top-0 left-0 w-full h-full z-0"
    />
  );
};

export default StarryCanvas;