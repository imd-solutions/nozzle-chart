import { mount } from '@vue/test-utils'

import beforeAllTests from './beforeAllTests'
import 'jest-canvas-mock'

import Home from '@/pages/index.vue'

import chartData from './___mocks/chart'

describe('Home page', () => {
  beforeAll(async () => {
    beforeAllTests()
  })

  test('mounts home page', () => {
    const wrapper = mount(Home)
    expect(wrapper.vm).toBeTruthy()
  })

  test('chart canvas tag is rendering on home page', async () => {
    const wrapper = mount(Home)
    await wrapper.setData({ chartData })
    expect(wrapper.find('canvas').exists()).toBe(true)
  })
})
