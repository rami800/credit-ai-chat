
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ModelFormData, ModelStatus } from "@/types/model";

interface ModelFormProps {
  formData: ModelFormData;
  setFormData: (data: ModelFormData) => void;
  onSubmit: (e: React.FormEvent) => void;
  isEditing: boolean;
}

export const ModelForm = ({ formData, setFormData, onSubmit, isEditing }: ModelFormProps) => {
  return (
    <form onSubmit={onSubmit} className="space-y-4">
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
        {isEditing ? "تحديث النموذج" : "إضافة النموذج"}
      </Button>
    </form>
  );
};
