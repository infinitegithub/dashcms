import React from 'react';
import { TaskColumn } from './TaskColumn';
import { useTasks } from '../../hooks/useTasks';
import { Task } from '../../types/task';

interface TaskBoardProps {
  boardId: string;
  onEditTask?: (task: Task) => void;
}

export function TaskBoard({ boardId, onEditTask }: TaskBoardProps) {
  const { tasks, moveTask } = useTasks();

  const columns = {
    todo: tasks.filter(task => task.status === 'todo'),
    in_progress: tasks.filter(task => task.status === 'in_progress'),
    completed: tasks.filter(task => task.status === 'completed')
  };

  return (
    <div className="grid grid-cols-3 gap-4">
      <TaskColumn
        title="To Do"
        tasks={columns.todo}
        status="todo"
        onDrop={moveTask}
        onEditTask={onEditTask}
      />
      <TaskColumn
        title="In Progress"
        tasks={columns.in_progress}
        status="in_progress"
        onDrop={moveTask}
        onEditTask={onEditTask}
      />
      <TaskColumn
        title="Completed"
        tasks={columns.completed}
        status="completed"
        onDrop={moveTask}
        onEditTask={onEditTask}
      />
    </div>
  );
}