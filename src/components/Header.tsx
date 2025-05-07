
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/seasons?search=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-sm shadow-md" : "bg-gradient-to-b from-background to-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold bg-gradient-to-r from-ninjago-red via-ninjago-blue to-ninjago-green bg-clip-text text-transparent">
            NINJAGO<span className="text-ninjago-gold">MEDIA</span>
          </span>
        </Link>
        
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="text-foreground/80 hover:text-foreground transition-colors">
            Home
          </Link>
          <Link to="/seasons" className="text-foreground/80 hover:text-foreground transition-colors">
            All Seasons
          </Link>
          <Link to="/movies" className="text-foreground/80 hover:text-foreground transition-colors">
            Movies
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          {isSearchOpen ? (
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className="pl-3 pr-8 py-1 rounded-md bg-background border border-border text-sm focus:outline-none focus:ring-1 focus:ring-ninjago-gold"
                autoFocus
                onBlur={() => setSearchQuery("") || setIsSearchOpen(false)}
              />
              <button 
                type="submit" 
                className="absolute right-2 top-1/2 transform -translate-y-1/2"
              >
                <Search className="h-4 w-4 text-foreground/70" />
              </button>
            </form>
          ) : (
            <button 
              className="text-foreground/80 hover:text-foreground transition-colors"
              onClick={() => setIsSearchOpen(true)}
            >
              <Search className="h-5 w-5" />
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
