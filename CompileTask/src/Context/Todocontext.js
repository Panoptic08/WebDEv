import { useContext } from "react";
import { createContext } from "react";


export const Todo = createContext({
    todos: [{
        id:2,
        task:"Do me",
        completed:false
    }],
    addtask: (task)=>{},
    deletetask:(id)=>{},
    Edit:(id,task)=>{},
    statustask:(id)=>{},
})

export const TodoProvider = Todo.Provider

export const Usetodo = ()=>{
    return useContext(Todo)
}