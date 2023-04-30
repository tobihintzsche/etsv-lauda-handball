import React, { useEffect, useState } from 'react'

export function useDeviceType() {
  const [screenSize, setScreenSize] = useState<String | null>(null)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setScreenSize(getScreenSize())
      window.addEventListener('resize', handleResize)
    }
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function handleResize() {
    setScreenSize(getScreenSize())
  }

  function getScreenSize() {
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      return 'mobile'
    } else if (
      typeof window !== 'undefined' &&
      window.innerWidth >= 768 &&
      window.innerWidth < 1024
    ) {
      return 'tablet'
    } else {
      return 'desktop'
    }
  }

  return getScreenSize()
}
