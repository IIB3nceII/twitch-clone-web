<script setup lang="ts">
import { VideoCameraIcon } from "@heroicons/vue/24/outline";
</script>

<template>
  <div
    class="flex flex-col items-center space-y-4 fixed min-h-screen w-16 p-2 overflow-y-scroll overflow-x-hidden scrollbar-hide bg-base-bg-2 md:w-52"
  >
    <VideoCameraIcon class="h-5 md:hidden" />
    <h1
      class="hidden whitespace-nowrap text-xs font-semibold uppercase md:block"
    >
      {{ $t("sidebar.title") }}
    </h1>

    <div class="flex flex-nowrap w-full justify-center items-center md:justify-between">
      <span class="h-7 w-7 rounded-full bg-sky-300"></span>
      <div class="-ml-16 text-sm hidden md:flex md:flex-col">
        <h2 class="font-semibold">Stramer</h2>
        <p>Minecraft</p>
      </div>
      <span
        class="hidden self-start text-xs md:block before:flex before:h-2 before:w-2 before:bg-dark-red before:rounded-full before:relative before:top-3 before:-left-3"
        >355</span
      >
    </div>
  </div>
</template>
