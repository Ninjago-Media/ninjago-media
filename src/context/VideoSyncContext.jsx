
import { createContext, useContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const VideoSyncContext = createContext();

export const useVideoSync = () => {
  const context = useContext(VideoSyncContext);
  if (!context) {
    throw new Error('useVideoSync must be used within a VideoSyncProvider');
  }
  return context;
};

export const VideoSyncProvider = ({ children }) => {
  const [roomId, setRoomId] = useState('');
  const [status, setStatus] = useState('idle');
  const [isConnected, setIsConnected] = useState(false);
  const [participants, setParticipants] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTimestamp, setCurrentTimestamp] = useState(0);
  const location = useLocation();

  // Check for room ID in URL params
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const roomParam = urlParams.get('room');
    
    if (roomParam) {
      setRoomId(roomParam);
      setStatus('viewer');
      setIsConnected(true);
      
      // Simulate random number of participants (1-5)
      setParticipants(Math.floor(Math.random() * 4) + 2);
    }
  }, [location]);

  // Create a watch party
  const createRoom = () => {
    // Generate a simple room ID
    const generatedId = Math.random().toString(36).substring(2, 10);
    setRoomId(generatedId);
    setStatus('host');
    setIsConnected(true);
    setParticipants(1);
    
    // Add room ID to URL without page reload
    const url = new URL(window.location);
    url.searchParams.set('room', generatedId);
    window.history.pushState({}, '', url);
    
    console.log('Room created:', generatedId);
    return generatedId;
  };

  // Join an existing watch party
  const joinRoom = (id) => {
    if (!id) return;
    
    setRoomId(id);
    setStatus('viewer');
    setIsConnected(true);
    
    // Simulate random number of participants (1-5)
    const newParticipants = Math.floor(Math.random() * 4) + 2;
    setParticipants(newParticipants);
    
    // Add room ID to URL without page reload
    const url = new URL(window.location);
    url.searchParams.set('room', id);
    window.history.pushState({}, '', url);
    
    console.log('Joined room:', id);
  };

  // Leave the current watch party
  const leaveRoom = () => {
    setRoomId('');
    setStatus('idle');
    setIsConnected(false);
    setParticipants(1);
    
    // Remove room ID from URL without page reload
    const url = new URL(window.location);
    url.searchParams.delete('room');
    window.history.pushState({}, '', url);
    
    console.log('Left room');
  };

  // Send video playback actions (play, pause, seek) to other participants
  const sendVideoAction = (action, data) => {
    if (!isConnected || status !== 'host') return;
    
    console.log('Sending action:', action, data);
    
    // In a real implementation, this would send a message to other participants
    // Here we just update our local state which simulates this for demo purposes
  };

  const value = {
    roomId,
    status,
    isConnected,
    participants,
    isPlaying,
    currentTimestamp,
    setIsPlaying,
    setCurrentTimestamp,
    createRoom,
    joinRoom,
    leaveRoom,
    sendVideoAction
  };

  return (
    <VideoSyncContext.Provider value={value}>
      {children}
    </VideoSyncContext.Provider>
  );
};
