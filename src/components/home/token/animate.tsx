"use client"

import { animate, motion, useMotionValue, useTransform } from "framer-motion"
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

    return <h4 className="font-bold text-xl flex items-center">
        <motion.pre style={{fontSize: 64, display: "inline"}} className="text-[var(--section-tag)]">{rounded}</motion.pre>
        <span className="text-gray-400 ml-2">{symbol}</span>
    </h4>
}

export default NumberAnimate;