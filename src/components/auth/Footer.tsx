
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
          Prêt à{" "}
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-medium">
            innover
          </span>
          ?{" "}
          <button
            onClick={onRegisterRedirect}
            className="text-foreground font-medium hover:underline transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:ring-offset-2 rounded px-1 relative group"
          >
            Rejoignez-nous
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </button>
        </p>
      </div>
      
      <div className="flex justify-center space-x-2 mb-4">
        {[1, 2, 3].map((i) => (
          <div 
            key={i} 
            className="w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full transition-all duration-300 animate-pulse"
            style={{ animationDelay: `${i * 0.5}s` }}
          ></div>
        ))}
      </div>
      
      <p className="text-xs text-muted-foreground/60">
        © 2024 Payzoo - 
        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          {" "}L'avenir de la fintech
        </span>
      </p>
    </div>
  );
};

export default Footer;
