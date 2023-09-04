import { ChessPieceType, boardCols } from "./constants";

export function getIndexes(position: string) {
  const pattern = /^[A-Z][0-9]$/;

  if (!pattern.test(position)) {
    throw new Error("Invalid pattern = " + position);
  }

  return {
    row: Number(position[1]) - 1,
    col: boardCols.findIndex((value) => value === position[0]),
  };
}

export function movePiece(board: string[][], from: string, to: string) {
  const fromIndexes = getIndexes(from);
  const toIndexes = getIndexes(to);

  console.log(fromIndexes, toIndexes, board);
}

export function getPossibleMovements(
  board: string[][],
  piece: ChessPieceType,
  position: string
) {
  console.log({ board, piece, position });
  const { row, col } = getIndexes(position);

  console.log({ row, col });
}
