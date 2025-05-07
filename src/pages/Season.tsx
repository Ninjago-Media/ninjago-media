
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import EpisodeCard from "../components/EpisodeCard";
import { getSeasonById } from "../data/seasons";

const Season = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const seasonId = parseInt(id || "1");
  const season = getSeasonById(seasonId);

  useEffect(() => {
    if (!season) {
      navigate("/", { replace: true });
    }
  }, [season, navigate]);

  if (!season) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      {/* Season Hero */}
      <Hero
        title={season.title}
        description={season.description}
        image={season.image}
        seasonId={season.id}
      />
      
      {/* Episodes Section */}
      <section className="container mx-auto px-4 mt-12">
        <div className="mb-6">
          <h2 className="text-2xl font-bold">Episodes</h2>
          <p className="text-foreground/70 mt-2">Season {season.id} • {season.year}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {season.episodes.map((episode) => (
            <EpisodeCard key={episode.id} episode={episode} seasonId={seasonId} />
          ))}
        </div>
      </section>

      {/* More Seasons */}
      <section className="container mx-auto px-4 mt-16">
        <div className="mb-6">
          <h2 className="text-2xl font-bold">More Seasons</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {Array.from({ length: 4 }).map((_, index) => {
            const nextSeasonId = ((seasonId + index) % 4) + 1;
            const nextSeason = getSeasonById(nextSeasonId);
            if (nextSeason && nextSeason.id !== seasonId) {
              return (
                <div key={nextSeason.id} className="animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
                  <img
                    src={nextSeason.image}
                    alt={nextSeason.title}
                    className="w-full aspect-video object-cover rounded-md mb-2"
                    onClick={() => navigate(`/season/${nextSeason.id}`)}
                    style={{ cursor: "pointer" }}
                  />
                  <h3 className="font-bold">{nextSeason.title}</h3>
                  <p className="text-sm text-foreground/70">{nextSeason.year}</p>
                </div>
              );
            }
            return null;
          })}
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Season;
