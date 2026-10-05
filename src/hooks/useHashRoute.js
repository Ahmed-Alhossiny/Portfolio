import { useEffect, useState } from 'react'

const PROJECT_PREFIX = '#/project/'

function readRoute() {
  if (typeof window === 'undefined') {
    return { page: 'home', slug: null }
  }
  const hash = window.location.hash
  if (hash.indexOf(PROJECT_PREFIX) === 0) {
    return { page: 'project', slug: decodeURIComponent(hash.slice(PROJECT_PREFIX.length)) }
  }
  return { page: 'home', slug: null }
}

export function projectHref(slug) {
  return PROJECT_PREFIX + slug
}

export function useHashRoute() {
  const [route, setRoute] = useState(readRoute)

  useEffect(function () {
    function handleChange() {
      setRoute(readRoute())
    }
    window.addEventListener('hashchange', handleChange)
    return function () {
      window.removeEventListener('hashchange', handleChange)
    }
  }, [])

  return route
}
