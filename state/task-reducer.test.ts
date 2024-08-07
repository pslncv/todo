import { task } from "../src/data/todoList"
import { UseDate } from "../src/components/hooks/getDate"
import { expect, test } from 'vitest'
import { taskReducer } from './task-reducer'
const { getWeekday } = UseDate();

test('Delete task correct!', () => {

    const startState: task[] = [
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
            id: 2, 
            title: 'Create web-application', 
            date: `15:15, ${getWeekday("04.08.2024")}, 04.08.2024`, 
            status: true
        }
    ];
    const endState: task[] = taskReducer(startState, {type: "DELETE-TASK", id: 0});

    expect(endState.length).toBe(2);
})

test('Create new task correct!', () => {
    const startState: task[] = [
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
            id: 2, 
            title: 'Create web-application', 
            date: `15:15, ${getWeekday("04.08.2024")}, 04.08.2024`, 
            status: true
        }
    ];
    const newTaskTitle = "New Task"
    const endState: task[] = taskReducer(startState, { type: "CREATE-TASK", title: newTaskTitle});

    expect(endState.length).toBe(4)
    expect(endState[endState.length -1].title).toBe(newTaskTitle)
})

test('Check/Uncheck task correct!', () => {
    const startState: task[] = [
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
            id: 2, 
            title: 'Create web-application', 
            date: `15:15, ${getWeekday("04.08.2024")}, 04.08.2024`, 
            status: true
        }
    ];
    const targetTask = 1; // Second task
    const currentStatus = startState[targetTask - 1].status
    const newStatus = !currentStatus
    const endState = taskReducer(startState, { type: "CHECK-TASK", id: targetTask - 1 })

    expect(endState[targetTask - 1].status).toBe(newStatus)
})