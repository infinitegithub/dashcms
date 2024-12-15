import React from 'react';
import { TaskCard } from './TaskCard';
import { Task } from '../../types/task';

interface TaskColumnProps {
  title: string;
  tasks: Task[];
  status: Task['status'];
  onDrop: (taskId: string, newStatus: Task['status']) => void;
  onEditTask?: (task: Task) => void;
}

export function TaskColumn({ title, tasks, status, onDrop, onEditTask }: TaskColumnProps) {
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const taskId = e.dataTransfer.getData('taskId');
    onDrop(taskId, status);
  };

  return (
    <div
      className="bg-gray-800/50 rounded-lg border border-gray-700/50 p-4"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <h3 className="text-sm font-medium text-gray-300 mb-4">{title}</h3>
      <div className="space-y-3">
        {tasks.map(task => (
          <TaskCard 
            key={task.id} 
            task={task} 
            onEdit={onEditTask}
          />
        ))}
      </div>
    </div>
  );
}