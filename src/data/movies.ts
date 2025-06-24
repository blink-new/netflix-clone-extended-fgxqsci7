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

// CORS proxy to enable cross-origin video playback
const CORS_PROXY = "https://proxy.cors.sh/";

export const movies: Movie[] = [
  {
    id: "1",
    title: "Night of the Living Dead",
    description: "Classic zombie horror film (1968).",
    videoUrl: `${CORS_PROXY}https://archive.org/download/night_of_the_living_dead/night_of_the_living_dead_512kb.mp4`,
    thumbnail: "https://archive.org/download/night_of_the_living_dead/night_of_the_living_dead.jpg",
    year: 1968,
    genre: "Horror",
    duration: "96 min"
  },
  {
    id: "2",
    title: "Plan 9 from Outer Space",
    description: "Cult sci-fi B-movie (1959).",
    videoUrl: `${CORS_PROXY}https://archive.org/download/Plan_9_from_Outer_Space_1959/plan9_512kb.mp4`,
    thumbnail: "https://archive.org/download/Plan_9_from_Outer_Space_1959/Plan_9_from_Outer_Space_1959_poster.jpg",
    year: 1959,
    genre: "Sci-Fi",
    duration: "79 min"
  },
  {
    id: "3",
    title: "His Girl Friday",
    description: "Classic screwball comedy (1940).",
    videoUrl: `${CORS_PROXY}https://archive.org/download/HisGirlFriday/HisGirlFriday_512kb.mp4`,
    thumbnail: "https://archive.org/download/HisGirlFriday/HisGirlFriday.jpg",
    year: 1940,
    genre: "Comedy",
    duration: "92 min"
  },
  {
    id: "4",
    title: "The General",
    description: "Silent comedy with Buster Keaton (1926).",
    videoUrl: `${CORS_PROXY}https://archive.org/download/TheGeneral_1926/The_General_512kb.mp4`,
    thumbnail: "https://archive.org/download/TheGeneral_1926/TheGeneralPoster.jpg",
    year: 1926,
    genre: "Comedy",
    duration: "67 min"
  },
  {
    id: "5",
    title: "The Kid",
    description: "Charlie Chaplin silent classic (1921).",
    videoUrl: `${CORS_PROXY}https://archive.org/download/CharlieChaplin_TheKid_1918/CharlieChaplin_TheKid_512kb.mp4`,
    thumbnail: "https://archive.org/download/CharlieChaplin_TheKid_1918/Chaplin_TheKidPoster.jpg",
    year: 1921,
    genre: "Comedy",
    duration: "68 min"
  },
  {
    id: "6",
    title: "Sherlock Holmes and the Secret Weapon",
    description: "Mystery film starring Basil Rathbone (1942).",
    videoUrl: `${CORS_PROXY}https://archive.org/download/Sherlock_Holmes_and_the_Secret_Weapon_1942/Sherlock_Holmes_and_the_Secret_Weapon_512kb.mp4`,
    thumbnail: "https://archive.org/download/Sherlock_Holmes_and_the_Secret_Weapon_1942/Sherlock_Holmes_and_the_Secret_Weapon_poster.jpg",
    year: 1942,
    genre: "Mystery",
    duration: "68 min"
  },
  {
    id: "7",
    title: "Charade",
    description: "Romantic comedy thriller starring Audrey Hepburn (1963).",
    videoUrl: `${CORS_PROXY}https://archive.org/download/Charade_1963/Charade_512kb.mp4`,
    thumbnail: "https://archive.org/download/Charade_1963/Charade_poster.jpg",
    year: 1963,
    genre: "Romance",
    duration: "113 min"
  },
  {
    id: "8",
    title: "The Phantom of the Opera",
    description: "Classic silent horror film (1925).",
    videoUrl: `${CORS_PROXY}https://archive.org/download/ThePhantomOfTheOpera_1925/ThePhantomOfTheOpera_512kb.mp4`,
    thumbnail: "https://archive.org/download/ThePhantomOfTheOpera_1925/phantom_of_the_opera_poster.jpg",
    year: 1925,
    genre: "Horror",
    duration: "93 min"
  },
  {
    id: "9",
    title: "Rebecca of Sunnybrook Farm",
    description: "Family musical comedy (1938).",
    videoUrl: `${CORS_PROXY}https://archive.org/download/Rebecca_of_Sunnybrook_Farm_1938/Rebecca_of_Sunnybrook_Farm_512kb.mp4`,
    thumbnail: "https://archive.org/download/Rebecca_of_Sunnybrook_Farm_1938/Rebecca_of_Sunnybrook_Farm_poster.jpg",
    year: 1938,
    genre: "Family",
    duration: "81 min"
  },
  {
    id: "10",
    title: "The Mark of Zorro",
    description: "Adventurous swashbuckler starring Tyrone Power (1940).",
    videoUrl: `${CORS_PROXY}https://archive.org/download/TheMarkOfZorro_1940/TheMarkOfZorro_512kb.mp4`,
    thumbnail: "https://archive.org/download/TheMarkOfZorro_1940/mark_of_zorro_poster.jpg",
    year: 1940,
    genre: "Adventure",
    duration: "94 min"
  },
  {
    id: "11",
    title: "The Hunchback of Notre Dame",
    description: "Classic silent drama starring Lon Chaney (1923).",
    videoUrl: `${CORS_PROXY}https://archive.org/download/HunchbackOfNotreDame_1923/HunchbackOfNotreDame_512kb.mp4`,
    thumbnail: "https://archive.org/download/HunchbackOfNotreDame_1923/HunchbackOfNotreDame_poster.jpg",
    year: 1923,
    genre: "Drama",
    duration: "133 min"
  },
  {
    id: "12",
    title: "A Star is Born",
    description: "Musical drama starring Janet Gaynor (1937).",
    videoUrl: `${CORS_PROXY}https://archive.org/download/AStarIsBorn_1937/AStarIsBorn_512kb.mp4`,
    thumbnail: "https://archive.org/download/AStarIsBorn_1937/AStarIsBorn_poster.jpg",
    year: 1937,
    genre: "Musical",
    duration: "111 min"
  },
  {
    id: "13",
    title: "The Last Man on Earth",
    description: "Post-apocalyptic sci-fi horror (1964).",
    videoUrl: `${CORS_PROXY}https://archive.org/download/TheLastManOnEarth_1964/TheLastManOnEarth_512kb.mp4`,
    thumbnail: "https://archive.org/download/TheLastManOnEarth_1964/TheLastManOnEarth_poster.jpg",
    year: 1964,
    genre: "Sci-Fi",
    duration: "86 min"
  },
  {
    id: "14",
    title: "The Lost World",
    description: "Early dinosaur adventure film (1925).",
    videoUrl: `${CORS_PROXY}https://archive.org/download/TheLostWorld_1925/TheLostWorld_512kb.mp4`,
    thumbnail: "https://archive.org/download/TheLostWorld_1925/TheLostWorld_poster.jpg",
    year: 1925,
    genre: "Adventure",
    duration: "106 min"
  },
  {
    id: "15",
    title: "The Gold Rush",
    description: "Charlie Chaplin's silent comedy masterpiece (1925).",
    videoUrl: `${CORS_PROXY}https://archive.org/download/GoldRush_1925/GoldRush_512kb.mp4`,
    thumbnail: "https://archive.org/download/GoldRush_1925/GoldRush_poster.jpg",
    year: 1925,
    genre: "Comedy",
    duration: "95 min"
  },
  {
    id: "16",
    title: "Nosferatu",
    description: "Classic silent vampire horror film (1922).",
    videoUrl: `${CORS_PROXY}https://archive.org/download/Nosferatu_1922/Nosferatu_512kb.mp4`,
    thumbnail: "https://archive.org/download/Nosferatu_1922/Nosferatu_poster.jpg",
    year: 1922,
    genre: "Horror",
    duration: "94 min"
  },
  {
    id: "17",
    title: "The Birth of a Nation",
    description: "Silent drama film (1915).",
    videoUrl: `${CORS_PROXY}https://archive.org/download/TheBirthOfANation_1915/TheBirthOfANation_512kb.mp4`,
    thumbnail: "https://archive.org/download/TheBirthOfANation_1915/Birth_of_a_Nation_poster.jpg",
    year: 1915,
    genre: "Drama",
    duration: "195 min"
  },
  {
    id: "18",
    title: "The Cabinet of Dr. Caligari",
    description: "German silent horror film (1920).",
    videoUrl: `${CORS_PROXY}https://archive.org/download/TheCabinetOfDrCaligari_1920/TheCabinetOfDrCaligari_512kb.mp4`,
    thumbnail: "https://archive.org/download/TheCabinetOfDrCaligari_1920/Caligari_poster.jpg",
    year: 1920,
    genre: "Horror",
    duration: "67 min"
  },
  {
    id: "19",
    title: "Metropolis",
    description: "Classic silent sci-fi film by Fritz Lang (1927).",
    videoUrl: `${CORS_PROXY}https://archive.org/download/Metropolis_1927/Metropolis_512kb.mp4`,
    thumbnail: "https://archive.org/download/Metropolis_1927/Metropolis_poster.jpg",
    year: 1927,
    genre: "Sci-Fi",
    duration: "153 min"
  },
  {
    id: "20",
    title: "Safety Last!",
    description: "Silent comedy famous for the clock scene (1923).",
    videoUrl: `${CORS_PROXY}https://archive.org/download/SafetyLast_1923/SafetyLast_512kb.mp4`,
    thumbnail: "https://archive.org/download/SafetyLast_1923/SafetyLast_poster.jpg",
    year: 1923,
    genre: "Comedy",
    duration: "70 min"
  },
  {
    id: "21",
    title: "The Freshman",
    description: "Silent comedy starring Harold Lloyd (1925).",
    videoUrl: `${CORS_PROXY}https://archive.org/download/TheFreshman_1925/TheFreshman_512kb.mp4`,
    thumbnail: "https://archive.org/download/TheFreshman_1925/TheFreshman_poster.jpg",
    year: 1925,
    genre: "Comedy",
    duration: "76 min"
  },
  {
    id: "22",
    title: "The Kid Brother",
    description: "Silent comedy starring Harold Lloyd (1927).",
    videoUrl: `${CORS_PROXY}https://archive.org/download/TheKidBrother_1927/TheKidBrother_512kb.mp4`,
    thumbnail: "https://archive.org/download/TheKidBrother_1927/TheKidBrother_poster.jpg",
    year: 1927,
    genre: "Comedy",
    duration: "82 min"
  },
  {
    id: "23",
    title: "The Iron Horse",
    description: "Silent western epic (1924).",
    videoUrl: `${CORS_PROXY}https://archive.org/download/TheIronHorse_1924/TheIronHorse_512kb.mp4`,
    thumbnail: "https://archive.org/download/TheIronHorse_1924/TheIronHorse_poster.jpg",
    year: 1924,
    genre: "Western",
    duration: "150 min"
  },
  {
    id: "24",
    title: "The Last of the Mohicans",
    description: "Silent historical drama (1920).",
    videoUrl: `${CORS_PROXY}https://archive.org/download/TheLastOfTheMohicans_1920/TheLastOfTheMohicans_512kb.mp4`,
    thumbnail: "https://archive.org/download/TheLastOfTheMohicans_1920/TheLastOfTheMohicans_poster.jpg",
    year: 1920,
    genre: "Drama",
    duration: "73 min"
  },
  {
    id: "25",
    title: "The Four Horsemen of the Apocalypse",
    description: "Silent war drama (1921).",
    videoUrl: `${CORS_PROXY}https://archive.org/download/TheFourHorsemenOfTheApocalypse_1921/TheFourHorsemenOfTheApocalypse_512kb.mp4`,
    thumbnail: "https://archive.org/download/TheFourHorsemenOfTheApocalypse_1921/TheFourHorsemenOfTheApocalypse_poster.jpg",
    year: 1921,
    genre: "War",
    duration: "150 min"
  },
  {
    id: "26",
    title: "Tol'able David",
    description: "Silent drama film (1921).",
    videoUrl: `${CORS_PROXY}https://archive.org/download/TolableDavid_1921/TolableDavid_512kb.mp4`,
    thumbnail: "https://archive.org/download/TolableDavid_1921/TolableDavid_poster.jpg",
    year: 1921,
    genre: "Drama",
    duration: "99 min"
  },
  {
    id: "27",
    title: "The Big Parade",
    description: "Silent war drama (1925).",
    videoUrl: `${CORS_PROXY}https://archive.org/download/TheBigParade_1925/TheBigParade_512kb.mp4`,
    thumbnail: "https://archive.org/download/TheBigParade_1925/TheBigParade_poster.jpg",
    year: 1925,
    genre: "War",
    duration: "151 min"
  },
  {
    id: "28",
    title: "Wings",
    description: "Silent war film and first Best Picture Oscar winner (1927).",
    videoUrl: `${CORS_PROXY}https://archive.org/download/Wings_1927/Wings_512kb.mp4`,
    thumbnail: "https://archive.org/download/Wings_1927/Wings_poster.jpg",
    year: 1927,
    genre: "War",
    duration: "144 min"
  },
  {
    id: "29",
    title: "The Crowd",
    description: "Silent drama film (1928).",
    videoUrl: `${CORS_PROXY}https://archive.org/download/TheCrowd_1928/TheCrowd_512kb.mp4`,
    thumbnail: "https://archive.org/download/TheCrowd_1928/TheCrowd_poster.jpg",
    year: 1928,
    genre: "Drama",
    duration: "98 min"
  }
];