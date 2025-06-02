
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  email: string;
  id: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string) => void;
  logout: () => void;
  verifyOTP: (code: string) => boolean;
  pendingEmail: string | null;
  setPendingEmail: (email: string | null) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [pendingEmail, setPendingEmail] = useState<string | null>(null);

  const login = (email: string) => {
    setUser({ email, id: '1' });
    setPendingEmail(null);
  };

  const logout = () => {
    setUser(null);
    setPendingEmail(null);
  };

  const verifyOTP = (code: string) => {
    // Simulation de vérification OTP
    if (code === '123456') {
      if (pendingEmail) {
        login(pendingEmail);
        return true;
      }
    }
    return false;
  };

  const value = {
    user,
    isAuthenticated: !!user,
    login,
    logout,
    verifyOTP,
    pendingEmail,
    setPendingEmail,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
