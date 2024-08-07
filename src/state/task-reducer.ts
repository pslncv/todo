import { UseDate } from "../components/hooks/getDate";
import { task } from "../data/todoList";

type Action = CreateTaskActionType | DeleteTaskActionType | CheckTaskActionType

interface CreateTaskActionType {type: "CREATE-TASK"; title: string}
export const CreateTaskAC = (title: string): CreateTaskActionType => {
    return {type: "CREATE-TASK", title: title}
}

interface DeleteTaskActionType {type: "DELETE-TASK"; id: number}
export const DeleteTask = (id:number): DeleteTaskActionType => {
    return {type: "DELETE-TASK", id: id}
}

interface CheckTaskActionType {type: "CHECK-TASK"; id: number}
export const CheckTask = (id:number): CheckTaskActionType => {
    return {type: "CHECK-TASK", id: id}
}

export const taskReducer = (state: task[], action: Action) => {
    switch (action.type) {
        case "CREATE-TASK": {
            const { date } = UseDate()
            return [...state, {id: 4, title: action.title, date: date, status: false}]
        }
        case "DELETE-TASK": {
            return state.filter(t => t.id !== action.id)
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