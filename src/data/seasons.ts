
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
}

export const seasons: Season[] = [
  {
    id: 1,
    title: "Rise of the Snakes",
    year: "2011",
    description: "After Lord Garmadon's defeat, a new evil rises. The Serpentine, a race of snake-people, are unleashed and plotting to claim Ninjago as their own.",
    image: "https://images.unsplash.com/photo-1535376472810-5d229c65da09?w=800&h=450&fit=crop",
    color: "ninjago-green",
    episodes: [
      {
        id: 1,
        title: "Rise of the Snakes",
        description: "When Nya brings news that Lord Garmadon has been spotted, the ninja rush to face their arch nemesis, only to find the skeleton army now led by his son, Lloyd Garmadon.",
        thumbnail: "https://images.unsplash.com/photo-1535376472810-5d229c65da09?w=600&h=400&fit=crop",
        duration: "22m",
        videoUrl: "/episodes/s01e01.mp4"
      },
      {
        id: 2,
        title: "Home",
        description: "After the Hypnobrai tribe of Serpentine is unleashed, the ninja discover they need to refocus and intensify their training.",
        thumbnail: "https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?w=600&h=400&fit=crop",
        duration: "22m",
        videoUrl: "/episodes/s01e02.mp4"
      },
      {
        id: 3,
        title: "Snakebit",
        description: "Jay's parents visit and decide to turn his childhood home into a junkyard, but the Fangpyre tribe attacks and turns all the vehicles and Jay's parents into snakes.",
        thumbnail: "https://images.unsplash.com/photo-1560707854-8ac1d43b6954?w=600&h=400&fit=crop",
        duration: "22m",
        videoUrl: "/episodes/s01e03.mp4"
      },
    ]
  },
  {
    id: 2,
    title: "Legacy of the Green Ninja",
    year: "2012",
    description: "Lloyd Garmadon must rise to his destiny as the Green Ninja to defeat his father, Lord Garmadon, and the Overlord.",
    image: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800&h=450&fit=crop",
    color: "ninjago-gold",
    episodes: [
      {
        id: 1,
        title: "Darkness Shall Rise",
        description: "As the ninja relocate to the city and take on jobs to pay rent, Lord Garmadon joins forces with the Serpentine to create the ultimate weapon.",
        thumbnail: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=600&h=400&fit=crop",
        duration: "22m",
        videoUrl: "/episodes/s02e01.mp4"
      },
      {
        id: 2,
        title: "Pirates Vs. Ninja",
        description: "Lord Garmadon resurrects the remains of Captain Soto's crew, but they mutiny against him and take control of the Black Bounty.",
        thumbnail: "https://images.unsplash.com/photo-1579546929662-711aa81148cf?w=600&h=400&fit=crop",
        duration: "22m",
        videoUrl: "/episodes/s02e02.mp4"
      },
      {
        id: 3,
        title: "Double Trouble",
        description: "Lord Garmadon creates evil duplicates of the ninja to ruin their reputation.",
        thumbnail: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=600&h=400&fit=crop",
        duration: "22m",
        videoUrl: "/episodes/s02e03.mp4"
      },
    ]
  },
  {
    id: 3,
    title: "Rebooted",
    year: "2014",
    description: "When the Digital Overlord returns, the ninja must defeat an army of nindroids and face a new technological threat.",
    image: "https://images.unsplash.com/photo-1548092372-0d1bd40894a3?w=800&h=450&fit=crop",
    color: "ninjago-blue",
    episodes: [
      {
        id: 1,
        title: "The Surge",
        description: "After the disappearance of Lord Garmadon, Ninjago City has been rebuilt into a futuristic metropolis and the ninja have begun teaching at Wu's Academy.",
        thumbnail: "https://images.unsplash.com/photo-1548092372-0d1bd40894a3?w=600&h=400&fit=crop",
        duration: "22m",
        videoUrl: "/episodes/s03e01.mp4"
      },
      {
        id: 2,
        title: "The Art of the Silent Fist",
        description: "The ninja must learn the ancient art of the silent fist as they're pursued by nindroids.",
        thumbnail: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&h=400&fit=crop",
        duration: "22m",
        videoUrl: "/episodes/s03e02.mp4"
      },
      {
        id: 3,
        title: "Blackout",
        description: "The ninja face a new threat when the Overlord cuts power to all of Ninjago.",
        thumbnail: "https://images.unsplash.com/photo-1535303311164-664fc9ec6532?w=600&h=400&fit=crop",
        duration: "22m",
        videoUrl: "/episodes/s03e03.mp4"
      },
    ]
  },
  {
    id: 4,
    title: "Tournament of Elements",
    year: "2015",
    description: "Master Chen invites the ninja to the Tournament of Elements, where they discover that Zane is alive and other elemental masters exist.",
    image: "https://images.unsplash.com/photo-1568480289356-5a75d0fd47fc?w=800&h=450&fit=crop",
    color: "ninjago-red",
    episodes: [
      {
        id: 1,
        title: "The Invitation",
        description: "The ninja receive invitations to Master Chen's Tournament of Elements.",
        thumbnail: "https://images.unsplash.com/photo-1568480289356-5a75d0fd47fc?w=600&h=400&fit=crop",
        duration: "22m",
        videoUrl: "/episodes/s04e01.mp4"
      },
      {
        id: 2,
        title: "Only One Can Remain",
        description: "The Tournament of Elements begins, and the ninja discover that Chen plans to steal all the elemental powers.",
        thumbnail: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=600&h=400&fit=crop",
        duration: "22m",
        videoUrl: "/episodes/s04e02.mp4"
      },
      {
        id: 3,
        title: "Versus",
        description: "Kai and Cole must battle other elemental masters in the tournament.",
        thumbnail: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600&h=400&fit=crop",
        duration: "22m",
        videoUrl: "/episodes/s04e03.mp4"
      },
    ]
  },
  {
    id: 5,
    title: "Possession",
    year: "2015",
    description: "When Lloyd is possessed by the ghost of Morro, the Ninja must find the Tomb of the First Spinjitzu Master before Morro releases the Preeminent into Ninjago.",
    image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=800&h=450&fit=crop",
    color: "ninjago-green",
    episodes: [
      {
        id: 1,
        title: "Winds of Change",
        description: "Wu recounts his history with Morro, who returns as a ghost and possesses Lloyd.",
        thumbnail: "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=600&h=400&fit=crop",
        duration: "22m",
        videoUrl: "/episodes/s05e01.mp4"
      },
      {
        id: 2,
        title: "Ghost Story",
        description: "The ninja learn about the Cursed Realm and Airjitzu, which could help them rescue Lloyd from Morro's possession.",
        thumbnail: "https://images.unsplash.com/photo-1504253163759-c23fccaebb55?w=600&h=400&fit=crop",
        duration: "22m",
        videoUrl: "/episodes/s05e02.mp4"
      },
      {
        id: 3,
        title: "Stiix and Stones",
        description: "The ninja search for the Scroll of Airjitzu at Ronin's pawn shop in Stiix.",
        thumbnail: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=600&h=400&fit=crop",
        duration: "22m",
        videoUrl: "/episodes/s05e03.mp4"
      },
    ]
  },
  {
    id: 6,
    title: "Skybound",
    year: "2016",
    description: "When the evil Djinn Nadakhan escapes his prison and frames the ninja for crimes they didn't commit, they must find the only weapon that can stop him.",
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=800&h=450&fit=crop",
    color: "ninjago-blue",
    episodes: [
      {
        id: 1,
        title: "Infamous",
        description: "The ninja become famous after saving Ninjago, but are framed for crimes they didn't commit.",
        thumbnail: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=600&h=400&fit=crop",
        duration: "22m",
        videoUrl: "/episodes/s06e01.mp4"
      },
      {
        id: 2,
        title: "Public Enemy Number One",
        description: "The ninja go on the run from the police, while trying to clear their names.",
        thumbnail: "https://images.unsplash.com/photo-1493612276216-ee3925520721?w=600&h=400&fit=crop",
        duration: "22m",
        videoUrl: "/episodes/s06e02.mp4"
      },
      {
        id: 3,
        title: "Enkrypted",
        description: "The ninja are captured and sent to Kryptarium Prison, where they meet Captain Soto who tells them about Nadakhan the Djinn.",
        thumbnail: "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?w=600&h=400&fit=crop",
        duration: "22m",
        videoUrl: "/episodes/s06e03.mp4"
      },
    ]
  }
];

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
