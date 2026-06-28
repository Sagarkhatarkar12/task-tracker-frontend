import axios from 'axios';

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL 
});

export const getTasks = () => API.get('/tasks');
export const createTask = (newTask) => API.post('/tasks', newTask);
export const updateTask = (id, updatedTask) => API.put(`/tasks/${id}`, updatedTask);
export const deleteTask = (id) => API.delete(`/tasks/${id}`);