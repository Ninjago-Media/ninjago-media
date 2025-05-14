
import React, { createContext, useState, useContext, useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { toast } from "@/components/ui/sonner";

type SyncStatus = 'idle' | 'host' | 'viewer';
type VideoAction = 'play' | 'pause' | 'seek';

interface VideoSyncContextType {
  roomId: string | null;
  status: SyncStatus;
  isConnected: boolean;
  participants: number;
  createRoom: () => string;
  joinRoom: (roomId: string) => void;
  leaveRoom: () => void;
  sendVideoAction: (action: VideoAction, timestamp?: number) => void;
  currentTimestamp: number;
  isPlaying: boolean;
  setIsPlaying: (playing: boolean) => void;
  setCurrentTimestamp: (time: number) => void;
}

const defaultContext: VideoSyncContextType = {
  roomId: null,
  status: 'idle',
  isConnected: false,
  participants: 1,
  createRoom: () => "",
  joinRoom: () => {},
  leaveRoom: () => {},
  sendVideoAction: () => {},
  currentTimestamp: 0,
  isPlaying: false,
  setIsPlaying: () => {},
  setCurrentTimestamp: () => {},
};

const VideoSyncContext = createContext<VideoSyncContextType>(defaultContext);

export const useVideoSync = () => useContext(VideoSyncContext);

export const VideoSyncProvider = ({ children }: { children: React.ReactNode }) => {
  const [roomId, setRoomId] = useState<string | null>(null);
  const [status, setStatus] = useState<SyncStatus>('idle');
  const [isConnected, setIsConnected] = useState(false);
  const [participants, setParticipants] = useState(1);
  const [currentTimestamp, setCurrentTimestamp] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const { seasonId, episodeId } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  // Initialize room if roomId exists in URL
  useEffect(() => {
    const roomIdFromUrl = searchParams.get('room');
    if (roomIdFromUrl && status === 'idle') {
      joinRoom(roomIdFromUrl);
    }
  }, [searchParams, status]);

  // Simulated WebRTC connection using a mock implementation
  // In a real application, you would use WebRTC or a service like Firebase
  useEffect(() => {
    if (!roomId) return;
    
    // Simulate connection establishment
    const timer = setTimeout(() => {
      setIsConnected(true);
      toast.success(status === 'host' ? 'Room created! Share the link to invite others.' : 'Connected to room!');
    }, 1000);

    // Mock receiving remote actions
    const syncInterval = setInterval(() => {
      if (status === 'viewer' && isConnected) {
        // In a real implementation, this would be handled by actual WebRTC data channels
        // This is just to simulate the experience for the demo
      }
    }, 500);

    return () => {
      clearTimeout(timer);
      clearInterval(syncInterval);
    };
  }, [roomId, isConnected, status]);

  // Generate a random room ID
  const createRoom = () => {
    const newRoomId = Math.random().toString(36).substring(2, 10);
    setRoomId(newRoomId);
    setStatus('host');
    setSearchParams({ room: newRoomId });
    
    // In a real app, we would initialize WebRTC signaling here
    return newRoomId;
  };

  const joinRoom = (id: string) => {
    setRoomId(id);
    setStatus('viewer');
    setSearchParams({ room: id });
    
    // In a real app, we would connect to the WebRTC signaling server here
  };

  const leaveRoom = () => {
    setRoomId(null);
    setStatus('idle');
    setIsConnected(false);
    setParticipants(1);
    
    // Remove room parameter from URL
    searchParams.delete('room');
    setSearchParams(searchParams);
  };

  const sendVideoAction = (action: VideoAction, timestamp?: number) => {
    if (!isConnected || status !== 'host') return;
    
    // In a real implementation, this would send data through WebRTC
    console.log('Sending action:', action, timestamp);
    
    // Update local state based on the action
    if (action === 'play') setIsPlaying(true);
    if (action === 'pause') setIsPlaying(false);
    if (action === 'seek' && timestamp !== undefined) setCurrentTimestamp(timestamp);
  };

  const value = {
    roomId,
    status,
    isConnected,
    participants,
    createRoom,
    joinRoom,
    leaveRoom,
    sendVideoAction,
    currentTimestamp,
    isPlaying,
    setIsPlaying,
    setCurrentTimestamp,
  };

  return (
    <VideoSyncContext.Provider value={value}>
      {children}
    </VideoSyncContext.Provider>
  );
};
