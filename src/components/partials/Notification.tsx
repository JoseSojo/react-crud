import { useEffect } from "react";
import { useTodo } from "../../contexts/TodoContext"

export const Notification = () => {
    const todo = useTodo();

    useEffect(() => {
        setTimeout(() => {
            todo.updateNotification({active:false,not:''});
        }, 3000);
    }, [])

    return (
        <section 
            className={`
                min-w-[300px] absolute rounded-md  py-4 bottom-10 left-10 text-lg font-semibold pl-5
                bg-white shadow-md text-gray-900
                dark:bg-gray-900 dark:text-white
            `}
        >
            { todo.notification.not }
            <span className='absolute w-5 h-5 bg-green-500 rounded-full -right-2 -top-2 animate-pulse'></span>
        </section>
    )
}