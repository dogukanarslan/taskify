export interface ITodo {
  id: number;
  todo: string;
  isDone: boolean;
  priority: 'high' | 'medium' | 'low';
}
