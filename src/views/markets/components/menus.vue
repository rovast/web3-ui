<script setup lang="ts">
const menus = [
  {
    icon: "healthicons:provider-fst",
    title: "Providers",
    to: { name: "markets.providers" }
  },
  {
    icon: "simple-icons:wasmer",
    title: "Actors",
    to: { name: "markets.actors" }
  }
];
</script>

<template>
  <ul class="menu bg-base-100 w-56 p-2 rounded-box">
    <li>
      <router-link v-for="(m, k) in menus" :key="k" :to="m.to">
        <IconifyIconOnline :icon="m.icon" width="20px" height="20px" />
        {{ m.title }}
      </router-link>
    </li>
  </ul>
</template>

<style scoped></style>
