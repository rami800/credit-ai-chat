
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
  Zap,
  User,
  LogOut
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [currentBalance] = useState(47.50);
  const [usageThisMonth] = useState(12.30);
  const [userName] = useState("أحمد محمد"); // اسم المستخدم التجريبي
  const navigate = useNavigate();

  const recentChats = [
    { id: 1, title: "مساعدة في تحسين الكود", model: "GPT-4o", cost: 0.15, time: "منذ ساعتين" },
    { id: 2, title: "أفكار استراتيجية التسويق", model: "GPT-3.5", cost: 0.08, time: "منذ 5 ساعات" },
    { id: 3, title: "تصميم شعار", model: "DALL·E 3", cost: 0.32, time: "منذ يوم واحد" },
  ];

  const models = [
    { name: "GPT-4o", description: "الأكثر تطوراً في التفكير", cost: "$0.03/1K رمز", popular: true },
    { name: "GPT-3.5", description: "سريع واقتصادي", cost: "$0.002/1K رمز", popular: false },
    { name: "DALL·E 3", description: "توليد الصور", cost: "$0.08/صورة", popular: false },
  ];

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" dir="rtl">
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-6 flex justify-between items-center border-b border-purple-500/20">
        <div className="flex items-center space-x-reverse space-x-2">
          <Brain className="h-8 w-8 text-purple-400" />
          <span className="text-2xl font-bold text-white">مساعد الذكاء الاصطناعي</span>
        </div>
        <div className="flex items-center space-x-reverse space-x-4">
          <Badge variant="outline" className="text-purple-300 border-purple-400">
            الرصيد: ${currentBalance.toFixed(2)}
          </Badge>
          <div className="flex items-center space-x-reverse space-x-2 text-white">
            <User className="h-5 w-5" />
            <span>{userName}</span>
          </div>
          <Button variant="ghost" size="icon" className="text-white hover:text-purple-300">
            <Settings className="h-5 w-5" />
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-white hover:text-red-300"
            onClick={handleLogout}
          >
            <LogOut className="h-5 w-5" />
          </Button>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">أهلاً بك مرة أخرى، {userName}!</h1>
          <p className="text-gray-300">هل أنت مستعد لمواصلة رحلتك مع الذكاء الاصطناعي؟</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Balance & Quick Actions */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 border-purple-500/30 backdrop-blur-sm">
                <CardHeader className="pb-2">
                  <CardTitle className="text-white flex items-center">
                    <CreditCard className="ml-2 h-5 w-5 text-purple-400" />
                    الرصيد الحالي
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-white mb-2">
                    ${currentBalance.toFixed(2)}
                  </div>
                  <p className="text-gray-300 text-sm mb-4">
                    تم استخدام ${usageThisMonth.toFixed(2)} هذا الشهر
                  </p>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">
                    <Plus className="ml-2 h-4 w-4" />
                    شحن الرصيد
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-purple-500/20 backdrop-blur-sm">
                <CardHeader className="pb-2">
                  <CardTitle className="text-white flex items-center">
                    <TrendingUp className="ml-2 h-5 w-5 text-green-400" />
                    إحصائيات الاستخدام
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-300">الاستخدام الشهري</span>
                        <span className="text-white">${usageThisMonth.toFixed(2)}</span>
                      </div>
                      <Progress value={(usageThisMonth / 50) * 100} className="h-2" />
                    </div>
                    <div className="grid grid-cols-2 gap-4 pt-2">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-white">127</div>
                        <div className="text-xs text-gray-400">رسالة</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-white">8</div>
                        <div className="text-xs text-gray-400">صورة</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions */}
            <Card className="bg-white/5 border-purple-500/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">ابدأ جلسة جديدة</CardTitle>
                <CardDescription className="text-gray-300">
                  اختر نموذج الذكاء الاصطناعي المفضل لديك وابدأ المحادثة
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  {models.map((model) => (
                    <div key={model.name} className="relative">
                      {model.popular && (
                        <Badge className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs z-10">
                          الأكثر شعبية
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
                            <MessageCircle className="ml-1 h-3 w-3" />
                            ابدأ المحادثة
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
                  <History className="ml-2 h-5 w-5" />
                  النشاط الأخير
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {recentChats.map((chat) => (
                  <div key={chat.id} className="border-b border-slate-700 last:border-b-0 pb-3 last:pb-0">
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="text-white text-sm font-medium truncate flex-1">
                        {chat.title}
                      </h4>
                      <span className="text-purple-400 text-xs mr-2">
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
                  عرض كافة السجلات
                </Button>
              </CardContent>
            </Card>

            {/* Quick Tips */}
            <Card className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 border-blue-500/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Zap className="ml-2 h-5 w-5 text-blue-400" />
                  نصيحة مفيدة
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-sm">
                  استخدم GPT-3.5 للمهام البسيطة لتوفير الرصيد، وانتقل إلى GPT-4o للتفكير المعقد والتحليل المتقدم.
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
