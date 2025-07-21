import React, { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import type { User, LoginCredentials } from '../types';

interface AuthContextType {
  user: User | null;
  login: (credentials: LoginCredentials) => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Simulación de base de datos de usuarios
const MOCK_USERS: User[] = [
  {
    id: '1',
    username: 'admin',
    email: 'admin@serigrafia.com'
  },
  {
    id: '2',
    username: 'operador',
    email: 'operador@serigrafia.com'
  }
];

// Simulación de credenciales (en producción esto estaría en la base de datos)
const MOCK_CREDENTIALS = [
  { username: 'admin', password: 'admin123' },
  { username: 'operador', password: 'operador123' }
];

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Verificar si hay una sesión guardada
    const savedUser = localStorage.getItem('admin_user');
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (error) {
        localStorage.removeItem('admin_user');
      }
    }
    setIsLoading(false);
  }, []);

  const login = async (credentials: LoginCredentials): Promise<boolean> => {
    setIsLoading(true);
    
    // Simular delay de red
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    try {
      // Validar credenciales
      const validCredential = MOCK_CREDENTIALS.find(
        cred => cred.username === credentials.username && cred.password === credentials.password
      );
      
      if (validCredential) {
        const userData = MOCK_USERS.find(user => user.username === credentials.username);
        if (userData) {
          setUser(userData);
          localStorage.setItem('admin_user', JSON.stringify(userData));
          setIsLoading(false);
          return true;
        }
      }
      
      setIsLoading(false);
      return false;
    } catch (error) {
      setIsLoading(false);
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('admin_user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};