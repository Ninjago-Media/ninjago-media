
import { useState, useEffect, useRef } from "react";
import { useVideoSync } from "@/context/VideoSyncContext";
import { Button } from "@/components/ui/button";
import { Pause, Play, Users } from "lucide-react";

interface VideoPlayerProps {
  videoUrl: string;
  title: string;
}

const VideoPlayer = ({ videoUrl, title }: VideoPlayerProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const { 
    status, 
    isConnected, 
    participants,
    currentTimestamp, 
    isPlaying,
    setCurrentTimestamp,
    setIsPlaying,
    sendVideoAction 
  } = useVideoSync();
  
  const videoRef = useRef<HTMLVideoElement>(null);
  const isHost = status === 'host';
  const isViewer = status === 'viewer';
  const isSynced = status !== 'idle';

  // Handle initial loading animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, [videoUrl]);

  // Sync video playback based on host actions
  useEffect(() => {
    if (!videoRef.current || !isSynced) return;

    if (isViewer) {
      // Viewers follow the host's playback state
      if (isPlaying && videoRef.current.paused) {
        videoRef.current.play().catch(err => console.error('Play failed:', err));
      } else if (!isPlaying && !videoRef.current.paused) {
        videoRef.current.pause();
      }
      
      // Sync to timestamp if needed (with 2 second tolerance to avoid constant seeking)
      const currentTime = videoRef.current.currentTime;
      if (Math.abs(currentTime - currentTimestamp) > 2) {
        videoRef.current.currentTime = currentTimestamp;
      }
    }
  }, [isPlaying, currentTimestamp, isViewer, isSynced]);

  // Update local state when host interacts with video
  const handlePlay = () => {
    if (isHost) {
      sendVideoAction('play');
    }
    setIsPlaying(true);
  };

  const handlePause = () => {
    if (isHost) {
      sendVideoAction('pause');
    }
    setIsPlaying(false);
  };

  const handleSeek = () => {
    if (videoRef.current && isHost) {
      const newTime = videoRef.current.currentTime;
      setCurrentTimestamp(newTime);
      sendVideoAction('seek', newTime);
    }
  };

  // In a real app with actual video files, this would be a video element
  // For this demo, we're using a placeholder that simulates video controls
  return (
    <div className="video-container relative aspect-video bg-black/80 rounded-lg overflow-hidden">
      {isLoading ? (
        <div className="flex items-center justify-center h-full bg-black/20">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-ninjago-gold"></div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-full bg-black/40">
          {/* Video placeholder */}
          <div className="text-center px-4 mb-8">
            <video 
              ref={videoRef}
              className="w-full h-full hidden" // Hidden because it's just a placeholder
              onPlay={handlePlay}
              onPause={handlePause}
              onSeeked={handleSeek}
            />
            <h2 className="text-2xl font-bold mb-4">{title}</h2>
            <p className="text-sm text-foreground/60 mb-6">
              {isSynced ? (
                isHost ? "You are hosting this watch party" : "You joined a watch party"
              ) : (
                `Upload your video file to: ${videoUrl}`
              )}
            </p>
          </div>
          
          {/* Video controls */}
          <div className="flex items-center gap-4 mt-2">
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full bg-black/30 border-white/20 hover:bg-white/20"
              onClick={isPlaying ? handlePause : handlePlay}
              disabled={isViewer && !isConnected}
            >
              {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
            </Button>
            
            {isSynced && (
              <div className="flex items-center gap-2 px-3 py-1 bg-black/50 rounded-full">
                <Users className="h-4 w-4" />
                <span className="text-xs">{participants}</span>
              </div>
            )}
          </div>
          
          {isViewer && (
            <div className="absolute top-2 left-2 bg-ninjago-red px-2 py-1 rounded text-xs">
              Watching with host
            </div>
          )}
          
          {isHost && (
            <div className="absolute top-2 left-2 bg-ninjago-blue px-2 py-1 rounded text-xs">
              Host
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
