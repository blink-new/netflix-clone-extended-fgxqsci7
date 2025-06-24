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
  Film, 
  Clock,
  Calendar,
  Filter,
  User,
  Star
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

  // Featured movies - the ones with the best quality and reliability
  const featuredMovies = movies.filter(m => 
    ['1', '2', '3', '4'].includes(m.id) // Blender Foundation films
  );

  const classicMovies = movies.filter(m => 
    ['Horror', 'Western', 'Sci-Fi'].includes(m.genre || '') && 
    !featuredMovies.find(f => f.id === m.id)
  );

  const otherMovies = movies.filter(m => 
    !featuredMovies.find(f => f.id === m.id) && 
    !classicMovies.find(c => c.id === m.id)
  );



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

      <div className="container mx-auto px-4 py-8">
        {/* Featured Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Star className="h-6 w-6 text-yellow-400 fill-current" />
            Featured Films
            <Badge className="bg-red-600/20 text-red-400 border-red-600/30 ml-2">Premium Quality</Badge>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredMovies.map((movie) => (
              <Card key={movie.id} className="group bg-gray-900 border-gray-800 hover:border-red-600 transition-all duration-300 card-hover overflow-hidden">
                <CardContent className="p-0">
                  <Link to={`/movie/${movie.id}`}>
                    <div className="relative aspect-video">
                      <img 
                        src={movie.thumbnail} 
                        alt={movie.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-lg font-bold text-white mb-1">{movie.title}</h3>
                        <p className="text-sm text-gray-300 line-clamp-2">{movie.description}</p>
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Play className="h-12 w-12 text-white drop-shadow-lg" />
                      </div>
                    </div>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Classic Films */}
        {classicMovies.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Classic Cinema</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
              {classicMovies.map((movie) => (
                <Card key={movie.id} className="group bg-gray-900 border-gray-800 hover:border-red-600 transition-all duration-300 card-hover">
                  <CardContent className="p-0">
                    <Link to={`/movie/${movie.id}`}>
                      <div className="aspect-[2/3] relative overflow-hidden">
                        <img 
                          src={movie.thumbnail} 
                          alt={movie.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <Play className="h-8 w-8 text-white" />
                        </div>
                      </div>
                      <div className="p-3">
                        <h3 className="text-sm font-semibold text-white line-clamp-2">{movie.title}</h3>
                        <p className="text-xs text-gray-400 mt-1">{movie.year}</p>
                      </div>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* All Movies Grid */}
        {otherMovies.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">More Content</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
              {otherMovies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
          </section>
        )}

        {/* Search and Filter Section */}
        <section className="mb-8">
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

          {/* Search Results */}
          {(searchTerm || selectedGenre !== 'all') && (
            <div>
              <h3 className="text-2xl font-bold mb-6">
                {searchTerm ? `Search results for "${searchTerm}"` : `${selectedGenre} Movies`}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                {filteredMovies.map((movie) => (
                  <MovieCard key={movie.id} movie={movie} />
                ))}
              </div>
              {filteredMovies.length === 0 && (
                <p className="text-gray-400 text-center py-12">No movies found matching your criteria.</p>
              )}
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

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