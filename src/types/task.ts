export interface Task {
  id: string;
  title: string;
  description: string;
  status: 'todo' | 'in_progress' | 'completed';
  priority: 'low' | 'medium' | 'high';
  assignedTo: string;
  dueDate: string;
  createdAt: string;
  category: 'sales' | 'follow_up' | 'documentation' | 'other';
  labels: string[];
  checklist: ChecklistItem[];
  comments: Comment[];
  attachments: Attachment[];
  dependencies: string[]; // Task IDs
  template?: boolean;
  automationRules?: AutomationRule[];
}

export interface ChecklistItem {
  id: string;
  text: string;
  completed: boolean;
}

export interface Comment {
  id: string;
  userId: string;
  content: string;
  createdAt: string;
  attachments?: Attachment[];
}

export interface Attachment {
  id: string;
  name: string;
  url: string;
  type: string;
  size: number;
  uploadedAt: string;
}

export interface AutomationRule {
  id: string;
  trigger: 'status_change' | 'due_date' | 'priority_change';
  condition: {
    field: string;
    operator: 'equals' | 'not_equals' | 'contains' | 'greater_than' | 'less_than';
    value: any;
  };
  action: {
    type: 'update_status' | 'assign_user' | 'add_label' | 'send_notification';
    value: any;
  };
}