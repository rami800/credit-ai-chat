
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Send, 
  User, 
  Settings, 
  CreditCard, 
  ArrowLeft,
  Sparkles
} from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Message {
  id: number;
  content: string;
  isUser: boolean;
  timestamp: Date;
  cost?: number;
}

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      content: "Hello! I'm your AI assistant. How can I help you today?",
      isUser: false,
      timestamp: new Date(),
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [currentBalance] = useState(47.50);
  const [selectedModel] = useState("GPT-4o");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      content: inputMessage,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiMessage: Message = {
        id: messages.length + 2,
        content: "I understand your question. This is a simulated response that demonstrates how the AI chat interface works. In the real implementation, this would connect to the OpenAI API to provide actual AI responses.",
        isUser: false,
        timestamp: new Date(),
        cost: 0.03,
      };
      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex flex-col">
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center border-b border-purple-500/20">
        <div className="flex items-center space-x-4">
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-white hover:text-purple-300"
            onClick={() => navigate('/dashboard')}
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div className="flex items-center space-x-2">
            <Brain className="h-6 w-6 text-purple-400" />
            <span className="text-xl font-bold text-white">AI Assistant</span>
          </div>
          <Badge className="bg-purple-600/20 text-purple-300 border-purple-600/30">
            {selectedModel}
          </Badge>
        </div>
        <div className="flex items-center space-x-4">
          <Badge variant="outline" className="text-purple-300 border-purple-400">
            Credits: ${currentBalance.toFixed(2)}
          </Badge>
          <Button variant="ghost" size="icon" className="text-white hover:text-purple-300">
            <Settings className="h-5 w-5" />
          </Button>
        </div>
      </nav>

      {/* Chat Messages */}
      <div className="flex-1 container mx-auto px-4 py-6 overflow-hidden">
        <div className="h-full flex flex-col max-w-4xl mx-auto">
          <div className="flex-1 overflow-y-auto space-y-4 mb-6">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex max-w-[80%] ${message.isUser ? 'flex-row-reverse' : 'flex-row'} gap-3`}>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                    message.isUser 
                      ? 'bg-purple-600' 
                      : 'bg-gradient-to-br from-purple-600 to-pink-600'
                  }`}>
                    {message.isUser ? (
                      <User className="h-4 w-4 text-white" />
                    ) : (
                      <Sparkles className="h-4 w-4 text-white" />
                    )}
                  </div>
                  <Card className={`${
                    message.isUser 
                      ? 'bg-purple-600/20 border-purple-500/30' 
                      : 'bg-white/5 border-purple-500/20'
                  } backdrop-blur-sm`}>
                    <CardContent className="p-4">
                      <p className="text-white whitespace-pre-wrap">{message.content}</p>
                      <div className="flex justify-between items-center mt-2 pt-2 border-t border-slate-700">
                        <span className="text-xs text-gray-400">
                          {message.timestamp.toLocaleTimeString()}
                        </span>
                        {message.cost && (
                          <span className="text-xs text-purple-400">
                            ${message.cost.toFixed(3)}
                          </span>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
                    <Sparkles className="h-4 w-4 text-white" />
                  </div>
                  <Card className="bg-white/5 border-purple-500/20 backdrop-blur-sm">
                    <CardContent className="p-4">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                        <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                        <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="border-t border-purple-500/20 pt-6">
            <div className="flex gap-3">
              <div className="flex-1">
                <Input
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message here..."
                  className="bg-slate-800/50 border-slate-700 text-white placeholder-gray-400 focus:border-purple-500"
                  disabled={isTyping}
                />
              </div>
              <Button
                onClick={handleSendMessage}
                disabled={!inputMessage.trim() || isTyping}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex justify-between items-center mt-2 text-xs text-gray-400">
              <span>Press Enter to send, Shift+Enter for new line</span>
              <span>Estimated cost: ~$0.03 per message</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
