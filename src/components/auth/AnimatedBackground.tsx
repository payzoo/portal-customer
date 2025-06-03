
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
      {/* Floating geometric shapes */}
      <div 
        className="absolute w-32 h-32 border border-border/20 rounded-full animate-float"
        style={{
          top: '10%',
          left: '5%',
          animationDelay: '0s',
          transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
        }}
      ></div>
      <div 
        className="absolute w-24 h-24 border border-border/30 rounded-lg rotate-45 animate-float"
        style={{
          top: '20%',
          right: '8%',
          animationDelay: '2s',
          transform: `translate(${mousePosition.x * -0.015}px, ${mousePosition.y * 0.015}px)`
        }}
      ></div>
      <div 
        className="absolute w-16 h-16 bg-foreground/5 rounded-full animate-float"
        style={{
          bottom: '15%',
          left: '10%',
          animationDelay: '4s',
          transform: `translate(${mousePosition.x * 0.025}px, ${mousePosition.y * -0.02}px)`
        }}
      ></div>
      <div 
        className="absolute w-20 h-20 border-2 border-foreground/10 rounded-full animate-float"
        style={{
          bottom: '25%',
          right: '15%',
          animationDelay: '1s',
          transform: `translate(${mousePosition.x * -0.02}px, ${mousePosition.y * 0.03}px)`
        }}
      ></div>

      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
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
