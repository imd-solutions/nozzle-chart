import type { Context } from '@nuxt/types'
import { AxiosAdapter } from 'axios'
import { cacheAdapterEnhancer } from 'axios-extensions'
import LRUCache from 'lru-cache'

const TTL = 1000 * 60 * 5

export default (context: Context): void => {
  const { $axios } = context

  const defaultCache = process.server
    ? // @ts-expect-error
      context.ssrContext?.$axCache
    : new LRUCache({ ttl: TTL, ttlAutopurge: true })
  const { defaults } = $axios

  defaults.adapter = cacheAdapterEnhancer(defaults.adapter as AxiosAdapter, {
    enabledByDefault: false,
    cacheFlag: 'useCache',
    defaultCache,
  })
}
