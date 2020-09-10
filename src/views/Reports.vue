<template>
  <PageHeader :title="'Reports'"></PageHeader>

  <div class="mt-6 flex space-x-6">
    <div class="w-3/4">
      <div class="relative bg-gray-100 rounded p-3 pt-4">
        <span class="absolute text-gray-700 font-semibold tracking-wide text-sm -mt-1">Income</span>
        <LineChart :chartdata="[]" :options="{}" />
      </div>
      <div class="relative bg-gray-100 rounded p-3 pt-4 mt-6">
        <span class="absolute text-gray-700 font-semibold tracking-wide text-sm -mt-1">Workload</span>
        <LineChart :chartdata="[]" :options="{}" />
      </div>
    </div>

    <div class="w-1/4 flex flex-col space-y-6">
      <div class="relative bg-gray-100 rounded p-3 pt-4">
        <span class="absolute text-gray-700 font-semibold tracking-wide text-sm -mt-1">Workload</span>
        <BarChart :chartdata="[]" :options="{}" />
      </div>
      <div class="relative bg-gray-100 rounded p-3 pt-4">
        <span class="absolute text-gray-700 font-semibold tracking-wide text-sm -mt-1">Customers</span>
        <DoughnutChart :chartdata="[]" :options="{}" />
      </div>
      <div class="relative bg-gray-100 rounded p-3 pt-4">
        <span class="absolute text-gray-700 font-semibold tracking-wide text-sm -mt-1">Projects</span>
        <DoughnutChart :chartdata="[]" :options="{}" />
      </div>
    </div>
  </div>
</template>

<script>
import PageHeader from "../components/PageHeader.vue";
import LineChart from "../charts/LineChart.vue";
import DoughnutChart from "../charts/DoughnutChart.vue";
import BarChart from "../charts/BarChart.vue";

export default {
  name: "Tasks",
  components: {
    PageHeader,
    LineChart,
    DoughnutChart,
    BarChart,
  },
};
</script>