import { UseDate } from "../src/components/hooks/getDate";
import { task } from "../src/data/todoList";

interface Action {
    type: string;
    [key: string]: any; 
}

export const taskReducer = (state: task[], action: Action) => {
    switch (action.type) {
        case "DELETE-TASK": {
            return state.filter(t => t.id !== action.id)
        }
        case "CREATE-TASK": {
            const { date } = UseDate()
            return [...state, {id: 4, title: action.title, date: date, status: false}]
        }
        case "CHECK-TASK": {
            const target = state.find(t => t.id === action.id)
            if (target) {
                const currentStatus = target.status
                target.status = !currentStatus
            }
            return state
        }
        default:
            throw new Error('Action type probably not found')
    }  
}