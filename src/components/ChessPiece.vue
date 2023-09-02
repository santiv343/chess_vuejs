<script setup lang="ts">
import { ref } from "vue";

const props = defineProps(["imageSrc",'']);
const isSelected = ref(false);
</script>

<template>
  <div
    @click="isSelected = !isSelected"
    :class="`flex justify-center items-center h-full w-full cursor-pointer ${
      isSelected ? 'border-2 border-white' : ''
    }`"
  >
    <img draggable="false" width="60" height="60" :src="props.imageSrc" />
  </div>
</template>
