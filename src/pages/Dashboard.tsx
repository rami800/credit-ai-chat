
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Brain, 
  CreditCard, 
  MessageCircle, 
  Image, 
  History, 
  Settings,
  Plus,
  TrendingUp,
  Zap
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [currentBalance] = useState(47.50);
  const [usageThisMonth] = useState(12.30);
  const navigate = useNavigate();

  const recentChats = [
    { id: 1, title: "Code optimization help", model: "GPT-4o", cost: 0.15, time: "2 hours ago" },
    { id: 2, title: "Marketing strategy ideas", model: "GPT-3.5", cost: 0.08, time: "5 hours ago" },
    { id: 3, title: "Logo design concepts", model: "DALL·E 3", cost: 0.32, time: "1 day ago" },
  ];

  const models = [
    { name: "GPT-4o", description: "Most advanced reasoning", cost: "$0.03/1K tokens", popular: true },
    { name: "GPT-3.5", description: "Fast and economical", cost: "$0.002/1K tokens", popular: false },
    { name: "DALL·E 3", description: "Image generation", cost: "$0.08/image", popular: false },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-6 flex justify-between items-center border-b border-purple-500/20">
        <div className="flex items-center space-x-2">
          <Brain className="h-8 w-8 text-purple-400" />
          <span className="text-2xl font-bold text-white">AI Assistant</span>
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

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Welcome back!</h1>
          <p className="text-gray-300">Ready to continue your AI-powered journey?</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Balance & Quick Actions */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 border-purple-500/30 backdrop-blur-sm">
                <CardHeader className="pb-2">
                  <CardTitle className="text-white flex items-center">
                    <CreditCard className="mr-2 h-5 w-5 text-purple-400" />
                    Current Balance
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-white mb-2">
                    ${currentBalance.toFixed(2)}
                  </div>
                  <p className="text-gray-300 text-sm mb-4">
                    Used ${usageThisMonth.toFixed(2)} this month
                  </p>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">
                    <Plus className="mr-2 h-4 w-4" />
                    Add Credits
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-purple-500/20 backdrop-blur-sm">
                <CardHeader className="pb-2">
                  <CardTitle className="text-white flex items-center">
                    <TrendingUp className="mr-2 h-5 w-5 text-green-400" />
                    Usage Stats
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-300">Monthly Usage</span>
                        <span className="text-white">${usageThisMonth.toFixed(2)}</span>
                      </div>
                      <Progress value={(usageThisMonth / 50) * 100} className="h-2" />
                    </div>
                    <div className="grid grid-cols-2 gap-4 pt-2">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-white">127</div>
                        <div className="text-xs text-gray-400">Messages</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-white">8</div>
                        <div className="text-xs text-gray-400">Images</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions */}
            <Card className="bg-white/5 border-purple-500/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Start a New Session</CardTitle>
                <CardDescription className="text-gray-300">
                  Choose your preferred AI model and start chatting
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  {models.map((model) => (
                    <div key={model.name} className="relative">
                      {model.popular && (
                        <Badge className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs z-10">
                          Popular
                        </Badge>
                      )}
                      <Card className="bg-slate-800/50 border-slate-700 hover:border-purple-500/50 transition-colors cursor-pointer">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-white text-sm">{model.name}</CardTitle>
                          <CardDescription className="text-xs text-gray-400">
                            {model.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <div className="text-purple-400 text-sm font-medium mb-3">
                            {model.cost}
                          </div>
                          <Button 
                            size="sm" 
                            className="w-full bg-purple-600 hover:bg-purple-700"
                            onClick={() => navigate('/chat')}
                          >
                            <MessageCircle className="mr-1 h-3 w-3" />
                            Start Chat
                          </Button>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Recent Activity */}
            <Card className="bg-white/5 border-purple-500/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <History className="mr-2 h-5 w-5" />
                  Recent Activity
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {recentChats.map((chat) => (
                  <div key={chat.id} className="border-b border-slate-700 last:border-b-0 pb-3 last:pb-0">
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="text-white text-sm font-medium truncate flex-1">
                        {chat.title}
                      </h4>
                      <span className="text-purple-400 text-xs ml-2">
                        ${chat.cost.toFixed(2)}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <Badge variant="outline" className="text-xs text-gray-400 border-gray-600">
                        {chat.model}
                      </Badge>
                      <span className="text-gray-500 text-xs">{chat.time}</span>
                    </div>
                  </div>
                ))}
                <Button variant="ghost" className="w-full text-purple-400 hover:text-purple-300">
                  View All History
                </Button>
              </CardContent>
            </Card>

            {/* Quick Tips */}
            <Card className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 border-blue-500/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Zap className="mr-2 h-5 w-5 text-blue-400" />
                  Pro Tip
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-sm">
                  Use GPT-3.5 for simple tasks to save credits, and switch to GPT-4o for complex reasoning and analysis.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
