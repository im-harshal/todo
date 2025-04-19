"use client";

export async function completeTodo(id: number) {
  await fetch(`http://localhost:3050/todos/${id}/complete`, {
    method: "PUT",
  });
  window.location.reload();
}

export async function deleteTodo(id: number) {
  await fetch(`http://localhost:3050/todos/${id}`, {
    method: "DELETE",
  });
  window.location.reload();
}
