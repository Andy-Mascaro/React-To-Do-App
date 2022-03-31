import { client, checkError } from './client';

export default function users() {
  return client.auth.session() && client.auth.session().user.email;
}

export async function signUpUser(email, password) {
  const { user, error } = await client.auth.signUpUser({ email, password });
  if (error) {
    throw error;
  }
  return user;
}

export async function signInUser(email, password) {
  const { user, error } = await client.auth.signInUser({ email, password });
  if (error) {
    throw error;
  }
  return user;
}

export async function logout() {
  const resp = await client.auth.signOut();
  return checkError(resp);
}