export enum Category {
    HOUSING = "HOUSING",
    FOOD = "FOOD",
    TRANSPORT = "TRANSPORT",
    HEALTH = "HEALTH",
    LEISURE = "LEISURE",
    OTHERS = "OTHERS"
}

export enum ExpenseType {
    FIXED = "FIXED",
    VARIABLE = "VARIABLE"
}

export interface IUser {
    id: string;
    name: string;
    email: string;
    password: string;
    salary: number;

    expenses?: IExpense[];
    goals?: IGoal[];

    createdAt: Date;
    updatedAt: Date;
}

export interface IExpense {
    id: string;
    name: string;
    value: number;
    type: ExpenseType;
    category: Category;
    date: Date;
    isPaid: boolean;

    userId: string;
    user?: IUser;

    createdAt: Date;
}

export interface IGoal {
    id: string;
    name: string;
    goalValue: number;
    currentValue: number;
    monthlyValue: number;
    progress: number;
    date: Date;
    deadline?: Date | null;

    userId: string;
    user?: IUser;
    
    createdAt: Date;
    updatedAt: Date;
}


