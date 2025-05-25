
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import { useModels } from "@/hooks/useModels";
import { ModelForm } from "./ModelForm";
import { ModelsTable } from "./ModelsTable";
import { Model, ModelFormData, ModelStatus } from "@/types/model";

export const AdminModelsManager = () => {
  const { models, loading, addModel, updateModel, deleteModel } = useModels();
  const [editingModel, setEditingModel] = useState<Model | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const [formData, setFormData] = useState<ModelFormData>({
    name: "",
    description: "",
    price_per_token: 0,
    status: "active" as ModelStatus
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editingModel) {
        updateModel(editingModel.id, formData);
      } else {
        addModel(formData);
      }
      
      setIsDialogOpen(false);
      resetForm();
    } catch (error) {
      console.error('Error saving model:', error);
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

  const resetForm = () => {
    setFormData({
      name: "",
      description: "",
      price_per_token: 0,
      status: "active" as ModelStatus
    });
    setEditingModel(null);
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
              <ModelForm
                formData={formData}
                setFormData={setFormData}
                onSubmit={handleSubmit}
                isEditing={!!editingModel}
              />
            </DialogContent>
          </Dialog>
        </div>
      </CardHeader>
      <CardContent>
        <ModelsTable
          models={models}
          loading={loading}
          onEdit={handleEdit}
          onDelete={deleteModel}
        />
      </CardContent>
    </Card>
  );
};
