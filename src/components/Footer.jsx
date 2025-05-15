
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-card py-8 border-t border-border/40">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              NINJAGO<span className="text-yellow-500">MEDIA</span>
            </h3>
            <p className="text-sm text-foreground/70">
              Your ultimate streaming platform for all things Ninjago.
            </p>
            <p className="text-sm text-foreground/70 mt-2">
              Created with ❤️ by fans, for fans.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Seasons</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/season/1" className="text-foreground/70 hover:text-foreground transition-colors">
                  Rise of the Snakes
                </Link>
              </li>
              <li>
                <Link to="/season/2" className="text-foreground/70 hover:text-foreground transition-colors">
                  Legacy of the Green Ninja
                </Link>
              </li>
              <li>
                <Link to="/season/3" className="text-foreground/70 hover:text-foreground transition-colors">
                  Rebooted
                </Link>
              </li>
              <li>
                <Link to="/season/4" className="text-foreground/70 hover:text-foreground transition-colors">
                  Tournament of Elements
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-foreground/70 hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/seasons" className="text-foreground/70 hover:text-foreground transition-colors">
                  All Seasons
                </Link>
              </li>
              <li>
                <Link to="/movies" className="text-foreground/70 hover:text-foreground transition-colors">
                  Movies
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Community</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-foreground/70 hover:text-foreground transition-colors">
                  Discord
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-foreground transition-colors">
                  Reddit
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-foreground transition-colors">
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-4 border-t border-border/40 text-center text-sm text-foreground/60">
          <p>© {new Date().getFullYear()} Ninjago Media. This is a fan-made site and is not affiliated with LEGO® Group.</p>
          <p className="mt-2">LEGO® NINJAGO® is a trademark of the LEGO Group.</p>
          <p className="mt-2">No cookies or tracking. Just Ninjago awesomeness.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
