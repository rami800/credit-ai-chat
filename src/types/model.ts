
export interface Model {
  id: number;
  name: string;
  description: string;
  price_per_token: number;
  status: 'active' | 'inactive';
  created_at: string;
}

export type ModelStatus = 'active' | 'inactive';

export interface ModelFormData {
  name: string;
  description: string;
  price_per_token: number;
  status: ModelStatus;
}
