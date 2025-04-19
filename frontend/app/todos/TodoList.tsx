"use client";

import { completeTodo, deleteTodo } from "../action";

type Todo = {
  _id: number;
  task: string;
  completed: boolean;
};

export default function TodoList({ todos }: { todos: Todo[] }) {
  return (
    <ul className="space-y-2">
      {todos.map((todo) => (
        <li key={todo._id} className="flex items-center justify-between">
          <span className={todo.completed ? "line-through text-gray-500" : ""}>
            {todo.task}
          </span>
          <div className="space-x-2">
            <button
              onClick={() => completeTodo(todo._id)}
              className="bg-green-500 text-white px-2 py-1 rounded"
            >
              {todo.completed ? "Undo" : "Complete"}
            </button>
            <button
              onClick={() => deleteTodo(todo._id)}
              className="bg-red-500 text-white px-2 py-1 rounded"
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
