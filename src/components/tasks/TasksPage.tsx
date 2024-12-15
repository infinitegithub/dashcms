import React, { useState } from 'react';
import { TaskBoard } from './TaskBoard';
import { TaskStats } from './TaskStats';
import { BoardSelector } from './BoardSelector';
import { useBoards } from '../../hooks/useBoards';
import { CreateBoardModal } from './modals/CreateBoardModal';
import { EditTaskModal } from './modals/EditTaskModal';
import { Task } from '../../types/task';

export function TasksPage() {
  const {
    boards,
    activeBoard,
    setActiveBoard,
    addBoard,
    updateBoard,
    deleteBoard
  } = useBoards();

  const [isCreateBoardOpen, setIsCreateBoardOpen] = useState(false);
  const [editingTask, setEditingTask] = useState<Task | null>(null);

  const handleCreateBoard = (name: string, description?: string) => {
    const newBoardId = addBoard(name, description);
    setActiveBoard(newBoardId);
    setIsCreateBoardOpen(false);
  };

  return (
    <main className="flex-1 bg-gray-900 p-6 overflow-auto">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-4">
          <div>
            <h1 className="text-xl font-semibold text-gray-200">Tasks</h1>
            <p className="text-sm text-gray-400">Manage your dealership tasks</p>
          </div>
          <BoardSelector
            boards={boards}
            activeBoard={activeBoard}
            onBoardChange={setActiveBoard}
            onCreateBoard={() => setIsCreateBoardOpen(true)}
          />
        </div>
        <button className="px-3 py-1.5 text-xs bg-gray-700/50 border border-gray-600/50 rounded text-gray-300 hover:bg-gray-600/50">
          + Create Task
        </button>
      </div>
      <TaskStats />
      <TaskBoard
        boardId={activeBoard}
        onEditTask={setEditingTask}
      />

      {isCreateBoardOpen && (
        <CreateBoardModal
          onClose={() => setIsCreateBoardOpen(false)}
          onSubmit={handleCreateBoard}
        />
      )}

      {editingTask && (
        <EditTaskModal
          task={editingTask}
          onClose={() => setEditingTask(null)}
          onSave={(updates) => {
            // Handle task update
            setEditingTask(null);
          }}
        />
      )}
    </main>
  );
}