import { UseDate } from "../components/hooks/getDate";
const { getWeekday } = UseDate()

// Список задач по умолчанию
export interface task {
    id: number;
    title: string;
    date: string;
    status: boolean;
}

export const taskItems: Array<task> = [
    {
        id: 0, 
        title: 'Записаться к терапевту на первую группу анализов (за три месяца)', 
        date: `09:00, ${getWeekday("02.09.2024")}, 02.09.2024`, 
        status: false
    },
    {
        id: 1, 
        title: 'Записаться к терапевту на вторую группу анализов (за неделю)', 
        date: `09:00, ${getWeekday("25.11.2024")}, 25.11.2024`, 
        status: false
    },
    {
        id: 3, 
        title: 'Create web-application', 
        date: `15:15, ${getWeekday("04.08.2024")}, 04.08.2024`, 
        status: true
    }
]