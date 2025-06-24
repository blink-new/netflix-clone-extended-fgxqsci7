import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  username: string;
}

interface AuthContextType {
  user: User | null;
  login: (username: string, password: string) => Promise<boolean>;
  register: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock user storage (in real app, this would be handled by backend)
const USERS_KEY = 'netflix_users';
const CURRENT_USER_KEY = 'netflix_current_user';

interface StoredUser {
  username: string;
  password: string;
}

const getStoredUsers = (): StoredUser[] => {
  const users = localStorage.getItem(USERS_KEY);
  return users ? JSON.parse(users) : [];
};

const saveUser = (username: string, password: string) => {
  const users = getStoredUsers();
  users.push({ username, password });
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
};

const findUser = (username: string, password: string): boolean => {
  const users = getStoredUsers();
  return users.some(user => user.username === username && user.password === password);
};

const userExists = (username: string): boolean => {
  const users = getStoredUsers();
  return users.some(user => user.username === username);
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initialize demo users if none exist
    const existingUsers = getStoredUsers();
    if (existingUsers.length === 0) {
      saveUser('demo', 'demo123');
      saveUser('admin', 'admin123');
      saveUser('user', 'password');
    }

    // Check if user is already logged in
    const currentUser = localStorage.getItem(CURRENT_USER_KEY);
    if (currentUser) {
      setUser(JSON.parse(currentUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (username: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    if (findUser(username, password)) {
      const user = { username };
      setUser(user);
      localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
      setIsLoading(false);
      return true;
    }
    
    setIsLoading(false);
    return false;
  };

  const register = async (username: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    if (userExists(username)) {
      setIsLoading(false);
      return false;
    }
    
    saveUser(username, password);
    const user = { username };
    setUser(user);
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
    setIsLoading(false);
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem(CURRENT_USER_KEY);
  };

  const value = {
    user,
    login,
    register,
    logout,
    isLoading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};