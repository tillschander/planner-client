<template>
  <canvas ref="chart" width="5" height="1"></canvas>
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
      type: "line",
      data: {
        labels: ["Monday", "", "", "", "", "", "", "Monday", "", "", "", ""],
        datasets: [
          {
            data: [12, 19, 3, 5, 2, 3, 12, 19, 3, 5, 2, 3],
            backgroundColor: "#bdbbba",
            barPercentage: 1,
            categoryPercentage: 1.0,
          },
        ],
      },
      options: {
        animation: {
          duration: 0
        },
        legend: {
          display: false,
        },
        scales: {
          xAxes: [
            {
              display: false,
            },
          ],
          yAxes: [
            {
              display: false,
            },
          ],
        },
      },
    });
  },
};
</script>
