
import { Link } from "react-router-dom";

const EpisodeCard = ({ episode, seasonId }) => {
  return (
    <Link
      to={`/season/${seasonId}/episode/${episode.id}`}
      className="hover-scale card-glow flex flex-col bg-card rounded-md overflow-hidden"
    >
      <div className="relative group">
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 z-10">
          <svg className="w-16 h-16 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        </div>
        <img
          src={episode.thumbnail}
          alt={episode.title}
          className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute bottom-2 right-2 bg-background/80 px-2 py-1 rounded text-xs z-10">
          {episode.duration}
        </div>
      </div>
      <div className="p-3">
        <h3 className="episode-title">{episode.title}</h3>
        <p className="text-sm text-foreground/70 line-clamp-2 mt-1">{episode.description}</p>
      </div>
    </Link>
  );
};

export default EpisodeCard;
