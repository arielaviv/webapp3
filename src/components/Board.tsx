import type { CellValue, WinningLine } from '../types';
import Cell from './Cell';
import './Board.css';

interface BoardProps {
  board: CellValue[];
  winningLine: WinningLine | null;
  gameOver: boolean;
  onCellClick: (index: number) => void;
}

function Board({ board, winningLine, gameOver, onCellClick }: BoardProps) {
  return (
    <div className="board">
      {board.map((value, index) => (
        <Cell
          key={index}
          value={value}
          onClick={() => onCellClick(index)}
          isWinning={winningLine !== null && winningLine.includes(index)}
          disabled={value !== null || gameOver}
        />
      ))}
    </div>
  );
}

export default Board;
