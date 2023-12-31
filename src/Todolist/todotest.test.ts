


// import {v1} from "uuid";
// import { TodoType } from "./TodolistApp";
// import {todoReducer} from "./todoReducer";

// test('listRemove',()=>{
//     const startState: Array<TodoType> = [
//       {
//         todoid: v1(),
//         name: "one",
//         filter: "all",
//         tasks: [{ idTask: v1(), taskTitle: "task1", isDone: false }],
//       },
//       {
//         todoid: v1(),
//         name: "two",
//         filter: "all",
//         tasks: [{ idTask: v1(), taskTitle: "task2", isDone: false }],
//       },
//     ];
//     const endState = todoReducer(startState, {
//       type: "REMOVE-LIST",
//       idList: startState[0].todoid,
//     });
//     expect(endState.length).toBe(1)
// })

// test('AddList',()=>{
//     const startState: Array<TodoType> = [
//       {
//         todoid: v1(),
//         name: "one",
//         filter: "all",
//         tasks: [{ idTask: v1(), taskTitle: "task1", isDone: false }],
//       },
//       {
//         todoid: v1(),
//         name: "two",
//         filter: "all",
//         tasks: [{ idTask: v1(), taskTitle: "task2", isDone: false }],
//       },
//     ];
//     const endState = todoReducer(startState, {type:'ADD-TODO',idList:v1(), listTitle:'NewList'})
//     expect(endState.length).toBe(3)
// })

// test('Addtask',()=>{
//     const startState: Array<TodoType> = [
//       {
//         todoid: v1(),
//         name: "one",
//         filter: "all",
//         tasks: [{ idTask: v1(), taskTitle: "task1", isDone: false }],
//       },
//       {
//         todoid: v1(),
//         name: "two",
//         filter: "all",
//         tasks: [{ idTask: v1(), taskTitle: "task2", isDone: false }],
//       },
//     ];
//     const endState = todoReducer(startState, {
//       type: "ADD-TASK",
//       idList: startState[0].todoid,
//       taskTitle: "NewList",
//     });
//     expect(endState[0].tasks.length).toBe(2)
// })
// test('Removetask',()=>{
//     const startState: Array<TodoType> = [
//       {
//         todoid: v1(),
//         name: "one",
//         filter: "all",
//         tasks: [{ idTask: v1(), taskTitle: "task1", isDone: false }],
//       },
//       {
//         todoid: v1(),
//         name: "two",
//         filter: "all",
//         tasks: [{ idTask: v1(), taskTitle: "task2", isDone: false }],
//       },
//     ];
//     const endState = todoReducer(startState, {
//       type: "REMOVE-TASK",
//       idList: startState[0].todoid,
//       idTask: startState[0].tasks[0].idTask,
//     });
//     expect(endState[0].tasks.length).toBe(0)
// })
// test('CHECKBOX-TOG',()=>{
//     const startState: Array<TodoType> = [
//       {
//         todoid: v1(),
//         name: "one",
//         filter: "all",
//         tasks: [{ idTask: v1(), taskTitle: "task1", isDone: false }],
//       },
//       {
//         todoid: v1(),
//         name: "two",
//         filter: "all",
//         tasks: [{ idTask: v1(), taskTitle: "task2", isDone: false }],
//       },
//     ];
//     const endState = todoReducer(startState, {
//       type: "CHECKBOX-TOG",
//       idList: startState[0].todoid,
//       idTask: startState[0].tasks[0].idTask,
//     });
//     expect(endState[0].tasks[0].isDone).toBe(true)
// })