import TodoListWrapper from "./todos/TodoListWrapper";
import AddTodo from "./add/AddTodo";

export default function HomePage() {
  return (
    <main className="p-6">
      <AddTodo />
      <hr className="my-4" />
      <TodoListWrapper />
    </main>
  );
}
