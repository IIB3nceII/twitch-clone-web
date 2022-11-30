<script setup lang="ts">
import { ref } from "vue";

defineProps<{ text?: string }>();

const showToolTip = ref<boolean>(false);
</script>

<template>
  <div class="relative mt-1 transition-all duration-100">
    <div @mouseover="showToolTip = true" @mouseleave="showToolTip = false">
      <slot></slot>
    </div>
    <p
      :class="`${
        showToolTip ? 'block' : 'hidden'
      } absolute -ml-2 p-1 whitespace-nowrap text-xs text-white font-semibold bg-content-bg rounded`"
    >
      {{ text }}
    </p>
  </div>
</template>
