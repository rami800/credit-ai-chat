
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { Model, ModelFormData } from "@/types/model";

export const useModels = () => {
  const [models, setModels] = useState<Model[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

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

  const addModel = (formData: ModelFormData) => {
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
  };

  const updateModel = (modelId: number, formData: ModelFormData) => {
    const updatedModels = models.map(model =>
      model.id === modelId
        ? { ...model, ...formData }
        : model
    );
    setModels(updatedModels);
    toast({
      title: "تم التحديث",
      description: "تم تحديث بيانات النموذج بنجاح"
    });
  };

  const deleteModel = async (modelId: number) => {
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

  return {
    models,
    loading,
    addModel,
    updateModel,
    deleteModel
  };
};
