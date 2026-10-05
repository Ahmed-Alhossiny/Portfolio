import { useEffect, useRef, useState } from 'react'

export const useScrollReveal = (count) => {
  const refs = useRef([])
  const [visible, setVisible] = useState(() => Array.from({ length: count }, () => false))

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries
          .filter((entry) => entry.isIntersecting)
          .forEach((entry) => {
            const index = refs.current.indexOf(entry.target)
            if (index !== -1) {
              setVisible((prev) => prev.map((value, i) => (i === index ? true : value)))
              observer.unobserve(entry.target)
            }
          })
      },
      { threshold: 0.15 }
    )

    refs.current.filter(Boolean).forEach((node) => observer.observe(node))

    return () => observer.disconnect()
  }, [])

  const setRef = (index) => (node) => {
    refs.current[index] = node
  }

  return { visible, setRef }
}
