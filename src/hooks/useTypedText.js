import { useState, useEffect } from 'react'

export const useTypedText = (fullText, startDelay, reduced) => {
  const [text, setText] = useState(reduced ? fullText : '')
  const [done, setDone] = useState(reduced)

  useEffect(() => {
    if (reduced) {
      setText(fullText)
      setDone(true)
      return
    }

    let index = 0
    let intervalId

    const timeoutId = window.setTimeout(() => {
      intervalId = window.setInterval(() => {
        index += 1
        setText(fullText.slice(0, index))
        if (index >= fullText.length) {
          window.clearInterval(intervalId)
          setDone(true)
        }
      }, 28)
    }, startDelay)

    return () => {
      window.clearTimeout(timeoutId)
      if (intervalId) window.clearInterval(intervalId)
    }
  }, [fullText, startDelay, reduced])

  return { text, done }
}
