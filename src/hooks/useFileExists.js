import { useEffect, useState } from 'react'

export function useFileExists(url, expectedType) {
  const [exists, setExists] = useState(false)

  useEffect(function () {
    if (!url) {
      return
    }
    let cancelled = false

    async function check() {
      try {
        const response = await fetch(url, { method: 'HEAD' })
        const type = response.headers.get('content-type') || ''
        if (!cancelled && response.ok && type.indexOf(expectedType) !== -1) {
          setExists(true)
        }
      } catch (error) {
        return
      }
    }

    check()

    return function () {
      cancelled = true
    }
  }, [url, expectedType])

  return exists
}
