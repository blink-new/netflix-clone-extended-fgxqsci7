import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/contexts/AuthContext';
import { Navigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { Play, Film } from 'lucide-react';

export const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isRegisterMode, setIsRegisterMode] = useState(false);
  const { user, login, register, isLoading } = useAuth();
  const { toast } = useToast();

  if (user) {
    return <Navigate to="/" replace />;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!username || !password) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please fill in all fields"
      });
      return;
    }

    if (isRegisterMode) {
      if (password !== confirmPassword) {
        toast({
          variant: "destructive",
          title: "Error",
          description: "Passwords do not match"
        });
        return;
      }
      
      const success = await register(username, password);
      if (success) {
        toast({
          title: "Success!",
          description: "Account created successfully!"
        });
      } else {
        toast({
          variant: "destructive",
          title: "Error",
          description: "Username already exists"
        });
      }
    } else {
      const success = await login(username, password);
      if (success) {
        toast({
          title: "Welcome back!",
          description: "You have successfully logged in."
        });
      } else {
        toast({
          variant: "destructive",
          title: "Error",
          description: "Invalid credentials"
        });
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-red-900 flex items-center justify-center p-4">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-black/20 animate-pulse"></div>
      
      <div className="w-full max-w-md relative z-10">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Film className="h-8 w-8 text-red-600" />
            <h1 className="text-4xl font-bold text-white">CineClassics</h1>
          </div>
          <p className="text-gray-400">Your gateway to timeless cinema</p>
        </div>

        <Card className="bg-black/80 backdrop-blur-sm border-gray-800 shadow-2xl">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl text-center text-white">
              {isRegisterMode ? 'Create Account' : 'Sign In'}
            </CardTitle>
            <CardDescription className="text-center text-gray-400">
              {isRegisterMode 
                ? 'Join thousands of classic movie lovers' 
                : 'Welcome back to your movie collection'
              }
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="bg-gray-900/50 border-gray-700 text-white placeholder-gray-500 focus:border-red-600 focus:ring-red-600"
                  required
                />
              </div>
              <div className="space-y-2">
                <Input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-gray-900/50 border-gray-700 text-white placeholder-gray-500 focus:border-red-600 focus:ring-red-600"
                  required
                />
              </div>
              {isRegisterMode && (
                <div className="space-y-2">
                  <Input
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="bg-gray-900/50 border-gray-700 text-white placeholder-gray-500 focus:border-red-600 focus:ring-red-600"
                    required
                  />
                </div>
              )}
              <Button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 transition-all duration-200 transform hover:scale-105"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Processing...
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <Play className="h-4 w-4" />
                    {isRegisterMode ? 'Create Account' : 'Sign In'}
                  </div>
                )}
              </Button>
            </form>
            
            <div className="mt-6 text-center">
              <p className="text-gray-400">
                {isRegisterMode ? 'Already have an account?' : "Don't have an account?"}
              </p>
              <Button
                variant="link"
                onClick={() => setIsRegisterMode(!isRegisterMode)}
                className="text-red-600 hover:text-red-500 font-semibold p-0 h-auto"
              >
                {isRegisterMode ? 'Sign in here' : 'Create one here'}
              </Button>
            </div>
            
            {/* Demo credentials */}
            <div className="mt-6 p-3 bg-gray-900/30 rounded-lg border border-gray-800">
              <p className="text-xs text-gray-400 text-center mb-2">Demo Credentials:</p>
              <p className="text-xs text-gray-500 text-center">Username: demo | Password: demo123</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};