"use client";

import { ChangeEvent, useState } from "react";
import { todoType } from "@/types/todoTypes";

interface Props {
    todo: todoType;
    changeTodoTask: (id: number, task: string) => void;
    toggleIsTodoDone: (id: number, done: boolean) => void;
    deleteTodoItem: (id: number) => void;
}

const Todo = ({
    todo,
    changeTodoTask,
    toggleIsTodoDone,
    deleteTodoItem,
}: Props) => {

        const [ editing, setEditing ] = useState(false);
        const [ task, setTask ] = useState(todo.task);
        const [ isDone, setIsDone ] = useState(todo.done);

        const handleTaskChange = (e: ChangeEvent<HTMLInputElement>) => {
            setTask(e.target.value);
        }

        const handleIsDone = async () => {
            toggleIsTodoDone(todo.id, !isDone);
            setIsDone((prev) => !prev);
        };

        const handleEdit = () => {
            setEditing(true);
        };

        const handleSave = async () => {
            changeTodoTask(todo.id, task);
            setEditing(false);
        };

        const handleCancel = () => {
            setEditing(false);
            setTask(todo.task);
        };

        const handleDelte = () => {
            if (confirm("Are you sure you want to delete this todo?")) {
                deleteTodoItem(todo.id);
            }
        };

        // Render the Todo component
        return (
            <div className="flex items-center gap-2 p-4 border-gray-200 border-solid border rounded-lg">
                <input
                    type="checkbox"
                    className="text-blue-200 rounded-sm h-4 w-4"
                    checked={isDone}
                    onChange={handleIsDone}
                />
                <input
                    type="text"
                    value={task}
                    onChange={handleTaskChange}
                    readOnly={!editing}
                    className={`${
                        todo.done ? "line-through" : ""
                    } outline-none read-only:border-transparent focus:border border-gray-200 rounded px-2 py-1 w-full`}
                />
                <div className="flex gap-1 ml-auto">
                    {editing ? (
                        <button
                            onClick={handleSave}
                            className="bg-green-600 text-green-50 rounded px-2 w-14 py-1"
                        >
                            Save
                        </button>
                    ) : (
                        <button
                            onClick={handleEdit}
                            className="bg-blue-400 text-blue-50 rounded px-2 w-14 py-1">
                            Edit
                        </button>
                    )}
                    {editing ? (
                        <button
                            onClick={handleCancel}
                            className="bg-red-400 w-16 text-red-50 rounded px-2 py-1"
                        >
                            Close
                        </button>
                    ) : (
                        <button
                            onClick={handleDelte}
                            className="bg-red-400 w-16 text-red-50 rounded px-2 py-1"
                        >
                            Delete
                        </button>
                    )}
                </div>
            </div>
        );
};

export default Todo;
