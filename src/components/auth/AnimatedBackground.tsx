
import { useEffect, useState } from "react";

const AnimatedBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Formes géométriques simplifiées */}
      <div 
        className="absolute w-24 h-24 border border-border/10 rounded-full animate-pulse"
        style={{
          top: '15%',
          left: '10%',
          animationDelay: '0s',
          animationDuration: '4s',
          transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`
        }}
      ></div>
      <div 
        className="absolute w-16 h-16 border border-border/15 rounded-lg rotate-45 animate-pulse"
        style={{
          top: '25%',
          right: '15%',
          animationDelay: '2s',
          animationDuration: '6s',
          transform: `translate(${mousePosition.x * -0.01}px, ${mousePosition.y * 0.01}px)`
        }}
      ></div>
      <div 
        className="absolute w-12 h-12 bg-foreground/5 rounded-full animate-pulse"
        style={{
          bottom: '20%',
          left: '15%',
          animationDelay: '4s',
          animationDuration: '5s',
          transform: `translate(${mousePosition.x * 0.015}px, ${mousePosition.y * -0.01}px)`
        }}
      ></div>

      {/* Grille subtile */}
      <div 
        className="absolute inset-0 opacity-[0.01]"
        style={{
          backgroundImage: `
            linear-gradient(to right, currentColor 1px, transparent 1px),
            linear-gradient(to bottom, currentColor 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      ></div>
    </div>
  );
};

export default AnimatedBackground;
