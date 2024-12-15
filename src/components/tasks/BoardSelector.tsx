import React from 'react';
import { ChevronDown, Plus } from 'lucide-react';
import { Board } from '../../types/board';

interface BoardSelectorProps {
  boards: Board[];
  activeBoard: string;
  onBoardChange: (boardId: string) => void;
  onCreateBoard: () => void;
}

export function BoardSelector({ boards, activeBoard, onBoardChange, onCreateBoard }: BoardSelectorProps) {
  const currentBoard = boards.find(b => b.id === activeBoard);

  return (
    <div className="flex items-center gap-2">
      <div className="relative">
        <button className="flex items-center gap-2 px-2 py-1 text-xs bg-gray-700/50 border border-gray-600/50 rounded text-gray-300 hover:bg-gray-600/50">
          <span>{currentBoard?.name || 'Select Board'}</span>
          <ChevronDown className="w-3 h-3" />
        </button>
        <div className="absolute top-full left-0 mt-1 w-48 bg-gray-800 border border-gray-700 rounded shadow-lg hidden group-hover:block">
          {boards.map(board => (
            <button
              key={board.id}
              onClick={() => onBoardChange(board.id)}
              className="w-full px-3 py-1.5 text-left text-xs text-gray-300 hover:bg-gray-700"
            >
              {board.name}
            </button>
          ))}
        </div>
      </div>
      <button
        onClick={onCreateBoard}
        className="p-1 text-gray-400 hover:text-gray-300"
      >
        <Plus className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}