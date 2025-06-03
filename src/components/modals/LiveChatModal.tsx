
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle, Send, Clock, User } from "lucide-react";
import { useState } from "react";

interface LiveChatModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function LiveChatModal({ isOpen, onClose }: LiveChatModalProps) {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Bonjour ! Je suis Sophie, votre assistante support. Comment puis-je vous aider aujourd'hui ?",
      sender: "support",
      time: "14:30"
    }
  ]);

  const handleSendMessage = () => {
    if (!message.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      text: message,
      sender: "user",
      time: new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, newMessage]);
    setMessage("");

    // Simulate support response
    setTimeout(() => {
      const response = {
        id: messages.length + 2,
        text: "Merci pour votre message. Je vais examiner votre demande et vous répondre dans quelques instants.",
        sender: "support",
        time: new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, response]);
    }, 1000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md h-[600px] flex flex-col">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
              <MessageCircle className="w-4 h-4 text-white" />
            </div>
            Chat en direct
          </DialogTitle>
          <DialogDescription className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            Support disponible 24/7
          </DialogDescription>
        </DialogHeader>
        
        <div className="flex-1 flex flex-col pt-4">
          {/* Support Agent Info */}
          <div className="flex items-center gap-3 p-3 bg-background/60 rounded-lg mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white font-semibold text-sm">S</span>
            </div>
            <div>
              <p className="font-medium text-foreground text-sm">Sophie Martin</p>
              <p className="text-xs text-muted-foreground flex items-center gap-1">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                Agent support · En ligne
              </p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 space-y-3 overflow-y-auto mb-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-[80%] ${msg.sender === 'user' ? 'order-1' : 'order-2'}`}>
                  <div
                    className={`p-3 rounded-lg ${
                      msg.sender === 'user'
                        ? 'bg-black text-white'
                        : 'bg-background border border-border'
                    }`}
                  >
                    <p className="text-sm">{msg.text}</p>
                  </div>
                  <div className={`flex items-center gap-1 mt-1 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <Clock className="w-3 h-3 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">{msg.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Message Input */}
          <div className="flex gap-2">
            <Input
              type="text"
              placeholder="Tapez votre message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              className="flex-1 h-10"
            />
            <Button
              onClick={handleSendMessage}
              disabled={!message.trim()}
              className="h-10 w-10 p-0 bg-black hover:bg-black/90"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>

          {/* Quick Actions */}
          <div className="flex gap-2 mt-3">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setMessage("J'ai un problème avec ma transaction")}
              className="text-xs"
            >
              Problème transaction
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setMessage("Comment puis-je modifier mon profil ?")}
              className="text-xs"
            >
              Modifier profil
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
