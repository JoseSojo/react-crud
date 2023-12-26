import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useEffect, useState } from "react"
import { Filter, ListOrNull, NativeTodo, Todo } from "../interfaces/TodoInterface";

interface TodoContextInterface {
    todo: ListOrNull,
    updateTodo: Dispatch<SetStateAction<ListOrNull>>,
    filter: Filter,
    updateFilter: Dispatch<SetStateAction<Filter>>,
    create: (data: NativeTodo) => void,
    update: (data: Todo) => void,
    delete: (id: number) => void,
    notification: {active:boolean, not:string},
    updateNotification: Dispatch<SetStateAction<{active:boolean, not:string}>>
}

const DefaultContext: TodoContextInterface = {
    todo: null,
    updateTodo: ()=>{},
    filter: 'TODOS',
    updateFilter: ()=>{},
    create: () => {},
    update: () => {},
    delete: () => {},
    notification: {active:false, not:''},
    updateNotification: () => {}
}

export const TodoContext = createContext(DefaultContext);

export const TodoProvider = ({children}: {children: ReactNode}) => {
    const [todo, setTodo] = useState<ListOrNull>(null);
    const [filter, setFilter] = useState<Filter>('TODOS');
    const [reload, setReload] = useState(false);
    const [noti, setNoti] = useState(DefaultContext.notification);

    const CreateTodoContext = (data: NativeTodo) => {
        if(todo && todo.length >= 5) return alert('solo puedes crear 5 task')
        const newTodo:Todo = {
            title: data.title,
            status: false,
            id: todo ? todo.length+1 : 1
        }
        const save = [newTodo];
        if(todo) todo.map((item: Todo) => save.push(item))

        window.localStorage.setItem('todo', JSON.stringify(save));
        setNoti({active:true, not:'Tarea Creada'});
        return setReload(!reload);
    }

    const UpdateTodoContext = (data: Todo) => {
        const newsTodos: Todo[] = []

        
        if(todo) {
            todo.map((item: Todo) => {
                if(item.id == data.id) item = data
                newsTodos.push(item);
            })
        }
        window.localStorage.setItem('todo', JSON.stringify(newsTodos));
        setNoti({active:true, not:'Tarea Actualizada'});
        setReload(!reload);
    }

    const DeleteTodoContext = (id: number) => {
        if(!todo) return

        todo.map((item, i) => { if(item.id == id) todo.splice(i, 1) });
        window.localStorage.setItem('todo', JSON.stringify(todo));
        setNoti({active:true, not:'Tarea Eliminada'});
        setReload(!reload);
    }

    useEffect(() => {
        const todos: ListOrNull = JSON.parse(`${window.localStorage.getItem('todo')}`);
        const set: Todo[] = [];

        if(!todos) return setTodo(null);

        if(filter === 'TODOS') return setTodo(todos);
        else if(filter === 'ACTIVO') {
            console.log('activo')
            todos.map((item) => { if(item.status === false) set.push(item) })
        }
        else if(filter === 'INACTIVO') {
            console.log('inactivo')
            todos.map((item) => { if(item.status === true) set.push(item) })
        }
        
        return setTodo(set);
    }, [reload, filter]);

    return (
        <TodoContext.Provider value={{
            todo,
            updateTodo: setTodo,
            filter,
            updateFilter: setFilter,
            create: CreateTodoContext,
            update: UpdateTodoContext,
            delete: DeleteTodoContext,
            notification: noti,
            updateNotification: setNoti
        }}>
            {children}
        </TodoContext.Provider>
    )
}

export const useTodo = () => useContext(TodoContext);
