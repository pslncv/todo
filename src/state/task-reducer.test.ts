import { task, taskItems } from "../data/todoList"
import { expect, test } from 'vitest'
import { CheckTask, CreateTaskAC, DeleteTask, taskReducer } from './task-reducer'
const startState: task[] = taskItems

test('Create new task correct!', () => {
    const newTaskTitle = "New Task"
    const endState: task[] = taskReducer(startState, CreateTaskAC(newTaskTitle));

    expect(endState.length).toBe(startState.length + 1)
    expect(endState[endState.length -1].title).toBe(newTaskTitle)
})

test('Delete task correct!', () => {
    const targetTask = Math.floor(Math.random() * startState.length); // Random task
    const endState: task[] = taskReducer(startState, DeleteTask(targetTask));
    
    expect(endState.length).toBe(startState.length - 1);
})

test('Check/Uncheck task correct!', () => {
    const targetTask = Math.floor(Math.random() * startState.length); // Random task
    const currentStatus = startState[targetTask].status
    const newStatus = !currentStatus
    const endState = taskReducer(startState, CheckTask(targetTask))

    expect(endState[targetTask].status).toBe(newStatus)
})