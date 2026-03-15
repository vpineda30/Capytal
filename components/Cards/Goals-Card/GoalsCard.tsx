"use client"

import { motion } from "motion/react";
import "./GoalsCard.css";
import { ButtonPrimary } from "@/components/Buttons/Button-Primary/ButtonPrimary";

type GoalsCardProps = {
    title: string;
    progress: number;
    goalValueInvested: number;
    goalValue: number;
}

export function GoalsCard({ title, progress, goalValueInvested, goalValue }: GoalsCardProps) {
    return (
        <div className="goals-card">
            <h3 className="goal-title">{title}</h3>

            <div className="progress">
                <motion.div className="progress-value"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 1 }}>
                </motion.div>
            </div>

            <div className="goal-value-container">
                <p className="goal-value">R$ {goalValueInvested.toLocaleString('pt-BR', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                })} / R$ {goalValue.toLocaleString('pt-BR', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                })}</p>
            </div>

            <div className="goal-button-container">
                <ButtonPrimary text="Editar" />
                <ButtonPrimary text="Excluir" />
            </div>
        </div>
    )
}