import { client, checkError } from './client';

export async function getTodos() {
  const resp = await client.from('todos').select('*').order('id', { ascending: true });
  return checkError(resp);
}

export async function renderTodo(data) {
  const resp = await client.from('todos').insert(data).single('');
  return checkError(resp);
}

export async function deleteTodo(id) {
  const resp = await client.from('todos').delete().match({ id });
  return checkError(resp);
}

export async function complete(data) {
  const resp = await client.from('todos').update(data).match({ id: data.id }).single();
  return checkError(resp);
}