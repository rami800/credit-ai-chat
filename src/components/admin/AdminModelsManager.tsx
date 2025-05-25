
import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plus, Edit, Trash2, Brain, DollarSign } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Model {
  id: number;
  name: string;
  description: string;
  price_per_token: number;
  status: 'active' | 'inactive';
  created_at: string;
}

type ModelStatus = 'active' | 'inactive';

export const AdminModelsManager = () => {
  const [models, setModels] = useState<Model[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingModel, setEditingModel] = useState<Model | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price_per_token: 0,
    status: "active" as ModelStatus
  });

  useEffect(() => {
    loadModels();
  }, []);

  const loadModels = async () => {
    try {
      setLoading(true);
      // Placeholder data - replace with actual API call
      const mockModels: Model[] = [
        {
          id: 1,
          name: "GPT-4o",
          description: "النموذج الأكثر تطوراً للمحادثات والتفكير المعقد",
          price_per_token: 0.03,
          status: "active",
          created_at: "2024-01-15"
        },
        {
          id: 2,
          name: "GPT-3.5",
          description: "نموذج سريع واقتصادي للمهام العامة",
          price_per_token: 0.002,
          status: "active",
          created_at: "2024-01-14"
        },
        {
          id: 3,
          name: "DALL·E 3",
          description: "نموذج توليد الصور المتقدم",
          price_per_token: 0.08,
          status: "active",
          created_at: "2024-01-13"
        },
        {
          id: 4,
          name: "Claude-2",
          description: "نموذج ذكي للتحليل والكتابة",
          price_per_token: 0.025,
          status: "inactive",
          created_at: "2024-01-12"
        }
      ];
      setModels(mockModels);
    } catch (error) {
      toast({
        title: "خطأ",
        description: "فشل في تحميل بيانات النماذج",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editingModel) {
        // Update existing model
        const updatedModels = models.map(model =>
          model.id === editingModel.id
            ? { ...model, ...formData }
            : model
        );
        setModels(updatedModels);
        toast({
          title: "تم التحديث",
          description: "تم تحديث بيانات النموذج بنجاح"
        });
      } else {
        // Add new model
        const newModel: Model = {
          id: Date.now(),
          ...formData,
          created_at: new Date().toISOString().split('T')[0]
        };
        setModels([newModel, ...models]);
        toast({
          title: "تم الإضافة",
          description: "تم إضافة النموذج الجديد بنجاح"
        });
      }
      
      setIsDialogOpen(false);
      resetForm();
    } catch (error) {
      toast({
        title: "خطأ",
        description: "فشل في حفظ البيانات",
        variant: "destructive"
      });
    }
  };

  const handleEdit = (model: Model) => {
    setEditingModel(model);
    setFormData({
      name: model.name,
      description: model.description,
      price_per_token: model.price_per_token,
      status: model.status
    });
    setIsDialogOpen(true);
  };

  const handleDelete = async (modelId: number) => {
    if (window.confirm("هل أنت متأكد من حذف هذا النموذج؟")) {
      try {
        setModels(models.filter(model => model.id !== modelId));
        toast({
          title: "تم الحذف",
          description: "تم حذف النموذج بنجاح"
        });
      } catch (error) {
        toast({
          title: "خطأ",
          description: "فشل في حذف النموذج",
          variant: "destructive"
        });
      }
    }
  };

  const resetForm = () => {
    setFormData({
      name: "",
      description: "",
      price_per_token: 0,
      status: "active" as ModelStatus
    });
    setEditingModel(null);
  };

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      active: { label: "نشط", variant: "default" as const },
      inactive: { label: "غير نشط", variant: "secondary" as const }
    };
    
    const config = statusConfig[status as keyof typeof statusConfig] || statusConfig.active;
    return <Badge variant={config.variant}>{config.label}</Badge>;
  };

  return (
    <Card className="bg-white/5 border-purple-500/20 backdrop-blur-sm">
      <CardHeader>
        <div className="flex justify-between items-center">
          <div>
            <CardTitle className="text-white">إدارة النماذج والتسعير</CardTitle>
            <CardDescription className="text-gray-300">
              إدارة نماذج الذكاء الاصطناعي وأسعارها
            </CardDescription>
          </div>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button 
                className="bg-purple-600 hover:bg-purple-700"
                onClick={() => {
                  resetForm();
                  setIsDialogOpen(true);
                }}
              >
                <Plus className="ml-2 h-4 w-4" />
                إضافة نموذج جديد
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md bg-slate-900 border-purple-500/20 text-white">
              <DialogHeader>
                <DialogTitle>
                  {editingModel ? "تعديل النموذج" : "إضافة نموذج جديد"}
                </DialogTitle>
                <DialogDescription className="text-gray-300">
                  {editingModel ? "تعديل بيانات النموذج الحالي" : "إضافة نموذج ذكاء اصطناعي جديد"}
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">اسم النموذج</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="bg-slate-800 border-slate-700 text-white"
                    placeholder="مثال: GPT-4o"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">الوصف</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                    className="bg-slate-800 border-slate-700 text-white"
                    placeholder="وصف مختصر عن النموذج وإمكانياته"
                    rows={3}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="price">السعر لكل رمز</Label>
                  <Input
                    id="price"
                    type="number"
                    step="0.0001"
                    value={formData.price_per_token}
                    onChange={(e) => setFormData({...formData, price_per_token: parseFloat(e.target.value) || 0})}
                    className="bg-slate-800 border-slate-700 text-white"
                    placeholder="0.03"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="status">الحالة</Label>
                  <Select value={formData.status} onValueChange={(value: ModelStatus) => setFormData({...formData, status: value})}>
                    <SelectTrigger className="bg-slate-800 border-slate-700 text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="active">نشط</SelectItem>
                      <SelectItem value="inactive">غير نشط</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700">
                  {editingModel ? "تحديث النموذج" : "إضافة النموذج"}
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </CardHeader>
      <CardContent>
        {/* Models Table */}
        <div className="rounded-md border border-slate-700 bg-slate-800/50">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-gray-300">اسم النموذج</TableHead>
                <TableHead className="text-gray-300">الوصف</TableHead>
                <TableHead className="text-gray-300">السعر/رمز</TableHead>
                <TableHead className="text-gray-300">الحالة</TableHead>
                <TableHead className="text-gray-300">تاريخ الإضافة</TableHead>
                <TableHead className="text-gray-300">الإجراءات</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {loading ? (
                <TableRow>
                  <TableCell colSpan={6} className="text-center text-gray-400">
                    جاري التحميل...
                  </TableCell>
                </TableRow>
              ) : models.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} className="text-center text-gray-400">
                    لا توجد نماذج
                  </TableCell>
                </TableRow>
              ) : (
                models.map((model) => (
                  <TableRow key={model.id}>
                    <TableCell className="text-white font-medium">
                      <div className="flex items-center space-x-reverse space-x-2">
                        <Brain className="h-4 w-4 text-purple-400" />
                        <span>{model.name}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-gray-300 max-w-xs truncate">
                      {model.description}
                    </TableCell>
                    <TableCell className="text-green-400 font-medium">
                      ${model.price_per_token.toFixed(4)}
                    </TableCell>
                    <TableCell>{getStatusBadge(model.status)}</TableCell>
                    <TableCell className="text-gray-300">{model.created_at}</TableCell>
                    <TableCell>
                      <div className="flex space-x-reverse space-x-2">
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => handleEdit(model)}
                          className="text-blue-400 hover:text-blue-300"
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => handleDelete(model.id)}
                          className="text-red-400 hover:text-red-300"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};
