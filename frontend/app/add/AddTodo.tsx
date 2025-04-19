"use client"; // Marks it as a Client Component

import { useState } from "react";

export default function AddTodo() {
  const [task, setTask] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await fetch("http://localhost:3050/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ task }),
    });
    setTask("");
    window.location.reload(); // For now, just reload to fetch new list
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="New task..."
        className="border p-2 rounded"
      />
      <button
        type="submit"
        className="ml-2 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Add
      </button>
    </form>
  );
}
