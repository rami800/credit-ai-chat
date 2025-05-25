
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Brain, Edit, Trash2 } from "lucide-react";
import { Model } from "@/types/model";

interface ModelsTableProps {
  models: Model[];
  loading: boolean;
  onEdit: (model: Model) => void;
  onDelete: (modelId: number) => void;
}

export const ModelsTable = ({ models, loading, onEdit, onDelete }: ModelsTableProps) => {
  const getStatusBadge = (status: string) => {
    const statusConfig = {
      active: { label: "نشط", variant: "default" as const },
      inactive: { label: "غير نشط", variant: "secondary" as const }
    };
    
    const config = statusConfig[status as keyof typeof statusConfig] || statusConfig.active;
    return <Badge variant={config.variant}>{config.label}</Badge>;
  };

  return (
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
                      onClick={() => onEdit(model)}
                      className="text-blue-400 hover:text-blue-300"
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => onDelete(model.id)}
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
  );
};
