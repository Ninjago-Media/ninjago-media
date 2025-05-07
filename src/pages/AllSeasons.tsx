
import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SeasonCard from "../components/SeasonCard";
import { getAllSeasons } from "../data/seasons";

const AllSeasons = () => {
  const allSeasons = getAllSeasons();
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredSeasons = allSeasons.filter(season => 
    season.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    season.year.includes(searchTerm)
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      {/* Hero Banner */}
      <div className="relative pt-16">
        <div className="w-full h-48 md:h-64 bg-gradient-to-r from-ninjago-blue via-ninjago-red to-ninjago-green overflow-hidden">
          <div className="container mx-auto px-4 h-full flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">All Seasons</h1>
            <p className="text-lg max-w-2xl">Explore all seasons of Ninjago and begin your journey with the ninja team.</p>
          </div>
        </div>
      </div>
      
      {/* Search and Filter */}
      <div className="container mx-auto px-4 mt-8">
        <div className="bg-card rounded-lg p-4 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="w-full md:w-1/3">
            <input
              type="text"
              placeholder="Search seasons..."
              className="w-full px-4 py-2 bg-background border border-border rounded-md"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-sm">Sort By:</span>
            <select className="px-4 py-2 bg-background border border-border rounded-md">
              <option value="newest">Release Year</option>
              <option value="alphabetical">Alphabetical</option>
            </select>
          </div>
        </div>
      </div>
      
      {/* Seasons Grid */}
      <section className="container mx-auto px-4 mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredSeasons.map((season) => (
            <SeasonCard key={season.id} season={season} />
          ))}
        </div>
        
        {filteredSeasons.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold mb-2">No seasons found</h3>
            <p>Try adjusting your search criteria.</p>
          </div>
        )}
      </section>
      
      <Footer />
    </div>
  );
};

export default AllSeasons;
