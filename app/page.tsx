"use client"

import "./page.css";
import { motion } from "motion/react";
import Header from "@/components/Header/Header";
import { SalaryCard } from "@/components/Cards/Salary-Card/SalaryCard";
import { AnalysticsCard } from "@/components/Cards/Analystics-Card/AnalysticsCard";
import { FixedExpensesCard } from "@/components/Cards/Fixed-Expenses-Card/FixedExpensesCard";
import { VariableExpensesCard } from "@/components/Cards/Variable-Expenses-Card/VariableExpensesCard";
import { GoalsCard } from "@/components/Cards/Goals-Card/GoalsCard";
import { ButtonPrimary } from "@/components/Buttons/Button-Primary/ButtonPrimary";
import { NavBottom } from "@/components/Nav-Bottom/NavBottom";
import { Goal } from "lucide-react";

export default function Dashboard() {
  return (
    <main className="dashboard-main">
      <Header />

      <motion.h1 className="dashboard-title"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}>Meu Dashboard</motion.h1>

      <div className="dashboard-content">
        <SalaryCard value={5300} />
        <AnalysticsCard value={2506.83} goalValueInvested={3185.50} goalValueFinal={3200.00} />

        <div className="expenses-cards">
          <FixedExpensesCard value={2150.00} />
          <VariableExpensesCard value={643.17} />
        </div>

        <motion.div className="my-goals"
          initial={{ opacity: 0, y: 5 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}>

          <div className="my-goals-header">
            <h3 className="my-goals-title">Minhas Metas</h3>
            <Goal className="goal-icon" />
          </div>

          <motion.div className="goals-cards-container"
            initial={{ opacity: 0, y: 5 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}>

            <GoalsCard title="Macbook NEO" progress={93} goalValueInvested={3185.50} goalValue={3200.00} />
            <GoalsCard title="Viagem para a Europa" progress={47} goalValueInvested={4660.00} goalValue={10000.00} />
          </motion.div>

          <div className="show-more-button">
            <ButtonPrimary text="Mostrar mais" />
          </div>
        </motion.div>
      </div>
      <NavBottom />
    </main>
  );
}
