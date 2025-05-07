export interface Episode {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  duration: string;
  videoUrl: string;
}

export interface Season {
  id: number;
  title: string;
  year: string;
  description: string;
  episodes: Episode[];
  image: string;
  color: string;
  isSpecial?: boolean;
}

// Helper function to generate placeholder thumbnails for variety
const getPlaceholderImage = (index: number): string => {
  const placeholders = [
    "https://images.unsplash.com/photo-1535376472810-5d229c65da09",
    "https://images.unsplash.com/photo-1501167786227-4cba60f6d58f",
    "https://images.unsplash.com/photo-1560707854-8ac1d43b6954",
    "https://images.unsplash.com/photo-1579546929518-9e396f3cc809",
    "https://images.unsplash.com/photo-1579546929662-711aa81148cf",
    "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d",
    "https://images.unsplash.com/photo-1548092372-0d1bd40894a3",
    "https://images.unsplash.com/photo-1550745165-9bc0b252726f",
    "https://images.unsplash.com/photo-1535303311164-664fc9ec6532",
    "https://images.unsplash.com/photo-1568480289356-5a75d0fd47fc",
    "https://images.unsplash.com/photo-1506157786151-b8491531f063",
    "https://images.unsplash.com/photo-1513151233558-d860c5398176",
    "https://images.unsplash.com/photo-1504253163759-c23fccaebb55",
    "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
    "https://images.unsplash.com/photo-1534447677768-be436bb09401",
    "https://images.unsplash.com/photo-1493612276216-ee3925520721",
    "https://images.unsplash.com/photo-1518623489648-a173ef7824f3"
  ];
  return placeholders[index % placeholders.length];
};

// Helper function to generate color based on season index
const getSeasonColor = (index: number): string => {
  const colors = ["red", "blue", "green", "gold", "purple", "orange"];
  return colors[index % colors.length];
};

