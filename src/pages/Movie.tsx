import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { movies } from '@/data/movies';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { VideoPlayer } from '@/components/VideoPlayer';
import { 
  ArrowLeft, 
  Play,
  Calendar,
  Clock,
  Film,
  Star
} from 'lucide-react';

export const Movie: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const movie = movies.find(m => m.id === id);

  if (!movie) {
    return <Navigate to="/" replace />;
  }

  // Related movies (same genre)
  const relatedMovies = movies
    .filter(m => m.id !== movie.id && m.genre === movie.genre)
    .slice(0, 6);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-black/95 backdrop-blur-sm border-b border-gray-800">
        <div className="container mx-auto px-4 py-4">
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
              <Film className="h-6 w-6 text-red-600" />
              <h1 className="text-xl font-bold">{movie.title}</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Video Player Section */}
      <section className="relative">
        <VideoPlayer 
          src={movie.videoUrl}
          poster={movie.thumbnail}
          title={movie.title}
        />
      </section>

      {/* Movie Information */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h2 className="text-4xl font-bold mb-4">{movie.title}</h2>
              <div className="flex items-center gap-4 mb-4">
                {movie.year && (
                  <div className="flex items-center gap-1 text-gray-400">
                    <Calendar className="h-4 w-4" />
                    {movie.year}
                  </div>
                )}
                {movie.duration && (
                  <div className="flex items-center gap-1 text-gray-400">
                    <Clock className="h-4 w-4" />
                    {movie.duration}
                  </div>
                )}
                <div className="flex items-center gap-1 text-yellow-400">
                  <Star className="h-4 w-4 fill-current" />
                  <span className="text-sm">Classic</span>
                </div>
              </div>
              {movie.genre && (
                <Badge className="bg-red-600/20 text-red-400 border-red-600/30 mb-4">
                  {movie.genre}
                </Badge>
              )}
              <p className="text-lg text-gray-300 leading-relaxed">
                {movie.description}
              </p>
            </div>
          </div>

          {/* Poster */}
          <div className="lg:col-span-1">
            <Card className="bg-gray-900 border-gray-800 overflow-hidden">
              <CardContent className="p-0">
                <img 
                  src={movie.thumbnail} 
                  alt={movie.title}
                  className="w-full aspect-[2/3] object-cover"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Related Movies */}
      {relatedMovies.length > 0 && (
        <section className="container mx-auto px-4 pb-8">
          <h3 className="text-2xl font-bold mb-6">More {movie.genre} Movies</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {relatedMovies.map((relatedMovie) => (
              <Card key={relatedMovie.id} className="group bg-gray-900 border-gray-800 hover:border-red-600 transition-all duration-300 card-hover">
                <CardContent className="p-0">
                  <Link to={`/movie/${relatedMovie.id}`}>
                    <div className="aspect-[2/3] relative overflow-hidden">
                      <img 
                        src={relatedMovie.thumbnail} 
                        alt={relatedMovie.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <Play className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    <div className="p-3">
                      <h4 className="text-sm font-semibold text-white line-clamp-2">{relatedMovie.title}</h4>
                      <p className="text-xs text-gray-400 mt-1">{relatedMovie.year}</p>
                    </div>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};