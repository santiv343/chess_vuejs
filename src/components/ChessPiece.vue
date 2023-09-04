<script setup lang="ts">
// import { ref } from "vue";
import { ChessPieceType } from "../utils/constants";

const { piece, isActive } = defineProps<{
  // imageSrc: string;
  piece: ChessPieceType;
  // position: string;
  isActive?: boolean | null;
}>();
const emits = defineEmits<{
  (e: "handleActivePiece", piece: ChessPieceType): void;
}>();

// const isSelected = ref(false);
</script>

<template>
  <div
    @click="emits('handleActivePiece', piece)"
    :class="`flex justify-center items-center h-full w-full cursor-pointer ${
      isActive ? 'border-4 border-white' : ''
    }`"
  >
    <img draggable="false" width="60" height="60" :src="piece.imageSrc" />
  </div>
</template>
