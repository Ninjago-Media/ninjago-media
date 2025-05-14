
import { useState } from "react";
import { useVideoSync } from "@/context/VideoSyncContext";
import { Button } from "@/components/ui/button";
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Users, Link as LinkIcon, Copy, LogOut } from "lucide-react";
import { toast } from "@/components/ui/sonner";

const WatchTogetherControls = () => {
  const { roomId, status, createRoom, joinRoom, leaveRoom } = useVideoSync();
  const [joinRoomId, setJoinRoomId] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);
  
  const handleCopyLink = () => {
    if (!roomId) return;
    
    const currentUrl = window.location.href;
    navigator.clipboard.writeText(currentUrl).then(() => {
      toast.success("Watch party link copied to clipboard!");
    });
  };
  
  const handleCreateRoom = () => {
    createRoom();
    setDialogOpen(false);
  };
  
  const handleJoinRoom = () => {
    if (!joinRoomId.trim()) {
      toast.error("Please enter a room ID");
      return;
    }
    
    joinRoom(joinRoomId);
    setDialogOpen(false);
    setJoinRoomId("");
  };
  
  const handleLeaveRoom = () => {
    leaveRoom();
    toast.info("You left the watch party");
  };
  
  if (status !== 'idle') {
    return (
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          <Users className="h-4 w-4 text-ninjago-gold" />
          <span className="text-sm font-medium">Watch Party</span>
        </div>
        
        {roomId && (
          <Button 
            variant="outline" 
            size="sm" 
            className="h-8 gap-1 text-xs"
            onClick={handleCopyLink}
          >
            <Copy className="h-3 w-3" />
            Share
          </Button>
        )}
        
        <Button 
          variant="outline" 
          size="sm" 
          className="h-8 gap-1 text-xs border-ninjago-red text-ninjago-red hover:bg-ninjago-red/10" 
          onClick={handleLeaveRoom}
        >
          <LogOut className="h-3 w-3" />
          Leave
        </Button>
      </div>
    );
  }
  
  return (
    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
      <DialogTrigger asChild>
        <Button 
          variant="outline" 
          size="sm" 
          className="h-8 gap-1 border-ninjago-blue text-ninjago-blue hover:bg-ninjago-blue/10"
        >
          <Users className="h-4 w-4" />
          Watch Together
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Watch Together</DialogTitle>
          <DialogDescription>
            Create or join a watch party to enjoy this episode with friends.
          </DialogDescription>
        </DialogHeader>
        
        <div className="grid gap-4 py-4">
          <Button 
            className="bg-ninjago-blue hover:bg-ninjago-blue/90"
            onClick={handleCreateRoom}
          >
            Create a Watch Party
          </Button>
          
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or join existing
              </span>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <Input 
              placeholder="Enter room ID" 
              value={joinRoomId}
              onChange={(e) => setJoinRoomId(e.target.value)}
            />
            <Button 
              variant="secondary"
              onClick={handleJoinRoom}
            >
              Join
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WatchTogetherControls;
