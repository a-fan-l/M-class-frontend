"use client"

import { motion, Variants } from "framer-motion"

import "./style.css"
interface LoadingThreeDotsJumpingProps {
    text: string
}
const LoadingThreeDotsJumping: React.FC<LoadingThreeDotsJumpingProps> = ({ text }) => {
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
            className="container"
        >
            {text && text.split('').map((char, index) => (
                <motion.div key={index} variants={dotVariants}>
                    {char}
                </motion.div>
            ))}
        </motion.div>
    )
}

export default LoadingThreeDotsJumping
