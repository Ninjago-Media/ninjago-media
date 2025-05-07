
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SeasonCard from "../components/SeasonCard";
import { getAllSeasons } from "../data/seasons";

const AllSeasons = () => {
  const allSeasons = getAllSeasons();
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(searchParams.get("search") || "");
  
  // Update search term when URL search param changes
  useEffect(() => {
    const currentSearch = searchParams.get("search");
    if (currentSearch) {
      setSearchTerm(currentSearch);
    }
  }, [searchParams]);
  
  const filteredSeasons = allSeasons.filter(season => 
    season.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    season.year.includes(searchTerm)
  );

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    
    // Update URL search params
    if (value) {
      setSearchParams({ search: value });
    } else {
      setSearchParams({});
    }
  };

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
      
      {/* Search */}
      <div className="container mx-auto px-4 mt-8">
        <div className="bg-card rounded-lg p-4">
          <input
            type="text"
            placeholder="Search seasons..."
            className="w-full px-4 py-2 bg-background border border-border rounded-md"
            value={searchTerm}
            onChange={handleSearchChange}
          />
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
