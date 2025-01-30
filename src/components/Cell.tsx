import type { CellValue } from '../types';
import './Cell.css';

interface CellProps {
  value: CellValue;
  onClick: () => void;
  isWinning: boolean;
  disabled: boolean;
}

function Cell({ value, onClick, isWinning, disabled }: CellProps) {
  return (
    <button
      className={`cell${isWinning ? ' cell--winning' : ''}${value ? ` cell--${value}` : ''}`}
      onClick={onClick}
      disabled={disabled}
    >
      {value}
    </button>
  );
}

export default Cell;
