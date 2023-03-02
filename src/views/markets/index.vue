<script setup lang="ts">
import Menu from "./components/menus.vue";
</script>
<template>
  <div class="container mx-auto py-10">
    <div class="flex">
      <Menu />
      <div
        class="w-full border-l border-transparent/10 pl-10 min-h-[calc(100vh-500px)]"
      >
        <RouterView />
      </div>
    </div>
  </div>
</template>
