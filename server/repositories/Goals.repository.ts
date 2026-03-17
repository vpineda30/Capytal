import { User } from "lucide-react"
import { prisma } from "../database/prisma/prisma"
import { IGoal } from "../shared/dtos/dtos"
import { UserRepository } from "./User.repository"

const userRepository = new UserRepository()

export class GoalsRepository {
    async GetGoals(): Promise<IGoal[]> {
        const goals = await prisma.goal.findMany()

        return goals.map(goal => ({
            ...goal,
            goalValue: Number(goal.goalValue),
            currentValue: Number(goal.currentValue),
            monthlyValue: Number(goal.monthlyValue),
            progress: Number(goal.progress)
        }))
    }

    async GetGoalById(id: string): Promise<IGoal | null> {
        const goal = await prisma.goal.findUnique({ where: { id } })

        if (!goal) return null

        return {
            ...goal,
            goalValue: Number(goal.goalValue),
            currentValue: Number(goal.currentValue),
            monthlyValue: Number(goal.monthlyValue),
            progress: Number(goal.progress)
        }
    }

    async CreateGoal(goal: IGoal): Promise<IGoal> {
        await userRepository.GetUserById(goal.userId)

        const goalExists = await this.GetGoalById(goal.id)

        if (goalExists) throw new Error("Goal already exists")

        const createdGoal = await prisma.goal.create({ data: {
            id: goal.id,
            name: goal.name,
            goalValue: goal.goalValue,
            currentValue: goal.currentValue,
            monthlyValue: goal.monthlyValue,
            progress: goal.progress,
            userId: goal.userId
        } })

        return {
            ...createdGoal,
            goalValue: Number(createdGoal.goalValue),
            currentValue: Number(createdGoal.currentValue),
            monthlyValue: Number(createdGoal.monthlyValue),
            progress: Number(createdGoal.progress)
        }
    }

    async UpdateGoal(id: string, goal: IGoal): Promise<IGoal> {
        await userRepository.GetUserById(goal.userId)

        const goalExists = await this.GetGoalById(id)

        if (!goalExists) throw new Error("Goal not found")

        const updatedGoal = await prisma.goal.update({ where: { id }, data: {
            name: goal.name,
            goalValue: goal.goalValue,
            currentValue: goal.currentValue,
            monthlyValue: goal.monthlyValue,
            progress: goal.progress,
            userId: goal.userId
        } })

        return {
            ...updatedGoal,
            goalValue: Number(updatedGoal.goalValue),
            currentValue: Number(updatedGoal.currentValue),
            monthlyValue: Number(updatedGoal.monthlyValue),
            progress: Number(updatedGoal.progress)
        }
    }

    async DeleteGoal(id: string): Promise<void> {
        const goal = await this.GetGoalById(id)

        if (!goal) throw new Error("Goal not found")

        await prisma.goal.delete({ where: { id } })
    }
}