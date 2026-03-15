"use client"

import { animate, motion, useMotionValue, useTransform } from "motion/react";
import "./AnalysticsCard.css";
import { useEffect } from "react";

type AnalysticsProps = {
    value: number
    goalValueInvested: number
    goalValueFinal: number
}

export default function AnalysticsCard({ value, goalValueInvested, goalValueFinal }: AnalysticsProps) {
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
        <motion.div className="analytics-card-container"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}>

            <h3 className="analytics-card-title">Análise rápida</h3>

            <div className="analytics-prevision">
                <h3 className="analytics-prevision-title">Previsão de sobra desse mês</h3>
                <h1 className="analytics-prevision-value">R$ <motion.span>{rounded}</motion.span>
                    <motion.span className="analytics-prevision-value-percent" 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    transition={{ duration: 0.3, ease: "easeInOut", delay: 3 }}>
                        
                        {" -> "} 3% a mais que no mês anterior
                    </motion.span>
                </h1>
            </div>

            <div className="goal-progress">
                <h3 className="goal-progress-title">Meta Próxima - Macbook NEO</h3>
                
                <div className="progress">
                    <motion.div className="progress-value"
                        initial={{ width: 0 }}
                        animate={{ width: "93%" }}
                        transition={{ duration: 1.5, ease: "easeOut", delay: 1 }}>
                    </motion.div>
                </div>

                <p className="goal-value">R$ {goalValueInvested.toLocaleString('pt-BR', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                })} / R$ {goalValueFinal.toLocaleString('pt-BR', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                })}</p>
            </div>
        </motion.div>   
    )
}