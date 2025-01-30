export type CellValue = 'X' | 'O' | null;

export type GameStatus = 'playing' | 'won' | 'draw';

export type WinningLine = number[];

export interface WinResult {
  winner: CellValue;
  line: WinningLine;
}
