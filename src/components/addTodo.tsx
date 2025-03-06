"use client";

import { ChangeEvent, useState } from "react";

interface Props {
    createTodo: (value: string) => void;
}

const AddTodo = ({ createTodo }: Props ) => {
    const [input, setInput] = useState("");

    // event handler for input
    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    };

    // event handler for adding a new todo
    const handleAdd = async () => {
        createTodo(input);
        setInput("");
    };

    // render the AddTodo component
    return (
        <div className="w-full flex gap-1 mt-2">
            <input
                type="text"
                className="w-full px-2 py-1 border border-gray-200 rounded outline-none"
                onChange={handleInput}
                value={input}
            />
            <button
                className="flex items-center justify-center bg-green-600 text-green-50 rounded px-2 h-9 w-14 py-1"
                onClick={handleAdd}
            >
                Add
            </button>
        </div>
    );
};

export default AddTodo;
