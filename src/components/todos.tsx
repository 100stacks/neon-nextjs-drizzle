"use client";

import { useState } from "react";
import { todoType } from "@/types/todoTypes";
import Todo from "./todo";
import AddTodo from "./addTodo";
import { addTodo, deleteTodo, editTodo, toggleTodo } from "@/actions/todoAction";

interface Props {
    todos: todoType[];
}

const Todos = ({ todos }: Props) => {
    const [todoItems, setTodoItems] = useState<todoType[]>(todos);

    // create a new todo task
    const createTodo = (task: string) => {
        const id = (todoItems.at(-1)?.id || 0) + 1;
        addTodo(id, task);
        setTodoItems((prev) => [...prev, { id: id, task, done: false}]);
    }

    // edit a todo task
    const changeTodoTask = (id: number, task: string) => {
        setTodoItems((prev) =>
        prev.map((todo) => (todo.id === id ? { ...todo, task } : todo))
    );
    editTodo(id, task);
    };

    // toggle done status for a todo task
    const toggleIsTodoDone = (id: number) => {
        setTodoItems((prev) =>
        prev.map((todo) => (todo.id === id ? { ...todo, done: !todo.done} : todo))
    );
    toggleTodo(id);
    };

    // delete a todo task
    const deleteTodoItem = (id: number) => {
        setTodoItems((prev) => prev.filter((todo) => todo.id !== id));
        deleteTodo(id);
    };

    // render the Todo List component
    return (
        <main className="flex mx-auto max-w-xl w-full min-h-screen flex-col items-center p-16">
            <div className="text-5xl font-medium">
                Todo app
            </div>
            <div className="w-full flex flex-col mt-8 gap-2">
                {todoItems.map((todo) => (
                    <Todo
                        key={todo.id}
                        todo={todo}
                        changeTodoTask={changeTodoTask}
                        toggleIsTodoDone={toggleIsTodoDone}
                        deleteTodoItem={deleteTodo}
                    />
                ))}
            </div>
            <AddTodo
                createTodo={createTodo}
            />
        </main>
    );
};

export default Todos;
