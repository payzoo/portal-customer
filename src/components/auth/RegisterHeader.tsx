
import { Sparkles } from "lucide-react";

interface RegisterHeaderProps {
  isLoaded: boolean;
  mousePosition: { x: number; y: number };
}

const RegisterHeader = ({ isLoaded, mousePosition }: RegisterHeaderProps) => {
  return (
    <>
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute w-24 h-24 border border-border/10 rounded-full animate-float"
          style={{
            top: '15%',
            left: '10%',
            animationDelay: '0s',
            transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`
          }}
        ></div>
        <div 
          className="absolute w-16 h-16 border border-border/15 rounded-lg rotate-45 animate-float"
          style={{
            top: '25%',
            right: '15%',
            animationDelay: '2s',
            transform: `translate(${mousePosition.x * -0.01}px, ${mousePosition.y * 0.01}px)`
          }}
        ></div>
        <div 
          className="absolute w-12 h-12 bg-foreground/5 rounded-full animate-float"
          style={{
            bottom: '20%',
            left: '15%',
            animationDelay: '4s',
            transform: `translate(${mousePosition.x * 0.015}px, ${mousePosition.y * -0.01}px)`
          }}
        ></div>
      </div>

      <div className="text-center mb-8">
        <div className={`transform transition-all duration-500 ease-out ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`} style={{ transitionDelay: '200ms' }}>
          
          <div className="relative mb-6">
            <h1 className="text-3xl font-light text-foreground tracking-tight">
              Payzoo
              <Sparkles className="inline-block ml-2 w-5 h-5 text-foreground/30" />
            </h1>
          </div>

          <div className="mb-4">
            <p className="text-xs uppercase tracking-wider font-medium text-muted-foreground mb-2">
              Rejoignez-nous
            </p>
            <div className="w-8 h-px bg-foreground/20 mx-auto"></div>
          </div>
          
          <p className="text-muted-foreground text-sm">Créez votre compte en quelques étapes</p>
        </div>
      </div>
    </>
  );
};

export default RegisterHeader;
