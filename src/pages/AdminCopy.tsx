
import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Users, 
  Brain, 
  Settings, 
  CreditCard, 
  TrendingUp,
  DollarSign,
  Activity,
  Shield
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { AdminUsersManager } from "@/components/admin/AdminUsersManager";
import { AdminModelsManager } from "@/components/admin/AdminModelsManager";
import { AdminSettingsManager } from "@/components/admin/AdminSettingsManager";
import { AdminTransactions } from "@/components/admin/AdminTransactions";

const AdminCopy = () => {
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalModels: 0,
    totalTransactions: 0,
    totalRevenue: 0
  });
  const navigate = useNavigate();

  useEffect(() => {
    // Load dashboard statistics
    loadDashboardStats();
  }, []);

  const loadDashboardStats = async () => {
    try {
      // This would be implemented when you have the backend API ready
      console.log('Loading dashboard statistics...');
      // Placeholder data for now
      setStats({
        totalUsers: 156,
        totalModels: 8,
        totalTransactions: 1243,
        totalRevenue: 12450
      });
    } catch (error) {
      console.error('Error loading dashboard stats:', error);
    }
  };

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" dir="rtl">
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-6 flex justify-between items-center border-b border-purple-500/20">
        <div className="flex items-center space-x-reverse space-x-2">
          <Shield className="h-8 w-8 text-purple-400" />
          <span className="text-2xl font-bold text-white">نسخة لوحة تحكم المدير</span>
        </div>
        <div className="flex items-center space-x-reverse space-x-4">
          <Badge variant="outline" className="text-purple-300 border-purple-400">
            مدير النظام
          </Badge>
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-white hover:text-red-300"
            onClick={handleLogout}
          >
            <Settings className="h-5 w-5" />
          </Button>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white/5 border-purple-500/20 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-300">إجمالي المستخدمين</CardTitle>
              <Users className="h-4 w-4 text-purple-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{stats.totalUsers}</div>
              <p className="text-xs text-gray-400">+12% من الشهر الماضي</p>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-purple-500/20 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-300">النماذج المتاحة</CardTitle>
              <Brain className="h-4 w-4 text-blue-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{stats.totalModels}</div>
              <p className="text-xs text-gray-400">+2 نماذج جديدة</p>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-purple-500/20 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-300">المعاملات</CardTitle>
              <Activity className="h-4 w-4 text-green-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{stats.totalTransactions}</div>
              <p className="text-xs text-gray-400">+18% هذا الأسبوع</p>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-purple-500/20 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-300">الإيرادات</CardTitle>
              <DollarSign className="h-4 w-4 text-yellow-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">${stats.totalRevenue}</div>
              <p className="text-xs text-gray-400">+25% من الشهر الماضي</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="users" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-slate-800">
            <TabsTrigger value="users" className="data-[state=active]:bg-purple-600">
              إدارة المستخدمين
            </TabsTrigger>
            <TabsTrigger value="models" className="data-[state=active]:bg-purple-600">
              إدارة النماذج
            </TabsTrigger>
            <TabsTrigger value="settings" className="data-[state=active]:bg-purple-600">
              إعدادات النظام
            </TabsTrigger>
            <TabsTrigger value="transactions" className="data-[state=active]:bg-purple-600">
              المعاملات المالية
            </TabsTrigger>
          </TabsList>

          <TabsContent value="users" className="space-y-6">
            <AdminUsersManager />
          </TabsContent>

          <TabsContent value="models" className="space-y-6">
            <AdminModelsManager />
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <AdminSettingsManager />
          </TabsContent>

          <TabsContent value="transactions" className="space-y-6">
            <AdminTransactions />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminCopy;
