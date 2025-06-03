
import { Sparkles } from "lucide-react";

interface RegisterHeaderProps {
  isLoaded: boolean;
  mousePosition: { x: number; y: number };
}

const RegisterHeader = ({ isLoaded, mousePosition }: RegisterHeaderProps) => {
  return (
    <>
      {/* Dynamic background elements */}
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

      {/* Header */}
      <div className="text-center mb-12">
        <div className={`transform transition-all duration-700 ease-out ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`} style={{ transitionDelay: '400ms' }}>
          
          {/* Logo avec éléments animés */}
          <div className="relative mb-8">
            <h1 className="payzoo-page-title relative inline-block">
              Payzoo
              <Sparkles className="absolute -top-2 -right-8 w-6 h-6 text-foreground/40 animate-pulse" />
            </h1>
          </div>

          {/* Indicateur de statut avec style moderne */}
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-foreground rounded-full animate-pulse"></div>
              <div className="w-1 h-1 bg-foreground/60 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            </div>
            <div className="relative">
              <p className="payzoo-caption uppercase tracking-[0.2em] font-medium text-muted-foreground">
                Rejoignez-nous
              </p>
              <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-px bg-foreground/20"></div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-1 h-1 bg-foreground/60 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              <div className="w-2 h-2 bg-foreground rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
            </div>
          </div>
          
          <p className="payzoo-subtitle">Créez votre compte et découvrez l'avenir des paiements</p>
        </div>
      </div>
    </>
  );
};

export default RegisterHeader;
