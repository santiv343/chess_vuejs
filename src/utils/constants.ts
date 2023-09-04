export const boardRows = [1, 2, 3, 4, 5, 6, 7, 8];
export const boardCols = ["A", "B", "C", "D", "E", "F", "G", "H"];

export const boardCoords = boardRows.map((row) =>
  boardCols.map((col) => `${col}${row}`)
);

export const boardCells = boardCoords.flat();

export type ChessPieceType = {
  uuid: string;
  name: string;
  color: "black" | "white";
  imageSrc: string;
};

export type ChessBoardType = ChessPieceType[][];

// Function to generate UUIDs
function generateUUID(): string {
  return crypto.randomUUID();
}

// Create the chessboard with UUIDs
export const chessPieces: ChessBoardType = [
  [
    {
      uuid: generateUUID(),
      name: "rook",
      color: "black",
      imageSrc: "svg/BlackRook.svg",
    },
    {
      uuid: generateUUID(),
      name: "knight",
      color: "black",
      imageSrc: "svg/BlackKnight.svg",
    },
    {
      uuid: generateUUID(),
      name: "bishop",
      color: "black",
      imageSrc: "svg/BlackBishop.svg",
    },
    {
      uuid: generateUUID(),
      name: "queen",
      color: "black",
      imageSrc: "svg/BlackQueen.svg",
    },
    {
      uuid: generateUUID(),
      name: "king",
      color: "black",
      imageSrc: "svg/BlackKing.svg",
    },
    {
      uuid: generateUUID(),
      name: "bishop",
      color: "black",
      imageSrc: "svg/BlackBishop.svg",
    },
    {
      uuid: generateUUID(),
      name: "knight",
      color: "black",
      imageSrc: "svg/BlackKnight.svg",
    },
    {
      uuid: generateUUID(),
      name: "rook",
      color: "black",
      imageSrc: "svg/BlackRook.svg",
    },
  ],
  [
    {
      uuid: generateUUID(),
      name: "pawn",
      color: "black",
      imageSrc: "svg/BlackPawn.svg",
    },
    {
      uuid: generateUUID(),
      name: "pawn",
      color: "black",
      imageSrc: "svg/BlackPawn.svg",
    },
    {
      uuid: generateUUID(),
      name: "pawn",
      color: "black",
      imageSrc: "svg/BlackPawn.svg",
    },
    {
      uuid: generateUUID(),
      name: "pawn",
      color: "black",
      imageSrc: "svg/BlackPawn.svg",
    },
    {
      uuid: generateUUID(),
      name: "pawn",
      color: "black",
      imageSrc: "svg/BlackPawn.svg",
    },
    {
      uuid: generateUUID(),
      name: "pawn",
      color: "black",
      imageSrc: "svg/BlackPawn.svg",
    },
    {
      uuid: generateUUID(),
      name: "pawn",
      color: "black",
      imageSrc: "svg/BlackPawn.svg",
    },
    {
      uuid: generateUUID(),
      name: "pawn",
      color: "black",
      imageSrc: "svg/BlackPawn.svg",
    },
  ],

  Array(8).fill(null),
  Array(8).fill(null),
  Array(8).fill(null),
  Array(8).fill(null),
  [
    {
      uuid: generateUUID(),
      name: "pawn",
      color: "white",
      imageSrc: "svg/WhitePawn.svg",
    },
    {
      uuid: generateUUID(),
      name: "pawn",
      color: "white",
      imageSrc: "svg/WhitePawn.svg",
    },
    {
      uuid: generateUUID(),
      name: "pawn",
      color: "white",
      imageSrc: "svg/WhitePawn.svg",
    },
    {
      uuid: generateUUID(),
      name: "pawn",
      color: "white",
      imageSrc: "svg/WhitePawn.svg",
    },
    {
      uuid: generateUUID(),
      name: "pawn",
      color: "white",
      imageSrc: "svg/WhitePawn.svg",
    },
    {
      uuid: generateUUID(),
      name: "pawn",
      color: "white",
      imageSrc: "svg/WhitePawn.svg",
    },
    {
      uuid: generateUUID(),
      name: "pawn",
      color: "white",
      imageSrc: "svg/WhitePawn.svg",
    },
    {
      uuid: generateUUID(),
      name: "pawn",
      color: "white",
      imageSrc: "svg/WhitePawn.svg",
    },
  ],
  [
    {
      uuid: generateUUID(),
      name: "rook",
      color: "white",
      imageSrc: "svg/WhiteRook.svg",
    },
    {
      uuid: generateUUID(),
      name: "knight",
      color: "white",
      imageSrc: "svg/WhiteKnight.svg",
    },
    {
      uuid: generateUUID(),
      name: "bishop",
      color: "white",
      imageSrc: "svg/WhiteBishop.svg",
    },
    {
      uuid: generateUUID(),
      name: "queen",
      color: "white",
      imageSrc: "svg/WhiteQueen.svg",
    },
    {
      uuid: generateUUID(),
      name: "king",
      color: "white",
      imageSrc: "svg/WhiteKing.svg",
    },
    {
      uuid: generateUUID(),
      name: "bishop",
      color: "white",
      imageSrc: "svg/WhiteBishop.svg",
    },
    {
      uuid: generateUUID(),
      name: "knight",
      color: "white",
      imageSrc: "svg/WhiteKnight.svg",
    },
    {
      uuid: generateUUID(),
      name: "rook",
      color: "white",
      imageSrc: "svg/WhiteRook.svg",
    },
  ],
];
