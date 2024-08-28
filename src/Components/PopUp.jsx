import React, {  useState } from 'react';
import toast from 'react-hot-toast';
import { useTodo } from '../Hooks/Hooks';

const PopUp = () => {

    const { todoList, setTodoList, isOpenWithData, setOpen } = useTodo()
    
    const [editedTodo, setEditedTodo] = useState(isOpenWithData?.task)

    const handleUpdate = () => {
        if (!editedTodo) return toast.error("Task field is required!")
        if (todoList.some(element => element.task.toLowerCase() == editedTodo.toLowerCase()))
            return toast.error("Task already exist")
        const res = todoList.map(element => {
            if (element.id == isOpenWithData.id) {
                return {
                    ...element,
                    task: editedTodo,
                    updatedAt: new Date().toISOString()
                }
            }
            return element
        })
        setTodoList(res)
        setEditedTodo("")
        setOpen(null)
    }

    return (
  
        <div className='w-screen h-screen fixed top-0 left-0 bg-black bg-opacity-30'>
    <div className='flex justify-center items-center h-screen'>
        <div className='flex w-full md:w-[500px] flex-col bg-white p-6 rounded-lg shadow-lg'>
            <input
                type="text"
                placeholder="Enter Task"
                value={editedTodo}
                onChange={(e) => setEditedTodo(e.target.value)}
                className='p-3 border-2 border-gray-300 rounded-md outline-none focus:border-emerald-400 transition-all'
            />
            <div className='flex w-full gap-3 mt-4'>
                <button onClick={handleUpdate} className='bg-emerald-500 hover:bg-emerald-600 transition-all p-[10px] w-full text-white rounded-md shadow-md'>
                    Update Task
                </button>
                <button onClick={() => setOpen(null)} className='bg-red-600 hover:bg-red-700 transition-all p-[10px] w-full text-white rounded-md shadow-md'>
                    Cancel Edit
                </button>
            </div>
        </div>
    </div>
</div>
    );
}

export default PopUp;