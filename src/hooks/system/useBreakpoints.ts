import { useEffect, useState } from 'react'

interface BreakpointOptions {
  sm?: number
  md?: number
  lg?: number
  xl?: number
}

interface BreakpointState {
  upsm: boolean
  upmd: boolean
  uplg: boolean
  upxl: boolean
  downsm: boolean
  downmd: boolean
  downlg: boolean
  downxl: boolean
}

const defaultBreakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
}

const useBreakpoints = (
  options: BreakpointOptions = {},
): BreakpointState => {
  const [breakpoints, setBreakpoints] = useState<BreakpointState>({
    upsm: false,
    upmd: false,
    uplg: false,
    upxl: false,
    downsm: false,
    downmd: false,
    downlg: false,
    downxl: false,
  })

  useEffect(() => {
    const breakpointValues = { ...defaultBreakpoints, ...options }

    const updateBreakpoints = () => {
      const width = window.innerWidth
      setBreakpoints({
        upsm: width >= breakpointValues.sm!,
        upmd: width >= breakpointValues.md!,
        uplg: width >= breakpointValues.lg!,
        upxl: width >= breakpointValues.xl!,
        downsm: width < breakpointValues.sm!,
        downmd: width < breakpointValues.md!,
        downlg: width < breakpointValues.lg!,
        downxl: width < breakpointValues.xl!,
      })
    }

    updateBreakpoints()
    window.addEventListener('resize', updateBreakpoints)

    return () => {
      window.removeEventListener('resize', updateBreakpoints)
    }
  }, [options])

  return breakpoints
}

export default useBreakpoints