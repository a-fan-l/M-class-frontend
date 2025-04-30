"use client"

import { 
    animate, 
    motion, 
    useMotionValue, 
    useTransform 
} from "framer-motion"
import { useEffect } from "react"

export interface INumberAnimateProps {
    value?: number
    symbol?: string
}

const NumberAnimate: React.FC<INumberAnimateProps> = ({ value = 0, symbol = "" }) => {
    const count = useMotionValue(0)
    const rounded = useTransform(() => Math.round(count.get()))

    useEffect(() => {
        const controls = animate(count, value, { duration: 5 })
        return () => controls.stop()
    }, [])

    return <h4 className="flex lg:items-center items-start">
        <motion.pre style={{ display: "inline"}} className="text-[var(--section-tag)] text-2xl md:text-4xl">{rounded}</motion.pre>
        <span className="text-gray-400 lg:pl-2 pl-1 self-center text-md md:text-lg lg:text-2xl">{symbol}</span>
    </h4>
}

export default NumberAnimate;