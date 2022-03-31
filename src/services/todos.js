import { client, checkError } from './client';

export const getTodos = async () => {
  const resp = await client.from('todos').select();
  return checkError(resp);
};

export const renderTodo = async (todo) => {
  const resp = await client.from('todos').insert(todo).select();
  return checkError(resp);
};
