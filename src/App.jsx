
import { HashRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Season from "./pages/Season";
import Episode from "./pages/Episode";
import AllSeasons from "./pages/AllSeasons";
import Movies from "./pages/Movies";
import NotFound from "./pages/NotFound";

// Simple toast implementation without dependencies
const Toaster = () => <div id="toast-container"></div>;
const Sonner = () => <div id="sonner-container"></div>;
const TooltipProvider = ({ children }) => <>{children}</>;

// Simple query client implementation
const QueryClientProvider = ({ children }) => <>{children}</>;
const queryClient = {};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/seasons" element={<AllSeasons />} />
          <Route path="/season/:id" element={<Season />} />
          <Route path="/season/:seasonId/episode/:episodeId" element={<Episode />} />
          <Route path="/movies" element={<Movies />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
