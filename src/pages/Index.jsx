
import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import SeasonCard from "../components/SeasonCard";
import { seasons, getAllSeasons } from "../data/seasons";

// Movie data for the movies section
const featuredMovies = [
  {
    id: "lego-ninjago-movie",
    title: "The LEGO Ninjago Movie",
    image: "https://m.media-amazon.com/images/M/MV5BNDI3MDljMDQtNDExNS00NmI4LTgzOTYtNjA5OGVmOGY0ZmZiXkEyXkFqcGdeQXVyNjk5NDA3OTk@._V1_.jpg",
    description: "The battle for Ninjago City calls to action young Master Builder Lloyd, aka the Green Ninja, along with his friends, who are all secret ninja warriors.",
    year: "2017",
    duration: "1h 41m"
  },
  {
    id: "day-of-the-departed",
    title: "Day of the Departed",
    image: "https://m.media-amazon.com/images/M/MV5BNGUzODU1NjAtY2JhZS00NzIzLTgzNmUtYTU2NWVkNTJhZjI1XkEyXkFqcGdeQXVyMjM5NDQzNTk@._V1_.jpg",
    description: "The ninja reunite to celebrate the Day of the Departed, but Cole accidentally unleashes a group of previously defeated villains.",
    year: "2016",
    duration: "44m"
  }
];

const Index = () => {
  const allSeasons = getAllSeasons();
  const featuredSeason = seasons[0]; // Featured season is the first one

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      {/* Featured Season Hero */}
      <Hero
        title={featuredSeason.title}
        description={featuredSeason.description}
        image={featuredSeason.image}
        seasonId={featuredSeason.id}
      />
      
      {/* Seasons Section */}
      <section className="container mx-auto px-4 mt-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">All Seasons</h2>
          <Link to="/seasons" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
            View All
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {allSeasons.slice(0, 4).map((season) => (
            <SeasonCard key={season.id} season={season} />
          ))}
        </div>
      </section>
      
      {/* Latest Season Episodes */}
      <section className="container mx-auto px-4 mt-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Latest Episodes</h2>
          <Link to={`/season/${featuredSeason.id}`} className="text-sm text-foreground/70 hover:text-foreground transition-colors">
            View All
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredSeason.episodes.map((episode) => (
            <Link 
              to={`/season/${featuredSeason.id}/episode/${episode.id}`}
              key={episode.id}
              className="hover-scale card-glow group"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10 group-hover:opacity-75 transition-opacity"></div>
                <img
                  src={episode.thumbnail}
                  alt={episode.title}
                  className="w-full rounded-md aspect-video object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                  <h3 className="text-lg font-bold group-hover:text-ninjago-gold transition-colors">{episode.title}</h3>
                  <p className="text-sm text-foreground/70 mt-1">{episode.description}</p>
                </div>
                <div className="absolute top-2 right-2 bg-background/80 px-2 py-1 rounded text-xs z-10">
                  {episode.duration}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
      
      {/* New Movies Section */}
      <section className="container mx-auto px-4 mt-12 mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Featured Movies</h2>
          <Link to="/movies" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
            View All
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredMovies.map((movie) => (
            <div key={movie.id} className="flex flex-col bg-card rounded-lg overflow-hidden hover:shadow-xl transition-all hover-scale group">
              <div className="relative h-48">
                <img
                  src={movie.image}
                  alt={movie.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent"></div>
                <div className="absolute bottom-2 right-2 bg-ninjago-red text-white px-2 py-1 rounded text-xs">
                  {movie.duration}
                </div>
              </div>
              <div className="p-4">
                <div className="flex justify-between mb-2">
                  <h3 className="text-xl font-bold group-hover:text-ninjago-gold transition-colors">{movie.title}</h3>
                  <span className="text-sm text-foreground/70">{movie.year}</span>
                </div>
                <p className="text-sm text-foreground/70">{movie.description}</p>
                <Link to="/movies" className="inline-block mt-3 text-ninjago-red hover:underline text-sm">
                  Watch Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
