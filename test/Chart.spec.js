import { mount } from '@vue/test-utils'

import beforeAllTests from './beforeAllTests'
import 'jest-canvas-mock'

import Chart from '@/components/Chart.vue'

import chartData from './___mocks/chart'

describe('Home page', () => {
  beforeAll(async () => {
    beforeAllTests()
  })

  test('mounts chart page', () => {
    const wrapper = mount(Chart, {
      propsData: {
        chartData,
      },
    })
    expect(wrapper.vm).toBeTruthy()
  })

  test('Creates chart.js instance', () => {
    const wrapper = mount(Chart, {
      propsData: {
        chartData,
      },
    })
    expect(wrapper.vm.chart).toBeTruthy()
  })
})
