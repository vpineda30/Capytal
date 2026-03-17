import { prisma } from "../database/prisma/prisma";
import { IUser } from "../shared/dtos/dtos";

export class UserRepository {
    public async GetUsers(): Promise<IUser[]> {
        const users = await prisma.user.findMany()
        return users.map((u) => {
            return {
                id: u.id,
                name: u.name,
                email: u.email,
                password: u.password,
                salary: Number(u.salary),
                createdAt: u.createdAt,
                updatedAt: u.updatedAt
            }
        })
    }

    public async GetUserById(id: string): Promise<IUser> {
        const user = await prisma.user.findUnique({ where: { id } })

        if (!user) throw new Error("User not found")

        return {
            id: user.id,
            name: user.name,
            email: user.email,
            password: user.password,
            salary: Number(user.salary),
            createdAt: user.createdAt,
            updatedAt: user.updatedAt
        }
    }

    public async CreateUser(user: IUser): Promise<Omit<IUser, "salary" | "updatedAt">> {
        const userExists = await prisma.user.findUnique({ where: { email: user.email } })

        if (userExists) throw new Error("User already exists")

        const createdUser = await prisma.user.create({
            data: {
                name: user.name,
                email: user.email,
                password: user.password,
                salary: user.salary
            }
        })

        return {
            id: createdUser.id,
            name: createdUser.name,
            email: createdUser.email,
            password: createdUser.password,
            createdAt: createdUser.createdAt,
        }
    }

    public async UpdateUser(id: string, user: IUser): Promise<Omit<IUser, "createdAt">> {
        const userExists = await prisma.user.findUnique({ where: { id } })

        if (!userExists) throw new Error("User not found")

        const updatedUser = await prisma.user.update({
            where: { id },
            data: {
                name: user.name,
                email: user.email,
                password: user.password,
                salary: user.salary
            }
        })

        return {
            id: updatedUser.id,
            name: updatedUser.name,
            email: updatedUser.email,
            password: updatedUser.password,
            salary: Number(updatedUser.salary),
            updatedAt: updatedUser.updatedAt
        }
    }

    public async DeleteUser(id: string): Promise<void> {
        const user = await prisma.user.findUnique({ where: { id } })

        if (!user) throw new Error("User not found")

        await prisma.user.delete({ where: { id } })
    }
}