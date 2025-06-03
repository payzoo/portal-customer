
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
  onBlur?: () => void;
  onKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  icon: any;
  isValid: boolean;
  isPhone?: boolean;
  countryCode?: string;
  setCountryCode?: (code: string) => void;
  disabled?: boolean;
  required?: boolean;
  "aria-describedby"?: string;
}

const FormField = ({ 
  id, 
  label, 
  type, 
  placeholder, 
  value, 
  onChange, 
  onBlur,
  onKeyPress,
  icon: Icon, 
  isValid, 
  isPhone = false,
  countryCode,
  setCountryCode,
  disabled = false,
  required = false,
  "aria-describedby": ariaDescribedBy
}: FormFieldProps) => (
  <div className="space-y-2">
    <Label htmlFor={id} className="text-sm font-medium text-foreground">
      {label}
    </Label>
    <div className="relative">
      {isPhone ? (
        <div className="flex border border-input rounded-xl overflow-hidden bg-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 transition-all duration-200">
          <Select value={countryCode} onValueChange={setCountryCode} disabled={disabled}>
            <SelectTrigger className="w-24 h-12 border-0 bg-transparent focus:ring-0 rounded-none shrink-0">
              <SelectValue>
                <div className="flex items-center space-x-1.5">
                  <span className="text-sm">
                    {countries.find(c => c.code === countryCode)?.flag || "🇫🇷"}
                  </span>
                  <span className="text-sm font-medium">
                    {countryCode || "+33"}
                  </span>
                </div>
              </SelectValue>
            </SelectTrigger>
            <SelectContent className="bg-background border border-input shadow-lg">
              {countries.map((country) => (
                <SelectItem key={`${country.code}-${country.country}`} value={country.code}>
                  <div className="flex items-center space-x-2 w-full">
                    <span className="text-base">{country.flag}</span>
                    <span className="text-sm font-medium">{country.code}</span>
                    <span className="text-xs text-muted-foreground">{country.name}</span>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <div className="w-px bg-input"></div>
          <div className="flex-1 relative">
            <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              id={id}
              type={type}
              placeholder={placeholder}
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              onKeyPress={onKeyPress}
              disabled={disabled}
              required={required}
              aria-describedby={ariaDescribedBy}
              className="h-12 pl-10 pr-10 border-0 bg-transparent focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 rounded-none"
            />
            {isValid && value && (
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                  <Check className="w-3 h-3 text-white" />
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="relative">
          <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4 z-10" />
          <Input
            id={id}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            onKeyPress={onKeyPress}
            disabled={disabled}
            required={required}
            aria-describedby={ariaDescribedBy}
            className="h-12 pl-10 pr-10 border-input rounded-xl bg-background focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-all duration-200"
          />
          {isValid && value && (
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 z-10">
              <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                <Check className="w-3 h-3 text-white" />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  </div>
);

export default FormField;
