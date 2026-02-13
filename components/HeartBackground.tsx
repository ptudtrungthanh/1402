import React, { useEffect, useState } from 'react';

const HeartBackground: React.FC = () => {
  const [hearts, setHearts] = useState<{ id: number; left: number; delay: number; scale: number; duration: number }[]>([]);

  useEffect(() => {
    // Generate static hearts on mount to avoid re-render flicker
    const newHearts = Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100, // percentage
      delay: Math.random() * 5,
      scale: 0.5 + Math.random() * 1, // 0.5 to 1.5
      duration: 10 + Math.random() * 10 // 10s to 20s
    }));
    setHearts(newHearts);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-gradient-to-br from-rose-50 to-pink-100">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute text-rose-300 opacity-60 animate-float"
          style={{
            left: `${heart.left}%`,
            bottom: '-10%',
            fontSize: `${heart.scale}rem`,
            animation: `float ${heart.duration}s linear infinite`,
            animationDelay: `${heart.delay}s`,
            transform: `translateY(0) scale(${heart.scale})`
          }}
        >
          ❤️
        </div>
      ))}
    </div>
  );
};

export default HeartBackground;