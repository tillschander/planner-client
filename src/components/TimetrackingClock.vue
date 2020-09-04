<template>
  <div class="flex justify-between p-4">
    <div class="flex flex-col justify-between">
      <div class="text-white font-bold text-3xl leading-none">00h 00m</div>
      <div class="text-xs text-white font-bold">Activity bla bla</div>
      <div class="text-xs text-gray-700 font-bold mt-2">
        <span class="border rounded border-transparent py-px px-1 bg-gray-500">Customer</span>
        <span class="border rounded border-transparent py-px px-1 bg-gray-500 ml-2">Project</span>
      </div>
    </div>

    <div class="flex space-x-4">
      <div class="bg-gray-500 self-center rounded-full cursor-pointer flex-shrink-0">
        <PauseIcon class="text-gray-700 w-16 h-16" />
      </div>

      <div
        @click="$emit('stop')"
        class="bg-primary self-center rounded-full cursor-pointer flex-shrink-0"
      >
        <StopIcon class="text-white w-16 h-16" />
      </div>
    </div>
  </div>
</template>

<script>
import PauseIcon from "../assets/PauseIcon.vue";
import StopIcon from "../assets/StopIcon.vue";

export default {
  name: "TimetrackingClock",
  components: {
    PauseIcon,
    StopIcon
  }
};
</script>

<style>
</style>