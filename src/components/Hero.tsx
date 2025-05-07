
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface HeroProps {
  title: string;
  description: string;
  image: string;
  seasonId?: number;
}

const Hero = ({ title, description, image, seasonId }: HeroProps) => {
  return (
    <div className="relative h-[70vh] w-full overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30 z-10"></div>
      
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ 
          backgroundImage: `url(${image})`,
          filter: 'brightness(0.5)'
        }}
      ></div>
      
      {/* Content */}
      <div className="container mx-auto h-full flex items-end pb-20 relative z-20">
        <div className="max-w-2xl animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">{title}</h1>
          <p className="text-lg text-foreground/80 mb-8">{description}</p>
          <div className="flex space-x-4">
            {seasonId ? (
              <>
                <Link to={`/season/${seasonId}/episode/1`}>
                  <Button className="bg-ninjago-red hover:bg-ninjago-red/80">
                    <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    Play
                  </Button>
                </Link>
                <Button variant="outline">
                  <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  More Info
                </Button>
              </>
            ) : (
              <Link to="/seasons">
                <Button className="bg-ninjago-red hover:bg-ninjago-red/80">
                  Explore Seasons
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
