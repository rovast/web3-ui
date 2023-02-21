<script setup lang="ts"></script>
<template>
  <h2>{{ $route.meta.title }}</h2>
  <div class="tabs mt-6">
    <a class="tab tab-lg text-sm tab-lifted">Profile</a>
    <a class="tab tab-lg text-sm tab-lifted tab-active">Security</a>
    <a class="tab tab-lg text-sm tab-lifted">2FA</a>
  </div>

  <div class="form-control w-full max-w-xs space-y-5">
    <div>
      <label class="label">
        <span class="label-text">Name</span>
      </label>
      <input
        type="text"
        placeholder="Type here"
        class="input input-bordered focus:input-primary w-full"
      />
    </div>

    <div>
      <label class="label">
        <span class="label-text">Email</span>
      </label>
      <input
        type="text"
        placeholder="Type here"
        class="input input-bordered focus:input-primary w-full"
      />
    </div>

    <div>
      <button class="btn btn-primary w-full">Submit</button>
    </div>
  </div>
</template>
