
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

  return (
    <div className="video-container relative aspect-video bg-black/80 rounded-lg overflow-hidden">
      {isLoading ? (
        <div className="flex items-center justify-center h-full bg-black/20">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-ninjago-gold"></div>
        </div>
      ) : (
        <div className="relative w-full h-full">
          {/* Actual video element - now visible */}
          <video 
            ref={videoRef}
            className="w-full h-full object-contain"
            src={videoUrl}
            controls={!isViewer || !isConnected}
            onPlay={handlePlay}
            onPause={handlePause}
            onSeeked={handleSeek}
          />
          
          {/* Overlay controls for watch party */}
          {isSynced && (
            <div className="absolute top-2 right-2 flex items-center gap-2 px-3 py-1 bg-black/50 rounded-full">
              <Users className="h-4 w-4" />
              <span className="text-xs">{participants}</span>
            </div>
          )}
          
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
