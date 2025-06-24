import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { movies, Movie } from '@/data/movies';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Search, 
  LogOut, 
  Play, 
  Info, 
  Film, 
  Clock,
  Calendar,
  Filter,
  User
} from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export const Home: React.FC = () => {
  const { user, logout } = useAuth();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState<string>('all');
  const [featuredMovie] = useState(movies[0]); // First movie as featured

  // Get unique genres
  const genres = useMemo(() => {
    const genreSet = new Set(movies.map(movie => movie.genre).filter(Boolean));
    return Array.from(genreSet).sort();
  }, []);

  // Filter movies based on search and genre
  const filteredMovies = useMemo(() => {
    return movies.filter(movie => {
      const matchesSearch = movie.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          movie.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesGenre = selectedGenre === 'all' || movie.genre === selectedGenre;
      return matchesSearch && matchesGenre;
    });
  }, [searchTerm, selectedGenre]);

  const MovieCard: React.FC<{ movie: Movie }> = ({ movie }) => (
    <Card className="group bg-gray-900 border-gray-800 hover:border-red-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
      <CardContent className="p-0 relative overflow-hidden">
        <Link to={`/movie/${movie.id}`}>
          <div className="aspect-[2/3] relative">
            <img 
              src={movie.thumbnail} 
              alt={movie.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h3 className="font-bold text-sm mb-1 line-clamp-2">{movie.title}</h3>
                <div className="flex items-center gap-2 text-xs text-gray-300 mb-2">
                  {movie.year && (
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {movie.year}
                    </div>
                  )}
                  {movie.duration && (
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {movie.duration}
                    </div>
                  )}
                </div>
                {movie.genre && (
                  <Badge variant="secondary" className="text-xs bg-red-600/20 text-red-400 border-red-600/30">
                    {movie.genre}
                  </Badge>
                )}
              </div>
            </div>
            <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Button size="sm" className="bg-red-600 hover:bg-red-700 rounded-full w-8 h-8 p-0">
                <Play className="h-3 w-3" />
              </Button>
            </div>
          </div>
        </Link>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-black/95 backdrop-blur-sm border-b border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Film className="h-8 w-8 text-red-600" />
                <h1 className="text-2xl font-bold text-white">CineClassics</h1>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-400">Welcome, {user?.username}</span>
              <Button 
                asChild
                variant="ghost"
                size="sm"
                className="text-gray-300 hover:text-white hover:bg-gray-800"
              >
                <Link to="/profile">
                  <User className="h-4 w-4 mr-2" />
                  Profile
                </Link>
              </Button>
              <Button 
                onClick={logout}
                variant="outline"
                size="sm"
                className="border-gray-700 hover:border-red-600 hover:bg-red-600/10"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Featured Movie Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={featuredMovie.thumbnail} 
            alt={featuredMovie.title}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-lg">
            <h2 className="text-5xl font-bold mb-4">{featuredMovie.title}</h2>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              {featuredMovie.description}
            </p>
            <div className="flex items-center gap-4 mb-6">
              {featuredMovie.year && (
                <Badge variant="outline" className="border-white/30 text-white">
                  {featuredMovie.year}
                </Badge>
              )}
              {featuredMovie.genre && (
                <Badge variant="outline" className="border-red-600/50 text-red-400">
                  {featuredMovie.genre}
                </Badge>
              )}
              {featuredMovie.duration && (
                <span className="text-gray-400 flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {featuredMovie.duration}
                </span>
              )}
            </div>
            <div className="flex gap-4">
              <Button 
                asChild
                className="bg-white text-black hover:bg-gray-200 font-semibold px-8"
              >
                <Link to={`/movie/${featuredMovie.id}`}>
                  <Play className="h-5 w-5 mr-2" />
                  Play Now
                </Link>
              </Button>
              <Button 
                variant="outline" 
                className="border-white/30 hover:border-white/50 text-white px-8"
              >
                <Info className="h-5 w-5 mr-2" />
                More Info
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search movies..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-gray-900/50 border-gray-700 text-white placeholder-gray-500 focus:border-red-600 focus:ring-red-600"
            />
          </div>
          
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-gray-400" />
            <Select value={selectedGenre} onValueChange={setSelectedGenre}>
              <SelectTrigger className="w-40 bg-gray-900/50 border-gray-700 text-white">
                <SelectValue placeholder="All Genres" />
              </SelectTrigger>
              <SelectContent className="bg-gray-900 border-gray-700">
                <SelectItem value="all" className="text-white hover:bg-gray-800">All Genres</SelectItem>
                {genres.map(genre => (
                  <SelectItem key={genre} value={genre} className="text-white hover:bg-gray-800">
                    {genre}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Movies Grid */}
        <div className="mb-4">
          <h3 className="text-2xl font-bold mb-6">
            {searchTerm || selectedGenre !== 'all' 
              ? `${filteredMovies.length} Movies Found` 
              : 'Classic Movie Collection'
            }
          </h3>
        </div>
        
        {filteredMovies.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-6">
            {filteredMovies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <Film className="h-16 w-16 text-gray-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-400 mb-2">No movies found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </section>
    </div>
  );
};