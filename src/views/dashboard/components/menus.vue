<script setup lang="ts">
const menus = [
  {
    icon: "mdi:earth",
    title: "Virtual Network",
    to: { name: "dashboard.virtual-network" }
  },
  {
    icon: "tabler:server-2",
    title: "Device",
    to: { name: "dashboard.device" }
  },
  {
    icon: "material-symbols:key",
    title: "Security Key",
    to: { name: "dashboard.key" }
  },
  {
    icon: "ion:wallet-outline",
    title: "Biling",
    to: { name: "dashboard.billing" }
  },
  {
    icon: "mdi:gear-outline",
    title: "Settings",
    to: { name: "dashboard.settings" }
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
