import axios from 'axios';

const api = axios.create({
  baseURL: `http://localhost:3020/authentication`,
  withCredentials: true
});

export const signUp = signUpData => {
  console.log(signUpData.photo);
  const body = new window.FormData();
  body.append('name', signUpData.name);
  body.append('password', signUpData.password);
  body.append('email', signUpData.email);
  body.append('photo', signUpData.photo);
  return api.post('/sign-up', body).then(response => response.data);
};

export const signIn = body =>
  api.post('/sign-in', body).then(response => response.data);

export const signOut = () =>
  api.post('/sign-out').then(response => response.data);

export const loadMe = () => api.get('/me').then(response => response.data);
