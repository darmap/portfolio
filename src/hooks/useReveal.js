import { useEffect, useRef } from 'react'

// Attach the returned ref to any element with the `.reveal` class.
// When it scrolls into view, `.is-visible` is added and the CSS
// transition in index.css takes care of the fade/slide-in.
export default function useReveal(threshold = 0.15) {
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      },
      { threshold }
    )

    observer.observe(node)
    return () => observer.disconnect()
    // eslint-disable-next-line
  }, [])

  return ref
}
