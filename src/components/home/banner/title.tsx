"use client"

import { motion, Variants } from "motion/react"

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
            className="container1"
        >
            {text && text.split('').map((char, index) => (
                <motion.div key={index} variants={dotVariants}>
                    {char}
                </motion.div>
            ))}
            <StyleSheet />
        </motion.div>
    )
}

/**
 * ==============   Styles   ================
 */
function StyleSheet() {
    return (
        <style>
            {`
                .container1 {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    color: #fff;
                    gap: 10px;
                }
            `}
        </style>
    )
}

export default LoadingThreeDotsJumping
