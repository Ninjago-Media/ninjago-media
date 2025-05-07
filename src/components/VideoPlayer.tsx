
import { useState, useEffect } from "react";

interface VideoPlayerProps {
  videoUrl: string;
  title: string;
}

const VideoPlayer = ({ videoUrl, title }: VideoPlayerProps) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, [videoUrl]);

  return (
    <div className="video-container">
      {isLoading ? (
        <div className="flex items-center justify-center h-full bg-black/20">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-ninjago-gold"></div>
        </div>
      ) : (
        <div className="flex items-center justify-center h-full bg-black/40">
          <div className="text-center">
            <p className="text-lg text-foreground/70 mb-4">Video Player Placeholder for</p>
            <h2 className="text-2xl font-bold mb-4">{title}</h2>
            <p className="text-sm text-foreground/60">Upload your video file to: {videoUrl}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
