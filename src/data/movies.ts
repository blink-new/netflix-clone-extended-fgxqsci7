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

// Using public domain videos from sources that allow cross-origin playback
export const movies: Movie[] = [
  {
    id: "1",
    title: "Big Buck Bunny",
    description: "A large rabbit deals with three tiny bullies, led by a flying squirrel, who are determined to squelch his happiness.",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Big_buck_bunny_poster_big.jpg/600px-Big_buck_bunny_poster_big.jpg",
    year: 2008,
    genre: "Animation",
    duration: "10 min"
  },
  {
    id: "2",
    title: "Sintel",
    description: "A lonely young woman, Sintel, helps and befriends a dragon, whom she calls Scales.",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
    thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Sintel_poster.jpg/600px-Sintel_poster.jpg",
    year: 2010,
    genre: "Fantasy",
    duration: "15 min"
  },
  {
    id: "3",
    title: "Tears of Steel",
    description: "In a future world, a group of soldiers attempt to take down a robot army.",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    thumbnail: "https://mango.blender.org/wp-content/gallery/4k-renders/tears_of_steel_bridge_2k.jpg",
    year: 2012,
    genre: "Sci-Fi",
    duration: "12 min"
  },
  {
    id: "4",
    title: "Elephant's Dream",
    description: "Two characters explore a strange mechanical world of giant machines.",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Elephants_Dream_s5_both.jpg/600px-Elephants_Dream_s5_both.jpg",
    year: 2006,
    genre: "Animation",
    duration: "11 min"
  },
  {
    id: "5",
    title: "For Bigger Blazes",
    description: "HBO GO now works with Chromecast -- the easiest way to enjoy online video on your TV.",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    thumbnail: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerBlazes.jpg",
    year: 2014,
    genre: "Commercial",
    duration: "1 min"
  },
  {
    id: "6",
    title: "For Bigger Escape",
    description: "Introducing Chromecast. The easiest way to enjoy online video and music on your TV.",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    thumbnail: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerEscapes.jpg",
    year: 2014,
    genre: "Commercial",
    duration: "1 min"
  },
  {
    id: "7",
    title: "For Bigger Fun",
    description: "Introducing Chromecast. The easiest way to enjoy online video and music on your TV.",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    thumbnail: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerFun.jpg",
    year: 2014,
    genre: "Commercial",
    duration: "1 min"
  },
  {
    id: "8",
    title: "For Bigger Joyrides",
    description: "Introducing Chromecast. The easiest way to enjoy online video and music on your TV.",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    thumbnail: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerJoyrides.jpg",
    year: 2014,
    genre: "Commercial",
    duration: "1 min"
  },
  {
    id: "9",
    title: "For Bigger Meltdowns",
    description: "Introducing Chromecast. The easiest way to enjoy online video and music on your TV.",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
    thumbnail: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerMeltdowns.jpg",
    year: 2014,
    genre: "Commercial",
    duration: "1 min"
  },
  {
    id: "10",
    title: "Night of the Living Dead",
    description: "Classic zombie horror film (1968).",
    videoUrl: "https://ia800201.us.archive.org/7/items/night_of_the_living_dead/night_of_the_living_dead_512kb.mp4",
    thumbnail: "https://archive.org/download/night_of_the_living_dead/night_of_the_living_dead.jpg",
    year: 1968,
    genre: "Horror",
    duration: "96 min"
  },
  {
    id: "11",
    title: "The Cabinet of Dr. Caligari",
    description: "German silent horror film (1920).",
    videoUrl: "https://ia801309.us.archive.org/32/items/TheCabinetOfDrCaligari1920/The%20Cabinet%20of%20Dr%20Caligari%20%281920%29.mp4",
    thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Das_Cabinet_des_Dr._Caligari.jpg/600px-Das_Cabinet_des_Dr._Caligari.jpg",
    year: 1920,
    genre: "Horror",
    duration: "67 min"
  },
  {
    id: "12",
    title: "Nosferatu",
    description: "Classic silent vampire horror film (1922).",
    videoUrl: "https://ia600300.us.archive.org/3/items/Nosferatu_most_complete/Nosferatu.mp4",
    thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Nosferatu-Shadow.jpg/600px-Nosferatu-Shadow.jpg",
    year: 1922,
    genre: "Horror",
    duration: "94 min"
  },
  {
    id: "13",
    title: "Subaru BRZ",
    description: "Promotional video for the Subaru BRZ sports car.",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
    thumbnail: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/SubaruOutbackOnStreetAndDirt.jpg",
    year: 2017,
    genre: "Commercial",
    duration: "2 min"
  },
  {
    id: "14",
    title: "Volkswagen GTI Review",
    description: "Review of the Volkswagen GTI performance car.",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4",
    thumbnail: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/VolkswagenGTIReview.jpg",
    year: 2017,
    genre: "Review",
    duration: "2 min"
  },
  {
    id: "15",
    title: "We Are Going On Bullrun",
    description: "Preview of the famous Bullrun rally event.",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
    thumbnail: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/WeAreGoingOnBullrun.jpg",
    year: 2017,
    genre: "Documentary",
    duration: "1 min"
  },
  {
    id: "16",
    title: "What Car Can You Get",
    description: "Guide to choosing your next car based on budget.",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4",
    thumbnail: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/WhatCarCanYouGetForAGrand.jpg",
    year: 2016,
    genre: "Review",
    duration: "2 min"
  }
];