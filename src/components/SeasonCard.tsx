
import { Link } from "react-router-dom";
import { Season } from "../data/seasons";

interface SeasonCardProps {
  season: Season;
}

const SeasonCard = ({ season }: SeasonCardProps) => {
  return (
    <Link
      to={`/season/${season.id}`}
      className="hover-scale card-glow rounded-md overflow-hidden relative group h-52 md:h-60"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10"></div>
      <img
        src={season.image}
        alt={season.title}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
        <h3 className="text-lg font-bold group-hover:text-ninjago-gold transition-colors">
          {season.title}
        </h3>
        <p className="text-sm text-foreground/70">{season.year}</p>
      </div>
    </Link>
  );
};

export default SeasonCard;
