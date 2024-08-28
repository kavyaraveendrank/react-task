import { useTodo } from '../Hooks/Hooks';

const ListItem = ({ element, handleRemove }) => {

    const {setOpen} = useTodo()

    return (
        <div key={element.id} className='p-3 bg-gray-800 text-white max-w-[250px] text-center text-base font-sans '>
            <p className='break-words'>{element.task}</p>
            <p className='text-[12px] mt-3'>{element.updatedAt}</p>
            <div className='w-full'>
                <button onClick={() => setOpen(element)} className='w-full bg-violet-500 text-white mt-3 p-1'><i className='fa fa-pen cursor-pointer'/> Update</button>
                <button onClick={() => handleRemove(element.id)} className='w-full bg-red-500 text-white mt-3 p-1'><i className='fa fa-trash cursor-pointer'/> Remove</button>
            </div>
        </div>
    );
}

export default ListItem;