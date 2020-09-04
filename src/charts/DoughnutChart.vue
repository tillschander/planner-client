<template>
  <canvas ref="chart" width="3" height="2"></canvas>
</template>

<script>
import Chart from "chart.js";

export default {
  props: {
    chartdata: {
      type: Object,
      default: null,
    },
    options: {
      type: Object,
      default: null,
    },
  },
  mounted() {
    var myChart = new Chart(this.$refs.chart, {
      type: "doughnut",
      data: {
        datasets: [
          {
            data: [10, 20, 30],
            borderColor: "#e6e0de",
            borderWidth: 3,
            backgroundColor: "#bdbbba",
          },
        ],
        labels: ["Red", "Yellow", "Blue"],
      },
      options: {
        animation: {
          duration: 0
        },
        legend: {
          display: false
        }
      },
    });
  },
};
</script>
