"use client"

import { motion, animate, useMotionValue, useTransform } from "motion/react";
import { useEffect } from "react";
import './FixedExpensesCard.css'

type ExpensesProps = {
    value: number
}

export function FixedExpensesCard({ value }: ExpensesProps) {
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => {
        return latest.toLocaleString('pt-BR', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        });
    });

    useEffect(() => {
        const controls = animate(count, value, { duration: 1.5, ease: "easeOut", delay: 1 });
        return () => controls.stop();
    }, [value, count]);

    return (
        <motion.div className="fixed-expenses-card"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}>
                
            <div className="fixed-expenses-card-content">
                <h3 className="fixed-expenses-card-title">Total gastos fixos</h3>
                <h1 className="fixed-expenses-card-value">
                    R$ <motion.span>{rounded}</motion.span>
                </h1>
            </div>
        </motion.div>
    )
}