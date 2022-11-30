<script setup lang="ts">
defineEmits<{
  action?: (...props: any) => unknown;
}>();
</script>

<template>
  <button
    class="p-1 rounded-md transition-colors duration-100 hover:bg-hover-primary"
    @click="$emit('action')"
  >
    <slot></slot>
  </button>
</template>
