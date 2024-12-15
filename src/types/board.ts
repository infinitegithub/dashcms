export interface Board {
  id: string;
  name: string;
  description?: string;
  createdAt: string;
  columns: Column[];
}

export interface Column {
  id: string;
  name: string;
  order: number;
}

export type BoardWithTasks = Board & {
  tasks: Record<string, Task[]>;
};