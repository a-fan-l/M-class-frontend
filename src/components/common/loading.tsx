"use client"

import { motion, Variants } from "framer-motion"

import "./style.css"

export interface LoadingProps {}
const Loading: React.FC<LoadingProps> = () => {
    const dotVariants: Variants = {
        jump: {
            y: -30,
            transition: {
                duration: 0.8,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
            },
        },
    }

    return (
        <motion.div
            animate="jump"
            transition={{ staggerChildren: -0.2, staggerDirection: -1 }}
            className="loading-container"
        >
            <motion.div className="item" variants={dotVariants} />
            <motion.div className="item" variants={dotVariants} />
            <motion.div className="item" variants={dotVariants} />
        </motion.div>
    )
}

export default Loading
