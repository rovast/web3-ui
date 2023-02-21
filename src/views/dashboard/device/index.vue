<script setup lang="ts">
const data = [
  { name: "local", network: "ZUhJ25pMRn", os: "Linux" },
  { name: "local", network: "ZUhJ25pMRn", os: "Linux" },
  { name: "local", network: "ZUhJ25pMRn", os: "Linux" },
  { name: "local", network: "ZUhJ25pMRn", os: "Linux" },
  { name: "local", network: "ZUhJ25pMRn", os: "Linux" },
  { name: "local", network: "ZUhJ25pMRn", os: "Linux" }
];
</script>
<template>
  <h2>{{ $route.meta.title }}</h2>
  <div class="overflow-x-auto mt-5">
    <table class="table w-full">
      <!-- head -->
      <thead>
        <tr>
          <th />
          <th>Name</th>
          <th>Network</th>
          <th>OS</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <!-- row 1 -->
        <tr v-for="(v, k) in data" :key="k">
          <th>{{ k + 1 }}</th>
          <td>{{ v.name }}</td>
          <td>{{ v.network }}</td>
          <td>{{ v.os }}</td>
          <td class="space-x-2 w-40">
            <button class="btn btn-primary btn-sm">Action2</button>
            <button class="btn btn-ghost btn-sm">Action</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
