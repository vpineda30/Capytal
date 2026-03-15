"use client";

import { Eye } from "lucide-react";
import { EyeClosed } from "lucide-react";
import { HandCoins } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import "./SalaryCard.css";

type SalaryProps = {
    value: number
}

export default function SalaryCard({ value }: SalaryProps) {
    const [showSalary, setShowSalary] = useState(false);

    return (
        <motion.div className="salary-card-container"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}>

            <div className="salary-card-content">
                <h3 className="salary-card-title">Meu salário atual</h3>

                <div className="salary-card-amount-wrapper">
                    <h1 className="salary-card-amount">
                        {showSalary ? "R$ " + value.toLocaleString('pt-BR', {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                        }) : "R$ ******"}
                    </h1>
                    {showSalary
                        ? <Eye className="salary-card-eye-icon" onClick={() => setShowSalary(false)} />
                        : <EyeClosed className="salary-card-eye-icon" onClick={() => setShowSalary(true)} />
                    }
                </div>
            </div>

            <div className="salary-card-icon-wrapper">
                <HandCoins className="salary-card-main-icon" size={50} />
            </div>
        </motion.div>
    );
}