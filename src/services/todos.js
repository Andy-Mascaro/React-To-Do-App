import { client, checkError } from './client';

export const getTodos = async () => {
  const resp = await client.from('todos').select();
  return checkError(resp);
};

export const renderTodo = async (todo) => {
  const resp = await client.from('todos').insert(todo).select();
  return checkError(resp);
};

export async function deleteTodo(id) {
  const resp = await client.from('todos').delete().match({ id });
  return checkError(resp);
}
