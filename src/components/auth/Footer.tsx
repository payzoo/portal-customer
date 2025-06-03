
interface FooterProps {
  onRegisterRedirect: () => void;
  isLoaded: boolean;
}

const Footer = ({ onRegisterRedirect, isLoaded }: FooterProps) => {
  return (
    <div className={`text-center space-y-8 mt-12 transform transition-all duration-700 ease-out ${
      isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
    }`} style={{ transitionDelay: '800ms' }}>
      <div className="text-center">
        <p className="payzoo-body-sm mb-6 text-muted-foreground">
          Pas encore de compte ?{" "}
          <button
            onClick={onRegisterRedirect}
            className="text-foreground font-medium hover:underline transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:ring-offset-2 rounded-sm px-1"
          >
            S'inscrire
          </button>
        </p>
      </div>
      
      {/* Modern status indicators */}
      <div className="flex justify-center space-x-4">
        {[1, 2, 3].map((i) => (
          <div 
            key={i} 
            className="w-2 h-2 bg-foreground/60 rounded-full hover:bg-foreground hover:scale-125 transition-all duration-300 cursor-pointer"
            style={{ animationDelay: `${i * 0.2}s` }}
          ></div>
        ))}
      </div>
      
      <p className="payzoo-caption opacity-50 tracking-wider">© 2024 Payzoo</p>
    </div>
  );
};

export default Footer;
