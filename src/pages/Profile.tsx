import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import { 
  ArrowLeft, 
  User, 
  Film, 
  Calendar,
  Star,
  LogOut,
  Download,
  Shield
} from 'lucide-react';

export const Profile: React.FC = () => {
  const { user, logout } = useAuth();
  const { toast } = useToast();

  const handleLogout = () => {
    logout();
    toast({
      title: "Logged out",
      description: "You have been successfully logged out."
    });
  };

  const accountStats = {
    memberSince: "2024",
    moviesWatched: "12",
    favoriteGenre: "Classic Comedy",
    totalWatchTime: "18h 45m"
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-black/95 backdrop-blur-sm border-b border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button 
                asChild
                variant="ghost" 
                size="sm"
                className="text-white hover:text-red-400 hover:bg-gray-800"
              >
                <Link to="/">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Home
                </Link>
              </Button>
              <div className="flex items-center gap-2">
                <User className="h-6 w-6 text-red-600" />
                <h1 className="text-xl font-bold">My Account</h1>
              </div>
            </div>
            <Button
              onClick={handleLogout}
              variant="outline"
              size="sm"
              className="border-red-600 text-red-400 hover:bg-red-600 hover:text-white"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      {/* Profile Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* User Info Card */}
          <Card className="bg-gray-900 border-gray-800 mb-8">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                  <User className="h-8 w-8 text-white" />
                </div>
                <div>
                  <CardTitle className="text-2xl text-white">
                    Welcome, {user?.username}!
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    Classic movie enthusiast since {accountStats.memberSince}
                  </CardDescription>
                  <div className="flex items-center gap-2 mt-2">
                    <Badge className="bg-red-600/20 text-red-400 border-red-600/30">
                      <Shield className="h-3 w-3 mr-1" />
                      Premium Member
                    </Badge>
                    <Badge className="bg-yellow-600/20 text-yellow-400 border-yellow-600/30">
                      <Star className="h-3 w-3 mr-1" />
                      Classic Collector
                    </Badge>
                  </div>
                </div>
              </div>
            </CardHeader>
          </Card>

          {/* Account Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-6 text-center">
                <Film className="h-8 w-8 text-red-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">{accountStats.moviesWatched}</div>
                <div className="text-sm text-gray-400">Movies Watched</div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-6 text-center">
                <Calendar className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">{accountStats.totalWatchTime}</div>
                <div className="text-sm text-gray-400">Total Watch Time</div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-6 text-center">
                <Star className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
                <div className="text-lg font-bold text-white">{accountStats.favoriteGenre}</div>
                <div className="text-sm text-gray-400">Favorite Genre</div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-6 text-center">
                <Download className="h-8 w-8 text-green-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">29</div>
                <div className="text-sm text-gray-400">Available Movies</div>
              </CardContent>
            </Card>
          </div>

          {/* Account Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Film className="h-5 w-5 text-red-600" />
                  Your Library
                </CardTitle>
                <CardDescription>
                  Access to our complete collection of classic films
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Silent Era Classics</span>
                    <Badge className="bg-green-600/20 text-green-400 border-green-600/30">
                      Unlocked
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Golden Age Hollywood</span>
                    <Badge className="bg-green-600/20 text-green-400 border-green-600/30">
                      Unlocked
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">International Cinema</span>
                    <Badge className="bg-green-600/20 text-green-400 border-green-600/30">
                      Unlocked
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Star className="h-5 w-5 text-yellow-500" />
                  Achievements
                </CardTitle>
                <CardDescription>
                  Your classic movie milestones
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">First Silent Film</span>
                    <Badge className="bg-yellow-600/20 text-yellow-400 border-yellow-600/30">
                      ✓ Completed
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Chaplin Enthusiast</span>
                    <Badge className="bg-yellow-600/20 text-yellow-400 border-yellow-600/30">
                      ✓ Completed
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Horror Pioneer</span>
                    <Badge className="bg-gray-600/20 text-gray-400 border-gray-600/30">
                      In Progress
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <Card className="bg-gray-900 border-gray-800 mt-8">
            <CardHeader>
              <CardTitle className="text-white">Quick Actions</CardTitle>
              <CardDescription>
                Manage your CineClassics experience
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-4">
                <Button asChild className="bg-red-600 hover:bg-red-700">
                  <Link to="/">
                    <Film className="h-4 w-4 mr-2" />
                    Browse Movies
                  </Link>
                </Button>
                <Button 
                  variant="outline" 
                  className="border-gray-600 text-gray-300 hover:bg-gray-800"
                  onClick={() => toast({
                    title: "Feature Coming Soon",
                    description: "Watchlist functionality will be available in the next update!"
                  })}
                >
                  <Star className="h-4 w-4 mr-2" />
                  My Watchlist
                </Button>
                <Button 
                  variant="outline" 
                  className="border-gray-600 text-gray-300 hover:bg-gray-800"
                  onClick={() => toast({
                    title: "Download Info",
                    description: "All movies are available for free download from Archive.org!"
                  })}
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download Guide
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};