import React from 'react';
import { Calendar, Clock } from 'lucide-react';
import { Task } from '../../types/task';

interface TaskCardProps {
  task: Task;
  onEdit?: (task: Task) => void;
}

export function TaskCard({ task, onEdit }: TaskCardProps) {
  const handleDragStart = (e: React.DragEvent) => {
    e.dataTransfer.setData('taskId', task.id);
  };

  return (
    <div
      draggable
      className="bg-gray-700/50 rounded border border-gray-600/50 p-3 cursor-move"
      onClick={() => onEdit?.(task)}
      onDragStart={handleDragStart}
    >
      <h4 className="text-sm font-medium text-gray-200 mb-2">{task.title}</h4>
      <p className="text-xs text-gray-400 mb-3">{task.description}</p>
      
      <div className="flex items-center justify-between text-xs text-gray-400">
        <div className="flex items-center gap-2">
          <Calendar className="w-3.5 h-3.5" />
          <span>{new Date(task.dueDate).toLocaleDateString()}</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="w-3.5 h-3.5" />
          <span>{task.assignedTo}</span>
        </div>
      </div>
    </div>
  );
}