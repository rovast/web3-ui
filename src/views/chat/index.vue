<script setup lang="ts">
import { ref, reactive } from "vue";

const msg = ref("");
const messages = reactive([
  {
    type: "rec",
    msg: "It's over Anakin, I have the high ground.It's over Anakin, I have the high ground.It's over Anakin, I have the high ground."
  },
  { type: "send", msg: "You underestimate my power!" }
]);

const sendMsg = () => {
  if (!msg.value) {
    return;
  }

  messages.push({
    type: "send",
    msg: msg.value
  });

  msg.value = "";
};
</script>

<template>
  <div
    class="container mx-auto flex max-w-3xl mt-10 relative border border-transparent/10"
  >
    <ul
      class="w-1/3 border-r border-transparent/10 divide-y divide-transparent/10"
    >
      <li class="flex py-2 px-2" v-for="i in 8">
        <div class="avatar">
          <div class="w-10 h-10 rounded-lg">
            <img src="https://vitejs.dev/logo-with-shadow.png" />
          </div>
        </div>
        <div class="ml-1">
          <p class="text-md font-semibold">You name</p>
          <p class="text-xs truncate">Message</p>
        </div>
      </li>
    </ul>
    <div class="w-full min-h-[calc(100vh-500px)] py-5 px-5">
      <div
        class="chat"
        :class="m.type === 'rec' ? 'chat-start' : 'chat-end'"
        v-for="(m, k) in messages"
        :key="k"
      >
        <div class="chat-bubble">{{ m.msg }}</div>
      </div>

      <div class="space-x-2 flex absolute w-2/3 bottom-10">
        <input
          type="text"
          placeholder="Type here"
          class="input input-bordered w-full"
          v-model="msg"
        />
        <button class="btn normal-case" @click="sendMsg">Send</button>
      </div>
    </div>
  </div>
</template>
