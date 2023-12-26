import { Dispatch, SetStateAction } from "react";

export interface GlobalContext {
    todo: ListOrNull,
    updateTodo: Dispatch<SetStateAction<ListOrNull>>
}

export interface Todo {
    id: number,
    title: string,
    status: boolean
}

export type ListOrNull = Todo[] | null;

export type Filter = 'TODOS' | 'INACTIVO' | 'ACTIVO';

export interface NativeTodo {
    title: string
}
