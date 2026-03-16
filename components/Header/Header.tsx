'use client'

import './Header.css'
import { motion } from 'framer-motion'

export default function Header() {
    return (
        <motion.header className="header"
            initial={{ opacity: 0, y: 3 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}>

            <div className="logo">
                <img src="/logo.png" alt="Logo" />
            </div>
        </motion.header>   
    )
}