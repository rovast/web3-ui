<script setup lang="ts">
import logo from "@/assets/logo.png";
import { BottomItems } from "@/config/bottom";
import { ref } from "vue";

const org = ref(BottomItems.org);
</script>

<template>
  <footer class="footer footer-center p-10">
    <div>
      <img :src="logo" alt="logo" width="50" height="50" class="rounded-lg" />
      <p class="font-bold">Web3 UI<br />Quick start in web3 world.</p>
      <p>Copyright © {{ new Date().getFullYear() }} - All right reserved</p>
    </div>
    <div class="grid grid-flow-col gap-4">
      <a v-if="org.github" :href="org.github" target="_blank">
        <IconifyIconOnline
          icon="mdi:github"
          width="30px"
          height="30px"
          class="hover:text-slate-500"
        />
      </a>

      <a v-if="org.twitter" :href="org.twitter" target="_blank">
        <IconifyIconOnline
          icon="mdi:twitter"
          width="30px"
          height="30px"
          class="hover:text-blue-500"
      /></a>
      <a v-if="org.discord" :href="org.discord" target="_blank">
        <IconifyIconOnline
          icon="ic:baseline-discord"
          width="30px"
          height="30px"
          class="hover:text-indigo-500"
      /></a>
      <a v-if="org.youtube" :href="org.youtube" target="_blank">
        <IconifyIconOnline
          icon="mdi:youtube"
          width="30px"
          height="30px"
          class="hover:text-red-600"
      /></a>
    </div>
  </footer>
</template>
