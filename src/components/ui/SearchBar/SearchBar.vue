<script setup lang="ts">
import { MagnifyingGlassIcon } from "@heroicons/vue/24/outline";
</script>

<template>
  <div class="flex items-center w-72">
    <input
      class="h-8 w-full py-1 px-2 bg-slate-200 rounded-l text-sm font-light outline-none bg-transparent transition-color duration-100 focus:border-2 focus:border-dark-purple focus:bg-white"
      :placeholder="$t('header.searchPlaceholder')"
    />
    <MagnifyingGlassIcon
      class="h-8 p-1 font-bold bg-slate-300 border-l border-white rounded-r"
    />
  </div>
</template>
