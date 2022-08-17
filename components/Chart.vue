<template>
  <div class="w-2/3 mx-auto grid h-screen place-items-center">
    <canvas ref="chart"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js/auto'
export default {
  name: 'Chart',
  props: {
    chartData: {
      type: Object,
      require: true,
    },
  },
  data: () => ({
    chart: null,
  }),

  mounted() {
    const ctx = this.$refs.chart
    const labels = Object.keys(this.chartData)

    const data = {
      labels,
      datasets: [
        {
          label: 'Customers',
          data: Object.values(this.chartData).map(
            (item) => item?.n_customers ?? 0
          ),
          borderColor: '#003f5c',
          backgroundColor: '#003f5c',

          type: 'line',
          yAxisID: 'y',
          order: 0,
        },
        {
          label: 'CAC',
          data: Object.values(this.chartData).map((item) => item?.CAC ?? 0),
          order: 1,
          backgroundColor: '#ffa600',
          borderColor: '#ffa600',
          yAxisID: 'y2',
        },
      ],
    }
    const config = {
      type: 'bar',
      data,
      options: {
        interaction: {
          intersect: false,
          mode: 'index',
        },
        plugins: {
          title: {
            display: true,
            text: 'Chart.js Based Line/Bar Chart',
          },
        },
        scales: {
          y: {
            type: 'linear',
            position: 'left',
          },
        },
        y2: {
          type: 'linear',
          position: 'right',
        },
      },
    }

    this.chart = new Chart(ctx, config)
  },
}
</script>
