
import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter, DollarSign, TrendingUp, TrendingDown } from "lucide-react";

interface Transaction {
  id: number;
  user_id: number;
  user_name: string;
  amount: number;
  type: 'credit' | 'debit' | 'payment' | 'refund';
  description: string;
  created_at: string;
  status: 'completed' | 'pending' | 'failed';
}

export const AdminTransactions = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [filterStatus, setFilterStatus] = useState("all");

  useEffect(() => {
    loadTransactions();
  }, []);

  const loadTransactions = async () => {
    try {
      setLoading(true);
      // Placeholder data - replace with actual API call
      const mockTransactions: Transaction[] = [
        {
          id: 1,
          user_id: 1,
          user_name: "أحمد محمد",
          amount: 25.00,
          type: "payment",
          description: "شحن رصيد عبر Stripe",
          created_at: "2024-01-15 14:30:00",
          status: "completed"
        },
        {
          id: 2,
          user_id: 2,
          user_name: "فاطمة علي",
          amount: -2.50,
          type: "debit",
          description: "استخدام GPT-4o - محادثة",
          created_at: "2024-01-15 13:45:00",
          status: "completed"
        },
        {
          id: 3,
          user_id: 1,
          user_name: "أحمد محمد",
          amount: -0.15,
          type: "debit",
          description: "استخدام GPT-3.5 - محادثة",
          created_at: "2024-01-15 12:20:00",
          status: "completed"
        },
        {
          id: 4,
          user_id: 3,
          user_name: "محمد حسن",
          amount: 10.00,
          type: "payment",
          description: "شحن رصيد عبر PayPal",
          created_at: "2024-01-15 11:15:00",
          status: "pending"
        },
        {
          id: 5,
          user_id: 2,
          user_name: "فاطمة علي",
          amount: 5.00,
          type: "credit",
          description: "رصيد ترحيبي للمستخدم الجديد",
          created_at: "2024-01-14 09:30:00",
          status: "completed"
        }
      ];
      setTransactions(mockTransactions);
    } catch (error) {
      console.error('Error loading transactions:', error);
    } finally {
      setLoading(false);
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'credit':
      case 'payment':
        return <TrendingUp className="h-4 w-4 text-green-400" />;
      case 'debit':
        return <TrendingDown className="h-4 w-4 text-red-400" />;
      case 'refund':
        return <DollarSign className="h-4 w-4 text-blue-400" />;
      default:
        return <DollarSign className="h-4 w-4 text-gray-400" />;
    }
  };

  const getTypeBadge = (type: string) => {
    const typeConfig = {
      credit: { label: "إيداع", variant: "default" as const },
      debit: { label: "خصم", variant: "destructive" as const },
      payment: { label: "دفع", variant: "default" as const },
      refund: { label: "استرداد", variant: "secondary" as const }
    };
    
    const config = typeConfig[type as keyof typeof typeConfig] || typeConfig.credit;
    return <Badge variant={config.variant}>{config.label}</Badge>;
  };

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      completed: { label: "مكتمل", variant: "default" as const },
      pending: { label: "معلق", variant: "secondary" as const },
      failed: { label: "فاشل", variant: "destructive" as const }
    };
    
    const config = statusConfig[status as keyof typeof statusConfig] || statusConfig.completed;
    return <Badge variant={config.variant}>{config.label}</Badge>;
  };

  const filteredTransactions = transactions.filter(transaction => {
    const matchesSearch = 
      transaction.user_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transaction.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesType = filterType === "all" || transaction.type === filterType;
    const matchesStatus = filterStatus === "all" || transaction.status === filterStatus;
    
    return matchesSearch && matchesType && matchesStatus;
  });

  const totalRevenue = transactions
    .filter(t => t.type === 'payment' && t.status === 'completed')
    .reduce((sum, t) => sum + t.amount, 0);

  const totalDebits = Math.abs(transactions
    .filter(t => t.type === 'debit' && t.status === 'completed')
    .reduce((sum, t) => sum + t.amount, 0));

  return (
    <div className="space-y-6">
      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-gradient-to-br from-green-600/20 to-green-700/20 border-green-500/30 backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-200 text-sm font-medium">إجمالي الإيرادات</p>
                <p className="text-2xl font-bold text-white">${totalRevenue.toFixed(2)}</p>
              </div>
              <TrendingUp className="h-8 w-8 text-green-400" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-red-600/20 to-red-700/20 border-red-500/30 backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-red-200 text-sm font-medium">إجمالي الاستهلاك</p>
                <p className="text-2xl font-bold text-white">${totalDebits.toFixed(2)}</p>
              </div>
              <TrendingDown className="h-8 w-8 text-red-400" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-blue-600/20 to-blue-700/20 border-blue-500/30 backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-200 text-sm font-medium">صافي الربح</p>
                <p className="text-2xl font-bold text-white">${(totalRevenue - totalDebits).toFixed(2)}</p>
              </div>
              <DollarSign className="h-8 w-8 text-blue-400" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Transactions Table */}
      <Card className="bg-white/5 border-purple-500/20 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-white">المعاملات المالية</CardTitle>
          <CardDescription className="text-gray-300">
            عرض وإدارة جميع المعاملات المالية في النظام
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute right-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="البحث في المعاملات..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pr-10 bg-slate-800 border-slate-700 text-white"
              />
            </div>
            
            <Select value={filterType} onValueChange={setFilterType}>
              <SelectTrigger className="w-full md:w-48 bg-slate-800 border-slate-700 text-white">
                <SelectValue placeholder="نوع المعاملة" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">جميع الأنواع</SelectItem>
                <SelectItem value="payment">دفع</SelectItem>
                <SelectItem value="credit">إيداع</SelectItem>
                <SelectItem value="debit">خصم</SelectItem>
                <SelectItem value="refund">استرداد</SelectItem>
              </SelectContent>
            </Select>

            <Select value={filterStatus} onValueChange={setFilterStatus}>
              <SelectTrigger className="w-full md:w-48 bg-slate-800 border-slate-700 text-white">
                <SelectValue placeholder="الحالة" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">جميع الحالات</SelectItem>
                <SelectItem value="completed">مكتمل</SelectItem>
                <SelectItem value="pending">معلق</SelectItem>
                <SelectItem value="failed">فاشل</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Table */}
          <div className="rounded-md border border-slate-700 bg-slate-800/50">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-gray-300">المستخدم</TableHead>
                  <TableHead className="text-gray-300">المبلغ</TableHead>
                  <TableHead className="text-gray-300">النوع</TableHead>
                  <TableHead className="text-gray-300">الوصف</TableHead>
                  <TableHead className="text-gray-300">الحالة</TableHead>
                  <TableHead className="text-gray-300">التاريخ</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {loading ? (
                  <TableRow>
                    <TableCell colSpan={6} className="text-center text-gray-400">
                      جاري التحميل...
                    </TableCell>
                  </TableRow>
                ) : filteredTransactions.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={6} className="text-center text-gray-400">
                      لا توجد معاملات
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredTransactions.map((transaction) => (
                    <TableRow key={transaction.id}>
                      <TableCell className="text-white font-medium">
                        {transaction.user_name}
                      </TableCell>
                      <TableCell className={`font-medium ${transaction.amount >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                        <div className="flex items-center space-x-reverse space-x-2">
                          {getTypeIcon(transaction.type)}
                          <span>${Math.abs(transaction.amount).toFixed(2)}</span>
                        </div>
                      </TableCell>
                      <TableCell>{getTypeBadge(transaction.type)}</TableCell>
                      <TableCell className="text-gray-300 max-w-xs truncate">
                        {transaction.description}
                      </TableCell>
                      <TableCell>{getStatusBadge(transaction.status)}</TableCell>
                      <TableCell className="text-gray-300">
                        {new Date(transaction.created_at).toLocaleString('ar')}
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
