import { ChangeEvent, FC, FormEvent, useState } from "react"
import { Todo } from "../../interfaces/TodoInterface"
import { useTodo } from "../../contexts/TodoContext"

interface Props {
    data: Todo
}

export const Item: FC<Props> = ({ data }) => {
    const todo = useTodo();
    const [up, setUp] = useState(data);

    const HandleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const update = {
            ...up,
            [event.target.name]: event.target.name === 'status' ? event.target.checked : event.target.value
        }
        setUp(update);
    }

    const HandleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        todo.update(up);
    }

    return (
        <li 
            className='flex  px-5 w-full pt-4 text-gray-950 dark:text-gray-100'
        >
            <form onSubmit={HandleSubmit} className='mr-4 flex items-center gap-x-4'>
                <span className='text-lg font-bold text-gray-500'>{up.id}</span>
                <input 
                    name='status' 
                    onChange={HandleChange} 
                    type='checkbox' 
                    checked={up.status}
                    />
                <input 
                    required
                    name='title' 
                    value={up.title}
                    placeholder="Titulo" 
                    onChange={HandleChange} 
                    type='text' 
                    className={`dark:bg-gray-950 bg-gray-200 p-3 ${up.status ? 'line-through dark:text-gray-500' : ''}`}
                    />
                <input 
                    value='Actualizar'
                    type='submit' 
                    className={`${
                        data.status 
                        ? `
                            bg-violet-400 hover:bg-violet-600 text-gray-600 hover:text-gray-700
                            dark:bg-violet-950 dark:hover:bg-violet-800 dark:text-gray-500 dark:hover:text-gray-200'`
                        :`   
                            bg-violet-600 hover:bg-violet-800 text-gray-800 hover:text-gray-950
                            dark:bg-violet-800 dark:hover:bg-violet-700 dark:text-gray-200 dark:hover:text-gray-100`
                        }  p-3 rounded-lg font-bold`}
                    />
            </form>
            <button 
                onClick={()=> todo.delete(up.id)}
                value='Actualizar'
                type='submit' 
                className={`${
                    data.status 
                    ? `
                        bg-red-400 hover:bg-red-600 text-gray-600 hover:text-gray-700
                        dark:bg-red-950 dark:hover:bg-red-800 dark:text-gray-500 dark:hover:text-gray-200'`
                    :`   
                        bg-red-600 hover:bg-red-800 text-gray-800 hover:text-gray-950
                        dark:bg-red-800 dark:hover:bg-red-700 dark:text-gray-200 dark:hover:text-gray-100`
                    }  p-3 rounded-lg font-bold`}
            >
                Eliminar
            </button>
            
        </li>
    )
}