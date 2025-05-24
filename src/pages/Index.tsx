
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Zap, CreditCard, Shield, MessageCircle, Image, BarChart3, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";
import AuthModal from "@/components/AuthModal";

const Index = () => {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');
  const navigate = useNavigate();

  const handleGetStarted = () => {
    setAuthMode('register');
    setShowAuthModal(true);
  };

  const handleSignIn = () => {
    setAuthMode('login');
    setShowAuthModal(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Brain className="h-8 w-8 text-purple-400" />
          <span className="text-2xl font-bold text-white">AI Assistant</span>
        </div>
        <div className="flex space-x-4">
          <Button variant="ghost" className="text-white hover:text-purple-300" onClick={handleSignIn}>
            Sign In
          </Button>
          <Button className="bg-purple-600 hover:bg-purple-700 text-white" onClick={handleGetStarted}>
            Get Started
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <Badge className="mb-6 bg-purple-600/20 text-purple-300 border-purple-600/30">
          Pay-per-use • No Subscriptions
        </Badge>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          AI Assistant
          <span className="block text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
            Pay Only for What You Use
          </span>
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Access powerful AI models like GPT-4o and DALL·E 3 with a flexible credit system. 
          No monthly subscriptions, no hidden fees - just pure AI power when you need it.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-6 text-lg"
            onClick={handleGetStarted}
          >
            <Zap className="mr-2 h-5 w-5" />
            Start Chatting Now
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-purple-400 text-purple-300 hover:bg-purple-600/10 px-8 py-6 text-lg"
          >
            <BarChart3 className="mr-2 h-5 w-5" />
            See Pricing
          </Button>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-white text-center mb-16">
          Why Choose Our AI Assistant?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="bg-white/5 border-purple-500/20 backdrop-blur-sm">
            <CardHeader>
              <CreditCard className="h-10 w-10 text-purple-400 mb-2" />
              <CardTitle className="text-white">Pay Per Use</CardTitle>
              <CardDescription className="text-gray-300">
                Only pay for the AI interactions you actually use. No monthly subscriptions or hidden fees.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-white/5 border-purple-500/20 backdrop-blur-sm">
            <CardHeader>
              <MessageCircle className="h-10 w-10 text-purple-400 mb-2" />
              <CardTitle className="text-white">Advanced Chat</CardTitle>
              <CardDescription className="text-gray-300">
                Access GPT-4o, GPT-3.5, and other cutting-edge language models for intelligent conversations.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-white/5 border-purple-500/20 backdrop-blur-sm">
            <CardHeader>
              <Image className="h-10 w-10 text-purple-400 mb-2" />
              <CardTitle className="text-white">Image Generation</CardTitle>
              <CardDescription className="text-gray-300">
                Create stunning visuals with DALL·E 3 and other AI image generation models.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-white/5 border-purple-500/20 backdrop-blur-sm">
            <CardHeader>
              <Shield className="h-10 w-10 text-purple-400 mb-2" />
              <CardTitle className="text-white">Secure & Private</CardTitle>
              <CardDescription className="text-gray-300">
                Your conversations and data are protected with enterprise-grade security.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-white/5 border-purple-500/20 backdrop-blur-sm">
            <CardHeader>
              <Zap className="h-10 w-10 text-purple-400 mb-2" />
              <CardTitle className="text-white">Lightning Fast</CardTitle>
              <CardDescription className="text-gray-300">
                Optimized for speed with real-time responses and a smooth, responsive interface.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-white/5 border-purple-500/20 backdrop-blur-sm">
            <CardHeader>
              <Users className="h-10 w-10 text-purple-400 mb-2" />
              <CardTitle className="text-white">Multi-Model Access</CardTitle>
              <CardDescription className="text-gray-300">
                Switch between different AI models based on your needs and budget preferences.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Transparent Pricing</h2>
          <p className="text-xl text-gray-300">No surprises. Pay only for what you consume.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <Card className="bg-white/5 border-purple-500/20 backdrop-blur-sm">
            <CardHeader className="text-center">
              <CardTitle className="text-white">GPT-3.5</CardTitle>
              <div className="text-2xl font-bold text-purple-400">$0.002</div>
              <CardDescription className="text-gray-300">per 1K tokens</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-gray-300 space-y-2">
                <li>• Fast responses</li>
                <li>• Great for general tasks</li>
                <li>• Most economical option</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-purple-500/20 backdrop-blur-sm ring-2 ring-purple-400">
            <CardHeader className="text-center">
              <Badge className="mb-2 bg-purple-600 text-white">Most Popular</Badge>
              <CardTitle className="text-white">GPT-4o</CardTitle>
              <div className="text-2xl font-bold text-purple-400">$0.03</div>
              <CardDescription className="text-gray-300">per 1K tokens</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-gray-300 space-y-2">
                <li>• Advanced reasoning</li>
                <li>• Complex problem solving</li>
                <li>• Best overall performance</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-purple-500/20 backdrop-blur-sm">
            <CardHeader className="text-center">
              <CardTitle className="text-white">DALL·E 3</CardTitle>
              <div className="text-2xl font-bold text-purple-400">$0.08</div>
              <CardDescription className="text-gray-300">per image</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-gray-300 space-y-2">
                <li>• High-quality images</li>
                <li>• Creative generation</li>
                <li>• Multiple styles</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-3xl p-12 backdrop-blur-sm border border-purple-500/20">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Start?</h2>
          <p className="text-xl text-gray-300 mb-8">Join thousands of users who have already discovered the freedom of pay-per-use AI.</p>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-12 py-6 text-lg"
            onClick={handleGetStarted}
          >
            <Brain className="mr-2 h-5 w-5" />
            Get Started for Free
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-12 border-t border-purple-500/20">
        <div className="text-center text-gray-400">
          <p>&copy; 2024 AI Assistant. Built for users who value flexibility and transparency.</p>
        </div>
      </footer>

      <AuthModal 
        isOpen={showAuthModal} 
        onClose={() => setShowAuthModal(false)} 
        mode={authMode}
        onSwitchMode={setAuthMode}
      />
    </div>
  );
};

export default Index;
