import { useEffect, useState } from 'react'

const STORAGE_KEY = 'portfolio-theme'

function readInitialTheme() {
  if (typeof document === 'undefined') {
    return 'dark'
  }
  const current = document.documentElement.getAttribute('data-theme')
  if (current === 'light' || current === 'dark') {
    return current
  }
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (stored === 'light' || stored === 'dark') {
      return stored
    }
  } catch (error) {
    return 'dark'
  }
  return 'dark'
}

export function useTheme() {
  const [theme, setTheme] = useState(readInitialTheme)

  useEffect(function () {
    document.documentElement.setAttribute('data-theme', theme)
    const meta = document.querySelector('meta[name="theme-color"]')
    if (meta) {
      meta.setAttribute('content', theme === 'light' ? '#F7F8FA' : '#0B0E14')
    }
    try {
      window.localStorage.setItem(STORAGE_KEY, theme)
    } catch (error) {
      return
    }
  }, [theme])

  function toggleTheme() {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return { theme, toggleTheme }
}
