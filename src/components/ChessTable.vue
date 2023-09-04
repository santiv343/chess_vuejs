<script lang="ts" setup>
import { ref } from "vue";
import ChessPiece from "./ChessPiece.vue";
import {
  boardCols,
  // boardCoords,
  boardRows,
  chessPieces,
  ChessPieceType,
} from "../utils/constants.ts";
// import { movePiece, getPossibleMovements } from "../utils/handlers.ts";

const activePiece = ref<ChessPieceType | null>(null);
// const possibleMovements = ref<string[]>(["A6"]);
const board = ref(chessPieces);

// movePiece(board.value, "A6", "B6");

function handleActivePiece(piece: ChessPieceType) {
  activePiece.value = piece;
  console.log(activePiece.value);
  // possibleMovements.value = ["A6", "A5"];
  // getPossibleMovements(board.value, "", position);
}
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
        <p class="text-[0.5rem] md:text-base" v-for="n in boardRows">{{ n }}</p>
      </div>
      <div
        class="absolute flex flex-col h-full text-white py-2 md:py-8 justify-around right-1 md:right-3"
      >
        <p class="text-[0.5rem] md:text-base" v-for="n in boardRows">{{ n }}</p>
      </div>
      <div
        class="absolute flex flex-row w-full text-white px-2 md:px-8 justify-around top-1"
      >
        <p class="text-[0.5rem] md:text-base" v-for="n in boardCols">{{ n }}</p>
      </div>
      <div
        class="absolute flex flex-row w-full text-white px-2 md:px-8 justify-around bottom-1"
      >
        <p class="text-[0.5rem] md:text-base" v-for="n in boardCols">{{ n }}</p>
      </div>
      <!-- Chessboard -->
      <div
        class="grid w-full h-full grid-cols-[repeat(8,1fr)] grid-rows-[repeat(8,1fr)] items-center justify-center border-neutral-50 border"
      >
        <div v-for="piece in board.flat()" :class="`chess-board h-full w-full`">
          <ChessPiece
            @handle-active-piece="handleActivePiece"
            :piece="piece"
            :isActive="activePiece?.uuid === piece.uuid"
            v-if="piece"
          />

          <!-- <div
            v-else-if="possibleMovements.includes(piece)"
            class="flex w-full h-full justify-center items-center"
          >
            T
          </div> -->
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
