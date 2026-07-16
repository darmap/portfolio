import { useEffect, useState } from 'react'

// Watches the given section ids and returns whichever one currently
// occupies the "reading band" of the viewport, so the nav can highlight it.
export default function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0])
  const key = ids.join(',')

  useEffect(() => {
    const elements = ids.map((id) => document.getElementById(id)).filter(Boolean)
    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible.length > 0) {
          setActive(visible[0].target.id)
        }
      },
      { rootMargin: '-30% 0px -55% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] }
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
    // eslint-disable-next-line
  }, [key])

  return active
}
