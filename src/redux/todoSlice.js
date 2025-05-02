import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = JSON.parse(localStorage.getItem('tareas')) || [];

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.push({ id: uuidv4(), contenido: action.payload, completada: false });
      localStorage.setItem('tareas', JSON.stringify(state));
    },
    toggleTodo: (state, action) => {
      const tarea = state.find((t) => t.id === action.payload);
      if (tarea) {
        tarea.completada = true;
        localStorage.setItem('tareas', JSON.stringify(state));
      }
    },
    deleteTodo: (state, action) => {
      const index = state.findIndex((t) => t.id === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
        localStorage.setItem('tareas', JSON.stringify(state));
      }
    },
    loadTasksFromStorage: () => {
      return JSON.parse(localStorage.getItem('tareas')) || [];
    },
  },
});

export const { addTodo, toggleTodo, deleteTodo, loadTasksFromStorage } = todoSlice.actions;
export default todoSlice.reducer;