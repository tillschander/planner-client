<template>
  <div class="bg-white shadow rounded p-3">
    <p class="text-gray-700 font-semibold tracking-wide text-sm mb-2">{{ task.title }}</p>
    <div v-if="task.project" class="text-right text-sm text-gray-400">{{ task.project }}</div>
    <div class="flex justify-between items-center text-sm">
      <span class="text-gray-600">{{ task.date }}</span>
      <span class="text-gray-400">{{ task.customer }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    task: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>
