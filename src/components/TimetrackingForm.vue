<template>
  <div class="flex flex-col">
    <div class="flex space-x-4 p-4">
      <div class="flex flex-col space-y-4 pt-px">
        <InputElement label="Activity" />
        <div class="flex space-x-2">
          <InputElement label="Customer" />
          <InputElement label="Project" />
        </div>
      </div>
      <div
        @click="$emit('record')"
        class="bg-primary self-center rounded-full cursor-pointer flex-shrink-0"
      >
        <PlayIcon class="text-white w-16 h-16" />
      </div>
    </div>

    <div class="bg-gray-700 rounded-b-md">
      <input v-model="customDuration" id="custom_duration" type="checkbox" class="hidden" />
      <label for="custom_duration" class="flex justify-center py-2 text-gray-500 cursor-pointer">
        <span class="text-sm font-bold">Custom duration</span>
        <UpIcon v-if="customDuration" class="w-6 h-6 -mt-px" />
        <DownIcon v-else class="w-6 h-6 -mt-px" />
      </label>
      <div v-if="customDuration" class="flex p-4 pt-0 space-x-2">
        <InputElement label="Start" />
        <InputElement label="End" />
      </div>
    </div>
  </div>
</template>

<script>
import InputElement from "./InputElement.vue";
import PlayIcon from "../assets/PlayIcon.vue";
import UpIcon from "../assets/UpIcon.vue";
import DownIcon from "../assets/DownIcon.vue";

export default {
  name: "TimetrackingForm",
  components: {
    InputElement,
    PlayIcon,
    UpIcon,
    DownIcon
  },
  data() {
    return {
      customDuration: false,
    };
  },
  mounted() {
    //this.$refs.activityInput.focus();
  },
};
</script>

<style>
</style>