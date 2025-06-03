
import { Code, Rocket, Zap, TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";

interface StartupElementsProps {
  isLoaded: boolean;
}

const StartupElements = ({ isLoaded }: StartupElementsProps) => {
  const [activeElement, setActiveElement] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveElement(prev => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const elements = [
    { icon: Code, position: { top: '20%', left: '15%' }, delay: '0s' },
    { icon: Rocket, position: { top: '30%', right: '20%' }, delay: '0.5s' },
    { icon: Zap, position: { bottom: '30%', left: '20%' }, delay: '1s' },
    { icon: TrendingUp, position: { bottom: '20%', right: '15%' }, delay: '1.5s' }
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Gradient subtil tech */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/20" />
      
      {/* Icônes tech flottantes */}
      {elements.map((element, index) => {
        const Icon = element.icon;
        return (
          <div
            key={index}
            className={`absolute w-8 h-8 opacity-10 transition-all duration-1000 ${
              isLoaded ? 'translate-y-0 opacity-10' : 'translate-y-4 opacity-0'
            } ${
              activeElement === index ? 'scale-110 opacity-20' : 'scale-100 opacity-10'
            }`}
            style={{
              ...element.position,
              transitionDelay: element.delay,
              animation: `float 6s ease-in-out infinite ${element.delay}`
            }}
          >
            <Icon className="w-full h-full text-foreground" />
          </div>
        );
      })}

      {/* Lignes de connexion subtiles */}
      <div className="absolute inset-0">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: 'currentColor', stopOpacity: 0 }} />
              <stop offset="50%" style={{ stopColor: 'currentColor', stopOpacity: 0.1 }} />
              <stop offset="100%" style={{ stopColor: 'currentColor', stopOpacity: 0 }} />
            </linearGradient>
          </defs>
          <path
            d="M15,20 Q50,40 85,30"
            stroke="url(#lineGradient)"
            strokeWidth="0.2"
            fill="none"
            className={`transition-all duration-2000 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ 
              strokeDasharray: '200',
              strokeDashoffset: isLoaded ? '0' : '200',
              transitionDelay: '1s'
            }}
          />
        </svg>
      </div>
    </div>
  );
};

export default StartupElements;
