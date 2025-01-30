import { useState } from 'react';
import type { CellValue, GameStatus, WinningLine } from './types';
import { checkWinner, checkDraw } from './utils/gameLogic';
import Board from './components/Board';
import Status from './components/Status';
import './App.css';

const INITIAL_BOARD: CellValue[] = Array(9).fill(null);

function App() {
  const [board, setBoard] = useState<CellValue[]>(INITIAL_BOARD);
  const [isXTurn, setIsXTurn] = useState(true);
  const [gameStatus, setGameStatus] = useState<GameStatus>('playing');
  const [winningLine, setWinningLine] = useState<WinningLine | null>(null);
  const [winner, setWinner] = useState<CellValue>(null);

  function handleCellClick(index: number) {
    if (board[index] || gameStatus !== 'playing') return;

    const newBoard = [...board];
    newBoard[index] = isXTurn ? 'X' : 'O';
    setBoard(newBoard);

    const winResult = checkWinner(newBoard);
    if (winResult) {
      setGameStatus('won');
      setWinner(winResult.winner);
      setWinningLine(winResult.line);
    } else if (checkDraw(newBoard)) {
      setGameStatus('draw');
    } else {
      setIsXTurn(!isXTurn);
    }
  }

  function handleRestart() {
    setBoard(INITIAL_BOARD);
    setIsXTurn(true);
    setGameStatus('playing');
    setWinningLine(null);
    setWinner(null);
  }

  return (
    <div className="app">
      <h1 className="title">Tic-Tac-Toe</h1>
      <Status
        status={gameStatus}
        winner={winner}
        currentPlayer={isXTurn ? 'X' : 'O'}
      />
      <Board
        board={board}
        winningLine={winningLine}
        gameOver={gameStatus !== 'playing'}
        onCellClick={handleCellClick}
      />
      <button className="restart-btn" onClick={handleRestart}>
        Restart
      </button>
    </div>
  );
}

export default App;
