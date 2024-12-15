import { useState, useCallback } from 'react';
import { Task } from '../types/task';
import { MOCK_TASKS } from '../data/mockTasks';

export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>(MOCK_TASKS);

  const moveTask = useCallback((taskId: string, newStatus: Task['status']) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
  }, []);

  const updateTask = useCallback((taskId: string, updates: Partial<Task>) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === taskId ? { ...task, ...updates } : task
      )
    );
  }, []);

  const addTask = useCallback((task: Omit<Task, 'id'>) => {
    const newTask = {
      ...task,
      id: `task-${Date.now()}`
    };
    setTasks(prevTasks => [...prevTasks, newTask]);
    return newTask.id;
  }, []);

  const deleteTask = useCallback((taskId: string) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
  }, []);

  return {
    tasks,
    moveTask,
    updateTask,
    addTask,
    deleteTask
  };
}