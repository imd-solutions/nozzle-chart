

import LRUCache from "lru-cache";

export default function (this: any): void {
  const TTL = 1000 * 60 * 5;

  // @ts-exoect-error
  const axCache = new LRUCache({ ttl: TTL, ttlAutopurge: true });

  this.nuxt.hook("vue-renderer:ssr:prepareContext", (ssrContext: any) => {
    ssrContext.$axCache = axCache;
  });
}