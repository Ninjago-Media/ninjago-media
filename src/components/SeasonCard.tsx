
import { Link } from "react-router-dom";
import { Season } from "../data/seasons";

interface SeasonCardProps {
  season: Season;
}

const SeasonCard = ({ season }: SeasonCardProps) => {
  return (
    <Link
      to={`/season/${season.id}`}
      className="hover-scale card-glow rounded-md overflow-hidden relative group h-64 md:h-72"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent z-10"></div>
      <img
        src={season.image}
        alt={season.title}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
        <span className="px-2 py-1 bg-black/50 text-xs rounded-md mb-2 inline-block">Season {season.id}</span>
        <h3 className="text-lg font-bold group-hover:text-ninjago-gold transition-colors">
          {season.title}
        </h3>
        <p className="text-sm text-foreground/70">{season.year}</p>
      </div>
      <div className="absolute top-2 right-2 z-20">
        <span className={`w-2 h-2 rounded-full bg-ninjago-${season.color.split('-')[1]} inline-block mr-1`}></span>
      </div>
    </Link>
  );
};

export default SeasonCard;
