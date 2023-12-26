import { ChangeEvent } from "react";
import { useTodo } from "../contexts/TodoContext";
import { Filter } from "../interfaces/TodoInterface";
import { OptionFilter } from "./partials/OptionSelect";

export const Header = () => {
    const todo = useTodo();

    const HandleChangeFilter = (event: ChangeEvent<HTMLSelectElement>) => {
        const val = event.target.value as Filter;
        todo.updateFilter(val);
    }

    return (
        <header className='flex justify-between items-center shadow-md border-b dark:border-gray-50 border-gray-900 px-10 py-4'>
            <h1 className='text-3xl font-bold dark:text-gray-100 text-gray-900'>Tareas</h1>
            <div className='flex justify-center items-center'>
                <select 
                    onChange={HandleChangeFilter}
                    className='outline-none h-9 rounded-md bg-violet-500 hover:bg-violet-700 dark:bg-violet-700 dark:hover:bg-violet-800 px-4 font-bold text-white'
                >
                    <OptionFilter valueFilter="TODOS" textFilter="Todos" />
                    <OptionFilter valueFilter="ACTIVO" textFilter="En proceso" />
                    <OptionFilter valueFilter="INACTIVO" textFilter="Terminados" />
                </select>
            </div>
        </header>
    );
}