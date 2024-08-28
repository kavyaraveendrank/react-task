import { useContext } from "react"
import { TodoContext } from "../Provider/TodoProvider"
import { CartContext } from "../Provider/CartProvider"
export const useTodo = () => {
    return useContext(TodoContext)
}

export const useCart = () => {
    return useContext(CartContext)
}