import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Check } from "lucide-react";

const countries = [
  { code: "+1", country: "US", flag: "🇺🇸", name: "États-Unis" },
  { code: "+33", country: "FR", flag: "🇫🇷", name: "France" },
  { code: "+44", country: "GB", flag: "🇬🇧", name: "Royaume-Uni" },
  { code: "+49", country: "DE", flag: "🇩🇪", name: "Allemagne" },
  { code: "+39", country: "IT", flag: "🇮🇹", name: "Italie" },
  { code: "+34", country: "ES", flag: "🇪🇸", name: "Espagne" },
  { code: "+1", country: "CA", flag: "🇨🇦", name: "Canada" },
  { code: "+81", country: "JP", flag: "🇯🇵", name: "Japon" },
  { code: "+86", country: "CN", flag: "🇨🇳", name: "Chine" },
  { code: "+91", country: "IN", flag: "🇮🇳", name: "Inde" },
];

interface FormFieldProps {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon: any;
  isValid: boolean;
  isPhone?: boolean;
  countryCode?: string;
  setCountryCode?: (code: string) => void;
}

const FormField = ({ 
  id, 
  label, 
  type, 
  placeholder, 
  value, 
  onChange, 
  icon: Icon, 
  isValid, 
  isPhone = false,
  countryCode,
  setCountryCode
}: FormFieldProps) => (
  <div className="space-y-3">
    <Label htmlFor={id} className="payzoo-body-sm font-medium text-muted-foreground">
      {label}
    </Label>
    <div className="relative">
      {isPhone ? (
        <div className="glass-card rounded-2xl border border-gray-300/80 backdrop-blur-sm bg-background/60">
          <div className="flex">
            <div className="flex-shrink-0">
              <Select value={countryCode} onValueChange={setCountryCode}>
                <SelectTrigger className="w-24 h-14 border-0 bg-transparent focus:ring-0 rounded-l-2xl">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="z-50 bg-background border border-gray-300/50 shadow-xl">
                  {countries.map((country) => (
                    <SelectItem key={`${country.code}-${country.country}`} value={country.code}>
                      <div className="flex items-center space-x-2">
                        <span>{country.flag}</span>
                        <span className="text-sm">{country.code}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="flex-1 relative">
              <Icon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                id={id}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className="w-full h-14 pl-12 pr-12 border-0 bg-transparent focus:ring-0 focus:border-0 placeholder:text-muted-foreground/60 text-foreground text-base rounded-l-none rounded-r-2xl"
              />
              <div className={`absolute right-4 top-1/2 transform -translate-y-1/2 transition-all duration-500 ${
                isValid ? 'scale-100 opacity-100 rotate-0' : 'scale-0 opacity-0 rotate-90'
              }`}>
                <div className="w-6 h-6 bg-foreground rounded-full flex items-center justify-center">
                  <Check className="w-3 h-3 text-background" />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="glass-card rounded-2xl border border-gray-300/80 backdrop-blur-sm bg-background/60">
          <div className="relative flex items-center">
            <Icon className="absolute left-4 text-muted-foreground w-5 h-5" />
            <Input
              id={id}
              type={type}
              placeholder={placeholder}
              value={value}
              onChange={onChange}
              className="w-full h-14 pl-12 pr-12 border-0 bg-transparent focus:ring-0 focus:border-0 placeholder:text-muted-foreground/60 text-foreground text-base"
            />
            <div className={`absolute right-4 transition-all duration-500 ${
              isValid ? 'scale-100 opacity-100 rotate-0' : 'scale-0 opacity-0 rotate-90'
            }`}>
              <div className="w-6 h-6 bg-foreground rounded-full flex items-center justify-center">
                <Check className="w-3 h-3 text-background" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  </div>
);

export default FormField;
