<script setup lang="ts">
const props = defineProps(["imageSrc"]);
</script>

<template>
  <div class="flex justify-center items-center h-full w-full">
    <img draggable="false" width="60" height="60" :src="props.imageSrc" />
  </div>
</template>
