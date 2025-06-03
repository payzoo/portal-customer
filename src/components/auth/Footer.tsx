
interface FooterProps {
  onRegisterRedirect: () => void;
  isLoaded: boolean;
}

const Footer = ({ onRegisterRedirect, isLoaded }: FooterProps) => {
  return (
    <div className={`text-center mt-8 transform transition-all duration-500 ease-out ${
      isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
    }`} style={{ transitionDelay: '600ms' }}>
      
      <div className="mb-6">
        <p className="text-sm text-muted-foreground">
          Pas encore de compte ?{" "}
          <button
            onClick={onRegisterRedirect}
            className="text-foreground font-medium hover:underline transition-colors focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:ring-offset-2 rounded px-1"
          >
            S'inscrire
          </button>
        </p>
      </div>
      
      <div className="flex justify-center space-x-2 mb-4">
        {[1, 2, 3].map((i) => (
          <div 
            key={i} 
            className="w-1.5 h-1.5 bg-foreground/40 rounded-full transition-all duration-300"
          ></div>
        ))}
      </div>
      
      <p className="text-xs text-muted-foreground/60">© 2024 Payzoo</p>
    </div>
  );
};

export default Footer;
