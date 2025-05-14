
import { useParams, useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import VideoPlayer from "../components/VideoPlayer";
import WatchTogetherControls from "../components/WatchTogetherControls";
import { VideoSyncProvider } from "../context/VideoSyncContext";
import { getSeasonById, getEpisodeById } from "../data/seasons";

const Episode = () => {
  const { seasonId, episodeId } = useParams<{ seasonId: string; episodeId: string }>();
  const navigate = useNavigate();
  
  const sId = parseInt(seasonId || "1");
  const eId = parseInt(episodeId || "1");
  
  const season = getSeasonById(sId);
  const episode = season ? getEpisodeById(sId, eId) : undefined;
  
  useEffect(() => {
    if (!season || !episode) {
      navigate("/", { replace: true });
    }
  }, [season, episode, navigate]);
  
  if (!season || !episode) {
    return null;
  }
  
  const nextEpisode = season.episodes.find(ep => ep.id === eId + 1);
  const prevEpisode = season.episodes.find(ep => ep.id === eId - 1);
  
  return (
    <VideoSyncProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        
        <div className="pt-16">
          {/* Video Player */}
          <div className="container mx-auto px-4">
            <VideoPlayer videoUrl={episode.videoUrl} title={episode.title} />
          </div>
          
          {/* Episode Info */}
          <div className="container mx-auto px-4 mt-6">
            <div className="flex flex-col md:flex-row justify-between">
              <div>
                <h1 className="text-3xl font-bold">{episode.title}</h1>
                <p className="text-foreground/70 mt-2">
                  {season.isSpecial ? 'Special' : `Season ${sId}`}, Episode {eId} • {episode.duration}
                </p>
              </div>
              <div className="flex items-center space-x-2 mt-4 md:mt-0">
                <WatchTogetherControls />
                
                <div className="flex space-x-2">
                  {prevEpisode && (
                    <Link 
                      to={`/season/${sId}/episode/${prevEpisode.id}`}
                      className="px-4 py-1 h-8 bg-secondary/50 hover:bg-secondary rounded-md text-sm flex items-center justify-center"
                    >
                      Previous Episode
                    </Link>
                  )}
                  {nextEpisode && (
                    <Link 
                      to={`/season/${sId}/episode/${nextEpisode.id}`}
                      className="px-4 py-1 h-8 bg-ninjago-red hover:bg-ninjago-red/80 rounded-md text-sm flex items-center justify-center"
                    >
                      Next Episode
                    </Link>
                  )}
                </div>
              </div>
            </div>
            
            <p className="mt-6 text-lg">{episode.description}</p>
            
            <div className="mt-8 border-t border-border/30 pt-4">
              <Link to={`/season/${sId}`} className="text-ninjago-blue hover:text-ninjago-blue/80 transition-colors">
                Back to Season {sId}
              </Link>
            </div>
          </div>
          
          {/* More Episodes */}
          <div className="container mx-auto px-4 mt-12 mb-16">
            <h2 className="text-2xl font-bold mb-6">More Episodes</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {season.episodes.slice(0, 4).map((ep) => {
                if (ep.id !== eId) {
                  return (
                    <Link 
                      key={ep.id} 
                      to={`/season/${sId}/episode/${ep.id}`}
                      className="group"
                    >
                      <div className="relative overflow-hidden rounded-md">
                        <img 
                          src={ep.thumbnail} 
                          alt={ep.title}
                          className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-background to-transparent">
                          <p className="font-medium">{ep.title}</p>
                          <p className="text-xs text-foreground/70">Episode {ep.id}</p>
                        </div>
                      </div>
                    </Link>
                  );
                }
                return null;
              })}
            </div>
          </div>
        </div>
        
        <Footer />
      </div>
    </VideoSyncProvider>
  );
};

export default Episode;
