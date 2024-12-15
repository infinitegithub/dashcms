import { Task } from '../types/task';

export const MOCK_TASKS: Task[] = [
  {
    id: 'task-1',
    title: 'Follow up with potential buyer',
    description: 'Contact John regarding the Tesla Model 3 test drive',
    status: 'todo',
    priority: 'high',
    assignedTo: 'Sarah Wilson',
    dueDate: '2024-03-25T00:00:00Z',
    createdAt: '2024-03-20T10:30:00Z',
    category: 'follow_up',
    labels: ['urgent', 'sales'],
    checklist: [
      { id: 'check-1', text: 'Review customer profile', completed: true },
      { id: 'check-2', text: 'Prepare vehicle documentation', completed: false },
      { id: 'check-3', text: 'Schedule test drive', completed: false }
    ],
    comments: [
      {
        id: 'comment-1',
        userId: 'user-1',
        content: 'Customer prefers evening appointments',
        createdAt: '2024-03-20T11:00:00Z'
      }
    ],
    attachments: [],
    dependencies: [],
    automationRules: [
      {
        id: 'rule-1',
        trigger: 'status_change',
        condition: {
          field: 'status',
          operator: 'equals',
          value: 'completed'
        },
        action: {
          type: 'send_notification',
          value: 'sales_manager'
        }
      }
    ]
  },
  {
    id: 'task-2',
    title: 'Prepare vehicle inspection report',
    description: 'Complete inspection for incoming Honda Civic',
    status: 'in_progress',
    priority: 'medium',
    assignedTo: 'Mike Johnson',
    dueDate: '2024-03-24T00:00:00Z',
    createdAt: '2024-03-20T09:00:00Z',
    category: 'documentation',
    labels: ['inspection', 'inventory'],
    checklist: [
      { id: 'check-4', text: 'Exterior inspection', completed: true },
      { id: 'check-5', text: 'Interior inspection', completed: true },
      { id: 'check-6', text: 'Mechanical inspection', completed: false },
      { id: 'check-7', text: 'Take photos', completed: false }
    ],
    comments: [],
    attachments: [],
    dependencies: [],
    automationRules: []
  }
];