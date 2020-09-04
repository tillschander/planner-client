<template>
  <div class="flex justify-between cursor-pointer bg-white px-2 py-1 shadow rounded mt-2">
    <div>
      <span class="i">{{ activity.start }} - {{ activity.end }}</span>
      <span class="ml-4 font-semibold">{{ activity.title }}</span>
      <span class="text-gray-400 ml-4">{{ activity.customer }}</span>
      <span class="text-gray-400 ml-4">{{ activity.project }}</span>
    </div>
    <div class="font-semibold">{{ activity.duration }}</div>
  </div>
</template>

<script>
export default {
  props: {
    activity: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>