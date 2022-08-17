<template>
  <chart v-if="chartData" :chart-data="chartData" />
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
  data: () => ({
    chartData: null,
  }),
  async fetch() {
    this.chartData = await this.$axios.$get(
      'https://europe-west2-nozzle.cloudfunctions.net/api'
    )
  },
})
</script>
