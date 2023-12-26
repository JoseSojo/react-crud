import { FormEvent, useState } from "react";
import { useTodo } from "../contexts/TodoContext";
import { NativeTodo } from "../interfaces/TodoInterface";

export const FormCreate = () => {
    const [data, setData] = useState<NativeTodo>({title:''});

    const todo = useTodo();

    const HandleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(data.title === '') return;
        todo.create(data);
        setData({title:''});
    }

    return (
        <form onSubmit={HandleSubmit} className='mt-3 px-10'>
            <h1 className='text-center dark:text-gray-50 font-bold text-lg mb-6'>Crear Tarea</h1>
            <div className='grid grid-cols-[1fr_100px]'>
                <input 
                    value={data.title} 
                    onChange={(event) => setData({title:event.target.value})} 
                    type='text' 
                    name='title' 
                    placeholder='Titulo' 
                    className='w-full border-none outline-none dark:bg-gray-950 dark:text-gray-200 bg-gray-300 text-gray-950 rounded-l-md p-3 text-md' 
                    />
                <input 
                    type='submit' 
                    value='Guardar' 
                    className='w-full bg-violet-500 hover:bg-violet-700 font-bold text-violet-950  rounded-r-md p-3 text-md' 
                    />
            </div>
        </form>
    );
}