// Generate all seasons with episodes
const generateAllSeasons = (): Season[] => {
  const allSeasons: Season[] = [];
  
  const seasonTitles = [
    "Rise of the Snakes",
    "Legacy of the Green Ninja",
    "Rebooted",
    "Tournament of Elements",
    "Possession",
    "Skybound",
    "Hands of Time",
    "Sons of Garmadon",
    "Hunted",
    "March of the Oni",
    "Secrets of the Forbidden Spinjitzu",
    "Prime Empire",
    "Master of the Mountain",
    "Seabound",
    "Crystalized",
    "Dragons Rising Season 1", 
    "Dragons Rising Season 2",
  ];
  
  const years = ["2011", "2012", "2014", "2015", "2015", "2016", "2017", "2018", "2018", "2019", "2019", "2020", "2020", "2021", "2022", "2023", "2023"];
  
  const seasonDescriptions = [
    "After Lord Garmadon's defeat, a new evil rises. The Serpentine, a race of snake-people, are unleashed and plotting to claim Ninjago as their own.",
    "Lloyd Garmadon must rise to his destiny as the Green Ninja to defeat his father, Lord Garmadon, and the Overlord.",
    "When the Digital Overlord returns, the ninja must defeat an army of nindroids and face a new technological threat.",
    "Master Chen invites the ninja to the Tournament of Elements, where they discover that Zane is alive and other elemental masters exist.",
    "When Lloyd is possessed by the ghost of Morro, the Ninja must find the Tomb of the First Spinjitzu Master before Morro releases the Preeminent into Ninjago.",
    "When the evil Djinn Nadakhan escapes his prison and frames the ninja for crimes they didn't commit, they must find the only weapon that can stop him.",
    "Forty years after the Serpentine War, Krux and Acronix, the Time Twins, return to exact revenge on Wu and Ninjago.",
    "The ninja face a new enemy, the Sons of Garmadon, a criminal biker organization who plan to resurrect Lord Garmadon using the Oni Masks.",
    "After the supposed demise of Master Wu and the original four ninja, Lloyd and Nya must try to defend Ninjago City against the oppressive rule of Lord Garmadon.",
    "The Oni, evil beings from the First Realm, invade Ninjago, forcing the ninja and their former enemies to team up.",
    "Following their battles with the Oni, the ninja travel to a remote pyramid where they find Professor Clutch Powers and awaken an ancient evil.",
    "When Jay's favorite video game Prime Empire mysteriously returns with gamers going missing, the ninjas enter the digital world to investigate.",
    "The ninja travel to the kingdom of Shintaro where they discover a race of underground dwelling Geckles and Munce who have been enslaved by evil skull sorcerers.",
    "Nya's elemental powers begin to evolve, which becomes crucial when an ancient sea creature named Wojira is awakened.",
    "The ninja reunite after a long absence to face the Crystal King, who seeks ancient, dark power. Later, they attempt to prevent the return of the Overlord.",
    "A new generation of heroes rise to defend Ninjago City from ancient dragon forces awakened after a thousand years.",
    "The Dragons Rising team continues their journey against the dragon forces threatening Ninjago.",
  ];
  
  const episodesPerSeason = [
    13, 13, 8, 10, 10, 10, 10, 10, 10, 4, 30, 16, 16, 16, 30, 10, 10
  ];
  
  // Create all seasons with episodes
  for (let i = 0; i < 17; i++) {
    const seasonNumber = i + 1;
    const episodes: Episode[] = [];
    
    // Generate episodes for each season
    for (let j = 0; j < episodesPerSeason[i]; j++) {
      const episodeNumber = j + 1;
      
      episodes.push({
        id: episodeNumber,
        title: `Episode ${episodeNumber}`,
        description: `Season ${seasonNumber}, Episode ${episodeNumber} of Ninjago: ${seasonTitles[i]}. The ninja face new challenges and enemies.`,
        thumbnail: `${getPlaceholderImage(i * 10 + j)}?w=600&h=400&fit=crop`,
        duration: `${Math.floor(20 + Math.random() * 5)}m`,
        videoUrl: `/episodes/s${seasonNumber.toString().padStart(2, '0')}e${episodeNumber.toString().padStart(2, '0')}.mp4`
      });
    }
    
    allSeasons.push({
      id: seasonNumber,
      title: seasonTitles[i],
      year: years[i],
      description: seasonDescriptions[i],
      episodes: episodes,
      image: `${getPlaceholderImage(i)}?w=800&h=450&fit=crop`,
      color: `ninjago-${getSeasonColor(i)}`
    });
  }
  
  // Add "The Island" as a special
  allSeasons.push({
    id: 14, // Using season number to keep it in chronological order
    title: "The Island",
    year: "2021",
    description: "The ninja travel to a mysterious island to rescue Master Wu, Misako, and Clutch Powers.",
    episodes: [
      {
        id: 1,
        title: "Episode 1",
        description: "Special: The Island, Episode 1. The ninja face new challenges and enemies.",
        thumbnail: `${getPlaceholderImage(13 * 10 + 1)}?w=600&h=400&fit=crop`,
        duration: `${Math.floor(20 + Math.random() * 5)}m`,
        videoUrl: `/episodes/special01e01.mp4`
      },
      {
        id: 2,
        title: "Episode 2",
        description: "Special: The Island, Episode 2. The ninja face new challenges and enemies.",
        thumbnail: `${getPlaceholderImage(13 * 10 + 2)}?w=600&h=400&fit=crop`,
        duration: `${Math.floor(20 + Math.random() * 5)}m`,
        videoUrl: `/episodes/special01e02.mp4`
      },
      {
        id: 3,
        title: "Episode 3",
        description: "Special: The Island, Episode 3. The ninja face new challenges and enemies.",
        thumbnail: `${getPlaceholderImage(13 * 10 + 3)}?w=600&h=400&fit=crop`,
        duration: `${Math.floor(20 + Math.random() * 5)}m`,
        videoUrl: `/episodes/special01e03.mp4`
      },
      {
        id: 4,
        title: "Episode 4",
        description: "Special: The Island, Episode 4. The ninja face new challenges and enemies.",
        thumbnail: `${getPlaceholderImage(13 * 10 + 4)}?w=600&h=400&fit=crop`,
        duration: `${Math.floor(20 + Math.random() * 5)}m`,
        videoUrl: `/episodes/special01e04.mp4`
      }
    ],
    image: `${getPlaceholderImage(13)}?w=800&h=450&fit=crop`,
    color: `ninjago-${getSeasonColor(13)}`,
    isSpecial: true
  });
  
  return allSeasons;
};

export const seasons: Season[] = generateAllSeasons();

export const getAllSeasons = (): Season[] => {
  return seasons;
};

export const getSeasonById = (id: number): Season | undefined => {
  return seasons.find(season => season.id === id);
};

export const getEpisodeById = (seasonId: number, episodeId: number): Episode | undefined => {
  const season = getSeasonById(seasonId);
  if (!season) return undefined;
  return season.episodes.find(episode => episode.id === episodeId);
};
