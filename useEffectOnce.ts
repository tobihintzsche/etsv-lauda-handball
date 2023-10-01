import type { EffectCallback } from 'react'
import { useEffect } from 'react'

/** Executes the given callback only once.
 * Wrapping "// eslint-disable-next-line react-hooks/exhaustive-deps" here makes the intent more explicit.
 */
export function useEffectOnce(callback: EffectCallback) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(callback, [])
}
