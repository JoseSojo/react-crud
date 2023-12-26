import { ListOrNull } from "../interfaces/TodoInterface";

export const GetTodoStorage = (): ListOrNull => {
    const storage: ListOrNull = JSON.parse(`${window.localStorage.getItem('todo')}`);
    if(storage === null)  {
        return null;
    }
    const list = storage;
    return list;
}

export const UpdateTodo = (id: number, todo: ListOrNull) => {
    if(todo === null) return;

    todo.map((item, i) => {
        if(item.id == id) return todo.splice(i, 1);
    })
}
