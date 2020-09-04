<template>
  <section class="panel absolute z-10 right-0 bg-gray-600 rounded-md shadow-xl mt-3">
    <TimetrackingClock v-if="recording" @stop="recording = false" />
    <TimetrackingForm v-else @record="recording = true" />
  </section>
</template>

<script>
import TimetrackingForm from "./TimetrackingForm.vue";
import TimetrackingClock from "./TimetrackingClock.vue";

export default {
  name: "TimetrackingPanel",
  components: {
    TimetrackingForm,
    TimetrackingClock,
  },
  data() {
    return {
      recording: false,
    };
  },
};
</script>

<style>
.panel {
  top: 100%;
  width: 24rem;
}
</style>