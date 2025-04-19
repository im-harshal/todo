// app/todos/TodoListWrapper.tsx
import TodoList from "./TodoList";

type Todo = {
  _id: number;
  task: string;
  completed: boolean;
};

export default async function TodoListWrapper() {
  const res = await fetch("http://localhost:3050/todos", { cache: "no-store" });
  const todos: Todo[] = await res.json();

  return <TodoList todos={todos} />;
}
