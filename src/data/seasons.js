
// Define Episode type
export const episodes = [
  {
    id: 1,
    title: "Way of the Ninja",
    description: "When Kai's sister Nya is kidnapped by skeletons, he follows Master Wu to train in Spinjitzu and become a ninja.",
    videoUrl: "https://cdn1.futuretodayinc.com/files/a8wn4hw/vi/f5/a7/b75f7e3753fe7eeca3778ad9ce6b1adb.mp4",
    duration: "22m",
    thumbnail: "https://m.media-amazon.com/images/M/MV5BYWVhYzA3ZjgtYTIwMC00NDQyLThkMjctYjA4YzVmOTg4YWNjXkEyXkFqcGdeQXVyNjg2NTAyMQ@@._V1_UY268_CR14,0,182,268_AL_.jpg"
  },
  {
    id: 2,
    title: "The Golden Weapon",
    description: "The four ninja set out to find the first golden weapon, the Scythe of Quakes.",
    videoUrl: "https://example.com/videos/ninjago/s0e2.mp4",
    duration: "22m",
    thumbnail: "https://m.media-amazon.com/images/M/MV5BNDZjYjcyZTUtNjMxNS00MTljLTkzNWItOWFhMThiYzQ5MzIyXkEyXkFqcGdeQXVyNjg2NTAyMQ@@._V1_UY268_CR14,0,182,268_AL_.jpg"
  },
  {
    id: 3,
    title: "King of Shadows",
    description: "The ninja venture to the Underworld to claim the final golden weapon.",
    videoUrl: "https://example.com/videos/ninjago/s0e3.mp4",
    duration: "22m",
    thumbnail: "https://m.media-amazon.com/images/M/MV5BYmI5YTgxYzUtOTQ2ZC00NDI5LWExMWEtYjIwOWRiMTQzMTcyXkEyXkFqcGdeQXVyNjg2NTAyMQ@@._V1_UY268_CR14,0,182,268_AL_.jpg"
  },
  {
    id: 4,
    title: "Weapons of Destiny",
    description: "Master Wu faces his brother Garmadon while the ninja try to protect the weapons.",
    videoUrl: "https://example.com/videos/ninjago/s0e4.mp4",
    duration: "22m",
    thumbnail: "https://m.media-amazon.com/images/M/MV5BN2ExZTMzZDUtNTEyYi00ZWI3LWFkZTAtNzBmYjUwMGU5NzYyXkEyXkFqcGdeQXVyNjg2NTAyMQ@@._V1_UY268_CR14,0,182,268_AL_.jpg"
  }
];

// Format for a Season
export const seasons = [
  {
    id: 0,
    title: "Pilot Episodes",
    description: "The adventure begins as four talented ninja are recruited to save the land of Ninjago from the forces of evil.",
    year: "2011",
    color: "ninjago-red",
    isSpecial: true,
    isPilot: true,
    image: "https://m.media-amazon.com/images/M/MV5BOWQwYjhkYTMtMGJiMy00NjBkLTk2YTYtMGJmMWRiOGVkODk0XkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
    episodes: episodes
  },
  {
    id: 1,
    title: "Rise of the Snakes",
    description: "The ninja face a new threat as the ancient Serpentine tribes are unleashed upon Ninjago.",
    year: "2011",
    color: "ninjago-green",
    image: "https://m.media-amazon.com/images/M/MV5BYjY0YWVmM2ItNzNkMy00NTgzLTliNzktYTUyOWUwMDFhYWY5XkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
    episodes: episodes.map(ep => ({ ...ep, title: ep.title + " (Season 1)" }))
  },
  {
    id: 2,
    title: "Legacy of the Green Ninja",
    description: "Lloyd must embrace his destiny as the Green Ninja and face the ultimate battle against the Overlord.",
    year: "2012",
    color: "ninjago-blue",
    image: "https://m.media-amazon.com/images/M/MV5BZDc0NTg4MjktNzU5Yi00NTdiLWI1YzEtMGM4MzJjZTU1ZjQ0XkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
    episodes: episodes.map(ep => ({ ...ep, title: ep.title + " (Season 2)" }))
  },
  {
    id: 3,
    title: "Rebooted",
    description: "When the digital Overlord returns, the ninja must battle an army of nindroids.",
    year: "2014",
    color: "ninjago-white",
    image: "https://m.media-amazon.com/images/M/MV5BMjRmMDcyMGMtNGYwOS00M2QwLThiYzctZGZjZjdmODZlN2RkXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
    episodes: episodes.map(ep => ({ ...ep, title: ep.title + " (Season 3)" }))
  },
  {
    id: 4,
    title: "Tournament of Elements",
    description: "The ninja compete in an elemental tournament hosted by the mysterious Master Chen.",
    year: "2015",
    color: "ninjago-orange",
    image: "https://m.media-amazon.com/images/M/MV5BNmFiNGMzMTQtNDI0OS00MGQ5LWE0MzUtYTNiODA5MmYwNTRmXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
    episodes: episodes.map(ep => ({ ...ep, title: ep.title + " (Season 4)" }))
  }
];

// Helper functions for accessing data
export const getAllSeasons = () => {
  return seasons;
};

export const getSeasonById = (id) => {
  return seasons.find(season => season.id === id);
};

export const getEpisodeById = (seasonId, episodeId) => {
  const season = getSeasonById(seasonId);
  if (season) {
    return season.episodes.find(episode => episode.id === episodeId);
  }
  return undefined;
};
