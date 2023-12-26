import { useTodo } from "../contexts/TodoContext";
import { Item } from "./partials/Item";



export const Body = () => {
    const todo = useTodo();

    return (
        <main>
            <ul className='px-10 py-3 grid gap-y-3'>
                {
                    todo.todo !== null && todo.todo.length > 0 
                    ? <>
                        {
                            todo.todo.map(item => ( <Item data={item} key={item.id} /> ))
                        }
                    </>
                    : <section className='grid gap-y-3'>
                        <li className='w-full py-4 rounded-md animate-pulse bg-gray-100 dark:bg-gray-950'></li>
                        <li className='w-full py-4 rounded-md animate-pulse bg-gray-100 dark:bg-gray-950'></li>
                        <li className='w-full py-4 rounded-md animate-pulse bg-gray-100 dark:bg-gray-950'></li>
                        <span className='font-bold text-gray-200 animate-pulse'>No tienes tareas</span>  
                    </section>
                }                              
            </ul>
        </main>
    );
}