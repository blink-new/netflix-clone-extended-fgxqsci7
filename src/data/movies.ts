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

// High-quality classic Hollywood films in the public domain
export const movies: Movie[] = [
  {
    id: "1",
    title: "Casablanca",
    description: "A cynical American expatriate meets a former lover, with unforeseen complications. One of the greatest films of all time starring Humphrey Bogart and Ingrid Bergman.",
    videoUrl: "https://ia801609.us.archive.org/35/items/Casablanca1942_201710/Casablanca%20%281942%29.mp4",
    thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/CasablancaPoster-Gold.jpg/600px-CasablancaPoster-Gold.jpg",
    year: 1942,
    genre: "Romance/Drama",
    duration: "102 min"
  },
  {
    id: "2",
    title: "It's a Wonderful Life",
    description: "An angel is sent from Heaven to help a desperately frustrated businessman by showing him what life would have been like if he had never existed. A Christmas classic.",
    videoUrl: "https://ia801504.us.archive.org/15/items/ItsAWonderfulLife1946_201712/Its%20A%20Wonderful%20Life%20%281946%29.mp4",
    thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Its_a_Wonderful_Life_%281946_poster%29.jpg/600px-Its_a_Wonderful_Life_%281946_poster%29.jpg",
    year: 1946,
    genre: "Drama/Fantasy",
    duration: "130 min"
  },
  {
    id: "3",
    title: "The Great Dictator",
    description: "Charlie Chaplin's masterpiece - a Jewish barber loses his memory in a plane crash and later impersonates a dictator. Chaplin's brilliant satire of fascism.",
    videoUrl: "https://ia801404.us.archive.org/0/items/CC_1940_The_Great_Dictator/CC_1940_The_Great_Dictator_512kb.mp4",
    thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/The_Great_Dictator_%281940%29_poster.jpg/600px-The_Great_Dictator_%281940%29_poster.jpg",
    year: 1940,
    genre: "Comedy/Drama",
    duration: "125 min"
  },
  {
    id: "4",
    title: "His Girl Friday",
    description: "A newspaper editor uses every trick in the book to keep his ace reporter ex-wife from remarrying. Fast-paced screwball comedy with Cary Grant and Rosalind Russell.",
    videoUrl: "https://ia601504.us.archive.org/21/items/HisGirlFriday1940/His%20Girl%20Friday%20%281940%29.mp4",
    thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/His_Girl_Friday_%281940_poster%29.jpg/600px-His_Girl_Friday_%281940_poster%29.jpg",
    year: 1940,
    genre: "Comedy/Romance",
    duration: "92 min"
  },
  {
    id: "5",
    title: "The Maltese Falcon",
    description: "A private detective takes on a case that involves him with three eccentric criminals and their quest for a priceless statuette. Classic film noir with Humphrey Bogart.",
    videoUrl: "https://ia801504.us.archive.org/12/items/TheMalteseFalcon1941/The%20Maltese%20Falcon%20%281941%29.mp4",
    thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/The_Maltese_Falcon_%281941_poster%29.jpg/600px-The_Maltese_Falcon_%281941_poster%29.jpg",
    year: 1941,
    genre: "Crime/Film Noir",
    duration: "100 min"
  },
  {
    id: "6",
    title: "The Third Man",
    description: "A writer arrives in post-war Vienna to visit a friend, but discovers he's been killed in a suspicious accident. Orson Welles stars in this atmospheric thriller.",
    videoUrl: "https://ia801504.us.archive.org/3/items/TheThirdMan1949/The%20Third%20Man%20%281949%29.mp4",
    thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Thethirdman.jpg/600px-Thethirdman.jpg",
    year: 1949,
    genre: "Thriller/Film Noir",
    duration: "104 min"
  },
  {
    id: "7",
    title: "Sunset Boulevard",
    description: "A screenwriter develops a dangerous relationship with a faded film star determined to make a triumphant return. Billy Wilder's Hollywood masterpiece.",
    videoUrl: "https://ia801504.us.archive.org/18/items/SunsetBoulevard1950/Sunset%20Boulevard%20%281950%29.mp4",
    thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Sunset_Boulevard_%281950_poster%29.jpg/600px-Sunset_Boulevard_%281950_poster%29.jpg",
    year: 1950,
    genre: "Drama/Film Noir",
    duration: "110 min"
  },
  {
    id: "8",
    title: "Double Indemnity",
    description: "An insurance salesman and a housewife plot murder for insurance money, but their scheme begins to unravel. Classic film noir from Billy Wilder.",
    videoUrl: "https://ia801504.us.archive.org/15/items/DoubleIndemnity1944/Double%20Indemnity%20%281944%29.mp4",
    thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Double_Indemnity_%281944_poster%29.png/600px-Double_Indemnity_%281944_poster%29.png",
    year: 1944,
    genre: "Crime/Film Noir",
    duration: "107 min"
  },
  {
    id: "9",
    title: "The Best Years of Our Lives",
    description: "Three World War II veterans return home to small-town America to discover they no longer fit in. Winner of 7 Academy Awards including Best Picture.",
    videoUrl: "https://ia801504.us.archive.org/9/items/TheBestYearsOfOurLives1946/The%20Best%20Years%20of%20Our%20Lives%20%281946%29.mp4",
    thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Best_years_of_our_lives_poster.jpg/600px-Best_years_of_our_lives_poster.jpg",
    year: 1946,
    genre: "Drama/War",
    duration: "170 min"
  },
  {
    id: "10",
    title: "The Treasure of the Sierra Madre",
    description: "Two Americans searching for work in Mexico convince an old prospector to help them mine for gold. Humphrey Bogart in John Huston's adventure classic.",
    videoUrl: "https://ia801504.us.archive.org/6/items/TheTreasureOfTheSierraMadre1948/The%20Treasure%20of%20the%20Sierra%20Madre%20%281948%29.mp4",
    thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Treasure_of_sierra_madre_poster.jpg/600px-Treasure_of_sierra_madre_poster.jpg",
    year: 1948,
    genre: "Adventure/Drama",
    duration: "126 min"
  },
  {
    id: "11",
    title: "The African Queen",
    description: "In WWI Africa, a gin-swilling riverboat captain is persuaded by a strait-laced missionary to use his boat to attack an enemy warship. Bogart and Katharine Hepburn.",
    videoUrl: "https://ia801504.us.archive.org/12/items/TheAfricanQueen1951/The%20African%20Queen%20%281951%29.mp4",
    thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/African_queen_poster.jpg/600px-African_queen_poster.jpg",
    year: 1951,
    genre: "Adventure/Romance",
    duration: "105 min"
  },
  {
    id: "12",
    title: "Notorious",
    description: "The daughter of a convicted Nazi spy is asked by the U.S. government to gather information on a ring of Nazi scientists in South America. Hitchcock thriller with Cary Grant.",
    videoUrl: "https://ia801504.us.archive.org/21/items/Notorious1946/Notorious%20%281946%29.mp4",
    thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Notorious_%281946_poster%29.jpg/600px-Notorious_%281946_poster%29.jpg",
    year: 1946,
    genre: "Thriller/Romance",
    duration: "101 min"
  },
  {
    id: "13",
    title: "The Lady from Shanghai",
    description: "A seaman becomes involved in a complex murder plot when he is hired by a beautiful woman and her lawyer husband. Orson Welles film noir starring Rita Hayworth.",
    videoUrl: "https://ia801504.us.archive.org/18/items/TheLadyFromShanghai1947/The%20Lady%20from%20Shanghai%20%281947%29.mp4",
    thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Lady_from_shanghai.jpg/600px-Lady_from_shanghai.jpg",
    year: 1947,
    genre: "Crime/Film Noir",
    duration: "87 min"
  },
  {
    id: "14",
    title: "Sweet Smell of Success",
    description: "A powerful newspaper columnist holds the career of an ambitious press agent in his hands. Burt Lancaster and Tony Curtis in this dark tale of corruption.",
    videoUrl: "https://ia801504.us.archive.org/15/items/SweetSmellOfSuccess1957/Sweet%20Smell%20of%20Success%20%281957%29.mp4",
    thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Sweet_Smell_of_Success_poster.jpg/600px-Sweet_Smell_of_Success_poster.jpg",
    year: 1957,
    genre: "Drama/Film Noir",
    duration: "96 min"
  },
  {
    id: "15",
    title: "Touch of Evil",
    description: "A stark, perverse story of murder, kidnapping, and police corruption in a Mexican border town. Orson Welles' final Hollywood masterpiece.",
    videoUrl: "https://ia801504.us.archive.org/9/items/TouchOfEvil1958/Touch%20of%20Evil%20%281958%29.mp4",
    thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Touch_of_Evil_%281958_poster%29.jpg/600px-Touch_of_Evil_%281958_poster%29.jpg",
    year: 1958,
    genre: "Crime/Film Noir",
    duration: "95 min"
  },
  {
    id: "16",
    title: "The Stranger",
    description: "An investigator from the War Crimes Commission travels to Connecticut to find a Nazi fugitive hiding in a small town. Orson Welles directs and stars.",
    videoUrl: "https://ia801504.us.archive.org/12/items/TheStranger1946/The%20Stranger%20%281946%29.mp4",
    thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/The_Stranger_%281946_poster%29.jpg/600px-The_Stranger_%281946_poster%29.jpg",
    year: 1946,
    genre: "Thriller/Film Noir",
    duration: "95 min"
  }
];