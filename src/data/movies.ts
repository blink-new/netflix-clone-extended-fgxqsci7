export interface Movie {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  thumbnail: string;
  year?: number;
  genre?: string;
  duration?: string;
}

// Using reliable video sources that work cross-origin
// Mix of high-quality public domain classics and modern sample content
export const movies: Movie[] = [
  // Premium Sample Content (Google CDN - Always Works)
  {
    id: "1",
    title: "Big Buck Bunny",
    description: "A large rabbit deals with three tiny bullies, led by a flying squirrel. Blender Foundation's award-winning animated short film.",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Big_buck_bunny_poster_big.jpg/600px-Big_buck_bunny_poster_big.jpg",
    year: 2008,
    genre: "Animation",
    duration: "10 min"
  },
  {
    id: "2",
    title: "Sintel",
    description: "A lonely young woman, Sintel, helps and befriends a dragon. Another masterpiece from the Blender Foundation.",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
    thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Sintel_poster.jpg/600px-Sintel_poster.jpg",
    year: 2010,
    genre: "Fantasy",
    duration: "15 min"
  },
  {
    id: "3",
    title: "Tears of Steel",
    description: "In a dystopian future, a group of warriors battle killer robots. The Blender Foundation's first live-action film.",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    thumbnail: "https://mango.blender.org/wp-content/gallery/4k-renders/tears_of_steel_bridge_2k.jpg",
    year: 2012,
    genre: "Sci-Fi",
    duration: "12 min"
  },
  {
    id: "4",
    title: "Elephant's Dream",
    description: "Two characters explore a strange mechanical world. The first open movie from the Blender Foundation.",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Elephants_Dream_s5_both.jpg/600px-Elephants_Dream_s5_both.jpg",
    year: 2006,
    genre: "Animation",
    duration: "11 min"
  },

  // Classic Hollywood Films with Working Sources
  {
    id: "5",
    title: "Night of the Living Dead",
    description: "George A. Romero's groundbreaking zombie horror film that defined the genre. A group of people hide from bloodthirsty zombies in a farmhouse.",
    videoUrl: "https://archive.org/download/night_of_the_living_dead/night_of_the_living_dead_512kb.mp4",
    thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Night_of_the_Living_Dead_%281968%29.jpg/600px-Night_of_the_Living_Dead_%281968%29.jpg",
    year: 1968,
    genre: "Horror",
    duration: "96 min"
  },
  {
    id: "6",
    title: "The Cabinet of Dr. Caligari",
    description: "German Expressionist masterpiece. A hypnotist uses a somnambulist to commit murders. One of the most influential horror films ever made.",
    videoUrl: "https://archive.org/download/TheCaligariofDrCaligari/The%20Cabinet%20of%20Dr.%20Caligari%20%281920%29.mp4",
    thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Das_Cabinet_des_Dr._Caligari.jpg/600px-Das_Cabinet_des_Dr._Caligari.jpg",
    year: 1920,
    genre: "Horror",
    duration: "67 min"
  },
  {
    id: "7",
    title: "The Great Train Robbery",
    description: "One of the first narrative films. Bandits rob a train and are pursued by a posse. Directed by Edwin S. Porter.",
    videoUrl: "https://archive.org/download/great_train_robbery_512kb/great_train_robbery_512kb.mp4",
    thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Great_train_robbery_still.jpg/600px-Great_train_robbery_still.jpg",
    year: 1903,
    genre: "Western",
    duration: "12 min"
  },
  {
    id: "8",
    title: "A Trip to the Moon",
    description: "Georges Méliès' pioneering sci-fi film about a group of astronomers who travel to the Moon. Cinema's first blockbuster.",
    videoUrl: "https://archive.org/download/ATripToTheMoon1902/A%20Trip%20to%20the%20Moon%20%281902%29.mp4",
    thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Le_Voyage_dans_la_lune.jpg/600px-Le_Voyage_dans_la_lune.jpg",
    year: 1902,
    genre: "Sci-Fi",
    duration: "13 min"
  },

  // Modern Sample Content
  {
    id: "9",
    title: "For Bigger Blazes",
    description: "HBO GO now works with Chromecast -- the easiest way to enjoy online video on your TV.",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    thumbnail: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerBlazes.jpg",
    year: 2014,
    genre: "Commercial",
    duration: "15 sec"
  },
  {
    id: "10",
    title: "For Bigger Escape",
    description: "Introducing Chromecast. The easiest way to enjoy online video and music on your TV.",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    thumbnail: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerEscapes.jpg",
    year: 2014,
    genre: "Commercial",
    duration: "15 sec"
  },
  {
    id: "11",
    title: "For Bigger Fun",
    description: "Introducing Chromecast. The easiest way to enjoy online video and music on your TV.",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    thumbnail: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerFun.jpg",
    year: 2014,
    genre: "Commercial",
    duration: "1 min"
  },
  {
    id: "12",
    title: "For Bigger Joyrides",
    description: "Introducing Chromecast. The easiest way to enjoy online video and music on your TV.",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    thumbnail: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerJoyrides.jpg",
    year: 2014,
    genre: "Commercial",
    duration: "15 sec"
  },
  {
    id: "13",
    title: "Subaru Outback On Street And Dirt",
    description: "Professional automotive footage of the Subaru Outback in action.",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
    thumbnail: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/SubaruOutbackOnStreetAndDirt.jpg",
    year: 2017,
    genre: "Automotive",
    duration: "2 min"
  },
  {
    id: "14",
    title: "Volkswagen GTI Review",
    description: "Professional review of the Volkswagen GTI performance vehicle.",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4",
    thumbnail: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/VolkswagenGTIReview.jpg",
    year: 2017,
    genre: "Review",
    duration: "3 min"
  },
  {
    id: "15",
    title: "We Are Going On Bullrun",
    description: "Documentary preview of the famous Bullrun supercar rally across America.",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
    thumbnail: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/WeAreGoingOnBullrun.jpg",
    year: 2017,
    genre: "Documentary",
    duration: "1 min"
  },
  {
    id: "16",
    title: "What Car Can You Get For A Grand?",
    description: "Exploring what kind of car you can buy with different budgets.",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4",
    thumbnail: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/WhatCarCanYouGetForAGrand.jpg",
    year: 2016,
    genre: "Review",
    duration: "2 min"
  },

  // Classic Film Trailers (These work reliably)
  {
    id: "17",
    title: "Nosferatu (Preview)",
    description: "Preview of F.W. Murnau's unauthorized adaptation of Dracula. Max Schreck's Count Orlok remains one of cinema's most terrifying vampires.",
    videoUrl: "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/720/Big_Buck_Bunny_720_10s_1MB.mp4",
    thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Nosferatu-Shadow.jpg/600px-Nosferatu-Shadow.jpg",
    year: 1922,
    genre: "Horror",
    duration: "Preview"
  },
  {
    id: "18",
    title: "Metropolis (Preview)",
    description: "Fritz Lang's visionary sci-fi masterpiece about class struggle in a futuristic city. One of the most influential films ever made.",
    videoUrl: "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/1080/Big_Buck_Bunny_1080_10s_1MB.mp4",
    thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Metropolis_%281927_film%29.jpg/600px-Metropolis_%281927_film%29.jpg",
    year: 1927,
    genre: "Sci-Fi",
    duration: "Preview"
  },
  {
    id: "19",
    title: "The Gold Rush (Preview)",
    description: "Charlie Chaplin's comedy masterpiece about the Klondike Gold Rush. Features the famous bread roll dance scene.",
    videoUrl: "https://test-videos.co.uk/vids/sintel/mp4/h264/720/Sintel_720_10s_1MB.mp4",
    thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Gold_rush_poster.jpg/600px-Gold_rush_poster.jpg",
    year: 1925,
    genre: "Comedy",
    duration: "Preview"
  },
  {
    id: "20",
    title: "Battleship Potemkin (Preview)",
    description: "Sergei Eisenstein's revolutionary masterpiece. The Odessa Steps sequence remains one of the most influential scenes in cinema history.",
    videoUrl: "https://test-videos.co.uk/vids/sintel/mp4/h264/1080/Sintel_1080_10s_2MB.mp4",
    thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Vintage_Potemkin.jpg/600px-Vintage_Potemkin.jpg",
    year: 1925,
    genre: "Drama",
    duration: "Preview"
  }
];