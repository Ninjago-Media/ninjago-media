
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
  isPilot?: boolean;
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
  
  // Add pilots as specials
  allSeasons.push({
    id: 0,
    title: "Way of the Ninja (Pilots)",
    year: "2011",
    description: "The pilots introduce us to the world of Ninjago, as Master Wu assembles a team of elemental ninjas to combat the forces of evil.",
    episodes: [
      {
        id: 1,
        title: "Way of the Ninja",
        description: "Sensei Wu recruits Kai to become a ninja to save his sister Nya from Lord Garmadon's Skeleton Army.",
        thumbnail: `${getPlaceholderImage(0)}?w=600&h=400&fit=crop`,
        duration: "22m",
        videoUrl: "/episodes/pilot01.mp4"
      },
      {
        id: 2,
        title: "The Golden Weapon",
        description: "Master Wu trains Kai alongside three other ninjas as they set off to find the first Golden Weapon.",
        thumbnail: `${getPlaceholderImage(1)}?w=600&h=400&fit=crop`,
        duration: "22m",
        videoUrl: "/episodes/pilot02.mp4"
      },
      {
        id: 3,
        title: "King of Shadows",
        description: "The ninjas search for the remaining Golden Weapons, but fall into a trap set by Garmadon.",
        thumbnail: `${getPlaceholderImage(2)}?w=600&h=400&fit=crop`,
        duration: "22m",
        videoUrl: "/episodes/pilot03.mp4"
      },
      {
        id: 4,
        title: "Weapons of Destiny",
        description: "The ninjas must rescue Kai and Nya and secure the Golden Weapons before Samukai delivers them to Lord Garmadon.",
        thumbnail: `${getPlaceholderImage(3)}?w=600&h=400&fit=crop`,
        duration: "22m",
        videoUrl: "/episodes/pilot04.mp4"
      }
    ],
    image: `${getPlaceholderImage(0)}?w=800&h=450&fit=crop`,
    color: `ninjago-gold`,
    isSpecial: true,
    isPilot: true
  });
  
  // Season 1: Rise of the Snakes
  allSeasons.push({
    id: 1,
    title: "Rise of the Snakes",
    year: "2012",
    description: "After Lord Garmadon's defeat, a new evil rises. The Serpentine, a race of snake-people, are unleashed and plotting to claim Ninjago as their own.",
    episodes: [
      {
        id: 1,
        title: "Rise of the Snakes",
        description: "The ninjas have become lazy, but are forced back into action when Lloyd Garmadon releases the hypnotic Serpentine tribe of Hypnobrai.",
        thumbnail: `${getPlaceholderImage(4)}?w=600&h=400&fit=crop`,
        duration: "22m",
        videoUrl: "/episodes/s01e01.mp4"
      },
      {
        id: 2,
        title: "Home",
        description: "The ninjas search for a new home after the Hypnobrai destroy their monastery, while Lloyd releases another Serpentine tribe, the Fangpyre.",
        thumbnail: `${getPlaceholderImage(5)}?w=600&h=400&fit=crop`,
        duration: "22m",
        videoUrl: "/episodes/s01e02.mp4"
      },
      {
        id: 3,
        title: "Snakebit",
        description: "Jay's parents visit the new Destiny's Bounty headquarters, but are transformed into snakes by the Fangpyre tribe.",
        thumbnail: `${getPlaceholderImage(6)}?w=600&h=400&fit=crop`,
        duration: "22m",
        videoUrl: "/episodes/s01e03.mp4"
      },
      {
        id: 4,
        title: "Never Trust a Snake",
        description: "Lloyd and Pythor, the last member of the Anacondrai tribe, release the Venomari tribe, but Pythor betrays Lloyd.",
        thumbnail: `${getPlaceholderImage(7)}?w=600&h=400&fit=crop`,
        duration: "22m",
        videoUrl: "/episodes/s01e04.mp4"
      },
      {
        id: 5,
        title: "Can of Worms",
        description: "Pythor releases the Constrictai tribe and plans to unite all Serpentine tribes while Lloyd moves in with the ninjas.",
        thumbnail: `${getPlaceholderImage(8)}?w=600&h=400&fit=crop`,
        duration: "22m",
        videoUrl: "/episodes/s01e05.mp4"
      },
      {
        id: 6,
        title: "The Snake King",
        description: "Pythor becomes the Snake King after finding the lost city of Ouroboros, and captures Lloyd who sought to become the new Snake King.",
        thumbnail: `${getPlaceholderImage(9)}?w=600&h=400&fit=crop`,
        duration: "22m",
        videoUrl: "/episodes/s01e06.mp4"
      },
      {
        id: 7,
        title: "Tick Tock",
        description: "Sensei Wu tells the ninjas about his past with Lord Garmadon, while Zane discovers he is a robot and unlocks his true potential.",
        thumbnail: `${getPlaceholderImage(10)}?w=600&h=400&fit=crop`,
        duration: "22m",
        videoUrl: "/episodes/s01e07.mp4"
      },
      {
        id: 8,
        title: "Once Bitten, Twice Shy",
        description: "Jay unlocks his true potential on a date with Nya, while Pythor searches for the four Silver Fangblades.",
        thumbnail: `${getPlaceholderImage(11)}?w=600&h=400&fit=crop`,
        duration: "22m",
        videoUrl: "/episodes/s01e08.mp4"
      },
      {
        id: 9,
        title: "The Royal Blacksmiths",
        description: "The ninjas enter a talent show to win a Fangblade, and Cole confronts his past while unlocking his true potential.",
        thumbnail: `${getPlaceholderImage(12)}?w=600&h=400&fit=crop`,
        duration: "22m",
        videoUrl: "/episodes/s01e09.mp4"
      },
      {
        id: 10,
        title: "The Green Ninja",
        description: "Lord Garmadon returns to help rescue Lloyd, and Kai discovers who is destined to be the Green Ninja while unlocking his own true potential.",
        thumbnail: `${getPlaceholderImage(13)}?w=600&h=400&fit=crop`,
        duration: "22m",
        videoUrl: "/episodes/s01e10.mp4"
      },
      {
        id: 11,
        title: "All of Nothing",
        description: "The ninjas attempt to steal the Fangblades from Serpentine's underground fortress but are captured by Pythor.",
        thumbnail: `${getPlaceholderImage(14)}?w=600&h=400&fit=crop`,
        duration: "22m",
        videoUrl: "/episodes/s01e11.mp4"
      },
      {
        id: 12,
        title: "The Rise of the Great Devourer",
        description: "The ninjas pursue Pythor to Torchfire Mountain to prevent him from awakening the Great Devourer.",
        thumbnail: `${getPlaceholderImage(15)}?w=600&h=400&fit=crop`,
        duration: "22m",
        videoUrl: "/episodes/s01e12.mp4"
      },
      {
        id: 13,
        title: "Day of the Great Devourer",
        description: "The ninjas and Lord Garmadon must work together to defeat the Great Devourer that is destroying Ninjago City.",
        thumbnail: `${getPlaceholderImage(16)}?w=600&h=400&fit=crop`,
        duration: "22m",
        videoUrl: "/episodes/s01e13.mp4"
      }
    ],
    image: `${getPlaceholderImage(1)}?w=800&h=450&fit=crop`,
    color: "ninjago-red"
  });

  // Season 2: Legacy of the Green Ninja
  allSeasons.push({
    id: 2,
    title: "Legacy of the Green Ninja",
    year: "2012",
    description: "Lloyd Garmadon must rise to his destiny as the Green Ninja to defeat his father, Lord Garmadon, and the Overlord.",
    episodes: [
      {
        id: 1,
        title: "Darkness Shall Rise",
        description: "The ninjas become bodyguards to pay for an apartment while Lord Garmadon takes control of the Serpentine to make his son evil again.",
        thumbnail: `${getPlaceholderImage(17)}?w=600&h=400&fit=crop`,
        duration: "22m",
        videoUrl: "/episodes/s02e01.mp4"
      },
      {
        id: 2,
        title: "Pirates vs. Ninja",
        description: "Garmadon uses the Mega Weapon to bring Captain Soto's pirates back to life to help him defeat the ninja.",
        thumbnail: `${getPlaceholderImage(1)}?w=600&h=400&fit=crop`,
        duration: "22m",
        videoUrl: "/episodes/s02e02.mp4"
      },
      {
        id: 3,
        title: "Double Trouble",
        description: "Garmadon creates evil duplicates of the ninja to frame them at their old school where Lloyd is training.",
        thumbnail: `${getPlaceholderImage(2)}?w=600&h=400&fit=crop`,
        duration: "22m",
        videoUrl: "/episodes/s02e03.mp4"
      },
      {
        id: 4,
        title: "Ninjaball Run",
        description: "The ninja enter a race to win prize money to save their dojo from being purchased by Dareth's landlord.",
        thumbnail: `${getPlaceholderImage(3)}?w=600&h=400&fit=crop`,
        duration: "22m",
        videoUrl: "/episodes/s02e04.mp4"
      },
      {
        id: 5,
        title: "Child's Play",
        description: "Garmadon uses the Mega Weapon to turn the ninja into children while they're hunting for the Grundal dinosaur.",
        thumbnail: `${getPlaceholderImage(4)}?w=600&h=400&fit=crop`,
        duration: "22m",
        videoUrl: "/episodes/s02e05.mp4"
      },
      {
        id: 6,
        title: "Wrong Place, Wrong Time",
        description: "Garmadon goes back in time to prevent Kai from becoming a ninja, and the ninja follow him to fix the timeline.",
        thumbnail: `${getPlaceholderImage(5)}?w=600&h=400&fit=crop`,
        duration: "22m",
        videoUrl: "/episodes/s02e06.mp4"
      },
      {
        id: 7,
        title: "The Stone Army",
        description: "The ninja discover an ancient evil called the Overlord while an indestructible Stone Army is awakened.",
        thumbnail: `${getPlaceholderImage(6)}?w=600&h=400&fit=crop`,
        duration: "22m",
        videoUrl: "/episodes/s02e07.mp4"
      },
      {
        id: 8,
        title: "The Day Ninjago Stood Still",
        description: "The Stone Army invades Ninjago City, forcing the citizens to evacuate to the Destiny's Bounty.",
        thumbnail: `${getPlaceholderImage(7)}?w=600&h=400&fit=crop`,
        duration: "22m",
        videoUrl: "/episodes/s02e08.mp4"
      },
      {
        id: 9,
        title: "The Last Voyage",
        description: "The ninja sail to the Dark Island to find Garmadon, but are attacked by a Starteeth swarm and rescued by Zane's father Dr. Julien.",
        thumbnail: `${getPlaceholderImage(8)}?w=600&h=400&fit=crop`,
        duration: "22m",
        videoUrl: "/episodes/s02e09.mp4"
      },
      {
        id: 10,
        title: "Island of Darkness",
        description: "The ninja find Lloyd's mother Misako on the Dark Island and discover they need to unlock the power of the Golden Dragon.",
        thumbnail: `${getPlaceholderImage(9)}?w=600&h=400&fit=crop`,
        duration: "22m",
        videoUrl: "/episodes/s02e10.mp4"
      },
      {
        id: 11,
        title: "The Last Hope",
        description: "The ninja attempt to steal the Helmet of Shadows to prevent Garmadon from firing the Garmatron weapon.",
        thumbnail: `${getPlaceholderImage(10)}?w=600&h=400&fit=crop`,
        duration: "22m",
        videoUrl: "/episodes/s02e11.mp4"
      },
      {
        id: 12,
        title: "Return of the Overlord",
        description: "The Overlord takes over Garmadon's body after he fires the Garmatron weapon at Ninjago, corrupting it with darkness.",
        thumbnail: `${getPlaceholderImage(11)}?w=600&h=400&fit=crop`,
        duration: "22m",
        videoUrl: "/episodes/s02e12.mp4"
      },
      {
        id: 13,
        title: "Rise of the Spinjitzu Master",
        description: "Lloyd faces the Overlord in the final battle with the help of the Ultra Dragon and the ancient Stone Warriors.",
        thumbnail: `${getPlaceholderImage(12)}?w=600&h=400&fit=crop`,
        duration: "22m",
        videoUrl: "/episodes/s02e13.mp4"
      }
    ],
    image: `${getPlaceholderImage(2)}?w=800&h=450&fit=crop`,
    color: "ninjago-green"
  });
  
  // Continue with additional seasons...
  // Season 3: Rebooted
  allSeasons.push({
    id: 3,
    title: "Rebooted",
    year: "2014",
    description: "When the Digital Overlord returns, the ninja must defeat an army of nindroids and face a new technological threat.",
    episodes: [
      {
        id: 1,
        title: "The Surge",
        description: "The ninja have become teachers at Sensei Wu's academy, but must spring back into action when the Overlord virus infiltrates New Ninjago City's systems.",
        thumbnail: `${getPlaceholderImage(13)}?w=600&h=400&fit=crop`,
        duration: "22m",
        videoUrl: "/episodes/s03e01.mp4"
      },
      {
        id: 2,
        title: "The Art of the Silent Fist",
        description: "The ninjas learn the Art of the Silent Fist from Sensei Garmadon while trying to escape from tech-tracking Nindroids.",
        thumbnail: `${getPlaceholderImage(14)}?w=600&h=400&fit=crop`,
        duration: "22m",
        videoUrl: "/episodes/s03e02.mp4"
      },
      {
        id: 3,
        title: "Blackout",
        description: "The Overlord plans to use electrocobrai to power himself and the Nindroids while the ninja discover that Zane is compatible with Borg Tower's systems.",
        thumbnail: `${getPlaceholderImage(15)}?w=600&h=400&fit=crop`,
        duration: "22m",
        videoUrl: "/episodes/s03e03.mp4"
      },
      {
        id: 4,
        title: "The Curse of the Golden Master",
        description: "The ninja journey underground and discover the Serpentine have changed their ways, warning them of a dark prophecy about the Golden Master.",
        thumbnail: `${getPlaceholderImage(16)}?w=600&h=400&fit=crop`,
        duration: "22m",
        videoUrl: "/episodes/s03e04.mp4"
      },
      {
        id: 5,
        title: "Enter the Digiverse",
        description: "The ninja enter the digital realm to destroy the Overlord virus while their physical bodies are defended by their allies.",
        thumbnail: `${getPlaceholderImage(0)}?w=600&h=400&fit=crop`,
        duration: "22m",
        videoUrl: "/episodes/s03e05.mp4"
      },
      {
        id: 6,
        title: "Codename: Arcturus",
        description: "The ninja discover Project Arcturus is a rocket heading to space to retrieve the Golden Weapons, and they stow away on board.",
        thumbnail: `${getPlaceholderImage(1)}?w=600&h=400&fit=crop`,
        duration: "22m",
        videoUrl: "/episodes/s03e06.mp4"
      },
      {
        id: 7,
        title: "The Void",
        description: "The ninja are stranded on a comet with limited oxygen while the Nindroids collect the Golden Weapons.",
        thumbnail: `${getPlaceholderImage(2)}?w=600&h=400&fit=crop`,
        duration: "22m",
        videoUrl: "/episodes/s03e07.mp4"
      },
      {
        id: 8,
        title: "The Titanium Ninja",
        description: "The ninja return to Ninjago to face the Golden Master, and Zane makes the ultimate sacrifice to save his friends.",
        thumbnail: `${getPlaceholderImage(3)}?w=600&h=400&fit=crop`,
        duration: "22m",
        videoUrl: "/episodes/s03e08.mp4"
      }
    ],
    image: `${getPlaceholderImage(3)}?w=800&h=450&fit=crop`,
    color: "ninjago-blue"
  });
  
  // Season 4: Tournament of Elements
  allSeasons.push({
    id: 4,
    title: "Tournament of Elements",
    year: "2015",
    description: "Master Chen invites the ninja to the Tournament of Elements, where they discover that Zane is alive and other elemental masters exist.",
    episodes: [
      {
        id: 1,
        title: "The Invitation",
        description: "The ninja receive an invitation to Master Chen's Tournament of Elements, where they discover Zane may still be alive.",
        thumbnail: `${getPlaceholderImage(4)}?w=600&h=400&fit=crop`,
        duration: "22m",
        videoUrl: "/episodes/s04e01.mp4"
      },
      {
        id: 2,
        title: "Only One Can Remain",
        description: "The Tournament of Elements begins, with the losers mysteriously disappearing as the ninja search for Zane.",
        thumbnail: `${getPlaceholderImage(5)}?w=600&h=400&fit=crop`,
        duration: "22m",
        videoUrl: "/episodes/s04e02.mp4"
      },
      {
        id: 3,
        title: "Versus",
        description: "Jay and Cole are forced to fight each other in the tournament while Zane awakens in captivity with a new titanium body.",
        thumbnail: `${getPlaceholderImage(6)}?w=600&h=400&fit=crop`,
        duration: "22m",
        videoUrl: "/episodes/s04e03.mp4"
      },
      {
        id: 4,
        title: "Ninja Roll",
        description: "The ninja form an alliance with their competitors after discovering Chen is stealing their elemental powers.",
        thumbnail: `${getPlaceholderImage(7)}?w=600&h=400&fit=crop`,
        duration: "22m",
        videoUrl: "/episodes/s04e04.mp4"
      },
      {
        id: 5,
        title: "Spy for a Spy",
        description: "The ninja search for a spy in their alliance while Nya infiltrates Chen's island disguised as a kabuki servant.",
        thumbnail: `${getPlaceholderImage(8)}?w=600&h=400&fit=crop`,
        duration: "22m",
        videoUrl: "/episodes/s04e05.mp4"
      },
      {
        id: 6,
        title: "Spellbound",
        description: "The remaining elemental masters search for Nya, and through flashbacks, we learn about the original Elemental Masters and the Serpentine War.",
        thumbnail: `${getPlaceholderImage(9)}?w=600&h=400&fit=crop`,
        duration: "22m",
        videoUrl: "/episodes/s04e06.mp4"
      },
      {
        id: 7,
        title: "The Forgotten Element",
        description: "Kai is tempted by Chen to join his side while the captured elemental masters attempt to break free of their imprisonment.",
        thumbnail: `${getPlaceholderImage(10)}?w=600&h=400&fit=crop`,
        duration: "22m",
        videoUrl: "/episodes/s04e07.mp4"
      },
      {
        id: 8,
        title: "The Day of the Dragon",
        description: "The elemental masters try to escape the island as Chen completes his spell to transform his followers into Anacondrai warriors.",
        thumbnail: `${getPlaceholderImage(11)}?w=600&h=400&fit=crop`,
        duration: "22m",
        videoUrl: "/episodes/s04e08.mp4"
      },
      {
        id: 9,
        title: "The Greatest Fear of All",
        description: "The elemental masters return to New Ninjago City, but hesitate to fight when Chen threatens to divide his forces and attack multiple villages.",
        thumbnail: `${getPlaceholderImage(12)}?w=600&h=400&fit=crop`,
        duration: "22m",
        videoUrl: "/episodes/s04e09.mp4"
      },
      {
        id: 10,
        title: "The Corridor of Elders",
        description: "The ninja rally everyone in Ninjago to make a final stand against Master Chen's Anacondrai army at the Corridor of Elders.",
        thumbnail: `${getPlaceholderImage(13)}?w=600&h=400&fit=crop`,
        duration: "22m",
        videoUrl: "/episodes/s04e10.mp4"
      }
    ],
    image: `${getPlaceholderImage(4)}?w=800&h=450&fit=crop`,
    color: "ninjago-orange"
  });
  
  // Continue adding the rest of the seasons with appropriate episode titles and descriptions
  // Season 5: Possession
  // Season 6: Skybound
  // Season 7: Hands of Time
  // Season 8: Sons of Garmadon
  // Season 9: Hunted
  // Season 10: March of the Oni
  // Season 11: Secrets of the Forbidden Spinjitzu
  // Season 12: Prime Empire
  // Season 13: Master of the Mountain
  
  // Add "The Island" as a special before season 14
  allSeasons.push({
    id: 13, // Using season number to keep it in chronological order
    title: "The Island",
    year: "2021",
    description: "The ninja travel to a mysterious island to rescue Master Wu, Misako, and Clutch Powers from the Keepers and discover an ancient amulet.",
    episodes: [
      {
        id: 1,
        title: "Mysterious Island",
        description: "After Wu, Misako and Clutch Powers go missing, the ninja follow their trail to a mysterious island in the storm belt.",
        thumbnail: `${getPlaceholderImage(13 * 10 + 1)}?w=600&h=400&fit=crop`,
        duration: "22m",
        videoUrl: "/episodes/special01e01.mp4"
      },
      {
        id: 2,
        title: "The Keepers of the Amulet",
        description: "The ninja are captured by the island's natives, the Keepers, who believe the storm amulet has been stolen by their captives.",
        thumbnail: `${getPlaceholderImage(13 * 10 + 2)}?w=600&h=400&fit=crop`,
        duration: "22m",
        videoUrl: "/episodes/special01e02.mp4"
      },
      {
        id: 3,
        title: "The Gift of Jay",
        description: "After Jay is struck by lightning, the Keepers believe he is the chosen one and gifted by the storm god Wojira.",
        thumbnail: `${getPlaceholderImage(13 * 10 + 3)}?w=600&h=400&fit=crop`,
        duration: "22m",
        videoUrl: "/episodes/special01e03.mp4"
      },
      {
        id: 4,
        title: "The Storm Amulet",
        description: "The ninja discover the true thieves are pirates led by Ronin and must work with the Keepers to recover the storm amulet.",
        thumbnail: `${getPlaceholderImage(13 * 10 + 4)}?w=600&h=400&fit=crop`,
        duration: "22m",
        videoUrl: "/episodes/special01e04.mp4"
      }
    ],
    image: `${getPlaceholderImage(13)}?w=800&h=450&fit=crop`,
    color: `ninjago-blue`,
    isSpecial: true
  });
  
  // Season 14: Seabound
  allSeasons.push({
    id: 14,
    title: "Seabound",
    year: "2021",
    description: "Nya's elemental powers begin to evolve, which becomes crucial when an ancient sea creature named Wojira is awakened.",
    episodes: [
      {
        id: 1,
        title: "A Big Splash",
        description: "Nya struggles to control her increasingly unstable elemental water powers as the ninja investigate a series of strange earthquakes.",
        thumbnail: `${getPlaceholderImage(14 * 10)}?w=600&h=400&fit=crop`,
        duration: "22m",
        videoUrl: "/episodes/s14e01.mp4"
      },
      {
        id: 2,
        title: "The Call of the Deep",
        description: "After a water attack in the city, the ninja track the culprit to Kalmaar, Prince of the Merlopians, who seeks to awaken Wojira.",
        thumbnail: `${getPlaceholderImage(14 * 10 + 1)}?w=600&h=400&fit=crop`,
        duration: "22m",
        videoUrl: "/episodes/s14e02.mp4"
      },
      // Add more episodes for season 14...
      {
        id: 16,
        title: "The Turn of the Tide",
        description: "Nya makes the ultimate sacrifice, merging with the endless sea to defeat Wojira and save Ninjago City from destruction.",
        thumbnail: `${getPlaceholderImage(14 * 10 + 15)}?w=600&h=400&fit=crop`,
        duration: "22m",
        videoUrl: "/episodes/s14e16.mp4"
      }
    ],
    image: `${getPlaceholderImage(14)}?w=800&h=450&fit=crop`,
    color: "ninjago-blue"
  });
  
  // Season 15: Crystalized (combined P1 and P2)
  allSeasons.push({
    id: 15,
    title: "Crystalized",
    year: "2022",
    description: "The ninja reunite after a long absence to face the Crystal King, who seeks ancient, dark power. Later, they attempt to prevent the return of the Overlord.",
    episodes: [
      {
        id: 1,
        title: "Crystalized",
        description: "The ninja team reunites after a year apart, each on their own journeys, to face a new threat in Ninjago City.",
        thumbnail: `${getPlaceholderImage(15 * 10)}?w=600&h=400&fit=crop`,
        duration: "22m",
        videoUrl: "/episodes/s15e01.mp4"
      },
      {
        id: 2,
        title: "The Helpers",
        description: "The ninja must rely on unexpected allies to help them as they face the Crystal Council's forces.",
        thumbnail: `${getPlaceholderImage(15 * 10 + 1)}?w=600&h=400&fit=crop`,
        duration: "22m",
        videoUrl: "/episodes/s15e02.mp4"
      },
      // Add more episodes for season 15...
      {
        id: 30,
        title: "The Overlord's Return",
        description: "The ninja make their final stand against the Crystal King as the Overlord begins his return to Ninjago.",
        thumbnail: `${getPlaceholderImage(15 * 10 + 29)}?w=600&h=400&fit=crop`,
        duration: "22m",
        videoUrl: "/episodes/s15e30.mp4"
      }
    ],
    image: `${getPlaceholderImage(15)}?w=800&h=450&fit=crop`,
    color: "ninjago-purple"
  });
  
  // Season 16: Dragons Rising Season 1
  allSeasons.push({
    id: 16,
    title: "Dragons Rising Season 1",
    year: "2023",
    description: "A new generation of heroes rise to defend Ninjago City from ancient dragon forces awakened after a thousand years.",
    episodes: [
      {
        id: 1,
        title: "The New Generation",
        description: "Meet the new generation of heroes as they discover their connection to the legendary ninja of the past.",
        thumbnail: `${getPlaceholderImage(16 * 10)}?w=600&h=400&fit=crop`,
        duration: "22m",
        videoUrl: "/episodes/s16e01.mp4"
      },
      {
        id: 2,
        title: "Dragons Awakening",
        description: "Ancient dragon forces begin to stir as the new team learns about their unique abilities and history.",
        thumbnail: `${getPlaceholderImage(16 * 10 + 1)}?w=600&h=400&fit=crop`,
        duration: "22m",
        videoUrl: "/episodes/s16e02.mp4"
      },
      // Add more episodes for season 16...
      {
        id: 10,
        title: "The First Battle",
        description: "The new ninja team faces their first major battle against the dragon forces threatening Ninjago.",
        thumbnail: `${getPlaceholderImage(16 * 10 + 9)}?w=600&h=400&fit=crop`,
        duration: "22m",
        videoUrl: "/episodes/s16e10.mp4"
      }
    ],
    image: `${getPlaceholderImage(16)}?w=800&h=450&fit=crop`,
    color: "ninjago-red"
  });
  
  // Season 17: Dragons Rising Season 2
  allSeasons.push({
    id: 17,
    title: "Dragons Rising Season 2",
    year: "2023",
    description: "The Dragons Rising team continues their journey against the dragon forces threatening Ninjago.",
    episodes: [
      {
        id: 1,
        title: "Aftermath",
        description: "After their first major battle, the team regroups and plans their next move against the growing dragon threat.",
        thumbnail: `${getPlaceholderImage(17 * 10)}?w=600&h=400&fit=crop`,
        duration: "22m",
        videoUrl: "/episodes/s17e01.mp4"
      },
      {
        id: 2,
        title: "Hidden Powers",
        description: "The new ninjas discover more about their hidden powers and connection to elemental forces.",
        thumbnail: `${getPlaceholderImage(17 * 10 + 1)}?w=600&h=400&fit=crop`,
        duration: "22m",
        videoUrl: "/episodes/s17e02.mp4"
      },
      // Add more episodes for season 17...
      {
        id: 10,
        title: "Legacy Continues",
        description: "The team faces their greatest challenge yet as they embrace their role as the new protectors of Ninjago.",
        thumbnail: `${getPlaceholderImage(17 * 10 + 9)}?w=600&h=400&fit=crop`,
        duration: "22m",
        videoUrl: "/episodes/s17e10.mp4"
      }
    ],
    image: `${getPlaceholderImage(17)}?w=800&h=450&fit=crop`,
    color: "ninjago-green"
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
