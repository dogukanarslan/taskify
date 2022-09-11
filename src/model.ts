export interface ITodo {
  id: number;
  todo: string;
  isDone: boolean;
  priority: 'high' | 'medium' | 'low';
}

export interface IToast {
  id: number;
  header: string;
  body: string;
  type?: 'success' | 'danger' | 'warning';
}
