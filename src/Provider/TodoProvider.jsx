import { createContext, useState } from "react";

export const TodoContext = createContext()

export const TodoProvider = ({ children }) => {
    
    const [todoList, setTodoList] = useState([])
    const [isOpenWithData, setOpen] = useState(null)
    return (
        <TodoContext.Provider value={{ todoList, setTodoList, isOpenWithData, setOpen }}>
            { children }
        </TodoContext.Provider>
    )
}