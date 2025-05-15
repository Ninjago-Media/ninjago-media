
import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const movies = [
  {
    id: "lego-ninjago-movie",
    title: "The LEGO Ninjago Movie",
    image: "https://m.media-amazon.com/images/M/MV5BNDI3MDljMDQtNDExNS00NmI4LTgzOTYtNjA5OGVmOGY0ZmZiXkEyXkFqcGdeQXVyNjk5NDA3OTk@._V1_.jpg",
    description: "The battle for Ninjago City calls to action young Master Builder Lloyd, aka the Green Ninja, along with his friends, who are all secret ninja warriors. Led by Master Wu, they must defeat evil warlord Garmadon.",
    year: "2017",
    duration: "1h 41m"
  },
  {
    id: "day-of-the-departed",
    title: "Day of the Departed",
    image: "https://m.media-amazon.com/images/M/MV5BNGUzODU1NjAtY2JhZS00NzIzLTgzNmUtYTU2NWVkNTJhZjI1XkEyXkFqcGdeQXVyMjM5NDQzNTk@._V1_.jpg",
    description: "The ninja reunite to celebrate the Day of the Departed, but Cole, whose ghostly form has him fading from existence, accidentally unleashes a group of previously defeated villains.",
    year: "2016",
    duration: "44m"
  }
];

const Movies = () => {
  // Removed search-related state and functions
  const filteredMovies = movies;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      {/* Hero Banner */}
      <div className="relative pt-16">
        <div className="w-full h-48 md:h-64 bg-gradient-to-r from-ninjago-green via-ninjago-gold to-ninjago-red overflow-hidden">
          <div className="container mx-auto px-4 h-full flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Ninjago Movies</h1>
            <p className="text-lg max-w-2xl">Watch special Ninjago movies and feature-length episodes.</p>
          </div>
        </div>
      </div>
      
      {/* Removed search bar section */}
      
      {/* Movies Grid */}
      <section className="container mx-auto px-4 mt-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredMovies.map((movie) => (
            <div key={movie.id} className="flex flex-col md:flex-row bg-card rounded-lg overflow-hidden hover:shadow-xl transition-all hover-scale">
              <div className="md:w-1/3 h-48 md:h-auto relative">
                <img 
                  src={movie.image} 
                  alt={movie.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-2">
                  <h2 className="text-2xl font-bold">{movie.title}</h2>
                  <span className="text-sm text-foreground/70 bg-background/50 px-2 py-1 rounded">{movie.year}</span>
                </div>
                <p className="text-sm text-foreground/80 mb-4">{movie.description}</p>
                <div className="mt-auto flex justify-between items-center">
                  <span className="text-sm">{movie.duration}</span>
                  <button className="bg-ninjago-red hover:bg-ninjago-red/80 text-white px-4 py-2 rounded-md transition-colors">
                    Watch Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Movies;
