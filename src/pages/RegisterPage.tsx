
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { ArrowRight, Mail, Phone, User, AlertCircle } from "lucide-react";
import FormField from "@/components/auth/FormField";
import RegisterHeader from "@/components/auth/RegisterHeader";
import RegisterFooter from "@/components/auth/RegisterFooter";
import { useToast } from "@/hooks/use-toast";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [countryCode, setCountryCode] = useState("+33");
  const [isFormValid, setIsFormValid] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touchedFields, setTouchedFields] = useState<Record<string, boolean>>({});
  const navigate = useNavigate();
  const { setPendingEmail } = useAuth();
  const { toast } = useToast();

  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string) => {
    const phoneRegex = /^[0-9\s\-\+\(\)]{10,}$/;
    return phone.replace(/[\s\-\+\(\)]/g, '').length >= 10 && phoneRegex.test(phone);
  };

  const validateName = (name: string) => {
    return name.trim().length >= 2 && /^[a-zA-ZÀ-ÿ\s\-']+$/.test(name.trim());
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!validateEmail(email)) {
      newErrors.email = email.length === 0 ? "L'adresse e-mail est requise" : "Format d'e-mail invalide";
    }

    if (!validatePhone(phone)) {
      newErrors.phone = phone.length === 0 ? "Le numéro de téléphone est requis" : "Numéro de téléphone invalide";
    }

    if (!validateName(firstName)) {
      newErrors.firstName = firstName.length === 0 ? "Le prénom est requis" : "Prénom invalide (min. 2 caractères, lettres uniquement)";
    }

    if (!validateName(lastName)) {
      newErrors.lastName = lastName.length === 0 ? "Le nom est requis" : "Nom invalide (min. 2 caractères, lettres uniquement)";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  useEffect(() => {
    const isValid = validateEmail(email) && validatePhone(phone) && validateName(firstName) && validateName(lastName);
    setIsFormValid(isValid);
    
    // Clear errors when fields become valid
    if (touchedFields.email && validateEmail(email) && errors.email) {
      setErrors(prev => ({ ...prev, email: '' }));
    }
    if (touchedFields.phone && validatePhone(phone) && errors.phone) {
      setErrors(prev => ({ ...prev, phone: '' }));
    }
    if (touchedFields.firstName && validateName(firstName) && errors.firstName) {
      setErrors(prev => ({ ...prev, firstName: '' }));
    }
    if (touchedFields.lastName && validateName(lastName) && errors.lastName) {
      setErrors(prev => ({ ...prev, lastName: '' }));
    }
  }, [email, phone, firstName, lastName, touchedFields, errors]);

  const handleFieldBlur = (fieldName: string) => {
    setTouchedFields(prev => ({ ...prev, [fieldName]: true }));
    validateForm();
  };

  const handleRegister = async () => {
    setTouchedFields({
      email: true,
      phone: true,
      firstName: true,
      lastName: true
    });

    if (!validateForm()) {
      toast({
        variant: "destructive",
        title: "Erreur de validation",
        description: "Veuillez corriger les erreurs dans le formulaire.",
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Simulation d'un appel API
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setPendingEmail(email);
      toast({
        title: "Compte créé avec succès",
        description: "Un code de vérification a été envoyé à votre e-mail.",
      });
      navigate("/verify-otp");
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Une erreur est survenue lors de la création du compte.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleLoginRedirect = () => {
    navigate("/auth");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && isFormValid && !isSubmitting) {
      handleRegister();
    }
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <RegisterHeader isLoaded={isLoaded} mousePosition={mousePosition} />

      <main className="relative z-10 min-h-screen flex items-center justify-center p-6">
        <div className={`w-full max-w-md transform transition-all duration-1000 ease-out ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>

          <form onSubmit={(e) => { e.preventDefault(); handleRegister(); }} className="space-y-6" noValidate>
            <fieldset className={`space-y-6 transform transition-all duration-500 ease-out ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`} style={{ transitionDelay: '400ms' }}>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <FormField
                    id="firstName"
                    label="Prénom"
                    type="text"
                    placeholder="Prénom"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    onBlur={() => handleFieldBlur('firstName')}
                    onKeyPress={handleKeyPress}
                    icon={User}
                    isValid={validateName(firstName)}
                    disabled={isSubmitting}
                    required
                    aria-describedby={errors.firstName ? "firstName-error" : undefined}
                  />
                  {errors.firstName && touchedFields.firstName && (
                    <div id="firstName-error" className="flex items-center gap-2 text-xs text-destructive" role="alert">
                      <AlertCircle className="w-3 h-3 shrink-0" />
                      <span>{errors.firstName}</span>
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <FormField
                    id="lastName"
                    label="Nom"
                    type="text"
                    placeholder="Nom"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    onBlur={() => handleFieldBlur('lastName')}
                    onKeyPress={handleKeyPress}
                    icon={User}
                    isValid={validateName(lastName)}
                    disabled={isSubmitting}
                    required
                    aria-describedby={errors.lastName ? "lastName-error" : undefined}
                  />
                  {errors.lastName && touchedFields.lastName && (
                    <div id="lastName-error" className="flex items-center gap-2 text-xs text-destructive" role="alert">
                      <AlertCircle className="w-3 h-3 shrink-0" />
                      <span>{errors.lastName}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <FormField
                  id="email"
                  label="Adresse e-mail"
                  type="email"
                  placeholder="votre@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={() => handleFieldBlur('email')}
                  onKeyPress={handleKeyPress}
                  icon={Mail}
                  isValid={validateEmail(email)}
                  disabled={isSubmitting}
                  required
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && touchedFields.email && (
                  <div id="email-error" className="flex items-center gap-2 text-xs text-destructive" role="alert">
                    <AlertCircle className="w-3 h-3 shrink-0" />
                    <span>{errors.email}</span>
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <FormField
                  id="phone"
                  label="Numéro de téléphone"
                  type="tel"
                  placeholder="Votre numéro"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  onBlur={() => handleFieldBlur('phone')}
                  onKeyPress={handleKeyPress}
                  icon={Phone}
                  isValid={validatePhone(phone)}
                  isPhone={true}
                  countryCode={countryCode}
                  setCountryCode={setCountryCode}
                  disabled={isSubmitting}
                  required
                  aria-describedby={errors.phone ? "phone-error" : undefined}
                />
                {errors.phone && touchedFields.phone && (
                  <div id="phone-error" className="flex items-center gap-2 text-xs text-destructive" role="alert">
                    <AlertCircle className="w-3 h-3 shrink-0" />
                    <span>{errors.phone}</span>
                  </div>
                )}
              </div>

              <div className="pt-4 pb-6">
                <p className="text-xs text-muted-foreground text-center leading-relaxed">
                  En continuant, vous acceptez nos{" "}
                  <button 
                    type="button"
                    className="text-foreground hover:underline transition-colors focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:ring-offset-1 rounded"
                    onClick={() => {/* TODO: Ouvrir modal conditions */}}
                  >
                    Conditions d'utilisation
                  </button>{" "}
                  et notre{" "}
                  <button 
                    type="button"
                    className="text-foreground hover:underline transition-colors focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:ring-offset-1 rounded"
                    onClick={() => {/* TODO: Ouvrir modal confidentialité */}}
                  >
                    Politique de confidentialité
                  </button>.
                </p>
              </div>

              <Button
                type="submit"
                disabled={!isFormValid || isSubmitting}
                className={`w-full h-12 bg-foreground text-background font-medium rounded-xl transition-all duration-200 group ${
                  isFormValid && !isSubmitting 
                    ? 'hover:bg-foreground/90 hover:shadow-md active:scale-[0.98]' 
                    : 'opacity-50 cursor-not-allowed'
                }`}
                aria-label="Créer mon compte Payzoo"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 mr-2 border-2 border-background/30 border-t-background rounded-full animate-spin" />
                    <span>Création en cours...</span>
                  </>
                ) : (
                  <>
                    <span className="mr-2">Créer mon compte</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </>
                )}
              </Button>
            </fieldset>
          </form>

          <RegisterFooter isLoaded={isLoaded} onLoginRedirect={handleLoginRedirect} />
        </div>
      </main>
    </div>
  );
};

export default RegisterPage;
