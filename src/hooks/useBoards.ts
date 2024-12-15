import { useState } from 'react';
import { Board, Column } from '../types/board';

const DEFAULT_COLUMNS: Column[] = [
  { id: 'todo', name: 'To Do', order: 0 },
  { id: 'in_progress', name: 'In Progress', order: 1 },
  { id: 'completed', name: 'Completed', order: 2 }
];

export function useBoards() {
  const [boards, setBoards] = useState<Board[]>([
    {
      id: 'default',
      name: 'Main Board',
      description: 'Default task board',
      createdAt: new Date().toISOString(),
      columns: DEFAULT_COLUMNS
    }
  ]);
  const [activeBoard, setActiveBoard] = useState<string>('default');

  const addBoard = (name: string, description?: string) => {
    const newBoard: Board = {
      id: `board-${Date.now()}`,
      name,
      description,
      createdAt: new Date().toISOString(),
      columns: DEFAULT_COLUMNS
    };
    setBoards(prev => [...prev, newBoard]);
    return newBoard.id;
  };

  const updateBoard = (boardId: string, updates: Partial<Board>) => {
    setBoards(prev =>
      prev.map(board =>
        board.id === boardId ? { ...board, ...updates } : board
      )
    );
  };

  const deleteBoard = (boardId: string) => {
    setBoards(prev => prev.filter(board => board.id !== boardId));
    if (activeBoard === boardId) {
      setActiveBoard(prev => {
        const remaining = boards.filter(b => b.id !== boardId);
        return remaining[0]?.id || '';
      });
    }
  };

  const addColumn = (boardId: string, name: string) => {
    setBoards(prev =>
      prev.map(board => {
        if (board.id !== boardId) return board;
        const newColumn: Column = {
          id: `col-${Date.now()}`,
          name,
          order: board.columns.length
        };
        return {
          ...board,
          columns: [...board.columns, newColumn]
        };
      })
    );
  };

  const updateColumn = (boardId: string, columnId: string, updates: Partial<Column>) => {
    setBoards(prev =>
      prev.map(board => {
        if (board.id !== boardId) return board;
        return {
          ...board,
          columns: board.columns.map(col =>
            col.id === columnId ? { ...col, ...updates } : col
          )
        };
      })
    );
  };

  const deleteColumn = (boardId: string, columnId: string) => {
    setBoards(prev =>
      prev.map(board => {
        if (board.id !== boardId) return board;
        return {
          ...board,
          columns: board.columns.filter(col => col.id !== columnId)
        };
      })
    );
  };

  return {
    boards,
    activeBoard,
    setActiveBoard,
    addBoard,
    updateBoard,
    deleteBoard,
    addColumn,
    updateColumn,
    deleteColumn,
    getBoard: (id: string) => boards.find(b => b.id === id)
  };
}