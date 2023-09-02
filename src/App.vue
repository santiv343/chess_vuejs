<script lang="ts" setup>
// import { ref } from "vue";
import ChessPiece from "./components/ChessPiece.vue";

const rows = [1, 2, 3, 4, 5, 6, 7, 8];
const cols = ["A", "B", "C", "D", "E", "F", "G", "H"];

const boardCoords = rows.map((row) => cols.map((col) => `${col}${row}`));

type ChessPiece = {
  name: string;
  color: "white" | "black";
  imageSrc: string;
};

type Chessboard = Record<string, ChessPiece>;

const chessboard: Chessboard = {
  A8: { name: "rook", color: "black", imageSrc: "svg/BlackRook.svg" },
  B8: { name: "knight", color: "black", imageSrc: "svg/BlackKnight.svg" },
  C8: { name: "bishop", color: "black", imageSrc: "svg/BlackBishop.svg" },
  D8: { name: "queen", color: "black", imageSrc: "svg/BlackQueen.svg" },
  E8: { name: "king", color: "black", imageSrc: "svg/BlackKing.svg" },
  F8: { name: "bishop", color: "black", imageSrc: "svg/BlackBishop.svg" },
  G8: { name: "knight", color: "black", imageSrc: "svg/BlackKnight.svg" },
  H8: { name: "rook", color: "black", imageSrc: "svg/BlackRook.svg" },
  A7: { name: "pawn", color: "black", imageSrc: "svg/BlackPawn.svg" },
  B7: { name: "pawn", color: "black", imageSrc: "svg/BlackPawn.svg" },
  C7: { name: "pawn", color: "black", imageSrc: "svg/BlackPawn.svg" },
  D7: { name: "pawn", color: "black", imageSrc: "svg/BlackPawn.svg" },
  E7: { name: "pawn", color: "black", imageSrc: "svg/BlackPawn.svg" },
  F7: { name: "pawn", color: "black", imageSrc: "svg/BlackPawn.svg" },
  G7: { name: "pawn", color: "black", imageSrc: "svg/BlackPawn.svg" },
  H7: { name: "pawn", color: "black", imageSrc: "svg/BlackPawn.svg" },
  A2: { name: "pawn", color: "white", imageSrc: "svg/WhitePawn.svg" },
  B2: { name: "pawn", color: "white", imageSrc: "svg/WhitePawn.svg" },
  C2: { name: "pawn", color: "white", imageSrc: "svg/WhitePawn.svg" },
  D2: { name: "pawn", color: "white", imageSrc: "svg/WhitePawn.svg" },
  E2: { name: "pawn", color: "white", imageSrc: "svg/WhitePawn.svg" },
  F2: { name: "pawn", color: "white", imageSrc: "svg/WhitePawn.svg" },
  G2: { name: "pawn", color: "white", imageSrc: "svg/WhitePawn.svg" },
  H2: { name: "pawn", color: "white", imageSrc: "svg/WhitePawn.svg" },
  A1: { name: "rook", color: "white", imageSrc: "svg/WhiteRook.svg" },
  B1: { name: "knight", color: "white", imageSrc: "svg/WhiteKnight.svg" },
  C1: { name: "bishop", color: "white", imageSrc: "svg/WhiteBishop.svg" },
  D1: { name: "queen", color: "white", imageSrc: "svg/WhiteQueen.svg" },
  E1: { name: "king", color: "white", imageSrc: "svg/WhiteKing.svg" },
  F1: { name: "bishop", color: "white", imageSrc: "svg/WhiteBishop.svg" },
  G1: { name: "knight", color: "white", imageSrc: "svg/WhiteKnight.svg" },
  H1: { name: "rook", color: "white", imageSrc: "svg/WhiteRook.svg" },
};
</script>

<template>
  <main class="flex flex-col justify-center items-center w-screen h-screen">
    <h2 class="text-2xl text-white my-8">Chess with VueJS</h2>
    <div
      class="flex relative justify-center items-center p-4 md:p-8 md:w-[80vh] md:h-[80vh] bg-neutral-900"
    >
      <!-- Guide marks -->
      <div
        class="absolute flex flex-col h-full text-white py-2 md:py-8 justify-around left-1 md:left-3"
      >
        <p class="text-[0.5rem] md:text-base" v-for="n in rows">{{ n }}</p>
      </div>
      <div
        class="absolute flex flex-col h-full text-white py-2 md:py-8 justify-around right-1 md:right-3"
      >
        <p class="text-[0.5rem] md:text-base" v-for="n in rows">{{ n }}</p>
      </div>
      <div
        class="absolute flex flex-row w-full text-white px-2 md:px-8 justify-around top-1"
      >
        <p class="text-[0.5rem] md:text-base" v-for="n in cols">{{ n }}</p>
      </div>
      <div
        class="absolute flex flex-row w-full text-white px-2 md:px-8 justify-around bottom-1"
      >
        <p class="text-[0.5rem] md:text-base" v-for="n in cols">{{ n }}</p>
      </div>
      <!-- Chessboard -->
      <div
        class="grid w-full h-full grid-cols-[repeat(8,1fr)] grid-rows-[repeat(8,1fr)] items-center justify-center border-neutral-50 border"
      >
        <div
          v-for="boardCoord in boardCoords.flat()"
          :key="boardCoord"
          class="chess-board h-full w-full"
        >
          <ChessPiece
            v-if="chessboard.hasOwnProperty(boardCoord)"
            :image-src="chessboard[boardCoord].imageSrc"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.chess-board {
  @apply bg-amber-400;
}
.chess-board:nth-child(-n + 8):nth-child(even),
.chess-board:nth-child(n + 8):nth-child(-n + 16):nth-child(odd),
.chess-board:nth-child(n + 17):nth-child(-n + 24):nth-child(even),
.chess-board:nth-child(n + 25):nth-child(-n + 32):nth-child(odd),
.chess-board:nth-child(n + 33):nth-child(-n + 40):nth-child(even),
.chess-board:nth-child(n + 41):nth-child(-n + 48):nth-child(odd),
.chess-board:nth-child(n + 49):nth-child(-n + 56):nth-child(even),
.chess-board:nth-child(n + 57):nth-child(-n + 64):nth-child(odd) {
  @apply bg-amber-900;
}
</style>
