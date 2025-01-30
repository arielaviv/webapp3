import type { CellValue, GameStatus } from '../types';
import './Status.css';

interface StatusProps {
  status: GameStatus;
  winner: CellValue;
  currentPlayer: 'X' | 'O';
}

function Status({ status, winner, currentPlayer }: StatusProps) {
  let message: string;

  if (status === 'won') {
    message = `Winner: ${winner}`;
  } else if (status === 'draw') {
    message = 'Draw!';
  } else {
    message = `Next turn: ${currentPlayer}`;
  }

  return <div className="status">{message}</div>;
}

export default Status;
