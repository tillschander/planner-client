<template>
  <div>
    <PageHeader :title="'Timetracker'">
      <button
        class="ml-2 relative inline-flex items-center px-3 py-2 border-2 border-gray-700 text-sm leading-5 font-bold rounded-md text-gray-800"
      >Add Activity</button>
    </PageHeader>

    <div class="mt-6 flex space-x-6">
      <div class="w-3/4 flex flex-col space-y-6">
        <div v-for="i of [0,1]" :key="i" class="bg-gray-100 p-3 rounded">
          <h3 class="flex justify-between text-gray-700 font-semibold tracking-wide text-sm">
            <span>Tuesday, Sep 07</span>
            <div>7h 52min</div>
          </h3>
          <div class="mt-3 text-gray-700 tracking-wide text-sm">
            <ActivityCard v-for="(activity, i) in activities" :key="i" :activity="activity" />
          </div>
        </div>
      </div>

      <div class="w-1/4 flex flex-col space-y-6">
        <div class="relative bg-gray-100 rounded p-3 pt-4">
          <span class="absolute text-gray-700 font-semibold tracking-wide text-sm -mt-1">Customers</span>
          <DoughnutChart :chartdata="[]" :options="{}" />
        </div>
        <div class="relative bg-gray-100 rounded p-3 pt-4">
          <span class="absolute text-gray-700 font-semibold tracking-wide text-sm -mt-1">Projects</span>
          <DoughnutChart :chartdata="[]" :options="{}" />
        </div>
      </div>
</template>

<script>
import DoughnutChart from "../charts/DoughnutChart.vue";
import PageHeader from "../components/PageHeader.vue";
import ActivityCard from "../components/ActivityCard.vue";

export default {
  name: "Timetracker",
  components: {
    DoughnutChart,
    PageHeader,
    ActivityCard
  },
  data() {
    return {
      activities: [
        {
          start: "10:44",
          end: "11:00",
          title: "Shopping cart dropdown",
          customer: "Customer A",
          project: "Project A",
          duration: "16min",
        },
        {
          start: "11:00",
          end: "13:15",
          title: "Shopping cart dropdown",
          customer: "Customer A",
          project: "Project A",
          duration: "2h 15min",
        },
        {
          start: "15:20",
          end: "15:40",
          title: "Documentation",
          customer: "Customer B",
          duration: "20min",
        },
        {
          start: "18:00",
          end: "22:00",
          title: "Fix all the bugs",
          duration: "4h",
        }
      ]
    }
  }
};
</script>