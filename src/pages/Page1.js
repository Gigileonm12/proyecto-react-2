import React, { useEffect, useState } from 'react';
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';
import { useDispatch } from 'react-redux';
import { loadTasksFromStorage } from '../redux/todoSlice';

const Page1 = () => {
  
  const style = document.createElement('style');
style.textContent = `
  body {
  background: linear-gradient(135deg, #fdfbfb, #ebedee);
  font-family: 'Segoe UI', sans-serif;
  margin: 0;
  padding: 0;
  color: #333;
  min-height: 100vh;
}

h1 {
  text-align: center;
  font-size: 2.5rem;
  color: #3a3a3a;
  margin-bottom: 30px;
}

.add-todo-form {
  text-align: center;
  margin-bottom: 25px;
}

.add-todo-form input {
  padding: 10px;
  font-size: 1rem;
  width: 300px;
  border-radius: 8px;
  border: 1px solid #ccc;
  margin-right: 10px;
}

.add-todo-form button {
  padding: 10px 20px;
  font-size: 1rem;
  border: none;
  border-radius: 8px;
  background-color: #ffb347;
  color: #fff;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  transition: background-color 0.3s ease;
}

.add-todo-form button:hover {
  background-color: #ffa726;
}

.contenedor-tabla {
  max-width: 800px;
  margin: 0 auto;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.columna h2 {
  text-align: center;
  margin-bottom: 20px;
  color: #555;
  background-color: #f5f5f5;
  padding: 10px;
  border-radius: 10px;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0 20px;
}

li {
  background: #f5f5f5;
  margin-bottom: 10px;
  padding: 10px 15px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
}

li.completada {
  text-decoration: line-through;
  opacity: 0.5;
}

.acciones button {
  margin-left: 10px;
  background-color: #eee;
  color: #555;
  border-radius: 6px;
  border: none;
  padding: 5px 8px;
  cursor: pointer;
}

.acciones button:hover {
  background-color: #ccc;
}

body.modo-oscuro {
  background: linear-gradient(135deg, #121212, #000);
  color: #f0f0f0;
} 

body.modo-oscuro h1 {
  color: #ffffff;
}

body.modo-oscuro .contenedor-tabla {
  background-color: #1e1e1e;
  box-shadow: none;
}

body.modo-oscuro li {
  background-color: #2a2a2a;
  color: #f0f0f0;
  border-bottom: 1px solid #444;
}

body.modo-oscuro .columna h2 {
  background-color: #2c2c2c;
  color: #fff;
}

body.modo-oscuro input,
body.modo-oscuro button {
  background-color: #333;
  color: #fff;
  border: 1px solid #555;
}

body.modo-oscuro .acciones button {
  background-color: #444;
  color: #fff;
}
`;
document.head.appendChild(style);

const dispatch = useDispatch();
  const [modoOscuro, setModoOscuro] = useState(false);

  useEffect(() => {
    dispatch(loadTasksFromStorage());
  }, [dispatch]);

  useEffect(() => {
    document.body.classList.toggle('modo-oscuro', modoOscuro);
  }, [modoOscuro]);

  return (
    <div className="app">
    <h1>🌟 Task Board</h1>
    <AddTodo />
    <TodoList />
  </div>
  );
};

export default Page1;
