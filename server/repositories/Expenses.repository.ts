import { prisma } from "../database/prisma/prisma"
import { Category, ExpenseType, IExpense } from "../shared/dtos/dtos"

export class ExpensesRepository {
    async GetExpenses(): Promise<IExpense[]> {
        const expenses = await prisma.expense.findMany()

        return expenses.map((e) => {
            return {
                id: e.id,
                name: e.name,
                value: Number(e.value),
                date: e.date,
                userId: e.userId,
                type: e.type as ExpenseType,
                category: e.category as Category,
                isPaid: e.isPaid,
                createdAt: e.createdAt
            }
        })
    }

    async GetExpenseById(id: string): Promise<IExpense | null> {
        const expense = await prisma.expense.findUnique({ where: { id } })

        if (!expense) return null

        return {
            id: expense.id,
            name: expense.name,
            value: Number(expense.value),
            date: expense.date,
            userId: expense.userId,
            type: expense.type as ExpenseType,
            category: expense.category as Category,
            isPaid: expense.isPaid,
            createdAt: expense.createdAt
        }
    }

    async CreateExpense(expense: IExpense): Promise<IExpense> {
        const expenseExists = await prisma.expense.findUnique({ where: { id: expense.id } })

        if (expenseExists) throw new Error("Expense already exists")

        const { user, ...data } = expense

        const createdExpense = await prisma.expense.create({ 
            data: {
                ...data,
                value: expense.value
            }
        })

        return {
            id: createdExpense.id,
            name: createdExpense.name,
            value: Number(createdExpense.value),
            date: createdExpense.date,
            userId: createdExpense.userId,
            type: createdExpense.type as ExpenseType,
            category: createdExpense.category as Category,
            isPaid: createdExpense.isPaid,
            createdAt: createdExpense.createdAt
        }
    }

    async UpdateExpense(id: string, expense: IExpense): Promise<IExpense> {
        const expenseExists = await prisma.expense.findUnique({ where: { id } })

        if (!expenseExists) throw new Error("Expense not found")

        const { user, createdAt, ...data } = expense

        const updatedExpense = await prisma.expense.update({ 
            where: { id }, 
            data: {
                ...data,
                value: expense.value
            }
        })

        return {
            id: updatedExpense.id,
            name: updatedExpense.name,
            value: Number(updatedExpense.value),
            date: updatedExpense.date,
            userId: updatedExpense.userId,
            type: updatedExpense.type as ExpenseType,
            category: updatedExpense.category as Category,
            isPaid: updatedExpense.isPaid,
            createdAt: updatedExpense.createdAt
        }
    }

    async DeleteExpense(id: string): Promise<void> {
        const expense = await prisma.expense.findUnique({ where: { id } })

        if (!expense) throw new Error("Expense not found")

        await prisma.expense.delete({ where: { id } })
    }
}
