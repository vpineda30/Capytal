import { motion } from "motion/react";
import "./ButtonPrimary.css";

type ButtonPrimaryProps = {
    text: string;
}

export function ButtonPrimary({ text }: ButtonPrimaryProps) {
    return (
        <motion.button className="button-primary"
            whileHover={{ color: "var(--background)", background: "var(--positive)" }}
            transition={{ duration: 0.03, ease: "easeInOut" }}>

            {text}
        </motion.button>
    )
}