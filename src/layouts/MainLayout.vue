<script setup lang="ts">
import { Header, SideBar } from "../components/common";
</script>

<template>
  <Header />
  <main class="flex mt-12">
    <SideBar />
    <div class="flex w-full ml-16 md:ml-52"><slot></slot></div>
  </main>
</template>

<style scoped>
main {
  min-height: 100vh;
  widows: 100vw;
}
</style>
