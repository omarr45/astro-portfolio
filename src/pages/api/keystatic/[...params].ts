import keystaticConfig from '../../../../keystatic.config'
import { makeHandler } from '@keystatic/astro/api'

export const all = makeHandler({
  config: keystaticConfig,
})

export const prerender = false